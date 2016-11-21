module.exports = (end) => ({
  *[Symbol.iterator] () {
    let [pre, cur] = [1, 0]
    while (cur < end) {
      yield cur;
      [pre, cur] = [cur, pre + cur]
    }
  }
})
