import { Chart, PieController, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { weeklyEnergyPoints, monthlyEnergyPoints, hourlyEnergyPoints } from './usage_data';

const weeklyLabels = [
  'SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'
];

const hourlyLabels = [];
for (let hour = 0; hour < 24; hour++) {
  const formattedHour = hour.toString().padStart(2, '0'); 
  hourlyLabels.push(`${formattedHour}:00`);
}

const monthlyLabels = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

const energyData = {
  hourly: {
    title: 'Energy used hourly(kW)',
    label: hourlyLabels,
    data: hourlyEnergyPoints
  },
  weekly: {
    title: 'Energy used weekly(kW)',
    label: weeklyLabels,
    data: weeklyEnergyPoints
  },
  monthly: {
    title: 'Energy used monthly(kW)',
    label: monthlyLabels,
    data: monthlyEnergyPoints
  }
};

let currentView = 'weekly';

Chart.register(PieController, ArcElement, Title, Tooltip, Legend);

const data = {
  labels: energyData[currentView].label,
  datasets: [
    {
      label: 'Energy Used',
      data: energyData[currentView].data,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(201, 203, 207)',
        'rgb(255, 99, 71)',
        'rgb(60, 179, 113)',
        'rgb(255, 165, 0)',
        'rgb(106, 90, 205)',
        'rgb(70, 130, 180)',
        'rgb(255, 218, 185)',
        'rgb(220, 20, 60)',
        'rgb(0, 191, 255)',
        'rgb(123, 104, 238)',
        'rgb(255, 215, 0)',
        'rgb(100, 149, 237)',
        'rgb(255, 228, 181)',
        'rgb(210, 105, 30)',
        'rgb(240, 128, 128)',
        'rgb(144, 238, 144)',
        'rgb(255, 160, 122)',
        'rgb(32, 178, 170)'
      ],
      hoverOffset: 4
    }
  ]
};

const config = {
  type: 'pie',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Energy used'
      }
    },
    layout: {
      padding: 20
    }
  }
};

document.addEventListener("DOMContentLoaded", function() {
  const combinedCanvas = document.getElementById('combined-charts').getContext('2d');
  const combinedChart = new Chart(combinedCanvas, config);

  const updateChart = () => {
    config.data.labels = energyData[currentView].label;
    config.data.datasets[0].data = energyData[currentView].data;
    config.options.plugins.title.text = energyData[currentView].title;
    combinedChart.update();
  };

  const buttons = document.querySelectorAll('.time-selector button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      currentView = button.dataset.view;
      updateChart();
    });
  });

  updateChart();
});
