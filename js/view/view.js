class View {
  constructor(header) {
    // root
    this.app = U.getElement('#root')

    /* header */
    this.header = header.header
    /* form */
      // Legend
  
  this.legendHeading = U.createElement('h2', 'legend')
  this.legendHeading.textContent = 'Select your sprinkler type, working pressure and flow rate'

  // Sprinkler type input
  this.flowInput = U.createInput('number', 'flow-rate', 'Flow rate (Litres per minute)', '', true)
  this.flowInput.min = 1
  this.flowInput.classList.add('hidden-onload')
  
  this.setButton = U.createElement('button', 'hidden-onload')
  this.setButton.id = 'set-values'
  this.setButton.textContent = 'Set sprinkler type, pressure and flow'
  this.formHeader = U.wrapElements([this.legendHeading, this.flowInput, this.setButton],'fieldset', 'form-header')

  // form body - inputs for number of sprinklers and view number of stations calculated 
  this.calculatorHeading = U.createElement('h2', 'legend')
  this.calculatorHeading.textContent = 'How many of each sprinkler do you need?'
  
  
  this.calculator = U.wrapElements([this.calculatorHeading], 'fieldset')
  this.form = U.wrapElements([this.formHeader, this.calculator], 'form')

  /* end form */

    // main
    this.main = U.createElement('main')
    this.main.append(this.form)
 
    this.app.append(this.header, this.main)

    // hide elememnts on load
    this.toggleOnloadHiddenEls(null)
    /* end constructor */
  }

  /* public functions */
  // toggle flowrate and set button visibility
  toggleOnloadHiddenEls(type) {
    let els = document.getElementsByClassName('hidden-onload')
    els = [...els].map(el => el.style.visibility = type ? 'visible' : 'hidden')

  }
  
  // fills sprinklerSelect with available sprinkler options
  displaySprinklerSelect(data) {
    if (this.sprinklerSelect) {U.removeFirstChildren(this.sprinklerSelect)}
    this.sprinklerSelect = U.createSelect('sprinkler-type', 'Sprinkler Type', 'sprinkler-type', true)
    const select = this.sprinklerSelect.children[1]
    const options = U.createOptions(data, 'sprinkler-options')
    options.forEach(op => select.append(op))
    this.formHeader.insertBefore(this.sprinklerSelect, this.flowInput)
  }

  // displays pressure options available to sprinkler set
  displayPressureSelect(data) {
    console.log(data)
    if (this.pressureSelect) {
      
      U.removeFirstChildren(this.pressureSelect)
    }
    this.pressureSelect = U.createSelect('pressure', 'Pressure (Bar)', 'pressure', true )
    const select = this.pressureSelect.children[1]
    const options = U.createOptions(data, 'pressure-options')
    options.forEach(op => select.append(op))
    this.formHeader.insertBefore(this.pressureSelect, this.flowInput)
  }

  // displays list of sprinklers, amount adjusters, throw and flow
  displayCalculator(name, sprinklers, rad) {
    
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
        const arcAdjust = U.createInput('number', `n-${sprinkler.arc}`, sprinkler.arc, `amount`)

        // throw indicator
        const radius = U.createElement('p', 'radius')
        radius.textContent = sprinkler['radius'] ? sprinkler['radius'] : rad

        // flow counter
        const flow = U.createElement('p', 'flow')
        flow.dataset.flowRate = sprinkler['flow']
        flow.textContent = '0'

        /*
        TODO: add precipiptation rates
        */

        // row to contain elements
        const li = U.wrapElements([arcAdjust.label, arcAdjust.input, radius, flow], 'li', 'table-row')
        li.id = `row-${sprinkler.arc}`
        
        return li
      })
      
      const ul = U.createElement('ul')
      list.forEach(el => ul.append(el))
     
      // total flow
      const total = U.createElement('span', 'cell-4')
      total.textContent = '0'
      total.id = 'total-flow'
      const totalLabel = U.createElement('span', 'cell-1-3')
      totalLabel.textContent = 'Total Flow'
      const totalRow = U.wrapElements([totalLabel, total], 'li', 'table-row')
      totalRow.classList.add('total')
     
      // stations
      const stations = U.createElement('span', 'cell-4')
      stations.textContent = '0'
      stations.id = 'stations'
      const stationsLabel = U.createElement('span', 'cell-1-3')
      stationsLabel.textContent = 'Stations required' 
      const stationsRow = U.wrapElements([stationsLabel, stations], 'li', 'table-row')
      

      ul.append(totalRow, stationsRow )
      return U.wrapElements([title, ul], 'section', 'table')
    }
  }

  // display full list of available sprinklers
  displaySprinklers(data) {
    U.removeFirstChildren(this.calculator)
    this.sprinklers = U.createElement('article', 'list')
    this.submitButton = U.createInput('submit', 'save-button', '', '').input
    this.submitButton.value = 'save nozzle data'
    // delete all nodes
    U.removeFirstChildren(this.sprinklers)

    if (this.sprinklers.length === 0) {
      const p = this.createElement('p')
      p.textContent = 'Set your sprinkler type, pressure and flow rate'
      this.sprinklers.append(p);
    } else {
      data.forEach((obj) => {
        
        
        this.sprinklers.append(this.displayCalculator(obj.title, obj.set, obj.radius))
      })
    }
    this.calculator.append(this.sprinklers, this.submitButton)
    
  }
 
  /* event handlers */
  bindSelectSprinkler(handler) {
    this.sprinklerSelect.addEventListener('change', e => {
     
      if (e.target.id === 'sprinkler-type') {
        handler(e.target.value)
      }
    })
  }

  bindSelectPressure(handler) {
    this.pressureSelect.addEventListener('change', e => {
      if (e.target.id === 'pressure') {
        handler(e.target.value)
      }    
    })
  }

  bindFlowInput(handler) {
    this.flowInput.addEventListener('change', e => {
      if (e.target.id === 'flow-rate') {
        const flow = parseInt(e.target.value, 10)
        handler(flow)
      }
    })
  }
}