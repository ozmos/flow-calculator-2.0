class View {
  constructor(header, savedNozzlesUI) {
    // root
    this.app = U.getElement('#root')

    /* header */
    this.header = header

    /* saved nozzles UI */
    this.savedNozzlesUI = savedNozzlesUI
    /* form */
      // Legend
  
  this.legendHeading = U.createElement('h2', 'legend')
  this.legendHeading.textContent = 'Select your sprinkler type, working pressure and flow rate'

  // flow input
  this.flowInput = U.createInput('number', 'flow-rate', 'Flow rate (Litres per minute)','', true, 'required')
  this.flowInput.min = 1
  this.flowInput.classList.add('hidden-onload')
  // name for set input
  this.nameInput = U.createInput('text', 'name', 'Name for nozzleset', '', true, true )
  this.nameInput.classList.add('hidden-onload')
  // set button
  this.setButton = U.createElement('button', 'hidden-onload')
  this.setButton.id = 'set-values'
  this.setButton.textContent = 'Set sprinkler type, pressure and flow'
  this.formHeader = U.wrapElements([this.legendHeading, this.flowInput, this.nameInput, this.setButton],'fieldset', 'form-header')

  // form body - inputs for number of sprinklers and view number of stations calculated 
  this.calculatorHeading = U.createElement('h2', 'legend')
  this.calculatorHeading.textContent = 'How many of each sprinkler do you need?'
  
  
  this.calculator = U.wrapElements([this.calculatorHeading], 'fieldset')
  this.form = U.wrapElements([this.formHeader, this.calculator], 'form')

  /* end form */

    // main
    this.main = U.createElement('main')
    this.main.append(this.form, this.savedNozzlesUI.savedNozzlesContainer)
 
    this.app.append(this.header.header, this.main)

    // hide elememnts on load
    U.toggleOnloadHiddenEls(null)
    /* end constructor */
  }

  
  
  
  /* create and display UI elements */
  // fills sprinklerSelect with available sprinkler options
  displaySprinklerSelect(data) {
    if (this.sprinklerSelect) {U.removeFirstChildren(this.sprinklerSelect)}
    this.sprinklerSelect = U.createSelect('sprinkler-type', 'Sprinkler Type', 'sprinkler-type', true, 'required')
    const select = this.sprinklerSelect.children[1]
    const options = U.createOptions(data, 'sprinkler-options')
    options.forEach(op => select.append(op))
    this.formHeader.insertBefore(this.sprinklerSelect, this.flowInput)
  }

  // displays pressure options availgit able to sprinkler set
  displayPressureSelect(data) {
    if (this.pressureSelect) {
      
      U.removeFirstChildren(this.pressureSelect)
    }
    this.pressureSelect = U.createSelect('pressure', 'Pressure (Bar)', 'pressure', true, 'required' )
    const select = this.pressureSelect.children[1]
    const options = U.createOptions(data, 'pressure-options')
    options.forEach(op => select.append(op))
    this.formHeader.insertBefore(this.pressureSelect, this.flowInput)
  }

  // displays list of sprinklers, amount adjusters, throw and flow
  displayCalculator(name, sprinklers, rad, subTotal) {
    
    // show default message if no sprinklers available
    if (sprinklers.length === 0) {
      const p = this.createElement('p')
      p.textContent = 'Set your sprinkler type, pressure and flow rate'
      this.sprinklers.append(p);
    } else {
      // display chosen sprinklers
      const title = U.createElement('h3')
      title.textContent = name
      const list = sprinklers.map((sprinkler, i) => {
       
        // amount adjuster
        const arcAdjust = U.createInput('number', `${name}-${sprinkler.arc}`, sprinkler.arc, `amount`)
        arcAdjust.input.value = sprinkler.amount
        arcAdjust.input.dataset.index = i

        // throw indicator
        const radius = U.createElement('p', 'radius')
        radius.textContent = sprinkler['radius'] ? sprinkler['radius'] : rad

        // flow counter
        const flow = U.createElement('p', 'flow')
        flow.dataset.flowRate = sprinkler['flow-rate']
        flow.textContent = sprinkler.totalFlow ? sprinkler.totalFlow.toFixed(2) : 0

        /*
        TODO: add precipiptation rates
        */

        // row to contain elements
        const li = U.wrapElements([arcAdjust.label, arcAdjust.input, radius, flow], 'li', 'table-row')
        li.dataset.name = name
        li.classList.add(`nozzle`)
        li.id = `row-${sprinkler.arc}`
        
        return li
      })
      
      const ul = U.createElement('ul')
      list.forEach(el => ul.append(el))
     
      // total flow
      const total = U.createElement('span', 'cell-4')
      total.textContent = subTotal
      total.id = 'total-flow'
      const totalLabel = U.createElement('span', 'cell-1-3')
      totalLabel.textContent = 'Total Flow'
      const totalRow = U.wrapElements([totalLabel, total], 'li', 'table-row')
      totalRow.classList.add('total')
     
      ul.append(totalRow)
      return U.wrapElements([title, ul], 'section', 'table')
    }
  }

  // display full list of available sprinklers
  displaySprinklers(data, total, stations) {
    U.removeFirstChildren(this.calculator)
    this.sprinklers = U.createElement('article', 'list')
    // save button
    this.saveButton = U.createInput('submit', 'save-button').input
    this.saveButton.value = 'save nozzle data'
    // delete all nodes
    U.removeFirstChildren(this.sprinklers)

    if (this.sprinklers.length === 0) {
      const p = this.createElement('p')
      p.textContent = 'Set your sprinkler type, pressure and flow rate'
      this.sprinklers.append(p);
    } else {
      data.forEach((obj) => {
        this.sprinklers.append(this.displayCalculator(obj.title, obj.set, obj.radius, obj.subTotal))
      })
    }
    
    // grand total flow
    this.grandTotal = U.createElement('span', 'cell-4')
    this.grandTotal.textContent = total
    const totalLabel = U.createElement('span', 'cell-1-3')
    totalLabel.textContent = 'Total Flow'
    const totalRow = U.wrapElements([totalLabel, this.grandTotal], 'li', 'table-row')
    
    // stations required
    this.stations = U.createElement('span', 'cell-4')
    this.stations.textContent = stations
    this.stations.id = 'stations'
    const stationsLabel = U.createElement('span', 'cell-1-3')
    stationsLabel.textContent = 'Stations required' 
    const stationsRow = U.wrapElements([stationsLabel, this.stations], 'li', 'table-row')
    const totalWrapper = U.wrapElements([totalRow, stationsRow], 'ul', 'list')

      this.calculator.append(this.sprinklers, totalWrapper, this.saveButton)
  }
 
  displaySavedNozzlesUI (data) {
    this.savedNozzlesUI.displaySavedNozzles(data)
   
  }
  /* event handlers */
  // sprinkler select
  bindSelectSprinkler(handler) {
    this.sprinklerSelect.addEventListener('change', e => {
     
      if (e.target.id === 'sprinkler-type') {
        handler(e.target.value)
      }
    })
  }

  // creates new nozzleSet in model which then triggers view to render it in view
  bindSubmitPressureFlow(handler) {
    this.setButton.addEventListener('click', e => {
      const flow = parseInt(U.getElement('#flow-rate').value, 10)
      const pressure = U.getElement('#pressure').value
      e.preventDefault()
      handler(pressure, flow)
    })
  }

  // triggers when individual sprinkler number is adjusted
  bindAmountInput(handler) {
    const nozzles = U.getElements('.nozzle')
    
    nozzles.forEach(li => {
      li.addEventListener('change', e => {
        if (e.target.classList.contains('amount')) {
          handler(li.dataset.name, e.target.value, e.target.dataset.index)
        }
      })
    })
  }

  // to display UI to view, edit and delete saved nozzles
  bindDisplaySavedNozzlesUI(handler) {
    this.header.displaySavedNozzlesButton.addEventListener('click', e => {
      
      e.preventDefault()
      handler()
    })
  }
  
  
  // to save current nozzleSet to local storage
  bindSave(handler) {
    this.form.addEventListener('submit', e => {
      const name = U.getElement('#name').value
      e.preventDefault()
      handler(name)
      return false;
    }, false)
  }
}