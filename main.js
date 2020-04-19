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
