import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const AudioRecorder = ({ onRecordComplete, disabled = false }) => {
  const [recording, setRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioUrl, setAudioUrl] = useState(null);
  const [error, setError] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const autoStopRef = useRef(null);
  const audioRef = useRef(null);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const uploadAudioToBackend = async (audioBlob) => {
    setUploadStatus(null);
    const formData = new FormData();
    formData.append("file", audioBlob, "recording.wav");

    try {
        const response = await fetch("http://localhost:8000/API/upload-audio/", {
            method: "POST",
            body: formData,
        });

        console.log(response);
        const result = await response.json();
        console.log("Upload success:", result.status);
        setUploadStatus("Upload successful!");
    } catch (err) {
        console.error("Audio upload error:", err);
        setUploadStatus("Upload failed. Please try again.");
    }
};

  const startRecording = async () => {
    try {
      setError(null);
      setAudioUrl(null);
      setUploadStatus(null);
      setRecordingTime(0);

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 16000,
        },
      });

      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        if (audioChunksRef.current.length === 0) {
          setError("No audio data recorded.");
          return;
        }
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        onRecordComplete(audioBlob);
        uploadAudioToBackend(audioBlob);
      };

      mediaRecorderRef.current.start(100);
      setRecording(true);

      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);

      autoStopRef.current = setTimeout(() => {
        if (mediaRecorderRef.current?.state === "recording") {
          stopRecording();
        }
      }, 60000);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setError("Microphone access denied. Please enable permissions.");
      setRecording(false);
    }
  };

  const stopRecording = () => {
    if (!mediaRecorderRef.current || mediaRecorderRef.current.state !== "recording") return;

    mediaRecorderRef.current.stop();
    clearInterval(timerRef.current);
    clearTimeout(autoStopRef.current);
    setRecording(false);

    mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
  };

  const handlePlayback = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current?.state === "recording") {
        stopRecording();
      }
      clearInterval(timerRef.current);
      clearTimeout(autoStopRef.current);
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <button
          onClick={recording ? stopRecording : startRecording}
          disabled={disabled}
          className={`px-4 py-2 rounded-md ${
            recording
              ? "bg-red-500 hover:bg-red-600"
              : disabled 
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
          } text-white transition-colors`}
        >
          {recording ? `Stop (${formatTime(recordingTime)})` : "Start Recording"}
        </button>

        {audioUrl && (
          <button
            onClick={handlePlayback}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
          >
            Play Recording
          </button>
        )}
      </div>

      {recording && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
          <span>Recording... (max 60 seconds)</span>
        </div>
      )}

      {audioUrl && (
        <audio ref={audioRef} src={audioUrl} controls className="w-full mt-2">
          <track kind="captions" srcLang="en" label="English captions" />
        </audio>
      )}

      {error && (
        <div className="p-2 bg-red-100 text-red-700 rounded text-sm">
          {error}
        </div>
      )}

      {uploadStatus && (
        <div className={`p-2 rounded text-sm ${uploadStatus.includes("failed") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
          {uploadStatus}
        </div>
      )}
    </div>
  );
};

AudioRecorder.propTypes = {
  onRecordComplete: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default AudioRecorder;
