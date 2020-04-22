
class Game {
  constructor() {
    this.board = [,,,,,,,,,];
  }
  checkWins() {
    var player = dataModel.whoseTurn;
    var spaces = this.board;
    //check horizontal wins
    for(var i = 0; i < 8; i+=3){
      if(spaces[i] === player &&spaces[i+1] === player && spaces[i+2] === player){
        return player;
      }
    }
    //check vertical wins
    for(var i = 0; i < 3; i+=1){
      if(spaces[i] === player && spaces[i+3] === player && spaces[i+6] === player){
        return player;
      }
    }
    //Check diagonal wins
    if(spaces[2] === player && spaces[4] === player && spaces[6] === player) {
      return player
    }else if(spaces[0] === player &&spaces[4] === player && spaces[8] === player){
      return player
    }
    if(!spaces.includes(undefined)){
      return 'draw';
    }
  }
  saveWin() {
    if (dataModel.winner === 1){
      dataModel.playerOne.wins.push(this.board);
    } else if(dataModel.winner === 2){
      dataModel.playerTwo.wins.push(this.board);
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
