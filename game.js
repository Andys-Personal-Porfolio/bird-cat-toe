
class Game {
  constructor() {
    this.playerOne = new Player('one');
    this.playerTwo = new Player('two');
    this.board = [,,,,,,,,];
    this.turnIs = 1;
    this.winsOne = [[],[]];
    this.winsTwo = [];
    this.countOne = 0;
    this.countTwo = 0;
  }
  checkScore() {
    for(var i = 0; i < 8; i+=3){
      if(this.board[i] === 1 &&this.board[i+1] === 1 && this.board[i+2] === 1){
        return 'Player one wins!'
      }
      else if (this.board[i] === 2 &&this.board[i+1] === 2 && this.board[i+2] === 2){
        return 'Player two wins!'
      }
    }
    for(var i = 0; i < 3; i+=1){
      if(this.board[i] === 1 &&this.board[i+3] === 1 && this.board[i+6] === 1){
        return 'Player one wins!'
      }
      else if (this.board[i] === 2 &&this.board[i+3] === 2 && this.board[i+6] === 2){
        return 'Player two wins!'
      }
    }
  }

    // if this game condition is met,
    // return win = true;
    //if boards = full
    // return draw
  saveWin() {
    //if playerOne wins
    //push this.board to winsOne
  }
  resetGame() {
    // set board to empty
  }
}
