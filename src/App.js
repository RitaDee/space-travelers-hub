import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Missions from './routes/Missions';
import Profile from './routes/Profile';
import RocketLists from './routes/RocketLists';

import { fetchMissions } from './redux/mission/MissionSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketLists />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
