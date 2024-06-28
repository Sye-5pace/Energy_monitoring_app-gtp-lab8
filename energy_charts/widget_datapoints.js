import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

// Import data from separate files (optional)
// import { hourlyEnergyPoints, weeklyEnergyPoints, monthlyEnergyPoints } from './usage_data';

const combinedCanvas = document.getElementById('combined-chart');

// Combine data into a single object
const combinedData = {
  labels: [], // Define labels array later
  datasets: [
    {
      label: 'Hourly Energy Used',
      data: /* Replace with your hourly data */, // Access data from separate file or directly
      borderColor: 'rgb(180, 50, 100)',
      pointBackgroundColor: 'rgba(0, 178, 131, 0.5)',
      pointBorderColor: 'rgba(0, 178, 131, 1)',
      borderWidth: 2,
      tension: 0.5,
    },
    {
      label: 'Weekly Energy Used',
      data: /* Replace with your weekly data */, // Access data from separate file or directly
      borderColor: 'rgb(75, 192, 192)',
      pointBackgroundColor: 'rgba(255, 165, 0, 0.5)',
      pointBorderColor: 'rgba(255, 165, 0, 1)',
      borderWidth: 2,
      tension: 0.5,
    },
    {
      label: 'Monthly Energy Used',
      data: /* Replace with your monthly data */, // Access data from separate file or directly
      borderColor: 'rgb(80,250,100)',
      borderWidth: 2,
      tension: 0.5,
    },
  ],
};

// Define labels based on data type (hourly, weekly, monthly)
const defineLabels = (dataType) => {
  // Implement logic to generate labels based on data type (e.g., hourly = hours, weekly = weekdays, monthly = months)
  // This logic will depend on the format of your data
  return [...Array(dataType.data.length).keys()]; // Placeholder for sample labels
};

// Update labels based on data length
combinedData.labels = defineLabels(combinedData.datasets[0]); // Assuming all datasets have same length

const animationOptions = {
  easing: 'easeInOutExpo',
  duration: 1500,
  delay: 500,
};

const config = {
  type: 'line',
  data: combinedData,
  options: {
    responsive: true,
    animation: animationOptions,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Combined Energy Usage',
      },
    },
    scales: {
      xAxes: [{
        stacked: false, 
      }],
    },
  },
};

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

new Chart(combinedCanvas, config);
