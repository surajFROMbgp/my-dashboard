import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SystemProcesses from './components/SystemProcesses';
import HealthChart from './components/HealthChart';
import Notifications from './components/Notifications';
import BlockingPieChart from './components/BlockingPieChart';
import './App.css'; // Make sure to create this CSS file for styling

const App = () => (
  <Router>
    <div>
      <nav className="navbar">
        <Link to="/">System Processes</Link>
        <Link to="/health">Health Monitoring</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/blocking">Blocking Chart</Link>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<SystemProcesses />} />
          <Route path="/health" element={<HealthChart />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/blocking" element={<BlockingPieChart />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
