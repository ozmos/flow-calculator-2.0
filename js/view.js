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

    

    /* form */
    
    // Legend 
    this.legendHeading = this._createElement('h2', 'legend')
    this.legendHeading.textContent = 'Select your sprinkler type, working pressure and flow rate'

    // Sprinkler type input
    this.sprinklerSelect = this._createSelect('sprinkler-type', 'Sprinkler Type', 'sprinkler-type');
    this.pressureSelect = this._createSelect('pressure', 'Pressure (Bar)', 'pressure' )
    this.flowInput = this._createInput('number', 'flow-rate', 'Flow rate (Litres per minute)', 'flow-rate')
    this.setButton = this._createElement('button')
    this.setButton.id = 'set-values'
    this.setButton.textContent = 'Set sprinkler type, pressure and flow'
    this.formHeader = this._wrapElements([this.legendHeading, this.sprinklerSelect, this.pressureSelect, this.flowInput, this.setButton],'fieldset', 'form-header')

    // form body - inputs for number of sprinklers and view number of stations calculated 
    this.calculatorHeading = this._createElement('h2', 'legend')
    this.calculatorHeading.textContent = 'How many of each sprinkler do you need?'
    this.sprinklers = this._createElement('ul')
    this.calculator = this._wrapElements([this.calculatorHeading, this.sprinklers], 'fieldset')
    this.form = this._wrapElements([this.formHeader, this.calculator], 'form')

    // main
    this.main = this._createElement('main')
    this.main.append(this.form)
 
    this.app.append(this.header, this.main)
    /* end constructor */
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

  _wrapElements(elements, tag, className) {
    const wrapper = this._createElement(tag, className)
    wrapper.append(...elements)
    return wrapper
  }

  _createInput(type, id, labelName, className) {
    const input = this._createElement('input')
    input.id = id
    input.type = type
    const label = this._createElement('label')
    label.htmlFor = id
    label.textContent = labelName
    const wrapper = this._wrapElements([label, input],'div', className)
    return wrapper;
  }

  _createSelect(id, labelName, className) {
    const select = this._createElement('select')
    select.id = id
    const label = this._createElement('label')
    label.htmlFor = id
    label.textContent = labelName
    const wrapper = this._wrapElements([label, select],'div', className)
    return wrapper;
  }

  /* public functions */

  // displays list of sprinklers, amount adjusters, throw and flow
  displaySprinklers(sprinklers) {
    // delete all nodes
    
    while (this.sprinklers.firstChild) {
      this.sprinklers.removeChild(this.sprinklers.firstChild)
    }

    // show default message if no sprinklers available
    if (sprinklers.length === 0) {
      const p = this.createElement('p')
      p.textContent = 'Set your sprinkler type, pressure and flow rate'
      this.sprinklers.append(p);
    } else {
      // display chosen sprinklers
      const list = sprinklers.map((sprinkler, i) => {
       
        // amount adjuster
        const amount = this._createInput('number', `n-${nozzle}`, nozzle, `amount`)

        // throw indicator
        const radius = this._createElement('span', 'radius')
        radius.textContent = sprinkler['radius']

        // flow counter
        const flow = this._createElement('span', 'flow')
        flow.textContent = sprinkler['flow']

        /*
        TODO: add precipiptation rates
        */

        // row to contain elements
        const li = this._wrapElements([amount, radius, flow], 'li', 'row')
        li.id = `row-${nozzle}`
        
        
        
        return li
      })
      
      list.forEach(el => this.sprinklers.append(el))
    }
  }

}