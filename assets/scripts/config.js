'use strict'

let apiUrl
const apiUrls = {
  production: 'https://mysterious-river-68675.herokuapp.com',
  development: 'http://localhost:4741'
  // 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
