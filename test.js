const fibo = require('.')
const assert = require('assert')
const arrEqual = (arr1, ...arrs) => {
  if (arrs.length < 1) {
    return true
  }
  let ret = true
  arrs.forEach((arr) => {
    ret &= arr.length === arr1.length
    arr.forEach((item, index) => {
      ret &= item === arr1[index]
    })
  })
  return ret
}
const it = (log, test) => {
  try {
    test()
    console.log(`${log}\t\t[Ok]`)
  } catch (err) {
    console.log(`${log}\t\t[Failed]`)
    console.log(err)
  }
}

it('test arrayEqual', () => {
  assert(arrEqual([1, 2, 3], [1, 2, 3]))
})
it('test fibo < 100', () => {
  const real = [...fibo(100)]
  const expect = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  assert(arrEqual(real, expect))
})
