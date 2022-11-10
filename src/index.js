import dom from './modules/utilities/indexDom'
import ChessMaster from './modules/chessMaster/chessMaster'
import './styles/style.css'

const master = new ChessMaster()
console.log(master)
dom.createNewBoard(64)

const allCells = document.querySelectorAll('.chess-cell')

function setTargetImageListeners() {
  allCells.forEach((cell) => {
    if (!cell.getElementsByClassName.backgroundImage) cell.addEventListener('mouseover', dom.addTargetClass)
  })

  allCells.forEach((cell) => {
    cell.addEventListener('mouseout', dom.removeTargetClass)
  })

  allCells.forEach((cell) => {
    cell.addEventListener('click', () => {
      allCells.forEach((chessCell) => {
        chessCell.removeEventListener('mouseover', dom.addTargetClass)
        chessCell.removeEventListener('mouseout', dom.removeTargetClass)
      })
      dom.changeText('')
    })
  })
}

function setKnightImageListeners() {
  allCells.forEach((cell) => {
    cell.addEventListener('mouseover', dom.addBackgroundKnight)
  })

  allCells.forEach((cell) => {
    cell.addEventListener('mouseout', dom.removeBackgroundKnight)
  })

  allCells.forEach((cell) => {
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

setKnightImageListeners()
