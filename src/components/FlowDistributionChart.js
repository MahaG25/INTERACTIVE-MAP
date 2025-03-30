import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

function FlowDistributionChart() {
  const data = {
    labels: ['Import', 'Export', 'Transit', 'Réparation'],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: [
          '#4a8af4',
          '#5cb85c',
          '#f4a93c',
          '#d9534f'
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      }
    }
  };
  
  return (
    <div className="chart-card">
      <div className="chart-title">Distribution des Flux</div>
      <div className="chart-container">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default FlowDistributionChart;
