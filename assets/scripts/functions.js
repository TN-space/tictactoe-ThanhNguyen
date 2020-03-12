'use strict'

// start count at 1
let count = 1
const gamePlay = function (event) {
const countObject = {
    count: [],
    boxNo: []
  }
  const boxNo = event.target.id
  $(`#${boxNo}`).children('').removeClass('hidden')
  if (count % 2 === 1) {
    console.log(`Turn: ${count}`)
    // add 'X' into the box
    // $(`#${boxNo}`).children('p').text('X')
    $(`#${boxNo}`).children().attr('src', './../../public/x.png')
    count++
  } else if (count % 2 === 0) {
    console.log(`Turn: ${count}`)
    // add 'O'
    // $(`#${boxNo}`).children('p').text('O')
    $(`#${boxNo}`).children().attr('src', './../../public/o.png')
    count++
  }
  $(`#${boxNo}`).unbind()
  return countObject
}

//
module.exports = {
  gamePlay
}
