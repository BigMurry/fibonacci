const fibo = require('.')
const assert = require('assert')
describe('fibonacci < 100', () => {
  it('list fibonacci < 100', () => {
    const r = []
    for (let value of fibo) {
      if (value > 100) break
      r.push(value)
    }
    assert(r.length === 12)
    assert(r[0] === 0)
    assert(r[1] === 1)
    assert(r[2] === 1)
    assert(r[3] === 2)
    assert(r[4] === 3)
    assert(r[5] === 5)
    assert(r[6] === 8)
    assert(r[7] === 13)
    assert(r[8] === 21)
    assert(r[9] === 34)
    assert(r[10] === 55)
    assert(r[11] === 89)
  })
})
