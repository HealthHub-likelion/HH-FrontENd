import './App.css';
import {Routes, Route} from 'react-router-dom';
import FeedsPage from './pages/FeedsPage';
import FollowsPage from './pages/FollowsPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RecordsPage from './pages/RecordsPage';
import SettingsPage from './pages/SettingsPage';
import SignupPage from './pages/SignupPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<IndexPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/:username" element={<UserPage/>}/>
        <Route path="/:username/feeds" element={<FeedsPage/>}/>
        <Route path="/:username/follow" element={<FollowsPage/>}/>
        <Route path="/:username/records" element={<RecordsPage/>}/>
        <Route path="/:username/settings" element={<SettingsPage/>}/>
        <Route path="*" element={<div>404</div>}/>
      </Routes>
    </div>
  );
}

export default App;