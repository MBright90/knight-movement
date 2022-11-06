export default class ChessMaster {
  constructor() {
    this.startingPos = null
    this.endingPos = null
    this.knightMoveMatrix = {}
    this.xKnightMoves = [-2, -2, -1, -1, 1, 1, 2, 2]
    this.yKnightMoves = [-1, 1, -2, 2, -2, 2, -1, 1]
  }

  // Takes the position of the cell and returns all the possible knight moves as an array
  findAllMoves(x, y) {
    const knightsArray = []
    for (let i = 0; this.xKnightMoves.length > i; i += 1) {
      for (let j = 0; this.yKnightMoves.length > j; j += 1) {
        knightsArray.push([x + this.xKnightMoves[i], y + this.yKnightsMoves[j]])
      }
    }
    return knightsArray
  }

  createKnightMoveMatrix(x, y) {
    console.log(this.findAllMoves(x, y))
  }
}

const master = new ChessMaster()

master.createKnightMoveMatrix(3, 3)
