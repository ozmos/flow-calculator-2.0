class View {
  constructor() {
    // root
    this.app = this._getElement('#root')

    // header
    this.header = this._createElement('header')
    this.title = this._createElement('h1')
    this.title.textContent = 'Flow Calculator'
    this.description = this._createElement('p', 'description')
    this.description.textContent = 'Calculate your stations according to pressure, flow and sprinkler type'
    this.header.append(this.title, this.description)

    // main
    this.main = this._createElement('main')

    // form 
    this.form = this._createElement('form')
    this.formHeader = this._createElement('fieldset', 'form-header')
    this.legendHeader = this._createElement('h2')
    this.legendHeader.textContent = 'Select your sprinkler type, working pressure and flow rate';
    
    this.app.append(this.header)
  }
  
  /* private methods */
  // helper functions
  _createElement(tag, className) {
    const el = document.createElement(tag)
    if (className) el.classList.add(className)
    return el
  }

  _getElement(selector) {
    return document.querySelector(selector)
  }




}