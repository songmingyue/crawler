const superagent = require('superagent')
const cheerio = require('cheerio')
const url = 'https://www.nowcoder.com'
const urlAll = []
function start(url) {
  superagent
  .get(url)
  .end((err, res) => {
    if (err) {
      console.error(err)
    } else {
      const $ = cheerio.load(res.text)
      const aHtml = $('a')
      aHtml.each((item, ele) => {
        if ($(ele).attr('href')) {
          urlAll.push($(ele).attr('href'))
        }
      })
    }
  })
}
start(url)
