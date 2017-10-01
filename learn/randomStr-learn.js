const checkArgs = args => args === NaN
const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min)

console.time('start')
const getRandomStr = (length = 6) => {
  if (checkArgs(Number(length))) {
    throw TypeError('Not Allow Type')
  }

  let result = ''
  const dataPond = ['48-57', '65-90', '97-122'] // 数字 大写字母 小写字母
  while(length) {
    length -= 1;
    const index = Math.floor(Math.random() * 3)
    const inPond = dataPond[index].split('-')
    const min = Number(inPond[0])
    const max = Number(inPond[1])

    result += String.fromCharCode(getRandom(min, max))
  }
  
  return result;
}
console.timeEnd('start')

console.log('result: ', getRandomStr('9'))