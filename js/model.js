class NozzleData {
  constructor () {
    this.data = {
      // gear drives
      "Gear-Drive, 3500" : {
        "1.7" : [
         {
           "nozzle": "0.75",
           "radius": 4.6,
           "flow" : 2.04 
         },
         {
            "nozzle":"1.0", 
            "radius": 6.1,
            "flow" : 2.91 
          },
          {
            "nozzle": "1.5",
            "radius": 7.0,
            "flow" : 4.01 
          },
          {
            "nozzle": "2.0",
            "radius": 8.2,
            "flow" : 5.3 
          },
          {
            "nozzle": "3.0",
            "radius": 8.8,
            "flow" : 8.21 
          },
          {
            "nozzle": "4.0",
            "radius": 9.4,
            "flow" : 11.24 
          }
        ],
        "2.0" : [
          {
            "nozzle": "0.75",
            "radius": 4.8,
            "flow" : 2.24
          },
          {
            "nozzle" : "1.0",
            "radius": 6.2,
            "flow" : 3.14 
          },
          {
            "nozzle": "1.5",
            "radius": 7.0,
            "flow" : 4.35 
          },
          {
            "nozzle" : "2.0",
            "radius": 8.2,
            "flow" : 5.74 
          },
          {
            "nozzle" : "3.0",
            "radius": 9.1,
            "flow" : 8.87 
          },
          {
            "nozzle" : "4.0",
            "radius": 9.7,
            "flow" : 12.17 
          }
        ],
        "2.5" : [
          {
            "nozzle" : "0.75",
            "radius": 5.2,
            "flow" : 2.58 
          },
          {
            "nozzle" : "1.0",
            "radius": 6.4,
            "flow" : 3.55 
          },
          {
            "nozzle" : "1.5",
            "radius": 7.0,
            "flow" : 4.94 
          },
          {
            "nozzle" : "2.5",
            "radius": 8.2,
            "flow" : 6.51 
          },
          {
            "nozzle" : "3.0",
            "radius": 9.4,
            "flow" : 11.13 
          },
          {
            "nozzle" : "4.0",
            "radius": 10.6,
            "flow" : 15.32 
          }
        ]
      },
      // end gear drives
      // RVANs
      "Stream rotor, R-VAN" : {

      },
      // end RVANS
      "Standard sprays, 1800" : {

      }
      // end 1800
    }
  }
}
  


class Model {
  constructor(dataset) {
    this.dataset = dataset.data
  }
  
  // update view when model changes
  bindSprinklerTypeChanged(callback) {
    this.onSprinklerTypeChanged = callback
  }

  // get methods
  get nozzles () {
    return Object.keys(this.dataset)
  }

  pressure (type) {
    return Object.keys(this.dataset[type])
  }

  setSprinklerType (type) {
    this.sprinklerType = type
    this.onSprinklerTypeChanged(this.sprinklerType)
  }
}