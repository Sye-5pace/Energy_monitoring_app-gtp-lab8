import { Chart, LineController,LineElement, PointElement,LinearScale,Title, CategoryScale } from 'chart.js'
import { hourlyEnergyPoints } from './usage_data'
import { animationOptions } from './weekly_datapoints'

const hourlyCanvas = document.getElementById('hourly-canvas')

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

const labels = [
    "12:00 ",
    "1:00 ",
    "2:00 ",
    "3:00 ",
    "4:00 ",
    "5:00 ",
    "6:00 ",
    "7:00 ",
    "8:00 ",
    "9:00 ",
    "10:00 ",
    "11:00 ",
    "12:00 ",
    "13:00 ",
    "14:00 ",
    "15:00 ",
    "16:00 ",
    "17:00 ",
    "18:00 ",
    "19:00 ",
    "20:00 ",
    "21:00 ",
    "22:00 ",
    "23:00 "
]

const data = {
    labels: labels,
    datasets: [{
        label: 'Hourly energy used',
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
    }
}

export const hourlyChart = new Chart(
    hourlyCanvas,
    config
)