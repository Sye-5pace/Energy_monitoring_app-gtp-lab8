import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { weeklyEnergyPoints, } from './usage_data'


export const animationOptions = {
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
}



const weeklyCanvas = document.getElementById('weekly-chart').getContext('2d')

export const weeklyLabels = [
    'SUN','MON',
    'TUE','WED',
    'THUR','FRI','SAT'
]

const data = {
    labels: weeklyLabels,
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
    id: 'weeklyChart',
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

