export default class ChessMaster {
  constructor() {
    this.startingPos = null
    this.endingPos = null
    this.boardSize = 64
    this.xKnightMoves = [-2, -2, -1, -1, 1, 1, 2, 2]
    this.yKnightMoves = [-1, 1, -2, 2, -2, 2, -1, 1]

    this.knightMoveGraph = this.#createKnightMoveGraph()
  }

  // Takes the position of the specified cell and returns an array of all the possible knight moves
  #findAllMoves(x, y) {
    const upperBound = Math.sqrt(this.boardSize)
    const knightsArray = []
    for (let i = 0; i < this.xKnightMoves.length; i += 1) {
      const xPos = x + this.xKnightMoves[i]
      const yPos = y + this.yKnightMoves[i]
      // Check the new x and new y positions are within bounds of the current chessBoard
      if (xPos < upperBound && xPos >= 0 && yPos < upperBound && yPos >= 0) {
        knightsArray.push([xPos, yPos])
      }
    }
    return knightsArray
  }

  // Takes this.boardSize and creates an object, with cell coordinates as keys and an array of
  // possible knight moves as values; stored as this.knightMoveMatrix
  #createKnightMoveGraph() {
    const moveObject = {}
    const boardLength = Math.sqrt(this.boardSize)
    for (let i = 0; i < boardLength; i += 1) {
      for (let j = 0; j < boardLength; j += 1) {
        moveObject[`${i}${j}`] = this.#findAllMoves(i, j)
      }
    }
    return moveObject
  }

  // Setter functions
  setBoardSize(newSize) {
    this.boardSize = newSize
    this.knightMoveGraph = this.#createKnightMoveGraph
  }

  // Getter functions
  getBoardSize() {
    return this.boardSize
  }
}
