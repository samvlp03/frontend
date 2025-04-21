import activities from '../data/activities.js';
import ActivityItem from './ActivityItem.jsx';
import PropTypes from 'prop-types';

const Activity = ({disorderProp}) => {
  
  const activitiesList = activities[disorderProp];
  
  return (
    <div>
      <div className='flex overflow-x-auto space-x-4 p-4 scrollbar-hide overflow-scroll'>
        {activitiesList?.map((item)=>(
          <ActivityItem key={item.id} activityProp={item} />
        ))}
      </div>
    </div>
  )
}
Activity.propTypes = {
  disorderProp: PropTypes.string.isRequired,
};

export default Activity;
