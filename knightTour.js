const chessBoard = [];
const boardSize = 10;

// Create a chessboard of `BoradSize`
for (let startingPoint = 0; startingPoint < boardSize; startingPoint++) {
	chessBoard[startingPoint] = [];
}

// Check for valid moves
// knight should not move out of the chessboard area
// Knight should not occupy the same chessboard location
const updateMove = (xAxis, yAxis, levelPoint) => {
	if ((xAxis >= 0) &&
    	(yAxis >= 0) &&
    	(xAxis <= boardSize - 1) &&
    	(yAxis <= boardSize - 1) &&
    	chessBoard[xAxis][yAxis] == null
	) {
    	chessBoard[xAxis][yAxis] = levelPoint;
	}
}

// All the possible moves of a knight in the terms of x and y cordinates
const updateAllMoves = (xAxis, yAxis, levelPoint) => {
	updateMove(xAxis + 1, yAxis + 2, levelPoint);
	updateMove(xAxis + 2, yAxis + 1, levelPoint);
	updateMove(xAxis + 2, yAxis - 1, levelPoint);
	updateMove(xAxis + 1, yAxis - 2, levelPoint);
	updateMove(xAxis - 1, yAxis - 2, levelPoint);
	updateMove(xAxis - 2, yAxis - 1, levelPoint);
	updateMove(xAxis - 2, yAxis + 1, levelPoint);
	updateMove(xAxis - 1, yAxis + 2, levelPoint);
}

// Check if the knight is moving within the chessboard area
const addAllPossible = (level) => {
	for (let xAxis = 0; xAxis < boardSize; xAxis++) {
    	for (let yAxis = 0; yAxis < boardSize; yAxis++) {
        	if (chessBoard[xAxis][yAxis] === level) {
            	updateAllMoves(xAxis, yAxis, level + 1);
        	}
    	}
	}
}

// Check for all possible path
const findPath = (startX, startY, endX, endY) => {
	// Set the start x and y position of the knight
	updateMove(startX, startY, 0);
	let index = 0;
	// Check and addd all the possible moves from point A to B
	do {
    	addAllPossible(index++);
	} while (chessBoard[endX][endY] == null);
	// Print a table to showcase the possible moves
	console.table(chessBoard);
	// Return the number of moves required to move from position A to B
	return chessBoard[endX][endY];
}

console.log('Total Moves required', findPath(9, 9, 0, 0));


