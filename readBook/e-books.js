const axio = require('./axiox.js')
const superagent = require('superagent')
const fs = require('fs')
getUrl()
async function getUrl() {
  const url = 'https://www.zhuaji.org/read/548/'
  const $ = await axio(url)
  const hrefUrl = $('dl a')
  for (let index = 0; index < hrefUrl.length; index++) {
    const $$ = await axio(url + $(hrefUrl[index]).attr('href').split('/')[3])
    const test = $$('#content').text()
    const title = $$('.title h1').text()
    fs.appendFile(`./file/${title}.txt`, test, err => {
      if (err) {
        console.log(err)
      }
    })
  }
  console.log('结束进程')
}
