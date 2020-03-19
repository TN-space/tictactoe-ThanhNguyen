'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

let count = 1

let board = [
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
    // console.log('Game over!')
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
      // console.log('winner is ' + board[0])
    } else if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[3]} win!!`)
      // console.log('winner is ' + board[3])
    } else if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[6]} win!!`)
      // console.log('winner is ' + board[6])
    } else if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[0]} win!!`)
      // console.log('winner is ' + board[0])
    } else if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[1]} win!!`)
      // console.log('winner is ' + board[1])
    } else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[2]} win!!`)
      // console.log('winner is ' + board[2])
    } else if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[0]} win!!`)
      // console.log('winner is ' + board[0])
    } else if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! player ${board[2]} win!!`)
      // console.log('winner is ' + board[2])
    } else if (!board.includes('') && gameOver === false) {
      // console.log('Tie!')
      gameOver = true
      ui.endGame()
      $('#message').text(`Game over~~! It's a Tie!!`)
    }
    const turn = count % 2 === 1 ? 'X' : 'O'
    api.gameUpdate(boardPosition, turn, gameOver)
      .then(ui.onGameUpdateSuccess)
      .catch(ui.onGameUpdateFailure)
    count++
  }
}

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('Signing up')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  // or api.signUp(getFormFields(event.target))
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('Signing in')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  // or api.signUp(getFormFields(event.target))
}

const onPwChange = function (event) {
  event.preventDefault()
  // console.log('Password change successful')
  const data = getFormFields(event.target)
  api.pwChange(data)
    .then(ui.pwChangeSuccess)
    .catch(ui.pwChangeFailure)
  // or api.signUp(getFormFields(event.target))
}

const onLogOut = function (event) {
  event.preventDefault()
  // console.log('Logout successful')
  api.logOut()
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
  // or api.signUp(getFormFields(event.target))
}

const onGameCreate = function () {
  count = 1
  board = [
    '', '', '',
    '', '', '',
    '', '', '']
  gameOver = false
  $('.box').text('')
  // event.preventDefault()
  // console.log('Creating game')
  api.gameCreate()
    .then(ui.gameCreateSuccessful)
    .catch(ui.gameCreateFailure)
}

const onTotalGames = function () {
  event.preventDefault()
  // console.log('total gameplays')
  api.totalGamePlay()
    .then(ui.total)
    .catch(ui.totalError)
}

module.exports = {
  gamePlay,
  onSignUp,
  onSignIn,
  onPwChange,
  onLogOut,
  // onTurn,
  onGameCreate,
  onTotalGames
  // onGameUpdate
}
