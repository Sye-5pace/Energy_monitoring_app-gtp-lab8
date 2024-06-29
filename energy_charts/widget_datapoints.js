import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { weeklyEnergyPoints, monthlyEnergyPoints, hourlyEnergyPoints } from './usage_data'

const weeklyLabels = [
  'SUN','MON',
  'TUE','WED',
  'THUR','FRI','SAT'
]



const hourlyLabels = [];
for (let hour = 0; hour < 24; hour++) {
  const formattedHour = hour.toString().padStart(2, '0'); 
  hourlyLabels.push(`${formattedHour}:00`);
}

const monthlyLabels = [
  "JAN", "FEB", "MAR", 
  "APR", "MAY", "JUN", "JUL", 
  "AUG", "SEP", "OCT", 
  "NOV", "DEC"
];

const energyData = {
  hourly: {
    title:'Energy used hourly(kW)',
    label: hourlyLabels,
    data: hourlyEnergyPoints
  },
  weekly: {
    title:'Energy used weekly(kW)',
    label: weeklyLabels,
    data: weeklyEnergyPoints
  },
  monthly: {
    title:'Energy used monthly(kW)',
    label: monthlyLabels,
    data: monthlyEnergyPoints
  }
}

let currentView = 'weekly';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const data= {
  labels: energyData[currentView].label,
  datasets: [
    {
      label: 'Energy Used',
      data: energyData[currentView].data,
      fill: false,
      pointRadius: 5,
      borderColor: 'rgb(75,192,192)',
      pointBackgroundColor: 'rgba(255, 165, 0, 0.5)',
      pointBorderColor: 'rgba(255, 165, 0, 1)',
      borderWidth: 2,
      tension: 0.5
    }
  ]
}

const config = {
  type: 'line',
  id: 'combinedChart',
  data,
  options:{
      reponsive: true,
      animation: {
        easing: 'easeInOutExpo',
        duration: 1500,
        delay: 500,
        tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
        }
      },
      plugins: {
          legend: {
              position: 'top'
          },
          title: {
              display: true,
              text:'Energy used'
          }
      },
      layout: {
          padding: 20
      }        
  }
}





document.addEventListener("DOMContentLoaded", function() {
  const  combinedCanvas = document.getElementById('combined-charts').getContext('2d')
  const combinedChart = new Chart(combinedCanvas, config);

  const updateChart = () =>{
    config.data.labels = energyData[currentView].label;
    config.data.datasets[0].data = energyData[currentView].data;
    config.options.plugins.title.text =energyData[currentView].title
    combinedChart.update();
  }

  const buttons = document.querySelectorAll('.time-selector button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      currentView = button.dataset.view;
      updateChart()
    });
  });
  updateChart();
});