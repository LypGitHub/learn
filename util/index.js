module.exports = class Util {
  /**
   * 判断是否存在键值
   * @TODO 占用内存，仅仅是为了学习
   * 
   * @returns {String}
   */
  static unique() {
    const hash = {};
    const result = [];

    return (url) => {
      if (Object.prototype.toString.call(url).toLowerCase() !== '[object string]') {
        throw Error(`type error ====> ${url}`);
      }

      if (!hash[url]) {
        result.push[url]
        hash[url] = true
        return url;
      }
      throw Error(`exist host path ====> ${url}`);
    };
  }
  
  /**
   * 获取两个数之间的随机数
   * 
   * @static
   * @param {any} min
   * @param {any} max
   * @returns {Number}
   */
  static getBetweenNum (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  /**
   * 校验方法
   * 
   * @static
   * @param {any} type
   * @param {any} value
   * @returns {Boolean}
   */
  static validator(type, value) {
    const validType = {
      'isNaN': () => value === NaN
    }
    return typeof validType[type] === 'function' ?
      validType[type]() : console.warn('无效校验方式')
  }
}