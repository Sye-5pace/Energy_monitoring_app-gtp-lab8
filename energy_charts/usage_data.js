export const data = {
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
            "power": 100,
            "energy_used": 0.1
          },
          {
            "power": 130,
            "energy_used": 0.12
          }
        ],
        "daily": [
          {
         
            "energy_used": 2.5
          },
          {
         
            "energy_used": 3.1
          }
        ],
        "monthly": [
          {
            "energy_used": 50
          },
          {
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
            "power": 250,
            "energy_used": 0.25
          },
          {
            "power": 320,
            "energy_used": 0.32
          }
        ],
        "daily": [
          {
         
            "energy_used": 6
          },
          {
         
            "energy_used": 7.5
          }
        ],
        "monthly": [
          {
            "energy_used": 120
          },
          {
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
            "power": 40,
            "energy_used": 0.04
          },
          {
            "power": 55,
            "energy_used": 0.05
          }
        ],
        "daily": [
          {
         
            "energy_used": 1
          },
          {
         
            "energy_used": 1.2
          }
        ],
        "monthly": [
          {
            "energy_used": 20
          },
          {
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
            "power": 180,
            "energy_used": 0.18
          },
          {
            "power": 210,
            "energy_used": 0.21
          }
        ],
        "daily": [
          {
         
            "energy_used": 4
          },
          {
         
            "energy_used": 4.8
          }
        ],
        "monthly": [
          {
            "energy_used": 80
          },
          {
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
          "power": 470,
          "energy_used": 0.47
        },
        {
          "power": 715,
          "energy_used": 0.72
        },
        {
          "power": 580,
          "energy_used": 0.58
        },
        {
          "power": 620,
          "energy_used": 0.62
        },
        {
          "power": 490,
          "energy_used": 0.49
        },
        {
          "power": 550,
          "energy_used": 0.55
        },
        {
          "power": 600,
          "energy_used": 0.60
        },
        {
          "power": 480,
          "energy_used": 0.48
        },
        {
          "power": 520,
          "energy_used": 0.52
        },
        {
          "power": 570,
          "energy_used": 0.57
        },
        {
          "power": 510,
          "energy_used": 0.51
        },
        {
          "power": 620,
          "energy_used": 0.62
        },
        {
          "power": 490,
          "energy_used": 0.49
        },
        {
          "power": 540,
          "energy_used": 0.54
        },
        {
          "power": 580,
          "energy_used": 0.58
        },
        {
          "power": 500,
          "energy_used": 0.50
        },
        {
          "power": 560,
          "energy_used": 0.56
        },
        {
          "power": 530,
          "energy_used": 0.53
        },
        {
          "power": 590,
          "energy_used": 0.59
        },
        {
          "power": 470,
          "energy_used": 0.47
        },
        {
          "power": 550,
          "energy_used": 0.55
        },
        {
          "power": 610,
          "energy_used": 0.61
        },
        {
          "power": 480,
          "energy_used": 0.48
        }
      ],
      "daily": [
        {
       
          "energy_used": 13.5
        },
        {
       
          "energy_used": 10.6
        },
        {
       
          "energy_used": 14.8
        },
        {
       
          "energy_used": 1.2
        },
        {
       
          "energy_used": 12.9
        },
        {
       
          "energy_used": 6.9
        },
        {
       
          "energy_used": 5
        }
      ],
      "monthly": [
        {
          "energy_used": 5
        },
        {
          "energy_used": 248
        },
        {
          "energy_used": 260
        },
        {
          "energy_used": 235
        },
        {
          "energy_used": 280
        },
        {
          "energy_used": 70
        },
        {
          "energy_used": 218
        },
        {
          "energy_used": 160
        },
        {
          "energy_used": 135
        },
        {
          "energy_used": 208
        },
        {
          "energy_used": 35
        },
        {
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
          
    },
    {
      "id": "alert_2",
      "type": "low_battery",
      "device_id": "device_2",
      "message": "Thermostat battery level is below 20%",
    },
    {
      "id": "alert_3",
      "type": "offline",
      "device_id": "device_3",
      "message": "Garage door sensor is offline",
    },
    {
      "id": "alert_4",
      "type": "high_usage",
      "device_id": "device_4",
      "message": "Kitchen appliance power consumption exceeding 500W for 15 minutes",
    },
  ],
  "goals": [
    {
      "id": "goal_1",
      "name": "Reduce monthly electricity usage by 10%",
      "target": 45,
      "progress": 0.8,
           },
    {
      "id": "goal_2",
      "name": "Increase solar energy generation by 20%",
      "target": 75,
      "progress": 0.6,
           },
    {
      "id": "goal_3",
      "name": "Reduce water consumption by 15% in the next quarter",
      "target": 35,
      "progress": 0.4,
           },
    {
      "id": "goal_4",
      "name": "Improve home insulation to reduce heating costs by 12%",
      "target": 55,
      "progress": 0.7,
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




export const alerts = data.alerts
export const goals = data.goals


export const alertsInfo = alerts.map(alert => ({
  type: alert.type,
  device_id: alert.device_id,
  message: alert.message,
}));

export const goalsInfo = goals.map(goal => ({
  name: goal.name,
  target: goal.target,
  progress: goal.progress, 
}))





