import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // 📌 At the top
import PropTypes from 'prop-types';
import apiServices from '../services/apiServices';
import { useAuth } from '../context/AuthContext';



const ChatWindow = ({ emotionData }) => {
  const [messages, setMessages] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [reportStatus, setReportStatus] = useState(null);
  const { user } = useAuth();


  const sendTextForAnalysis = async () => {
    if (!textInput.trim()) return;

    const userMessage = { text: textInput, id: user.id, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setTextInput('');

    try {
      const res = await apiServices.analyzeChatText({ text: textInput.trim(), id: user.id });
      console.log(res.data);
      const aiMessage = {
        text: `Diagnosis: ${res.data.summary} (Report ID: ${res.data.report_id})`,
        sender: 'ai',
        id: Date.now()
      };
      setMessages(prev => [...prev, aiMessage]);
      setReportStatus(`Report saved. ID: ${res.data.report_id}`);
    } catch (err) {
      console.error("Chat diagnosis failed:", err);
      setMessages(prev => [...prev, {
        text: 'Error analyzing your message. Please try again.',
        sender: 'ai',
        id: Date.now()
      }]);
    }
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    sendTextForAnalysis();
  };

  return (
    <>
      <div className="space-y-2">
        {messages.map((msg) => (
          <div key={msg.id || Math.random()} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-lg px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-300 text-black rounded-bl-none'
              }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleTextSubmit} className="flex items-center gap-2 mt-4 px-2">
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Type a message"
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full flex items-center justify-center shadow-md"
        >
          <FaPaperPlane />
        </button>
      </form>

      {reportStatus && (
        <p className="mt-2 text-sm text-green-600 font-semibold">{reportStatus}</p>
      )}
    </>
  );
};

ChatWindow.propTypes = {
  emotionData: PropTypes.shape({
    emotion: PropTypes.string,
  }),
};

export default ChatWindow;
