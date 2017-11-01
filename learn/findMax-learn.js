function findMax(arr, prop) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    throw TypeError('first argument must be Array')
  }
  let result = {}
  let max
  try {
    max = arr.map((item, index) => {
      const key = item[prop]
      // reduce没有传入初始值，index默认从1开始
      if (result[key]) {
        result[key].push(index)
      } else {
        result[key] = [index]
      }
      return item
    }).sort((a, b) => a[prop] < b[prop])[0]
  } catch(e) {
    console.error('Error in findMax', e)
  }
  
  return {
    max,
    result
  }
}

console.log(findMax([{a: 1}, {a: 2}, {a: 3}, {a: 3}, {a: 2}], 'a'))
console.log(findMax([{a: 111}, {a: 1232}, {a: 3}, {a: 13}, {a: 2}, {a: 212}], 'a'))