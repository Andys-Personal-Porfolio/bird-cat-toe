
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
    dataModel.winner = dataModel.game.checkScore();
    updateDisplay();
  } else if (dataModel.winner === 1) {
    dataModel.game.saveWin();
    dataModel.playerOne.saveWinsToStorage();
    displayMini();
    dataModel.game.resetGame();
    }else if (dataModel.winner === 2){
      dataModel.game.saveWin();
      dataModel.playerTwo.saveWinsToStorage();
      displayMini();
      dataModel.game.resetGame();
    }
   else if(dataModel.winner === 'draw') {
    dataModel.game.resetGame();
  }
    updateHeader();

}

function updateDisplay() {
  var spot = document.getElementById(event.target.id);
  spot.innerText = dataModel.whoseTurn;
  dataModel.whoseTurn = dataModel.whoseTurn === 1 ? 2 : 1
}

function updateHeader() {
    var turnHeader = document.querySelector('.turn-header');
    turnHeader.innerText = dataModel.winner ||`It is player ${dataModel.whoseTurn}'s turn`
}

function displayMini(){
  var miniGameBoard = document.getElementById(`mini-game-board-${dataModel.winner}`)
  if(dataModel.winner === 1) {
    var boards = dataModel.playerOne.wins
  } else if (dataModel.winner === 2) {
    var boards = dataModel.playerTwo.wins
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

function onLoad() {
  dataModel.playerOne.retrieveWinsFromStorage()
  dataModel.playerTwo.retrieveWinsFromStorage()
  displayLocalStorage();
}

function displayLocalStorage() {
  for(var i = 0; i < dataModel.playerOne.wins.length; i++){
  var miniGameBoard = document.getElementById(`mini-game-board-1`);
  var boards = dataModel.playerOne.wins;
  miniGameBoard.insertAdjacentHTML('beforeend', ` <section id = "single-mini-game">
    <article class = "mini-spot">${boards[i][0] || ' '}
    </article>
    <article class = "mini-spot">${boards[i][1] || ' '}
    </article>
    <article class = "mini-spot">${boards[i][2] || ' '}
    </article>
    <article class = "mini-spot">${boards[i][3] || ' '}
    </article>
    <article class = "mini-spot">${boards[i][4] || ' '}
    </article>
    <article class = "mini-spot">${boards[i][5] || ' '}
    </article>
    <article class = "mini-spot">${boards[i][6] || ' '}
    </article>
    <article class = "mini-spot">${boards[i][7] || ' '}
    </article>
    <article class = "mini-spot">${boards[i][8] || ' '}
    </article>
    </trial>`)
  }
}
//
//   function displayLocalStorage() {
//     var miniGameBoard = document.getElementById(`mini-game-board-1`)
//     var boards = lsDataModel.playerOne.wins;
//     miniGameBoard.insertAdjacentHTML('afterbegin', `<section id = "single-mini-game">`)
//     for(var i = 0; i <= 8; i++){
//     miniGameBoard.insertAdjacentHTML('beforeend', `
//       <article class = "mini-spot">${boards[boards.length -1][0] || ' '}
//       </article>
//       `)
//     }
//     miniGameBoard.insertAdjacentHTML('beforeend', `</section>`)
// }

  // function reinstantiate() {
  //   // for(var i = 0; i < oldIdeasArray.length; i++) {
  //   //   var currentGame = new Game({})
  //   //   dataModel.game.push(currentIdea);
  //   // }
  // }
