'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess data is: ', data)
}
const signUpFailure = function (error) {
  $('#message').text('Signed up failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure error is: ', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  viewLoggedIn()
  $('#message').addClass('success')
  console.log('signInSuccess data is: ', data)
  store.user = data.user
}
const signInFailure = function (error) {
  $('#message').text('Signed in failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signInFailure error is: ', error)
}

const pwChangeSuccess = function (data) {
  $('#message').text('Password change successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('PasswordChangeSuccess data is: ', data)
}
const pwChangeFailure = function (error) {
  $('#message').text('Password change failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('PasswordChangeFailure error is: ', error)
}

const logOutSuccess = function (data) {
  $('#message').text('Logout successfully!')
  $('#message').removeClass()
  viewStart()
  $('#message').addClass('success')
  console.log('logOutSuccess: ', data)
}
const logOutFailure = function (error) {
  $('#message').text('How did you even fail logging out????')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('logOutFailure error is: ', error)
}

const endGame = function (data) {
  $('#message').removeClass()
}

const viewStart = function (data) {
  $('.viewStart').show()
  $('.viewLoggedIn').hide()
  $('.view-game').hide()
}
const viewLoggedIn = function (data) {
  $('.viewStart').hide()
  $('.viewLoggedIn').show()
  $('.view-game').hide()
}
const gameCreateSuccessful = function (data) {
  $('.viewStart').hide()
  $('.viewLoggedIn').show()
  $('.view-game').show()
  store.game = data.game
}
const gameCreateFailure = function (error) {
  console.log('the error is: ', error)
}

const onGameUpdateSuccess = function (data) {
  console.log('data is: ', data)
  store.game = data.game
}
const onGameUpdateFailure = function (error) {
  $('#message').text('Move failed')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('Move fail is: ', error)
}

const total = function (data) {
  $('#message').text(`You have played ${data.games.length} games`)
  $('#message').removeClass()
  // $('#message').addClass('failure')
  console.log('total game played ', data.games.length)
}
const totalError = function (data) {
  // $('#message').removeClass()
  // $('#message').text('Total gameplay is: ', data.length)
  // // $('#message').addClass('failure')
  console.log('this is the error ', data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  pwChangeSuccess,
  pwChangeFailure,
  logOutSuccess,
  logOutFailure,
  endGame,
  viewStart,
  viewLoggedIn,
  gameCreateSuccessful,
  gameCreateFailure,
  onGameUpdateSuccess,
  onGameUpdateFailure,
  total,
  totalError
}
