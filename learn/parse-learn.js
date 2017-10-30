const checkType = (str, type) => Object.prototype.toString.call(str) === type

function parseData (obj, checkStr) {
  const transforms = str => {
    if (!checkType(str, "[object String]")) {
      throw TypeError('传入的参数类型不正确，必须是字符串')
    }
    str = str.replace(/\[|\]./g, '.')
    return str.split('.')
  }

  const data = transforms(checkStr)
  const getResult = (objectData, data) => {
    const property = data.length && data.splice(1)
    const pro = data[0]
    if (objectData.hasOwnProperty(pro) && property.length) {
      return getResult(objectData[pro], property)
    }
    const result = objectData[pro]
    return result === undefined ? 'undefined' : result
  }
  return getResult(obj, data)
}

var object = {
  b: { c: 4 }, d: [{ e: 5 }, { e: 6 }]
};

console.log(parseData(object, 'b.c') == 4) //true
console.log(parseData(object, 'd[0].e') == 5) //true
console.log(parseData(object, 'd.0.e') == 5) //true
console.log(parseData(object, 'd[1].e') == 6) //true
console.log(parseData(object, 'd.1.e') == 6) //true
console.log(parseData(object, 'f') == 'undefined') //true

 // other

 
function parse(obj, str) {
  str.replace('[', '.').replace(']', '').split('.').map((ele) => obj = obj[ele.trim()]);
  return obj || 'undefined';
}