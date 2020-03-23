'use strict'

const store = require('./store')

const signUpSuccess = function (data) {
  $('#signUpInOut').text('Signed up successfully')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('success')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('signUpSuccess data is: ', data)
}
const signUpFailure = function (data) {
  $('#signUpInOut').text('Signed up failed')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('signUpFailure error is: ', error)
}

const signInSuccess = function (data) {
  $('#signUpInOut').text('Signed in successfully!')
  $('#signUpInOut').removeClass()
  viewLoggedIn()
  $('#signUpInOut').addClass('success')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('signInSuccess data is: ', data)
  store.user = data.user
}
const signInFailure = function (data) {
  $('#signUpInOut').text('Signed in failed')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('signInFailure error is: ', error)
}

const pwChangeSuccess = function (data) {
  $('#signUpInOut').show()
  $('#signUpInOut').text('Password change successfully!')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('success')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('PasswordChangeSuccess data is: ', data)
}
const pwChangeFailure = function (data) {
  $('#signUpInOut').show()
  $('#signUpInOut').text('Password change failed')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('PasswordChangeFailure error is: ', error)
}

const logOutSuccess = function (data) {
  $('#signUpInOut').text('Logout successfully!')
  $('#signUpInOut').removeClass()
  viewStart()
  $('#signUpInOut').addClass('success')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('logOutSuccess: ', data)
}
const logOutFailure = function (data) {
  $('#signUpInOut').text('How did you even fail logging out????')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('logOutFailure error is: ', error)
}

const endGame = function (data) {
  $('#message').removeClass()
}

//  Opening view
const signInMessage = function () {
  return $('#message').html('Please sign up and sign in to play')
}
const viewStart = function (data) {
  $('#signUpInOut').show()
  $('.viewStart').show()
  $('.viewLoggedIn').hide()
  $('.view-game').hide()
  $('#message').show(signInMessage)
}
// signed in view
const signedIn = () => {
  return $('#message').html('Click New Game to start playing')
}
const viewLoggedIn = function (data) {
  $('.viewStart').hide()
  $('.viewLoggedIn').show()
  $('.view-game').hide()
  $('#message').show(signedIn)
}
// game created view
const gameCreated = () => {
  return $('#message').html('Player X turn!')
}
const gameCreateSuccessful = function (data) {
  // $('#message').show()
  $('#signUpInOut').hide()
  $('.viewStart').hide()
  $('.viewLoggedIn').show()
  $('.view-game').show(gameCreated)
  store.game = data.game
}
const gameCreateFailure = function (data) {
  // console.log('the error is: ', error)
}

const onGameUpdateSuccess = function (data) {
  // console.log('data is: ', data)
  store.game = data.game
}
const onGameUpdateFailure = function (data) {
  // $('#message').text('Move failed!!!!!!!!!!!!!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log('Move fail is: ', error)
}

const total = function (data) {
  $('#message').text(`You have played ${data.games.length} games`)
  $('#message').removeClass()
  // $('#message').show()
  // $('#message').addClass('failure')
  // console.log('total game played ', data.games.length)
}
// const totalError = function (data) {
//   // $('#message').removeClass()
//   // $('#message').text('Total gameplay is: ', data.length)
//   // // $('#message').addClass('failure')
//   // console.log('this is the data ', data)
// }

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
  total
  // totalError
}
