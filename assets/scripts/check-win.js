'use strict'
// const xArray = [1, 3, 5, 7, 9]
// const oArray = [2, 4, 6, 8]
// const win1 = ['box1', 'box2', 'box3']
// const win2 = ['box4', 'box5', 'box6']
// const win3 = ['box7', 'box8', 'box9']
// const win4 = ['box1', 'box4', 'box7']
// const win5 = ['box2', 'box5', 'box8']
// const win6 = ['box3', 'box6', 'box9']
// const win7 = ['box1', 'box5', 'box9']
// const win8 = ['box3', 'box5', 'box7']
const win = [
  ['box1', 'box2', 'box3'],
  ['box4', 'box5', 'box6'],
  ['box7', 'box8', 'box9'],
  ['box1', 'box4', 'box7'],
  ['box2', 'box5', 'box8'],
  ['box3', 'box6', 'box9'],
  ['box1', 'box5', 'box9'],
  ['box3', 'box5', 'box7']
]

const xArray = []
const oArray = []
const runThrough = function () {
  for (let i = 0; i < 10; i++) {
    if (array[i].index() % 2 === 1) {
      xArray.push(array[i])
      console.log(xArray)
      win.forEach(element => {
        if (element === xArray.filter(element)) {
          console.log('Player X win!')
        }
      })
    } else {
      oArray.push(array[i])
      console.log(oArray)
      win.forEach(element => {
        if (element === xArray.filter(element)) {
          console.log('Player O win!')
        }
      })
    }
  }
}

module.exports = {
  runThrough
}
