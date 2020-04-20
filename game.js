
class Game {
  constructor() {
    this.board = [,,,,,,,,,];
    this.playerOne = new Player(1);
    this.playerTwo = new Player(2);
    this.turnIs = 1;
  }
  checkScore() {
    //check horiztonal wins
    for(var i = 0; i < 8; i+=3){
      if(this.board[i] === whoseTurn &&this.board[i+1] === whoseTurn && this.board[i+2] === whoseTurn){
        return whoseTurn;
      }
    }
    //check vertical wins
    for(var i = 0; i < 3; i+=1){
      if(this.board[i] === whoseTurn &&this.board[i+3] === whoseTurn && this.board[i+6] === whoseTurn){
        return whoseTurn;
      }
    }
    //Check diagonal wins
    if(this.board[2] === whoseTurn && this.board[4] === whoseTurn && this.board[6] === whoseTurn) {
      return whoseTurn
    }else if(this.board[0] === whoseTurn &&this.board[4] === whoseTurn && this.board[8] === whoseTurn){
      return whoseTurn
    }
    if(!this.board.includes(undefined)){
      return 'draw';
    }
  }
  saveWin() {
    if (winner === 1){
      this.playerOne.wins.push(this.board)
    } else if(winner ===2){
      this.playerTwo.wins.push(this.board)
    }
  }
  resetGame() {
    whoseTurn = 1;
    this.board = [,,,,,,,,,];
    winner = undefined;
    for(var i = 0; i <= 8; i++){
      var blankSpot = document.getElementById(i);
      blankSpot.innerText = '';
    }
  }
}
