const config = require('../settings'),
  { cmd, commands } = require('../lib/command'),
  fonts = require('../lib/font.js'),
  availableStyles = Object.keys(fonts)
var os = require('os')
const fs = require('fs'),
  {
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
  fg = require('api-dylux'),
  cheerio = require('cheerio'),
  axios = require('axios'),
  vm = require('vm'),
  jsobfus = require('javascript-obfuscator'),
  _buruan = JSON.parse(fs.readFileSync('./lib/vajira_rathnayaka.json'))
function formatDate(_0x391a7f) {}
async function obfus(_0x393ec3) {
  return new Promise((_0x12ac81, _0x2a4e2b) => {
    try {
      const _0x4d35c6 = {
        compact: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1,
      }
      const _0x3f4439 = jsobfus.obfuscate(_0x393ec3, _0x4d35c6),
        _0x2c26fc = {
          status: 200,
          author: 'VAJIRA',
          result: _0x3f4439.getObfuscatedCode(),
        }
      _0x12ac81(_0x2c26fc)
    } catch (_0xf8ff2a) {
      _0x2a4e2b(_0xf8ff2a)
    }
  })
}
function convertToFontStyle(_0x5b633e, _0x593ccc) {
  let _0xb0e2f2 = ''
  if (fonts[_0x593ccc]) {
    for (const _0x2b87d6 of _0x5b633e) {
      _0xb0e2f2 += fonts[_0x593ccc][_0x2b87d6] || _0x2b87d6
    }
  } else {
    _0xb0e2f2 = _0x5b633e
  }
  return _0xb0e2f2
}
var desct = ''
if (config.LANG === 'SI') {
  desct = 'එය ඔබ ලබා දුන් දේ සඳහා chatgpt AI මත සොයයි.'
} else {
  desct = 'It search on chatgpt ai for what you provided.'
}
var needus = ''
if (config.LANG === 'SI') {
  needus = '*කරුණාකර මට chatgpt AI හි සෙවීමට වචන ලබා දෙන්න !*'
} else {
  needus = '*Please give me words to search on chatgpt ai !*'
}
var cantf = ''
if (config.LANG === 'SI') {
  cantf = '*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*'
} else {
  cantf = '*Server is busy. Try again later.!*'
}
const _0xa873f2 = {}
_0xa873f2.pattern = 'saveno'
_0xa873f2.react = '\uD83D\uDC7E'
_0xa873f2.desc = 'To save acc number'
_0xa873f2.category = 'other'
_0xa873f2.use = '.saveno'
_0xa873f2.filename = __filename
cmd(
  _0xa873f2,
  async (
    _0x5acd36,
    _0x278cc7,
    _0x5eb58d,
    {
      from: _0x4bc9c2,
      l: _0xa8551b,
      prefix: _0x17de30,
      quoted: _0x31cca3,
      body: _0x228f38,
      isCmd: _0x260bca,
      command: _0x5bbd13,
      args: _0x34e714,
      q: _0x5a76aa,
      isGroup: _0x2baa54,
      sender: _0x37f828,
      senderNumber: _0x37f6ba,
      botNumber2: _0x487208,
      botNumber: _0x474a62,
      pushname: _0x2183db,
      isMe: _0x447be9,
      isOwner: _0x1a0e01,
      groupMetadata: _0x40a427,
      groupName: _0x211d1a,
      participants: _0x541bda,
      groupAdmins: _0x5070d9,
      isBotAdmins: _0x4e1b74,
      isAdmins: _0x3d1815,
      reply: _0x6fad05,
    }
  ) => {
    try {
      let _0x538dcc = ''
      if (_0x538dcc === '') {
        const _0x117b17 = _0x5a76aa.trim()
        _0x538dcc = _0x117b17
        await _0x278cc7.reply('Account number recorded: "' + _0x117b17 + '"')
      } else {
        await _0x278cc7.reply('A message is already recorded.')
      }
      const _0x51dba9 = {
        text: '\u2705',
        key: _0x278cc7.key,
      }
      const _0x280ac8 = { react: _0x51dba9 }
      await _0x5acd36.sendMessage(_0x4bc9c2, _0x280ac8)
    } catch (_0x4c6635) {
      _0xa8551b(_0x4c6635)
    }
  }
)
const _0x2e1812 = {}
_0x2e1812.pattern = 'delno'
_0x2e1812.react = '\uD83D\uDC7E'
_0x2e1812.desc = 'To delete acc number'
_0x2e1812.category = 'other'
_0x2e1812.use = '.delno'
_0x2e1812.filename = __filename
cmd(
  _0x2e1812,
  async (
    _0x4b2834,
    _0x14b206,
    _0x5c917e,
    {
      from: _0x3c215c,
      l: _0x4b00d1,
      prefix: _0x4b9a11,
      quoted: _0x4c4d07,
      body: _0x129088,
      isCmd: _0x4b687d,
      command: _0x5055c7,
      args: _0x108cfa,
      q: _0x24bf7e,
      isGroup: _0x38fa4c,
      sender: _0x123db8,
      senderNumber: _0x2fe7fd,
      botNumber2: _0x1a6615,
      botNumber: _0x3e55da,
      pushname: _0x41f94a,
      isMe: _0x20d2bc,
      isOwner: _0x1c96d2,
      groupMetadata: _0xd2172e,
      groupName: _0x32f075,
      participants: _0x2b0b90,
      groupAdmins: _0x22a620,
      isBotAdmins: _0x212675,
      isAdmins: _0x3b35a3,
      reply: _0x5f10d4,
    }
  ) => {
    try {
      recordedMessage = ''
      await _0x14b206.reply('Account number deleted.')
      const _0x18ee9c = {
        text: '\u2705',
        key: _0x14b206.key,
      }
      const _0x187260 = { react: _0x18ee9c }
      await _0x4b2834.sendMessage(_0x3c215c, _0x187260)
    } catch (_0x471fb9) {
      _0x4b00d1(_0x471fb9)
    }
  }
)
const _0x4e3763 = {}
_0x4e3763.on = 'text'
cmd(
  _0x4e3763,
  async (
    _0x436b34,
    _0x51c870,
    _0xbd92df,
    {
      from: _0x53a113,
      l: _0x24651b,
      prefix: _0x331f23,
      quoted: _0x4cbb5e,
      body: _0x47da61,
      isCmd: _0x5d7f1d,
      command: _0x54a488,
      args: _0x1df98d,
      q: _0x4198ab,
      isGroup: _0x717418,
      sender: _0x2fc80d,
      senderNumber: _0x42aed4,
      botNumber2: _0x160968,
      botNumber: _0x4bdd52,
      pushname: _0x193569,
      isMe: _0x1bda85,
      isOwner: _0xbcb3d,
      groupMetadata: _0x387252,
      groupName: _0x380faf,
      participants: _0x9c72d5,
      groupAdmins: _0x41e68f,
      isBotAdmins: _0x4398a7,
      isAdmins: _0x25d8b4,
      reply: _0x48b544,
    }
  ) => {
    ;/(\baza\b|\bsend aza\b|\baccount number\b)/i.test(_0x4198ab) &&
      recordedMessage &&
      (await _0x51c870.reply(recordedMessage))
  }
)
const _0x49b861 = {}
_0x49b861.pattern = 'hack'
_0x49b861.react = '\u2620️'
_0x49b861.desc = 'To hack'
_0x49b861.category = 'other'
_0x49b861.use = '.hack'
_0x49b861.filename = __filename
cmd(
  _0x49b861,
  async (
    _0x14068f,
    _0x880a71,
    _0x28c307,
    {
      from: _0x49c25c,
      l: _0x17e1b2,
      prefix: _0x416c82,
      quoted: _0x348f37,
      body: _0x3e69fc,
      isCmd: _0x1a90dc,
      command: _0x21d13e,
      args: _0x30f3d7,
      q: _0x5bf322,
      isGroup: _0x23a38a,
      sender: _0x41a753,
      senderNumber: _0x51254f,
      botNumber2: _0x5e3444,
      botNumber: _0x115b32,
      pushname: _0x1eb0d6,
      isMe: _0xc34392,
      isOwner: _0x5231a2,
      groupMetadata: _0x103fcf,
      groupName: _0x2c9173,
      participants: _0x4ea591,
      groupAdmins: _0x55b003,
      isBotAdmins: _0x20269d,
      isAdmins: _0x144dd6,
      reply: _0x1ac07d,
    }
  ) => {
    try {
      _0x880a71.reply('```Injecting malware```')
      await sleep(1000)
      _0x880a71.reply('```transfer into device \n 0%```')
      await sleep(1000)
      _0x880a71.reply('```transfer photos \n \u2588 10%```')
      await sleep(1000)
      _0x880a71.reply('```transfer successful \n \u2588 \u2588 20%```')
      await sleep(1000)
      _0x880a71.reply('```transfer videos \n \u2588 \u2588 \u2588 30%```')
      await sleep(1000)
      _0x880a71.reply(
        '```transfer successful \n \u2588 \u2588 \u2588 \u2588 40%```'
      )
      await sleep(1000)
      _0x880a71.reply(
        '```transfering audio \n \u2588 \u2588 \u2588 \u2588 \u2588 50%```'
      )
      await sleep(1000)
      _0x880a71.reply(
        '```transfer successful \n \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 60%```'
      )
      await sleep(1000)
      _0x880a71.reply(
        '```transfering hidden files \n \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 70%```'
      )
      await sleep(1000)
      _0x880a71.reply(
        '```transfer successful \n \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 80%```'
      )
      await sleep(1000)
      _0x880a71.reply(
        '```transfering whatsapp chat \n \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 90%```'
      )
      await sleep(1000)
      _0x880a71.reply(
        '```transfer successful \n \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 100%```'
      )
      await sleep(1000)
      _0x880a71.reply(
        '```System hyjacking on process.. \n Conecting to Server ```'
      )
      await sleep(1000)
      _0x880a71.reply(
        '```Divice successfully connected... \n Riciving data...```'
      )
      await sleep(1000)
      _0x880a71.reply(
        '```Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...```'
      )
      await sleep(1000)
      _0x880a71.reply('``` HACKING COMPLETED BY VAJIRA ```')
      await sleep(1000)
      _0x880a71.reply('``` SENDING PHONE DOCUMENTS FOR VAJIRA...```')
      await sleep(1000)
      _0x880a71.reply(
        '``` SUCCESSFULLY SENT DATA AND Connection disconnected by vajira```'
      )
      await sleep(1000)
      return _0x1ac07d('*ALL FILES TRANSFERRED TO VAJIRA*')
      const _0x572e58 = {}
      _0x572e58.text = '\u2705'
      _0x572e58.key = _0x880a71.key
      const _0xc1e757 = {}
      _0xc1e757.react = _0x572e58
      await _0x14068f.sendMessage(_0x49c25c, _0xc1e757)
    } catch (_0x327412) {
      _0x17e1b2(_0x327412)
    }
  }
)
const _0x165b00 = {}
_0x165b00.pattern = 'fontchange'
_0x165b00.react = '\uD83D\uDC7E'
_0x165b00.desc = 'To change font of text'
_0x165b00.category = 'other'
_0x165b00.use = '.fontchange'
_0x165b00.filename = __filename
cmd(
  _0x165b00,
  async (
    _0xe6886c,
    _0x49cb43,
    _0xc2cdbd,
    {
      from: _0x5b03a1,
      l: _0x5eae49,
      prefix: _0x56213e,
      quoted: _0x4f8c39,
      body: _0x42ea72,
      isCmd: _0x1201ac,
      command: _0x4d3684,
      args: _0x51b5bb,
      q: _0x50cbeb,
      isGroup: _0x50d4ba,
      sender: _0x53e484,
      senderNumber: _0x359109,
      botNumber2: _0x250441,
      botNumber: _0x566384,
      pushname: _0x2b5233,
      isMe: _0x543052,
      isOwner: _0x577350,
      groupMetadata: _0x5a1b4d,
      groupName: _0x568839,
      participants: _0x1d2d67,
      groupAdmins: _0x1ac9ee,
      isBotAdmins: _0x1937a2,
      isAdmins: _0x29d5f1,
      reply: _0x58afea,
    }
  ) => {
    try {
      if (_0x51b5bb.length === 0) {
        const _0x142608 = availableStyles
          .map((_0x342cc1) => {
            const _0x534180 = convertToFontStyle('vajira md', _0x342cc1)
            return _0x342cc1 + ': ' + _0x534180
          })
          .join('\n')
        _0x58afea(
          'Usage:\n' +
            _0x56213e +
            'fontchange <style> <text>\nAvailable font styles with previews:\n' +
            _0x142608
        )
      } else {
        const _0xa9b610 = parseInt(_0x51b5bb[0])
        if (isNaN(_0xa9b610) || _0xa9b610 < 0 || _0xa9b610 > 34) {
          _0x58afea(
            'Style number should be between 0 and 34. Please choose a valid style.'
          )
        } else {
          const _0x17b562 = _0x51b5bb.slice(1).join(' '),
            _0x3b8812 = convertToFontStyle(_0x17b562, _0xa9b610)
          _0x58afea('' + _0x3b8812)
        }
      }
      const _0x17a8e7 = {
        text: '\u2705',
        key: _0x49cb43.key,
      }
      const _0x314242 = { react: _0x17a8e7 }
      await _0xe6886c.sendMessage(_0x5b03a1, _0x314242)
    } catch (_0x57e2f7) {
      _0x5eae49(_0x57e2f7)
    }
  }
)
const _0x5be3bb = {}
_0x5be3bb.pattern = 'nowa'
_0x5be3bb.react = '\uD83D\uDC7E'
_0x5be3bb.desc = 'To see same type whatsapp numbers'
_0x5be3bb.category = 'other'
_0x5be3bb.use = '.nowa'
_0x5be3bb.filename = __filename
cmd(
  _0x5be3bb,
  async (
    _0x2e3da5,
    _0x1a3eed,
    _0x351883,
    {
      from: _0x2dac0e,
      l: _0x4e3417,
      prefix: _0x2de443,
      quoted: _0x1e5ade,
      body: _0x5c8ccc,
      isCmd: _0x7b43ce,
      command: _0x34e920,
      args: _0xfb582f,
      q: _0x51e053,
      isGroup: _0x474d16,
      sender: _0x31d7ed,
      senderNumber: _0xf53024,
      botNumber2: _0x251d3d,
      botNumber: _0x20e084,
      pushname: _0x12515f,
      isMe: _0x159623,
      isOwner: _0x6ae16d,
      groupMetadata: _0x159d19,
      groupName: _0x1f95ad,
      participants: _0x4cdd05,
      groupAdmins: _0x5e60be,
      isBotAdmins: _0x50e2ee,
      isAdmins: _0x46025f,
      reply: _0xaf95ab,
    }
  ) => {
    try {
      if (!_0x51e053) {
        throw 'Give a number to search'
      }
      if (!_0x51e053.match(/x/g)) {
        throw '*Example: ' + (_0x2de443 + _0x34e920) + ' 919142294xxx'
      }
      let _0xf04da7 = _0x51e053.match(/x/g).length,
        _0x164095 = Math.pow(10, _0xf04da7),
        _0x4027a3 = []
      for (let _0x473539 = 0; _0x473539 < _0x164095; _0x473539++) {
        let _0x55bf57 = [..._0x473539.toString().padStart(_0xf04da7, '0')],
          _0x4ab506 =
            _0x51e053.replace(/x/g, () => _0x55bf57.shift()) + '@s.whatsapp.net'
        if (
          await _0x2e3da5
            .onWhatsApp(_0x4ab506)
            .then((_0x57337a) => (_0x57337a[0] || {}).exists)
        ) {
          let _0x586c79 = await _0x2e3da5
            .fetchStatus(_0x4ab506)
            .catch((_0x50c089) => {})
          const _0x2d49d0 = {
            exists: true,
            jid: _0x4ab506,
            ..._0x586c79,
          }
          _0x4027a3.push(_0x2d49d0)
        } else {
          const _0x567ce9 = {
            exists: false,
            jid: _0x4ab506,
          }
          _0x4027a3.push(_0x567ce9)
        }
      }
      let _0x1077c3 =
        'Registered\n\n' +
        _0x4027a3
          .filter((_0x2b2f2b) => _0x2b2f2b.exists)
          .map(
            (_0x594347) =>
              '\u2022 Link: wa.me/' +
              _0x594347.jid.split('@')[0] +
              '\n*\u2022 Bio:* ' +
              (_0x594347.status || 'description') +
              '\n*\u2022 set on:* ' +
              formatDate(_0x594347.setAt)
          )
          .join('\n\n') +
        '\n\n*Not registered*\n\n' +
        _0x4027a3
          .filter((_0x54f5f5) => !_0x54f5f5.exists)
          .map((_0x31c070) => _0x31c070.jid.split('@')[0])
          .join('\n')
      _0xaf95ab(_0x1077c3)
      const _0x48f7cc = {
        text: '\u2705',
        key: _0x1a3eed.key,
      }
      const _0x578854 = { react: _0x48f7cc }
      await _0x2e3da5.sendMessage(_0x2dac0e, _0x578854)
    } catch (_0x17a477) {
      _0x4e3417(_0x17a477)
    }
  }
)
const _0x4a6738 = {}
_0x4a6738.pattern = 'obfus'
_0x4a6738.react = '\uD83D\uDC7E'
_0x4a6738.desc = 'To encrypt js code'
_0x4a6738.category = 'other'
_0x4a6738.use = '.obfus'
_0x4a6738.filename = __filename
cmd(
  _0x4a6738,
  async (
    _0x54c933,
    _0x32fc5b,
    _0x10cda3,
    {
      from: _0x57283a,
      l: _0x12cc1a,
      prefix: _0x4b7bd4,
      quoted: _0x42a718,
      body: _0x3855b7,
      isCmd: _0x2509f8,
      command: _0x2cd9da,
      args: _0x3eb470,
      q: _0x28dd76,
      isGroup: _0x5d2402,
      sender: _0x28aa35,
      senderNumber: _0x5e674e,
      botNumber2: _0x5cac0c,
      botNumber: _0x47d663,
      pushname: _0x245335,
      isMe: _0x13bb28,
      isOwner: _0x453d04,
      groupMetadata: _0x10102b,
      groupName: _0x3bacf8,
      participants: _0x5f13d5,
      groupAdmins: _0x411ebc,
      isBotAdmins: _0x28d6b5,
      isAdmins: _0x20aaf7,
      reply: _0x34fae0,
    }
  ) => {
    try {
      if (!_0x28dd76) {
        return _0x34fae0(
          'Example ' +
            (_0x4b7bd4 + _0x2cd9da) +
            " const vajiramd = require('baileys')"
        )
      }
      let _0x3d6cab = await obfus(_0x28dd76)
      _0x34fae0('Success\n' + _0x3d6cab.result)
      const _0x5185a4 = {
        text: '\u2705',
        key: _0x32fc5b.key,
      }
      const _0x57e252 = { react: _0x5185a4 }
      await _0x54c933.sendMessage(_0x57283a, _0x57e252)
    } catch (_0xe17dd3) {
      _0x12cc1a(_0xe17dd3)
    }
  }
)
const _0x1181bd = {}
_0x1181bd.pattern = 'leaderboard'
_0x1181bd.react = '\uD83D\uDC7E'
_0x1181bd.desc = 'To see info of leaderboard'
_0x1181bd.category = 'other'
_0x1181bd.use = '.leaderboard'
_0x1181bd.filename = __filename
cmd(
  _0x1181bd,
  async (
    _0x2d92cc,
    _0x243645,
    _0x461cee,
    {
      from: _0x4b6cfb,
      l: _0x2dc178,
      prefix: _0x466ec9,
      quoted: _0x488c87,
      body: _0x326d32,
      isCmd: _0x595b95,
      command: _0x546cd3,
      args: _0x26898b,
      q: _0x2a342f,
      isGroup: _0x38456a,
      sender: _0xe07e00,
      senderNumber: _0x140e74,
      botNumber2: _0x1904a0,
      botNumber: _0x5cf947,
      pushname: _0x348c55,
      isMe: _0x538fb6,
      isOwner: _0x21ec37,
      groupMetadata: _0x2607a5,
      groupName: _0x42ee8e,
      participants: _0xf9932b,
      groupAdmins: _0x47c081,
      isBotAdmins: _0x1a640a,
      isAdmins: _0x4d4ea8,
      reply: _0x1988aa,
    }
  ) => {
    try {
      let _0x882d80 = '\u300C *LEADERBOARD* \u300D\n\n'
      for (let _0x36840c of _buruan) {
        _0x882d80 += '\u27B8 *ID :* ' + _0x36840c.id + '\n'
        _0x882d80 += '*\uD83D\uDC1FFish* : ' + _0x36840c.ikan + '\n'
        _0x882d80 += '*\uD83D\uDC14Chicken* : ' + _0x36840c.ayam + '\n'
        _0x882d80 += '*\uD83D\uDC07Rabbit* : ' + _0x36840c.kelinci + '\n'
        _0x882d80 += '*\uD83D\uDC11Sheep* : ' + _0x36840c.domba + '\n'
        _0x882d80 += '*\uD83D\uDC04Cow* : ' + _0x36840c.sapi + '\n'
        _0x882d80 += '*\uD83D\uDC18Elephant* : ' + _0x36840c.gajah + '\n\n'
      }
      const _0x94afbe = {
        text: '\u2705',
        key: _0x243645.key,
      }
      const _0x36cc4e = { react: _0x94afbe }
      await _0x2d92cc.sendMessage(_0x4b6cfb, _0x36cc4e)
    } catch (_0x20a16f) {
      p, _0x1988aa(cantf), _0x2dc178(_0x20a16f)
    }
  }
)
const _0x1f4e73 = {}
_0x1f4e73.pattern = 'chatgpt'
_0x1f4e73.alias = ['ai', 'gpt', 'openai', 'zerotwo', 'chat']
_0x1f4e73.react = '\uD83D\uDC7E'
_0x1f4e73.desc = desct
_0x1f4e73.category = 'other'
_0x1f4e73.use = '.chatgpt ha'
_0x1f4e73.filename = __filename
cmd(
  _0x1f4e73,
  async (
    _0xd78ed5,
    _0x5d9161,
    _0x14c473,
    {
      from: _0x2f4753,
      l: _0x27bbba,
      prefix: _0x5ba85b,
      quoted: _0x2894ec,
      body: _0x2916fe,
      isCmd: _0x38954e,
      command: _0x1fc2ad,
      args: _0x32d105,
      q: _0x5df486,
      isGroup: _0x336efb,
      sender: _0x266e6d,
      senderNumber: _0x4737df,
      botNumber2: _0x16711b,
      botNumber: _0x4a2119,
      pushname: _0x2ae9d1,
      isMe: _0x56c28d,
      isOwner: _0x5e0fe2,
      groupMetadata: _0x530404,
      groupName: _0x19e2c8,
      participants: _0x39f07f,
      groupAdmins: _0xc817b1,
      isBotAdmins: _0x164981,
      isAdmins: _0x50a617,
      reply: _0x1fc662,
    }
  ) => {
    try {
      if (!_0x5df486) {
        return _0x1fc662(needus)
      }
      var _0x1876b0 = ''
      try {
        _0x1876b0 = (
          await fetchJson(
            'https://api.maher-zubair.tech/ai/chatgpt?q=' + _0x5df486
          )
        ).data
      } catch (_0x9be569) {
        try {
          _0x1876b0 = (
            await fetchJson(
              'https://api.maher-zubair.tech/ai/chatgpt2?q=' + _0x5df486
            )
          ).data
        } catch (_0x30a9c2) {
          _0x1876b0 = (
            await fetchJson(
              'https://api.maher-zubair.tech/ai/chatgpt3?q=' + _0x5df486
            )
          ).data
        }
      }
      return await _0x1fc662(_0x1876b0)
    } catch (_0x18c852) {
      _0x1fc662(cantf)
      _0x27bbba(_0x18c852)
    }
  }
)
const _0xf13ebd = {}
_0xf13ebd.pattern = 'sd'
_0xf13ebd.react = '\uD83D\uDC7E'
_0xf13ebd.desc = 'Genarate image in ai'
_0xf13ebd.category = 'other'
_0xf13ebd.use = '.sd boy'
_0xf13ebd.filename = __filename
cmd(
  _0xf13ebd,
  async (
    _0x25b437,
    _0x16434f,
    _0x4998a0,
    {
      from: _0x37b197,
      l: _0x4c5f76,
      prefix: _0x195614,
      quoted: _0x10ed02,
      body: _0xc14af2,
      isCmd: _0xe0c6ea,
      command: _0x456844,
      args: _0x1295ae,
      q: _0x57c52f,
      isGroup: _0x212c34,
      sender: _0x51524d,
      senderNumber: _0x2e6f03,
      botNumber2: _0x180296,
      botNumber: _0x41993e,
      pushname: _0x5ad808,
      isMe: _0x1fd418,
      isOwner: _0x17a658,
      groupMetadata: _0x21aa13,
      groupName: _0xbbc813,
      participants: _0x111634,
      groupAdmins: _0x55d4fa,
      isBotAdmins: _0x271055,
      isAdmins: _0x27f5ae,
      reply: _0x4674d2,
    }
  ) => {
    try {
      const _0x1f64d5 = _0x16434f.trim()
      if (!_0x1f64d5) {
        return await _0x16434f.reply(
          '*_Please provide some text to generate an image._*'
        )
      }
      const _0x80b34b =
          'https://aemt.me/stablediffusion?text=' +
          encodeURIComponent(_0x1f64d5),
        _0x2acb40 = { accept: 'application/json' }
      const _0x533dba = {
        headers: _0x2acb40,
        responseType: 'arraybuffer',
      }
      const _0x1dac02 = await axios.get(_0x80b34b, _0x533dba)
      if (!_0x1dac02.data) {
        return await _0x16434f.reply(
          '*Failed to generate an image using Stable Diffusion AI.*'
        )
      }
      const _0x5713d0 = Buffer.from(_0x1dac02.data, 'binary'),
        _0x42529a = { image: _0x5713d0 }
      const _0x28730e = { quoted: _0x16434f }
      await _0x25b437.sendMessage(_0x37b197, _0x42529a, _0x28730e)
    } catch (_0x12173a) {
      await console.error(
        _0x12173a + '\n\nCommand: stablediffusion',
        _0x12173a,
        '*Failed to use Stable Diffusion AI.*'
      )
      _0x4c5f76(_0x12173a)
    }
  }
)
const _0x3a1a8e = {}
_0x3a1a8e.pattern = 'gpt'
_0x3a1a8e.react = '\uD83D\uDC7E'
_0x3a1a8e.desc = desct
_0x3a1a8e.category = 'other'
_0x3a1a8e.use = '.gpt ha'
_0x3a1a8e.filename = __filename
cmd(
  _0x3a1a8e,
  async (
    _0x458df2,
    _0x5b5cf1,
    _0x1aa082,
    {
      from: _0x3bbb52,
      l: _0x23db4f,
      prefix: _0x523d4a,
      quoted: _0x25a5aa,
      body: _0x3c3994,
      isCmd: _0x276fdd,
      command: _0x312c05,
      args: _0x4bed16,
      q: _0x1a9449,
      isGroup: _0x5c3a82,
      sender: _0x351367,
      senderNumber: _0x4c5891,
      botNumber2: _0x2f1ba9,
      botNumber: _0x3a5ef2,
      pushname: _0x10e13e,
      isMe: _0xd80d4f,
      isOwner: _0x20ab4e,
      groupMetadata: _0x5e399a,
      groupName: _0x3c5869,
      participants: _0x4abc4b,
      groupAdmins: _0x1772ab,
      isBotAdmins: _0x4518fa,
      isAdmins: _0x197ea6,
      reply: _0x266619,
    }
  ) => {
    try {
      if (!_0x1a9449) {
        return await _0x1aa082.reply('*_Please provide a text prompt!_*')
      }
      const _0xc0622b =
          'https://aemt.me/v2/gpt4?text=' + encodeURIComponent(_0x1a9449),
        _0x357d7a = await fetch(_0xc0622b, {
          headers: { accept: 'application/json' },
        })
      if (!_0x357d7a.ok) {
        return await _0x1aa082.reply(
          '*_Error: ' + _0x357d7a.status + ' ' + _0x357d7a.statusText + '_*'
        )
      }
      const _0x31f512 = await _0x357d7a.json(),
        _0x179d04 = _0x31f512.result
      if (!_0x179d04) {
        return await _0x1aa082.reply('*_No result received from the API!_*')
      }
      await _0x1aa082.reply(_0x179d04)
    } catch (_0x149301) {
      _0x266619(cantf)
      _0x23db4f(_0x149301)
    }
  }
)
const _0xa00f4f = {}
_0xa00f4f.pattern = 'chatgpt4'
_0xa00f4f.alias = ['ai2', 'gpt4', 'openai4', 'zerotwo2', 'chat2']
_0xa00f4f.react = '\uD83D\uDC7E'
_0xa00f4f.desc = desct
_0xa00f4f.category = 'other'
_0xa00f4f.use = '.chatgpt4 ha'
_0xa00f4f.filename = __filename
cmd(
  _0xa00f4f,
  async (
    _0x4b2647,
    _0x527a62,
    _0x28ef64,
    {
      from: _0x5bbf3d,
      l: _0x43cb6d,
      prefix: _0x56e451,
      quoted: _0x2d7c97,
      body: _0x41f4fe,
      isCmd: _0x645a60,
      command: _0x235a79,
      args: _0x49c284,
      q: _0x59a854,
      isGroup: _0x2a9659,
      sender: _0x790442,
      senderNumber: _0x4c9184,
      botNumber2: _0x282550,
      botNumber: _0x92ce7b,
      pushname: _0xe71c72,
      isMe: _0x3db0ba,
      isOwner: _0x40f51b,
      groupMetadata: _0x45037c,
      groupName: _0x2e2016,
      participants: _0x48bc58,
      groupAdmins: _0x6fb177,
      isBotAdmins: _0x372553,
      isAdmins: _0x470956,
      reply: _0x31467f,
    }
  ) => {
    try {
      if (!_0x59a854) {
        return _0x31467f(needus)
      }
      var _0x102ba1 = (
        await fetchJson(
          'https://api.maher-zubair.tech/ai/chatgpt4?q=' + _0x59a854
        )
      ).response
      return await _0x31467f(_0x102ba1)
    } catch (_0x4e97ae) {
      _0x31467f(cantf)
      _0x43cb6d(_0x4e97ae)
    }
  }
)
const _0x42ab59 = {}
_0x42ab59.pattern = 'geminitgpt'
_0x42ab59.react = '\uD83D\uDC7E'
_0x42ab59.desc = desct
_0x42ab59.category = 'other'
_0x42ab59.use = '.chatgpt2 ha'
_0x42ab59.filename = __filename
cmd(
  _0x42ab59,
  async (
    _0x1e061b,
    _0x197ff7,
    _0xe671b8,
    {
      from: _0x530c69,
      l: _0x346d27,
      prefix: _0x38dc4e,
      quoted: _0x1b6ede,
      body: _0x3f52f3,
      isCmd: _0x29a664,
      command: _0x7a095e,
      args: _0x269728,
      q: _0x51c8d7,
      isGroup: _0x13172c,
      sender: _0x594b5e,
      senderNumber: _0x4281a1,
      botNumber2: _0x18ec61,
      botNumber: _0x2be641,
      pushname: _0x44b0b4,
      isMe: _0x4cba20,
      isOwner: _0x398f0f,
      groupMetadata: _0x339e8,
      groupName: _0x46f22b,
      participants: _0x1dfa03,
      groupAdmins: _0x257748,
      isBotAdmins: _0x20272a,
      isAdmins: _0x4e6221,
      reply: _0x14f9db,
    }
  ) => {
    try {
      if (!_0x51c8d7) {
        return _0x14f9db(needus)
      }
      var _0x5e1a41 = (
        await fetchJson(
          'https://api.maher-zubair.tech/ai/gemini?q=' + _0x51c8d7
        )
      ).data
      return await _0x14f9db(_0x5e1a41)
    } catch (_0x44c941) {
      _0x14f9db(cantf)
      _0x346d27(_0x44c941)
    }
  }
)
const _0x3f8cf5 = {}
_0x3f8cf5.pattern = 'mathsgpt'
_0x3f8cf5.react = '\uD83D\uDC7E'
_0x3f8cf5.desc = desct
_0x3f8cf5.category = 'other'
_0x3f8cf5.use = '.gptmaths 2-3'
_0x3f8cf5.filename = __filename
cmd(
  _0x3f8cf5,
  async (
    _0xfebe4e,
    _0x3fd10d,
    _0x1e34be,
    {
      from: _0x3a0d96,
      l: _0x5d9359,
      prefix: _0x2c3599,
      quoted: _0x20a791,
      body: _0x2ab9c9,
      isCmd: _0x56602a,
      command: _0x64bb55,
      args: _0x2b1b08,
      q: _0x246f21,
      isGroup: _0x477171,
      sender: _0x388712,
      senderNumber: _0x2843af,
      botNumber2: _0x46e24d,
      botNumber: _0x29b985,
      pushname: _0x532783,
      isMe: _0x4076f1,
      isOwner: _0x3fa7ec,
      groupMetadata: _0x29f552,
      groupName: _0x38bcf4,
      participants: _0x2be241,
      groupAdmins: _0x1cd50a,
      isBotAdmins: _0x4ee8a4,
      isAdmins: _0x1bcdd2,
      reply: _0x3eec4d,
    }
  ) => {
    try {
      if (!_0x246f21) {
        return _0x3eec4d(needus)
      }
      var _0x204698 = (
        await fetchJson(
          'https://api.maher-zubair.tech/ai/mathssolve?q=' + _0x246f21
        )
      ).data
      return await _0x3eec4d(_0x204698)
    } catch (_0x41ae76) {
      _0x3eec4d(cantf)
      _0x5d9359(_0x41ae76)
    }
  }
)
const _0x49fd2d = {}
_0x49fd2d.pattern = 'liyamagpt'
_0x49fd2d.react = '\uD83D\uDC7E'
_0x49fd2d.desc = desct
_0x49fd2d.category = 'other'
_0x49fd2d.use = '.liyamagpt hello'
_0x49fd2d.filename = __filename
cmd(
  _0x49fd2d,
  async (
    _0x299e4a,
    _0x6a87e2,
    _0x3472e3,
    {
      from: _0x90115a,
      l: _0x13de40,
      prefix: _0x1125d4,
      quoted: _0x248ba0,
      body: _0x43cf0b,
      isCmd: _0x39f147,
      command: _0x57698d,
      args: _0x404f1a,
      q: _0x2f5eea,
      isGroup: _0x4eb048,
      sender: _0x5d9ad6,
      senderNumber: _0x41ff5b,
      botNumber2: _0x116974,
      botNumber: _0x12d116,
      pushname: _0x296949,
      isMe: _0x5932fa,
      isOwner: _0x16d094,
      groupMetadata: _0x19c86b,
      groupName: _0x1d7fcb,
      participants: _0x5b1198,
      groupAdmins: _0x23efcc,
      isBotAdmins: _0x326b69,
      isAdmins: _0x41f585,
      reply: _0x80990e,
    }
  ) => {
    try {
      if (!_0x2f5eea) {
        return _0x80990e(needus)
      }
      var _0x153f31 = (
        await fetchJson(
          'https://vajira-api-7967fdc132a8.herokuapp.com/ai/llama-2?q=' +
            _0x2f5eea
        )
      ).data
      return await _0x80990e(_0x153f31)
    } catch (_0x1f07fd) {
      _0x80990e(cantf)
      _0x13de40(_0x1f07fd)
    }
  }
)
const _0x390f53 = {}
_0x390f53.pattern = 'voicegpt'
_0x390f53.react = '\uD83D\uDC7E'
_0x390f53.desc = desct
_0x390f53.category = 'other'
_0x390f53.use = '.voicegpt hello'
_0x390f53.filename = __filename
cmd(
  _0x390f53,
  async (
    _0x252eca,
    _0x197dab,
    _0x30679b,
    {
      from: _0x18f09b,
      l: _0x2fd77c,
      prefix: _0x443592,
      quoted: _0x521e22,
      body: _0x492382,
      isCmd: _0xb08346,
      command: _0x5d96cb,
      args: _0x1916d6,
      q: _0x404d69,
      isGroup: _0x3653a1,
      sender: _0x53ba8c,
      senderNumber: _0x2961ce,
      botNumber2: _0x3fa123,
      botNumber: _0x80823e,
      pushname: _0x229c68,
      isMe: _0x5d1b2c,
      isOwner: _0x1b01f1,
      groupMetadata: _0x43252e,
      groupName: _0x49a7d4,
      participants: _0x3d2622,
      groupAdmins: _0x3ee09a,
      isBotAdmins: _0xb65eee,
      isAdmins: _0x151ab0,
      reply: _0x56e81d,
    }
  ) => {
    try {
      if (!_0x404d69) {
        return _0x56e81d(needus)
      }
      var _0x2870e8 = (
        await fetchJson(
          'https://api.vihangayt.me/tools/gptvoice?q=' + _0x404d69
        )
      ).data
      return await _0x56e81d(_0x2870e8)
    } catch (_0x342b9b) {
      _0x56e81d(cantf)
      _0x2fd77c(_0x342b9b)
    }
  }
)
const _0x4fa248 = {}
_0x4fa248.pattern = 'photoleapgpt'
_0x4fa248.react = '\uD83D\uDC7E'
_0x4fa248.desc = desct
_0x4fa248.category = 'other'
_0x4fa248.use = '.photoleapgpt hello'
_0x4fa248.filename = __filename
cmd(
  _0x4fa248,
  async (
    _0x29eeab,
    _0x1b74d4,
    _0x30b7fe,
    {
      from: _0x429340,
      l: _0x319202,
      prefix: _0x24bf3,
      quoted: _0x2d641e,
      body: _0x4e311e,
      isCmd: _0x7e6a61,
      command: _0x101887,
      args: _0x27a4ab,
      q: _0x1a7015,
      isGroup: _0x556ed7,
      sender: _0x1b7846,
      senderNumber: _0x2024b3,
      botNumber2: _0x2931e3,
      botNumber: _0x441f28,
      pushname: _0x3c70ca,
      isMe: _0x17ed53,
      isOwner: _0x1901ad,
      groupMetadata: _0x58d3e6,
      groupName: _0x40f6a3,
      participants: _0x2acccb,
      groupAdmins: _0x5b2f6b,
      isBotAdmins: _0x50dbc9,
      isAdmins: _0x5152c7,
      reply: _0x3d6bde,
    }
  ) => {
    try {
      if (!_0x1a7015) {
        return _0x3d6bde(needus)
      }
      var _0x4c0f23 = (
        await fetchJson(
          'https://api.maher-zubair.tech/ai/photoleap?q=' + _0x1a7015
        )
      ).data
      return await _0x3d6bde(_0x4c0f23)
    } catch (_0x4ea003) {
      _0x3d6bde(cantf)
      _0x319202(_0x4ea003)
    }
  }
)
const _0x3d0727 = {}
_0x3d0727.pattern = 'timetest'
_0x3d0727.react = '\uD83D\uDD16'
_0x3d0727.desc = 'test the time'
_0x3d0727.category = 'other'
_0x3d0727.use = '.timetest'
_0x3d0727.filename = __filename
cmd(
  _0x3d0727,
  async (
    _0x47db56,
    _0x5113df,
    _0x127cf0,
    {
      from: _0x4dfa61,
      l: _0x38af28,
      prefix: _0x5b4e62,
      quoted: _0x32f8f1,
      body: _0x447e18,
      isCmd: _0x41aeca,
      command: _0x375635,
      args: _0x2ed184,
      q: _0x36e621,
      isGroup: _0x5a2a9b,
      sender: _0x29e205,
      senderNumber: _0x43bd99,
      botNumber2: _0x222b0c,
      botNumber: _0x242485,
      pushname: _0xf6b311,
      isMe: _0x201c6e,
      isOwner: _0x130e5c,
      groupMetadata: _0x22ca74,
      groupName: _0x5b077e,
      participants: _0x405a18,
      groupAdmins: _0x3960bd,
      isBotAdmins: _0x924bd7,
      isAdmins: _0x23e826,
      reply: _0x1067ee,
    }
  ) => {
    try {
      const _0x90a5ad = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      const _0xe424c2 = _0x90a5ad
      var _0x1ef47a = new Date().toLocaleDateString(_0xe424c2)
      const _0x7f100e =
        '\uD83D\uDCC5 ' +
        _0x1ef47a +
        '\n\u231A ' +
        time +
        '\n\n' +
        '\uD83D\uDC78\uD83D\uDCAC ɪᴢᴜᴍɪ ɪꜱ ᴏɴʟɪɴᴇ'
      await _0x47db56.sendText(_0x5113df.chat, _0x7f100e)
      if (time == '6:08:01') {
        return await _0x47db56.sendText(_0x5113df.chat, _0x7f100e)
      }
      if (time == '6:08:11') {
        return await _0x47db56.sendText(_0x5113df.chat, _0x7f100e)
      }
      if (time == '6:08:20') {
        return await con.sendText(_0x5113df.chat, _0x7f100e)
      }
      const _0x31c490 = {
        text: '\u2705',
        key: _0x5113df.key,
      }
      const _0x14956e = { react: _0x31c490 }
      await _0x47db56.sendMessage(_0x4dfa61, _0x14956e)
    } catch (_0xe96ee0) {
      _0x1067ee()
      _0x38af28(_0xe96ee0)
    }
  }
)
const _0x4110bf = {}
_0x4110bf.pattern = 'readmore'
_0x4110bf.react = '\uD83D\uDD16'
_0x4110bf.desc = 'convert message to a readmore message'
_0x4110bf.category = 'other'
_0x4110bf.use = '.readmore'
_0x4110bf.filename = __filename
cmd(
  _0x4110bf,
  async (
    _0x4188bf,
    _0x48dc37,
    _0x32b41d,
    {
      from: _0x1052cf,
      l: _0x4e15dc,
      prefix: _0x3e30f6,
      quoted: _0x4de917,
      body: _0x4e1e88,
      isCmd: _0xa53eb,
      command: _0xdced9c,
      args: _0x4da2f3,
      q: _0x35f510,
      isGroup: _0x29f1f4,
      sender: _0x1364c9,
      senderNumber: _0x4a8cc4,
      botNumber2: _0x2d82bb,
      botNumber: _0x4a2ab9,
      pushname: _0x1161fe,
      isMe: _0x313dc1,
      isOwner: _0x373e0d,
      groupMetadata: _0x4510b9,
      groupName: _0x225626,
      participants: _0x166c9a,
      groupAdmins: _0x1727b8,
      isBotAdmins: _0x2b5e6a,
      isAdmins: _0x52664f,
      reply: _0x41fc67,
    }
  ) => {
    try {
      let _0x36d0ea =
        '*\uD83D\uDC78\uD83D\uDCAC Please Give Some Text*\n```Example .readmore VAJIRA```'
      _0x41fc67(
        '\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B' +
          (_0x35f510 ? _0x35f510 : 'blank')
      )
      const _0x53349c = {
        text: '\u2705',
        key: _0x48dc37.key,
      }
      const _0x34f7c9 = { react: _0x53349c }
      await _0x4188bf.sendMessage(_0x1052cf, _0x34f7c9)
    } catch (_0x129dbc) {
      _0x41fc67('')
      _0x4e15dc(_0x129dbc)
    }
  }
)
const _0x9e7ca6 = {}
_0x9e7ca6.pattern = 'poll'
_0x9e7ca6.react = '\uD83D\uDD16'
_0x9e7ca6.desc = 'Poll a message'
_0x9e7ca6.category = 'other'
_0x9e7ca6.use = '.poll'
_0x9e7ca6.filename = __filename
cmd(
  _0x9e7ca6,
  async (
    _0x3256ac,
    _0x1ed864,
    _0x17c8c6,
    {
      from: _0xb22a8b,
      l: _0x242034,
      prefix: _0x5c1dd7,
      quoted: _0x3173fd,
      body: _0x2ce8d6,
      isCmd: _0x22e794,
      command: _0xbf591c,
      args: _0x390f25,
      q: _0x30201f,
      isGroup: _0x8067a6,
      sender: _0x340a72,
      senderNumber: _0x2d62e2,
      botNumber2: _0x2cf5c2,
      botNumber: _0x53a761,
      pushname: _0x3b5b9f,
      isMe: _0x12f2d5,
      isOwner: _0xffc137,
      groupMetadata: _0x28cfaa,
      groupName: _0x16ae7f,
      participants: _0xf68612,
      groupAdmins: _0x1757de,
      isBotAdmins: _0x1d9237,
      isAdmins: _0x1efa80,
      reply: _0x2f109f,
    }
  ) => {
    try {
      let [_0x30714e, _0x459886] = _0x30201f.split('|')
      if (_0x30201f.split('|') < 2) {
        return await _0x2f109f(
          'Mention question and atleast 2 options\nExample: ' +
            _0x5c1dd7 +
            'poll Who is best admin?|Xeon,Cheems,Doge...'
        )
      }
      let _0x5bc9f1 = []
      for (let _0x515ac4 of _0x459886.split(',')) {
        _0x5bc9f1.push(_0x515ac4)
      }
      const _0x2b2958 = {
        name: _0x30714e,
        values: _0x5bc9f1,
      }
      const _0x5377ac = { poll: _0x2b2958 }
      await _0x3256ac.sendMessage(_0x1ed864.chat, _0x5377ac)
      const _0x285c8e = {
        text: '\u2705',
        key: _0x1ed864.key,
      }
      const _0x35357b = { react: _0x285c8e }
      await _0x3256ac.sendMessage(_0xb22a8b, _0x35357b)
    } catch (_0x3037b5) {
      _0x2f109f('')
      _0x242034(_0x3037b5)
    }
  }
)
