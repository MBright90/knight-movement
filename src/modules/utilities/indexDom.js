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

  // Set of functions to create a new, resized chessboard
  function removeChessBoard() {
    const currentBoard = document.querySelector('.chessboard > div')
    if (currentBoard) currentBoard.remove()
  }

  function createChessBoard(boardSize) {
    const boardLength = Math.sqrt(boardSize)
    const cellContainer = document.createElement('div')
    for (let row = 0; row < boardSize; row += 1) {
      for (let col = 0; col < boardLength; col += 1) {
        const cell = createClassElement('div', 'chessCell')
        cell.dataset.xPos = row
        cell.dataset.yPos = col
        cellContainer.appendChild(cell)
      }
    }
    chessboardDiv.appendChild(cellContainer)
  }

  function createNewBoard(boardSize) {
    removeChessBoard()
    createChessBoard(boardSize)
  }

  return {
    createNewBoard,
  }
})()

export default dom
