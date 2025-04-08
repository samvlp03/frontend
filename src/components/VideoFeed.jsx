import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const VideoFeed = ({ status }) => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    const startVideo = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: 'user' 
          } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          setStream(mediaStream);
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startVideo();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="relative h-full w-full bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="h-full w-full object-cover"
      />
      
      {status?.current_emotion && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3">
          <div className="flex justify-between items-center">
            <span className="font-medium">Detected Emotion:</span>
            <span className="font-bold capitalize">{status.current_emotion}</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
            <div 
              className="bg-blue-500 h-1.5 rounded-full" 
              style={{ width: `${Math.min(100, status.confidence * 100)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

VideoFeed.propTypes = {
  status: PropTypes.shape({
    current_emotion: PropTypes.string,
    confidence: PropTypes.number,
  }),
};

export default VideoFeed;
