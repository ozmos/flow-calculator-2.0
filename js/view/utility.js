class U {
  constructor() {

  }
  // helper functions
  static createElement(tag, className) {
    const el = document.createElement(tag)
    if (className) el.classList.add(className)
    return el
  }

  static getElement(selector) {
    return document.querySelector(selector)
  }

  static wrapElements(elements, tag, className) {
    const wrapper = this.createElement(tag, className)
    wrapper.append(...elements)
    return wrapper
  }

  static createInput(type, id, labelName, className, wrapped = false, required = false) {
    this.removeElement(`${id}`)
    const input = this.createElement('input', className)
    input.id = id
    input.type = type
    input.required = required
    const label = this.createElement('label')
    label.htmlFor = id
    label.textContent = labelName
    const wrapper = wrapped ? this.wrapElements([label, input], 'p', `${className}-container`) : null
    return wrapped ? wrapper : {'label': label, 'input': input}
  }

  static createSelect(id, labelName, className, wrapped = false, required = false) {
    this.removeElement(`${id}`)
    const select = this.createElement('select', className)
    select.id = id
    select.required = required
    const defaultOption = this.createElement('option', 'default-option')
    select.append(defaultOption)
    const label = this.createElement('label')
    label.htmlFor = id
    label.textContent = labelName
    const wrapper = wrapped ? this.wrapElements([label, select], 'p', `${className}-container`) : null
    return wrapped ? wrapper : {'label': label, 'select': select}
  }

  static removeElement(parent, selector) {
    
    if (this.getElement(selector)) parent.removeChild(this.getElement(selector))
  }

  static removeFirstChildren(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  static createOptions(data, className) {
    return data.map(key => {
      const option = this.createElement('option', className)
      option.value = key
      option.id = `option-${key}`
      option.textContent = key.toString()
      return option
    })
  }
}