const dns = require('dns');
const http = require('http');

/**
 * host
 */
const URLS = [
  'www.baidu.com',
  'news.baidu.com',
  'map.baidu.com'
];

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

const promises = URLS.map(item => getIpByDns(item))

Promise.all(promises)
  .then(values => Promise.all(values.map(ip => getHtml(ip))))
  .then(contents => console.log(contents))
