module.exports = {
  *[Symbol.iterator] () {
    let [pre, cur] = [1, 0]
    while (true) {
      yield cur;
      [pre, cur] = [cur, pre + cur]
    }
  }
}
