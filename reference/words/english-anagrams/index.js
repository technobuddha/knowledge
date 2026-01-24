# 🚨
# 🚨 Source: https://github.com/words/english-anagrams/archive/refs/heads/master.zip::english-anagrams-master/index.js
# 🚨
'use strict'

var sort = require('./sort')
var map = require('./anagrams.json')

module.exports = anagrams

var own = {}.hasOwnProperty

function anagrams(word) {
  var normalized = word ? String(word).toLowerCase() : ''
  var sorted = sort(normalized)
  return own.call(map, sorted) ? map[sorted].filter(notSelf) : []
  function notSelf(anagram) {
    return anagram !== normalized
  }
}
