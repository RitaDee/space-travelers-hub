import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/MissionSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});

export default store;
