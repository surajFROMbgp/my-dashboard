// src/components/SystemProcesses.jsx
import { useState, useEffect } from 'react';
import './SystemProcesses.css'; // Import the CSS file

const SystemProcesses = () => {
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    // Fetch or generate dummy data for processes
    setProcesses([
      { id: 1, name: 'Suraj', status: 'Running' },
      { id: 2, name: 'Manish', status: 'Stopped' },
      // Add more processes as needed
    ]);
  }, []);

  return (
    <div className="container">
      <div>
        <h2>System Processes</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {processes.map(process => (
              <tr key={process.id}>
                <td>{process.id}</td>
                <td>{process.name}</td>
                <td>{process.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemProcesses;
