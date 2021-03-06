'use strict'

const store = require('../store')

const createGameSuccesfull = function (data, event) {
  // clears the board and allows user to input
  if (store.fullBoard !== true) { store.play = true }
  $('.dash-board').css('visibility', 'inherit')
  for (let i = 0; i <= 8; i++) {
    document.getElementById(i).style.pointerEvents = 'auto'
    document.getElementById(i).innerHTML = ''
  }
  document.getElementById('gameMessage').style.display = 'inline'
  document.getElementById('gameMessage').innerText = 'Player X turn'
  document.getElementById('gameStats').style.display = 'none'
  $('gameMessage').text('Player X turn')
  store.game = data.game
  store.dashBoard = ['', '', '', '', '', '', '', '', '']
  store.won = ''
}

const createGameFailure = function () {
  document.getElementById('gameMessge').innerHTML = 'Unable to start a new game'
}

const newMoveSucessfull = function (data) {
  store.game = data.game
}

const newMoveFailure = function (data) {
  document.getElementById('gameMessge').innerHTML = 'Unable to make a new move'
}
const statSuccesfull = function (data) {
  document.getElementById('gameStats').style.display = 'inline'
  document.getElementById('gameStats').innerHTML = 'Total Games: ' + data.games.length
}
const statFailure = function (data) {
  document.getElementById('gameStats').style.display = 'inline'
  document.getElementById('gameStats').innerHTML = 'failure getting stats'
}

module.exports = {
  createGameSuccesfull,
  createGameFailure,
  newMoveSucessfull,
  newMoveFailure,
  statSuccesfull,
  statFailure
}
