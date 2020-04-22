
class Player {
  constructor(id) {
    this.id = id;
    this.wins = [];
  }
  saveWinsToStorage() {
    var playerWins = JSON.stringify(this.wins);
    localStorage.setItem(`player${this.id}Wins`, playerWins);
  }
  retrieveWinsFromStorage() {
    var playerWins = JSON.parse(localStorage.getItem(`player${this.id}Wins`));
    this.wins = playerWins || [];
  }
}
