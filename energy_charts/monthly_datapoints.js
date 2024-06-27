import { Chart, LineController,LineElement, PointElement,LinearScale,Title, CategoryScale } from 'chart.js'
import { monthlyEnergyPoints } from './usage_data'
import { animationOptions } from './weekly_datapoints'

const monthlyCanvas = document.getElementById('monthly-canvas');

const labels = [
    "JAN", "FEB", "MAR", 
    "APR", "MAY", "JUN", "JUL", 
    "AUG", "SEP", "OCT", 
    "NOV", "DEC"
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Monthly energy used',
        data: monthlyEnergyPoints,
        fill: false,
        borderColor: 'rgb(80,250,100)',
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
                text:'Monthly Energy Used'
            }
        },
    }
}

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

export const monthlyChart = new Chart(
    monthlyCanvas,
    config
)