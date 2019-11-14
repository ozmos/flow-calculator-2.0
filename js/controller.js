class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // render the sprinkler list
    this.view.displaySprinklers(this.model.nozzles['3500']['1.7'])
  }

  // event handlers
  handleOnload() {
    
  }
  
}

const app = new Controller(new Model(new NozzleData()), new View());