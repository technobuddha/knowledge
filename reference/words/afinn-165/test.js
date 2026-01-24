# 🚨
# 🚨 Source: https://github.com/words/afinn-165/archive/refs/heads/main.zip::afinn-165-main/test.js
# 🚨
import assert from 'node:assert/strict'
import test from 'node:test'
import {afinn165} from './index.js'

test('afinn', () => {
  assert.equal(afinn165.positive, 2)
  assert.equal(afinn165['self-deluded'], -2)
  assert.equal(afinn165.damn, -2)
  assert.equal(afinn165.futile, -2)
})
