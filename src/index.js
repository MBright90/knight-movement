import dom from './modules/utilities/indexDom'
import ChessMaster from './modules/chessMaster/chessMaster'
import './styles/style.css'

const master = new ChessMaster()
console.log(master)
dom.createNewBoard(64)
