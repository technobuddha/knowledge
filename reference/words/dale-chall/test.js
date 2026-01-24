# 🚨
# 🚨 Source: https://github.com/words/dale-chall/archive/refs/heads/main.zip::dale-chall-main/test.js
# 🚨
import assert from 'node:assert'
import test from 'node:test'
import {daleChall} from './index.js'

test('characterEntities', function () {
  assert.equal(typeof daleChall, 'object', 'should be an array #1')
  assert.equal(Array.isArray(daleChall), true, 'should be an array #2')
  assert.notEqual(
    daleChall.indexOf('old-fashioned'),
    -1,
    'should contain words'
  )
})
