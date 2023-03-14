import { configureStore } from '@reduxjs/toolkit';
import missionsSlice, { missionsSlice } from './mission/MissionSlice';

const store = configureStore({
  reducer: {
    mission: missionsSlice,
  },
});

export default store;
