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
    this.flowInput = this._createInput('number', 'flow-rate', 'Flow rate (Litres per minute)', '', true)
    this.flowInput.min = 1
    this.flowInput.classList.add('hidden-onload')
    
    this.setButton = this._createElement('button', 'hidden-onload')
    this.setButton.id = 'set-values'
    this.setButton.textContent = 'Set sprinkler type, pressure and flow'
    this.formHeader = this._wrapElements([this.legendHeading, this.flowInput, this.setButton],'fieldset', 'form-header')

    // form body - inputs for number of sprinklers and view number of stations calculated 
    this.calculatorHeading = this._createElement('h2', 'legend')
    this.calculatorHeading.textContent = 'How many of each sprinkler do you need?'
    this.sprinklers = this._createElement('ul', 'table')
    this.submitButton = this._createInput('submit', 'save-button', '', '').input
    this.submitButton.value = 'save nozzle data'
    
    this.calculator = this._wrapElements([this.calculatorHeading, this.sprinklers, this.submitButton], 'fieldset')
    this.form = this._wrapElements([this.formHeader, this.calculator], 'form')

    /* end form */

    // main
    this.main = this._createElement('main')
    this.main.append(this.form)
 
    this.app.append(this.header, this.main)

    // hide elememnts on load
    this.toggleOnloadHiddenEls(null)
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

  _createInput(type, id, labelName, className, wrapped = false) {
    this._removeElement(`${id}`)
    const input = this._createElement('input', className)
    input.id = id
    input.type = type
    const label = this._createElement('label')
    label.htmlFor = id
    label.textContent = labelName
    const wrapper = wrapped ? this._wrapElements([label, input], 'p', `${className}-container`) : null
    return wrapped ? wrapper : {'label': label, 'input': input}
  }

  _createSelect(id, labelName, className, wrapped = false) {
    this._removeElement(`${id}`)
    const select = this._createElement('select', className)
    select.id = id
    const defaultOption = this._createElement('option', 'default-option')
    select.append(defaultOption)
    const label = this._createElement('label')
    label.htmlFor = id
    label.textContent = labelName
    const wrapper = wrapped ? this._wrapElements([label, select], 'p', `${className}-container`) : null
    return wrapped ? wrapper : {'label': label, 'select': select}
  }

  _removeElement(parent, selector) {
    
    if (this._getElement(selector)) parent.removeChild(this._getElement(selector))
  }

  _removeFirstChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  _createOptions(data, className) {
    return data.map(key => {
      const option = this._createElement('option', className)
      option.value = key
      option.id = `option-${key}`
      option.textContent = key.toString()
      return option
    })
  }

  /* public functions */

  // fills sprinklerSelect with available sprinkler options
  displaySprinklerSelect(data) {
    if (this.sprinklerSelect) {this._removeFirstChildren(this.sprinklerSelect)}
    this.sprinklerSelect = this._createSelect('sprinkler-type', 'Sprinkler Type', 'sprinkler-type', true)
    const select = this.sprinklerSelect.children[1]
    const options = this._createOptions(data, 'sprinkler-options')
    options.forEach(op => select.append(op))
    this.formHeader.insertBefore(this.sprinklerSelect, this.flowInput)
  }

  // displays pressure options available to sprinkler set
  displayPressureSelect(data) {
    
    if (this.pressureSelect) {
      
      this._removeFirstChildren(this.pressureSelect)
    }
    this.pressureSelect = this._createSelect('pressure', 'Pressure (Bar)', 'pressure', true )
    const select = this.pressureSelect.children[1]
    const options = this._createOptions(data, 'pressure-options')
    options.forEach(op => select.append(op))
    this.formHeader.insertBefore(this.pressureSelect, this.flowInput)
  }

  // toggle flowrate and set button visibility
  toggleOnloadHiddenEls(type) {
    let els = document.getElementsByClassName('hidden-onload')
    els = [...els].map(el => el.style.visibility = type ? 'visible' : 'hidden')

  }
  
    
    
 
  
  // displays list of sprinklers, amount adjusters, throw and flow
  displaySprinklers(sprinklers) {
    // delete all nodes
    this._removeFirstChildren(this.sprinklers)

    // show default message if no sprinklers available
    if (sprinklers.length === 0) {
      const p = this.createElement('p')
      p.textContent = 'Set your sprinkler type, pressure and flow rate'
      this.sprinklers.append(p);
    } else {
      // display chosen sprinklers
      const list = sprinklers.map((sprinkler, i) => {
       
        // amount adjuster
        const nozzleAdjust = this._createInput('number', `n-${sprinkler.nozzle}`, sprinkler.nozzle, `amount`)

        // throw indicator
        const radius = this._createElement('p', 'radius')
        radius.textContent = sprinkler['radius']

        // flow counter
        const flow = this._createElement('p', 'flow')
        flow.dataset.flowRate = sprinkler['flow']
        flow.textContent = '0'

        /*
        TODO: add precipiptation rates
        */

        // row to contain elements
        const li = this._wrapElements([nozzleAdjust.label, nozzleAdjust.input, radius, flow], 'li', 'table-row')
        li.id = `row-${sprinkler.nozzle}`
        
        return li
      })
      
      list.forEach(el => this.sprinklers.append(el))
     
      // total flow
      const total = this._createElement('span', 'cell-4')
      total.textContent = '0'
      total.id = 'total-flow'
      const totalLabel = this._createElement('span', 'cell-1-3')
      totalLabel.textContent = 'Total Flow'
      const totalRow = this._wrapElements([totalLabel, total], 'li', 'table-row')
      totalRow.classList.add('total')
     
      // stations
      const stations = this._createElement('span', 'cell-4')
      stations.textContent = '0'
      stations.id = 'stations'
      const stationsLabel = this._createElement('span', 'cell-1-3')
      stationsLabel.textContent = 'Stations required' 
      const stationsRow = this._wrapElements([stationsLabel, stations], 'li', 'table-row')
      

      this.sprinklers.append(totalRow, stationsRow )
    }
  }

 

  bindSelectSprinkler(handler) {
    this.sprinklerSelect.addEventListener('change', e => {
     
      if (e.target.id === 'sprinkler-type') {
        handler(e.target.value)
      }
    })
  }
}