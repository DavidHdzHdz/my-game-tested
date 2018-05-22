// CLASS
class Game {
  // constructor button must be a button, input a textfield and the others must be p or span tag.
  constructor(button, input, COMLivesText, playerLivesText, gameStateText){
      try {
        this.playerLives = 3;
        this.COMLives = 3;
        this.input = input;
        this.input.value = '';
        this.button = button;
        this.statePhrase = '';
        this.COMState = 0;  // this variable is for save the currently state of COM
        this.playerState = 0; // this variable is for save the currently state of player
        this.COMLivesText = COMLivesText;
        this.COMLivesText.innerHTML = `COM: ${this.COMLives} vidas`;
        this.playerLivesText = playerLivesText;
        this.playerLivesText.innerHTML = `PLAYER1: ${this.playerLives} vidas`;
        this.gameStateText = gameStateText;
        this.gameStateText.innerHTML = '';
        this.button.addEventListener('click', this.onClick.bind(this)); // button for game game.
      } catch (error) {
        throw new Error(`button debe ser un botton, input un text field y los demás parametros <p> ó <span> ${error}`);
      }
  }

	onClick(event) {
    this.getPlayerState();
    if (this.playerState) {
      this.getCOMState();
      this.getWinner();
      this.isFinished();
      this.toggleText();
    }
	}

  getPlayerState() {
    if (this.input.value==='1' || this.input.value==='piedra' || this.input.value==='Piedra') {
      this.playerState = 1;
      this.statePhrase += 'Elegiste piedra';
    }
    else if (this.input.value==='2' || this.input.value==='papel' || this.input.value==='Papel') {
      this.playerState = 2;
      this.statePhrase += 'Elegiste papel';
    }
    else if (this.input.value==='3' || this.input.value==='tijera' || this.input.value==='Tijera') {
      this.playerState = 3;
      this.statePhrase += 'Elegiste tijera';
    }
    else {
      this.playerState = 0;
      this.gameStateText.innerHTML = '<span style="color: red">Ingrese una opción válida</span>';
    }
  }

  getCOMState() {
    this.COMState = Math.round(((Math.random() * (3 - 1)) + 1));
    if (this.COMState===1) {
      this.statePhrase += ' y COM piedra';
    }
    else if (this.COMState===2) {
      this.statePhrase += ' y COM papel';
    }
    else {
      this.statePhrase += ' y COM tijera';
    }
  }

  getWinner() {
   if (this.playerState === this.COMState) {
     this.statePhrase += '<br /> EMPATE';
   }
   if (this.playerState===1 && this.COMState===2) {
     this.statePhrase += '<br /> Pierdes una vida';
     this.playerLives--;
     this.playerLivesText.innerHTML = `PLAYER1: ${this.playerLives} vidas`;
   }
   if (this.playerState===1 && this.COMState===3) {
     this.statePhrase += '<br /> COM pierde una vida';
     this.COMLives--;
     this.COMLivesText.innerHTML = `COM: ${this.COMLives} vidas`;
   }
   if (this.playerState===2 && this.COMState===1) {
     this.statePhrase += '<br /> COM pierde una vida';
     this.COMLives--;
     this.COMLivesText.innerHTML = `COM: ${this.COMLives} vidas`;
   }
   if (this.playerState===2 && this.COMState===3) {
     this.statePhrase += '<br /> Pierdes una vida';
     this.playerLives--;
     this.playerLivesText.innerHTML = `PLAYER1: ${this.playerLives} vidas`;
   }
   if (this.playerState===3 && this.COMState===1) {
     this.statePhrase += '<br /> Pierdes una vida';
     this.playerLives--;
     this.playerLivesText.innerHTML = `PLAYER1: ${this.playerLives} vidas`;
   }
   if (this.playerState===3 && this.COMState===2) {
     this.statePhrase += '<br /> COM pierde una vida';
     this.COMLives--;
     this.COMLivesText.innerHTML = `COM: ${this.COMLives} vidas`;
   }
  }

	toggleText() {
    this.gameStateText.innerHTML = this.statePhrase;
    this.statePhrase = '';
	}

  isFinished() {
    if (!(this.playerLives && this.COMLives)) {
      if (this.playerLives > this.COMLives) {
        this.statePhrase += '<br /> <span style="color: green">:) GANASTE!<span>';
        setTimeout( () => window.location.reload(), 3000);
      }
      else {
        this.statePhrase += '<br /> <span style="color: red">:( PERDISTE!<span>';
        setTimeout( () => window.location.reload(), 3000);
      }
    }
  }
}

// MAIN
const button = document.getElementById('gameButton');
const input = document.getElementById('gameInput');
const COMLivesText = document.getElementById('com');
const playerLivesText = document.getElementById('player');
const gameStateText = document.getElementById('gameState');

let game = new Game(button, input, COMLivesText, playerLivesText, gameStateText);

// Exports
module.exports = Game;
