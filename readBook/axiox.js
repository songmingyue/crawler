const superagent = require('superagent')
const cheerio = require('cheerio')

const axiox = async function getHtml(url) {
  const list = await superagent
  .get(url)
  return cheerio.load(list.text)
}

module.exports = axiox