import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { weeklyEnergyPoints,estimatedWeeklyCost } from './usage_data'




const weeklyCanvas = document.getElementById('weekly-chart').getContext('2d')

export const weeklyLabels = [
    'SUN','MON',
    'TUE','WED',
    'THUR','FRI','SAT'
]

const data = {
    labels: weeklyLabels,
    datasets: [{
        label: `Hourly energy used $${estimatedWeeklyCost}`,
        data: weeklyEnergyPoints,
        fill: false,
        pointRadius: 5,
        borderColor: 'rgb(75,192,192)',
        pointBackgroundColor: 'rgba(255, 165, 0, 0.5)',
        pointBorderColor: 'rgba(255, 165, 0, 1)', 
        borderWidth: 2,
        tension: 0.5
    }]
}

const config = {
    type: 'line',
    id: 'weeklyChart',
    data,
    options:{
        reponsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text:'Weekly Energy Used'
            }
        },
        layout: {
            padding: 20
        }        
    }
}

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

export const weeklyChart = new Chart(
    weeklyCanvas,
    config
) 

