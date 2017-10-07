const DATA_SOURCE = '(010)111111'

const transform = str => {
  const regx = /\(.*\)([0-9])\1{5}$/
  const result = regx.test(str)
  if (!result) throw Error('传入的字符串格式不正确')
  return str.replace(/\(/g, '').replace(/\)/g, '-')
}

console.log(transform(DATA_SOURCE))