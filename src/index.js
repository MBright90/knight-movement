import dom from './modules/utilities/indexDom'
import ChessMaster from './modules/chessMaster/chessMaster'
import './styles/style.css'

const master = new ChessMaster()
console.log(master)
dom.createNewBoard(64)

const allCells = document.querySelectorAll('.chess-cell')
const resetButton = document.querySelector('.reset-button-container > button')

function completeKnightMovement() {
  // Remove the event listener that place the target in a chosen cell
  // and progress the data flow of the program
  allCells.forEach((cell) => {
    cell.removeEventListener('click', () => {
      allCells.forEach((chessCell) => {
        chessCell.removeEventListener('mouseover', dom.addTargetClass)
        chessCell.removeEventListener('mouseout', dom.removeTargetClass)
      })
      dom.changeText('Thinking...')
      completeKnightMovement()
    })
  })
  dom.showLoading()
}

function setTargetImageListeners() {
  // Remove the event listeners that place the knight in a chosen cell
  // and progress the data flow of the program
  allCells.forEach((cell) => {
    cell.removeEventListener('click', () => {
      allCells.forEach((chessCell) => {
        chessCell.removeEventListener('mouseover', dom.addBackgroundKnight)
        chessCell.removeEventListener('mouseout', dom.removeBackgroundKnight)
      })
      setTargetImageListeners()
      dom.changeText('Place Your Target')
      dom.setResetActive()
    })
  })

  // Event listeners to show possible target locations when mouse is hovered over them
  allCells.forEach((cell) => {
    if (!cell.getElementsByClassName.backgroundImage) cell.addEventListener('mouseover', dom.addTargetClass)
  })
  allCells.forEach((cell) => {
    cell.addEventListener('mouseout', dom.removeTargetClass)
  })

  // Event listener to add the target mark to the chosen cell and to
  // move the data flow of the program to the movement phase
  allCells.forEach((cell) => {
    cell.addEventListener('click', () => {
      allCells.forEach((chessCell) => {
        chessCell.removeEventListener('mouseover', dom.addTargetClass)
        chessCell.removeEventListener('mouseout', dom.removeTargetClass)
      })
      dom.changeText('Thinking...')
      completeKnightMovement()
    })
  })
}

function setKnightImageListeners() {
  // Setting event listeners to show possible knight locations when mouse is hovered over
  allCells.forEach((cell) => {
    cell.addEventListener('mouseover', dom.addBackgroundKnight)
  })
  allCells.forEach((cell) => {
    cell.addEventListener('mouseout', dom.removeBackgroundKnight)
  })

  allCells.forEach((cell) => {
  // Event listener to add the knight mark to the chosen cell and to
  // move the data flow of the program to the target selection phase
    cell.addEventListener('click', () => {
      allCells.forEach((chessCell) => {
        chessCell.removeEventListener('mouseover', dom.addBackgroundKnight)
        chessCell.removeEventListener('mouseout', dom.removeBackgroundKnight)
      })
      setTargetImageListeners()
      dom.changeText('Place Your Target')
      dom.setResetActive()
    })
  })
}

function resetAll() {
  // A flow of functions and event listener removal to completely reset the current chessboard
  // to blank. This does not reset the size of the chess board.
  allCells.forEach((cell) => {
    cell.removeEventListener('mouseover', dom.addTargetClass)
    cell.removeEventListener('mouseout', dom.removeTargetClass)
    cell.removeEventListener('click', () => {
      allCells.forEach((chessCell) => {
        chessCell.removeEventListener('mouseover', dom.addTargetClass)
        chessCell.removeEventListener('mouseout', dom.removeTargetClass)
      })
      dom.changeText('Thinking...')
      completeKnightMovement()
    })
  })

  setKnightImageListeners()
  document.querySelectorAll('.active').forEach((cell) => dom.resetCell(cell))
  const targetCell = document.querySelector('.target')
  if (targetCell) dom.resetCell(targetCell)
  dom.changeText('Place your Knight')
  dom.removeLoading()
}

resetButton.addEventListener('click', resetAll)

setKnightImageListeners()
