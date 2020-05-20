// 封装请求
const superagent = require('superagent')
const cheerio = require('cheerio')

const axiox = async function getHtml(url) {
  try {
    const list = await superagent
    .get(url)
    return cheerio.load(list.text)
  } catch (error) {
    console.log('error')
  }

}

module.exports = axiox