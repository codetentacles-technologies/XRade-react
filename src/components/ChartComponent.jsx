import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  useEffect(() => {
    const data = {
      labels: [],
      datasets: [
        {
          label: "20% Bonus",
          data: [14],
          backgroundColor: "#2850CC",
          borderColor: "#FFFFFF",
          hoverBorderColor: null,
          hoverOffset: 0,
          borderWidth: 15,
          borderRadius: 50,
          cutout: "10%",
          rotation: 0,
          circumference: (ctx) => {
            return (ctx.dataset.data[0] / 12) * 270;
          },
        },
        {
          label: "10% Bonus",
          data: [13],
          backgroundColor: "#28418D",
          borderColor: "#FFFFFF",
          hoverBorderColor: null,
          hoverOffset: 0,
          borderWidth: 15,
          borderRadius: 50,
          cutout: "15%",
          rotation: 0,
          circumference: (ctx) => {
            return (ctx.dataset.data[0] / 12) * 270;
          },
        },
        {
          label: "5% Bonus",
          data: [12],
          backgroundColor: "#051842",
          borderColor: "#FFFFFF",
          hoverBorderColor: null,
          hoverOffset: 0,
          borderWidth: 10,
          borderRadius: 50,
          cutout: "20%",
          rotation: 0,
          circumference: (ctx) => {
            return (ctx.dataset.data[0] / 12) * 270;
          },
        },
      ],
    };

    const config = {
      type: "doughnut",
      data,
      options: {
        responsive: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        animation: {
          animateScale: true,
        },
        hover: {
          mode: null,
        },
      },
    };

    const myChart = new Chart(document.getElementById("myChart"), config);

    return () => myChart.destroy();
  }, []);

  return (
    <div >
          <canvas id="myChart"></canvas>
    </div>
  );
};

export default ChartComponent;