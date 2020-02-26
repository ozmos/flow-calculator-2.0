// @ts-nocheck
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    /* bind view methods */
    this.view.displaySprinklerSelect(this.model.sprinklerTypes)
    this.view.bindSelectSprinkler(this.handleSelectSprinkler)
    this.view.bindSave(this.handleSave)
    this.view.bindDisplaySavedNozzlesUI(this.handleDisplaySavedNozzles)

    /* bind model methods */
    this.model.bindSprinklerTypeChanged(this.onSprinklerTypeChanged)
    this.model.bindNozzleSetChanged(this.onNozzleSetChanged)
  }

  // update view when model changes
  // sprinkler type
  onSprinklerTypeChanged = (type) => {
    this.view.displayPressureSelect(this.model.getPressure(type))
    U.toggleOnloadHiddenEls(type)

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

  // fires when user clicks "set sprinkler type, pressure and flow" button, updates current pressure and available flow, triggers onPressureFlowChanged method in model
  handleSubmitPressureFlow = (pressure, flow) => {
    this.model.setNozzleSet(this.model.sprinklerType, pressure, flow)

    /* this.model.setFlowRate(flow) */
  }

  // adjust individual sprinkler amounts
  handleAmountInput = (nozzle, amount, index) => {
    this.model.setAmount(nozzle, amount, index)
  }

  // display savednozzles ui
  handleDisplaySavedNozzles = () => {
    this.view.displaySavedNozzlesUI(this.model.savedNozzleSets)
    U.toggleVisibility('hidden', 'saved-nozzles-ui')
  }

  // save nozzle set to local storage
  handleSave = (name) => {
    this.model.saveNozzleSet(name)
  }
}

const app = new Controller(new Model(new NozzleData()), new View(new Header(), new SavedNozzlesUI()));