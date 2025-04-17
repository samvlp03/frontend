import React from "react";
import PropTypes from "prop-types";

const VideoFeed = ({ videoRef, status, onStart, onStop, onAnalyze }) => {
  return (
    <div className="mt-4 border rounded-xl p-4 shadow-lg">
      <div className="w-full flex justify-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="w-full max-w-lg rounded-lg border"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-3 justify-center">
        <button
          onClick={onStart}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Start Video
        </button>
        <button
          onClick={onStop}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Stop Video
        </button>
        <button
          onClick={onAnalyze}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
        >
          Analyze Visual Emotion
        </button>
      </div>

      {status && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold">
            Detected Emotion: {status.current_emotion}
          </h3>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-2 max-w-md mx-auto">
            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-300"
              style={{ width: `${(status.confidence * 100).toFixed(0)}%` }}
            />
          </div>
          <p className="mt-1 text-sm text-gray-600">
            Confidence: {(status.confidence * 100).toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
};

VideoFeed.propTypes = {
  videoRef: PropTypes.object.isRequired,
  status: PropTypes.shape({
    current_emotion: PropTypes.string,
    confidence: PropTypes.number,
  }),
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onAnalyze: PropTypes.func.isRequired,
};

export default VideoFeed;
