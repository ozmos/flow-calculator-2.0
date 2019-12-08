class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    /* bind view methods */
    this.view.displaySprinklerSelect(this.model.sprinklerTypes)
    this.view.bindSelectSprinkler(this.handleSelectSprinkler)
    
    
    /* bind model methods */
    this.model.bindSprinklerTypeChanged(this.onSprinklerTypeChanged)
    this.model.bindNozzleSetChanged(this.onNozzleSetChanged)
  
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
   
  onNozzleSetChanged = () => {
    this.view.displaySprinklers(this.model.getNozzleSet(), this.model.calculateTotal(), this.model.calculateStations())
    // TODO: create separate function which doesn't bind function every time called
    this.view.bindAmountInput(this.handleAmountInput)
  }

  
  /* event handlers */
  // fires when user selects sprinkler type, updates current sprinkler type
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
  // fires when user clicks "set sprinkler type, pressure and flow" button, updates current pressure and available flow, triggers onPressureFlowChanged method in model
  handleSubmitPressureFlow = (pressure, flow) => {
    this.model.setNozzleSet(this.model.sprinklerType, pressure)
    this.model.setFlowRate(flow)
  }

  // 
  handleAmountInput = (nozzle, amount, index) => {
    this.model.setAmount(nozzle, amount, index)
  }
}

const app = new Controller(new Model(new NozzleData()), new View(new Header()));