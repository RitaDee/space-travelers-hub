import React from 'react';
import { useSelector } from 'react-redux';
import { filterReservedRockets } from '../redux/rockets/rocketsSlice';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const reservedRockets = useSelector(filterReservedRockets);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h2 className={styles.title}>My Rockets</h2>
        <ul className={styles.list}>
          {reservedRockets.map((e) => (
            <li key={e.rocket_id} className={styles.listItem}>
              {e.rocket_name}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Profile;
