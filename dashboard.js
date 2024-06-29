import { alertsInfo, goalsInfo } from "./energy_charts/usage_data"


const alertsList = document.getElementById('alerts-list');
const goalsList = document.getElementById('goals-list');

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
    
        
})

