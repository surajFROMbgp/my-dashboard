// src/components/BlockingPieChart.jsx

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './BlockingPieChart.css'; // Import the CSS file

ChartJS.register(ArcElement, Tooltip, Legend);

const BlockingPieChart = () => {
  const data = {
    labels: ['Blocked', 'Allowed', 'Pending'],
    datasets: [
      {
        data: [300, 50, 100], // Replace with real data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverOffset: 4,
      }
    ],
  };

  return (
    <div className="chart-container">
      <div>
        <h2 style={{marginLeft:'50px'}}>Blocking Activities</h2>
        <div className="pie-chart">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default BlockingPieChart;
