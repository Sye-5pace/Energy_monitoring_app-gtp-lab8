import { weeklyChart } from "./energy_charts/weekly_datapoints";
import { monthlyChart } from "./energy_charts/monthly_datapoints";
import { hourlyChart } from "./energy_charts/hourly_datapoints";
import { alertsInfo, goalsInfo } from "./energy_charts/usage_data"

const drawCharts = () => {
    weeklyChart()
    monthlyChart()
    hourlyChart()
}
const alertsList = document.getElementById('alerts-list');
const goalsList = document.getElementById('goals-list');
console.log(alertsInfo)
console.log(goalsInfo)

alertsInfo.forEach(alert => {
    const alertItem = document.createElement('div');
    alertItem.classList.add('alert-item');
    alertItem.innerText = `- ${alert.message}`;
    alertsList.appendChild(alertItem);
});

goalsInfo.forEach(goal => {
    const goalItem = document.createElement('div');
    goalItem.classList.add('goal-item');
    goalItem.innerText = `- ${goal.name}`;
    goalsList.appendChild(goalItem);
});

document.addEventListener('DOMContentLoaded',()=>{
    
    drawCharts()  

    
})

