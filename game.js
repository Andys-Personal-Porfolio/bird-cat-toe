
class Game {
  constructor() {
    this.board = [,,,,,,,,,];
  }
  checkWins() {

    var player = dataModel.whoseTurn;
    var space = this.board;
    //check horizontal wins
    for(var i = 0; i < 8; i+=3){
      if(space[i] === player &&space[i+1] === player && space[i+2] === player){
        return player;
      }
    }
    //check vertical wins
    for(var i = 0; i < 3; i+=1){
      if(space[i] === player && space[i+3] === player && space[i+6] === player){
        return player;
      }
    }
    //Check diagonal wins
    if(space[2] === player && space[4] === player && space[6] === player) {
      return player
    }else if(space[0] === player &&space[4] === player && space[8] === player){
      return player
    }
    if(!space.includes(undefined)){
      return 'draw';
    }
  }
  saveWin() {
    if (dataModel.winner === 1){
      dataModel.playerOne.wins.push(this.board)
    } else if(dataModel.winner ===2){
      dataModel.playerTwo.wins.push(this.board)
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
