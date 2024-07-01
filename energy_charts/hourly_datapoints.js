import { Chart, LineController,LineElement, PointElement,LinearScale,Title, CategoryScale } from 'chart.js'
import { hourlyEnergyPoints,estimatedHourlyCost } from './usage_data'
import { animationOptions } from './weekly_datapoints'

const hourlyCanvas = document.getElementById('hourly-chart').getContext('2d')

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);


const hourlyLabels = [];
for (let hour = 0; hour < 24; hour++) {
  const formattedHour = hour.toString().padStart(2, '0'); 
  hourlyLabels.push(`${formattedHour}:00`);
}

const data = {
    labels: hourlyLabels,
    datasets: [{
        label: `Hourly energy used $ ${estimatedHourlyCost}`,
        data: hourlyEnergyPoints,
        fill: false,
        borderColor: 'rgb(180,50,100)',
        pointBackgroundColor: 'rgba(0, 178, 131, 0.5)',
        pointBorderColor: 'rgba(0, 178, 131, 1)',
        borderWidth: 2,
        tension: 0.5
    }]
}

const config = {
    type: 'line',
    id: 'hourlyChart',
    data,
    options:{
        reponsive: true,
        animation: animationOptions,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text:'Hourly Energy Used'
            }
        },
        layout: {
            padding: 20
        } 
    }
}

export const hourlyChart = new Chart(
    hourlyCanvas,
    config
)