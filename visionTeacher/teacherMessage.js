const axio = require('./axios.js')
// 业务层
const superagent = require('superagent')
const cheerio = require('cheerio')
const list = []

const getUrls = async function getUrl() {
  const url = 'http://www.visionacademy.cn/whoweare.php'
  const $ = await axio(url)
  const titles = $('.box_hide')
  const arr = []
  for (let i = 0; i < titles.length; i++) {
    const $$ = cheerio.load(titles[i])
    arr.push({
      name: $$('.box_hide h3').text(),
      studyFor: $$('.box_hide p').text(),
    })
  }
  return arr
}

module.exports = getUrls 
