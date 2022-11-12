export default class ChessMaster {
  constructor() {
    // this.startingPos = null
    // this.endingPos = null
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

  knightMoveRecursive(currentSpace, targetSpace, parentSpace = null, takenMoves = [], queue = []) {
    // base cases
    // if currentSpace is the target, return current space
    if (currentSpace === targetSpace) return [currentSpace, parentSpace]

    // Check if currentSpace has been checked. If not, add it to the checked spaces list
    if (!takenMoves.includes(currentSpace)) {
      takenMoves.push(currentSpace)

      // Retrieve the current moves for this space and add the move and the parent to the queue
      const currentMoveSet = this.knightMoveGraph[currentSpace]
      currentMoveSet.forEach((move) => { queue[queue.length] = [move, currentSpace] })
    }

    // Retrieve the next space from the queue
    const nextMove = queue.shift()
    // Recursively search through the graph
    const resultArr = this.knightMoveRecursive(
      nextMove[0],
      targetSpace,
      nextMove[1],
      takenMoves,
      queue,
    )
    // If the current result arrays parent is the current space, add the space to the results array
    if (resultArr[resultArr.length - 1][1] === currentSpace) {
      resultArr[resultArr.length] = [currentSpace, parentSpace]
    }
    return resultArr
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
