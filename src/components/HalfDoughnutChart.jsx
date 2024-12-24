import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const HalfCircleChart = () => {
  const data = {
    datasets: [
      {
        data: [750000, 1500000, 2000000],
        backgroundColor: ["#90caf9", "#1976d2", "#0d47a1"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    rotation: -90, // Start from top
    circumference: 180, // Half-circle
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }, // Disable tooltips
    },
  };

  return (
    <div className="relative w-full max-w-md mx-auto h-[200px] sm:h-[300px]">
      {/* Main Chart */}
      <Doughnut data={data} options={options} />

      {/* Labels */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-1/2">
        {/* $750,000 Label */}
        <div className="absolute top-[60%] left-[5%] -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white rounded-full p-2 shadow-md text-center text-xs sm:text-sm">
            <p className="font-semibold">$750,000</p>
            <p className="text-gray-500">5% Bonus</p>
          </div>
        </div>

        {/* $1,500,000 Label */}
        <div className="absolute top-[40%] left-[35%] -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white rounded-full p-2 shadow-md text-center text-xs sm:text-sm">
            <p className="font-semibold">$1,500,000</p>
            <p className="text-gray-500">10% Bonus</p>
          </div>
        </div>

        {/* $2,000,000 Label */}
        <div className="absolute top-[20%] left-[70%] -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white rounded-full p-2 shadow-md text-center text-xs sm:text-sm">
            <p className="font-semibold">$2,000,000</p>
            <p className="text-gray-500">20% Bonus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfCircleChart;
