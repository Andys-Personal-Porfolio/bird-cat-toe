var game = new Game();
var winner;
function addToBoard(spot, player) {
  game.board[spot] = player;
  winner = game.checkScore();
  console.log("game.board" ,game.board)
  console.log('winner', winner)
}
