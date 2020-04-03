// const superagent = require('superagent')
// const cheerio = require('cheerio')
const fs = require('fs')
const getUrl = require('./superagent.js')
const url = 'http://gogs.visionacademy.cn'
let urlAll = []
let urlGit = []
let pageUrl = []
const urlStart = ['/docs', '/tools', '/study', '/front-express', '/mobile', '/study-front', '/common-front', '/market-front', 'enterprise-front']
start()
async function start() {
  const $ = await getUrl(url)
  const aHtml = $('li a')
  aHtml.each((item, ele) => {
    if (urlStart.includes($(ele).attr('href'))) {
      urlAll.push(url + $(ele).attr('href'))
    }
  })
  getAllUrl()
}

/**
 * 描述
 * 拿取所有的url
 */
async function getAllUrl() {
  for (let index = 0; index < urlAll.length; index++) {
    const $ = await getUrl(urlAll[index])
    const page = $('div.pagination a')
    page.each((item, indexs) => {
      const hrefs = $(indexs).attr('href') ? $(indexs).attr('href').split('?')[1] : ''
      pageUrl.push(urlAll[index] + '/?' + hrefs)
    })
  }
  pageUrl = [...new Set(pageUrl)]
  urlAll = urlAll.concat(pageUrl)
  gitUrl()
}

async function gitUrl() {
  for (let index = 0; index < urlAll.length; index++) {
    const $ = await getUrl(urlAll[index])
    const nameCla = $('a.name')
    nameCla.each((item, indexs) => {
      fs.writeFile('./write.txt', `${url}${$(indexs).attr('href')}.git`, (err) => {
        if (err) throw err;
      })
      // urlGit.push(url + $(indexs).attr('href') + '.git')
    })
  }
  console.log(urlGit)
}
