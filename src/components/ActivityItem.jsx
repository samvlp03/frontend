
import PropTypes from 'prop-types';

const ActivityItem = ({ activityProp }) => {

  
  return (
    <div className='bg-white/90 border border-b-white/30 text-gray-800 m-2 rounded-sm min-w-[230px] max-w-[280px] h-[250px] cursor-pointer shadow-lg'>
      <img src={activityProp.img_url} alt={activityProp.title} className='border border-b-black border-b w-full h-32 rounded-t-sm' />
      <div className='p-2 items-center justify-center overflow-hidden'>
        <h3 className='font-semibold mb-1'>{activityProp.title}</h3>
        <p className='text-xs text-gray-600'>{activityProp.description}</p>
      </div>
    </div>
  );
};

ActivityItem.propTypes = {
  activityProp: PropTypes.shape({
    img_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ActivityItem;

