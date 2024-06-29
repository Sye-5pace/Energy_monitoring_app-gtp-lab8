import { alerts, goals } from "./energy_charts/usage_data";

document.addEventListener('DOMContentLoaded', () => {
  const goalCount = document.getElementById('goal-count')
  const alertCount = document.getElementById('alert-count')

  console.log(alerts,goals)
  alertCount.textContent = alerts.length
  goalCount.textContent = goals.length

});