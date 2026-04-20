// 🚨
// 🚨 Source: https://github.com/words/fillers/archive/refs/heads/master.zip::fillers-main/test.js
// 🚨
import assert from 'node:assert'
import test from 'node:test'
import {fillers} from './index.js'

test('fillers', function () {
  assert.equal(typeof fillers, 'object', 'should be an array #1')
  assert.equal(Array.isArray(fillers), true, 'should be an array #2')
  assert.notEqual(fillers.indexOf('basically'), -1, 'should contain words')
})
