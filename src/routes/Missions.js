// import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/mission/MissionSlice';

const Mission = () => {
  // const dispatch = useDispatch();
  // const status = useSelector((state) => state.missions.status);
  const missions = useSelector((state) => state.missions.list);
  console.log(missions);
  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(fetchMissions());
  //   }
  // }, [status, dispatch]);
  // const missionHandler = (e) => {
  //   dispatch(joinMission(e.target.id));
  // };

  return (
    <div className="px-5 pr-5">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody>
          {
        missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td className="fw-bold" style={{ width: '10%' }}>
              <div className="d-flex flex-column flex-md-row">
                <span className="me-md-2">Mission:</span>
                <span>{mission.mission_name}</span>
              </div>
            </td>
            <td style={{ width: '45%' }}>
              <div className="d-flex flex-column flex-md-row">
                <span className="me-md-2">Description:</span>
                <span>{mission.description}</span>
              </div>
            </td>
            <td className="text-center align-middle" style={{ width: '5%' }}>
              <Badge bg={mission.reserved ? ('info') : ('secondary')}>
                {mission.reserved ? ('Active Member') : ('NOT A MEMBER')}
              </Badge>
            </td>
            <td className="text-center align-middle" style={{ width: '10%' }}>
              <Button
                id={mission.mission_id}
                variant={mission.reserved ? ('outline-danger') : ('outline-secondary')}
                size="md"
                // onClick={missionHandler}
              >
                {mission.reserved ? ('Leave Misson') : ('Join Misson')}
              </Button>
            </td>
          </tr>
        ))
      }
        </tbody>
      </Table>
    </div>

  );
};

export default Mission;
