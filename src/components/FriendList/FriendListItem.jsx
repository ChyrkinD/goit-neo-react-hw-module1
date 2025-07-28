import styles from './FriendListItem.module.css';

export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <div className={styles.friendListItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
