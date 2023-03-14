import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/MissionSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

export default store;
