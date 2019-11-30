/* TODO: 
add submit buttons to each initial data selection 
*/

class Model {
  constructor(dataset) {
    this.dataset = dataset.data
    this.resetAllNozzleNumbers()
    //temp
    
  }
  
  /* bind to controller */
  
  bindSprinklerTypeChanged(callback) {
    this.onSprinklerTypeChanged = callback
  }

  bindPressureFlowChanged(callback) {
    this.onPressureFlowChanged = callback
  }
  
  /* update model state */
  
  setSprinklerType (type) {
    this.sprinklerType = type
    this.onSprinklerTypeChanged(this.sprinklerType)

  }
  
  setPressure (pressure) {
    this.pressure = pressure
    this.onPressureFlowChanged(this.sprinklerType, this.pressure)
  }

  setAmount (nozzle, amount, index) {
    this.dataset[this.sprinklerType].nozzles[nozzle][this.pressure][index].amount = amount
   
    this.calculateSingleFlow(nozzle, index)
    this.onPressureFlowChanged(this.sprinklerType, this.pressure)
  }

  // calculations
  calculateSingleFlow(nozzle, index) {
   
    const amount = this.dataset[this.sprinklerType].nozzles[nozzle][this.pressure][index].amount
    this.dataset[this.sprinklerType].nozzles[nozzle][this.pressure][index].totalFlow = amount * this.dataset[this.sprinklerType].nozzles[nozzle][this.pressure][index]['flow-rate']
    console.log(this.dataset[this.sprinklerType].nozzles[nozzle][this.pressure][index].totalFlow)
    
  }

  // reset flows method group
  _helpResetNozzleNumbers (arr) {
    arr = arr.map(obj => {
      return {
        'arc' : obj.arc,
        'radius' : obj.radius,
        'flow-rate' : obj['flow-rate'],
        'amount' : 0
      }
    })
    return arr
  }

  resetAllNozzleNumbers () {
    const dataset = this.dataset
    for (const fam in dataset) {
      for (const obj in dataset[fam].nozzles) {
        for (const type in dataset[fam].nozzles[obj]) {
          const nozzleSet = dataset[fam].nozzles[obj][type];
        
          if (Array.isArray(nozzleSet)) {
            dataset[fam].nozzles[obj][type] = this._helpResetNozzleNumbers(nozzleSet)
          }
        }
        
      }
    }
    
  }

  // end resetFlows method group
  setFlowRate (flow) {
  
    this.flowRate = flow
    // this.onFlowChanged()
  }

  /* get model data for controller */
  get sprinklerTypes () {
    return Object.keys(this.dataset)
  }

  getPressure (type) {
    const pressure = this.dataset[type].pressure 
    return pressure
  }

  getSprinklersByPressure(family, type, pressure) {
    return this.dataset[family].nozzles[type][pressure]
  }

  getSprinklerSet(family, pressure) {
    const sprinklerSet = this.dataset[family].nozzles
    const sprinklerKeys = Object.keys(sprinklerSet)
    return sprinklerKeys.map((obj, i) => {
      const set = sprinklerSet[obj][pressure]
      const radius = sprinklerSet[obj].radius ? sprinklerSet[obj].radius[pressure] : set.radius
     
      return {'title' : obj, 'radius' : radius, 'set' : set}
    })
  }

  getRadius(family, type, pressure) {
    return this.dataset[family].nozzles[type].radius[pressure]
  }

  
}