const config = require('../settings'),
  { cmd, commands } = require('../lib/command'),
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
  { Maker } = require('imagemaker.js')
var Photooxy = require('@sl-code-lords/photooxy'),
  photooxy = new Photooxy()
const fileType = require('file-type'),
  fs = require('fs')
var TextPro = require('@sl-code-lords/text-pro-me'),
  text_pro = new TextPro(),
  imgmsg = ''
if (config.LANG === 'SI') {
  imgmsg = '```කරුණාකර නමක් දෙන්න !```'
} else {
  imgmsg = '```Please give me a name !```'
}
var imgmsg2 = ''
if (config.LANG === 'SI') {
  imgmsg2 = '*උදා: .banner vishwamihiranga*'
} else {
  imgmsg2 = '*Ex: .banner vishwamihiranga*'
}
var imgmsg3 = ''
if (config.LANG === 'SI') {
  imgmsg3 = '*උදා: .banner2 vishwamihiranga*'
} else {
  imgmsg3 = '*Ex: .banner2 vishwamihiranga*'
}
var imgmsg4 = ''
if (config.LANG === 'SI') {
  imgmsg4 = '*උදා: .banner3 vishwamihiranga*'
} else {
  imgmsg4 = '*Ex: .banner3 vishwamihirangaa*'
}
var imgmsg5 = ''
if (config.LANG === 'SI') {
  imgmsg5 = '*උදා: .banner3 vishwamihiranga*'
} else {
  imgmsg5 = '*Ex: .banner3 vishwamihiranga*'
}
var imgmsg6 = ''
if (config.LANG === 'SI') {
  imgmsg6 = '*උදා: .banner3 vishwamihiranga*'
} else {
  imgmsg6 = '*Ex: .banner3 vishwamihiranga*'
}
var errt = ''
if (config.LANG === 'SI') {
  errt = '*මට මෙම ලාංඡනය නිර්මාණය කළ නොහැක. :(*'
} else {
  errt = '*I cant create this logo :(*'
}
var desc2 = ''
if (config.LANG === 'SI') {
  desc2 = 'එය channel banners නිර්මාණය කරයි..'
} else {
  desc2 = 'It creates channel banners..'
}
const _0x5726d4 = {}
_0x5726d4.pattern = 'logo'
_0x5726d4.react = '\uD83D\uDDC3️'
_0x5726d4.desc = 'Logo Genarate.'
_0x5726d4.category = 'logo'
_0x5726d4.use = '.logo vishwamihiranga'
_0x5726d4.filename = __filename
cmd(
  _0x5726d4,
  async (
    _0xb7a21a,
    _0x5d9c2b,
    _0xafe264,
    {
      from: _0x5ceada,
      l: _0x1d1cca,
      prefix: _0x1b3bae,
      quoted: _0x53cea1,
      body: _0x4f807e,
      isCmd: _0x185a67,
      command: _0x1ccc65,
      args: _0x1bb2e4,
      q: _0x3eeb3f,
      isGroup: _0x17b97c,
      sender: _0x386897,
      senderNumber: _0x482d3b,
      botNumber2: _0x46707d,
      botNumber: _0x43f79a,
      pushname: _0x2ba3cb,
      isMe: _0x2c1cfb,
      isOwner: _0x49f778,
      groupMetadata: _0xca1c61,
      groupName: _0x14ca83,
      participants: _0x1d0525,
      groupAdmins: _0x9e4ec,
      isBotAdmins: _0x498132,
      isAdmins: _0x20eac0,
      reply: _0x19d33a,
    }
  ) => {
    try {
      if (!_0x3eeb3f) {
        return await _0x19d33a(imgmsg)
      }
      const _0x46f005 =
          "> VISHWA MD LOGO CREATION \uD83D\uDDBC️\n            \n> The first quality great logos share is that they're relevant to the markets their companies target. More importantly, they clearly communicate a brand's personality and identity. A primary component is the use of colors in your logo, which can trigger different emotions and show your brand's personality to consumers.",
        _0x19b347 = []
      _0x19b347.push({
        header: 'Select logo type want',
        title: 'Black pink',
        description: 'Black pink logo design',
        id: '.blackpink ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Deadpool',
        description: 'Create text effects in the style of the Deadpool logo',
        id: '.deadpool ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Wolf Galaxy',
        description: 'Create logo, avatar Wolf Galaxy',
        id: '.wolf ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: '3D wooden',
        description: 'Create 3D wooden logo',
        id: '.3dwooden ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Zombie 3D',
        description: 'Zombie 3D Text Effect',
        id: '.zombie3d ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Comic Style',
        description: 'Create online 3D comic-style text effects',
        id: '.comic ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Air Balloon',
        description: 'Writing your name on hot air balloon',
        id: '.airballoon ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Glitter Gold',
        description: 'Glitter Gold',
        id: '.glittergold ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Incandescent Bulbs',
        description: 'Text effects incandescent bulbs',
        id: '.bulb ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'BORN PINK',
        description: 'Create BLACKPINKs BORN PINK album logo',
        id: '.bornpink ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'gold text',
        description: 'Beautiful gold text effect',
        id: '.goldtext ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Neon Light',
        description: 'Making Neon Light Text Effect with Galaxy Style',
        id: '.neonlight ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Water Color',
        description: 'Create a watercolor text effect online',
        id: '.watercolor ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Purple Text',
        description: 'Purple text effect',
        id: '.purple-text ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: '3D ruby \u200B\u200Bstone',
        description: '3D ruby \u200B\u200Bstone',
        id: '.3drubystone ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Triangle mountain',
        description: 'Triangle mountain logo black & white',
        id: '.mountain ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Create Marvel',
        description: 'Create Marvels Style Logo',
        id: '.marvel ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'letters on the leaves',
        description: 'Write letters on the leaves',
        id: '.leaves ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Metal',
        description: 'Metal logo online',
        id: '.metal ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Modern Gold',
        description: 'Modern Gold',
        id: '.moderngold ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: '1917 Style Text',
        description: '1917 Style Text Effect',
        id: '. 1917 ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Plasma',
        description: 'Plasma text effects online',
        id: '.plasma ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Blue neon',
        description: 'Blue neon text effect',
        id: '.blueneon ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Christmas snow',
        description: 'Christmas snow text effect online',
        id: '.christmas ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Stars night',
        description: 'Stars night',
        id: '.starsnight ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Mechanical Style',
        description: 'Create your name in a mechanical style',
        id: '.mechanical ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'multicolored signature attachment',
        description: 'Create multicolored signature attachment arrow effect',
        id: '.attachmentarrow ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Underwater Text',
        description: 'Underwater Text',
        id: '.underwater ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Wings Galaxy',
        description: 'Wings Galaxy',
        id: '.wingsgalaxy ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'star zodiac',
        description: 'Create star zodiac wallpaper mobile',
        id: '.starzodiac ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'Heated steel',
        description: 'Heated steel lettering effect',
        id: '.heatedsteel ' + _0x3eeb3f,
      })
      _0x19b347.push({
        header: '',
        title: 'FireWork',
        description: 'Text FireWork Effect',
        id: '.firework ' + _0x3eeb3f,
      })
      const _0x36400a = {
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL,
      }
      let _0x3d9bb8 = [
        {
          name: 'cta_url',
          buttonParamsJson: JSON.stringify(_0x36400a),
        },
        {
          name: 'single_select',
          buttonParamsJson: JSON.stringify({
            title: 'Select a Category :)',
            sections: [
              {
                title: 'Please select a category',
                highlight_label: 'VAJIRA-MD',
                rows: _0x19b347,
              },
            ],
          }),
        },
      ]
      const _0x39234b = {
        image: 'https://i.ibb.co/NjzJXhd/OIP.png',
        header: '',
        footer: config.FOOTER,
        body: _0x46f005,
      }
      let _0x7a3abc = _0x39234b
      return await _0xb7a21a.sendButtonMessage(
        _0x5ceada,
        _0x3d9bb8,
        _0xafe264,
        _0x7a3abc
      )
    } catch (_0x4968a9) {
      _0x19d33a('*Error !!*'), console.log(_0x4968a9)
    }
  }
)
const _0x1bd612 = {}
_0x1bd612.pattern = 'firework'
_0x1bd612.filename = __filename
cmd(
  _0x1bd612,
  async (
    _0x52e959,
    _0x39218a,
    _0x23a514,
    {
      from: _0x27b2ba,
      l: _0x2594df,
      quoted: _0x1e298e,
      body: _0x14b346,
      isCmd: _0x4ae473,
      command: _0x2fd290,
      args: _0x13cca4,
      q: _0x216969,
      isGroup: _0x33df73,
      sender: _0x17086d,
      senderNumber: _0x274e11,
      botNumber2: _0x3ce903,
      botNumber: _0x2dc0ea,
      pushname: _0x123db0,
      isMe: _0x11f376,
      isOwner: _0x9e6b1a,
      groupMetadata: _0x1f80bf,
      groupName: _0x442137,
      participants: _0x4fb133,
      groupAdmins: _0x296422,
      isBotAdmins: _0x28e902,
      isAdmins: _0x1d1c39,
      reply: _0x4d0327,
    }
  ) => {
    try {
      const _0x231cd6 = {
        text: '\uD83C\uDF86',
        key: _0x39218a.key,
      }
      const _0x23de30 = { react: _0x231cd6 }
      await _0x52e959.sendMessage(_0x27b2ba, _0x23de30)
      let _0x219f62 = _0x216969.split('+')
      new Maker()
        .Ephoto360('https://en.ephoto360.com/text-firework-effect-356.html', [
          '' + _0x219f62,
        ])
        .then(async (_0x283302) => {
          const _0x121dc4 = { quoted: _0x39218a }
          await _0x52e959.sendMessage(
            _0x27b2ba,
            {
              image: await getBuffer(_0x283302.imageUrl),
              caption: config.FOOTER,
            },
            _0x121dc4
          )
          const _0x43b07c = {
            text: '\u2714',
            key: _0x39218a.key,
          }
          const _0x3b8096 = { react: _0x43b07c }
          await _0x52e959.sendMessage(_0x27b2ba, _0x3b8096)
        })
    } catch (_0xa8a3ae) {
      _0x4d0327(errt), _0x2594df(_0xa8a3ae)
    }
  }
)
const _0x25e4d6 = {}
_0x25e4d6.pattern = 'heatedsteel'
_0x25e4d6.filename = __filename
cmd(
  _0x25e4d6,
  async (
    _0x2a2c9d,
    _0x3b45d2,
    _0x556382,
    {
      from: _0x56e81c,
      l: _0x2fea81,
      quoted: _0x2715e2,
      body: _0x5d05cf,
      isCmd: _0x2e49d8,
      command: _0xc299ec,
      args: _0xe1f276,
      q: _0x426e0b,
      isGroup: _0x10bba7,
      sender: _0x3268b9,
      senderNumber: _0x58848f,
      botNumber2: _0x5c2425,
      botNumber: _0x364a24,
      pushname: _0x42d9c1,
      isMe: _0x4bf427,
      isOwner: _0x52fbf2,
      groupMetadata: _0x29d8b9,
      groupName: _0x4beda0,
      participants: _0x3d210b,
      groupAdmins: _0x137c36,
      isBotAdmins: _0x4cd358,
      isAdmins: _0x580980,
      reply: _0x1c437f,
    }
  ) => {
    try {
      const _0x3b252f = {
        text: '\uD83C\uDF86',
        key: _0x3b45d2.key,
      }
      const _0x1b04ae = { react: _0x3b252f }
      await _0x2a2c9d.sendMessage(_0x56e81c, _0x1b04ae)
      let _0x3da39d = _0x426e0b.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/heated-steel-lettering-effect-65.html',
          ['' + _0x3da39d]
        )
        .then(async (_0x3a3304) => {
          const _0x5c4b29 = { quoted: _0x3b45d2 }
          await _0x2a2c9d.sendMessage(
            _0x56e81c,
            {
              image: await getBuffer(_0x3a3304.imageUrl),
              caption: config.FOOTER,
            },
            _0x5c4b29
          )
          const _0x2f960f = {
            text: '\u2714',
            key: _0x3b45d2.key,
          }
          const _0x58500b = { react: _0x2f960f }
          await _0x2a2c9d.sendMessage(_0x56e81c, _0x58500b)
        })
    } catch (_0x1fe90e) {
      _0x1c437f(errt), _0x2fea81(_0x1fe90e)
    }
  }
)
const _0x17406a = {}
_0x17406a.pattern = 'starzodiac'
_0x17406a.filename = __filename
cmd(
  _0x17406a,
  async (
    _0x14720d,
    _0x52e85c,
    _0x473bd8,
    {
      from: _0x2a0297,
      l: _0x52665a,
      quoted: _0x268a9f,
      body: _0x5841c0,
      isCmd: _0x40a062,
      command: _0x388e37,
      args: _0x74d2b,
      q: _0x239e84,
      isGroup: _0x37565f,
      sender: _0x5eb41a,
      senderNumber: _0x2d3fbe,
      botNumber2: _0x63da9c,
      botNumber: _0x10f84e,
      pushname: _0x16c217,
      isMe: _0x259d9d,
      isOwner: _0x318c8f,
      groupMetadata: _0x3bc194,
      groupName: _0x955d3b,
      participants: _0x56c21c,
      groupAdmins: _0x399c24,
      isBotAdmins: _0x4059f9,
      isAdmins: _0x413ea0,
      reply: _0x1557e7,
    }
  ) => {
    try {
      const _0xc3581a = {
        text: '\uD83C\uDF86',
        key: _0x52e85c.key,
      }
      const _0x1308f9 = { react: _0xc3581a }
      await _0x14720d.sendMessage(_0x2a0297, _0x1308f9)
      let _0x248e88 = _0x239e84.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-star-zodiac-wallpaper-mobile-604.html',
          ['' + _0x248e88]
        )
        .then(async (_0x55f795) => {
          const _0x54421b = { quoted: _0x52e85c }
          await _0x14720d.sendMessage(
            _0x2a0297,
            {
              image: await getBuffer(_0x55f795.imageUrl),
              caption: config.FOOTER,
            },
            _0x54421b
          )
          const _0x49a3ba = {
            text: '\u2714',
            key: _0x52e85c.key,
          }
          const _0x2ee2ae = { react: _0x49a3ba }
          await _0x14720d.sendMessage(_0x2a0297, _0x2ee2ae)
        })
    } catch (_0x2d125e) {
      _0x1557e7(errt), _0x52665a(_0x2d125e)
    }
  }
)
const _0x49799c = {}
_0x49799c.pattern = 'heatedsteel'
_0x49799c.filename = __filename
cmd(
  _0x49799c,
  async (
    _0x4f7078,
    _0x5f33ab,
    _0x4ef0f5,
    {
      from: _0x4cdd4d,
      l: _0x11157f,
      quoted: _0x5ba759,
      body: _0x1c47f0,
      isCmd: _0x16c0bc,
      command: _0x49a725,
      args: _0x278279,
      q: _0x3038f8,
      isGroup: _0xbabea0,
      sender: _0x2e67fd,
      senderNumber: _0x473644,
      botNumber2: _0x3b96e0,
      botNumber: _0x5905f2,
      pushname: _0x294797,
      isMe: _0x17b445,
      isOwner: _0xb3db17,
      groupMetadata: _0x25af93,
      groupName: _0x8f4d48,
      participants: _0x147c22,
      groupAdmins: _0x15f09b,
      isBotAdmins: _0x5d1899,
      isAdmins: _0x5f25ab,
      reply: _0x426da9,
    }
  ) => {
    try {
      const _0xc5660e = {
        text: '\uD83C\uDF86',
        key: _0x5f33ab.key,
      }
      const _0x63d06a = { react: _0xc5660e }
      await _0x4f7078.sendMessage(_0x4cdd4d, _0x63d06a)
      let _0x31e490 = _0x3038f8.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/heated-steel-lettering-effect-65.html',
          ['' + _0x31e490]
        )
        .then(async (_0x540515) => {
          const _0x3f506a = { quoted: _0x5f33ab }
          await _0x4f7078.sendMessage(
            _0x4cdd4d,
            {
              image: await getBuffer(_0x540515.imageUrl),
              caption: config.FOOTER,
            },
            _0x3f506a
          )
          const _0xe1027a = {
            text: '\u2714',
            key: _0x5f33ab.key,
          }
          const _0x402f22 = { react: _0xe1027a }
          await _0x4f7078.sendMessage(_0x4cdd4d, _0x402f22)
        })
    } catch (_0x18004c) {
      _0x426da9(errt), _0x11157f(_0x18004c)
    }
  }
)
const _0x455f67 = {}
_0x455f67.pattern = 'wingsgalaxy'
_0x455f67.filename = __filename
cmd(
  _0x455f67,
  async (
    _0x308c0b,
    _0x4a0e33,
    _0x3cf4d5,
    {
      from: _0x6d6524,
      l: _0x25e6ae,
      quoted: _0x1e5b29,
      body: _0x1994fd,
      isCmd: _0x2a88c7,
      command: _0x3b4ace,
      args: _0x46a1fb,
      q: _0x30be06,
      isGroup: _0x58b025,
      sender: _0x7486c2,
      senderNumber: _0x34ebc1,
      botNumber2: _0x383f46,
      botNumber: _0x81d992,
      pushname: _0x1548fe,
      isMe: _0x570fa5,
      isOwner: _0x242254,
      groupMetadata: _0x420c7f,
      groupName: _0x368f5a,
      participants: _0x445f69,
      groupAdmins: _0x34c140,
      isBotAdmins: _0x1746bd,
      isAdmins: _0x30cb9e,
      reply: _0x5674cb,
    }
  ) => {
    try {
      const _0x32cdbe = {
        text: '\uD83C\uDF86',
        key: _0x4a0e33.key,
      }
      const _0x1abdfc = { react: _0x32cdbe }
      await _0x308c0b.sendMessage(_0x6d6524, _0x1abdfc)
      let _0x21b95b = _0x30be06.split('+')
      new Maker()
        .Ephoto360('https://en.ephoto360.com/wings-galaxy-206.html', [
          '' + _0x21b95b,
        ])
        .then(async (_0x2e03d6) => {
          const _0x4d58fc = { quoted: _0x4a0e33 }
          await _0x308c0b.sendMessage(
            _0x6d6524,
            {
              image: await getBuffer(_0x2e03d6.imageUrl),
              caption: config.FOOTER,
            },
            _0x4d58fc
          )
          const _0x228d42 = {
            text: '\u2714',
            key: _0x4a0e33.key,
          }
          const _0x46ac1f = { react: _0x228d42 }
          await _0x308c0b.sendMessage(_0x6d6524, _0x46ac1f)
        })
    } catch (_0xb01b1b) {
      _0x5674cb(errt), _0x25e6ae(_0xb01b1b)
    }
  }
)
const _0x3a6600 = {}
_0x3a6600.pattern = 'underwater'
_0x3a6600.filename = __filename
cmd(
  _0x3a6600,
  async (
    _0x4b5e03,
    _0x3592d8,
    _0x12ec01,
    {
      from: _0x5ac80c,
      l: _0x493f93,
      quoted: _0x2a1fed,
      body: _0x84cb08,
      isCmd: _0x33d410,
      command: _0x3dd7af,
      args: _0x5154a1,
      q: _0x32d4e3,
      isGroup: _0x5dd22a,
      sender: _0x3851ba,
      senderNumber: _0x50bff1,
      botNumber2: _0x5e3e08,
      botNumber: _0x1e53d0,
      pushname: _0x27fcfb,
      isMe: _0x1aab34,
      isOwner: _0x159c8a,
      groupMetadata: _0x4b2ac5,
      groupName: _0x28fe93,
      participants: _0x2eca14,
      groupAdmins: _0x2cbdd3,
      isBotAdmins: _0xc0398b,
      isAdmins: _0x2accee,
      reply: _0x527048,
    }
  ) => {
    try {
      const _0x467293 = {
        text: '\uD83C\uDF86',
        key: _0x3592d8.key,
      }
      const _0x3f17c6 = { react: _0x467293 }
      await _0x4b5e03.sendMessage(_0x5ac80c, _0x3f17c6)
      let _0x17a418 = _0x32d4e3.split('+')
      new Maker()
        .Ephoto360('https://en.ephoto360.com/underwater-text-73.html', [
          '' + _0x17a418,
        ])
        .then(async (_0x64467d) => {
          const _0x1ae01e = { quoted: _0x3592d8 }
          await _0x4b5e03.sendMessage(
            _0x5ac80c,
            {
              image: await getBuffer(_0x64467d.imageUrl),
              caption: config.FOOTER,
            },
            _0x1ae01e
          )
          const _0x4ebaf3 = {
            text: '\u2714',
            key: _0x3592d8.key,
          }
          const _0xed3a48 = { react: _0x4ebaf3 }
          await _0x4b5e03.sendMessage(_0x5ac80c, _0xed3a48)
        })
    } catch (_0x3582cc) {
      _0x527048(errt), _0x493f93(_0x3582cc)
    }
  }
)
const _0x14968a = {}
_0x14968a.pattern = 'attachmentarrow'
_0x14968a.filename = __filename
cmd(
  _0x14968a,
  async (
    _0xe2af83,
    _0x149749,
    _0x585945,
    {
      from: _0x3b8a5a,
      l: _0x23eb8b,
      quoted: _0xbf106e,
      body: _0x2bb594,
      isCmd: _0x184eba,
      command: _0x3d3da7,
      args: _0x18255b,
      q: _0x477cbc,
      isGroup: _0x3c8f10,
      sender: _0x5e714a,
      senderNumber: _0x14bc39,
      botNumber2: _0x5a6699,
      botNumber: _0x59751e,
      pushname: _0x40ac4,
      isMe: _0x320a1f,
      isOwner: _0x2364d7,
      groupMetadata: _0xafd11f,
      groupName: _0x3ba910,
      participants: _0x5440d0,
      groupAdmins: _0x5e30ab,
      isBotAdmins: _0x1563ca,
      isAdmins: _0x1112a9,
      reply: _0x4dc14b,
    }
  ) => {
    try {
      const _0x594a9d = {
        text: '\uD83C\uDF86',
        key: _0x149749.key,
      }
      const _0x1bb58e = { react: _0x594a9d }
      await _0xe2af83.sendMessage(_0x3b8a5a, _0x1bb58e)
      let _0x56b526 = _0x477cbc.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html',
          ['' + _0x56b526]
        )
        .then(async (_0x587ac7) => {
          const _0x32fd41 = { quoted: _0x149749 }
          await _0xe2af83.sendMessage(
            _0x3b8a5a,
            {
              image: await getBuffer(_0x587ac7.imageUrl),
              caption: config.FOOTER,
            },
            _0x32fd41
          )
          const _0x1c6700 = {
            text: '\u2714',
            key: _0x149749.key,
          }
          const _0x319258 = { react: _0x1c6700 }
          await _0xe2af83.sendMessage(_0x3b8a5a, _0x319258)
        })
    } catch (_0xb5640) {
      _0x4dc14b(errt), _0x23eb8b(_0xb5640)
    }
  }
)
const _0x31beba = {}
_0x31beba.pattern = 'mechanical'
_0x31beba.filename = __filename
cmd(
  _0x31beba,
  async (
    _0x3db3c2,
    _0x5afa40,
    _0x370fa1,
    {
      from: _0x2bee2e,
      l: _0x4555be,
      quoted: _0x4a6cda,
      body: _0x2ac3a2,
      isCmd: _0x230688,
      command: _0x209960,
      args: _0x13f468,
      q: _0x50aaa2,
      isGroup: _0x5df770,
      sender: _0x24a414,
      senderNumber: _0x1185dc,
      botNumber2: _0x5365b4,
      botNumber: _0xc19071,
      pushname: _0x506d87,
      isMe: _0x9ce8ae,
      isOwner: _0x3dd201,
      groupMetadata: _0x10a041,
      groupName: _0x22d7f1,
      participants: _0x30a83c,
      groupAdmins: _0x42e91b,
      isBotAdmins: _0x499290,
      isAdmins: _0x4e0992,
      reply: _0x542385,
    }
  ) => {
    try {
      const _0x26067c = {
        text: '\uD83C\uDF86',
        key: _0x5afa40.key,
      }
      const _0x2c452e = { react: _0x26067c }
      await _0x3db3c2.sendMessage(_0x2bee2e, _0x2c452e)
      let _0x520d5d = _0x50aaa2.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-your-name-in-a-mechanical-style-306.html',
          ['' + _0x520d5d]
        )
        .then(async (_0x48294e) => {
          const _0x1e2d65 = { quoted: _0x5afa40 }
          await _0x3db3c2.sendMessage(
            _0x2bee2e,
            {
              image: await getBuffer(_0x48294e.imageUrl),
              caption: config.FOOTER,
            },
            _0x1e2d65
          )
          const _0x4b1b26 = {
            text: '\u2714',
            key: _0x5afa40.key,
          }
          const _0x237c6d = { react: _0x4b1b26 }
          await _0x3db3c2.sendMessage(_0x2bee2e, _0x237c6d)
        })
    } catch (_0x1911e9) {
      _0x542385(errt), _0x4555be(_0x1911e9)
    }
  }
)
const _0x5bc514 = {}
_0x5bc514.pattern = 'starsnight'
_0x5bc514.filename = __filename
cmd(
  _0x5bc514,
  async (
    _0x470fb7,
    _0x14328a,
    _0x302d5d,
    {
      from: _0x27d15c,
      l: _0x5a839d,
      quoted: _0x3583d6,
      body: _0x5efc03,
      isCmd: _0x2aa4f3,
      command: _0x551f36,
      args: _0x15b6be,
      q: _0x31acfa,
      isGroup: _0x1a6d06,
      sender: _0x1f008e,
      senderNumber: _0x16a896,
      botNumber2: _0x5deb1a,
      botNumber: _0x13eebe,
      pushname: _0x47ff60,
      isMe: _0x161264,
      isOwner: _0xc7770d,
      groupMetadata: _0x4da944,
      groupName: _0x49aec0,
      participants: _0x317b2f,
      groupAdmins: _0x24dcb7,
      isBotAdmins: _0x5114d5,
      isAdmins: _0x301f18,
      reply: _0x592211,
    }
  ) => {
    try {
      const _0x45835e = {
        text: '\uD83C\uDF86',
        key: _0x14328a.key,
      }
      const _0x46b90b = { react: _0x45835e }
      await _0x470fb7.sendMessage(_0x27d15c, _0x46b90b)
      let _0xf7e507 = _0x31acfa.split('+')
      new Maker()
        .Ephoto360('https://en.ephoto360.com/stars-night-online-84.html', [
          '' + _0xf7e507,
        ])
        .then(async (_0x319879) => {
          const _0x171dcc = { quoted: _0x14328a }
          await _0x470fb7.sendMessage(
            _0x27d15c,
            {
              image: await getBuffer(_0x319879.imageUrl),
              caption: config.FOOTER,
            },
            _0x171dcc
          )
          const _0x3cd49c = {
            text: '\u2714',
            key: _0x14328a.key,
          }
          const _0x569492 = { react: _0x3cd49c }
          await _0x470fb7.sendMessage(_0x27d15c, _0x569492)
        })
    } catch (_0x3a0059) {
      _0x592211(errt), _0x5a839d(_0x3a0059)
    }
  }
)
const _0x3393ab = {}
_0x3393ab.pattern = 'christmas'
_0x3393ab.filename = __filename
cmd(
  _0x3393ab,
  async (
    _0x25c787,
    _0xe860bd,
    _0x2ec692,
    {
      from: _0x47d0f9,
      l: _0x324464,
      quoted: _0x2f3fa6,
      body: _0x477522,
      isCmd: _0x3e12bb,
      command: _0x5bdb9c,
      args: _0x305db1,
      q: _0x115986,
      isGroup: _0x4ee472,
      sender: _0x1fcfa3,
      senderNumber: _0x3b84fa,
      botNumber2: _0x552366,
      botNumber: _0x1f54d7,
      pushname: _0x4b0b5c,
      isMe: _0x14c0f8,
      isOwner: _0x56f03c,
      groupMetadata: _0x426649,
      groupName: _0xbf02e6,
      participants: _0x5f0294,
      groupAdmins: _0x485a67,
      isBotAdmins: _0xd4999b,
      isAdmins: _0x46f867,
      reply: _0x6dec31,
    }
  ) => {
    try {
      const _0x2662a4 = {
        text: '\uD83C\uDF86',
        key: _0xe860bd.key,
      }
      const _0x23ed81 = { react: _0x2662a4 }
      await _0x25c787.sendMessage(_0x47d0f9, _0x23ed81)
      let _0xb0c81b = _0x115986.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/christmas-snow-text-effect-online-631.html',
          ['' + _0xb0c81b]
        )
        .then(async (_0xfe43c4) => {
          const _0x512fd4 = { quoted: _0xe860bd }
          await _0x25c787.sendMessage(
            _0x47d0f9,
            {
              image: await getBuffer(_0xfe43c4.imageUrl),
              caption: config.FOOTER,
            },
            _0x512fd4
          )
          const _0x2b26b8 = {
            text: '\u2714',
            key: _0xe860bd.key,
          }
          const _0x59736d = { react: _0x2b26b8 }
          await _0x25c787.sendMessage(_0x47d0f9, _0x59736d)
        })
    } catch (_0x43e23e) {
      _0x6dec31(errt), _0x324464(_0x43e23e)
    }
  }
)
const _0x4abced = {}
_0x4abced.pattern = 'blueneon'
_0x4abced.filename = __filename
cmd(
  _0x4abced,
  async (
    _0x86d195,
    _0x1d4836,
    _0x462fa4,
    {
      from: _0x4c1764,
      l: _0x61b3a9,
      quoted: _0x3ec539,
      body: _0x196148,
      isCmd: _0x4cf0bd,
      command: _0x1d5197,
      args: _0x35965a,
      q: _0x4bb7f3,
      isGroup: _0x1142d1,
      sender: _0x2e61e1,
      senderNumber: _0x5b53bc,
      botNumber2: _0x457a11,
      botNumber: _0x4ed205,
      pushname: _0x213256,
      isMe: _0x9a6401,
      isOwner: _0x486939,
      groupMetadata: _0x5ee3ef,
      groupName: _0x7e0381,
      participants: _0x1dbd17,
      groupAdmins: _0x6bb5d5,
      isBotAdmins: _0x1072c3,
      isAdmins: _0x2e4780,
      reply: _0x26f5a7,
    }
  ) => {
    try {
      const _0x30b14d = {
        text: '\uD83C\uDF86',
        key: _0x1d4836.key,
      }
      const _0x27e778 = { react: _0x30b14d }
      await _0x86d195.sendMessage(_0x4c1764, _0x27e778)
      let _0x2700bb = _0x4bb7f3.split('+')
      new Maker()
        .Ephoto360('https://en.ephoto360.com/blue-neon-text-effect-117.html', [
          '' + _0x2700bb,
        ])
        .then(async (_0x1843e6) => {
          const _0x21b0d5 = { quoted: _0x1d4836 }
          await _0x86d195.sendMessage(
            _0x4c1764,
            {
              image: await getBuffer(_0x1843e6.imageUrl),
              caption: config.FOOTER,
            },
            _0x21b0d5
          )
          const _0x29e754 = {
            text: '\u2714',
            key: _0x1d4836.key,
          }
          const _0x132a65 = { react: _0x29e754 }
          await _0x86d195.sendMessage(_0x4c1764, _0x132a65)
        })
    } catch (_0x1290ee) {
      _0x26f5a7(errt), _0x61b3a9(_0x1290ee)
    }
  }
)
const _0x19ae04 = {}
_0x19ae04.pattern = 'plasma'
_0x19ae04.filename = __filename
cmd(
  _0x19ae04,
  async (
    _0x1cd626,
    _0x5d6843,
    _0x46d8b5,
    {
      from: _0x4f9dd7,
      l: _0x25d06a,
      quoted: _0x22fc0d,
      body: _0x646fa8,
      isCmd: _0xd5ceb8,
      command: _0x594cfc,
      args: _0x47eb28,
      q: _0x57f446,
      isGroup: _0x584848,
      sender: _0x1951c4,
      senderNumber: _0x5567fc,
      botNumber2: _0x5bebb9,
      botNumber: _0xe52c3d,
      pushname: _0x34042a,
      isMe: _0x3c801d,
      isOwner: _0x45a9ce,
      groupMetadata: _0x2b833a,
      groupName: _0x183075,
      participants: _0x3c6467,
      groupAdmins: _0x36733b,
      isBotAdmins: _0x5c3bf3,
      isAdmins: _0x34ee14,
      reply: _0x1bab7d,
    }
  ) => {
    try {
      const _0x47c2aa = {
        text: '\uD83C\uDF86',
        key: _0x5d6843.key,
      }
      const _0xa85e37 = { react: _0x47c2aa }
      await _0x1cd626.sendMessage(_0x4f9dd7, _0xa85e37)
      let _0x32b5fa = _0x57f446.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/plasma-text-effects-online-71.html',
          ['' + _0x32b5fa]
        )
        .then(async (_0x3ec4f3) => {
          const _0x34ecc3 = { quoted: _0x5d6843 }
          await _0x1cd626.sendMessage(
            _0x4f9dd7,
            {
              image: await getBuffer(_0x3ec4f3.imageUrl),
              caption: config.FOOTER,
            },
            _0x34ecc3
          )
          const _0xa1b108 = {
            text: '\u2714',
            key: _0x5d6843.key,
          }
          const _0x23a211 = { react: _0xa1b108 }
          await _0x1cd626.sendMessage(_0x4f9dd7, _0x23a211)
        })
    } catch (_0x1ff9da) {
      _0x1bab7d(errt), _0x25d06a(_0x1ff9da)
    }
  }
)
const _0x1b6d8a = {}
_0x1b6d8a.pattern = '1917'
_0x1b6d8a.filename = __filename
cmd(
  _0x1b6d8a,
  async (
    _0x4f2c63,
    _0x2f6394,
    _0x3fe590,
    {
      from: _0x126fb2,
      l: _0x1a5770,
      quoted: _0x4a46a8,
      body: _0xc0f5b5,
      isCmd: _0x2a22e5,
      command: _0x321060,
      args: _0x177b97,
      q: _0x44605a,
      isGroup: _0x3a2c99,
      sender: _0xddd0b5,
      senderNumber: _0x240358,
      botNumber2: _0x3d8821,
      botNumber: _0x557ed9,
      pushname: _0x34ef1b,
      isMe: _0x4d0072,
      isOwner: _0x2f77cb,
      groupMetadata: _0x27b16c,
      groupName: _0x140f6b,
      participants: _0x1ee7d1,
      groupAdmins: _0x5423d9,
      isBotAdmins: _0x58cd62,
      isAdmins: _0x153ada,
      reply: _0x3d5b18,
    }
  ) => {
    try {
      const _0xb0f362 = {
        text: '\uD83C\uDF86',
        key: _0x2f6394.key,
      }
      const _0x2c8800 = { react: _0xb0f362 }
      await _0x4f2c63.sendMessage(_0x126fb2, _0x2c8800)
      let _0xa1bae9 = _0x44605a.split('+')
      new Maker()
        .Ephoto360('https://en.ephoto360.com/1917-style-text-effect-523.html', [
          '' + _0xa1bae9,
        ])
        .then(async (_0x4431db) => {
          const _0x17edc6 = { quoted: _0x2f6394 }
          await _0x4f2c63.sendMessage(
            _0x126fb2,
            {
              image: await getBuffer(_0x4431db.imageUrl),
              caption: config.FOOTER,
            },
            _0x17edc6
          )
          const _0x3b53e3 = {
            text: '\u2714',
            key: _0x2f6394.key,
          }
          const _0x3fb96e = { react: _0x3b53e3 }
          await _0x4f2c63.sendMessage(_0x126fb2, _0x3fb96e)
        })
    } catch (_0x381afe) {
      _0x3d5b18(errt)
      _0x1a5770(_0x381afe)
    }
  }
)
const _0x5a740b = {}
_0x5a740b.pattern = 'moderngold'
_0x5a740b.filename = __filename
cmd(
  _0x5a740b,
  async (
    _0x19b6a9,
    _0x2591c7,
    _0x1f4bb1,
    {
      from: _0x195205,
      l: _0x2aa984,
      quoted: _0x2149af,
      body: _0x4f8424,
      isCmd: _0x153f1f,
      command: _0x4fe1f9,
      args: _0x57c466,
      q: _0x43db54,
      isGroup: _0x4b887a,
      sender: _0xfc49e6,
      senderNumber: _0x935763,
      botNumber2: _0x55cc22,
      botNumber: _0xee7de4,
      pushname: _0x3d6144,
      isMe: _0x326aef,
      isOwner: _0x3bbf3a,
      groupMetadata: _0x149420,
      groupName: _0x316711,
      participants: _0x16f95b,
      groupAdmins: _0x1b6fff,
      isBotAdmins: _0xbdf8f3,
      isAdmins: _0x3f29f7,
      reply: _0xee6931,
    }
  ) => {
    try {
      const _0x3c7f09 = {
        text: '\uD83C\uDF86',
        key: _0x2591c7.key,
      }
      const _0x25aae3 = { react: _0x3c7f09 }
      await _0x19b6a9.sendMessage(_0x195205, _0x25aae3)
      let _0x32bfea = _0x43db54.split('+')
      new Maker()
        .Ephoto360('https://en.ephoto360.com/modern-gold-157.html', [
          '' + _0x32bfea,
        ])
        .then(async (_0x345d68) => {
          const _0x226054 = { quoted: _0x2591c7 }
          await _0x19b6a9.sendMessage(
            _0x195205,
            {
              image: await getBuffer(_0x345d68.imageUrl),
              caption: config.FOOTER,
            },
            _0x226054
          )
          const _0x4f7068 = {
            text: '\u2714',
            key: _0x2591c7.key,
          }
          const _0x306f9f = { react: _0x4f7068 }
          await _0x19b6a9.sendMessage(_0x195205, _0x306f9f)
        })
    } catch (_0x5cd6ff) {
      _0xee6931(errt)
      _0x2aa984(_0x5cd6ff)
    }
  }
)
const _0x3a4c91 = {}
_0x3a4c91.pattern = 'metal'
_0x3a4c91.filename = __filename
cmd(
  _0x3a4c91,
  async (
    _0x211af6,
    _0x5dce5a,
    _0x190f64,
    {
      from: _0x1056ec,
      l: _0x238c71,
      quoted: _0x1c6006,
      body: _0x38f975,
      isCmd: _0x19e198,
      command: _0x276890,
      args: _0x4eb0aa,
      q: _0x5077d3,
      isGroup: _0x4b39b1,
      sender: _0x535459,
      senderNumber: _0x3c4beb,
      botNumber2: _0x397180,
      botNumber: _0x5c63b0,
      pushname: _0x2a995f,
      isMe: _0x308727,
      isOwner: _0x4d0cfc,
      groupMetadata: _0x26b72a,
      groupName: _0x2f1ac4,
      participants: _0x23fd0b,
      groupAdmins: _0x5f5ce5,
      isBotAdmins: _0x26f9b7,
      isAdmins: _0x2c86c0,
      reply: _0x361f93,
    }
  ) => {
    try {
      const _0x45f388 = {
        text: '\uD83C\uDF86',
        key: _0x5dce5a.key,
      }
      const _0xaf87be = { react: _0x45f388 }
      await _0x211af6.sendMessage(_0x1056ec, _0xaf87be)
      let _0x5d961b = _0x5077d3.split('+')
      new Maker()
        .Ephoto360('https://en.ephoto360.com/metal-logo-online-108.html', [
          '' + _0x5d961b,
        ])
        .then(async (_0x338584) => {
          const _0x4da39f = { quoted: _0x5dce5a }
          await _0x211af6.sendMessage(
            _0x1056ec,
            {
              image: await getBuffer(_0x338584.imageUrl),
              caption: config.FOOTER,
            },
            _0x4da39f
          )
          const _0x1d3be1 = {
            text: '\u2714',
            key: _0x5dce5a.key,
          }
          const _0x39d45e = { react: _0x1d3be1 }
          await _0x211af6.sendMessage(_0x1056ec, _0x39d45e)
        })
    } catch (_0x2cc6ba) {
      _0x361f93(errt)
      _0x238c71(_0x2cc6ba)
    }
  }
)
const _0x325d6c = {}
_0x325d6c.pattern = 'leaves'
_0x325d6c.filename = __filename
cmd(
  _0x325d6c,
  async (
    _0x4de5ee,
    _0x173692,
    _0x2e1cbc,
    {
      from: _0x81b7e6,
      l: _0x44e01c,
      quoted: _0x596b92,
      body: _0xf030c0,
      isCmd: _0x1a6761,
      command: _0x3625b0,
      args: _0x1aad8d,
      q: _0x370b0c,
      isGroup: _0x3e2bd8,
      sender: _0x11220f,
      senderNumber: _0x249571,
      botNumber2: _0x30b5a7,
      botNumber: _0x1abd8e,
      pushname: _0x190704,
      isMe: _0x1be016,
      isOwner: _0x13728e,
      groupMetadata: _0x5869d3,
      groupName: _0x3da126,
      participants: _0x31219f,
      groupAdmins: _0xdb5da8,
      isBotAdmins: _0x2c5c79,
      isAdmins: _0x150312,
      reply: _0x638c96,
    }
  ) => {
    try {
      const _0x194d09 = {
        text: '\uD83C\uDF86',
        key: _0x173692.key,
      }
      const _0x558110 = { react: _0x194d09 }
      await _0x4de5ee.sendMessage(_0x81b7e6, _0x558110)
      let _0x2977ac = _0x370b0c.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/write-letters-on-the-leaves-248.html',
          ['' + _0x2977ac]
        )
        .then(async (_0x454765) => {
          const _0x22a915 = { quoted: _0x173692 }
          await _0x4de5ee.sendMessage(
            _0x81b7e6,
            {
              image: await getBuffer(_0x454765.imageUrl),
              caption: config.FOOTER,
            },
            _0x22a915
          )
          const _0x526948 = {
            text: '\u2714',
            key: _0x173692.key,
          }
          const _0x4b75f3 = { react: _0x526948 }
          await _0x4de5ee.sendMessage(_0x81b7e6, _0x4b75f3)
        })
    } catch (_0x17757e) {
      _0x638c96(errt)
      _0x44e01c(_0x17757e)
    }
  }
)
const _0x377725 = {}
_0x377725.pattern = 'marvel'
_0x377725.filename = __filename
cmd(
  _0x377725,
  async (
    _0x44fea3,
    _0x2efd57,
    _0x27fab4,
    {
      from: _0xe15154,
      l: _0x1fddb9,
      quoted: _0x15e222,
      body: _0x40a194,
      isCmd: _0x5729b6,
      command: _0x4e67cb,
      args: _0x28ba4e,
      q: _0x1881a1,
      isGroup: _0x557a2e,
      sender: _0x1e1dba,
      senderNumber: _0xfdecc4,
      botNumber2: _0x45c0c2,
      botNumber: _0x1fc41e,
      pushname: _0x52dc0f,
      isMe: _0x50ea20,
      isOwner: _0x133cb8,
      groupMetadata: _0x138def,
      groupName: _0x387066,
      participants: _0x3ab4e1,
      groupAdmins: _0x93a626,
      isBotAdmins: _0x4d17de,
      isAdmins: _0x3bc89c,
      reply: _0x50e376,
    }
  ) => {
    try {
      const _0x3d05c1 = {
        text: '\uD83C\uDF86',
        key: _0x2efd57.key,
      }
      const _0x255780 = { react: _0x3d05c1 }
      await _0x44fea3.sendMessage(_0xe15154, _0x255780)
      let _0x5b01cf = _0x1881a1.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-marvel-style-logo-419.html',
          ['' + _0x5b01cf]
        )
        .then(async (_0x47ee40) => {
          const _0x11b9ae = { quoted: _0x2efd57 }
          await _0x44fea3.sendMessage(
            _0xe15154,
            {
              image: await getBuffer(_0x47ee40.imageUrl),
              caption: config.FOOTER,
            },
            _0x11b9ae
          )
          const _0x3164ae = {
            text: '\u2714',
            key: _0x2efd57.key,
          }
          const _0x2ddebd = { react: _0x3164ae }
          await _0x44fea3.sendMessage(_0xe15154, _0x2ddebd)
        })
    } catch (_0x84d0bf) {
      _0x50e376(errt)
      _0x1fddb9(_0x84d0bf)
    }
  }
)
const _0x5a5d12 = {}
_0x5a5d12.pattern = 'mountain'
_0x5a5d12.filename = __filename
cmd(
  _0x5a5d12,
  async (
    _0x11e5c1,
    _0x37c66d,
    _0x2ca920,
    {
      from: _0x559acd,
      l: _0xcc7c11,
      quoted: _0x19cb65,
      body: _0x2289d8,
      isCmd: _0x1eb8b9,
      command: _0x48dce5,
      args: _0x31570d,
      q: _0x1ef36c,
      isGroup: _0x3facc8,
      sender: _0xd957c4,
      senderNumber: _0x2126f7,
      botNumber2: _0x1a787f,
      botNumber: _0x10c5b4,
      pushname: _0x554869,
      isMe: _0x4c9994,
      isOwner: _0x4a7f8f,
      groupMetadata: _0xbaee7d,
      groupName: _0x242af4,
      participants: _0x445153,
      groupAdmins: _0x17ce25,
      isBotAdmins: _0x2387f4,
      isAdmins: _0x1243e7,
      reply: _0x492dd6,
    }
  ) => {
    try {
      const _0x19e7a8 = {
        text: '\uD83C\uDF86',
        key: _0x37c66d.key,
      }
      const _0x4b2776 = { react: _0x19e7a8 }
      await _0x11e5c1.sendMessage(_0x559acd, _0x4b2776)
      let _0x2dccc3 = _0x1ef36c.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/triangle-mountain-logo-black-white-566.html',
          ['' + _0x2dccc3]
        )
        .then(async (_0x521981) => {
          const _0x325a4f = { quoted: _0x37c66d }
          await _0x11e5c1.sendMessage(
            _0x559acd,
            {
              image: await getBuffer(_0x521981.imageUrl),
              caption: config.FOOTER,
            },
            _0x325a4f
          )
          const _0x40c83f = {
            text: '\u2714',
            key: _0x37c66d.key,
          }
          const _0x58e123 = { react: _0x40c83f }
          await _0x11e5c1.sendMessage(_0x559acd, _0x58e123)
        })
    } catch (_0x112ff7) {
      _0x492dd6(errt)
      _0xcc7c11(_0x112ff7)
    }
  }
)
const _0x249172 = {}
_0x249172.pattern = '3drubystone'
_0x249172.filename = __filename
cmd(
  _0x249172,
  async (
    _0x2221c9,
    _0x1dc28b,
    _0x2f5dd4,
    {
      from: _0x399999,
      l: _0x3f44e7,
      quoted: _0x779ce7,
      body: _0xa4b8a0,
      isCmd: _0x52235e,
      command: _0x359b85,
      args: _0x32dc3b,
      q: _0x144ab6,
      isGroup: _0x58fe26,
      sender: _0x42e0f6,
      senderNumber: _0x407f87,
      botNumber2: _0x178788,
      botNumber: _0x331691,
      pushname: _0x530dd2,
      isMe: _0x4affd6,
      isOwner: _0xc10244,
      groupMetadata: _0x3297e2,
      groupName: _0x447a92,
      participants: _0x116db1,
      groupAdmins: _0x35fbe9,
      isBotAdmins: _0x5ab45a,
      isAdmins: _0x4d0d74,
      reply: _0x2573a1,
    }
  ) => {
    try {
      const _0x85220f = {
        text: '\uD83C\uDF86',
        key: _0x1dc28b.key,
      }
      const _0x33d142 = { react: _0x85220f }
      await _0x2221c9.sendMessage(_0x399999, _0x33d142)
      let _0x2c6ecc = _0x144ab6.split('+')
      new Maker()
        .Ephoto360('https://en.ephoto360.com/3d-ruby-stone-text-281.html', [
          '' + _0x2c6ecc,
        ])
        .then(async (_0x13ab08) => {
          const _0x55771b = { quoted: _0x1dc28b }
          await _0x2221c9.sendMessage(
            _0x399999,
            {
              image: await getBuffer(_0x13ab08.imageUrl),
              caption: config.FOOTER,
            },
            _0x55771b
          )
          const _0x2aa067 = {
            text: '\u2714',
            key: _0x1dc28b.key,
          }
          const _0x2299b2 = { react: _0x2aa067 }
          await _0x2221c9.sendMessage(_0x399999, _0x2299b2)
        })
    } catch (_0x3e5ec5) {
      _0x2573a1(errt)
      _0x3f44e7(_0x3e5ec5)
    }
  }
)
const _0x1b682d = {}
_0x1b682d.pattern = 'purpletext'
_0x1b682d.filename = __filename
cmd(
  _0x1b682d,
  async (
    _0x3c4d77,
    _0x3564fe,
    _0x527e67,
    {
      from: _0x44ec52,
      l: _0x3339f8,
      quoted: _0x4b9b78,
      body: _0x425493,
      isCmd: _0x34dffa,
      command: _0x2bdb04,
      args: _0x3e4237,
      q: _0x7af9d8,
      isGroup: _0x5b2b7b,
      sender: _0x3206f0,
      senderNumber: _0x7efb,
      botNumber2: _0x4efa49,
      botNumber: _0x3e7926,
      pushname: _0x7af256,
      isMe: _0x210a1e,
      isOwner: _0x4e0f59,
      groupMetadata: _0x5bbc61,
      groupName: _0x1d040a,
      participants: _0xa09eaf,
      groupAdmins: _0x21cc98,
      isBotAdmins: _0x1c4c71,
      isAdmins: _0x121956,
      reply: _0x4b8963,
    }
  ) => {
    try {
      const _0x28e311 = {
        text: '\uD83C\uDF86',
        key: _0x3564fe.key,
      }
      const _0x2b5dfd = { react: _0x28e311 }
      await _0x3c4d77.sendMessage(_0x44ec52, _0x2b5dfd)
      let _0x2d900a = _0x7af9d8.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/purple-text-effect-online-100.html',
          ['' + _0x2d900a]
        )
        .then(async (_0x52df99) => {
          const _0x25ee74 = { quoted: _0x3564fe }
          await _0x3c4d77.sendMessage(
            _0x44ec52,
            {
              image: await getBuffer(_0x52df99.imageUrl),
              caption: config.FOOTER,
            },
            _0x25ee74
          )
          const _0x4a47d2 = {
            text: '\u2714',
            key: _0x3564fe.key,
          }
          const _0x568f6c = { react: _0x4a47d2 }
          await _0x3c4d77.sendMessage(_0x44ec52, _0x568f6c)
        })
    } catch (_0x41a3c7) {
      _0x4b8963(errt)
      _0x3339f8(_0x41a3c7)
    }
  }
)
const _0x3fd33a = {}
_0x3fd33a.pattern = 'watercolor'
_0x3fd33a.filename = __filename
cmd(
  _0x3fd33a,
  async (
    _0x14f4de,
    _0x53e3f3,
    _0x11a8ab,
    {
      from: _0x38df23,
      l: _0x53a335,
      quoted: _0x26e484,
      body: _0x295a5e,
      isCmd: _0x4f2d20,
      command: _0x556454,
      args: _0x308258,
      q: _0x13c8ba,
      isGroup: _0x65cc0e,
      sender: _0xedd990,
      senderNumber: _0x5ba70d,
      botNumber2: _0x11d9ea,
      botNumber: _0x2dfd52,
      pushname: _0x41449c,
      isMe: _0x973a80,
      isOwner: _0xba716,
      groupMetadata: _0x217f85,
      groupName: _0x5250cd,
      participants: _0x455c94,
      groupAdmins: _0x32a64c,
      isBotAdmins: _0x2b45d3,
      isAdmins: _0x28d9d5,
      reply: _0x2175c8,
    }
  ) => {
    try {
      const _0x240083 = {
        text: '\uD83C\uDF86',
        key: _0x53e3f3.key,
      }
      const _0x55a86c = { react: _0x240083 }
      await _0x14f4de.sendMessage(_0x38df23, _0x55a86c)
      let _0x55c7c5 = _0x13c8ba.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html',
          ['' + _0x55c7c5]
        )
        .then(async (_0x26cca2) => {
          const _0x1ef37f = { quoted: _0x53e3f3 }
          await _0x14f4de.sendMessage(
            _0x38df23,
            {
              image: await getBuffer(_0x26cca2.imageUrl),
              caption: config.FOOTER,
            },
            _0x1ef37f
          )
          const _0x4f9292 = {
            text: '\u2714',
            key: _0x53e3f3.key,
          }
          const _0x3854d5 = { react: _0x4f9292 }
          await _0x14f4de.sendMessage(_0x38df23, _0x3854d5)
        })
    } catch (_0x23e8e7) {
      _0x2175c8(errt)
      _0x53a335(_0x23e8e7)
    }
  }
)
const _0x18e3d7 = {}
_0x18e3d7.pattern = 'neonlight'
_0x18e3d7.filename = __filename
cmd(
  _0x18e3d7,
  async (
    _0x190505,
    _0x24b7f0,
    _0x211b75,
    {
      from: _0xf9b670,
      l: _0x1fb6b4,
      quoted: _0x4a1ecb,
      body: _0x14535d,
      isCmd: _0x5d7773,
      command: _0x4ac9b3,
      args: _0x312b87,
      q: _0x4bdc62,
      isGroup: _0x39e425,
      sender: _0x2dd0f7,
      senderNumber: _0xbc4f58,
      botNumber2: _0x2e3f9e,
      botNumber: _0x11dbcc,
      pushname: _0x4dbf2d,
      isMe: _0x2178bb,
      isOwner: _0x10e5a6,
      groupMetadata: _0x442f3b,
      groupName: _0x420dc7,
      participants: _0x4c0bac,
      groupAdmins: _0x596c5f,
      isBotAdmins: _0x3563df,
      isAdmins: _0x5d93a9,
      reply: _0x3e8562,
    }
  ) => {
    try {
      const _0x28e770 = {
        text: '\uD83C\uDF86',
        key: _0x24b7f0.key,
      }
      const _0x495ceb = { react: _0x28e770 }
      await _0x190505.sendMessage(_0xf9b670, _0x495ceb)
      let _0x3bece3 = _0x4bdc62.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html',
          ['' + _0x3bece3]
        )
        .then(async (_0x3a7d75) => {
          const _0x526fc5 = { quoted: _0x24b7f0 }
          await _0x190505.sendMessage(
            _0xf9b670,
            {
              image: await getBuffer(_0x3a7d75.imageUrl),
              caption: config.FOOTER,
            },
            _0x526fc5
          )
          const _0x5a3754 = {
            text: '\u2714',
            key: _0x24b7f0.key,
          }
          const _0x274e81 = { react: _0x5a3754 }
          await _0x190505.sendMessage(_0xf9b670, _0x274e81)
        })
    } catch (_0x58acfc) {
      _0x3e8562(errt)
      _0x1fb6b4(_0x58acfc)
    }
  }
)
const _0xe17ee1 = {}
_0xe17ee1.pattern = 'goldtext'
_0xe17ee1.filename = __filename
cmd(
  _0xe17ee1,
  async (
    _0x5edbb7,
    _0x117271,
    _0x9739dc,
    {
      from: _0x5e4b08,
      l: _0x267b6d,
      quoted: _0x2abad2,
      body: _0x93e433,
      isCmd: _0x1eaff4,
      command: _0x572626,
      args: _0x28e050,
      q: _0x22c4ec,
      isGroup: _0x34f974,
      sender: _0x27e393,
      senderNumber: _0x4a35be,
      botNumber2: _0x22684e,
      botNumber: _0x596f37,
      pushname: _0x3a3e53,
      isMe: _0x881136,
      isOwner: _0x9d0f89,
      groupMetadata: _0x1843ae,
      groupName: _0x5b2880,
      participants: _0x27085a,
      groupAdmins: _0x384c07,
      isBotAdmins: _0x43ff6d,
      isAdmins: _0x2679b6,
      reply: _0x598da4,
    }
  ) => {
    try {
      const _0x239ad2 = {
        text: '\uD83C\uDF86',
        key: _0x117271.key,
      }
      const _0x17df09 = { react: _0x239ad2 }
      await _0x5edbb7.sendMessage(_0x5e4b08, _0x17df09)
      let _0x25350b = _0x22c4ec.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/beautiful-gold-text-effect-122.html',
          ['' + _0x25350b]
        )
        .then(async (_0x18cec9) => {
          const _0x44d0bd = { quoted: _0x117271 }
          await _0x5edbb7.sendMessage(
            _0x5e4b08,
            {
              image: await getBuffer(_0x18cec9.imageUrl),
              caption: config.FOOTER,
            },
            _0x44d0bd
          )
          const _0x57c1d9 = {
            text: '\u2714',
            key: _0x117271.key,
          }
          const _0x493abf = { react: _0x57c1d9 }
          await _0x5edbb7.sendMessage(_0x5e4b08, _0x493abf)
        })
    } catch (_0x597ab9) {
      _0x598da4(errt)
      _0x267b6d(_0x597ab9)
    }
  }
)
const _0x444cad = {}
_0x444cad.pattern = 'bornpink'
_0x444cad.filename = __filename
cmd(
  _0x444cad,
  async (
    _0x216a51,
    _0x520576,
    _0x265e71,
    {
      from: _0x3d628d,
      l: _0x586d1a,
      quoted: _0x2ffea4,
      body: _0x4eef13,
      isCmd: _0x52ac1b,
      command: _0x19908c,
      args: _0x27bca3,
      q: _0x53f301,
      isGroup: _0x16e515,
      sender: _0x3c7c1e,
      senderNumber: _0x37c448,
      botNumber2: _0x51e622,
      botNumber: _0x590f66,
      pushname: _0x5d7272,
      isMe: _0x2b3fe2,
      isOwner: _0x42ecab,
      groupMetadata: _0x28bc65,
      groupName: _0x6826d6,
      participants: _0x206868,
      groupAdmins: _0x4ed81c,
      isBotAdmins: _0x388062,
      isAdmins: _0x569d6f,
      reply: _0x527cff,
    }
  ) => {
    try {
      const _0x3ef2d5 = {
        text: '\uD83C\uDF86',
        key: _0x520576.key,
      }
      const _0x10ece0 = { react: _0x3ef2d5 }
      await _0x216a51.sendMessage(_0x3d628d, _0x10ece0)
      let _0xc3e22 = _0x53f301.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-blackpink-s-born-pink-album-logo-online-779.html',
          ['' + _0xc3e22]
        )
        .then(async (_0x181e89) => {
          const _0x240bc1 = { quoted: _0x520576 }
          await _0x216a51.sendMessage(
            _0x3d628d,
            {
              image: await getBuffer(_0x181e89.imageUrl),
              caption: config.FOOTER,
            },
            VISHWA-MD
          )
          const _0xcfdeed = {
            text: '\u2714',
            key: _0x520576.key,
          }
          const _0x17b0a3 = { react: _0xcfdeed }
          await _0x216a51.sendMessage(_0x3d628d, _0x17b0a3)
        })
    } catch (_0x18dbef) {
      _0x527cff(errt)
      _0x586d1a(_0x18dbef)
    }
  }
)
const _0x2e2efb = {}
_0x2e2efb.pattern = 'bulb'
_0x2e2efb.filename = __filename
cmd(
  _0x2e2efb,
  async (
    _0x2fd813,
    _0x28652d,
    _0xbee743,
    {
      from: _0x48e0df,
      l: _0x116e2e,
      quoted: _0x2f956,
      body: _0x91ae9c,
      isCmd: _0x5a7d78,
      command: _0xeb4603,
      args: _0x5d4857,
      q: _0x3d0001,
      isGroup: _0x19b6c3,
      sender: _0x8907b7,
      senderNumber: _0x5a0af3,
      botNumber2: _0x2aba53,
      botNumber: _0x5dc798,
      pushname: _0x12c038,
      isMe: _0xd993d,
      isOwner: _0x457964,
      groupMetadata: _0x148ee0,
      groupName: _0x2a4213,
      participants: _0x5c4f98,
      groupAdmins: _0x16077c,
      isBotAdmins: _0x6f1a6c,
      isAdmins: _0x4da7d8,
      reply: _0x3e4678,
    }
  ) => {
    try {
      const _0x415de1 = {
        text: '\uD83C\uDF86',
        key: _0x28652d.key,
      }
      const _0x7b1944 = { react: _0x415de1 }
      await _0x2fd813.sendMessage(_0x48e0df, _0x7b1944)
      let _0xfc20b8 = _0x3d0001.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html',
          ['' + _0xfc20b8]
        )
        .then(async (_0x108912) => {
          const _0x30a287 = { quoted: _0x28652d }
          await _0x2fd813.sendMessage(
            _0x48e0df,
            {
              image: await getBuffer(_0x108912.imageUrl),
              caption: config.FOOTER,
            },
            VISHWA-MD
          )
          const _0x5ecb8a = {
            text: '\u2714',
            key: _0x28652d.key,
          }
          const _0x4e2592 = { react: _0x5ecb8a }
          await _0x2fd813.sendMessage(_0x48e0df, _0x4e2592)
        })
    } catch (_0x48d2e6) {
      _0x3e4678(errt)
      _0x116e2e(_0x48d2e6)
    }
  }
)
const _0x3adc4f = {}
_0x3adc4f.pattern = 'glittergold'
_0x3adc4f.filename = __filename
cmd(
  _0x3adc4f,
  async (
    _0x14b238,
    _0x4efa6c,
    _0xb72d89,
    {
      from: _0x49dcc1,
      l: _0x4b3169,
      quoted: _0x5788df,
      body: _0x54369d,
      isCmd: _0x21a9f7,
      command: _0xef7ec5,
      args: _0x5a1e0e,
      q: _0x10b5ec,
      isGroup: _0x15dbf2,
      sender: _0x4279bf,
      senderNumber: _0x5a6f71,
      botNumber2: _0x23822a,
      botNumber: _0x46eb87,
      pushname: _0x159811,
      isMe: _0x5cc2a8,
      isOwner: _0x11f345,
      groupMetadata: _0xfb22bc,
      groupName: _0xa171c,
      participants: _0x335759,
      groupAdmins: _0x286754,
      isBotAdmins: _0x4e8b73,
      isAdmins: _0x2a6920,
      reply: _0x2d7a0c,
    }
  ) => {
    try {
      const _0xf7a204 = {
        text: '\uD83C\uDF86',
        key: _0x4efa6c.key,
      }
      const _0x2e951f = { react: _0xf7a204 }
      await _0x14b238.sendMessage(_0x49dcc1, _0x2e951f)
      let _0x2a5496 = _0x10b5ec.split('+')
      new Maker()
        .Ephoto360('https://en.ephoto360.com/glitter-gold-98.html', [
          '' + _0x2a5496,
        ])
        .then(async (_0x455464) => {
          const _0x28be6a = { quoted: _0x4efa6c }
          await _0x14b238.sendMessage(
            _0x49dcc1,
            {
              image: await getBuffer(_0x455464.imageUrl),
              caption: config.FOOTER,
            },
           VISHWA-MD
          )
          const _0xdf8c1d = {
            text: '\u2714',
            key: _0x4efa6c.key,
          }
          const _0x2703fe = { react: _0xdf8c1d }
          await _0x14b238.sendMessage(_0x49dcc1, _0x2703fe)
        })
    } catch (_0x2edbd4) {
      _0x2d7a0c(errt)
      _0x4b3169(_0x2edbd4)
    }
  }
)
const _0x486ff2 = {}
_0x486ff2.pattern = 'airballoon'
_0x486ff2.filename = __filename
cmd(
  _0x486ff2,
  async (
    _0x23a271,
    _0x245953,
    _0x15bee3,
    {
      from: _0x4c4aaf,
      l: _0x1f5d60,
      quoted: _0x1ddce9,
      body: _0x2582d7,
      isCmd: _0x182faf,
      command: _0x4344a7,
      args: _0x4e4dbe,
      q: _0x525192,
      isGroup: _0x5dd5b1,
      sender: _0x1e8f4c,
      senderNumber: _0x10e568,
      botNumber2: _0x2543fa,
      botNumber: _0x147ac0,
      pushname: _0x381967,
      isMe: _0x154569,
      isOwner: _0x47ab14,
      groupMetadata: _0x4efaf5,
      groupName: _0x341fc2,
      participants: _0x1d9e1e,
      groupAdmins: _0x2dc85b,
      isBotAdmins: _0x4bc7b0,
      isAdmins: _0x2c6191,
      reply: _0x2fa3a3,
    }
  ) => {
    try {
      const _0x405b03 = {
        text: '\uD83C\uDF86',
        key: _0x245953.key,
      }
      const _0xecc9d9 = { react: _0x405b03 }
      await _0x23a271.sendMessage(_0x4c4aaf, _0xecc9d9)
      let _0x3c2064 = _0x525192.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html',
          ['' + _0x3c2064]
        )
        .then(async (_0x5bff19) => {
          const _0x13eb10 = { quoted: _0x245953 }
          await _0x23a271.sendMessage(
            _0x4c4aaf,
            {
              image: await getBuffer(_0x5bff19.imageUrl),
              caption: config.FOOTER,
            },
            _0x13eb10
          )
          const _0x3ca30e = {
            text: '\u2714',
            key: _0x245953.key,
          }
          const _0x5499a7 = { react: _0x3ca30e }
          await _0x23a271.sendMessage(_0x4c4aaf, _0x5499a7)
        })
    } catch (_0x1fea29) {
      _0x2fa3a3(errt)
      _0x1f5d60(_0x1fea29)
    }
  }
)
const _0x5a7cb0 = {}
_0x5a7cb0.pattern = 'comic'
_0x5a7cb0.filename = __filename
cmd(
  _0x5a7cb0,
  async (
    _0x5e6f67,
    _0x188b7e,
    _0x306b4c,
    {
      from: _0x4680dc,
      l: _0x2765b1,
      quoted: _0x48f2d4,
      body: _0x5af94c,
      isCmd: _0x538b70,
      command: _0x5d0533,
      args: _0x2be01e,
      q: _0x2acde0,
      isGroup: _0x3a00cd,
      sender: _0x15be7a,
      senderNumber: _0x28aa16,
      botNumber2: _0x18205f,
      botNumber: _0x4fabb3,
      pushname: _0x290581,
      isMe: _0xe013cc,
      isOwner: _0x177496,
      groupMetadata: _0x58d06c,
      groupName: _0x5885ef,
      participants: _0x5b8594,
      groupAdmins: _0x53f97d,
      isBotAdmins: _0xa1ddc8,
      isAdmins: _0x37b138,
      reply: _0x273fa7,
    }
  ) => {
    try {
      const _0x3aa3c0 = {
        text: '\uD83C\uDF86',
        key: _0x188b7e.key,
      }
      const _0x1ba353 = { react: _0x3aa3c0 }
      await _0x5e6f67.sendMessage(_0x4680dc, _0x1ba353)
      let _0x2c790b = _0x2acde0.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html',
          ['' + _0x2c790b]
        )
        .then(async (_0x52e360) => {
          const _0x59f1e5 = { quoted: _0x188b7e }
          await _0x5e6f67.sendMessage(
            _0x4680dc,
            {
              image: await getBuffer(_0x52e360.imageUrl),
              caption: config.FOOTER,
            },
            _0x59f1e5
          )
          const _0x5a0b9f = {
            text: '\u2714',
            key: _0x188b7e.key,
          }
          const _0x590d7a = { react: _0x5a0b9f }
          await _0x5e6f67.sendMessage(_0x4680dc, _0x590d7a)
        })
    } catch (_0x213019) {
      _0x273fa7(errt)
      _0x2765b1(_0x213019)
    }
  }
)
const _0x431acd = {}
_0x431acd.pattern = 'zombie3d'
_0x431acd.filename = __filename
cmd(
  _0x431acd,
  async (
    _0x152ace,
    _0x17bcfe,
    _0x5c1363,
    {
      from: _0x2a4225,
      l: _0x5d9f0c,
      quoted: _0x95d167,
      body: _0x42bf1e,
      isCmd: _0x2de8f5,
      command: _0x1d1325,
      args: _0x41e051,
      q: _0x7f2eaa,
      isGroup: _0x3a246a,
      sender: _0x467483,
      senderNumber: _0x14c8cf,
      botNumber2: _0x50913a,
      botNumber: _0x2d2f23,
      pushname: _0xc58396,
      isMe: _0x54a717,
      isOwner: _0x44dd80,
      groupMetadata: _0x31597b,
      groupName: _0x3ac26d,
      participants: _0x447d5d,
      groupAdmins: _0x25357c,
      isBotAdmins: _0x4067e7,
      isAdmins: _0x2b0741,
      reply: _0xf9ccc5,
    }
  ) => {
    try {
      const _0x27b65d = {
        text: '\uD83C\uDF86',
        key: _0x17bcfe.key,
      }
      const _0x4f3952 = { react: _0x27b65d }
      await _0x152ace.sendMessage(_0x2a4225, _0x4f3952)
      let _0x2527dd = _0x7f2eaa.split('+')
      new Maker()
        .Ephoto360('https://en.ephoto360.com/zombie-3d-text-effect-143.html', [
          '' + _0x2527dd,
        ])
        .then(async (_0x350bc1) => {
          const _0x20c63f = { quoted: _0x17bcfe }
          await _0x152ace.sendMessage(
            _0x2a4225,
            {
              image: await getBuffer(_0x350bc1.imageUrl),
              caption: config.FOOTER,
            },
            _0x20c63f
          )
          const _0x5f0e47 = {
            text: '\u2714',
            key: _0x17bcfe.key,
          }
          const _0xce4373 = { react: _0x5f0e47 }
          await _0x152ace.sendMessage(_0x2a4225, _0xce4373)
        })
    } catch (_0x15800a) {
      _0xf9ccc5(errt)
      _0x5d9f0c(_0x15800a)
    }
  }
)
const _0x4b1828 = {}
_0x4b1828.pattern = 'blackpink'
_0x4b1828.filename = __filename
cmd(
  _0x4b1828,
  async (
    _0x4dd0a6,
    _0x458a5d,
    _0xc2ce68,
    {
      from: _0x5e5f11,
      l: _0x5031d6,
      quoted: _0xdde0ab,
      body: _0x28e238,
      isCmd: _0x1b974d,
      command: _0x119328,
      args: _0x32bdf7,
      q: _0x5bdfd5,
      isGroup: _0x4d263f,
      sender: _0x4e5d9e,
      senderNumber: _0x1ce82c,
      botNumber2: _0x53f98b,
      botNumber: _0x1c9e9f,
      pushname: _0x1c8bba,
      isMe: _0x50ee7a,
      isOwner: _0x4fc2b9,
      groupMetadata: _0x22e397,
      groupName: _0x5150bb,
      participants: _0x4a6f8e,
      groupAdmins: _0x220769,
      isBotAdmins: _0x1b4b64,
      isAdmins: _0x24ded0,
      reply: _0x49720f,
    }
  ) => {
    try {
      const _0x59e534 = {
        text: '\uD83C\uDF86',
        key: _0x458a5d.key,
      }
      const _0x45f2ca = { react: _0x59e534 }
      await _0x4dd0a6.sendMessage(_0x5e5f11, _0x45f2ca)
      let _0x407ede = _0x5bdfd5.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html',
          ['' + _0x407ede]
        )
        .then(async (_0xd4c888) => {
          const _0x4d2880 = { quoted: _0x458a5d }
          await _0x4dd0a6.sendMessage(
            _0x5e5f11,
            {
              image: await getBuffer(_0xd4c888.imageUrl),
              caption: config.FOOTER,
            },
            VISHWA-MD
          )
          const _0x1856bb = {
            text: '\u2714',
            key: _0x458a5d.key,
          }
          const _0x5bf4a4 = { react: _0x1856bb }
          await _0x4dd0a6.sendMessage(_0x5e5f11, _0x5bf4a4)
        })
    } catch (_0x101437) {
      _0x49720f(errt)
      _0x5031d6(_0x101437)
    }
  }
)
const _0xe996b = {}
_0xe996b.pattern = 'deadpool'
_0xe996b.filename = __filename
cmd(
  _0xe996b,
  async (
    _0x2bd32e,
    _0x39d78c,
    _0x342a24,
    {
      from: _0x54b911,
      l: _0x338ef9,
      quoted: _0x5a6f0a,
      body: _0x1767ec,
      isCmd: _0x127c96,
      command: _0x57fc84,
      args: _0x3a70a2,
      q: _0x3cde8c,
      isGroup: _0x2d0039,
      sender: _0x4ec279,
      senderNumber: _0x2561e0,
      botNumber2: _0xd2179f,
      botNumber: _0x8f6b8e,
      pushname: _0x4f3cea,
      isMe: _0x2ab5f3,
      isOwner: _0x31d00a,
      groupMetadata: _0x405d28,
      groupName: _0x5ae07d,
      participants: _0x275804,
      groupAdmins: _0x29e35f,
      isBotAdmins: _0x4320e7,
      isAdmins: _0x2dfe8a,
      reply: _0x2fa714,
    }
  ) => {
    try {
      const _0x302283 = {
        text: '\uD83C\uDF86',
        key: _0x39d78c.key,
      }
      const _0x7d66ce = { react: _0x302283 }
      await _0x2bd32e.sendMessage(_0x54b911, _0x7d66ce)
      let _0x5d3a32 = _0x3cde8c.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-text-effects-in-the-style-of-the-deadpool-logo-818.html',
          ['' + _0x5d3a32]
        )
        .then(async (_0x3c9d72) => {
          const _0x46be01 = { quoted: _0x39d78c }
          await _0x2bd32e.sendMessage(
            _0x54b911,
            {
              image: await getBuffer(_0x3c9d72.imageUrl),
              caption: config.FOOTER,
            },
            _0x46be01
          )
          const _0x2bac8a = {
            text: '\u2714',
            key: _0x39d78c.key,
          }
          const _0x3f692b = { react: _0x2bac8a }
          await _0x2bd32e.sendMessage(_0x54b911, _0x3f692b)
        })
    } catch (_0x17cca7) {
      _0x2fa714(errt)
      _0x338ef9(_0x17cca7)
    }
  }
)
const _0x111b4f = {}
_0x111b4f.pattern = 'wolf'
_0x111b4f.filename = __filename
cmd(
  _0x111b4f,
  async (
    _0x4b9587,
    _0x12d154,
    _0x197bff,
    {
      from: _0x140ca3,
      l: _0x55ed8a,
      quoted: _0x157c89,
      body: _0x198118,
      isCmd: _0x5c23ac,
      command: _0x5630af,
      args: _0x3deb5a,
      q: _0x26f4ce,
      isGroup: _0x50df6d,
      sender: _0xdd2bf9,
      senderNumber: _0x3fef0c,
      botNumber2: _0x3e7277,
      botNumber: _0x50fef0,
      pushname: _0x5cc703,
      isMe: _0x44f892,
      isOwner: _0x3c801e,
      groupMetadata: _0xe378f2,
      groupName: _0x1df0a9,
      participants: _0x3e03ef,
      groupAdmins: _0x4af96e,
      isBotAdmins: _0x13660b,
      isAdmins: _0x478bcc,
      reply: _0x2d01cc,
    }
  ) => {
    try {
      const _0x31e5d8 = {
        text: '\uD83C\uDF86',
        key: _0x12d154.key,
      }
      const _0x4ae803 = { react: _0x31e5d8 }
      await _0x4b9587.sendMessage(_0x140ca3, _0x4ae803)
      let _0x2fd9ed = _0x26f4ce.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-logo-avatar-wolf-galaxy-online-366.html',
          ['' + _0x2fd9ed]
        )
        .then(async (_0x1ddcca) => {
          const _0x42de46 = { quoted: _0x12d154 }
          await _0x4b9587.sendMessage(
            _0x140ca3,
            {
              image: await getBuffer(_0x1ddcca.imageUrl),
              caption: config.FOOTER,
            },
            _0x42de46
          )
          const _0x57cf00 = {
            text: '\u2714',
            key: _0x12d154.key,
          }
          const _0x597c02 = { react: _0x57cf00 }
          await _0x4b9587.sendMessage(_0x140ca3, _0x597c02)
        })
    } catch (_0x46c543) {
      _0x2d01cc(errt)
      _0x55ed8a(_0x46c543)
    }
  }
)
const _0x291c39 = {}
_0x291c39.pattern = '3dwooden'
_0x291c39.filename = __filename
cmd(
  _0x291c39,
  async (
    _0x5bb828,
    _0x41dde3,
    _0x5b3bf0,
    {
      from: _0x23d311,
      l: _0x37e822,
      quoted: _0xb84d6,
      body: _0x4069b8,
      isCmd: _0x581be3,
      command: _0x1bd1e8,
      args: _0x4399c1,
      q: _0x2e6ac8,
      isGroup: _0x269cbd,
      sender: _0x443a8c,
      senderNumber: _0x3b553d,
      botNumber2: _0x5b0d40,
      botNumber: _0x3126e0,
      pushname: _0x1295f0,
      isMe: _0x4a203f,
      isOwner: _0x204bd3,
      groupMetadata: _0x28baf5,
      groupName: _0x51b069,
      participants: _0x4d81b8,
      groupAdmins: _0x629294,
      isBotAdmins: _0xe7c243,
      isAdmins: _0x372495,
      reply: _0x349c29,
    }
  ) => {
    try {
      const _0xd4473b = {
        text: '\uD83C\uDF86',
        key: _0x41dde3.key,
      }
      const _0x243f9c = { react: _0xd4473b }
      await _0x5bb828.sendMessage(_0x23d311, _0x243f9c)
      let _0x41b780 = _0x2e6ac8.split('+')
      new Maker()
        .Ephoto360('https://en.ephoto360.com/logo-viettel-156.html', [
          '' + _0x41b780,
        ])
        .then(async (_0x499578) => {
          const _0x2ae794 = { quoted: _0x41dde3 }
          await _0x5bb828.sendMessage(
            _0x23d311,
            {
              image: await getBuffer(_0x499578.imageUrl),
              caption: config.FOOTER,
            },
            _0x2ae794
          )
          const _0x37fc1b = {
            text: '\u2714',
            key: _0x41dde3.key,
          }
          const _0x1a2cbe = { react: _0x37fc1b }
          await _0x5bb828.sendMessage(_0x23d311, _0x1a2cbe)
        })
    } catch (_0xc1dc33) {
      _0x349c29(errt)
      _0x37e822(_0xc1dc33)
    }
  }
)
const _0x26b773 = {}
_0x26b773.pattern = 'banner'
_0x26b773.alias = ['ytbanner', 'cover', 'channelbanner']
_0x26b773.desc = desc2
_0x26b773.category = 'logo'
_0x26b773.use = '.banner VajiraTech+yt'
_0x26b773.filename = __filename
cmd(
  _0x26b773,
  async (
    _0x4a4925,
    _0x50b4bb,
    _0xf1cf57,
    {
      from: _0x22a53b,
      l: _0xe1bf5c,
      quoted: _0x1bcdad,
      body: _0x1ec541,
      isCmd: _0x54225e,
      command: _0x1ed124,
      args: _0x52d520,
      q: _0x19ee57,
      isGroup: _0x191884,
      sender: _0x4d278d,
      senderNumber: _0x70bd4a,
      botNumber2: _0x2e7609,
      botNumber: _0x5ec1e2,
      pushname: _0x1e7df1,
      isMe: _0x588c89,
      isOwner: _0x21044c,
      groupMetadata: _0x4085e9,
      groupName: _0x376714,
      participants: _0x1a4f7d,
      groupAdmins: _0x4454ad,
      isBotAdmins: _0x4df067,
      isAdmins: _0x2e7bd6,
      reply: _0x25dae0,
    }
  ) => {
    try {
      const _0x5057c4 = {
        text: '\uD83C\uDF86',
        key: _0x50b4bb.key,
      }
      const _0x3c5144 = { react: _0x5057c4 }
      await _0x4a4925.sendMessage(_0x22a53b, _0x3c5144)
      if (!_0x19ee57.includes('+')) {
        return await _0x25dae0(imgmsg2)
      }
      let [_0x34f37d, _0x3cbbd6] = _0x19ee57.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html',
          ['' + _0x34f37d, '' + _0x3cbbd6]
        )
        .then(async (_0x409b40) => {
          const _0x4c74f4 = { quoted: _0x50b4bb }
          await _0x4a4925.sendMessage(
            _0x22a53b,
            {
              image: await getBuffer(_0x409b40.imageUrl),
              caption: config.FOOTER,
            },
            _0x4c74f4
          )
          const _0x27ab08 = {
            text: '\u2714',
            key: _0x50b4bb.key,
          }
          const _0x205c4a = { react: _0x27ab08 }
          await _0x4a4925.sendMessage(_0x22a53b, _0x205c4a)
        })
    } catch (_0x33868e) {
      _0x25dae0(errt)
      _0xe1bf5c(_0x33868e)
    }
  }
)
const _0x2b46a9 = {}
_0x2b46a9.pattern = 'banner2'
_0x2b46a9.alias = ['ytbanner2', 'cover2', 'channelbanner2']
_0x2b46a9.desc = desc2
_0x2b46a9.category = 'logo'
_0x2b46a9.use = '.banner2 VajiraTech+yt'
_0x2b46a9.filename = __filename
cmd(
  _0x2b46a9,
  async (
    _0x3fa3c7,
    _0x2ac478,
    _0x43d18b,
    {
      from: _0x4b7c58,
      l: _0x22f622,
      quoted: _0x398c24,
      body: _0x5a67d6,
      isCmd: _0x40d203,
      command: _0x128671,
      args: _0x6b3f5d,
      q: _0x432bed,
      isGroup: _0x505a7b,
      sender: _0x4f4914,
      senderNumber: _0x17b1bf,
      botNumber2: _0x5ae595,
      botNumber: _0x260c57,
      pushname: _0x10863a,
      isMe: _0x3b96f4,
      isOwner: _0xcebae1,
      groupMetadata: _0x4afd7e,
      groupName: _0xe59b5c,
      participants: _0x35956a,
      groupAdmins: _0xc85ef,
      isBotAdmins: _0x3c796c,
      isAdmins: _0xf48c82,
      reply: _0xedd5cb,
    }
  ) => {
    try {
      const _0x51e926 = {
        text: '\uD83C\uDF86',
        key: _0x2ac478.key,
      }
      const _0x2a7ff0 = { react: _0x51e926 }
      await _0x3fa3c7.sendMessage(_0x4b7c58, _0x2a7ff0)
      if (!_0x432bed.includes('+')) {
        return await _0xedd5cb(imgmsg3)
      }
      let [_0x36d45e, _0x5b8d22] = _0x432bed.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html',
          ['' + _0x36d45e, '' + _0x5b8d22]
        )
        .then(async (_0x5b1ba6) => {
          const _0x3bd2ef = { quoted: _0x2ac478 }
          await _0x3fa3c7.sendMessage(
            _0x4b7c58,
            {
              image: await getBuffer(_0x5b1ba6.imageUrl),
              caption: config.FOOTER,
            },
            _0x3bd2ef
          )
          const _0x15da87 = {
            text: '\u2714',
            key: _0x2ac478.key,
          }
          const _0x43f384 = { react: _0x15da87 }
          await _0x3fa3c7.sendMessage(_0x4b7c58, _0x43f384)
        })
    } catch (_0x211938) {
      _0xedd5cb(errt)
      _0x22f622(_0x211938)
    }
  }
)
const _0x2c3f85 = {}
_0x2c3f85.pattern = 'banner3'
_0x2c3f85.alias = ['ytbanner3', 'cover3', 'channelbanner3']
_0x2c3f85.desc = desc2
_0x2c3f85.category = 'logo'
_0x2c3f85.use = '.banner3 VajiraTech+yt'
_0x2c3f85.filename = __filename
cmd(
  _0x2c3f85,
  async (
    _0x2ad20c,
    _0x251755,
    _0x404382,
    {
      from: _0x322347,
      l: _0x34525c,
      quoted: _0x186fa9,
      body: _0x487957,
      isCmd: _0x25ce0d,
      command: _0x1e4ec9,
      args: _0x205b84,
      q: _0x5e8a42,
      isGroup: _0x23c80f,
      sender: _0xd34d76,
      senderNumber: _0x13d88c,
      botNumber2: _0x55acac,
      botNumber: _0x100fd8,
      pushname: _0x534afc,
      isMe: _0x14f317,
      isOwner: _0x12cabc,
      groupMetadata: _0x2f969b,
      groupName: _0x2dc03b,
      participants: _0x1a24b3,
      groupAdmins: _0x55b693,
      isBotAdmins: _0x5ec593,
      isAdmins: _0x436435,
      reply: _0x46f883,
    }
  ) => {
    try {
      const _0x3ff230 = {
        text: '\uD83C\uDF86',
        key: _0x251755.key,
      }
      const _0x40ac86 = { react: _0x3ff230 }
      await _0x2ad20c.sendMessage(_0x322347, _0x40ac86)
      if (!_0x5e8a42.includes('+')) {
        return await _0x46f883(imgmsg4)
      }
      let [_0x2838f6, _0x38ac3e] = _0x5e8a42.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-a-youtube-banner-game-of-pubg-cool-402.html',
          ['' + _0x2838f6, '' + _0x38ac3e]
        )
        .then(async (_0x4502f6) => {
          const _0x34c1f2 = { quoted: _0x251755 }
          await _0x2ad20c.sendMessage(
            _0x322347,
            {
              image: await getBuffer(_0x4502f6.imageUrl),
              caption: config.FOOTER,
            },
            _0x34c1f2
          )
          const _0x503937 = {
            text: '\u2714',
            key: _0x251755.key,
          }
          const _0x857a0c = { react: _0x503937 }
          await _0x2ad20c.sendMessage(_0x322347, _0x857a0c)
        })
    } catch (_0x1d264a) {
      _0x46f883(errt)
      _0x34525c(_0x1d264a)
    }
  }
)
const _0x265718 = {}
_0x265718.pattern = 'banner4'
_0x265718.alias = ['ytbanner4', 'cover4', 'channelbanner4']
_0x265718.desc = desc2
_0x265718.category = 'logo'
_0x265718.use = '.banner4 VajiraTech+yt'
_0x265718.filename = __filename
cmd(
  _0x265718,
  async (
    _0x3d3c5b,
    _0x27e0d9,
    _0x1b0199,
    {
      from: _0x16ac8e,
      l: _0x545d75,
      quoted: _0x2b7d7e,
      body: _0x29fa38,
      isCmd: _0x2a808f,
      command: _0x1e2071,
      args: _0x18acfe,
      q: _0xccd6e0,
      isGroup: _0xb0d16e,
      sender: _0x293733,
      senderNumber: _0x5c4df5,
      botNumber2: _0x47e1f8,
      botNumber: _0x342eb8,
      pushname: _0x2a1b03,
      isMe: _0x208325,
      isOwner: _0x37b83e,
      groupMetadata: _0x315e1f,
      groupName: _0x2c6ead,
      participants: _0x29fe77,
      groupAdmins: _0x4eea47,
      isBotAdmins: _0x20281c,
      isAdmins: _0x1d8cd4,
      reply: _0x4db390,
    }
  ) => {
    try {
      const _0x2b09b9 = {
        text: '\uD83C\uDF86',
        key: _0x27e0d9.key,
      }
      const _0x2d252e = { react: _0x2b09b9 }
      await _0x3d3c5b.sendMessage(_0x16ac8e, _0x2d252e)
      if (!_0xccd6e0.includes('+')) {
        return await _0x4db390(imgmsg5)
      }
      let [_0x5bc7a9, _0x48bb17] = _0xccd6e0.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-call-of-duty-warzone-youtube-banner-online-548.html',
          ['' + _0x5bc7a9, '' + _0x48bb17]
        )
        .then(async (_0x40c08a) => {
          const _0x424641 = { quoted: _0x27e0d9 }
          await _0x3d3c5b.sendMessage(
            _0x16ac8e,
            {
              image: await getBuffer(_0x40c08a.imageUrl),
              caption: config.FOOTER,
            },
            _0x424641
          )
          const _0x3b2086 = {
            text: '\u2714',
            key: _0x27e0d9.key,
          }
          const _0x275662 = { react: _0x3b2086 }
          await _0x3d3c5b.sendMessage(_0x16ac8e, _0x275662)
        })
    } catch (_0x1991e9) {
      _0x4db390(errt)
      _0x545d75(_0x1991e9)
    }
  }
)
const _0x4dabea = {}
_0x4dabea.pattern = 'banner5'
_0x4dabea.alias = ['ytbanner5', 'cover5', 'channelbanner5']
_0x4dabea.desc = desc2
_0x4dabea.category = 'logo'
_0x4dabea.use = '.banner5 VajiraTech+yt'
_0x4dabea.filename = __filename
cmd(
  _0x4dabea,
  async (
    _0x10b7ee,
    _0x4b3c03,
    _0x14aaed,
    {
      from: _0x2861be,
      l: _0x35b8b9,
      quoted: _0x1232b4,
      body: _0x4aa4b9,
      isCmd: _0x42c33a,
      command: _0x13d625,
      args: _0xb480be,
      q: _0x1be392,
      isGroup: _0x318cd6,
      sender: _0x4c95ec,
      senderNumber: _0x5870cd,
      botNumber2: _0x19cc0b,
      botNumber: _0x58d7a3,
      pushname: _0x15a54c,
      isMe: _0x5809b4,
      isOwner: _0x5db9b5,
      groupMetadata: _0xe75692,
      groupName: _0x54080a,
      participants: _0x5cd9ab,
      groupAdmins: _0x1c9844,
      isBotAdmins: _0x2b6e30,
      isAdmins: _0x48e497,
      reply: _0x3e9118,
    }
  ) => {
    try {
      const _0x273188 = {
        text: '\uD83C\uDF86',
        key: _0x4b3c03.key,
      }
      const _0x209365 = { react: _0x273188 }
      await _0x10b7ee.sendMessage(_0x2861be, _0x209365)
      if (!_0x1be392.includes('+')) {
        return await _0x3e9118(imgmsg6)
      }
      let [_0x47caeb, _0x37fbd6] = _0x1be392.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-banner-youtube-game-apex-legend-online-406.html',
          ['' + _0x47caeb, '' + _0x37fbd6]
        )
        .then(async (_0x57f875) => {
          const _0x5fefdc = { quoted: _0x4b3c03 }
          await _0x10b7ee.sendMessage(
            _0x2861be,
            {
              image: await getBuffer(_0x57f875.imageUrl),
              caption: config.FOOTER,
            },
            _0x5fefdc
          )
          const _0x238646 = {
            text: '\u2714',
            key: _0x4b3c03.key,
          }
          const _0x871bb6 = { react: _0x238646 }
          await _0x10b7ee.sendMessage(_0x2861be, _0x871bb6)
        })
    } catch (_0x45ed22) {
      _0x3e9118(errt)
      _0x35b8b9(_0x45ed22)
    }
  }
)
