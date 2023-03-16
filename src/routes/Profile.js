import React from 'react';
import { useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
import { filterReservedMissions } from '../redux/missions/missionsSlice';
import { filterReservedRockets } from '../redux/rockets/rocketsSlice';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const reservedRockets = useSelector(filterReservedRockets);
  const missions = useSelector(filterReservedMissions);
  const reservedMissions = missions ? missions.filter((mission) => mission.reserved === true) : [];
  return (
    <main className={styles.main}>
      <section className={styles.section}>
      <h2 className={styles.title}>My Missions</h2>
      <ul className={styles.list}>
        {missions.map((mission) => (
          <li key={mission.id} className={styles.listItem}>
            {mission.name}
          </li>
        ))}
      </ul>
    </section>
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
