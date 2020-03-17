'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./events.js')
const play = require('./functions.js')
const page = require('./ui')
// const runThroughImport = require('./check-win')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onPwChange)
  $('#log-out').on('submit', authEvents.onLogOut)
  $('.box').on('click', authEvents.onTurn)
  $('.box').on('click', play.gamePlay)
  page.viewStart()
  // $('.box').on('click', runThroughImport.runThrough)
  // $('#box1').click(function () {
  //   console.log('click')
  // })
})
