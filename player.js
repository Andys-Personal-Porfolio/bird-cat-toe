
class Player {
  constructor(id) {
    this.id = id;
    this.token = 1;
    this.wins = [];
  }
  saveWinsToStorage() {
    var game = JSON.stringify(dataModel.game);
    localStorage.setItem('game',game);
  }

  retrieveWinsFromStorage() {
    return JSON.parse(localStorage.getItem('game'));
  }
}
