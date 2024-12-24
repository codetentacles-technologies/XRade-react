import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const MultiLayerDoughnutChart = () => {
  // Data for each layer
  const data = {
    labels: ['Layer 1', 'Layer 2', 'Layer 3'],
    datasets: [
      // Layer 1
      {
        label: 'Layer 1',
        data: [70, 30, 0], // This will fill the first layer (70% filled, others empty)
        backgroundColor: '#2850CC', // Red
        borderWidth: 0, // No border for inner layers
        radius: '80%', // First layer (inner-most)
        circumference: 180, // First half of the circle
        rotation: 0, // Starts at top
      },
      // Layer 2
      {
        label: 'Layer 2',
        data: [50, 50, 0], // This will fill the second layer
        backgroundColor: '#28418D', // Green
        borderWidth: 0,
        radius: '90%', // Second layer
        circumference: 180, // Second half of the circle
        rotation: 180, // Starts at the bottom
      },
      // Layer 3
      {
        label: 'Layer 3',
        data: [30, 60, 10], // Third layer
        backgroundColor: '#031641', // Blue
        borderWidth: 0,
        radius: '100%', // Outer layer
        circumference: 180,
        rotation: 270, // Starts at the left
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
          // Customize tooltip to show specific data
          label: (tooltipItem) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div>
      <h2>Multi-Layer Doughnut Chart</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default MultiLayerDoughnutChart;
