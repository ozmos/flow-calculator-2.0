class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.displaySprinklerSelect(this.model.sprinklerTypes)
    this.view.bindSelectSprinkler(this.handleSelectSprinkler)
    this.model.bindSprinklerTypeChanged(this.onSprinklerTypeChanged)
    /* this.view.displaySprinklers(this.model.getSprinklerSet("Stream rotor, R-VAN", "2.1")) */
  }

  // update view when model changes
  // sprinkler type
  onSprinklerTypeChanged = (type) => {
    this.view.displayPressureSelect(this.model.getPressure(type))
    this.view.toggleOnloadHiddenEls(type)
  }
   


  // event handlers
  handleSelectSprinkler = (type) => {
    this.model.setSprinklerType(type)
  }

  handleSelectPressure = pressure => {
    this.model.setPressure(pressure)
  }
  
}

const app = new Controller(new Model(new NozzleData()), new View(new Header()));