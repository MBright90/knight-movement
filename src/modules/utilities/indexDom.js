const dom = (() => {
  // Utility functions for element creation and appending
  function createClassElement(element, ...classes) {
    const newElement = document.createElement(element)
    classes.forEach((newClass) => newElement.classList.add(newClass))
    return newElement
  }

  function createTextElement(element, text) {
    const newElement = document.createElement(element)
    newElement.textContent = text
    return newElement
  }

  HTMLElement.prototype.appendChildren = function appendChildren(children) {
    children.forEach((child) => this.appendChild(child))
    return this
  }

  // Initiating dom script
  const displayWrapper = createClassElement('div', 'display-wrapper')

  const pageHeaderDiv = document.createElement('header')
  const pageHeader = createTextElement('h1', 'Place Your Knight')
  pageHeaderDiv.appendChild(pageHeader)

  const mainDiv = document.createElement('main')
  const chessboardDiv = createClassElement('div', 'chessboard')
  mainDiv.appendChild(chessboardDiv)

  displayWrapper.appendChildren(pageHeaderDiv, mainDiv)
})()

export default { dom }
