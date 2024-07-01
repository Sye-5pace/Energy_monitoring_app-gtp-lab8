import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { devices } from '../energy_charts/usage_data'

const { name,type, timeline} = devices[3]
const  device_4Info  = document.getElementById('device-4-info')

const device_4Name = document.createElement('h3').text = name
const device_4Type = document.createElement('p').text = type


device_4Info.classList.add('flex','gap-4')
device_4Info.append(device_4Name) 
device_4Info.append(device_4Type) 


// adding device-4 chart
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

const hourlyEnergyPoints = timeline.hourly.map( point => point.energy_used) 
const weeklyEnergyPoints = timeline.daily.map( point => point.energy_used) 
const monthlyEnergyPoints = timeline.monthly.map( point => point.energy_used) 

  
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
    const  device4Canvas = document.getElementById('device-4-chart').getContext('2d')
    const device4Chart = new Chart(device4Canvas, config);
  
    const updateChart = () =>{
      config.data.labels = energyData[currentView].label;
      config.data.datasets[0].data = energyData[currentView].data;
      config.options.plugins.title.text =energyData[currentView].title
      device4Chart.update();
    }
  
    const buttons = document.querySelectorAll('.time-selector-4 button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        currentView = button.dataset.view;
        updateChart()
      });
    });
    updateChart();
});

