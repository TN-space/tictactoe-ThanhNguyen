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
  $('#message').addClass('success')
  console.log('logOutSuccess: ', data)
}
const logOutFailure = function (error) {
  $('#message').text('How did you even fail logging out????')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('logOutFailure error is: ', error)
}

const nextTurn = function (data) {
  $('#message').removeClass()
  const space = $(event.target).text()
  if (space !== 'O' && space !== 'X') {
    $('#message').text('Turn ' + data)
    // $('#message').addClass('failure')
    console.log('Turn: ', data)
  } else {
    $('#message').text('Still turn ' + data)
  }
}

const endGame = function (data) {
  $('#message').removeClass()
}

const pageLoaded1 = function (data) {
  $('.second').style.visibility = 'visible'
  $('.first').style.visibility = 'hidden'
}
const pageLoaded2 = function (data) {
  $('.first').style.visibility = 'visible'
  $('.second').style.visibility = 'hidden'
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
  nextTurn,
  endGame,
  pageLoaded1,
  pageLoaded2
}
