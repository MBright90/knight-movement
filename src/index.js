import dom from './modules/utilities/indexDom'
import ChessMaster from './modules/chessMaster/chessMaster'
import './styles/style.css'

const master = new ChessMaster()
console.log(master)
dom.createNewBoard(64)

function setKnightImageListeners() {
  const allCells = document.querySelectorAll('.chess-cell')
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
    })
  })
}

setKnightImageListeners()
