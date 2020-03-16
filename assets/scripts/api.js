
const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const pwChange = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const logOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// -------------------------------------

// const gameCreate = function () {
//   return $.ajax({
//     url: `/games` + '/game-create',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
// const gameCreate = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'POST',
//     data: data
//   })
// }
//
// const gameUpdate = function () {
//   return $.ajax({
//     url: `/games/:id` + '/game-update',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const gameOver = function () {
//   return $.ajax({
//     url: `/games[?over=]` + '/game-over',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  pwChange,
  logOut
  // gameCreate,
  // gameUpdate,
  // gameOver
}
