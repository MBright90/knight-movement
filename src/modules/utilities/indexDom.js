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

  // Initiating dom script
  const displayWrapper = createClassElement('div', 'display-wrapper')

  const pageHeaderDiv = document.createElement('header')
  const pageHeader = createTextElement('h1', 'Place Your Knight')
  pageHeaderDiv.appendChild(pageHeader)

  const mainDiv = document.createElement('main')
  const chessboardDiv = createClassElement('div', 'chessboard')
  mainDiv.appendChild(chessboardDiv)

  displayWrapper.appendChildren(pageHeaderDiv, mainDiv)
  document.body.appendChild(displayWrapper)

  // Set of functions to create a new, resized chessboard
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

  // Functions to add and remove knight image
  function addBackgroundKnight(event) {
    if (!event.target.style.backgroundColor) event.target.style.backgroundImage = 'url("./assets/images/knight-black.svg")'
    else event.target.style.backgroundImage = 'url("./assets/images/knight-white.svg")'
  }

  function removeBackgroundKnight(event) {
    event.target.style.backgroundImage = 'none'
  }

  return {
    createNewBoard,

    addBackgroundKnight,
    removeBackgroundKnight,
  }
})()

export default dom
