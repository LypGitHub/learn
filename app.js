const dns = require('dns');
const http = require('http');
// const _ = require('lodash');

/**
 * host
 */
const URLS = [
  'www.baidu.com',
  'news.baidu.com',
  'map.baidu.com'
];

/**
 * 错误重试
 */
let count = 0;

/**
 * hash去重，存在抛出异常
 * @param {String} url 域名
 */
const unique = () => {
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
};

const checkUnique = unique();

const result_ip = [];

/**
 * 通过域名获取ip地址
 * @param {String} hostname 域名
 */
const getIpByDns = hostname => new Promise((resolve, reject) => {
  dns.lookup(hostname, (err, address) => resolve(address))
});


/**
 * 通过ip获取网站内容
 * @param {String} ip 
 */
const getHtml = ip => {
  return new Promise((resolve, reject) => {
    http.get(`http://${ip}`, (res) => {
      // 清空
      count = 0;
      resolve(res);
    })
    .on('error', (err) => {
      if (count < 3) {
        count += 1;
        getHtml(ip)
      }
    })
  })
  
}

setInterval(() => {
  try {
    const url = checkUnique(URLS[parseInt(Math.random() * 3, 10)]);
    (async (url) => {
      const address = await getIpByDns(url);
      const res = await getHtml(address);
      
      console.log(res);
      result_ip.push(checkUnique(address));
    })(url);
  } catch (error) {
    // console.error('error info', error);
  }
}, 3000)
