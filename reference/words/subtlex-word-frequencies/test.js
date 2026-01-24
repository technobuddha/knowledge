# 🚨
# 🚨 Source: https://github.com/words/subtlex-word-frequencies/archive/refs/heads/master.zip::subtlex-word-frequencies-master/test.js
# 🚨
'use strict'

var test = require('tape')
var subtlex = require('.')

test('subtlex', function(t) {
  t.plan(2)

  t.ok(Array.isArray(subtlex), 'should be an `array`')

  subtlex.forEach(function(d) {
    if (d.word === 'right') {
      t.deepEqual(d, {word: 'right', count: 204428}, 'should work')
    }
  })
})
