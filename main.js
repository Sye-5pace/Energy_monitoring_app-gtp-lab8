import { alerts, goals } from "./energy_charts/usage_data";

document.addEventListener('DOMContentLoaded', () => {
  const goalCount = document.getElementById('goal-count')
  const alertCount = document.getElementById('alert-count')
  const mobileAlertCount = document.getElementById('mobile-alert-count')
  const mobileGoalCount = document.getElementById('mobile-goal-count')

  
  alertCount.textContent = alerts.length
  goalCount.textContent = goals.length
  mobileAlertCount.textContent = alerts.length
  mobileGoalCount.textContent = goals.length
});