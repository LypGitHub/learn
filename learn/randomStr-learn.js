const { validator, getBetweenNum } = require('../util');

console.time('start')
const getRandomStr = (length = 6) => {
  if (validator('isNaN', Number(length))) {
    throw TypeError('Not Allow Type')
  }

  let result = ''
  const dataPond = ['48-57', '65-90', '97-122'] // 数字 大写字母 小写字母
  const getStr = () => {
    const index = Math.floor(Math.random() * 3)
    const inPond = dataPond[index].split('-').map(num => Number(num))
    const min = inPond[0]
    const max = inPond[1]
    return String.fromCharCode(getBetweenNum(min, max))
  }

  while(length) {
    length -= 1;
    result += getStr()
  }
  
  return result;
}
console.timeEnd('start')

console.log('result: ', getRandomStr('9'))