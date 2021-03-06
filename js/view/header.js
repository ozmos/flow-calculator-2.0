class Header {
  constructor() {
    // header
    this.header = U.createElement('header')
    this.title = U.createElement('h1')
    this.title.textContent = 'Flow Calculator'
    this.description = U.createElement('p', 'description')
    this.description.textContent = 'Calculate your stations according to pressure, flow and sprinkler type'
    this.displaySavedNozzlesButton = U.createElement('button')
    this.displaySavedNozzlesButton.textContent = 'My Saved Nozzle Sets'
    this.header.append(this.title, this.description, this.displaySavedNozzlesButton)
   
  }

 }