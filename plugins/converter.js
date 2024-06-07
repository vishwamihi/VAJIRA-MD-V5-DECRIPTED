const axios = require('axios'),
  { cmd, commands } = require('../lib/command')
let { img2url } = require('@blackamda/telegram-image-url')
const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    jsonformat,
  } = require('../lib/functions'),
  config = require('../settings'),
  fs = require('fs'),
  got = require('got')
let { unlink } = require('fs/promises')
const translate = require('translate-google-api'),
  { promisify } = require('util'),
  FormData = require('form-data'),
  stream = require('stream'),
  pipeline = promisify(stream.pipeline),
  fileType = require('file-type'),
  { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter'),
  path = require('path'),
  { tmpdir } = require('os'),
  { spawn } = require('child_process'),
  Crypto = require('crypto'),
  ffmpegPath = require('@ffmpeg-installer/ffmpeg').path,
  ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)
async function sswebA(
  _0x4b06f9 = '',
  _0x14550b = false,
  _0xf7a901 = 'desktop'
) {
  _0xf7a901 = _0xf7a901.toLowerCase()
  if (!['desktop', 'tablet', 'phone'].includes(_0xf7a901)) {
    _0xf7a901 = 'desktop'
  }
  let _0x118273 = new URLSearchParams()
  _0x118273.append('url', _0x4b06f9)
  _0x118273.append('device', _0xf7a901)
  if (!!_0x14550b) {
    _0x118273.append('full', 'on')
  }
  _0x118273.append('cacheLimit', 0)
  let _0x5040b9 = await axios({
      url: 'https://www.screenshotmachine.com/capture.php',
      method: 'post',
      data: _0x118273,
    }),
    _0x54694f = _0x5040b9.headers['set-cookie'],
    _0x122dc4 = await axios({
      url: 'https://www.screenshotmachine.com/' + _0x5040b9.data.link,
      headers: { cookie: _0x54694f.join('') },
      responseType: 'arraybuffer',
    })
  return Buffer.from(_0x122dc4.data)
}
async function videoToWebp(_0x4025f9) {
  const _0x2be0a7 = path.join(
      tmpdir(),
      Crypto.randomBytes(6).readUIntLE(0, 6).toString(36) + '.webp'
    ),
    _0x230ae5 = path.join(
      tmpdir(),
      Crypto.randomBytes(6).readUIntLE(0, 6).toString(36) + '.mp4'
    )
  fs.writeFileSync(_0x230ae5, _0x4025f9)
  await new Promise((_0x3e2aeb, _0x234ba2) => {
    ffmpeg(_0x230ae5)
      .on('error', _0x234ba2)
      .on('end', () => _0x3e2aeb(true))
      .addOutputOptions([
        '-vcodec',
        'libwebp',
        '-vf',
        "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
        '-loop',
        '0',
        '-ss',
        '00:00:00',
        '-t',
        '00:00:05',
        '-preset',
        'default',
        '-an',
        '-vsync',
        '0',
      ])
      .toFormat('webp')
      .save(_0x2be0a7)
  })
  const _0x4e140a = fs.readFileSync(_0x2be0a7)
  return fs.unlinkSync(_0x2be0a7), fs.unlinkSync(_0x230ae5), _0x4e140a
}
function toAudio(_0x221ec2, _0x230e56) {
  return ffmpeg(
    _0x221ec2,
    ['-vn', '-ac', '2', '-b:a', '128k', '-ar', '44100', '-f', 'mp3'],
    _0x230e56,
    'mp3'
  )
}
function toPTT(_0x3a804c, _0x3d0df3) {
  return ffmpeg(
    _0x3a804c,
    [
      '-vn',
      '-c:a',
      'libopus',
      '-b:a',
      '128k',
      '-vbr',
      'on',
      '-compression_level',
      '10',
    ],
    _0x3d0df3,
    'opus'
  )
}
function toVideo(_0x3f8342, _0x47b2b5) {
  return ffmpeg(
    _0x3f8342,
    [
      '-c:v',
      'libx264',
      '-c:a',
      'aac',
      '-ab',
      '128k',
      '-ar',
      '44100',
      '-crf',
      '32',
      '-preset',
      'slow',
    ],
    _0x47b2b5,
    'mp4'
  )
}
var desct = ''
if (config.LANG === 'SI') {
  desct = 'එය ලබා දී ඇති රූපය url එකක් බවට පරිවර්තනය කරයි.'
} else {
  desct = 'It convert given image to url.'
}
var imgmsg = ''
if (config.LANG === 'SI') {
  imgmsg = '*ඡායාරූපයකට mention දෙන්න !*'
} else {
  imgmsg = '*Reply to a photo !*'
}
var cantf = ''
if (config.LANG === 'SI') {
  cantf = '*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*'
} else {
  cantf = '*Server is busy. Try again later.!*'
}
var imgmsgs = ''
if (config.LANG === 'SI') {
  imgmsgs = '*මට anime නමක් දෙන්න !*'
} else {
  imgmsgs = '*Give me a anime name !*'
}
var descgs = ''
if (config.LANG === 'SI') {
  descgs = 'එය ලබා දී ඇති anime නම පිළිබඳ විස්තර සපයයි.'
} else {
  descgs = 'It gives details of given anime name.'
}
var cants = ''
if (config.LANG === 'SI') {
  cants = 'I cant find this anime.'
} else {
  cants = 'I cant find this anime.'
}
var descg = ''
if (config.LANG === 'SI') {
  descg = 'එය ඔබගේ mention දුන් ඡායාරූපය ස්ටිකර් බවට පරිවර්තනය කරයි.'
} else {
  descg = 'It converts your replied photo to sticker.'
}
var imgmsg2 = ''
if (config.LANG === 'SI') {
  imgmsg2 = '*ස්ටිකරයකට mention දෙන්න !*'
} else {
  imgmsg2 = '*Reply to a sticker !*'
}
var descg2 = ''
if (config.LANG === 'SI') {
  descg2 = 'එය ඔබගේ mention දුන් sticker img බවට පරිවර්තනය කරයි.'
} else {
  descg2 = 'It converts your replied sticker to img.'
}
var desct1 = ''
if (config.LANG === 'SI') {
  desct1 = 'එය ලබා දී ඇති රූපය anime image එකක් බවට පරිවර්තනය කරයි.'
} else {
  desct1 = 'It convert given image to anime image.'
}
var desct2 = ''
if (config.LANG === 'SI') {
  desct2 = 'එය ලබා දී ඇති text එකක් ai image එකක් බවට පරිවර්තනය කරයි.'
} else {
  desct2 = 'It convert given text to ai image.'
}
var imgmsg3 = ''
if (config.LANG === 'SI') {
  imgmsg3 = '*උදාහරණයක්: .imagine woman,hair cut collor red,full body,bokeh*'
} else {
  imgmsg3 = '*Example: .imagine woman,hair cut collor red,full body,bokeh*'
}
var imgmsg1 = ''
if (config.LANG === 'SI') {
  imgmsg1 = '*වීඩියෝවක් mention දෙන්න !*'
} else {
  imgmsg1 = '*Reply to a video !*'
}
var descg3 = ''
if (config.LANG === 'SI') {
  descg3 = 'එය ඔබගේ mention දුන් වීඩියෝව audio බවට පරිවර්තනය කරයි.'
} else {
  descg3 = 'It converts your replied video to audio [mp3].'
}
var N_FOUND = ''
if (config.LANG === 'SI') {
  N_FOUND = '*මට මෙම වීඩියෝව audio බවට පරිවර්තනය කළ නොහැකි විය :(*'
} else {
  N_FOUND = '*I cant convert this video to audio :(*'
}
var imgmsg4 = ''
if (config.LANG === 'SI') {
  imgmsg4 = '*කරුණාකර මට text එකක් දෙන්න !*'
} else {
  imgmsg4 = '*Please give me a text !*'
}
var descg1 = ''
if (config.LANG === 'SI') {
  descg1 = 'එය text එකක් gif ස්ටිකරයක් බවට පරිවර්තනය කරයි'
} else {
  descg = 'it converts a text to gif sticker.'
}
var descdg1 = ''
if (config.LANG === 'SI') {
  descdg = 'එය text එකක් ස්ටිකරයක් බවට පරිවර්තනය කරයි'
} else {
  descdg = 'it converts a text to sticker.'
}
if (config.LANG === 'SI') {
  cant = 'මට මෙම රූපයේ පසුබිම ඉවත් කළ නොහැක.'
} else {
  cant = "I can't remove background on this image."
}
const _0x41bfd9 = {}
_0x41bfd9.pattern = 'vv'
_0x41bfd9.react = '\uD83D\uDE01'
_0x41bfd9.desc = 'To ViewOnceMessage'
_0x41bfd9.category = 'convert'
_0x41bfd9.use = '.vv'
_0x41bfd9.filename = __filename
cmd(
  _0x41bfd9,
  async (
    _0x304d4b,
    _0x28f7dd,
    _0x2b6d40,
    {
      from: _0x597f7e,
      prefix: _0x5c2b9b,
      l: _0x469999,
      quoted: _0x367e88,
      body: _0x147aaf,
      isCmd: _0x12abac,
      command: _0x1974ab,
      args: _0x14837f,
      q: _0x2f9e16,
      isGroup: _0x452a36,
      sender: _0x26b89a,
      senderNumber: _0x31b4d7,
      botNumber2: _0x110f9e,
      botNumber: _0x1b1efb,
      pushname: _0xfe1dac,
      isMe: _0x39e348,
      isOwner: _0xb6c7dd,
      groupMetadata: _0x331a08,
      groupName: _0x36ce25,
      participants: _0x11772b,
      groupAdmins: _0x48c05d,
      isBotAdmins: _0x388d2f,
      isAdmins: _0x1fe8f5,
      reply: _0xb30dc8,
    }
  ) => {
    try {
      const _0x2a48b0 =
        _0x28f7dd.msg.contextInfo.quotedMessage.viewOnceMessageV2
      if (_0x2a48b0) {
        if (_0x2a48b0.message.imageMessage) {
          console.log('Quot Entered')
          let _0x5ce837 = _0x2a48b0.message.imageMessage.caption,
            _0x378644 = await _0x304d4b.downloadAndSaveMediaMessage(
              _0x2a48b0.message.imageMessage
            )
          const _0x396b7c = { url: _0x378644 }
          const _0x26af23 = {}
          return (
            (_0x26af23.image = _0x396b7c),
            (_0x26af23.caption = _0x5ce837),
            _0x304d4b.sendMessage(_0x597f7e, _0x26af23)
          )
        }
        if (_0x2a48b0.message.videoMessage) {
          let _0x34162e = _0x2a48b0.message.videoMessage.caption,
            _0xa07f9b = await _0x304d4b.downloadAndSaveMediaMessage(
              _0x2a48b0.message.videoMessage
            )
          const _0x21cc19 = { url: _0xa07f9b }
          const _0x369f3d = {}
          return (
            (_0x369f3d.video = _0x21cc19),
            (_0x369f3d.caption = _0x34162e),
            _0x304d4b.sendMessage(_0x597f7e, _0x369f3d)
          )
        }
      }
      if (!_0x28f7dd.quoted) {
        return _0x28f7dd.reply('```Uh Please Reply A ViewOnce Message```')
      }
      if (_0x28f7dd.quoted.mtype === 'viewOnceMessage') {
        console.log('ViewOnce Entered')
        if (_0x28f7dd.quoted.message.imageMessage) {
          let _0x1255e9 = _0x28f7dd.quoted.message.imageMessage.caption,
            _0xb2135 = await _0x304d4b.downloadAndSaveMediaMessage(
              _0x28f7dd.quoted.message.imageMessage
            )
          const _0x497d22 = { url: _0xb2135 }
          const _0x59102f = {
            image: _0x497d22,
            caption: _0x1255e9,
          }
          _0x304d4b.sendMessage(_0x597f7e, _0x59102f)
        } else {
          if (_0x28f7dd.quoted.message.videoMessage) {
            let _0x2dd69b = _0x28f7dd.quoted.message.videoMessage.caption,
              _0x33683b = await _0x304d4b.downloadAndSaveMediaMessage(
                _0x28f7dd.quoted.message.videoMessage
              )
            const _0x275cbe = { url: _0x33683b }
            const _0x1af444 = {
              video: _0x275cbe,
              caption: _0x2dd69b,
            }
            _0x304d4b.sendMessage(_0x597f7e, _0x1af444)
          }
        }
      } else {
        return _0x28f7dd.reply('```This is Not A ViewOnce Message```')
      }
      const _0x5c93bd = {
        text: '\u2705',
        key: _0x28f7dd.key,
      }
      const _0x46be5a = { react: _0x5c93bd }
      await _0x304d4b.sendMessage(_0x597f7e, _0x46be5a)
    } catch (_0x4ee7c6) {
      _0xb30dc8('*Error !!*'), _0x469999(_0x4ee7c6)
    }
  }
)
const _0x2a8f35 = {}
_0x2a8f35.pattern = 'vcloner'
_0x2a8f35.react = '\uD83D\uDE01'
_0x2a8f35.desc = 'To clone a voice'
_0x2a8f35.category = 'convert'
_0x2a8f35.use = '.vcloner'
_0x2a8f35.filename = __filename
cmd(
  _0x2a8f35,
  async (
    _0x5e6ac2,
    _0x18bb0b,
    _0x64e7a3,
    {
      from: _0x589d7c,
      prefix: _0x11c398,
      l: _0x4a9000,
      quoted: _0x4d6e66,
      body: _0x5d5ac7,
      isCmd: _0x6af923,
      command: _0x7a90be,
      args: _0x271aaa,
      q: _0x2e5ef7,
      isGroup: _0x3ef487,
      sender: _0x5d397b,
      senderNumber: _0x4b3088,
      botNumber2: _0x42ac71,
      botNumber: _0x398984,
      pushname: _0x2c65fd,
      isMe: _0x2a07ef,
      isOwner: _0x368ac7,
      groupMetadata: _0x5d3476,
      groupName: _0x231296,
      participants: _0x138d0f,
      groupAdmins: _0x4945d0,
      isBotAdmins: _0x1e3cf7,
      isAdmins: _0x2f5132,
      reply: _0x54d11a,
    }
  ) => {
    try {
      if (!_0x2e5ef7) {
        return _0x54d11a('*Provide valid input text.*')
      }
      const _0x1230a4 = _0x2e5ef7.split('|')
      if (_0x1230a4.length !== 2) {
        return _0x54d11a(
          '*Invalid input format. Provide two audio URLs separated by "|".*'
        )
      }
      const _0x22df7e = _0x1230a4[0].trim(),
        _0x5808e8 = _0x1230a4[1].trim(),
        _0x2b7424 =
          'https://matrixcoder.vercel.app/api/VoiceCloner?init_audio=' +
          encodeURIComponent(_0x22df7e) +
          '&target_audio=' +
          encodeURIComponent(_0x5808e8) +
          '&key=' +
          vcapiKey,
        _0x58ebd8 = await fetch(_0x2b7424)
      if (!_0x58ebd8.ok) {
        return _0x54d11a(
          'Invalid response from the API. Status code: ' + _0x58ebd8.status
        )
      }
      const _0x4ca535 = await _0x58ebd8.json()
      console.log('API Response:', _0x4ca535)
      if (
        _0x4ca535.status === 'success' &&
        _0x4ca535.output &&
        _0x4ca535.output.length > 0
      ) {
        const _0x463f97 = _0x4ca535.output[0],
          _0x52c05e = { url: _0x463f97 }
        const _0x2467c8 = {
          audio: _0x52c05e,
          mimetype: 'audio/mp4',
          ptt: true,
          fileName: _0x2e5ef7 + '.mp3',
        }
        const _0x186623 = { quoted: _0x18bb0b }
        await _0x5e6ac2.sendMessage(_0x589d7c, _0x2467c8, _0x186623)
      } else {
        return _0x54d11a(
          'Invalid or unexpected API response. ' + JSON.stringify(_0x4ca535)
        )
      }
      const _0x240e9d = {
        text: '\u2705',
        key: _0x18bb0b.key,
      }
      const _0x4f4190 = { react: _0x240e9d }
      await _0x5e6ac2.sendMessage(_0x589d7c, _0x4f4190)
    } catch (_0x2d3dc6) {
      return _0x54d11a(
        'An error occurred while processing the request. ' + _0x2d3dc6.message
      )
      _0x4a9000(_0x2d3dc6)
    }
  }
)
const _0xd41fb5 = {}
_0xd41fb5.pattern = 'emojimix'
_0xd41fb5.react = '\uD83D\uDE01'
_0xd41fb5.desc = 'To convert 2 imoji to 1'
_0xd41fb5.category = 'convert'
_0xd41fb5.use = '.emojimix'
_0xd41fb5.filename = __filename
cmd(
  _0xd41fb5,
  async (
    _0x2a101b,
    _0x1b1df3,
    _0x2dd17d,
    {
      from: _0x93bb5d,
      prefix: _0x2b200e,
      l: _0xbfae10,
      quoted: _0x5cc668,
      body: _0x3c4b63,
      isCmd: _0x1aaa5e,
      command: _0x5def10,
      args: _0x5a4a55,
      q: _0x56ec1d,
      isGroup: _0x22d745,
      sender: _0x1614e7,
      senderNumber: _0x49b475,
      botNumber2: _0xca94fa,
      botNumber: _0xc364a6,
      pushname: _0x476c0e,
      isMe: _0x408427,
      isOwner: _0x264598,
      groupMetadata: _0x5dfbfc,
      groupName: _0x11f436,
      participants: _0x2f16a5,
      groupAdmins: _0x12991f,
      isBotAdmins: _0x4deb57,
      isAdmins: _0xd26085,
      reply: _0x2d65e1,
    }
  ) => {
    try {
      let [_0x18a38c, _0x129df0] = _0x56ec1d.split`+`
      if (!_0x18a38c) {
        throw (
          'Example: ' + (_0x2b200e + _0x5def10) + ' \uD83D\uDE05+\uD83E\uDD14'
        )
      }
      if (!_0x129df0) {
        throw (
          'Example: ' + (_0x2b200e + _0x5def10) + ' \uD83D\uDE05+\uD83E\uDD14'
        )
      }
      let _0x50b52e = await fetchJson(
        'https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=' +
          encodeURIComponent(_0x18a38c) +
          '_' +
          encodeURIComponent(_0x129df0)
      )
      for (let _0x300c99 of _0x50b52e.results) {
        let _0x5ef8af = await _0x2a101b.sendImageAsSticker(
          _0x93bb5d,
          _0x300c99.url,
          _0x1b1df3,
          {
            packname: global.packname,
            author: global.author,
            categories: _0x300c99.tags,
          }
        )
        await fs.unlinkSync(_0x5ef8af)
      }
      const _0x28c60b = {
        text: '\u2705',
        key: _0x1b1df3.key,
      }
      const _0x415977 = { react: _0x28c60b }
      await _0x2a101b.sendMessage(_0x93bb5d, _0x415977)
    } catch (_0x18865b) {
      _0x2d65e1('*Error !!*'), _0xbfae10(_0x18865b)
    }
  }
)
const _0x33a067 = {}
_0x33a067.pattern = 'trt'
_0x33a067.react = '\uD83D\uDD16'
_0x33a067.desc = 'To convert languages'
_0x33a067.category = 'convert'
_0x33a067.use = '.trt'
_0x33a067.filename = __filename
cmd(
  _0x33a067,
  async (
    _0x490fe8,
    _0x1c1a40,
    _0x1f677b,
    {
      from: _0x3fdcad,
      prefix: _0xee0309,
      l: _0x37fb45,
      quoted: _0x5ddc26,
      body: _0x103962,
      isCmd: _0x1fc62c,
      command: _0x59703c,
      args: _0x132e7a,
      q: _0x55638d,
      isGroup: _0x38863e,
      sender: _0x392720,
      senderNumber: _0x2afb9d,
      botNumber2: _0x52a42f,
      botNumber: _0x56e3f6,
      pushname: _0xf2d517,
      isMe: _0x45008e,
      isOwner: _0x343351,
      groupMetadata: _0x3cd70f,
      groupName: _0x1c6853,
      participants: _0x5afb48,
      groupAdmins: _0xcafb04,
      isBotAdmins: _0x48984f,
      isAdmins: _0x79eccd,
      reply: _0x2ed2f0,
    }
  ) => {
    try {
      if (!_0x55638d) {
        return mreply('Usage: .trt <language code> <text> or reply message')
      }
      if (_0x55638d && _0x1c1a40.quoted && _0x1c1a40.quoted.text) {
        let _0x4c4401 = _0x55638d.slice(0, 2)
        try {
          let _0x41cfeb = _0x1c1a40.quoted.q
          const _0x5a46d7 = { to: _0x4c4401 }
          let _0x3e18a3 = await translate('' + _0x41cfeb, _0x5a46d7)
          _0x2ed2f0(_0x3e18a3[0])
        } catch {
          return _0x2ed2f0(' Language code not supported.')
        }
      } else {
        if (_0x55638d) {
          let _0x58381e = _0x55638d.slice(0, 2),
            _0x34b295 = _0x55638d.substring(2).trim()
          const _0x475141 = { to: _0x58381e }
          let _0x1f2102 = await translate('' + _0x34b295, _0x475141)
          _0x2ed2f0(_0x1f2102[0])
        }
      }
      const _0x26f61b = {
        text: '\u2705',
        key: _0x1c1a40.key,
      }
      const _0x5e5f45 = { react: _0x26f61b }
      await _0x490fe8.sendMessage(_0x3fdcad, _0x5e5f45)
    } catch (_0x13811e) {
      _0x2ed2f0('*Error !!*'), _0x37fb45(_0x13811e)
    }
  }
)
const _0x5d2156 = {}
_0x5d2156.pattern = 'removebg'
_0x5d2156.react = '\uD83D\uDD2E'
_0x5d2156.alias = ['rmbg']
_0x5d2156.desc = descg
_0x5d2156.category = 'convert'
_0x5d2156.use = '.removebg <Reply to image>'
_0x5d2156.filename = __filename
cmd(
  _0x5d2156,
  async (
    _0xb32eb9,
    _0x27c44e,
    _0x57b9c0,
    {
      from: _0xf29219,
      l: _0x396388,
      quoted: _0x4817b8,
      body: _0x3b3b07,
      isCmd: _0x3bcb8e,
      command: _0x511c04,
      args: _0x57cff1,
      q: _0x3fce91,
      isGroup: _0x448093,
      sender: _0x4f51d0,
      senderNumber: _0x28f708,
      botNumber2: _0x2a0e9c,
      botNumber: _0x155f12,
      pushname: _0x2c9f31,
      isMe: _0x4dd373,
      isOwner: _0x5515a1,
      groupMetadata: _0x2db575,
      groupName: _0x3f84a3,
      participants: _0x55440a,
      groupAdmins: _0x2c6f60,
      isBotAdmins: _0x28022f,
      isAdmins: _0x9a9b24,
      reply: _0xd889cd,
    }
  ) => {
    try {
      const _0x10c101 = _0x57b9c0.quoted
          ? _0x57b9c0.quoted.type === 'viewOnceMessage'
          : false,
        _0xa57259 = _0x57b9c0.quoted
          ? _0x57b9c0.quoted.type === 'imageMessage' ||
            (_0x10c101 ? _0x57b9c0.quoted.msg.type === 'imageMessage' : false)
          : false,
        _0x389db4 = _0x57b9c0.quoted
          ? _0x57b9c0.quoted.type === 'videoMessage' ||
            (_0x10c101 ? _0x57b9c0.quoted.msg.type === 'videoMessage' : false)
          : false,
        _0x181406 = _0x57b9c0.quoted
          ? _0x57b9c0.quoted.type === 'stickerMessage'
          : false
      if (_0x57b9c0.type === 'imageMessage' || _0xa57259) {
        var _0x358e6b = getRandom(''),
          _0x545db0 = getRandom('')
        let _0x2f75af = _0xa57259
            ? await _0x57b9c0.quoted.download(_0x358e6b)
            : await _0x57b9c0.download(_0x358e6b),
          _0x131009 = await fileType.fromBuffer(_0x2f75af)
        await fs.promises.writeFile('./' + _0x131009.ext, _0x2f75af)
        var _0x2bae97 = new FormData()
        _0x2bae97.append(
          'image_file',
          fs.createReadStream('./' + _0x131009.ext)
        )
        _0x2bae97.append('size', 'auto')
        var _0x5d055a = await got.stream.post(
          'https://api.remove.bg/v1.0/removebg',
          {
            body: _0x2bae97,
            headers: { 'X-Api-Key': 'fLYByZwbPqdyqkdKK6zcBN9H' },
          }
        )
      }
      await pipeline(_0x5d055a, fs.createWriteStream(_0x545db0 + '.png'))
      let _0x27a3fa =
        '> \uD83C\uDFDE️ VAJIRA MD SUBDL \uD83C\uDFDE️\n\n\t> BACKGROUND REMOVER \uD83C\uDFDE️'
      const _0xbba681 = []
      for (var _0x1f01e7 = 0; _0x1f01e7 < 1; _0x1f01e7++) {
        _0xbba681.push({
          header: '',
          title: 'IMAGE',
          description: 'Download image type',
          id: '.rbji ' + _0x545db0 + '.png',
        })
        _0xbba681.push({
          header: '',
          title: 'STICKER',
          description: 'Download sticker type',
          id: '.rebgs ' + _0x545db0 + '.png',
        })
        _0xbba681.push({
          header: '',
          title: 'DOCUMENT',
          description: 'Download document type',
          id: '.rbgd ' + _0x545db0 + '.png',
        })
      }
      const _0x533d11 = {
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL,
      }
      let _0x162607 = [
        {
          name: 'cta_url',
          buttonParamsJson: JSON.stringify(_0x533d11),
        },
        {
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Select news types',
            sections: [
              {
                title: 'Please select a category',
                highlight_label: 'VAJIRA-MD',
                rows: _0xbba681,
              },
            ],
          }),
        },
      ]
      const _0x47a936 = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: _0x27a3fa,
      }
      let _0x3cc22c = _0x47a936
      return await _0xb32eb9.sendButtonMessage(
        _0xf29219,
        _0x162607,
        _0x57b9c0,
        _0x3cc22c
      )
    } catch (_0x540a15) {
      _0xd889cd('*Error !!*')
      console.log(_0x540a15)
    }
  }
)
const _0x49066b = {}
_0x49066b.pattern = 'rbgi'
_0x49066b.dontAddCommandList = true
_0x49066b.filename = __filename
cmd(
  _0x49066b,
  async (
    _0x53e237,
    _0x2f1992,
    _0x59aecd,
    {
      from: _0x12142f,
      l: _0x32bfbe,
      quoted: _0x2cc1a4,
      body: _0x50f4f6,
      isCmd: _0x5e340b,
      command: _0x59c6a2,
      args: _0x209c08,
      q: _0x4f23a8,
      isGroup: _0xa5d8fc,
      sender: _0x32dfbf,
      senderNumber: _0x2b0d88,
      botNumber2: _0x15704c,
      botNumber: _0x104f98,
      pushname: _0x565932,
      isMe: _0x3bd152,
      isOwner: _0x5f3872,
      groupMetadata: _0x4ae33f,
      groupName: _0x2c58b6,
      participants: _0x36bc94,
      groupAdmins: _0x40c37f,
      isBotAdmins: _0xad34b4,
      isAdmins: _0x475622,
      reply: _0x41edd1,
    }
  ) => {
    try {
      const _0x3e1dbd = {
        text: '\uD83D\uDCE5',
        key: _0x2f1992.key,
      }
      const _0x41f46b = { react: _0x3e1dbd }
      await _0x53e237.sendMessage(_0x12142f, _0x41f46b)
      const _0x2cee3f = { quoted: _0x2f1992 }
      await _0x53e237.sendMessage(
        _0x12142f,
        {
          image: fs.readFileSync(_0x4f23a8),
          caption: config.FOOTER,
        },
        _0x2cee3f
      )
      const _0x584a16 = {
        text: '\u2714',
        key: _0x2f1992.key,
      }
      const _0x5ac297 = { react: _0x584a16 }
      await _0x53e237.sendMessage(_0x12142f, _0x5ac297)
    } catch (_0x123e80) {
      _0x41edd1('*ERROR !!*'), _0x32bfbe(_0x123e80)
    }
  }
)
const _0x30f964 = {}
_0x30f964.pattern = 'rebgs'
_0x30f964.dontAddCommandList = true
_0x30f964.filename = __filename
cmd(
  _0x30f964,
  async (
    _0x48c7be,
    _0x585824,
    _0x172e82,
    {
      from: _0x2340ef,
      l: _0x1b7988,
      quoted: _0x1ab2e6,
      body: _0x2399cf,
      isCmd: _0x1f5f09,
      command: _0x528345,
      args: _0x454eaa,
      q: _0x5c8ff8,
      isGroup: _0x436b31,
      sender: _0x21fae6,
      senderNumber: _0x3292c3,
      botNumber2: _0x5298f6,
      botNumber: _0x41d716,
      pushname: _0x22ff24,
      isMe: _0x3c9d63,
      isOwner: _0x3a5c91,
      groupMetadata: _0x172e69,
      groupName: _0x4eb6bd,
      participants: _0x5a56b8,
      groupAdmins: _0x1d5923,
      isBotAdmins: _0x59765f,
      isAdmins: _0x400270,
      reply: _0x25ee4e,
    }
  ) => {
    try {
      const _0x1f6777 = {
        text: '\uD83D\uDCE5',
        key: _0x585824.key,
      }
      const _0x55f7cf = { react: _0x1f6777 }
      await _0x48c7be.sendMessage(_0x2340ef, _0x55f7cf)
      let _0x856641 = new Sticker(_0x5c8ff8, {
        pack: _0x22ff24,
        author: '',
        type: _0x5c8ff8.includes('--crop' || '-c')
          ? StickerTypes.CROPPED
          : StickerTypes.FULL,
        categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
        id: '12345',
        quality: 75,
        background: 'transparent',
      })
      const _0x2e51a2 = await _0x856641.toBuffer(),
        _0x3dd1e5 = { sticker: _0x2e51a2 }
      const _0x36659d = { quoted: _0x585824 }
      await _0x48c7be.sendMessage(_0x2340ef, _0x3dd1e5, _0x36659d)
      const _0x571c4c = {
        text: '\u2714',
        key: _0x585824.key,
      }
      const _0x257e7f = { react: _0x571c4c }
      await _0x48c7be.sendMessage(_0x2340ef, _0x257e7f)
    } catch (_0xc9fef3) {
      _0x25ee4e('*ERROR !!*'), _0x1b7988(_0xc9fef3)
    }
  }
)
const _0x3425d1 = {}
_0x3425d1.pattern = 'rbgd'
_0x3425d1.dontAddCommandList = true
_0x3425d1.filename = __filename
cmd(
  _0x3425d1,
  async (
    _0x1b07d4,
    _0x504b69,
    _0x83e0af,
    {
      from: _0x4f3436,
      l: _0x2fcd16,
      quoted: _0x44224b,
      body: _0x4ea1e1,
      isCmd: _0x2aa75b,
      command: _0x11c21e,
      args: _0xc9f4f7,
      q: _0x201148,
      isGroup: _0x48fbfb,
      sender: _0x419ca4,
      senderNumber: _0x3c19ec,
      botNumber2: _0x30d26f,
      botNumber: _0x13b5ce,
      pushname: _0x2346fd,
      isMe: _0x7f26a8,
      isOwner: _0x424bcd,
      groupMetadata: _0x1340ce,
      groupName: _0x4354b1,
      participants: _0x52bbe9,
      groupAdmins: _0x21319f,
      isBotAdmins: _0xd72571,
      isAdmins: _0x2621ac,
      reply: _0xc96acc,
    }
  ) => {
    try {
      const _0x1ca3fb = {
        text: '\uD83D\uDCE5',
        key: _0x504b69.key,
      }
      const _0xb5da73 = { react: _0x1ca3fb }
      await _0x1b07d4.sendMessage(_0x4f3436, _0xb5da73)
      const _0x41a00d = { quoted: _0x504b69 }
      await _0x1b07d4.sendMessage(
        _0x4f3436,
        {
          document: fs.readFileSync(_0x201148),
          mimetype: 'image/x-png',
          fileName: 'Removebg.png',
          caption: config.FOOTER,
        },
        _0x41a00d
      )
      const _0x185001 = {
        text: '\u2714',
        key: _0x504b69.key,
      }
      const _0xe6c1cb = { react: _0x185001 }
      await _0x1b07d4.sendMessage(_0x4f3436, _0xe6c1cb)
    } catch (_0x4e66b7) {
      _0xc96acc('*ERROR !!*')
      _0x2fcd16(_0x4e66b7)
    }
  }
)
const _0x1982f4 = {}
_0x1982f4.pattern = 'attp'
_0x1982f4.react = '\u2728'
_0x1982f4.alias = ['texttogif']
_0x1982f4.desc = descg1
_0x1982f4.category = 'convert'
_0x1982f4.use = '.attp HI'
_0x1982f4.filename = __filename
cmd(
  _0x1982f4,
  async (
    _0x1a060e,
    _0x2666bc,
    _0x45694f,
    {
      from: _0x3f5e9f,
      l: _0x20604d,
      quoted: _0x179e46,
      body: _0x355289,
      isCmd: _0x29127d,
      command: _0x4b1719,
      args: _0x798c23,
      q: _0x491e76,
      isGroup: _0x12d939,
      sender: _0x7ff4bf,
      senderNumber: _0x1ce3e0,
      botNumber2: _0x24cd82,
      botNumber: _0xeed11a,
      pushname: _0x1c4e1f,
      isMe: _0x52d36d,
      isOwner: _0x197f5a,
      groupMetadata: _0x3f14a9,
      groupName: _0xfc900b,
      participants: _0x30e762,
      groupAdmins: _0x4d116d,
      isBotAdmins: _0x11bfb5,
      isAdmins: _0x21e739,
      reply: _0x2a3ccf,
    }
  ) => {
    try {
      if (!_0x491e76) {
        return await _0x2a3ccf(imgmsg4)
      }
      let _0x3bf8df = await getBuffer(
        'https://vihangayt.me/maker/text2gif?q=' + _0x491e76
      )
      const _0x15de27 = { quoted: _0x2666bc }
      await _0x1a060e.sendMessage(
        _0x3f5e9f,
        { sticker: await videoToWebp(_0x3bf8df) },
        _0x15de27
      )
    } catch (_0x173b0a) {
      _0x2a3ccf('*Error !!*'), _0x20604d(_0x173b0a)
    }
  }
)
const _0x4eb187 = {}
_0x4eb187.pattern = 'ttp'
_0x4eb187.react = '\u2728'
_0x4eb187.alias = ['ttp', 'texttoimg']
_0x4eb187.desc = descdg1
_0x4eb187.category = 'convert'
_0x4eb187.use = '.ttp HI'
_0x4eb187.filename = __filename
cmd(
  _0x4eb187,
  async (
    _0x54179e,
    _0x3d54ff,
    _0xa6ac1e,
    {
      from: _0x36e8d4,
      l: _0x2c6443,
      quoted: _0x22631f,
      body: _0x9a031f,
      isCmd: _0x260dd6,
      command: _0x1c44e0,
      args: _0x43dce3,
      q: _0x5467c7,
      isGroup: _0x58e58a,
      sender: _0x2bade8,
      senderNumber: _0x1871a7,
      botNumber2: _0x640853,
      botNumber: _0x294213,
      pushname: _0x278c54,
      isMe: _0x47fc6f,
      isOwner: _0x2501ae,
      groupMetadata: _0x2cbe73,
      groupName: _0x564695,
      participants: _0x5698fb,
      groupAdmins: _0xc21f3c,
      isBotAdmins: _0x103e85,
      isAdmins: _0x1e9159,
      reply: _0x131395,
    }
  ) => {
    try {
      if (!_0x5467c7) {
        return await _0x131395(imgmsg4)
      }
      let _0x499ad1 = await getBuffer(
          'https://vihangayt.me/maker/text2img?q=' + _0x5467c7
        ),
        _0x32949a = new Sticker(_0x499ad1, {
          pack: _0x278c54,
          author: '',
          type: _0x5467c7.includes('--crop' || '-c')
            ? StickerTypes.CROPPED
            : StickerTypes.FULL,
          categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
          id: '12345',
          quality: 75,
          background: 'transparent',
        })
      const _0x21a731 = await _0x32949a.toBuffer(),
        _0x2acb82 = { sticker: _0x21a731 }
      const _0x24c4a4 = {}
      return (
        (_0x24c4a4.quoted = _0x3d54ff),
        _0x54179e.sendMessage(_0x36e8d4, _0x2acb82, _0x24c4a4)
      )
    } catch (_0x310aff) {
      _0x131395('*Error !!*')
      _0x2c6443(_0x310aff)
    }
  }
)
const _0x542ac9 = {}
_0x542ac9.pattern = 'toptt'
_0x542ac9.react = '\uD83D\uDD0A'
_0x542ac9.alias = ['toaudio']
_0x542ac9.desc = descg3
_0x542ac9.category = 'convert'
_0x542ac9.use = '.toptt <Reply to video>'
_0x542ac9.filename = __filename
cmd(
  _0x542ac9,
  async (
    _0x4261b7,
    _0x581288,
    _0x304528,
    {
      from: _0x288510,
      l: _0x77de7e,
      quoted: _0x508ab5,
      body: _0x3b6b2,
      isCmd: _0x43ddd9,
      command: _0x210277,
      args: _0x522ea0,
      q: _0xa9f033,
      isGroup: _0x2f8be3,
      sender: _0xa5d71a,
      senderNumber: _0xaa1792,
      botNumber2: _0x508785,
      botNumber: _0x415fcd,
      pushname: _0x3d86d0,
      isMe: _0x435465,
      isOwner: _0x17a701,
      groupMetadata: _0x50af02,
      groupName: _0x536a8b,
      participants: _0x55b442,
      groupAdmins: _0x3f1279,
      isBotAdmins: _0x1ef8da,
      isAdmins: _0x521582,
      reply: _0x167d3f,
    }
  ) => {
    try {
      let _0x4c1ad2 = _0x304528.quoted
        ? _0x304528.quoted.type === 'videoMessage'
        : _0x304528
        ? _0x304528.type === 'videoMessage'
        : false
      if (!_0x4c1ad2) {
        return await _0x167d3f(imgmsg1)
      }
      let _0x57653a = _0x304528.quoted
          ? await _0x304528.quoted.download()
          : await _0x304528.download(),
        _0x2c869e = await toPTT(_0x57653a, 'mp4')
      const _0x51953b = {
        audio: _0x2c869e.options,
        mimetype: 'audio/mpeg',
      }
      let _0x1c078c = await _0x4261b7.sendMessage(_0x304528.chat, _0x51953b, {
        quoted: _0x304528,
      })
      const _0x488ab0 = {
        text: '\uD83C\uDFBC',
        key: _0x1c078c.key,
      }
      const _0x1d9e83 = { react: _0x488ab0 }
      await _0x4261b7.sendMessage(_0x288510, _0x1d9e83)
    } catch (_0x27feca) {
      _0x167d3f('*Error !!*')
      _0x77de7e(_0x27feca)
    }
  }
)
const _0x4cb5c7 = {}
_0x4cb5c7.pattern = 'imagine'
_0x4cb5c7.alias = ['texttoimage', 'toimage', 'aiimage']
_0x4cb5c7.react = '\uD83E\uDD16'
_0x4cb5c7.desc = desct2
_0x4cb5c7.category = 'search'
_0x4cb5c7.use = '.imagine  woman,hair cut collor red,full body,bokeh'
_0x4cb5c7.filename = __filename
cmd(
  _0x4cb5c7,
  async (
    _0x1b4c3c,
    _0x261720,
    _0x18cb51,
    {
      from: _0x2b32fd,
      l: _0x4656a0,
      prefix: _0x399f0c,
      quoted: _0x2a8447,
      body: _0x2abce1,
      isCmd: _0x38cd8b,
      command: _0x3fee7a,
      args: _0x42e033,
      q: _0x118a35,
      isGroup: _0x3590ea,
      sender: _0x368696,
      senderNumber: _0x1a43af,
      botNumber2: _0x885d8b,
      botNumber: _0x4a2093,
      pushname: _0x1b6741,
      isMe: _0x1b2c75,
      isOwner: _0x1751ab,
      groupMetadata: _0x50f8da,
      groupName: _0x1dacad,
      participants: _0x563c42,
      groupAdmins: _0x23c41b,
      isBotAdmins: _0x18fb59,
      isAdmins: _0xac99b9,
      reply: _0x556519,
    }
  ) => {
    try {
      if (!_0x118a35) {
        return _0x556519(imgmsg3)
      }
      let _0x427644 = await fetchJson(
          'https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json'
        ),
        _0x3c496a = _0x427644.users,
        _0xfab2d7 = _0x3c496a[Math.floor(Math.random() * _0x3c496a.length)]
      const _0x2f8546 = await fetchJson(
          _0x427644.xz +
            'api/text-to-image?text=' +
            encodeURIComponent(_0x118a35) +
            '&apikey=' +
            _0xfab2d7
        ),
        _0x1b88b1 = {}
      return (
        (_0x1b88b1.quoted = _0x261720),
        await _0x1b4c3c.sendMessage(
          _0x2b32fd,
          {
            image: await getBuffer(_0x2f8546.imageUrl),
            caption: '\n*' + _0x2f8546.promptEn + '*\n',
          },
          _0x1b88b1
        )
      )
    } catch (_0x24fcf1) {
      _0x556519(cantf)
      _0x4656a0(_0x24fcf1)
    }
  }
)
const _0x4c6170 = {}
_0x4c6170.pattern = 'img2url'
_0x4c6170.react = '\uD83D\uDD17'
_0x4c6170.alias = ['tourl', 'imgurl', 'telegraph', 'imgtourl']
_0x4c6170.desc = desct
_0x4c6170.category = 'convert'
_0x4c6170.use = '.img2url <reply image>'
_0x4c6170.filename = __filename
cmd(
  _0x4c6170,
  async (
    _0x46454a,
    _0x346be9,
    _0xbaa971,
    {
      from: _0x142091,
      l: _0x1e9451,
      prefix: _0x41ce6a,
      quoted: _0x4b6e64,
      body: _0xe7e980,
      isCmd: _0x51b75a,
      command: _0x250bfa,
      args: _0x1d58e3,
      q: _0x52a419,
      isGroup: _0x359566,
      sender: _0x456e4c,
      senderNumber: _0x42bbf8,
      botNumber2: _0x36f215,
      botNumber: _0xf2cf87,
      pushname: _0x260818,
      isMe: _0x2b97b7,
      isOwner: _0x344972,
      groupMetadata: _0x10ab38,
      groupName: _0x1277cb,
      participants: _0x46b8bb,
      groupAdmins: _0x2327eb,
      isBotAdmins: _0x23b151,
      isAdmins: _0x6945de,
      reply: _0x29b3af,
    }
  ) => {
    try {
      const _0x4bad6c = _0xbaa971.quoted
          ? _0xbaa971.quoted.type === 'viewOnceMessage'
          : false,
        _0x1b36a2 = _0xbaa971.quoted
          ? _0xbaa971.quoted.type === 'imageMessage' ||
            (_0x4bad6c ? _0xbaa971.quoted.msg.type === 'imageMessage' : false)
          : false
      if (_0xbaa971.type === 'imageMessage' || _0x1b36a2) {
        const _0x4d336f = require('file-type')
        var _0x2bda82 = getRandom('')
        let _0x56bbb3 = _0x1b36a2
            ? await _0xbaa971.quoted.download(_0x2bda82)
            : await _0xbaa971.download(_0x2bda82),
          _0x2e26cf = await _0x4d336f.fromBuffer(_0x56bbb3)
        await fs.promises.writeFile('./' + _0x2e26cf.ext, _0x56bbb3)
        img2url('./' + _0x2e26cf.ext).then(async (_0x1ad3f1) => {
          await _0x29b3af('\n' + _0x1ad3f1 + '\n')
        })
      } else {
        return _0x29b3af(imgmsg)
      }
    } catch (_0x422b65) {
      _0x29b3af(cantf)
      _0x1e9451(_0x422b65)
    }
  }
)
const _0x170f1d = {}
_0x170f1d.pattern = 'enhance'
_0x170f1d.react = '\u2197️'
_0x170f1d.alias = ['imgenhance', 'quality', 'qualityimage', 'tohd']
_0x170f1d.desc = desct
_0x170f1d.category = 'convert'
_0x170f1d.use = '.enhance <reply low quality image>'
_0x170f1d.filename = __filename
cmd(
  _0x170f1d,
  async (
    _0x38ecb0,
    _0x3c4b18,
    _0x4e6e20,
    {
      from: _0xfe9cdd,
      l: _0xc30976,
      prefix: _0x55d69e,
      quoted: _0x5c924e,
      body: _0x6c46ce,
      isCmd: _0x519e20,
      command: _0x3eca93,
      args: _0x1fa8fb,
      q: _0x484522,
      isGroup: _0x2e3b06,
      sender: _0x29c4da,
      senderNumber: _0x31d091,
      botNumber2: _0x28338b,
      botNumber: _0x127b7f,
      pushname: _0x2f3d9d,
      isMe: _0x5b2c5d,
      isOwner: _0x563b56,
      groupMetadata: _0x506d7c,
      groupName: _0x33ce2f,
      participants: _0x2d94f6,
      groupAdmins: _0x58643a,
      isBotAdmins: _0x3f02c7,
      isAdmins: _0x414ec9,
      reply: _0x153ffa,
    }
  ) => {
    try {
      const _0x28d7ce = _0x4e6e20.quoted
          ? _0x4e6e20.quoted.type === 'viewOnceMessage'
          : false,
        _0x2b181b = _0x4e6e20.quoted
          ? _0x4e6e20.quoted.type === 'imageMessage' ||
            (_0x28d7ce ? _0x4e6e20.quoted.msg.type === 'imageMessage' : false)
          : false
      if (_0x4e6e20.type === 'imageMessage' || _0x2b181b) {
        const _0x5d1aee = require('file-type')
        var _0x14e986 = getRandom('')
        let _0x1d34ca = _0x2b181b
            ? await _0x4e6e20.quoted.download(_0x14e986)
            : await _0x4e6e20.download(_0x14e986),
          _0x41b8ff = await _0x5d1aee.fromBuffer(_0x1d34ca)
        await fs.promises.writeFile('./' + _0x41b8ff.ext, _0x1d34ca)
        img2url('./' + _0x41b8ff.ext).then(async (_0x2a09b8) => {
          const _0x43fb09 = { quoted: _0x3c4b18 }
          await _0x38ecb0.sendMessage(
            _0xfe9cdd,
            {
              image: await getBuffer(
                'https://vihangayt.me/tools/enhance?url=' + _0x2a09b8
              ),
              caption: config.FOOTER,
            },
            _0x43fb09
          )
        })
      } else {
        return _0x153ffa(imgmsg)
      }
    } catch (_0x45b7cc) {
      _0x153ffa(cantf)
      _0xc30976(_0x45b7cc)
    }
  }
)
const _0x40780c = {}
_0x40780c.pattern = 'colorize'
_0x40780c.react = '\uD83C\uDFA8'
_0x40780c.alias = ['colorizer', 'tocolour', 'colourize']
_0x40780c.desc = desct
_0x40780c.category = 'convert'
_0x40780c.use = '.colorize <reply black & white image>'
_0x40780c.filename = __filename
cmd(
  _0x40780c,
  async (
    _0x471213,
    _0x3eeb0e,
    _0x4cf4b7,
    {
      from: _0x5d6c4d,
      l: _0x166d10,
      prefix: _0x334a6b,
      quoted: _0xacc1e1,
      body: _0x36821d,
      isCmd: _0x2bc14d,
      command: _0x512aaa,
      args: _0x263eb8,
      q: _0x5a4eb8,
      isGroup: _0x566fee,
      sender: _0x1a17fd,
      senderNumber: _0x2e78a2,
      botNumber2: _0x3d4dd6,
      botNumber: _0x1d06fa,
      pushname: _0x1b64a8,
      isMe: _0xd48845,
      isOwner: _0x12648c,
      groupMetadata: _0x1a65f9,
      groupName: _0x1c27a4,
      participants: _0x58cd29,
      groupAdmins: _0x50935c,
      isBotAdmins: _0x9d4938,
      isAdmins: _0x3d2d9c,
      reply: _0x12314a,
    }
  ) => {
    try {
      const _0x574d49 = _0x4cf4b7.quoted
          ? _0x4cf4b7.quoted.type === 'viewOnceMessage'
          : false,
        _0x290585 = _0x4cf4b7.quoted
          ? _0x4cf4b7.quoted.type === 'imageMessage' ||
            (_0x574d49 ? _0x4cf4b7.quoted.msg.type === 'imageMessage' : false)
          : false
      if (_0x4cf4b7.type === 'imageMessage' || _0x290585) {
        const _0x548e8f = require('file-type')
        var _0x465e8a = getRandom('')
        let _0x564d6d = _0x290585
            ? await _0x4cf4b7.quoted.download(_0x465e8a)
            : await _0x4cf4b7.download(_0x465e8a),
          _0x32f4c7 = await _0x548e8f.fromBuffer(_0x564d6d)
        await fs.promises.writeFile('./' + _0x32f4c7.ext, _0x564d6d)
        img2url('./' + _0x32f4c7.ext).then(async (_0x5eeeb7) => {
          try {
            const _0x107867 = { quoted: _0x3eeb0e }
            await _0x471213.sendMessage(
              _0x5d6c4d,
              {
                image: await getBuffer(
                  'https://vihangayt.me/tools/colorize?url=' + _0x5eeeb7
                ),
                caption: config.FOOTER,
              },
              _0x107867
            )
          } catch (_0xcd16e1) {
            let _0x473d49 = await fetchJson(
                'https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json'
              ),
              _0x5b50a2 = _0x473d49.users,
              _0x33c917 =
                _0x5b50a2[Math.floor(Math.random() * _0x5b50a2.length)]
            const _0xce2f0b = { quoted: _0x3eeb0e }
            await _0x471213.sendMessage(
              _0x5d6c4d,
              {
                image: {
                  url:
                    _0x473d49.xz +
                    'api/colorizer?url=' +
                    _0x5eeeb7 +
                    '&apikey=' +
                    _0x33c917,
                },
                caption: config.FOOTER,
              },
              _0xce2f0b
            )
          }
        })
      } else {
        return _0x12314a(imgmsg)
      }
    } catch (_0xe23ffb) {
      _0x12314a(cantf)
      _0x166d10(_0xe23ffb)
    }
  }
)
const _0x18abe2 = {}
_0x18abe2.pattern = 'toanime'
_0x18abe2.react = '\uD83C\uDFEE'
_0x18abe2.alias = ['imgtoanime', 'animeimg']
_0x18abe2.desc = desct1
_0x18abe2.category = 'convert'
_0x18abe2.use = '.toanime <reply image>'
_0x18abe2.filename = __filename
cmd(
  _0x18abe2,
  async (
    _0x28cafe,
    _0x1ab74e,
    _0x35956a,
    {
      from: _0x17752e,
      l: _0x27785d,
      prefix: _0x3bb3a7,
      quoted: _0x13151e,
      body: _0x458638,
      isCmd: _0x1918b4,
      command: _0x2a20a6,
      args: _0x4c4b37,
      q: _0x457383,
      isGroup: _0x5d2a7b,
      sender: _0x161dd5,
      senderNumber: _0xb6964e,
      botNumber2: _0x168621,
      botNumber: _0x41511f,
      pushname: _0x304b44,
      isMe: _0x20e709,
      isOwner: _0x59ce12,
      groupMetadata: _0x4dbb5b,
      groupName: _0x3edb2b,
      participants: _0x46e836,
      groupAdmins: _0x4d0c46,
      isBotAdmins: _0x292e31,
      isAdmins: _0xe716b3,
      reply: _0x4bdd06,
    }
  ) => {
    try {
      const _0x563263 = _0x35956a.quoted
          ? _0x35956a.quoted.type === 'viewOnceMessage'
          : false,
        _0x10e9ad = _0x35956a.quoted
          ? _0x35956a.quoted.type === 'imageMessage' ||
            (_0x563263 ? _0x35956a.quoted.msg.type === 'imageMessage' : false)
          : false
      if (_0x35956a.type === 'imageMessage' || _0x10e9ad) {
        const _0x179f02 = require('file-type')
        var _0x576827 = getRandom('')
        let _0x4b4ce1 = _0x10e9ad
            ? await _0x35956a.quoted.download(_0x576827)
            : await _0x35956a.download(_0x576827),
          _0x28cc29 = await _0x179f02.fromBuffer(_0x4b4ce1)
        await fs.promises.writeFile('./' + _0x28cc29.ext, _0x4b4ce1)
        img2url('./' + _0x28cc29.ext).then(async (_0x2917bd) => {
          try {
            const _0x4b702f = { quoted: _0x1ab74e }
            await _0x28cafe.sendMessage(
              _0x17752e,
              {
                image: await getBuffer(
                  'https://vihangayt.me/tools/toanime?url=' + _0x2917bd
                ),
                caption: config.FOOTER,
              },
              _0x4b702f
            )
          } catch (_0x289cd2) {
            let _0xbe861b = await fetchJson(
                'https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json'
              ),
              _0x121cdd = _0xbe861b.users,
              _0x38d52a =
                _0x121cdd[Math.floor(Math.random() * _0x121cdd.length)]
            const _0x9abc86 = { quoted: _0x1ab74e }
            await _0x28cafe.sendMessage(
              _0x17752e,
              {
                image: {
                  url:
                    _0xbe861b.xz +
                    'api/toanime?url=' +
                    _0x2917bd +
                    '&apikey=' +
                    _0x38d52a,
                },
                caption: config.FOOTER,
              },
              _0x9abc86
            )
          }
        })
      } else {
        return _0x4bdd06(imgmsg)
      }
    } catch (_0x168b2f) {
      _0x4bdd06(cantf)
      _0x27785d(_0x168b2f)
    }
  }
)
const _0x53866b = {}
_0x53866b.pattern = 'sticker'
_0x53866b.react = '\uD83D\uDD2E'
_0x53866b.alias = ['s', 'stic']
_0x53866b.desc = descg
_0x53866b.category = 'convert'
_0x53866b.use = '.sticker <Reply to image>'
_0x53866b.filename = __filename
cmd(
  _0x53866b,
  async (
    _0x37db1d,
    _0x81a286,
    _0x3cace1,
    {
      from: _0x125f86,
      l: _0x146497,
      quoted: _0x3f2b44,
      body: _0x5bdeb0,
      isCmd: _0x50ea1f,
      command: _0x5e4c1c,
      args: _0x3abbd4,
      q: _0x929260,
      isGroup: _0x2ff883,
      sender: _0x91d2f6,
      senderNumber: _0x1ffa31,
      botNumber2: _0x24052d,
      botNumber: _0x3c2f35,
      pushname: _0x5be499,
      isMe: _0x128493,
      isOwner: _0x34460e,
      groupMetadata: _0x54f5ac,
      groupName: _0x23077d,
      participants: _0x5a1174,
      groupAdmins: _0x2d70c7,
      isBotAdmins: _0x4f68fb,
      isAdmins: _0x4b2559,
      reply: _0x190422,
    }
  ) => {
    try {
      const _0x2f0a84 = _0x3cace1.quoted
          ? _0x3cace1.quoted.type === 'viewOnceMessage'
          : false,
        _0x5bb59c = _0x3cace1.quoted
          ? _0x3cace1.quoted.type === 'imageMessage' ||
            (_0x2f0a84 ? _0x3cace1.quoted.msg.type === 'imageMessage' : false)
          : false,
        _0x195d5d = _0x3cace1.quoted
          ? _0x3cace1.quoted.type === 'videoMessage' ||
            (_0x2f0a84 ? _0x3cace1.quoted.msg.type === 'videoMessage' : false)
          : false,
        _0x5cde53 = _0x3cace1.quoted
          ? _0x3cace1.quoted.type === 'stickerMessage'
          : false
      if (_0x3cace1.type === 'imageMessage' || _0x5bb59c) {
        var _0x224943 = getRandom('')
        _0x5bb59c
          ? await _0x3cace1.quoted.download(_0x224943)
          : await _0x3cace1.download(_0x224943)
        let _0x18adc8 = new Sticker(_0x224943 + '.jpg', {
          pack: _0x5be499,
          author: '',
          type: _0x929260.includes('--crop' || '-c')
            ? StickerTypes.CROPPED
            : StickerTypes.FULL,
          categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
          id: '12345',
          quality: 75,
          background: 'transparent',
        })
        const _0x566512 = await _0x18adc8.toBuffer(),
          _0x316fcf = { sticker: _0x566512 }
        const _0x1f13e9 = {}
        return (
          (_0x1f13e9.quoted = _0x81a286),
          _0x37db1d.sendMessage(_0x125f86, _0x316fcf, _0x1f13e9)
        )
      } else {
        if (_0x5cde53) {
          var _0x24717f = getRandom('')
          await _0x3cace1.quoted.download(_0x24717f)
          let _0x2c776d = new Sticker(_0x24717f + '.webp', {
            pack: _0x5be499,
            author: '',
            type: _0x929260.includes('--crop' || '-c')
              ? StickerTypes.CROPPED
              : StickerTypes.FULL,
            categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
            id: '12345',
            quality: 75,
            background: 'transparent',
          })
          const _0x7a8f10 = await _0x2c776d.toBuffer(),
            _0x17d52f = { sticker: _0x7a8f10 }
          const _0x3655ca = {}
          return (
            (_0x3655ca.quoted = _0x81a286),
            _0x37db1d.sendMessage(_0x125f86, _0x17d52f, _0x3655ca)
          )
        } else {
          return await _0x190422(imgmsg)
        }
      }
    } catch (_0x2bd714) {
      _0x190422('*Error !!*')
      _0x146497(_0x2bd714)
    }
  }
)
const _0xc53563 = {}
_0xc53563.pattern = 'toimg'
_0xc53563.react = '\uD83D\uDD2E'
_0xc53563.alias = ['s', 'stic']
_0xc53563.desc = descg2
_0xc53563.category = 'convert'
_0xc53563.use = '.sticker <Reply to image>'
_0xc53563.filename = __filename
cmd(
  _0xc53563,
  async (
    _0x1de54f,
    _0x4000db,
    _0x564d75,
    {
      from: _0x4d570d,
      l: _0x3c8427,
      quoted: _0x5e04c9,
      body: _0x2f109e,
      isCmd: _0x201955,
      command: _0x15f432,
      args: _0x402dbc,
      q: _0x2d1512,
      isGroup: _0x5f3794,
      sender: _0x553e93,
      senderNumber: _0x1da686,
      botNumber2: _0x27537d,
      botNumber: _0x5a8f37,
      pushname: _0x1e607a,
      isMe: _0x57d929,
      isOwner: _0x5548af,
      groupMetadata: _0x11192d,
      groupName: _0x337636,
      participants: _0x4bc6b2,
      groupAdmins: _0x589b12,
      isBotAdmins: _0x3541e1,
      isAdmins: _0x4b77fc,
      reply: _0x2c7dea,
    }
  ) => {
    try {
      const _0x1f91c0 = _0x564d75.quoted
          ? _0x564d75.quoted.type === 'viewOnceMessage'
          : false,
        _0x372991 = _0x564d75.quoted
          ? _0x564d75.quoted.type === 'imageMessage' ||
            (_0x1f91c0 ? _0x564d75.quoted.msg.type === 'imageMessage' : false)
          : false,
        _0x2454ff = _0x564d75.quoted
          ? _0x564d75.quoted.type === 'videoMessage' ||
            (_0x1f91c0 ? _0x564d75.quoted.msg.type === 'videoMessage' : false)
          : false,
        _0x45ecf1 = _0x564d75.quoted
          ? _0x564d75.quoted.type === 'stickerMessage'
          : false
      if (_0x45ecf1) {
        var _0x29bb5d = getRandom('')
        let _0x52a7ba = _0x45ecf1
            ? await _0x564d75.quoted.download(_0x29bb5d)
            : await _0x564d75.download(_0x29bb5d),
          _0xa2ffdf = await fileType.fromBuffer(_0x52a7ba)
        await fs.promises.writeFile('./' + _0xa2ffdf.ext, _0x52a7ba)
        const _0x5877c5 = { quoted: _0x4000db }
        await _0x1de54f.sendMessage(
          _0x4d570d,
          {
            image: fs.readFileSync('./' + _0xa2ffdf.ext),
            caption: config.FOOTER,
          },
          _0x5877c5
        )
      } else {
        return await _0x2c7dea(imgmsg2)
      }
    } catch (_0x1e37bc) {
      _0x2c7dea('*Error !!*')
      _0x3c8427(_0x1e37bc)
    }
  }
)
if (config.COMMAND_TYPE === 'button') {
  const _0x187082 = {
    pattern: 'ss',
    react: '\uD83D\uDDC3️',
    desc: 'Url to screenshot convert',
    category: 'convert',
    use: '.ss',
    filename: __filename,
  }
  cmd(
    _0x187082,
    async (
      _0x56a4ec,
      _0x4dfeef,
      _0xf68122,
      { from: _0x25968d, q: _0xc5f1b7, pushname: _0x1977f6, reply: _0x571981 }
    ) => {
      try {
        const _0x58f86b =
            '`\u2726 \uD835\uDDE6\uD835\uDDD6\uD835\uDDE5\uD835\uDDD8\uD835\uDDD8\uD835\uDDE1\uD835\uDDE6\uD835\uDDDB\uD835\uDDE2\uD835\uDDE7 \uD835\uDDE7\uD835\uDDD4\uD835\uDDDE\uD835\uDDD8\uD835\uDDE5 \u2726`\n    ',
          _0x1947a0 = [],
          _0x51f503 = new Map()
        for (let _0xa6718e = 0; _0xa6718e < 1; _0xa6718e++) {
          const _0x1486b6 = commands[_0xa6718e]
          if (
            !_0x1486b6.dontAddCommandList &&
            _0x1486b6.pattern !== undefined
          ) {
            const _0x3acd60 = _0x1486b6.category.toUpperCase()
            !_0x51f503.has(_0x3acd60) &&
              (_0x1947a0.push(_0x3acd60), _0x51f503.set(_0x3acd60, []))
            _0x51f503.get(_0x3acd60).push(_0x1486b6.pattern)
          }
        }
        const _0x47d4dd = []
        for (const _0x1a01e0 of _0x1947a0) {
          _0x47d4dd.push({
            header: 'Select you want type',
            title: 'Desktop type',
            description: '',
            id: '.desktop ' + _0xc5f1b7,
          })
          _0x47d4dd.push({
            header: '',
            title: 'Phone type',
            description: '',
            id: '.ssphone ' + _0xc5f1b7,
          })
          _0x47d4dd.push({
            header: '',
            title: 'Tab type',
            description: '',
            id: '.sstab ' + _0xc5f1b7,
          })
        }
        const _0xc6df2a = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL,
        }
        let _0x59d945 = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify(_0xc6df2a),
          },
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Select screenshot types',
              sections: [
                {
                  title: 'Please select a category',
                  highlight_label: 'VAJIRA-MD',
                  rows: _0x47d4dd,
                },
              ],
            }),
          },
        ]
        const _0x1a94f3 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x58f86b,
        }
        let _0x4999ef = _0x1a94f3
        return await _0x56a4ec.sendButtonMessage(
          _0x25968d,
          _0x59d945,
          _0xf68122,
          _0x4999ef
        )
      } catch (_0x16c063) {
        _0x571981('*Error !!*')
        console.log(_0x16c063)
      }
    }
  )
  const _0x33e86b = {
    pattern: 'desktop',
    use: '.screenshot',
    react: '\uD83C\uDFA5',
    desc: 'Convert url to screenshot',
    category: '',
    filename: __filename,
  }
  cmd(
    _0x33e86b,
    async (
      _0xd4eb5c,
      _0x5139d6,
      _0x48c021,
      { from: _0x43f912, q: _0x3a86a1, reply: _0x52e461 }
    ) => {
      try {
        if (!_0x3a86a1) {
          return await _0x52e461('*Please enter a query or a url!*')
        }
        let _0x3ecf11 = getRandom(''),
          _0x5e1787 = await sswebA(_0x3a86a1, true, 'desktop')
        fs.writeFileSync(_0x3ecf11 + '.jpg', _0x5e1787)
        let _0x5ebf74 =
            '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *\uD83D\uDCF8 SCREENSHOT GETTER*',
          _0x52bd20 = [
            {
              name: 'quick_reply',
              buttonParamsJson: JSON.stringify({
                display_text: 'Image type',
                id: '.ssi ' + _0x3ecf11 + '.jpg',
              }),
            },
            {
              name: 'quick_reply',
              buttonParamsJson: JSON.stringify({
                display_text: 'Document type',
                id: '.ssd ' + _0x3ecf11 + '.jpg',
              }),
            },
          ]
        const _0x517d86 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x5ebf74,
        }
        let _0x212d7b = _0x517d86
        return await _0xd4eb5c.sendButtonMessage(
          _0x43f912,
          _0x52bd20,
          _0x5139d6,
          _0x212d7b
        )
      } catch (_0x364737) {
        console.log(_0x364737)
        _0x52e461('*Error !!*')
      }
    }
  )
  const _0x4a176e = {
    pattern: 'ssphone',
    use: '.screenshot',
    react: '\uD83C\uDFA5',
    desc: 'Convert url to screenshot',
    category: '',
    filename: __filename,
  }
  cmd(
    _0x4a176e,
    async (
      _0x1daf5c,
      _0x2a713,
      _0x2c54a8,
      { from: _0x29cfa7, q: _0x375bfa, reply: _0x18d1cb }
    ) => {
      try {
        if (!_0x375bfa) {
          return await _0x18d1cb('*Please enter a query or a url!*')
        }
        let _0x4a5597 = getRandom(''),
          _0x4afc71 = await sswebA(_0x375bfa, true, 'phone')
        fs.writeFileSync(_0x4a5597 + '.jpg', _0x4afc71)
        let _0x502acf =
            '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *\uD83D\uDCF8 SCREENSHOT GETTER*',
          _0x1a9719 = [
            {
              name: 'quick_reply',
              buttonParamsJson: JSON.stringify({
                display_text: 'Image type',
                id: '.ssi ' + _0x4a5597 + '.jpg',
              }),
            },
            {
              name: 'quick_reply',
              buttonParamsJson: JSON.stringify({
                display_text: 'Document type',
                id: '.ssd ' + _0x4a5597 + '.jpg',
              }),
            },
          ]
        const _0x40e306 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x502acf,
        }
        let _0x4d32c5 = _0x40e306
        return await _0x1daf5c.sendButtonMessage(
          _0x29cfa7,
          _0x1a9719,
          _0x2a713,
          _0x4d32c5
        )
      } catch (_0x2109b6) {
        console.log(_0x2109b6)
        _0x18d1cb('*Error !!*')
      }
    }
  )
  const _0x5c9157 = {
    pattern: 'sstab',
    use: '.screenshot',
    react: '\uD83C\uDFA5',
    desc: 'Convert url to screenshot',
    category: '',
    filename: __filename,
  }
  cmd(
    _0x5c9157,
    async (
      _0x3f983a,
      _0x2fa053,
      _0x3d7839,
      { from: _0x41515a, q: _0x560938, reply: _0x3cc8f4 }
    ) => {
      try {
        if (!_0x560938) {
          return await _0x3cc8f4('*Please enter a query or a url!*')
        }
        let _0x60d356 = getRandom(''),
          _0x5f2b8f = await sswebA(_0x560938, true, 'tablet')
        fs.writeFileSync(_0x60d356 + '.jpg', _0x5f2b8f)
        let _0x4fbf26 =
            '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *\uD83D\uDCF8 SCREENSHOT GETTER*',
          _0x26eec9 = [
            {
              name: 'quick_reply',
              buttonParamsJson: JSON.stringify({
                display_text: 'Image type',
                id: '.ssi ' + _0x60d356 + '.jpg',
              }),
            },
            {
              name: 'quick_reply',
              buttonParamsJson: JSON.stringify({
                display_text: 'Document type',
                id: '.ssd ' + _0x60d356 + '.jpg',
              }),
            },
          ]
        const _0x5d376d = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x4fbf26,
        }
        let _0x36c4d0 = _0x5d376d
        return await _0x3f983a.sendButtonMessage(
          _0x41515a,
          _0x26eec9,
          _0x2fa053,
          _0x36c4d0
        )
      } catch (_0x28d662) {
        console.log(_0x28d662)
        _0x3cc8f4('*Error !!*')
      }
    }
  )
  const _0x2ca090 = {
    pattern: 'ssi',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x2ca090,
    async (
      _0x6db49a,
      _0x1a0357,
      _0x41235e,
      {
        from: _0x390024,
        l: _0x3f8612,
        quoted: _0x11825c,
        body: _0x376bd2,
        isCmd: _0x4450c0,
        command: _0x369e79,
        args: _0x377e4d,
        q: _0x2fe045,
        isGroup: _0x5899e3,
        sender: _0x1634e8,
        senderNumber: _0x50a111,
        botNumber2: _0x425e93,
        botNumber: _0x5b2178,
        pushname: _0x16068a,
        isMe: _0xb5bb23,
        isOwner: _0x376e0e,
        groupMetadata: _0x56813b,
        groupName: _0x2cda59,
        participants: _0x581d53,
        groupAdmins: _0x8a8d68,
        isBotAdmins: _0x417f9e,
        isAdmins: _0x1225ca,
        reply: _0x3a5a14,
      }
    ) => {
      try {
        const _0x3555ad = {
          text: '\uD83D\uDCE5',
          key: _0x1a0357.key,
        }
        const _0xeb6912 = { react: _0x3555ad }
        await _0x6db49a.sendMessage(_0x390024, _0xeb6912)
        const _0x5e9aa4 = { quoted: _0x1a0357 }
        await _0x6db49a.sendMessage(
          _0x390024,
          {
            image: fs.readFileSync(_0x2fe045),
            caption: config.FOOTER,
          },
          _0x5e9aa4
        )
        const _0x2d0b69 = {
          text: '\u2714',
          key: _0x1a0357.key,
        }
        const _0x25d643 = { react: _0x2d0b69 }
        await _0x6db49a.sendMessage(_0x390024, _0x25d643)
      } catch (_0x551ed4) {
        _0x3a5a14('*ERROR !!*')
        _0x3f8612(_0x551ed4)
      }
    }
  )
  const _0x597828 = {
    pattern: 'ssd',
    dontAddCommandList: true,
    filename: __filename,
  }
  cmd(
    _0x597828,
    async (
      _0x526a98,
      _0xb014ea,
      _0x34903f,
      {
        from: _0xb295a,
        l: _0x593d4a,
        quoted: _0x5ace7b,
        body: _0x1d8ddb,
        isCmd: _0x48b740,
        command: _0x3d089b,
        args: _0xb26d94,
        q: _0x5c19d8,
        isGroup: _0x3caefe,
        sender: _0x3bc6dc,
        senderNumber: _0x41439e,
        botNumber2: _0x15ad8e,
        botNumber: _0x4d5ab7,
        pushname: _0x6ed70e,
        isMe: _0x3116b3,
        isOwner: _0xc72442,
        groupMetadata: _0x3605ee,
        groupName: _0x39201d,
        participants: _0x15f64e,
        groupAdmins: _0x21f138,
        isBotAdmins: _0x383b15,
        isAdmins: _0x35bd9f,
        reply: _0xe7b94d,
      }
    ) => {
      try {
        const _0x154bb7 = {
          text: '\uD83D\uDCE5',
          key: _0xb014ea.key,
        }
        const _0x7fc1a = { react: _0x154bb7 }
        await _0x526a98.sendMessage(_0xb295a, _0x7fc1a)
        const _0x14356e = { quoted: _0xb014ea }
        await _0x526a98.sendMessage(
          _0xb295a,
          {
            document: fs.readFileSync(_0x5c19d8),
            mimetype: 'image/jpeg',
            fileName: 'screenshot.jpg',
            caption: config.FOOTER,
          },
          _0x14356e
        )
        const _0x255abe = {
          text: '\u2714',
          key: _0xb014ea.key,
        }
        const _0x2e844a = { react: _0x255abe }
        await _0x526a98.sendMessage(_0xb295a, _0x2e844a)
      } catch (_0x523885) {
        _0xe7b94d('*ERROR !!*')
        _0x593d4a(_0x523885)
      }
    }
  )
}
