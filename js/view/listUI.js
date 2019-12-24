class SavedNozzles {
  constructor () {
    this.savedNozzlesTitle = U.createElement('h2')
    this.savedNozzlesTitle.textContent = 'My nozzles'
    this.savedNozzlesList = U.createElement('ul')
    this.savedNozzlesContainer = U.wrapElements([this.savedNozzlesTitle, this.savedNozzlesList], 'article', 'hidden')
    this.savedNozzlesContainer.id = 'saved-nozzles-ui'
    this.savedNozzlesContainer.style.visibility = 'hidden'
  }

  displaySavedNozzles (data) {
    U.removeFirstChildren(this.savedNozzlesList)
    data.forEach(item => {
      const name = U.createElement('h3')
      const family = U.createElement('p')
      const pressure = U.createElement('p')
      const flowRate = U.createElement('p')
      name.textContent = `${item.name}`
      family.textContent = `Type: ${item.family}`
      pressure.textContent = `Pressure: ${item.pressure}`
      flowRate.textContent = `Total flow: ${item.flowRate}` 
      const info = U.wrapElements([name, family, pressure, flowRate], 'div', 'info')
      const editButton = U.createElement('button', 'edit')
      editButton.textContent = 'Edit'
      const deleteButton = U.createElement('button', 'delete')
      const buttons = U.wrapElements([editButton, deleteButton], 'div', 'button-group')
      deleteButton.textContent = 'Delete'
      const li = U.wrapElements([info, buttons ], 'li', 'saved')
      this.savedNozzlesList.append(li)
    })
  }
}