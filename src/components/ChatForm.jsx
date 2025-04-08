import { useState } from "react";
import { SendHorizonalIcon } from "lucide-react";

export default function ChatForm() {
  const [input, setInput] = useState("");

  return (
    <div className="flex items-center w-full max-w-2xl p-3 border rounded-3xl shadow-lg bg-gray-800 absolute bottom-[4%] left-[50%] translate-x-[-50%] ">

      <input
        type="text"
        placeholder="Start your session by sending a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow outline-none text-white bg-transparent px-3 text-sm"
      />

      <button className="p-2 bg-black text-white rounded-full">
        <SendHorizonalIcon size={20} />
      </button>
    </div>
  );
}
