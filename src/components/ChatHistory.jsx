import ChatHistoryItem from './ChatHistoryItem.jsx';
import { useState } from 'react';

const ChatHistory = () => {
  const [chats, setChats] = useState([
    { id: 1, title: "Login Signup Page Transition" },
    { id: 2, title: "Time and Space Complexity" },
    { id: 3, title: "Overlay Background Image Setup" },
    { id: 4, title: "EquinoxMind AI Workflow Video" },
  ]);

  const handleRename = (index, newTitle) => {
    const updatedChats = [...chats];
    updatedChats[index] = { ...updatedChats[index], title: newTitle };
    setChats(updatedChats);
  };

  const handleDelete = (index) => {
    setChats(chats.filter((_, i) => i !== index));
  };

  return (
    <div className='flex flex-col'>
      <div className="w-[25%] h-[85%] bg-white text-black ml-4 mt-4 rounded p-4 absolute ">
        <h2 className="font-bold mb-2 text-gray-800">Hi Richa</h2>
        <div className="space-y-2">
          {chats.map((chat, index) => (
            <ChatHistoryItem
              key={chat.id}
              title={chat.title}
              onRename={(newTitle) => handleRename(index, newTitle)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatHistory;
