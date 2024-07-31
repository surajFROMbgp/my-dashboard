// src/components/HealthChart.jsx

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';

// Register necessary components for the chart
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);

const HealthChart = () => {
  // Create dummy data to represent system metrics over time
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    datasets: [
      {
        label: 'CPU Usage (%)',
        data: [70, 65, 75, 80, 60, 85, 90], // Example CPU usage data
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: 'Memory Usage (%)',
        data: [50, 55, 60, 65, 70, 75, 80], // Example Memory usage data
        borderColor: 'rgba(54,162,235,1)',
        backgroundColor: 'rgba(54,162,235,0.2)',
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: 'Disk Usage (%)',
        data: [30, 35, 40, 45, 50, 55, 60], // Example Disk usage data
        borderColor: 'rgba(255,206,86,1)',
        backgroundColor: 'rgba(255,206,86,0.2)',
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 10,
      },
      {
        label: 'Network Activity (MB/s)',
        data: [20, 22, 25, 30, 28, 32, 35], // Example Network activity data
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += `${context.parsed.y} ${context.dataset.label === 'Network Activity (MB/s)' ? 'MB/s' : '%'}`;
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Usage',
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div>
      <h2>System Health</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default HealthChart;
