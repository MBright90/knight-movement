import dom from './modules/utilities/indexDom'
import ChessMaster from './modules/chessMaster/chessMaster'
import './styles/style.css'

const master = new ChessMaster()
dom.createNewBoard(64)

let allCells = document.querySelectorAll('.chess-cell')
const sizeSelector = document.querySelector('select')
const resetButton = document.querySelector('.reset-button-container > button')

function returnChosenCoords() {
  const knight = document.querySelector('.active')
  const target = document.querySelector('.target')
  return [`${knight.dataset.xPos}${knight.dataset.yPos}`, `${target.dataset.xPos}${target.dataset.yPos}`]
}

function addKnightListeners(cell) {
  cell.addEventListener('mouseover', dom.addBackgroundKnight)
  cell.addEventListener('mouseout', dom.removeBackgroundKnight)
}

function removeKnightListeners(cell) {
  cell.removeEventListener('mouseover', dom.addBackgroundKnight)
  cell.removeEventListener('mouseout', dom.removeBackgroundKnight)
}

function addTargetListeners(cell) {
  if (!cell.style.backgroundImage || cell.style.backgroundImage === 'none') {
    cell.addEventListener('mouseover', dom.addTargetClass)
    cell.addEventListener('mouseout', dom.removeTargetClass)
  }
}

function removeTargetListeners(cell) {
  cell.removeEventListener('mouseover', dom.addTargetClass)
  cell.removeEventListener('mouseout', dom.removeTargetClass)
}

function completeKnightMovement() {
  // Remove the event listener that place the target in a chosen cell
  // and progress the data flow of the program
  allCells.forEach((cell) => {
    removeTargetListeners(cell)
    cell.removeEventListener('click', completeKnightMovement)
  })
  dom.showLoading()
  const chosenCells = returnChosenCoords()
  const movementArray = master.getKnightArray(chosenCells[0], chosenCells[1])
  dom.removeLoading()
  dom.showKnightMoves(movementArray)
}

function setTargetImageListeners() {
  // Remove the event listeners that place the knight in a chosen cell
  // and progress the data flow of the program
  allCells.forEach((cell) => {
    cell.removeEventListener('click', () => {
      allCells.forEach((chessCell) => removeKnightListeners(chessCell))
      dom.changeText('Place Your Target')
      dom.setResetActive()
    })
  })

  // Event listeners to show possible target locations when mouse is hovered over them
  allCells.forEach((cell) => addTargetListeners(cell))

  // Event listener to add the target mark to the chosen cell and to
  // move the data flow of the program to the movement phase
  allCells.forEach((cell) => {
    if (!cell.style.backgroundImage || cell.style.backgroundImage === 'none') {
      cell.addEventListener('click', completeKnightMovement)
    }
  })
}

function setKnightImageListeners() {
  // Setting event listeners to show possible knight locations when mouse is hovered over
  allCells.forEach((cell) => addKnightListeners(cell))
  allCells.forEach((cell) => {
  // Event listener to add the knight mark to the chosen cell and to
  // move the data flow of the program to the target selection phase
    cell.addEventListener('click', () => {
      allCells.forEach((chessCell) => removeKnightListeners(chessCell))
      setTargetImageListeners()
      dom.changeText('Place Your Target')
      dom.setResetActive()
    })
  })
}

function resetAll() {
  // A flow of functions and event listener removal to completely reset the current chessboard
  // to blank. This does not reset the size of the chess board.
  dom.endActiveMoves()
  allCells.forEach((cell) => {
    removeTargetListeners(cell)
    cell.removeEventListener('click', completeKnightMovement)
    cell.classList.remove('stepped')
  })

  document.querySelectorAll('.active').forEach((cell) => dom.resetCell(cell))
  const targetCell = document.querySelector('.target')
  if (targetCell) dom.resetCell(targetCell)
  dom.changeText('Place Your Knight')
  dom.removeLoading()
  setKnightImageListeners()
  dom.setResetDisabled()
}
resetButton.addEventListener('click', resetAll)

function changeBoardSize() {
  const newSize = sizeSelector.value
  dom.createNewBoard(sizeSelector.value)
  master.setBoardSize(newSize)
  dom.changeText('Place Your Knight')
  allCells = document.querySelectorAll('.chess-cell')
  setKnightImageListeners()
}
sizeSelector.addEventListener('change', changeBoardSize)

setKnightImageListeners()
