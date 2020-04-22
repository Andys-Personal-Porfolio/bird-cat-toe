
var gameBoard = document.querySelector('.game-board');
var dataModel = {
  game: new Game(),
  whoseTurn: 1,
  winner: null,
  playerOne: new Player(1),
  playerTwo: new Player(2)
  }

gameBoard.addEventListener('click',addToBoard);
window.onLoadHandler();

function onLoadHandler() {
  dataModel.playerOne.retrieveWinsFromStorage();
  dataModel.playerTwo.retrieveWinsFromStorage();
  if(dataModel.playerOne.wins){
    localStorageHelper(dataModel.playerOne);
  }
  if(dataModel.playerTwo.wins){
    localStorageHelper(dataModel.playerTwo)
  }
}

function localStorageHelper(player) {
  var miniGameBoard = document.getElementById(`mini-game-board-${player.id}`);
  for(var i = 0; i < player.wins.length; i++){
    var boards = player.wins;
    displayBoard(boards[i], miniGameBoard);
  }
}

function displayBoard(spot,miniGameBoard) {
  var singleMiniGame = document.createElement("div");
  singleMiniGame.setAttribute("id", "single-mini-game");
  miniGameBoard.appendChild(singleMiniGame);
  for(var i = 0; i < 9; i ++){
    var img = whichPicture(spot, i);
    singleMiniGame.insertAdjacentHTML('beforeend', `
      <article class = "mini-spot"> <img src = ${img}>
      </article>`);
  }
  displayWinCount();
}

function displayWinCount() {
  var birdWins = document.getElementById('bird-wins');
  var catWins = document.getElementById('cat-wins');
  birdWins.innerText = `Wins: ${dataModel.playerTwo.wins.length}`;
  catWins.innerText = `Wins: ${dataModel.playerOne.wins.length}`;
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

function addToBoard(event) {
  if(!dataModel.game.board[event.target.id] && !dataModel.winner) {
    dataModel.game.board[event.target.id] = dataModel.whoseTurn;
    dataModel.winner = dataModel.game.checkWins();
    putImageOnBoard();
  } else if(dataModel.winner && dataModel.winner !== 'draw') {
    miniBoardHelper();
    dataModel.game.saveWin();
    dataModel.game.resetGame();
    dataModel.playerOne.saveWinsToStorage();
    dataModel.playerTwo.saveWinsToStorage();
  } else{
    dataModel.game.resetGame();
  }
    updateHeader();
}

function putImageOnBoard() {
  var src = document.getElementById(event.target.id);
  var img = document.createElement("img");
  img.src = whichPicture(dataModel.whoseTurn, 0);
  src.appendChild(img);
  dataModel.whoseTurn = dataModel.whoseTurn === 1 ? 2 : 1;
}

function updateHeader() {
    var turnHeader = document.querySelector('.turn-header');
    var turnSelect = dataModel.whoseTurn === 1 ? `Cat's` : `Bird's`;
    switch (dataModel.winner){
      case 1: var winnerSelect = 'Cat';
      case 2: var winnerSelect = 'Bird';
      case 'draw': var winnerSelect = 'Nobody';
    }
    turnHeader.innerText = dataModel.winner === undefined ? `It is ${turnSelect} turn!` : winnerSelect + ' wins!!';
}

function miniBoardHelper(){
  var miniGameBoard = document.getElementById(`mini-game-board-${dataModel.winner}`)
  switch(dataModel.winner){
    case 1: var boards = dataModel.playerOne.wins;
    case 2: var boards = dataModel.playerTwo.wins;
  }
  displayBoard(boards[boards.length -1],miniGameBoard)
}
