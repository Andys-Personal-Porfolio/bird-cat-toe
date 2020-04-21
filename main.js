
// var lsDataModel = retrieveWinsFromStorage() || new Player();
var gameBoard = document.querySelector('.game-board');
var dataModel = {
  game: new Game(),
  whoseTurn: 1,
  winner: null,
  playerOne: new Player(1),
  playerTwo: new Player(2)
  }
gameBoard.addEventListener('click',addToBoard);
window.onLoad(onLoad);

function addToBoard(event) {

  if(!dataModel.game.board[event.target.id] && !dataModel.winner) {
    dataModel.game.board[event.target.id] = dataModel.whoseTurn;
    dataModel.winner = dataModel.game.checkWins();
    updateDisplay();
    } else if (dataModel.winner === 1) {
      dataModel.game.saveWin();
      dataModel.playerOne.saveWinsToStorage();
      displayMini();
      dataModel.game.resetGame();
    } else if (dataModel.winner === 2){
      dataModel.game.saveWin();
      dataModel.playerTwo.saveWinsToStorage();
      displayMini();
      dataModel.game.resetGame();
    } else if(dataModel.winner === 'draw') {
      dataModel.game.resetGame();
    }
  updateHeader();

}

function updateDisplay() {
  var src = document.getElementById(event.target.id);
  var img = document.createElement("img");
  img.src = whichPicture(dataModel.whoseTurn, 0)
  src.appendChild(img);
  dataModel.whoseTurn = dataModel.whoseTurn === 1 ? 2 : 1
}

function updateHeader() {
    var turnHeader = document.querySelector('.turn-header');
    turnHeader.innerText = dataModel.winner ||`It is player ${dataModel.whoseTurn}'s turn`
}


function whichPicture(j,i) {
  if(j[i] === 2 || j === 2){
    return "https://www.pngkit.com/png/full/796-7961192_european-robin-transparent-background-transparent-background-robin-bird.png";
  } else if (j[i] === 1 || j ===1){
    return "https://secureservercdn.net/166.62.111.84/on3.653.myftpupload.com/wp-content/uploads/2019/02/home-header-08.png?time=1587225613";
  } else {
    return "https://www.halberesford.com/content/images/2018/07/null.png";
  }
}

function onLoad() {
  dataModel.playerOne.retrieveWinsFromStorage()
  dataModel.playerTwo.retrieveWinsFromStorage()
  if(dataModel.playerOne.wins){
    displayLocalStorage(dataModel.playerOne);
  }
  if(dataModel.playerTwo.wins){
    displayLocalStorage(dataModel.playerTwo)
  }
}

function displayLocalStorage(player) {
  var miniGameBoard = document.getElementById(`mini-game-board-${player.id}`);
  for(var i = 0; i < player.wins.length; i++){
    var boards = player.wins;
    displayBoth(boards[i], miniGameBoard);
  }
}

function displayMini(){
  var miniGameBoard = document.getElementById(`mini-game-board-${dataModel.winner}`)
  if(dataModel.winner === 1) {
    var boards = dataModel.playerOne.wins
  } else if (dataModel.winner === 2) {
    var boards = dataModel.playerTwo.wins
  }
  displayBoth(boards[boards.length -1],miniGameBoard)
}

function displayBoth(spot,miniGameBoard) {
  var singleMiniGame = document.createElement("div");
  singleMiniGame.setAttribute("id", "single-mini-game");
  miniGameBoard.appendChild(singleMiniGame);
  for(var i = 0; i < 9; i ++){
    var img = whichPicture(spot, i)
    singleMiniGame.insertAdjacentHTML('beforeend', `
      <article class = "mini-spot"> <img src = ${img}>
      </article>`)
  }
}
