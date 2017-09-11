module.exports = class Util {
  /**
   * 判断是否存在键值
   * @TODO 占用内存，仅仅是为了学习
   * 
   * @returns {String}
   */
  unique() {
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
}