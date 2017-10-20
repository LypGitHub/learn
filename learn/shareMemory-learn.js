// test 100000 length of Array

/**
 * think for share memory
 */

const normalArray = [];

/**
 * 通过google的内存分析增加了大概8-10m的内存
 */
console.time('create a ten thousand length of Array throught normal way');
for (let i = 0, len = 100000; i < len; i++) {
  normalArray.push({
    index: i,
    value: `第${i}个数组`
  })
}

console.timeEnd('create a ten thousand length of Array throught normal way');

/**
 * 同样通过google的内存分析增加了大概2m的内存
 * 通过对象的共享传递，减少创建对象达到共享内存
 * 这样导致一个问题就是对象的引用是同一个引用，
 * 导致数组存储的对象都是最后一个修改的值
 */
let obj = {
  value: '',
  key: ''
}
console.time('create a ten thousand length of Array throught share memory way');
for (let i = 0, len = 100000; i < len; i++) {
  obj.value = `第${i}个数组`
  obj.index = i
  normalArray.push(obj)
}

console.timeEnd('create a ten thousand length of Array throught share memory way');


const memory = new ShareMemory(['index', 'id', 'value', 'price'], 10000, 200, callBack);

class CreateObject {
  constructor () {
    this.data = {
      value: null,
      key: 1
    }
  }

  create(data) {
    const keyCopier = key => {
      this.data[key] = data.hasOwnProperty(key) && data[key]
    }
    Object.keys(this.data).forEach(keyCopier);
    return this.data
  }
}


const createObj = new CreateObject()

for (let i = 0, len = 100000; i < len; i++) {
  normalArray.push(createObj.create({
    value: `第${i}数组`,
    key: i
  }));
}


