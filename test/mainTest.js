const assert = chai.assert;
const expect = chai.expect;

const button = document.getElementById('gameButton');
const input = document.getElementById('gameInput');
const COMLivesText = document.getElementById('com');
const playerLivesText = document.getElementById('player');
const gameStateText = document.getElementById('gameState');

// unit test of game
describe('App suite', () => {
  // initialization test
  describe('Object initialization test', () => {
    it('instance of new Game class without parameters must be returns an error', () => {
      expect(() => {let game = new Game()}).to.throw(`button debe ser un botton, input un text field y los demás parametros <p> ó <span>`);
    });
    it('instance of new Game class without button parameter returns error', () => {
      expect(() => {let game = new Game(null ,input, COMLivesText, playerLivesText, gameStateText)})
        .to.throw(`button debe ser un botton, input un text field y los demás parametros <p> ó <span>`);
    });
    it('instance of new Game class without input parameter returns error', () => {
      expect(() => {let game = new Game(button, null, COMLivesText, playerLivesText, gameStateText)})
        .to.throw(`button debe ser un botton, input un text field y los demás parametros <p> ó <span>`);
    });
    it('instance of new Game class without COMLivesText parameter returns error', () => {
      expect(() => {let game = new Game(button, input, null, playerLivesText, gameStateText)})
        .to.throw(`button debe ser un botton, input un text field y los demás parametros <p> ó <span>`);
    });
    it('instance of new Game class without playerLivesText parameter returns error', () => {
      expect(() => {let game = new Game(button, input, COMLivesText, null, gameStateText)})
        .to.throw(`button debe ser un botton, input un text field y los demás parametros <p> ó <span>`);
    });
    it('instance of new Game class without gameStateText parameter returns error', () => {
      expect(() => {let game = new Game(button, input, COMLivesText, playerLivesText, null)})
        .to.throw(`button debe ser un botton, input un text field y los demás parametros <p> ó <span>`);
    });
    it('instance of new Game class with all parameters valid do not returns error', () => {
      expect(() => {let game = new Game(button, input, COMLivesText, playerLivesText, gameStateText)})
        .to.not.throw(`button debe ser un botton, input un text field y los demás parametros <p> ó <span>`);
    });
  });
});
