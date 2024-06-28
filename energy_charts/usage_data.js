const convertTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' });
}

export const data = {
  "timestamp": convertTimestamp(1656237380),
  "user": {
    "id": "user_123",
    "name": "John Doe",
    "electricity_rate": 0.12
  },
  "settings": {
    "currency": "USD",
    "cost_display": "total"
  },
  "devices": [
    {
      "id": "device_1",
      "name": "Living Room",
      "type": "Smart Plug",
      "voltage": 120,
      "current": 1.0,
      "power_factor": 0.9,
      "power_usage": {
        "power": 120,
        "energy_used": 0.15,
        "cost": 0.02
      },
      "timeline": {
        "hourly": [
          {
            "time": convertTimestamp(1656200980),
            "power": 100,
            "energy_used": 0.1
          },
          {
            "time": convertTimestamp(1656204580),
            "power": 130,
            "energy_used": 0.12
          }
        ],
        "daily": [
          {
            "date": convertTimestamp(1655942400),
            "energy_used": 2.5
          },
          {
            "date": convertTimestamp(1656028800),
            "energy_used": 3.1
          }
        ],
        "monthly": [
          {
            "month": convertTimestamp(202405),
            "energy_used": 50
          },
          {
            "month": convertTimestamp(202404),
            "energy_used": 45
          }
        ]
      },
      "min_power": 80,
      "max_power": 150
    },
    {
      "id": "device_2",
      "name": "Kitchen",
      "type": "Smart Appliance",
      "voltage": 120,
      "power_usage": 2.5,
      "power_factor": 0.95,
      "power_usage": {
        "power": 300,
        "energy_used": 0.4,
        "cost": 0.05
      },
      "timeline": {
        "hourly": [
          {
            "time": convertTimestamp(1656200980),
            "power": 250,
            "energy_used": 0.25
          },
          {
            "time": convertTimestamp(1656204580),
            "power": 320,
            "energy_used": 0.32
          }
        ],
        "daily": [
          {
            "date": convertTimestamp(1655942400),
            "energy_used": 6
          },
          {
            "date": convertTimestamp(1656028800),
            "energy_used": 7.5
          }
        ],
        "monthly": [
          {
            "month": convertTimestamp(202405),
            "energy_used": 120
          },
          {
            "month": convertTimestamp(202404),
            "energy_used": 110
          }
        ]
      },
      "min_power": 200,
      "max_power": 400
    },
    {
      "id": "device_3",
      "name": "Bedroom",
      "type": "Smart Bulb",
      "voltage": 120,
      "current": 0.5,
      "power_factor": 0.85,
      "current": {
        "power": 50,
        "energy_used": 0.05,
        "cost": 0.01
      },
      "timeline": {
        "hourly": [
          {
            "time": convertTimestamp(1656200980),
            "power": 40,
            "energy_used": 0.04
          },
          {
            "time": convertTimestamp(1656204580),
            "power": 55,
            "energy_used": 0.05
          }
        ],
        "daily": [
          {
            "date": convertTimestamp(1655942400),
            "energy_used": 1
          },
          {
            "date": convertTimestamp(1656028800),
            "energy_used": 1.2
          }
        ],
        "monthly": [
          {
            "month": convertTimestamp(202405),
            "energy_used": 20
          },
          {
            "month": convertTimestamp(202404),
            "energy_used": 18
          }
        ]
      },
      "min_power": 30,
      "max_power": 60
    },  
    {
      "id": "device_4",
      "name": "Home Office",
      "type": "Smart Laptop",
      "voltage": 120,
      "current": 1.8,
      "power_factor": 0.9,
      "current": {
        "power": 200,
        "energy_used": 0.3,
        "cost": 0.04
      },
      "timeline": {
        "hourly": [
          {
            "time": convertTimestamp(1656200980),
            "power": 180,
            "energy_used": 0.18
          },
          {
            "time": convertTimestamp(1656204580),
            "power": 210,
            "energy_used": 0.21
          }
        ],
        "daily": [
          {
            "date": convertTimestamp(1655942400),
            "energy_used": 4
          },
          {
            "date": convertTimestamp(1656028800),
            "energy_used": 4.8
          }
        ],
        "monthly": [
          {
            "month": convertTimestamp(202405),
            "energy_used": 80
          },
          {
            "month": convertTimestamp(202404),
            "energy_used": 75
          }
        ]
      },
      "min_power": 150,
      "max_power": 250
    }
  ],
  "totals": {
    "current": {
      "power": 670,
      "energy_used": 0.9,
      "cost": 0.12
    },
    "timeline": {
      "hourly": [
        {
          "time": convertTimestamp(1656200980),
          "power": 470,
          "energy_used": 0.47
        },
        {
          "time": convertTimestamp(1656204580),
          "power": 715,
          "energy_used": 0.72
        },
        {
          "time": convertTimestamp(1656208180),
          "power": 580,
          "energy_used": 0.58
        },
        {
          "time": convertTimestamp(1656211780),
          "power": 620,
          "energy_used": 0.62
        },
        {
          "time": convertTimestamp(1656215380),
          "power": 490,
          "energy_used": 0.49
        },
        {
          "time": convertTimestamp(1656218980),
          "power": 550,
          "energy_used": 0.55
        },
        {
          "time": convertTimestamp(1656222580),
          "power": 600,
          "energy_used": 0.60
        },
        {
          "time": convertTimestamp(1656226180),
          "power": 480,
          "energy_used": 0.48
        },
        {
          "time": convertTimestamp(1656229780),
          "power": 520,
          "energy_used": 0.52
        },
        {
          "time": convertTimestamp(1656233380),
          "power": 570,
          "energy_used": 0.57
        },
        {
          "time": convertTimestamp(1656236980),
          "power": 510,
          "energy_used": 0.51
        },
        {
          "time": convertTimestamp(1656240580),
          "power": 620,
          "energy_used": 0.62
        },
        {
          "time": convertTimestamp(1656244180),
          "power": 490,
          "energy_used": 0.49
        },
        {
          "time": convertTimestamp(1656247780),
          "power": 540,
          "energy_used": 0.54
        },
        {
          "time": convertTimestamp(1656251380),
          "power": 580,
          "energy_used": 0.58
        },
        {
          "time": convertTimestamp(1656254980),
          "power": 500,
          "energy_used": 0.50
        },
        {
          "time": convertTimestamp(1656258580),
          "power": 560,
          "energy_used": 0.56
        },
        {
          "time": convertTimestamp(1656262180),
          "power": 530,
          "energy_used": 0.53
        },
        {
          "time": convertTimestamp(1656265780),
          "power": 590,
          "energy_used": 0.59
        },
        {
          "time": convertTimestamp(1656269380),
          "power": 470,
          "energy_used": 0.47
        },
        {
          "time": convertTimestamp(1656272980),
          "power": 550,
          "energy_used": 0.55
        },
        {
          "time": convertTimestamp(1656276580),
          "power": 610,
          "energy_used": 0.61
        },
        {
          "time": convertTimestamp(1656280180),
          "power": 480,
          "energy_used": 0.48
        }
      ],
      "daily": [
        {
          "date": convertTimestamp(1655942400),
          "energy_used": 13.5
        },
        {
          "date": convertTimestamp(1656028800),
          "energy_used": 10.6
        },
        {
          "date": convertTimestamp(1656115200),
          "energy_used": 14.8
        },
        {
          "date": convertTimestamp(1656201600),
          "energy_used": 1.2
        },
        {
          "date": convertTimestamp(1656288000),
          "energy_used": 12.9
        },
        {
          "date": convertTimestamp(1656187000),
          "energy_used": 6.9
        },
        {
          "date": convertTimestamp(1656186100),
          "energy_used": 5
        }
      ],
      "monthly": [
        {
          "month": convertTimestamp(202405),
          "energy_used": 5
        },
        {
          "month": convertTimestamp(202404),
          "energy_used": 248
        },
        {
          "month": convertTimestamp(202403),
          "energy_used": 260
        },
        {
          "month": convertTimestamp(202402),
          "energy_used": 235
        },
        {
          "month": convertTimestamp(202401),
          "energy_used": 280
        },
        {
          "month": convertTimestamp(202405),
          "energy_used": 70
        },
        {
          "month": convertTimestamp(202404),
          "energy_used": 218
        },
        {
          "month": convertTimestamp(202403),
          "energy_used": 160
        },
        {
          "month": convertTimestamp(202402),
          "energy_used": 135
        },
        {
          "month": convertTimestamp(202401),
          "energy_used": 208
        },
        {
          "month": convertTimestamp(202401),
          "energy_used": 35
        },
        {
          "month": convertTimestamp(202401),
          "energy_used": 8
        }
      ]
    }
  },
  "alerts": [
    {
      "id": "alert_1",
      "type": "high_usage",
      "device_id": "device_1",
      "message": "Living Room power consumption exceeding 130W for 30 minutes",
      "timestamp": convertTimestamp(1656234560)
    },
    {
      "id": "alert_2",
      "type": "low_battery",
      "device_id": "device_2",
      "message": "Thermostat battery level is below 20%",
      "timestamp": convertTimestamp(1656238160)
    },
    {
      "id": "alert_3",
      "type": "offline",
      "device_id": "device_3",
      "message": "Garage door sensor is offline",
      "timestamp": convertTimestamp(1656241760)
    },
    {
      "id": "alert_4",
      "type": "high_usage",
      "device_id": "device_4",
      "message": "Kitchen appliance power consumption exceeding 500W for 15 minutes",
      "timestamp": convertTimestamp(1656245360)
    },
  ],
  "goals": [
    {
      "id": "goal_1",
      "name": "Reduce monthly electricity usage by 10%",
      "target": 45,
      "progress": 0.8,
      "start_date": convertTimestamp(1654636800)
    },
    {
      "id": "goal_2",
      "name": "Increase solar energy generation by 20%",
      "target": 75,
      "progress": 0.6,
      "start_date": convertTimestamp(1654723200)
    },
    {
      "id": "goal_3",
      "name": "Reduce water consumption by 15% in the next quarter",
      "target": 35,
      "progress": 0.4,
      "start_date": convertTimestamp(1654809600)
    },
    {
      "id": "goal_4",
      "name": "Improve home insulation to reduce heating costs by 12%",
      "target": 55,
      "progress": 0.7,
      "start_date": convertTimestamp(1654896000)
    },
  ]
};

export const weeklyEnergyPoints = []
export const monthlyEnergyPoints = []
export const hourlyEnergyPoints = []

const weeklyInfo = data.totals['timeline'].daily
for( const item of weeklyInfo){
  weeklyEnergyPoints.push(item.energy_used)
}

const monthlyInfo = data.totals['timeline'].monthly
for( const item of monthlyInfo){
  monthlyEnergyPoints.push(item.energy_used)
}

const hourlyInfo = data.totals['timeline'].hourly
for( const item of hourlyInfo){
  hourlyEnergyPoints.push(item.energy_used)
}



// console.log(data.totals.current)
const alerts = data.alerts
const goals = data.goals


export const alertsInfo = alerts.map(alert => ({
  type: alert.type,
  device_id: alert.device_id,
  message: alert.message,
}));

export const goalsInfo = goals.map(goal => ({
  name: goal.name,
  target: goal.target,
  progress: goal.progress, // Add this line
}))




