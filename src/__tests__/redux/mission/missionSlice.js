import { configureStore } from '@reduxjs/toolkit';
import reducer, {
  missionUpdated,
  fetchMissions,
} from '../../../redux/mission/MissionSlice';

const mission = {
  mission_id: '1',
  mission_name: 'Mission 1',
  description: 'Description 1',
  reserved: false,
};

describe('missionsSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        missions: reducer,
      },
    });
    fetch.resetMocks();
  });

  it('should fetch the missions and update the store', async () => {
    fetch.mockResponseOnce(JSON.stringify([mission]));
    await store.dispatch(fetchMissions());

    const { missions } = store.getState();

    expect(missions.list).toEqual([mission]);
  });

  it('should update mission from the store using mission id', async () => {
    fetch.mockResponseOnce(JSON.stringify([mission]));
    await store.dispatch(fetchMissions());

    const id = store.getState().missions.list[0].mission_id;
    store.dispatch(missionUpdated(id));

    const { missions } = store.getState();
    expect(missions.list[0].reserved).toEqual(true);
  });
});
