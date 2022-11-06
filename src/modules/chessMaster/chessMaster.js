export default class ChessMaster {
  constructor() {
    this.startingPos = null
    this.endingPos = null
    this.boardSize = 64
    this.knightMoveMatrix = {}
    this.xKnightMoves = [-2, -2, -1, -1, 1, 1, 2, 2]
    this.yKnightMoves = [-1, 1, -2, 2, -2, 2, -1, 1]
  }

  // Takes the position of the specified cell and returns all the possible knight moves as an array
  findAllMoves(x, y) {
    const upperBound = Math.sqrt(this.BoardSize)
    const knightsArray = []
    for (let i = 0; this.xKnightMoves.length > i; i += 1) {
      const xPos = x + this.xKnightMoves[i]
      const yPos = y + this.yKnightMoves[i]
      // Check the new x and new y positions are within bounds of chessBoard
      if (!xPos >= upperBound || !xPos < 0 || !yPos >= upperBound || !yPos < 0) {
        const newMove = [xPos, yPos]
        knightsArray.push(newMove)
      }
    }
    return knightsArray
  }

  createKnightMoveMatrix(x, y) {
    console.log(this.findAllMoves(x, y))
  }
}
// Create an adjacency board with createKnightMoveMatrix using findAllMoves as an object?
