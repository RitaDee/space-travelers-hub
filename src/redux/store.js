import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/MissionSlice';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: combineReducers({
    missions: missionReducer,
    rockets: rocketsReducer,
  }),
});

export default store;
