
class Temp {
  setAmount (nozzle, amount, index) {
    this.dataset[this.sprinklerType].nozzles[nozzle][this.pressure][index].amount = amount
   
    this.calculateSingleFlow(nozzle, index)
    this.calculateSmallTotal(nozzle)
    this.onPressureFlowChanged(this.sprinklerType, this.pressure)
  }

  // calculations
  calculateSingleFlow(nozzle, index) {
    const amount = this.dataset[this.sprinklerType].nozzles[nozzle][this.pressure][index].amount
    // new object property: totalFlow to each nozzle type
    this.dataset[this.sprinklerType].nozzles[nozzle][this.pressure][index].totalFlow = amount * this.dataset[this.sprinklerType].nozzles[nozzle][this.pressure][index]['flow-rate']
  }

  calculateSmallTotal(nozzle) {
    const nozzleSet = this.dataset[this.sprinklerType].nozzles[nozzle]
    const totalFlows = nozzleSet[this.pressure]
    .map(noz => noz.totalFlow)
    .filter(noz => noz)
    const smallTotal = totalFlows
    .reduce((a, b) => {
      return a + b
    }, 0 )
    .toFixed(2)
    // new object property for each nozzle type called 'subtotal'
    this.dataset[this.sprinklerType].nozzles[nozzle].subTotal = smallTotal
  }

  calculateTotal() {
    const nozzleSet = this.dataset[this.sprinklerType].nozzles
    const subTotals = []
    
    for (const noz in nozzleSet) {
      
      if (nozzleSet[noz].subTotal) subTotals.push(nozzleSet[noz].subTotal) 
      console.log(nozzleSet[noz].subTotal)
    }
   
    return subTotals.length > 0 ? subTotals.reduce((a, b) => parseFloat(a) + parseFloat(b)) : 0 
  }

  calculateStations() {
    return Math.ceil(this.calculateTotal()/this.flowRate) || 0
  }

  // reset flows method group
  _helpResetNozzleNumbers (arr) {
    // initializes object property: amount to 0
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
  

  

  getSprinklersByPressure(family, type, pressure) {
    return this.dataset[family].nozzles[type][pressure]
  }

  getSprinklerSet() {
    const sprinklerSet = this.dataset[family].nozzles
    
    const sprinklerKeys = Object.keys(sprinklerSet)
    return sprinklerKeys.map((obj, i) => {

      const set = sprinklerSet[obj][pressure]
      const radius = sprinklerSet[obj].radius ? sprinklerSet[obj].radius[pressure] : set.radius
      const subTotal = sprinklerSet[obj].subTotal ? sprinklerSet[obj].subTotal : 0
     
      return {'title' : obj, 'radius' : radius, 'set' : set, 'subTotal' : subTotal, }
    })
  }

  getRadius(family, type, pressure) {
    return this.dataset[family].nozzles[type].radius[pressure]
  }
}