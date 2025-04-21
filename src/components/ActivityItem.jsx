import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CircleCheckBig } from 'lucide-react';
import { GiTrophy } from "react-icons/gi";
import toast, { Toaster } from 'react-hot-toast';

const ActivityItem = ({ activityProp }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [quote, setQuote] = useState("");

  const storageKey = 'completedActivities';
  console.log(quote);

  const shortQuotes = [
    "👏 You're doing great, keep it up! 👍🏻",
    "🌟 Small steps lead to big results, keep going! ✨",
    "🚀 You're making progress, stay on track!",
    "👣 One step closer, you’ve got this!",
    "💪 Keep pushing, you’re almost there!",
    "🙌 Great job! Every effort counts!",
    "🔥 You’re doing amazing, keep moving forward!",
    "🎯 Stay focused, you're on the right path!",
    "🛤 Success is a journey, not a destination!",
    "✨ You’ve got this, don’t stop now!",
    "🔑 Consistency is key, keep it up!",
    "🏁 One more step, you’re crushing it!",
    "🧠 You're stronger than you think, keep going!",
    "⚡ Every effort counts, you’re doing awesome!",
    "💖 Believe in yourself, you’re doing great!"
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * shortQuotes.length);
    return shortQuotes[randomIndex];
  };

  useEffect(() => {
    if (activityProp?.id) {
      const completed = JSON.parse(localStorage.getItem(storageKey)) || [];
      setIsCompleted(completed.includes(activityProp.id));
    }
  }, [activityProp?.id]);

  // Early return if activityProp is not provided
  if (!activityProp?.id) {
    return null; // or a loading placeholder if you prefer
  }
  
  const handleMarkCompleted = () => {
    if (!activityProp?.id) return;

    const completed = JSON.parse(localStorage.getItem(storageKey)) || [];

    if (!completed.includes(activityProp.id)) {
      completed.push(activityProp.id);
      localStorage.setItem(storageKey, JSON.stringify(completed));
      setIsCompleted(true);

      const randomQuote = getRandomQuote();
      setQuote(randomQuote);

      // Toast for completion
      toast.custom((t) => (
        <div
          className={`
            ${t.visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            transition-all duration-300 transform
            max-w-xs bg-white rounded-md p-4 flex items-center space-x-4 
          `}
        >
          <GiTrophy className="text-yellow-500 shrink-0" size={32} />
          <div className="text-sm text-gray-800 font-medium">
            Congratulations on Completing:{' '}
            <span className="text-[#7b3476] font-semibold">{activityProp.title}</span>
          </div>
        </div>
      ));

      // Toast for motivational quote
      setTimeout(() => {
        toast.custom((t) => (
          <div
            className={`
              ${t.visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
              transition-all duration-300 transform
              max-w-xs bg-white rounded-md p-2 px-4 flex items-center space-x-2 text-gray-800 text-[1rem] font-medium 
            `}
          >
            {randomQuote}
          </div>
        ));
      }, 500);
    }
  };

  return (
    <>
      <div className='bg-white/90 border border-b-white/30 text-gray-800 m-2 rounded-sm min-w-[230px] max-w-[280px] h-[300px] shadow-lg flex flex-col'>
        <img
          src={activityProp.img_url}
          alt={activityProp.title}
          className='border border-b-black border-b w-full h-36 rounded-t-sm'
        />
        <div className='flex-1 p-2'>
          <h3 className='font-semibold mb-1'>{activityProp.title}</h3>
          <p className='text-xs text-gray-600'>{activityProp.description}</p>
        </div>
        <div className='px-2 pb-2 flex justify-end'>
          {!isCompleted ? (
            <button
              onClick={handleMarkCompleted}
              className='p-2 bg-gradient-to-r from-[#7b3476] via-[#36247e] to-[#3d1571] text-white text-sm px-3 py-1 rounded shadow-md transition-all duration-300 ease-in-out hover:bg-[#4b2a6d] cursor-pointer'
            >
              Mark as Completed
            </button>
          ) : (
            <div className='text-green-600 font-semibold text-sm'>
              <CircleCheckBig />
            </div>
          )}
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

ActivityItem.propTypes = {
  activityProp: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ActivityItem;
