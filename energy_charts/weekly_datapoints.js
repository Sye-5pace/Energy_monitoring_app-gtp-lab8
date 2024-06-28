import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { weeklyEnergyPoints, } from './usage_data'


export const animationOptions = {
    easing: 'easeInOutExpo',
    duration: 1500,
    delay: 500,
}



const weeklyCanvas = document.getElementById('weekly-chart')

const labels = [
    'SUN','MON',
    'TUE','WED',
    'THUR','FRI','SAT'
]

const data = {
    labels: labels,
    datasets: [{
        label: 'Weekly Energy used',
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
                text:'Weekly Energy Used'
            }
        },
        
    }
}

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

export const weeklyChart = new Chart(
    weeklyCanvas,
    config
)

