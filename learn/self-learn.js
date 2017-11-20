var selfDividingNumbers = function(left, right) {
  const value = [...Array(+right + 1).keys()].splice(+left)
  const invarnt = function (check, message) {
      if (check) throw TypeError(message)
  }
  const __getSelf__ = function (value) {
      invarnt(
          Object.prototype.toString.call(value) !== '[object Number]',
          'arguments allow Number'
      );
      return value.toString().split('')
  }
  const __valid__ = function (value, checkValue, result) {
      invarnt(
          Object.prototype.toString.call(value) !== '[object Number]',
          'arguments allow Number'
      );
      const data = +checkValue.slice(0, 1)[0]
      const _checkValue = checkValue.slice(1)
      if (value < 10) return true
      if (value % data === 0 && _checkValue.length !== 0)  return __valid__(value, _checkValue, true)
      if (result && value % data === 0) return true
      return false
  }
  const __isSelfDividing__ = function (value) {
      const data = __getSelf__(value)
      const r = __valid__(value, data) && value
      return r
  }
  
  return value.filter(item => __isSelfDividing__(item)) 
};

console.log(selfDividingNumbers(1, 22))
