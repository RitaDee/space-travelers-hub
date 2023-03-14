import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'src/css/MissionsTable.module.css';
import { selectMissions } from 'src/redux/missionsSlice';

import MissionsLabel from './MissionsLabel';
import MissionsButton from './MissionsButton';

function MissionsTable() {
  const missions = useSelector(selectMissions);

  return (
    <table className={styles.table}>
      <colgroup>
        <col className={styles.col1} />
        <col className={styles.col2} />
        <col className={styles.col3} />
        <col className={styles.col4} />
      </colgroup>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id} className={styles.missionRow}>
            <td className={styles.name}>{mission.mission_name}</td>
            <td>
              <p className={styles.description}>{mission.description}</p>
            </td>
            <td className={styles.center}>
              <MissionsLabel isReserved={!!mission.reserved} />
            </td>
            <td className={styles.center}>
              <MissionsButton isReserved={!!mission.reserved} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MissionsTable;
