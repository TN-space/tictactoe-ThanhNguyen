'use strict'

const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signing up')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  // or api.signUp(getFormFields(event.target))
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Signing in')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  // or api.signUp(getFormFields(event.target))
}

const onPwChange = function (event) {
  event.preventDefault()
  console.log('Password change successful')
  const data = getFormFields(event.target)
  api.pwChange(data)
    .then(ui.pwChangeSuccess)
    .catch(ui.pwChangeFailure)
  // or api.signUp(getFormFields(event.target))
}

const onLogOut = function (event) {
  event.preventDefault()
  console.log('Logout successful')
  api.logOut()
    .then(ui.logOutSuccess)
    .catch(ui.logOutFailure)
  // or api.signUp(getFormFields(event.target))
}

// let count = 0
// const onTurn = function (event) {
//   event.preventDefault()
//   // getting value of space eiher '', o, or x
//   const space = $(event.target).text()
//   console.log(space)
//   // if space isn't o, or x, aka space is empty => can play
//   if (space !== 'O' && space !== 'X') {
//     $('#message').text('Turn ' + count)
//     count++
//     // or api.signUp(getFormFields(event.target)
//     console.log(count)
//   }
//   $('#message').removeClass()
// }

const onGameCreate = function () {
  event.preventDefault()
  console.log('Creating game')
  api.gameCreate()
    .then(ui.gameCreateSuccessful)
    .catch(ui.gameCreateFailure)
}

const onTotalGames = function () {
  event.preventDefault()
  console.log('total gameplays')
  api.totalGamePlay()
    .then(ui.total)
    .catch(ui.totalError)
}

// const onGameUpdate = function (data) {
//   event.preventDefault()
//   console.log('Updating game')
//   api.gameUpdate(data)
//   // .then(ui.viewGame)
//   // .catch(ui.signUpFailure)
// }

module.exports = {
  onSignUp,
  onSignIn,
  onPwChange,
  onLogOut,
  // onTurn,
  onGameCreate,
  onTotalGames
  // onGameUpdate
}
