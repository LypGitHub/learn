const { validator, getBetweenNum } = require('../util');
const regx = /[a-z]/
console.time('start')
const getRandomStr = (length = 6, validCall) => {
  if (validator('isNaN', Number(length))) {
    throw TypeError('Not Allow Type')
  }

  let result = []
  const dataPond = ['48-57', '65-90', '97-122'] // 数字 大写字母 小写字母
  const getStr = () => {
    const index = Math.floor(Math.random() * 3)
    const inPond = dataPond[index].split('-').map(num => +num)
    const min = inPond[0]
    const max = inPond[1]
    return String.fromCharCode(getBetweenNum(min, max))
  }

  while(length) {
    const str = getStr()
    if (validCall && typeof validCall === 'function') {
      validCall(str) && (result.push(str), length -= 1)
    } else {
      result.push(str)
      length -= 1
    }
  }
  return result.join('');
}
console.timeEnd('start')

console.log(getRandomStr('9', (str) => {
  return regx.test(str)
}))