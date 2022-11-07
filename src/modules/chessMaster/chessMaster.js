export default class ChessMaster {
  constructor() {
    this.startingPos = null
    this.endingPos = null
    this.boardSize = 64
    this.knightMoveMatrix = {}
    this.xKnightMoves = [-2, -2, -1, -1, 1, 1, 2, 2]
    this.yKnightMoves = [-1, 1, -2, 2, -2, 2, -1, 1]
  }

  // Takes the position of the specified cell and returns an array of all the possible knight moves
  findAllMoves(x, y) {
    const upperBound = Math.sqrt(this.boardSize)
    const knightsArray = []
    for (let i = 0; i < this.xKnightMoves.length; i += 1) {
      const xPos = x + this.xKnightMoves[i]
      const yPos = y + this.yKnightMoves[i]
      // Check the new x and new y positions are within bounds of chessBoard
      if (xPos < upperBound && xPos >= 0 && yPos < upperBound && yPos >= 0) {
        knightsArray.push([xPos, yPos])
      }
    }
    return knightsArray
  }

  // Takes this.boardSize and creates an object, with cell coordinates as keys and an array of
  // possible knight moves as values; stored as this.knightMoveMatrix
  resetKnightMoveMatrix() {
    this.knightMoveMatrix = {}
    const boardLength = Math.sqrt(this.boardSize)
    for (let i = 0; i < boardLength; i += 1) {
      for (let j = 0; j < boardLength; j += 1) {
        this.knightMoveMatrix[`${i}${j}`] = this.findAllMoves(i, j)
      }
    }
  }
}
// Create an adjacency board with createKnightMoveMatrix using findAllMoves as an object?
