import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AudioRecorder from "../components/AudioRecorder";
import apiServices from "../services/apiServices";
import api from "../services/api";
import VideoFeed from "../components/VideoFeed";
import ChatWindow from "../components/ChatWindow";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext";

const Diagnose = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState("Neutral");
  const [confidence, setConfidence] = useState(0);
  const [audioFileName, setAudioFileName] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [useChatOnly, setUseChatOnly] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  console.log(audioFileName)

  const handleToggleCamera = () => {
    setIsCameraOn((prev) => !prev);
  };

  const handleAudioRecordComplete = (audioBlob, filename) => {
    setAudioFileName(filename);
    setAudioBlob(audioBlob);
  };

  const handleStartVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setTimeout(() => {
          console.log("Camera ready");
        }, 500);
      }
    } catch (err) {
      console.error("Error starting camera:", err);
    }
  };

  const handleStopVideo = async () => {
    try {
      if (videoRef.current?.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    } catch (err) {
      console.error("Error stopping camera:", err);
    }
  };

  const handleAnalyzeVisual = async () => {
    try {
      const videoElement = videoRef.current;
      if (!videoElement || videoElement.readyState < 2) {
        toast.error("Video not ready for capture.");
        return;
      }

      const canvas = document.createElement("canvas");
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

      const base64Image = canvas.toDataURL("image/jpeg");
      if (!base64Image.includes("base64,")) {
        toast.error("Image format invalid. Please try again.");
        return;
      }

      const res = await apiServices.analyzeVisual({ image: base64Image });

      setCurrentEmotion(res.visual_emotion || "Neutral");
      setConfidence((res.confidence || 0) / 100);
    } catch (err) {
      console.error("Visual analysis error", err);
      toast.error("Failed to analyze visual emotion.");
    }
  };

  const handleDiagnosis = async () => {
    if (!audioBlob) {
      alert("Please record your audio first.");
      return;
    }

    setIsDiagnosing(true);
    try {
      if (isCameraOn) await handleStartVideo();

      const formData = new FormData();
      formData.append("file", audioBlob, "recording.webm");

      const uploadResponse = await api.post("/upload-audio/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { filename } = uploadResponse.data;
      const analysisResponse = await apiServices.analyzeUploadedAudio(filename);

      const { audio_analysis, text_analysis } = analysisResponse.data;

      const visual_analysis = {
        prediction: currentEmotion,
        confidence: confidence * 100,
      };

      const confSources = [
        audio_analysis?.confidence * 100 || 0,
        text_analysis?.confidence * 100 || 0,
        visual_analysis?.confidence * 100 || 0,
      ].filter((c) => c > 0);

      const averageConfidence = confSources.length
        ? confSources.reduce((sum, val) => sum + val, 0) / confSources.length
        : 0;

      const payload = {
        user_id: user.id,
        diagnosis: text_analysis?.prediction || "Healthy",
        confidence: averageConfidence.toFixed(2),
        text_analysis,
        audio_analysis,
        visual_analysis,
      };

      await apiServices.saveAnalysis(payload);
      toast.success("Diagnosis complete. Report added to dashboard.");
      navigate("/dashboard");
    } catch (error) {
      console.error("Diagnosis failed:", error);
      alert("An error occurred during diagnosis. Please try again.");
    } finally {
      setIsDiagnosing(false);
      if (isCameraOn) await handleStopVideo();
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold">Start Diagnosis</h1>

      <div className="flex justify-start">
        <button
          onClick={() => setUseChatOnly((prev) => !prev)}
          className={`px-6 py-2 rounded-md text-sm font-semibold shadow-sm transition-all duration-300 ${
            useChatOnly
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {useChatOnly ? "Chat Mode Enabled" : "Enable Chat Mode"}
        </button>
      </div>

      {useChatOnly ? (
        <div className="mt-4">
          <ChatWindow />
        </div>
      ) : (
        <div className="space-y-8 my-12 ">
          <AudioRecorder
            onRecordComplete={handleAudioRecordComplete}
            disabled={isDiagnosing}
          />

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={handleToggleCamera}
              className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
            >
              {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
            </button>

            <button
              onClick={handleDiagnosis}
              className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition"
              disabled={isDiagnosing}
            >
              {isDiagnosing ? "Analyzing..." : "Submit for Diagnosis"}
            </button>
          </div>

          {isCameraOn && (
            <VideoFeed
              videoRef={videoRef}
              currentEmotion={currentEmotion}
              confidence={confidence}
              onStart={handleStartVideo}
              onStop={handleStopVideo}
              onAnalyze={handleAnalyzeVisual}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Diagnose;
