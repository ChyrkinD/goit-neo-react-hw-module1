import styles from './Profile.module.css';

export default function Profile({
    name, tag, location, image, stats :{ followers, views, likes
}}) {
  return (
    <div className={styles.profile}>
      <div className={styles.userInfo}>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.username}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.value}>{followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.value}>{views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
