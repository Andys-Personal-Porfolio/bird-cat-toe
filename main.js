var game = new Game();
var winner;
var gameBoard = document.querySelector('.game-board');

var whoseTurn = 1;
gameBoard.addEventListener('click',addToBoard)

function addToBoard(event) {

  if(!game.board[event.target.id] && !winner){
      game.board[event.target.id] = whoseTurn;
      winner = game.checkScore();
      updateDisplay();

  } else if (winner) {
    game.saveWin();
    displayMini();
    game.resetGame();
  }
    updateHeader();

}

function updateDisplay() {
  var spot = document.getElementById(event.target.id);
  spot.innerText = whoseTurn;
  whoseTurn = whoseTurn === 1 ? 2 : 1
}

function updateHeader() {
    var turnHeader = document.querySelector('.turn-header');
    turnHeader.innerText = winner ||`It is player ${whoseTurn}'s turn`
}

function displayMini(){
  var miniGameBoard = document.getElementById('mini-game-board')
  if(winner === 1){
    var boards = game.playerOne.wins
  } else if (winner === 2) {
    var boards = game.playerTwo.wins
  }
  miniGameBoard.insertAdjacentHTML('beforeend', ` <section id = "single-mini-game">
    <article class = "mini-spot">${boards[boards.length -1][0] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][1] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][2] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][3] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][4] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][5] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][6] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][7] || ' '}
    </article>
    <article class = "mini-spot">${boards[boards.length -1][8] || ' '}
    </article>
    </trial>`)
}
