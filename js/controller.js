class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // render the sprinkler list
    this.view.displaySprinklers(nozzleData['3500']['1.7'])
  }
  
}

const app = new Controller(new Model(), new View());