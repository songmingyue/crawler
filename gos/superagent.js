const superagent = require('superagent')
const cheerio = require('cheerio')
/**
  * 封装请求, 拿页面数据
 */
const url = 'http://gogs.visionacademy.cn/'
const superage = async function getUrl(url) {
  try{
    const urlsGit = await superagent
    .get(url)
    .set('Content-Type', 'application/octet-stream')
    .set('Cookie', 'lang=zh-CN; i_like_gogs=0cdf14180d91aa5c; _csrf=aLBvEZGv5NtaUM0ceLXgH50VAi06MTU4NTcxMDE4NDAxMTM1NDU1Ng%3D%3D')
    return cheerio.load(urlsGit.text)
  }
  catch(err) {
    console.error(err)
  }
}
module.exports = superage
