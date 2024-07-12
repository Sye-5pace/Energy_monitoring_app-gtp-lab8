import { Chart, LineController,LineElement, PointElement,LinearScale,Title, CategoryScale } from 'chart.js'
import { monthlyEnergyPoints,estimatedMonthlyCost } from './usage_data'
// import { animationOptions } from './weekly_datapoints'

const monthlyCanvas = document.getElementById('monthly-chart').getContext('2d')

export const monthlyLabels = [
    "JAN", "FEB", "MAR", 
    "APR", "MAY", "JUN", "JUL", 
    "AUG", "SEP", "OCT", 
    "NOV", "DEC"
];

const data = {
    labels: monthlyLabels,
    datasets: [{
        label:`Hourly energy used $ ${estimatedMonthlyCost}`,
        data: monthlyEnergyPoints,
        fill: false,
        borderColor: 'rgb(80,250,100)',
        borderWidth: 2,
        tension: 0.5
    }]
}

const config = {
    type: 'line',
    id:'monthlyChart',
    data,
    options:{
        reponsive: true,
        // animation: animationOptions,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text:'Monthly Energy Used'
            }
        },
        layout: {
            padding: 20
        } 
    }
}

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

new Chart( monthlyCanvas, config)

