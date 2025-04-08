import { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import PropTypes from "prop-types";

const ChatHistoryItem = ({ title, onRename, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleRename = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onRename(newTitle);
  };

  return (
    <div className="relative flex items-center justify-between p-2 px-4 rounded-lg  transition text-white cursor-pointer hover:bg-gray-300">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          className="bg-transparent border-b border-gray-400 outline-none text-gray-800/30"
        />
      ) : (
        <span className="text-black">{title}</span>
      )}

      <div className="flex gap-2 opacity-0 hover:opacity-100 transition">
        <Pencil size={16} className="text-gray-800 cursor-pointer" onClick={handleRename} />
        <Trash size={16} className="text-red-700 cursor-pointer" onClick={onDelete} />
      </div>
    </div>
  );
};
ChatHistoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  onRename: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};


export default ChatHistoryItem;
