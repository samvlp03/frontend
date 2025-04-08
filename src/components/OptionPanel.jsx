import { useState } from "react";
import { Mic, MicOff, Video, VideoOff } from "lucide-react";

const OptionPanel = () => {
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(false);

  return (
    <div className="flex gap-4 w-[25%] mt-4 py-6 px-10 border rounded-md shadow-lg bg-white absolute bottom-[2.3%] ml-4  " >
      {/* Voice Button */}
      <button
        onClick={() => setVoiceEnabled(!voiceEnabled)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 
          ${voiceEnabled ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
      >
        {voiceEnabled ? <Mic size={20} /> : <MicOff size={20} />}
        {voiceEnabled ? "Voice On" : "Voice Off"}
      </button>

      {/* Video Button */}
      <button
        onClick={() => setVideoEnabled(!videoEnabled)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 
          ${videoEnabled ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
      >
        {videoEnabled ? <Video size={20} /> : <VideoOff size={20} />}
        {videoEnabled ? "Video On" : "Video Off"}
      </button>
    </div>
  );
};

export default OptionPanel;
