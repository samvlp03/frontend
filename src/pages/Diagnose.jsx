// src/pages/Diagnose.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AudioRecorder from '../components/AudioRecorder';
import VideoFeed from '../components/VideoFeed';
import apiServices from '../services/api';
import { uploadAudio } from '../services/api';

const Diagnose = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [audioBlob] = useState(null);
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const navigate = useNavigate();

  const handleToggleCamera = () => {
    setIsCameraOn(prev => !prev);
  };

  const handleAudioStop = async (audioBlob) => {
    try {
      const result = await uploadAudio(audioBlob);
      console.log('Uploaded to backend:', result);
    } catch (err) {
      console.error('Error uploading audio:', err);
    }
  };

  const handleDiagnosis = async () => {
    if (!audioBlob) {
      alert("Please record your audio first.");
      return;
    }

    setIsDiagnosing(true);
    const formData = new FormData();
    formData.append('audio', audioBlob);

    if (isCameraOn) {
      await apiServices.startVideoProcessing();
    }

    try {
      await apiServices.analyzeAudioAndText(formData);
      if (isCameraOn) await apiServices.stopVideoProcessing();
      navigate('/dashboard');
    } catch (error) {
      console.error('Diagnosis error:', error);
    } finally {
      setIsDiagnosing(false);
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold">Start Diagnosis</h1>

      <div className="space-y-4">
        <AudioRecorder onRecordComplete={handleAudioStop} />

        <button 
        onClick={handleToggleCamera} 
        className="btn-primary px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer">
          {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
        </button>

        {isCameraOn && <VideoFeed />}
        <br/>
        <button onClick={handleDiagnosis} className="btn-accent bg-emerald-600 p-2  rounded-sm text-white cursor-pointer" disabled={isDiagnosing}>
          {isDiagnosing ? "Analyzing..." : "Submit for Diagnosis"}
        </button>
      </div>
    </div>
  );
};

export default Diagnose;
