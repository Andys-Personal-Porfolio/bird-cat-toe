
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
      if(this.board[i] === dataModel.whoseTurn &&this.board[i+1] === dataModel.whoseTurn && this.board[i+2] === dataModel.whoseTurn){
        return dataModel.whoseTurn;
      }
    }
    //check vertical wins
    for(var i = 0; i < 3; i+=1){
      if(this.board[i] === dataModel.whoseTurn &&this.board[i+3] === dataModel.whoseTurn && this.board[i+6] === dataModel.whoseTurn){
        return dataModel.whoseTurn;
      }
    }
    //Check diagonal wins
    if(this.board[2] === dataModel.whoseTurn && this.board[4] === dataModel.whoseTurn && this.board[6] === dataModel.whoseTurn) {
      return dataModel.whoseTurn
    }else if(this.board[0] === dataModel.whoseTurn &&this.board[4] === dataModel.whoseTurn && this.board[8] === dataModel.whoseTurn){
      return dataModel.whoseTurn
    }
    if(!this.board.includes(undefined)){
      return 'draw';
    }
  }
  saveWin() {
    if (dataModel.winner === 1){
      this.playerOne.wins.push(this.board)
    } else if(dataModel.winner ===2){
      this.playerTwo.wins.push(this.board)
    }
  }
  resetGame() {
    dataModel.whoseTurn = 1;
    this.board = [,,,,,,,,,];
    dataModel.winner = undefined;
    for(var i = 0; i <= 8; i++){
      var blankSpot = document.getElementById(i);
      blankSpot.innerText = '';
    }
  }
}
