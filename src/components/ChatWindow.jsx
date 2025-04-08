import React, { useState, useEffect, useRef } from 'react';
import api from '../services/api';
import { FaMicrophone, FaStopCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ChatWindow = ({ emotionData }) => {
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [audioLevel, setAudioLevel] = useState(0);
  const [recordingTime, setRecordingTime] = useState(0);
  
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const analyserRef = useRef(null);
  const audioContextRef = useRef(null);
  const timerRef = useRef(null);
  const animationRef = useRef(null);

  const startRecording = async () => {
    try {
      audioChunksRef.current = [];
      setRecordingTime(0);
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      
      // Set up audio context for visualization
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      analyserRef.current = audioContextRef.current.createAnalyser();
      source.connect(analyserRef.current);
      
      // Update audio level for visualization
      const updateAudioLevel = () => {
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);
        const level = Math.max(...dataArray) / 255;
        setAudioLevel(level);
        animationRef.current = requestAnimationFrame(updateAudioLevel);
      };
      updateAudioLevel();
      
      // Handle recording data
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      
      mediaRecorderRef.current.onstop = async () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        await processAudio(audioBlob);
      };
      
      // Start recording
      mediaRecorderRef.current.start(100); // Collect data every 100ms
      setIsRecording(true);
      
      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
      
    } catch (error) {
      console.error('Error accessing microphone:', error);
      handleAudioError(error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const handleAudioError = (error) => {
    let errorMessage = 'Could not access microphone';
    if (error.name === 'NotAllowedError') {
      errorMessage = 'Microphone access was denied. Please enable microphone permissions.';
    } else if (error.name === 'NotFoundError') {
      errorMessage = 'No microphone found. Please connect a microphone.';
    }
    
    setMessages(prev => [...prev, {
      text: errorMessage,
      sender: 'system',
      id: Date.now()
    }]);
    setIsRecording(false);
  };

  const processAudio = async (audioBlob) => {
    try {
      const userMessage = { text: "Processing voice input...", sender: 'user', id: Date.now() };
      setMessages(prev => [...prev, userMessage]);

      // Convert audio to base64 for sending to backend
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = async () => {
        const base64Audio = reader.result.split(',')[1];
        
        // Send audio for analysis
        const response = await api.analyzeAudioAndText({
          audio_data: base64Audio,
          audio_format: 'wav',
          ...(emotionData && { visual_emotion: emotionData.emotion })
        });

        setAnalysisResult(response.data);

        // Update user message with transcribed text
        const updateUserMessage = (messages, processedText) => {
          return messages.map(msg => msg.text === "Processing voice input..." ? { text: processedText, sender: 'user' } : msg
          );
        };

        setMessages(prev => updateUserMessage(prev, response.data.text_analysis.processed_text));

        const aiMessage = { 
          text: `Based on your input, I detect ${response.data.text_analysis.prediction} with ${Math.round(response.data.text_analysis.confidence * 100)}% confidence.`,
          sender: 'ai',
          id: Date.now()
        };
        setMessages(prev => [...prev, aiMessage]);
      };
    } catch (error) {
      console.error('Error processing audio:', error);
      const errorMessage = { 
        text: 'Sorry, I encountered an error processing your voice input.',
        sender: 'ai'
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);


  return (
    <>
      <div>
        {messages.map((msg, index) => (
          <div key={msg.id || msg.timestamp || Math.random()} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${
              msg.sender === 'user' 
                ? 'bg-blue-500 text-white rounded-br-none' 
                : 'bg-gray-300 text-black rounded-bl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200 bg-white">
      <div className="flex flex-col items-center">
        <button
          onMouseDown={startRecording}
          onMouseUp={stopRecording}
          onTouchStart={startRecording}
          onTouchEnd={stopRecording}
          className={`flex items-center justify-center w-full py-3 px-6 rounded-full shadow-md transition-all ${
            isRecording 
              ? 'bg-red-500 text-white transform scale-105' 
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isRecording ? (
            <>
              <FaStopCircle className="mr-2 animate-pulse" />
              <span>Recording ({recordingTime}s)</span>
              <div 
                className="ml-2 w-3 h-3 rounded-full bg-white opacity-80"
                style={{ transform: `scale(${1 + audioLevel * 2})` }}
              />
            </>
          ) : (
            <>
              <FaMicrophone className="mr-2" />
              <span>Hold to Speak</span>
            </>
          )}
        </button>
        
        {isRecording && (
          <div className="w-full mt-2 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all"
              style={{ width: `${audioLevel * 100}%` }}
            />
          </div>
        )}
      </div>
      {analysisResult && (
        <div className="p-4 bg-gray-100 border-t border-gray-200">
          <h3 className="font-bold text-gray-700 mb-2">Analysis Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-600">Text Analysis</h4>
              <p>Transcribed: {analysisResult.text_analysis.processed_text}</p>
              <p>Diagnosis: {analysisResult.text_analysis.prediction}</p>
              <p>Confidence: {Math.round(analysisResult.text_analysis.confidence * 100)}%</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h4 className="font-semibold text-blue-600">Voice Analysis</h4>
              <p>Emotion: {analysisResult.audio_analysis.prediction}</p>
              <p>Confidence: {Math.round(analysisResult.audio_analysis.confidence * 100)}%</p>
              <p>Arousal: {analysisResult.audio_analysis.arousal > 0 ? 'High' : 'Low'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  </>
  );
};
ChatWindow.propTypes = {
  emotionData: PropTypes.shape({
    emotion: PropTypes.string,
  }),
};

export default ChatWindow;
