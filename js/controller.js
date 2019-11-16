class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.displaySprinklerSelect(this.model.nozzles)
    this.view.bindSelectSprinkler(this.handleSelectSprinkler)
    this.model.bindSprinklerTypeChanged(this.onSprinklerTypeChanged)
  }

  // update view when model changes
  // sprinkler type
  onSprinklerTypeChanged = (type) => {
    this.view.displayPressureSelect(this.model.pressure(type))
    this.view.toggleOnloadHiddenEls(type)
  }

  handleSelectSprinkler = (type) => {
    this.model.setSprinklerType(type)
  }
  
}

const app = new Controller(new Model(new NozzleData()), new View());