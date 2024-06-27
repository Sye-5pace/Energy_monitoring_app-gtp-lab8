import { weeklyChart } from "./energy_charts/weekly_datapoints";
import { monthlyChart } from "./energy_charts/monthly_datapoints";
import { hourlyChart } from "./energy_charts/hourly_datapoints";


document.addEventListener('DOMContentLoaded',()=>{
    weeklyChart()
    monthlyChart()
    hourlyChart()
})