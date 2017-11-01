function getMax () {
  const args = [].slice.call(arguments)
  const number = args[0]
  const dataPool = args.splice(1)
  if (number !== dataPool.length) {
      throw Error('请输入正确的数量')
  }
  return dataPool.sort((a, b) => {
      return a.toString() < b.toString()   
  }).reduce((pre, next) => +`${pre}${next}`)
}

console.log(getMax(2, 12, 123))
console.log(getMax(4, 7, 13, 4, 246))