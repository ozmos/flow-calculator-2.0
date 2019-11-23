
class Model {
  constructor(dataset) {
    this.dataset = dataset.data
  }
  
  // update view when model changes
  bindSprinklerTypeChanged(callback) {
    this.onSprinklerTypeChanged = callback
  }

  // update model state
  setSprinklerType (type) {
    this.sprinklerType = type
    this.onSprinklerTypeChanged(this.sprinklerType)
  }

  setPressure (pressure) {
    this.pressure = pressure
    // this.onPressureChanged(this.pressure)
  }

  // get model data for controller
  get sprinklerTypes () {
    return Object.keys(this.dataset)
  }

  pressure (type) {
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