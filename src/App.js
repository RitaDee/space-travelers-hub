import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './routes/Missions';
import Profile from './routes/Profile';
import RocketLists from './routes/RocketLists';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<RocketLists />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
