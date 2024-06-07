const config = require('../settings'),
  puppeteer = require('puppeteer'),
  dl = require('@bochilteam/scraper'),
  yts = require('yt-search'),
  ytdl = require('ytdl-core'),
  l = console.log,
  fs = require('fs-extra')
var videotime = 60000
function ytreg(_0x166c25) {
  return /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(
    _0x166c25
  )
}
const dl2 = require('inrl-dl')
const {
    smsg,
    getBuffer,
    getGroupAdmins,
    getRandom,
    getsize,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require('../lib/functions'),
  { cmd, commands } = require('../lib/command')
let currentPollIndex = 0,
  ytsOptionIndex = 1
const ytsSearchResults = new Map()
let props
const audioSearchResults = new Map()
let optionIndex = 1,
  index = 1
const videoSearchResults = new Map()
let titleUrlMap = {}
const userContextMap = new Map()
function formatUploadDate(_0x476792) {
  const _0x1be9bd = new Date(_0x476792)
  return (
    _0x1be9bd.getFullYear() +
    '-' +
    (_0x1be9bd.getMonth() + 1) +
    '-' +
    _0x1be9bd.getDate()
  )
}
async function youtube720(_0x5786de) {
  try {
    const _0x4a5b61 = await puppeteer.launch(),
      _0x358b8e = await _0x4a5b61.newPage()
    await _0x358b8e.click('#btnSubmit')
    await _0x358b8e.waitForSelector('#tabVideo .tableVideo')
    await _0x358b8e.waitForSelector('#txtUrl')
    await _0x358b8e.type('#txtUrl', _0x5786de)
    await _0x358b8e.click('#btnSubmit'),
      await _0x358b8e.waitForSelector('#tabVideo .tableVideo')
    await _0x358b8e.click('#tabVideo tr:nth-child(2) td .btn')
    await _0x358b8e.waitForSelector('#tabVideo tr:nth-child(2) td .btn a')
    const _0x1b022b = await _0x358b8e['$eval'](
      '#tabVideo tr:nth-child(2) td .btn a',
      (_0xa49935) => _0xa49935.href
    )
    return await _0x4a5b61.close(), _0x1b022b
  } catch (_0x157418) {
    return console.error('Error occurred:', _0x157418), null
  }
}
var descv = ''
if (config.LANG === 'SI') {
  descv = 'Youtube වෙතින් videos බාගත කරයි.'
} else {
  descv = 'Download videos from Youtube.'
}
var descs = ''
if (config.LANG === 'SI') {
  descs = 'Youtube වෙතින් songs බාගත කරයි.'
} else {
  descs = 'Download songs from Youtube.'
}
var descyt = ''
if (config.LANG === 'SI') {
  descyt = 'Youtube වෙතින් video සහ songs බාගත කරයි.'
} else {
  descyt = 'Download videos and songs from Youtube.'
}
var descsh = ''
if (config.LANG === 'SI') {
  descsh = 'Youtube search බාගත කරයි.'
} else {
  descsh = 'Search and get details from youtube.'
}
var N_FOUND = ''
if (config.LANG === 'SI') {
  N_FOUND = '*මට කිසිවක් සොයාගත නොහැකි විය :(*'
} else {
  N_FOUND = "*I couldn't find anything :(*"
}
var urlneed = ''
if (config.LANG === 'SI') {
  urlneed = '*කරුණාකර Youtube url එකක් ලබා දෙන්න*'
} else {
  urlneed = '*Please give me youtube url..*'
}
var urlneed1 = ''
if (config.LANG === 'SI') {
  urlneed1 = 'එය soundcloud වෙතින් songs බාගත කරයි.'
} else {
  urlneed1 = 'It downloads songs from soundcloud.'
}
var imgmsg = ''
if (config.LANG === 'SI') {
  imgmsg = '```කරුණාකර වචන කිහිපයක් ලියන්න!```'
} else {
  imgmsg = '```Please write a few words!```'
}
var sizetoo = ''
if (config.LANG === 'SI') {
  sizetoo =
    '_This file size is too big_\n \u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B  *මෙම file එක upload කිරීමට මෙම bot host වෙන platform එකේ bandwith එක ප්‍රමානවත් නැත !*'
} else {
  sizetoo =
    '_This file size is too big_\n\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B *The bandwidth of the platform where this bot is hosted is not enough to upload this file!*'
}
const _0x43b73d = {}
_0x43b73d.pattern = 'test'
_0x43b73d.use = '.yts lelena'
_0x43b73d.react = '\uD83D\uDD0E'
_0x43b73d.desc = 'Search videos from youtube'
_0x43b73d.category = 'search'
_0x43b73d.filename = __filename
cmd(
  _0x43b73d,
  async (
    _0x101aed,
    _0x30dad9,
    _0x1fba48,
    { from: _0x1db8ab, q: _0x883ecd, reply: _0x571c3c }
  ) => {
    try {
      if (!_0x883ecd) {
        return _0x30dad9.reply('Enter YouTube Video Link or Search Query!')
      }
      const _0x47b790 = await yts(_0x883ecd)
      if (_0x47b790.videos.length > 0) {
        let _0x42f0ad = []
        const _0x52af28 = 'yts_' + optionIndex,
          _0x1344dd = {}
        for (
          let _0x4e82e5 = 0;
          _0x4e82e5 < Math.min(5, _0x47b790.videos.length);
          _0x4e82e5++
        ) {
          const _0xcc9d47 = _0x47b790.videos[_0x4e82e5],
            _0x2b1893 = _0xcc9d47.url,
            _0x430ade = _0xcc9d47.title
          _0x1344dd[optionIndex + '.' + (_0x4e82e5 + 1)] = _0x2b1893
          _0x42f0ad.push(
            '.tet ' + optionIndex + '.' + (_0x4e82e5 + 1) + ' ' + _0x430ade
          )
        }
        if (!videoSearchResults.has(_0x52af28)) {
          videoSearchResults.set(_0x52af28, {})
        }
        videoSearchResults.set(
          _0x52af28,
          Object.assign(videoSearchResults.get(_0x52af28), _0x1344dd)
        )
        await _0x101aed.sendPoll(_0x1db8ab, 'Choose a video to download:', [
          ..._0x42f0ad,
        ])
        optionIndex += 1
      } else {
        return _0x30dad9.reply('No search results found.')
      }
    } catch (_0x3aed71) {
      _0x571c3c('*Error !!*')
      l(_0x3aed71)
    }
  }
)
const _0x267e3c = {}
_0x267e3c.pattern = 'tet'
_0x267e3c.use = '.yts lelena'
_0x267e3c.react = '\uD83D\uDD0E'
_0x267e3c.desc = 'Search videos from youtube'
_0x267e3c.category = 'search'
_0x267e3c.filename = __filename
cmd(
  _0x267e3c,
  async (
    _0x5d31ad,
    _0x18d657,
    _0x30f21d,
    { from: _0x444b54, q: _0x447ab5, reply: _0x3f1dca }
  ) => {
    try {
      if (!_0x447ab5) {
        return _0x18d657.reply(
          'Please specify the video you want to play. Use the format: play [unique-key]'
        )
      }
      const _0x4ce836 = _0x447ab5.match(/(\d+)\.(\d+)/)
      if (!_0x4ce836) {
        return _0x18d657.reply(
          'Invalid format. Please provide a valid unique key (e.g., 1.1)'
        )
      }
      const _0x456d8b = parseInt(_0x4ce836[1]),
        _0x3dbbcb = parseInt(_0x4ce836[2]),
        _0x27cfe8 = 'yts_' + _0x456d8b
      if (videoSearchResults.has(_0x27cfe8)) {
        const _0x10c6ff =
          videoSearchResults.get(_0x27cfe8)[_0x456d8b + '.' + _0x3dbbcb]
        if (_0x10c6ff) {
          try {
            const _0x1b1634 = await ytdl.getInfo(_0x10c6ff),
              _0x6abcec =
                _0x1b1634.title ||
                (_0x1b1634.videoDetails && _0x1b1634.videoDetails.title) ||
                'N/A',
              _0x15a676 =
                formatUploadDate(_0x1b1634.videoDetails.uploadDate) || 'N/A',
              _0x12d35d =
                '\n\u256D\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2022\u221E\u2022\u2550\u2550\u256E\n\u2502\u2FFB *VAJIRA MD*\n\u2502  *Youtube Mp4 Player* \u2728\n\u2502\u2FFB *Title:* ' +
                _0x6abcec +
                '\n\u2502\u2FFB *Author:* ' +
                (_0x1b1634.videoDetails.author.name || 'N/A') +
                '\n\u2502\u2FFB *Duration:* ' +
                _0x1b1634.videoDetails.lengthSeconds +
                's\n\u2502\u2FFB *Views:* ' +
                (_0x1b1634.videoDetails.viewCount.toLocaleString() || 'N/A') +
                '\n\u2502\u2FFB *Upload Date:* ' +
                _0x15a676 +
                '\n\u2570\u2550\u2550\u2022\u221E\u2022\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256F\n'
            await _0x5d31ad.sendPoll(_0x444b54, _0x12d35d, [
              '.audiotype ' + _0x456d8b + '.' + _0x3dbbcb,
              '.\uD835\uDC15\uD835\uDC22\uD835\uDC1D\uD835\uDC1E\uD835\uDC28 ' +
                _0x456d8b +
                '.' +
                _0x3dbbcb,
              '.\uD835\uDC00\uD835\uDC2E\uD835\uDC1D\uD835\uDC22\uD835\uDC28\uD835\uDC1D\uD835\uDC28\uD835\uDC1C\uD835\uDC2E\uD835\uDC26\uD835\uDC1E\uD835\uDC27\uD835\uDC2D ' +
                _0x456d8b +
                '.' +
                _0x3dbbcb,
              '.\uD835\uDC15\uD835\uDC22\uD835\uDC1D\uD835\uDC1E\uD835\uDC28\uD835\uDC1D\uD835\uDC28\uD835\uDC1C\uD835\uDC2E\uD835\uDC26\uD835\uDC1E\uD835\uDC27\uD835\uDC2D ' +
                _0x456d8b +
                '.' +
                _0x3dbbcb,
            ])
          } catch (_0xcdc8c4) {
            return (
              console.error('Error during poll creation:', _0xcdc8c4),
              _0x18d657.reply('Unexpected error occurred during poll creation.')
            )
          }
        } else {
          return _0x18d657.reply(
            'Invalid sub-option. Please choose a valid sub-option.'
          )
        }
      } else {
        return _0x18d657.reply(
          'Invalid unique key. Please provide a valid unique key.'
        )
      }
    } catch (_0x2adadf) {
      _0x3f1dca('*Error !!*')
      l(_0x2adadf)
    }
  }
)
const _0x1a609e = {}
_0x1a609e.pattern = 'audiotype'
_0x1a609e.use = '.yts lelena'
_0x1a609e.react = '\uD83D\uDD0E'
_0x1a609e.desc = 'Search videos from youtube'
_0x1a609e.category = 'search'
_0x1a609e.filename = __filename
cmd(
  _0x1a609e,
  async (
    _0x2f4c54,
    _0x370982,
    _0x296716,
    { from: _0x101341, q: _0x2c0030, reply: _0x1fcd94 }
  ) => {
    try {
      if (!_0x2c0030) {
        return _0x370982.reply(
          'Please specify the unique key for audio playback. Use the format: audio [unique-key]'
        )
      }
      const _0x2d39b4 = _0x2c0030.match(/(\d+)\.(\d+)/)
      if (!_0x2d39b4) {
        return _0x370982.reply(
          'Invalid format. Please provide a valid unique key (e.g., 1.1)'
        )
      }
      const _0x17bc4e = parseInt(_0x2d39b4[1]),
        _0x1025e9 = parseInt(_0x2d39b4[2]),
        _0x16f674 = 'yts_' + _0x17bc4e
      if (videoSearchResults.has(_0x16f674)) {
        const _0x3e4007 =
          videoSearchResults.get(_0x16f674)[_0x17bc4e + '.' + _0x1025e9]
        if (_0x3e4007) {
          try {
            const _0x5f1969 = await ytdl.getInfo(_0x3e4007),
              _0x335e37 = _0x5f1969.videoDetails.thumbnails[0].url,
              _0x13e710 =
                _0x5f1969.title ||
                (_0x5f1969.videoDetails && _0x5f1969.videoDetails.title) ||
                'N/A',
              _0x5441a4 =
                formatUploadDate(_0x5f1969.videoDetails.uploadDate) || 'N/A',
              _0x32cf6e =
                '\n\u256D\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2022\u221E\u2022\u2550\u2550\u256E\n\u2502\u2FFB *VAJIRA MD*\n\u2502  *Youtube Mp4 Player* \u2728\n\u2502\u2FFB *Title:* ' +
                _0x13e710 +
                '\n\u2502\u2FFB *Author:* ' +
                (_0x5f1969.videoDetails.author.name || 'N/A') +
                '\n\u2502\u2FFB *Duration:* ' +
                _0x5f1969.videoDetails.lengthSeconds +
                's\n\u2502\u2FFB *Views:* ' +
                (_0x5f1969.videoDetails.viewCount.toLocaleString() || 'N/A') +
                '\n\u2502\u2FFB *Upload Date:* ' +
                _0x5441a4 +
                '\n\u2570\u2550\u2550\u2022\u221E\u2022\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256F\n',
              _0x5386f9 = ytdl(_0x3e4007, {
                quality: 'highestaudio',
                filter: 'audioonly',
              }),
              _0x77526e = await streamToBuffer(_0x5386f9),
              _0x55dcd3 = { url: _0x335e37 }
            const _0x1a6fff = {
              image: _0x55dcd3,
              caption: _0x32cf6e,
            }
            const _0xb44921 = { quoted: _0x370982 }
            await _0x2f4c54.sendMessage(_0x101341, _0x1a6fff, _0xb44921)
            const _0x1755c7 = {
              audio: _0x77526e,
              mimetype: 'audio/mpeg',
            }
            await _0x2f4c54.sendMessage(_0x296716.chat, _0x1755c7)
          } catch (_0x24a4c6) {
            return (
              console.error('Error during audio playback:', _0x24a4c6),
              _0x370982.reply(
                'Unexpected error occurred during audio playback.'
              )
            )
          }
        } else {
          return _0x370982.reply(
            'Invalid sub-option. Please choose a valid sub-option.'
          )
        }
      } else {
        return _0x370982.reply(
          'Invalid unique key. Please provide a valid unique key.'
        )
      }
    } catch (_0x146695) {
      _0x1fcd94('*Error !!*')
      l(_0x146695)
    }
  }
)
const _0x3c8dcf = {}
_0x3c8dcf.pattern = 'yts'
_0x3c8dcf.alias = ['ytsearch']
_0x3c8dcf.use = '.yts lelena'
_0x3c8dcf.react = '\uD83D\uDD0E'
_0x3c8dcf.desc = 'Search videos from youtube'
_0x3c8dcf.category = 'search'
_0x3c8dcf.filename = __filename
cmd(
  _0x3c8dcf,
  async (
    _0x473b40,
    _0x4705ce,
    _0x59a901,
    { from: _0x1ba441, q: _0x22c098, reply: _0x589a91 }
  ) => {
    try {
      if (!_0x22c098) {
        return await _0x589a91('*Please enter a query to search!*')
      }
      var _0x38582e = await yts(_0x22c098),
        _0x40846e = ''
      _0x38582e.videos.map((_0x3410c7) => {
        _0x40846e +=
          ' *\uD83D\uDDB2️' +
          _0x3410c7.title +
          '*\n\uD83D\uDD17 ' +
          _0x3410c7.url +
          '\n\n'
      })
      const _0x7f0b14 = { text: _0x40846e }
      const _0x2d6b48 = { quoted: _0x4705ce }
      await _0x473b40.sendMessage(_0x1ba441, _0x7f0b14, _0x2d6b48)
    } catch (_0x5f460e) {
      _0x589a91('*Error !!*')
      l(_0x5f460e)
    }
  }
)
if (config.COMMAND_TYPE === 'button') {
  const _0x3af3ac = {
    pattern: 'video',
    alias: ['ytmp4'],
    use: '.video lelena',
    react: '\uD83C\uDFA5',
    desc: 'Download videos from youtube',
    category: 'download',
    filename: __filename,
  }
  cmd(
    _0x3af3ac,
    async (
      _0x2f0fef,
      _0x8e08ec,
      _0x35820a,
      { from: _0x36a465, q: _0x2e2655, reply: _0x143c0d }
    ) => {
      try {
        if (!_0x2e2655) {
          return await _0x143c0d('*Please enter a query or a url!*')
        }
        const _0x1c1521 = _0x2e2655.replace(/\?si=[^&]*/, '')
        var _0x1621b3 = await yts(_0x1c1521),
          _0x2c9e17 = _0x1621b3.videos[0]
        const _0x45698e =
            '`\u2726 \uD835\uDDE9\uD835\uDDDC\uD835\uDDD7\uD835\uDDD8\uD835\uDDE2 \uD835\uDDD7\uD835\uDDE2\uD835\uDDEA\uD835\uDDE1\uD835\uDDDF\uD835\uDDE2\uD835\uDDD4\uD835\uDDD7\uD835\uDDD8\uD835\uDDE5 \u2726`\n    \n> *`\u27A4 Title` :* ' +
            _0x2c9e17.title +
            '\n    \n> *`\u27A4 Views` :* ' +
            _0x2c9e17.views +
            '\n    \n> *`\u27A4 Duration` :* ' +
            _0x2c9e17.duration +
            '\n    \n> *`\u27A4 URL` :* ' +
            _0x2c9e17.url +
            '\n    ',
          _0x5afe44 = [],
          _0x4e3594 = new Map()
        for (let _0x308eaa = 0; _0x308eaa < 1; _0x308eaa++) {
          const _0x1c0295 = commands[_0x308eaa]
          if (
            !_0x1c0295.dontAddCommandList &&
            _0x1c0295.pattern !== undefined
          ) {
            const _0x3f0efc = _0x1c0295.category.toUpperCase()
            !_0x4e3594.has(_0x3f0efc) &&
              (_0x5afe44.push(_0x3f0efc), _0x4e3594.set(_0x3f0efc, []))
            _0x4e3594.get(_0x3f0efc).push(_0x1c0295.pattern)
          }
        }
        const _0x59e013 = []
        for (const _0x81a8e2 of _0x5afe44) {
          _0x59e013.push({
            header: 'Normal types videos',
            title: '240P VIDEO',
            description: 'Download 240 quality video',
            id: '.240p ' + _0x2c9e17.url,
          }),
            _0x59e013.push({
              header: '',
              title: '360P VIDEO',
              description: 'Download 360 quality video',
              id: '.360p ' + _0x2c9e17.url,
            }),
            _0x59e013.push({
              header: '',
              title: '480P VIDEO',
              description: 'Download 480 quality video',
              id: '.480p ' + _0x2c9e17.url,
            }),
            _0x59e013.push({
              header: '',
              title: '720P VIDEO',
              description: 'Download 720 quality video',
              id: '.720p ' + _0x2c9e17.url,
            }),
            _0x59e013.push({
              header: '',
              title: '1080P VIDEO',
              description: 'Download 1080 quality video',
              id: '.1080p ' + _0x2c9e17.url,
            })
        }
        const _0x5d7550 = []
        for (const _0x1b28a5 of _0x5afe44) {
          _0x5d7550.push({
            header: 'Document type videos',
            title: '240P VIDEO',
            description: 'Download 240 quality video',
            id: '.24p ' + _0x2c9e17.url,
          })
          _0x5d7550.push({
            header: '',
            title: '360P VIDEO',
            description: 'Download 360 quality video',
            id: '.36p ' + _0x2c9e17.url,
          })
          _0x5d7550.push({
            header: '',
            title: '480P VIDEO',
            description: 'Download 480 quality video',
            id: '.48p ' + _0x2c9e17.url,
          })
          _0x5d7550.push({
            header: '',
            title: '720P VIDEO',
            description: 'Download 720 quality video',
            id: '.72p ' + _0x2c9e17.url,
          })
          _0x5d7550.push({
            header: '',
            title: '1080P VIDEO',
            description: 'Download 1080 quality video',
            id: '.108p ' + _0x2c9e17.url,
          })
        }
        const _0x2f6b88 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL,
        }
        let _0x15b772 = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify(_0x2f6b88),
          },
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Normal type videos',
              sections: [
                {
                  title: 'Please select a category',
                  highlight_label: 'VAJIRA-MD',
                  rows: _0x59e013,
                },
              ],
            }),
          },
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Document type videos',
              sections: [
                {
                  title: 'Please select a category',
                  highlight_label: 'VAJIRA-MD',
                  rows: _0x5d7550,
                },
              ],
            }),
          },
        ]
        const _0x2ee389 = {
          image: _0x2c9e17.thumbnail,
          header: '',
          footer: config.FOOTER,
          body: _0x45698e,
        }
        let _0x17d756 = _0x2ee389
        return await _0x2f0fef.sendButtonMessage(
          _0x36a465,
          _0x15b772,
          _0x8e08ec,
          _0x17d756
        )
      } catch (_0x698c58) {
        _0x143c0d('*Error !!*')
        l(_0x698c58)
      }
    }
  )
  const _0x1a8d9c = {
    pattern: 'yt360',
    react: '\uD83C\uDFA5',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x1a8d9c,
    async (
      _0xc0385d,
      _0x54367b,
      _0x1cde66,
      { from: _0x2a2212, q: _0x4b80d7, reply: _0x768503 }
    ) => {
      try {
        if (!_0x4b80d7) {
          return await _0x768503('*Need a youtube url!*')
        }
        let _0x495d3b = await ytdl.getInfo(_0x4b80d7),
          _0x146c86 = _0x495d3b.videoDetails.title,
          _0x112100 = getRandom('.mp4')
        const _0x442051 = {
          filter: (_0x274f71) =>
            _0x274f71.container == 'mp4' && _0x274f71.itag == '18',
        }
        const _0x2cbe57 = ytdl(_0x4b80d7, _0x442051).pipe(
          fs.createWriteStream('./' + _0x112100)
        )
        await new Promise((_0x5f3f3e, _0x3159ef) => {
          _0x2cbe57.on('error', _0x3159ef)
          _0x2cbe57.on('finish', _0x5f3f3e)
        })
        if (!_0x2cbe57) {
          return _0x768503('*360p quality not found please try another!*')
        }
        let _0x2c8416 = fs.statSync('./' + _0x112100),
          _0x491ec9 = _0x2c8416.size / 1048576
        if (_0x491ec9 <= 1024) {
          if (_0x491ec9 <= 100) {
            const _0x2405b0 = { quoted: _0x54367b }
            const _0x2dd8f3 = await _0xc0385d.sendMessage(
                _0x2a2212,
                { video: fs.readFileSync('./' + _0x112100) },
                _0x2405b0
              ),
              _0x390b5f = {
                text: '\uD83C\uDFBC',
                key: _0x2dd8f3.key,
              }
            const _0xa270a1 = { react: _0x390b5f }
            await _0xc0385d.sendMessage(_0x2a2212, _0xa270a1)
            const _0xa731c4 = {
              text: '\u2705',
              key: _0x54367b.key,
            }
            const _0x595440 = {}
            return (
              (_0x595440.react = _0xa731c4),
              await _0xc0385d.sendMessage(_0x2a2212, _0x595440),
              fs.unlinkSync('./' + _0x112100)
            )
          } else {
            const _0x2bd5af = { quoted: _0x54367b }
            const _0x4e7352 = await _0xc0385d.sendMessage(
                _0x2a2212,
                {
                  document: fs.readFileSync('./' + _0x112100),
                  mimetype: 'video/mp4',
                  fileName: _0x146c86 + '.mp4',
                },
                _0x2bd5af
              ),
              _0x2300f5 = {
                text: '\uD83C\uDFBC',
                key: _0x4e7352.key,
              }
            const _0x29d028 = { react: _0x2300f5 }
            await _0xc0385d.sendMessage(_0x2a2212, _0x29d028)
            const _0x9c717c = {
              text: '\u2705',
              key: _0x54367b.key,
            }
            const _0x27f0ee = {}
            return (
              (_0x27f0ee.react = _0x9c717c),
              await _0xc0385d.sendMessage(_0x2a2212, _0x27f0ee),
              fs.unlinkSync('./' + _0x112100)
            )
          }
        } else {
          return (
            fs.unlinkSync('./' + _0x112100),
            _0x768503('*File size is too big!*')
          )
        }
      } catch (_0x405956) {
        _0x768503('*Error !!*')
        l(_0x405956)
      }
    }
  )
  const _0x4ba4fe = {
    pattern: 'yt720',
    react: '\uD83C\uDFA5',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x4ba4fe,
    async (
      _0x5009dc,
      _0x3df91f,
      _0x2671a6,
      { from: _0x513ef0, q: _0x44391b, reply: _0x558d71 }
    ) => {
      try {
        if (!_0x44391b) {
          return await _0x558d71('*Need a youtube url!*')
        }
        let _0x562341 = await ytdl.getInfo(_0x44391b),
          _0x2075ce = _0x562341.videoDetails.title
        const _0x30ae1c = await youtube720(_0x44391b)
        let _0x16c7ab = await getsize(_0x30ae1c)
        if (_0x16c7ab.includes('MB')) {
          _0x16c7ab = _0x16c7ab.replace(' MB', '')
        } else {
          _0x16c7ab.includes('GB') &&
            (_0x16c7ab = _0x16c7ab.replace(' GB', '') * 1024)
        }
        if (_0x16c7ab <= 1024) {
          if (_0x16c7ab <= 100) {
            const _0x36649b = { url: _0x30ae1c }
            const _0x235c09 = { video: _0x36649b }
            const _0x2be435 = { quoted: _0x3df91f }
            const _0x98970d = await _0x5009dc.sendMessage(
                _0x513ef0,
                _0x235c09,
                _0x2be435
              ),
              _0x5ad36b = {
                text: '\uD83C\uDFBC',
                key: _0x98970d.key,
              }
            const _0x11d13c = { react: _0x5ad36b }
            await _0x5009dc.sendMessage(_0x513ef0, _0x11d13c)
            const _0x476ff6 = {
              text: '\u2705',
              key: _0x3df91f.key,
            }
            const _0x4dd6eb = { react: _0x476ff6 }
            await _0x5009dc.sendMessage(_0x513ef0, _0x4dd6eb)
          } else {
            const _0x2f8d45 = { url: _0x30ae1c }
            const _0x2e8cba = { quoted: _0x3df91f }
            const _0x14b00f = await _0x5009dc.sendMessage(
                _0x513ef0,
                {
                  document: _0x2f8d45,
                  mimetype: 'video/mp4',
                  fileName: _0x2075ce + '.mp4',
                },
                _0x2e8cba
              ),
              _0x167ec9 = {
                text: '\uD83C\uDFBC',
                key: _0x14b00f.key,
              }
            const _0x41e268 = { react: _0x167ec9 }
            await _0x5009dc.sendMessage(_0x513ef0, _0x41e268)
            const _0x42dee1 = {
              text: '\u2705',
              key: _0x3df91f.key,
            }
            const _0x5ebc4d = { react: _0x42dee1 }
            await _0x5009dc.sendMessage(_0x513ef0, _0x5ebc4d)
          }
        } else {
          _0x558d71('*File size is too big!*')
        }
      } catch (_0x452c5f) {
        _0x558d71('*Error !!*')
        l(_0x452c5f)
      }
    }
  )
  const _0x2c0424 = {
    pattern: 'song',
    alias: ['ytmp3'],
    use: '.song lelena',
    react: '\uD83C\uDFA7',
    desc: 'Download audios from youtube',
    category: 'download',
    filename: __filename,
  }
  cmd(
    _0x2c0424,
    async (
      _0x367860,
      _0xfa7d39,
      _0x4fdbc1,
      { from: _0x5e906e, q: _0x1453c8, reply: _0x1340b8 }
    ) => {
      try {
        if (!_0x1453c8) {
          return await _0x1340b8('*Please enter a query or a url!*')
        }
        const _0x583645 = _0x1453c8.replace(/\?si=[^&]*/, '')
        var _0x480970 = await yts(_0x583645),
          _0x1307fe = _0x480970.videos[0]
        const _0x2f796a =
            '`\u2726 \uD835\uDDE6\uD835\uDDE2\uD835\uDDE1\uD835\uDDDA \uD835\uDDD7\uD835\uDDE2\uD835\uDDEA\uD835\uDDE1\uD835\uDDDF\uD835\uDDE2\uD835\uDDD4\uD835\uDDD7\uD835\uDDD8\uD835\uDDE5 \u2726`\n\n> *`\u27A4 Title` :* ' +
            _0x1307fe.title +
            '\n\n> *`\u27A4 Views` :* ' +
            _0x1307fe.views +
            '\n\n> *`\u27A4 Duration` :* ' +
            _0x1307fe.duration +
            '\n\n> *`\u27A4 URL` :* ' +
            _0x1307fe.url +
            '\n',
          _0x235060 = {
            display_text: 'Audio',
            id: '.audsong ' + _0x1307fe.url,
          }
        let _0x216807 = [
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify(_0x235060),
          },
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: 'Document',
              id: '.docsong ' + _0x1307fe.url,
            }),
          },
        ]
        const _0x2aae2e = {
          image: _0x1307fe.thumbnail,
          header: '',
          footer: config.FOOTER,
          body: _0x2f796a,
        }
        let _0x58b16e = _0x2aae2e
        return await _0x367860.sendButtonMessage(
          _0x5e906e,
          _0x216807,
          _0xfa7d39,
          _0x58b16e
        )
      } catch (_0x5f17ea) {
        _0x1340b8('*Error !!*')
        l(_0x5f17ea)
      }
    }
  )
  const _0x2a4728 = {
    pattern: 'audsong',
    react: '\uD83C\uDFA7',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x2a4728,
    async (
      _0x36ea1a,
      _0x4fae3f,
      _0x36c8dc,
      { from: _0x304f4b, q: _0x2edc1f, reply: _0x403d35 }
    ) => {
      try {
        if (!_0x2edc1f) {
          return await _0x403d35('*Need a youtube url!*')
        }
        let _0x13a65e = await ytdl.getInfo(_0x2edc1f),
          _0x3352c1 = _0x13a65e.videoDetails.title,
          _0x35faf9 = getRandom('.mp3')
        const _0xe5b235 = {
          filter: (_0x91acd5) =>
            _0x91acd5.audioBitrate == 160 || _0x91acd5.audioBitrate == 128,
        }
        const _0x2b6314 = ytdl(_0x2edc1f, _0xe5b235).pipe(
          fs.createWriteStream('./' + _0x35faf9)
        )
        await new Promise((_0x152741, _0x424fba) => {
          _0x2b6314.on('error', _0x424fba), _0x2b6314.on('finish', _0x152741)
        })
        let _0x3c9bc3 = fs.statSync('./' + _0x35faf9),
          _0x142e5f = _0x3c9bc3.size / 1048576
        if (_0x142e5f <= 1024) {
          const _0x2c04da = { quoted: _0x4fae3f }
          let _0xfe6f14 = await _0x36ea1a.sendMessage(
            _0x304f4b,
            {
              audio: fs.readFileSync('./' + _0x35faf9),
              mimetype: 'audio/mpeg',
              fileName: _0x3352c1 + '.mp3',
            },
            _0x2c04da
          )
          const _0x2dee7d = {
            text: '\uD83C\uDFBC',
            key: _0xfe6f14.key,
          }
          const _0x4e3b41 = { react: _0x2dee7d }
          await _0x36ea1a.sendMessage(_0x304f4b, _0x4e3b41)
          const _0xd70c99 = {
            text: '\u2705',
            key: _0x4fae3f.key,
          }
          const _0x47a73b = {}
          return (
            (_0x47a73b.react = _0xd70c99),
            await _0x36ea1a.sendMessage(_0x304f4b, _0x47a73b),
            fs.unlinkSync('./' + _0x35faf9)
          )
        } else {
          _0x403d35('*File size is too big!*')
        }
        fs.unlinkSync('./' + _0x35faf9)
      } catch (_0x153c07) {
        _0x403d35('*Error !!*')
        l(_0x153c07)
      }
    }
  )
  const _0x54d111 = {
    pattern: 'docsong',
    react: '\uD83C\uDFA7',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x54d111,
    async (
      _0x9e9329,
      _0x5d7646,
      _0x304c21,
      { from: _0x110e36, q: _0x4a5db7, reply: _0x4162fc }
    ) => {
      try {
        if (!_0x4a5db7) {
          return await _0x4162fc('*Need a youtube url!*')
        }
        let _0x3c6d2e = await ytdl.getInfo(_0x4a5db7),
          _0x47dfa9 = _0x3c6d2e.videoDetails.title,
          _0x5174f9 = getRandom('.mp3')
        const _0x591b4a = {
          filter: (_0x34f817) =>
            _0x34f817.audioBitrate == 160 || _0x34f817.audioBitrate == 128,
        }
        const _0x2e3a5c = ytdl(_0x4a5db7, _0x591b4a).pipe(
          fs.createWriteStream('./' + _0x5174f9)
        )
        await new Promise((_0x32284, _0x284789) => {
          _0x2e3a5c.on('error', _0x284789), _0x2e3a5c.on('finish', _0x32284)
        })
        let _0x29c6a8 = fs.statSync('./' + _0x5174f9),
          _0x2791c5 = _0x29c6a8.size / 1048576
        if (_0x2791c5 <= 1024) {
          const _0xe05ae5 = { quoted: _0x5d7646 }
          let _0x40d09f = await _0x9e9329.sendMessage(
            _0x110e36,
            {
              document: fs.readFileSync('./' + _0x5174f9),
              mimetype: 'audio/mpeg',
              fileName: _0x47dfa9 + '.mp3',
            },
            _0xe05ae5
          )
          const _0x12e309 = {
            text: '\uD83C\uDFBC',
            key: _0x40d09f.key,
          }
          const _0x260602 = { react: _0x12e309 }
          await _0x9e9329.sendMessage(_0x110e36, _0x260602)
          const _0x243613 = {
            text: '\u2705',
            key: _0x5d7646.key,
          }
          const _0x2715c5 = {}
          return (
            (_0x2715c5.react = _0x243613),
            await _0x9e9329.sendMessage(_0x110e36, _0x2715c5),
            fs.unlinkSync('./' + _0x5174f9)
          )
        } else {
          _0x4162fc('*File size is too big!*')
        }
        fs.unlinkSync('./' + _0x5174f9)
      } catch (_0x5bb89a) {
        _0x4162fc('*Error !!*')
        l(_0x5bb89a)
      }
    }
  )
  const _0x43f850 = {
    pattern: '240p',
    react: '\uD83C\uDFA5',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x43f850,
    async (
      _0x1a7866,
      _0x56c10c,
      _0x506ec4,
      { from: _0x1d9a05, q: _0x23f0db, reply: _0x531c44 }
    ) => {
      try {
        if (!ytreg(_0x23f0db)) {
          return await _0x531c44(urlneed)
        }
        const _0x209982 = await dl.youtubedl(_0x23f0db)
        let _0x47b7df = _0x209982,
          _0x4f7677 = await getsize(await _0x47b7df.video['240p'].download())
        const _0x3f6b45 = { quoted: _0x506ec4 }
        let _0x2e1676 = await _0x1a7866.sendMessage(
          _0x1d9a05,
          {
            video: { url: await _0x47b7df.video['240p'].download() },
            caption: config.FOOTER,
          },
          _0x3f6b45
        )
        const _0x57b219 = {
          text: '\uD83C\uDFA5',
          key: _0x2e1676.key,
        }
        const _0x2a41f9 = { react: _0x57b219 }
        await _0x1a7866.sendMessage(_0x1d9a05, _0x2a41f9)
      } catch (_0x5d4726) {
        _0x531c44(N_FOUND), l(_0x5d4726)
      }
    }
  )
  const _0x2e2b1a = {
    pattern: '360p',
    use: '.360p <video url>',
    react: '\uD83D\uDCFD️',
    desc: 'Download yt videos.',
    category: '',
    filename: __filename,
  }
  cmd(
    _0x2e2b1a,
    async (
      _0x2a9235,
      _0x360d98,
      _0x46cff0,
      { from: _0x449eb7, q: _0x4e86fc, reply: _0x2662ca }
    ) => {
      try {
        if (!ytreg(_0x4e86fc)) {
          return await _0x2662ca(urlneed)
        }
        const _0x193c2f = await dl.youtubedl(_0x4e86fc)
        let _0x4a7c5b = _0x193c2f,
          _0x197ad0 = await getsize(await _0x4a7c5b.video['360p'].download())
        const _0x45683e = { quoted: _0x46cff0 }
        let _0x3d4e75 = await _0x2a9235.sendMessage(
          _0x449eb7,
          {
            video: { url: await _0x4a7c5b.video['360p'].download() },
            caption: config.FOOTER,
          },
          _0x45683e
        )
        const _0xd162e0 = {
          text: '\uD83C\uDFA5',
          key: _0x3d4e75.key,
        }
        const _0x22f6bb = { react: _0xd162e0 }
        await _0x2a9235.sendMessage(_0x449eb7, _0x22f6bb)
      } catch (_0x46aee5) {
        _0x2662ca(N_FOUND)
        l(_0x46aee5)
      }
    }
  )
  const _0x4b84e3 = {
    pattern: '480p',
    use: '.480p <video url>',
    react: '\uD83D\uDCFD️',
    desc: 'Download yt videos.',
    category: '',
    filename: __filename,
  }
  cmd(
    _0x4b84e3,
    async (
      _0x2f4391,
      _0x2a1fc8,
      _0x22e37b,
      { from: _0xa3d16a, q: _0x33436c, reply: _0x3506d9 }
    ) => {
      try {
        if (!ytreg(_0x33436c)) {
          return await _0x3506d9(urlneed)
        }
        const _0x695a63 = await dl.youtubedl(_0x33436c)
        let _0x1e1486 = _0x695a63,
          _0x224819 = await getsize(await _0x1e1486.video['480p'].download())
        const _0x569609 = { quoted: _0x22e37b }
        let _0x4cda56 = await _0x2f4391.sendMessage(
          _0xa3d16a,
          {
            video: { url: await _0x1e1486.video['480p'].download() },
            caption: config.FOOTER,
          },
          _0x569609
        )
        const _0x13273d = {
          text: '\uD83C\uDFA5',
          key: _0x4cda56.key,
        }
        const _0x2d4f9d = { react: _0x13273d }
        await _0x2f4391.sendMessage(_0xa3d16a, _0x2d4f9d)
      } catch (_0x47dd80) {
        _0x3506d9(N_FOUND)
        l(_0x47dd80)
      }
    }
  )
  const _0x2f278c = {
    pattern: '720p',
    use: '.720p <video url>',
    react: '\uD83D\uDCFD️',
    desc: 'Download yt videos.',
    category: '',
    filename: __filename,
  }
  cmd(
    _0x2f278c,
    async (
      _0x6712b,
      _0x18c407,
      _0x4406a3,
      { from: _0x34711a, q: _0x6e9146, reply: _0x4fd9de }
    ) => {
      try {
        if (!ytreg(_0x6e9146)) {
          return await _0x4fd9de(urlneed)
        }
        const _0x554fb0 = await dl.youtubedl(_0x6e9146)
        let _0x2eb450 = _0x554fb0,
          _0x52013d = await getsize(await _0x2eb450.video['720p'].download())
        const _0x52ec48 = { quoted: _0x4406a3 }
        let _0x55cde6 = await _0x6712b.sendMessage(
          _0x34711a,
          {
            video: { url: await _0x2eb450.video['720p'].download() },
            caption: config.FOOTER,
          },
          _0x52ec48
        )
        const _0x5575f2 = {
          text: '\uD83C\uDFA5',
          key: _0x55cde6.key,
        }
        const _0x147371 = { react: _0x5575f2 }
        await _0x6712b.sendMessage(_0x34711a, _0x147371)
      } catch (_0x3b208f) {
        _0x4fd9de(N_FOUND)
        l(_0x3b208f)
      }
    }
  )
  const _0x187aa0 = {
    pattern: '1080p',
    use: '.1080p <video url>',
    react: '\uD83D\uDCFD️',
    desc: 'Download yt videos.',
    category: '',
    filename: __filename,
  }
  cmd(
    _0x187aa0,
    async (
      _0x1a1b47,
      _0x391b83,
      _0x487bc0,
      { from: _0x3dce87, q: _0x392e78, reply: _0x59c051 }
    ) => {
      try {
        if (!ytreg(_0x392e78)) {
          return await _0x59c051(urlneed)
        }
        const _0x3c03f0 = await dl.youtubedl(_0x392e78)
        let _0x1e820e = _0x3c03f0,
          _0x2daa69 = await getsize(await _0x1e820e.video['1080p'].download())
        const _0x44e611 = { quoted: _0x487bc0 }
        let _0xcddb98 = await _0x1a1b47.sendMessage(
          _0x3dce87,
          {
            video: { url: await _0x1e820e.video['1080p'].download() },
            caption: config.FOOTER,
          },
          _0x44e611
        )
        const _0x1ccbb7 = {
          text: '\uD83C\uDFA5',
          key: _0xcddb98.key,
        }
        const _0x1b38e5 = { react: _0x1ccbb7 }
        await _0x1a1b47.sendMessage(_0x3dce87, _0x1b38e5)
      } catch (_0x440171) {
        _0x59c051(N_FOUND)
        l(_0x440171)
      }
    }
  )
  const _0x47fb4b = {
    pattern: '24p',
    use: '.240p <video url>',
    react: '\uD83D\uDCFD️',
    desc: 'Download yt videos.',
    category: '',
    filename: __filename,
  }
  cmd(
    _0x47fb4b,
    async (
      _0x5c5cd0,
      _0x58fba9,
      _0x39b791,
      { from: _0x1e0789, q: _0x31a53a, reply: _0x5c1b8c }
    ) => {
      try {
        if (!ytreg(_0x31a53a)) {
          return await _0x5c1b8c(urlneed)
        }
        const _0x58d391 = await dl.youtubedl(_0x31a53a)
        let _0x25333a = _0x58d391,
          _0x21ed6f = await getsize(await _0x25333a.video['240p'].download())
        const _0xfccbe0 = { quoted: _0x39b791 }
        let _0x9b5d27 = await _0x5c5cd0.sendMessage(
          _0x1e0789,
          {
            document: { url: await _0x25333a.video['240p'].download() },
            fileName: 'video.mp4',
            mimetype: 'video/mp4',
            caption: config.FOOTER,
          },
          _0xfccbe0
        )
        const _0x539446 = {
          text: '\uD83C\uDFA5',
          key: _0x9b5d27.key,
        }
        const _0x4afc42 = { react: _0x539446 }
        await _0x5c5cd0.sendMessage(_0x1e0789, _0x4afc42)
      } catch (_0x2c6611) {
        _0x5c1b8c(N_FOUND)
        l(_0x2c6611)
      }
    }
  )
  const _0x4475b6 = {
    pattern: '36p',
    use: '.240p <video url>',
    react: '\uD83D\uDCFD️',
    desc: 'Download yt videos.',
    category: '',
    filename: __filename,
  }
  cmd(
    _0x4475b6,
    async (
      _0x403373,
      _0x27c795,
      _0x587df6,
      { from: _0x56b62e, q: _0x1933b9, reply: _0x2a025f }
    ) => {
      try {
        if (!ytreg(_0x1933b9)) {
          return await _0x2a025f(urlneed)
        }
        const _0x5b6e58 = await dl.youtubedl(_0x1933b9)
        let _0x5b2f11 = _0x5b6e58,
          _0x28105c = await getsize(await _0x5b2f11.video['360p'].download())
        const _0x25c4c5 = { quoted: _0x587df6 }
        let _0x55ec6e = await _0x403373.sendMessage(
          _0x56b62e,
          {
            document: { url: await _0x5b2f11.video['360p'].download() },
            fileName: 'video.mp4',
            mimetype: 'video/mp4',
            caption: config.FOOTER,
          },
          _0x25c4c5
        )
        const _0x2092ac = {
          text: '\uD83C\uDFA5',
          key: _0x55ec6e.key,
        }
        const _0x2205f5 = { react: _0x2092ac }
        await _0x403373.sendMessage(_0x56b62e, _0x2205f5)
      } catch (_0x45891a) {
        _0x2a025f(N_FOUND)
        l(_0x45891a)
      }
    }
  )
  const _0x44e7ad = {
    pattern: '48p',
    use: '.480p <video url>',
    react: '\uD83D\uDCFD️',
    desc: 'Download yt videos.',
    category: '',
    filename: __filename,
  }
  cmd(
    _0x44e7ad,
    async (
      _0xc22e45,
      _0x44b767,
      _0x1e1d9d,
      { from: _0x193ff3, q: _0x4fa7f4, reply: _0x37972c }
    ) => {
      try {
        if (!ytreg(_0x4fa7f4)) {
          return await _0x37972c(urlneed)
        }
        const _0x5a9806 = await dl.youtubedl(_0x4fa7f4)
        let _0x16a177 = _0x5a9806,
          _0x37ae90 = await getsize(await _0x16a177.video['480p'].download())
        const _0x23978f = { quoted: _0x1e1d9d }
        let _0x40d5aa = await _0xc22e45.sendMessage(
          _0x193ff3,
          {
            document: { url: await _0x16a177.video['480p'].download() },
            fileName: 'video.mp4',
            mimetype: 'video/mp4',
            caption: config.FOOTER,
          },
          _0x23978f
        )
        const _0x5ec149 = {
          text: '\uD83C\uDFA5',
          key: _0x40d5aa.key,
        }
        const _0x17179d = { react: _0x5ec149 }
        await _0xc22e45.sendMessage(_0x193ff3, _0x17179d)
      } catch (_0x31edcd) {
        _0x37972c(N_FOUND)
        l(_0x31edcd)
      }
    }
  )
  const _0x15a4b3 = {
    pattern: '72p',
    use: '.720p <video url>',
    react: '\uD83D\uDCFD️',
    desc: 'Download yt videos.',
    category: '',
    filename: __filename,
  }
  cmd(
    _0x15a4b3,
    async (
      _0x379d1d,
      _0x4173b0,
      _0x4a585e,
      { from: _0x22a60b, q: _0x40b097, reply: _0x395dd1 }
    ) => {
      try {
        if (!ytreg(_0x40b097)) {
          return await _0x395dd1(urlneed)
        }
        const _0x2de761 = await dl.youtubedl(_0x40b097)
        let _0x29f2a7 = _0x2de761,
          _0x1c2d36 = await getsize(await _0x29f2a7.video['720p'].download())
        const _0x3d80a5 = { quoted: _0x4a585e }
        let _0x1f3d07 = await _0x379d1d.sendMessage(
          _0x22a60b,
          {
            document: { url: await _0x29f2a7.video['720p'].download() },
            fileName: 'video.mp4',
            mimetype: 'video/mp4',
            caption: config.FOOTER,
          },
          _0x3d80a5
        )
        const _0x181c56 = {
          text: '\uD83C\uDFA5',
          key: _0x1f3d07.key,
        }
        const _0x26a2d4 = { react: _0x181c56 }
        await _0x379d1d.sendMessage(_0x22a60b, _0x26a2d4)
      } catch (_0x175336) {
        _0x395dd1(N_FOUND), l(_0x175336)
      }
    }
  )
  const _0xfba0ca = {
    pattern: '108p',
    use: '.1080p <video url>',
    react: '\uD83D\uDCFD️',
    desc: 'Download yt videos.',
    category: '',
    filename: __filename,
  }
  cmd(
    _0xfba0ca,
    async (
      _0x195736,
      _0x502c08,
      _0x44ac9a,
      { from: _0x4f5e8e, q: _0x39ce20, reply: _0x10c400 }
    ) => {
      try {
        if (!ytreg(_0x39ce20)) {
          return await _0x10c400(urlneed)
        }
        const _0x3065e1 = await dl.youtubedl(_0x39ce20)
        let _0x590802 = _0x3065e1,
          _0x5bebf5 = await getsize(await _0x590802.video['1080p'].download())
        const _0xa7c3df = { quoted: _0x44ac9a }
        let _0x13b174 = await _0x195736.sendMessage(
          _0x4f5e8e,
          {
            document: { url: await _0x590802.video['1080p'].download() },
            fileName: 'video.mp4',
            mimetype: 'video/mp4',
            caption: config.FOOTER,
          },
          _0xa7c3df
        )
        const _0x3758b9 = {
          text: '\uD83C\uDFA5',
          key: _0x13b174.key,
        }
        const _0x472ce2 = { react: _0x3758b9 }
        await _0x195736.sendMessage(_0x4f5e8e, _0x472ce2)
      } catch (_0x645b23) {
        _0x10c400(N_FOUND)
        l(_0x645b23)
      }
    }
  )
}
