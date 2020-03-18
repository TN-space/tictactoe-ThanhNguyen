'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./events.js')
// const play = require('./functions.js')
const page = require('./ui')
// const runThroughImport = require('./check-win')

$(() => {
  // your JS code goes here
  page.viewStart()
  // sign up on submit
  $('#sign-up').on('submit', authEvents.onSignUp)
  // sign in on submit
  $('#sign-in').on('submit', authEvents.onSignIn)
  // change pw on submit
  $('#change-password').on('submit', authEvents.onPwChange)
  // sign out on submit
  $('#log-out').on('submit', authEvents.onLogOut)
  // on click, add X and O (gamePlay)
  $('.box').on('click', authEvents.gamePlay)
  // on click, create new game
  $('.clickToCreate').on('click', authEvents.onGameCreate)
  // on click, give total gameplays
  $('.totalGames').on('click', authEvents.onTotalGames)
})
