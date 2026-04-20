// 🚨
// 🚨 Source: https://github.com/words/english-anagrams/archive/refs/heads/master.zip::english-anagrams-master/sort.js
// 🚨
'use strict'

module.exports = sort

function sort(value) {
  return value
    .split('')
    .sort()
    .join('')
}
