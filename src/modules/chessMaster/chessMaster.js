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
        knightsArray.push(`${xPos}${yPos}`)
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

  knightMoveRecursive(currentCoord, targetCoord, takenMoves = []) {
    // If the current coord matches the target coord return the target coord
    if (currentCoord === targetCoord) return [targetCoord]
    // If the current coord has already been checked within this loop return -1
    if (takenMoves.includes(currentCoord)) return false

    // Add the current position to the taken Moves array
    takenMoves[takenMoves.length] = currentCoord

    // Find the array of moves for the current position and recursively call function on each
    // Returns -1 if that move has already been taken
    const currentMoveSet = this.knightMoveGraph[currentCoord]

    // Create an array to compare the return values of each possible move set
    const compareArr = []
    currentMoveSet.forEach((move) => {
      const result = this.knightMoveRecursive(move, targetCoord, takenMoves)
      if (result) compareArr[compareArr.length] = result
    })
    compareArr.sort((arrA, arrB) => arrA.length - arrB.length)
    // Return the current shortest path to the target coord
    return compareArr[0]
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
