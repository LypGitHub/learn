function isArrayOrObject (data: any): Boolean {
  // 不是对象或者func则返回是数组或者对象
  if (data === undefined || typeof data !== 'object' || typeof data !== 'function') {
    return false;
  }
  return true;
}

function deepCopy (source: any): any {
  const type = Object.prototype.toString.call(source)
  let result = type === "[object Object]" ? {} : [];
  if (type === "[object Object]") {
    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        ((<any>result)[prop] = isArrayOrObject((<any>source)[prop]) && deepCopy((<any>source)[prop]) || (<any>source)[prop])
      }
    }
  }
  if (type === "[object Array]") {
    for(let i = 0, len = source.length; i < len; i++) {
      ((<any>result)[i] = isArrayOrObject((<any>source)[i]) && deepCopy((<any>source)[i]) || (<any>source)[i])
    }
  }
  return result
}

let obj = {
  string: 'demo',
  array: [1, 2, 3],
  arrayObject: [1, 2, {
    string: 'demo',
    array: [1, 2, 4],
    object: {
      string: 'demo',
      array: [1, 2, 4, {
        object: {
          string: 'demo',
          array: [1, 2, 4, {
            
          }]
        }
      }]
    },
    func: function () {
      console.log('function')
    }
  }]
}

console.log(deepCopy(obj))