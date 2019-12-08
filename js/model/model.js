/* TODO: 
add submit buttons to each initial data selection 
*/

class Model {
  constructor(dataset) {
    this.dataset = dataset.data
    
  }
  
  /* bind to controller */
  
  bindSprinklerTypeChanged(callback) {
    this.onSprinklerTypeChanged = callback
  }

  bindNozzleSetChanged(callback) {
    this.onNozzleSetChanged = callback
  }
  
  bindAmountChanged(callback) {
    this.onAmountChanged = callback
  }
  

  /* update model state */
  
  setSprinklerType (type) {
    this.sprinklerType = type
    this.onSprinklerTypeChanged(this.sprinklerType)

  }
  
  setNozzleSet (family = this.sprinklerType, pressure, nozzleSet) {
    this.nozzleSet = nozzleSet || this._newNozzleSet(family, pressure)
    this.onNozzleSetChanged()
  }

  setFlowRate (flow) {
    this.flowRate = flow
  }

  setAmount (nozzle, amount, index) {
    this.nozzleSet.nozzles[nozzle].arcs[index].amount = amount
   
    this.calculateSingleFlow(nozzle, index)
    this.calculateSmallTotal(nozzle)
    this.onNozzleSetChanged()
  }

  /* calculations */
  calculateSingleFlow(nozzle, index) {
    const amount = this.nozzleSet.nozzles[nozzle].arcs[index].amount
    // new object property: totalFlow to each nozzle type
    this.nozzleSet.nozzles[nozzle].arcs[index].totalFlow = amount * this.nozzleSet.nozzles[nozzle].arcs[index]['flow-rate']
  }

  calculateSmallTotal(nozzle) {
    const nozzleSet = this.nozzleSet.nozzles[nozzle]
    const totalFlows = nozzleSet.arcs
    .map(noz => noz.totalFlow)
    .filter(noz => noz)
    const smallTotal = totalFlows
    .reduce((a, b) => {
      return a + b
    }, 0 )
    .toFixed(2)
    // new object property for each nozzle type called 'subtotal'
    this.nozzleSet.nozzles[nozzle].subTotal = smallTotal
  }

  calculateTotal() {
    const nozzleSet = this.nozzleSet.nozzles
    const subTotals = []
    
    for (const noz in nozzleSet) {
      
      if (nozzleSet[noz].subTotal) subTotals.push(nozzleSet[noz].subTotal) 
    
    }
   
    return subTotals.length > 0 ? subTotals.reduce((a, b) => parseFloat(a) + parseFloat(b)) : 0 
  }

  calculateStations() {
    return Math.ceil(this.calculateTotal()/this.flowRate) || 0
  }

  /* get model data for the controller */
  get sprinklerTypes () {
    return Object.keys(this.dataset)
  }

  getPressure (type) {
    const pressure = this.dataset[type].pressure 
    return pressure
  }

  getNozzleSet() {
    const nozzleSet = this.nozzleSet.nozzles
    
    const nozzleKeys = Object.keys(nozzleSet)
    return nozzleKeys.map((obj, i) => {

      const set = nozzleSet[obj].arcs
      const radius = nozzleSet[obj].radius ? nozzleSet[obj].radius : set.radius
      const subTotal = nozzleSet[obj].subTotal ? nozzleSet[obj].subTotal : 0
     
      return {'title' : obj, 'radius' : radius, 'set' : set, 'subTotal' : subTotal, }
    })
  }

  /* private functions */
  // create new nozzleset based on sprinkler family and pressure
  _newNozzleSet(family, pressure) {
    const nozzleSet = {
      'family': family,
      'pressure': pressure,
      'nozzles' : {}
    }
    const sprinklerSet = this.dataset[family].nozzles
    
    for (const noz in sprinklerSet) {
      nozzleSet.nozzles[noz] = {}
      if (sprinklerSet[noz].radius) nozzleSet.nozzles[noz].radius = sprinklerSet[noz].radius[pressure]
      nozzleSet.nozzles[noz].arcs = sprinklerSet[noz][pressure]
      nozzleSet.nozzles[noz].subTotal = 0
    }
    return nozzleSet
  }
  
}