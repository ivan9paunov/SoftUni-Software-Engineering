function ticTacToe(commands) {

    function printMatrix() {
        board.forEach(row => console.log(row.join('\t')));
    }

    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]];

    let player = 'X';
    
    for (let command of commands) {
        const [row, col] = command.split(' ').map(Number);

        if (board[row][col] != false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        board[row][col] = player;

        for (let i = 0; i <= 2; i++) {
            if (
                (board[i][0] == player && board[i][1] == player && board[i][2] == player) ||
                (board[0][i] == player && board[1][i] == player && board[2][i] == player) ||
                (board[0][0] == player && board[1][1] == player && board[2][2] == player) ||
                (board[0][2] == player && board[1][1] == player && board[2][0] == player)
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }
        }

        let includesFalse = false;

        if (board[0].includes(false) || board[1].includes(false) || board[2].includes(false)) {
            includesFalse = true;
        }

        if (!includesFalse) {
            console.log('The game ended! Nobody wins :(');
            printMatrix();
            return;
        }

        player = player == "X" ? "O" : "X";
    }
}

ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);

// ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);

// ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);