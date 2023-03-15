import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/MissionSlice';

const store = configureStore({
  reducer: combineReducers({
    missions: missionReducer,
  }),
});

export default store;
