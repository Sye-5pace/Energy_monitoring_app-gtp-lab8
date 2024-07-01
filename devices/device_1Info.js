import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { devices } from '../energy_charts/usage_data'

const { name,type,timeline} = devices[0]

const  device_1Info  = document.getElementById('device-1-info')

const device_1Name = document.createElement('h3').text = name
const device_1Type = document.createElement('p').text = type


device_1Info.classList.add('flex','gap-4')
device_1Info.append(device_1Name) 
device_1Info.append(device_1Type) 



// adding device-1 chart
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

const hourlyEnergyPoints = timeline.hourly.map(point => point.energy_used);
const weeklyEnergyPoints = timeline.daily.map(point => point.energy_used);
const monthlyEnergyPoints = timeline.monthly.map(point => point.energy_used);


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
    const  device1Canvas = document.getElementById('device-1-chart').getContext('2d')
    const  device1Chart = new Chart(device1Canvas, config);
    
  
    const updateChart = () =>{
      config.data.labels = energyData[currentView].label;
      config.data.datasets[0].data = energyData[currentView].data;
      config.options.plugins.title.text =energyData[currentView].title
      device1Chart.update();
    }
  
    const buttons = document.querySelectorAll('.time-selector-1 button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        currentView = button.dataset.view;
        updateChart()
      });
    });
    updateChart();
});

