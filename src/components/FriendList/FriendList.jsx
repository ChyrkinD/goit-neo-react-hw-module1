import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
