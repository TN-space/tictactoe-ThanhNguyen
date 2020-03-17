'use strict'

const ui = require('./ui')
const gameAPI = require('./api')

// start count at 1
let count = 1

const board = [
  '', '', '',
  '', '', '',
  '', '', ''
]

let gameOver = false

const gamePlay = function (event) {
  const boardPosition = event.target.id
  const clickedDiv = event.target
  const currentValue = $(clickedDiv).text() // '', 'O', 'X'
  if (gameOver === true) {
    console.log('Game over!')
    return
  }
  if (currentValue === '') {
    if (count % 2 === 1) {
      // console.log(`Turn: ${count}`)
      $('#message').text(`Player O turn!`)
      $(clickedDiv).text('X')
      board[boardPosition] = 'X'
    } else if (count % 2 === 0) {
      // console.log(`Turn: ${count}`)
      $('#message').text(`Player X turn!`)
      $(clickedDiv).text('O')
      board[boardPosition] = 'O'
    }
    // top row wi

    if (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[0]} win!!`)
      console.log('winner is ' + board[0])
    } else if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[3]} win!!`)
      console.log('winner is ' + board[3])
    } else if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[6]} win!!`)
      console.log('winner is ' + board[6])
    } else if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[0]} win!!`)
      console.log('winner is ' + board[0])
    } else if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[1]} win!!`)
      console.log('winner is ' + board[1])
    } else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[2]} win!!`)
      console.log('winner is ' + board[2])
    } else if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[0]} win!!`)
      console.log('winner is ' + board[0])
    } else if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[2]} win!!`)
      console.log('winner is ' + board[2])
    } else if (!board.includes('') && gameOver === false) {
      console.log('Tie!')
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! It's a Tie!!`)
    }
    const turn = count % 2 === 1 ? 'X' : 'O'
    gameAPI.gameUpdate(boardPosition, turn, gameOver)
      .then(ui.onGameUpdateSuccess)
      .catch(ui.onGameUpdateFailure)
    count++
  }
}

//
module.exports = {
  gamePlay
}
