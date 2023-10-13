import PropTypes from 'prop-types';

const FriendListItem = ({ friend }) => {
  return (
    <li className="item">
      <span
        className={`status ${friend.isOnline ? 'online' : 'offline'}`}
      ></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
