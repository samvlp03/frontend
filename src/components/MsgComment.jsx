import PropTypes from 'prop-types';

const MsgComment = ({ username, comment, time, profilepic }) => {
    return (
        <div className="bg-white p-3 rounded-lg shadow-md max-w-md w-full break-words overflow-hidden flex m-2 items-center">
            <div className="h-8 w-8 rounded-full overflow-hidden mr-2">
                <img className="object-cover w-full h-full" src={profilepic} alt="Profile" />
            </div>
            <div>
                <p className="text-xs font-semibold">{username}</p>
                <p className="text-gray-800 text-xs break-words">{comment}</p>
                <p className="text-xs text-gray-500">{time}</p>
            </div>
        </div>

    );
};

MsgComment.propTypes = {
    username: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    profilepic: PropTypes.string.isRequired,
};

export default MsgComment;
