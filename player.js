
class Player {
  constructor(id) {
    this.id = id;
    //this.token = playerDetails.token;
    this.wins = [];
  }
  saveWinsToStorage() {
    var playerWins = JSON.stringify(this.wins);
    localStorage.setItem('playerWins', playerWins);
  }

  retrieveWinsFromStorage() {
    var playerWins = JSON.parse(localStorage.getItem('playerWins'));
    this.wins = playerWins;
  }
}
