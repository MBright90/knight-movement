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

  function setChessboardGrid(element, boardLength) {
    element.style.gridTemplateColumns = `repeat(${boardLength}, 1fr)`
    element.style.gridTemplateRows = `repeat(${boardLength}, 1fr)`
  }

  HTMLElement.prototype.appendChildren = function appendChildren(...children) {
    children.forEach((child) => this.appendChild(child))
    return this
  }

  // #####################
  // Initiating dom script
  // #####################
  const displayWrapper = createClassElement('div', 'display-wrapper')

  const pageHeaderDiv = document.createElement('header')

  const boardSelectorDiv = createClassElement('div', 'board-size-div')
  const boardSizeLabel = createTextElement('p', 'Board Size')
  const boardSizeInput = document.createElement('select')

  // Create drop down size menu
  const inputOptionElements = []
  const boardSizeOptions = ['16', '25', '36', '49', '64 (Standard)', '91', '100']
  boardSizeOptions.forEach((size) => {
    const newOption = createTextElement('option', size)
    newOption.setAttribute('value', parseInt(size.split(' ')[0], 10))
    inputOptionElements[inputOptionElements.length] = newOption
  })
  inputOptionElements.forEach((element) => boardSizeInput.appendChild(element))
  boardSelectorDiv.appendChildren(boardSizeLabel, boardSizeInput)

  const pageHeader = createTextElement('h1', 'Place Your Knight')

  const resetButtonContainer = createClassElement('div', 'reset-button-container')
  const resetButton = createTextElement('button', 'Reset')
  resetButtonContainer.appendChild(resetButton)

  pageHeaderDiv.appendChildren(boardSelectorDiv, pageHeader, resetButtonContainer)

  const mainDiv = document.createElement('main')
  const chessboardDiv = createClassElement('div', 'chessboard')
  mainDiv.appendChild(chessboardDiv)

  displayWrapper.appendChildren(pageHeaderDiv, mainDiv)
  document.body.appendChild(displayWrapper)

  // Function to change text content of h1
  function changeText(text) {
    pageHeader.textContent = text
  }

  // ####################################################
  // Set of functions to create a new, resized chessboard
  // ####################################################
  function removeChessBoard() {
    const currentBoard = document.querySelector('.chessboard > div')
    if (currentBoard) currentBoard.remove()
  }

  function createChessBoard(boardSize) {
    const blackCellStyle = 'background-color: #000;'
    const boardLength = Math.sqrt(boardSize)
    const cellContainer = document.createElement('div')
    setChessboardGrid(cellContainer, boardLength)

    for (let row = 0; row < boardLength; row += 1) {
      for (let col = 0; col < boardLength; col += 1) {
        const cell = createClassElement('div', 'chess-cell')
        cell.dataset.xPos = row
        cell.dataset.yPos = col
        cellContainer.appendChild(cell)
        if (row % 2 === 0 && col % 2 === 0) cell.style = blackCellStyle
        else if (row % 2 !== 0 && col % 2 !== 0) cell.style = blackCellStyle
      }
    }
    chessboardDiv.appendChild(cellContainer)
  }

  function createNewBoard(boardSize) {
    removeChessBoard()
    createChessBoard(boardSize)
  }

  // ###############################################
  // Functions to add and remove knight/target image
  // ###############################################
  function addBackgroundKnight(event) {
    if (!event.target.style.backgroundColor) event.target.style.backgroundImage = 'url("./assets/images/knight-black.svg")'
    else event.target.style.backgroundImage = 'url("./assets/images/knight-white.svg")'
  }

  function removeBackgroundKnight(event) {
    event.target.style.backgroundImage = 'none'
  }

  function addTargetClass(event) {
    event.target.classList.add('target')
  }

  function removeTargetClass(event) {
    event.target.classList.remove('target')
  }

  // ################
  // Return functions
  // ################
  return {
    createNewBoard,
    changeText,
    addBackgroundKnight,
    removeBackgroundKnight,
    addTargetClass,
    removeTargetClass,
  }
})()

export default dom
