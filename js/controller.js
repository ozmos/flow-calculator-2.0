class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    /* bind view methods */
    this.view.displaySprinklerSelect(this.model.sprinklerTypes)
    this.view.bindSelectSprinkler(this.handleSelectSprinkler)
    
    
    /* bind model methods */
    this.model.bindSprinklerTypeChanged(this.onSprinklerTypeChanged)
    this.model.bindPressureFlowChanged(this.onPressureFlowChanged)
    /*  */
  }

  // update view when model changes
  // sprinkler type
  onSprinklerTypeChanged = (type) => {
    this.view.displayPressureSelect(this.model.getPressure(type))
    this.view.toggleOnloadHiddenEls(type)
    // add event listeners once elements have loaded
    /* this.view.bindSelectPressure(this.handleSelectPressure)
    this.view.bindFlowInput(this.handleFlowInput) */
    this.view.bindSubmitPressureFlow(this.handleSubmitPressureFlow)
  }
   
  onPressureFlowChanged = (type, pressure) => {
    this.view.displaySprinklers(this.model.getSprinklerSet(type, pressure))
    
  }

  // event handlers
  handleSelectSprinkler = (type) => {
    this.model.setSprinklerType(type)
  }
/* 
  handleSelectPressure = pressure => {
    this.model.setPressure(pressure)
  }
  
  handleFlowInput = flow => {
    this.model.setFlow(flow)
  } */

  handleSubmitPressureFlow = (pressure, flow) => {
    this.model.setPressure(pressure)
    this.model.setFlow(flow)
  }
}

const app = new Controller(new Model(new NozzleData()), new View(new Header()));