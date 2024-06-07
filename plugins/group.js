const config = require('../settings'),
  os = require('os'),
  fs = require('fs'),
  moment = require('moment-timezone'),
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
  {
    default: makeWASocket,
    useMultiFileAuthState,
    WA_DEFAULT_EPHEMERAL,
    jidNormalizedUser,
    proto,
    getDevice,
    generateWAMessageFromContent,
    fetchLatestBaileysVersion,
    makeInMemoryStore,
    getContentType,
    generateForwardMessageContent,
    downloadContentFromMessage,
    jidDecode,
  } = require('@whiskeysockets/baileys')
var tesadtag = ''
if (config.LANG === 'SI') {
  tesadtag = '*මට tag කිරීමට text එකක් දෙන්න. !*'
} else {
  tesadtag = '*Give me text to tag !*'
}
var descg = ''
if (config.LANG === 'SI') {
  descg = 'එය කණ්ඩායමේ සියලුම සාමාජිකයින් tag කරයි.'
} else {
  descg = 'It tag all members in group.'
}
var ONLGROUP = ''
if (config.LANG === 'SI') {
  ONLGROUP = '*මෙය group නොවේ !*'
} else {
  ONLGROUP = '*This is not a group !*'
}
var ADMIN = ''
if (config.LANG === 'SI') {
  ADMIN = 'ඔබ admin නොවේ !'
} else {
  ADMIN = 'You are not an admin !'
}
var tmsg = ''
if (config.LANG === 'SI') {
  tmsg = 'එය Bot link ලබා දෙයි.'
} else {
  tmsg = 'It gives bot link.'
}
var imgmsg = ''
if (config.LANG === 'SI') {
  imgmsg = 'මෙලෙස enable/disable value, උදා:- ${prefix}ephemeral enable.'
} else {
  imgmsg =
    'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
}
var BOTOW = ''
if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
} else {
  BOTOW = "*You are not bot's owner or moderator !*"
}
const _0x4f5d2b = {}
_0x4f5d2b.pattern = 'kickall'
_0x4f5d2b.react = '\uD83D\uDD16'
_0x4f5d2b.desc = 'To kick all members in one time'
_0x4f5d2b.category = 'group'
_0x4f5d2b.use = '.kickall'
_0x4f5d2b.filename = __filename
cmd(
  _0x4f5d2b,
  async (
    _0x2ecbab,
    _0x3d51ba,
    _0x23be37,
    {
      from: _0x1d5833,
      prefix: _0x5ab678,
      l: _0x3ee97f,
      quoted: _0x337f3d,
      body: _0x34e95e,
      isCmd: _0x41d5cb,
      command: _0x9e9b0d,
      args: _0x2bc6d8,
      q: _0x4275db,
      isGroup: _0x4bf5d0,
      sender: _0x234871,
      senderNumber: _0x26c933,
      botNumber2: _0x56558b,
      botNumber: _0xd1b8cb,
      pushname: _0x59a381,
      isMe: _0x32e88b,
      isOwner: _0x339503,
      groupMetadata: _0x2f7314,
      groupName: _0x4f971f,
      participants: _0xc3d95a,
      groupAdmins: _0x1a38f8,
      isBotAdmins: _0x3b4b69,
      isAdmins: _0x5f1f82,
      reply: _0x3aede4,
    }
  ) => {
    try {
      if (!_0x4bf5d0) {
        return _0x3aede4(ONLGROUP)
      }
      if (!_0x5f1f82) {
        return _0x3aede4(ADMIN)
      }
      for (let _0x38778e of _0xc3d95a) {
        await sleep(1000)
        if (_0x38778e.id == _0xd1b8cb + '@s.whatsapp.net') {
          return
        }
        if (_0x38778e.id == owner + '@s.whatsapp.net') {
          return
        }
        await _0x2ecbab.groupParticipantsUpdate(
          _0x1d5833,
          [_0x38778e.id],
          'remove'
        )
        await _0x2ecbab.sendText(
          _0x1d5833,
          '*' + _0x38778e.id.split('@')[0] + ' Kick out !!!*'
        )
      }
      const _0x518820 = {
        text: '\u2705',
        key: _0x3d51ba.key,
      }
      const _0x1b9f35 = { react: _0x518820 }
      await _0x2ecbab.sendMessage(_0x1d5833, _0x1b9f35)
    } catch (_0x33763a) {
      _0x3aede4('*Error !!*')
      _0x3ee97f(_0x33763a)
    }
  }
)
const _0x3686cd = {}
_0x3686cd.pattern = 'alljid'
_0x3686cd.react = '\uD83D\uDD16'
_0x3686cd.desc = 'To take all members jid'
_0x3686cd.category = 'group'
_0x3686cd.use = '.alljid'
_0x3686cd.filename = __filename
cmd(
  _0x3686cd,
  async (
    _0x328cc7,
    _0x23576c,
    _0x4d457c,
    {
      from: _0x28c36f,
      prefix: _0x5bdbb2,
      l: _0x823237,
      quoted: _0x287b44,
      body: _0x20bdb6,
      isCmd: _0x5700cc,
      command: _0x3e4b3d,
      args: _0x3331fe,
      q: _0xb1009b,
      isGroup: _0x3b9eb1,
      sender: _0x315d23,
      senderNumber: _0xbd359f,
      botNumber2: _0x1ff6b5,
      botNumber: _0x4740a3,
      pushname: _0x4e43b5,
      isMe: _0x2877b3,
      isOwner: _0x55f1ea,
      groupMetadata: _0x22338a,
      groupName: _0x1a8165,
      participants: _0x349276,
      groupAdmins: _0x150daa,
      isBotAdmins: _0x49fc20,
      isAdmins: _0x5e1426,
      reply: _0xa16429,
    }
  ) => {
    try {
      if (!_0x3b9eb1) {
        return _0xa16429(ONLGROUP)
      }
      if (!_0x5e1426) {
        return _0xa16429(ADMIN)
      }
      let _0x5c9dc9 = '',
        _0x9ce2fc = _0xb1009b.split(' ')[0]
      if (_0x9ce2fc === 'members' || _0x9ce2fc === 'member') {
        const _0x279ce8 = _0x23576c.metadata.participants || {}
        for (let _0x554263 of _0x279ce8) {
          _0x5c9dc9 += '\uD83D\uDCCD ' + _0x554263.id + '\n'
        }
        _0x5c9dc9
          ? _0x23576c.reply(
              "*\u300C LIST OF GROUP MEMBER'S JID \u300D*\n\n" + _0x5c9dc9
            )
          : _0x23576c.reply('*Request Denied!*')
      } else {
        if (_0x9ce2fc == 'user' || _0x9ce2fc == 'pm' || _0x9ce2fc == 'pc') {
          let _0x33ea5c = await store.chats
            .all()
            .filter((_0x358e03) => _0x358e03.id.endsWith('.net'))
            .map((_0x115389) => _0x115389)
          for (let _0x3dd9b1 of _0x33ea5c) {
            _0x5c9dc9 += '\uD83D\uDCCD ' + _0x3dd9b1.id + '\n'
          }
          _0x5c9dc9
            ? _0x23576c.reply(
                '*\u300C LIST OF PERSONAL CHAT JIDS \u300D*\n\nTotal ' +
                  _0x33ea5c.length +
                  ' users are text in personal chat.\n\n' +
                  _0x5c9dc9
              )
            : _0x23576c.reply('*Request Denied!*')
        } else {
          if (
            _0x9ce2fc == 'group' ||
            _0x9ce2fc == 'groups' ||
            _0x9ce2fc == 'gc'
          ) {
            n = await _0x23576c.bot.groupFetchAllParticipating()
            const _0x2b1704 = Object.entries(n)
              .slice(0)
              .map((_0x2de4c1) => _0x2de4c1[1])
            for (var _0x21d731 of _0x2b1704.map((_0x7841fd) => _0x7841fd.id)) {
              _0x5c9dc9 += '\uD83D\uDCCD ' + _0x21d731 + '\n'
            }
            _0x5c9dc9
              ? _0x23576c.reply(
                  '*\u300C LIST OF GROUP CHAT JIDS\u300D*\n\n' + _0x5c9dc9
                )
              : _0x23576c.reply('*Request Denied!*')
          } else {
            return await _0x23576c.reply(
              '*Use ' + _0x5bdbb2 + 'alljid pc| gc| member!*'
            )
          }
        }
      }
      const _0x13d007 = {
        text: '\u2705',
        key: _0x23576c.key,
      }
      const _0x4b6e06 = { react: _0x13d007 }
      await _0x328cc7.sendMessage(_0x28c36f, _0x4b6e06)
    } catch (_0x3cae25) {
      _0xa16429('*Error !!*')
      _0x823237(_0x3cae25)
    }
  }
)
const _0x1c3684 = {}
_0x1c3684.pattern = 'opentime'
_0x1c3684.react = '\uD83D\uDD16'
_0x1c3684.desc = 'To open group to a time'
_0x1c3684.category = 'group'
_0x1c3684.use = '.opentime'
_0x1c3684.filename = __filename
cmd(
  _0x1c3684,
  async (
    _0x10593c,
    _0x3ee217,
    _0x10e61a,
    {
      from: _0x31e486,
      prefix: _0x42e987,
      l: _0x21523d,
      quoted: _0x997e9d,
      body: _0x2ca27b,
      isCmd: _0x37d008,
      command: _0x559dcc,
      args: _0x1e90e5,
      q: _0x15868d,
      isGroup: _0xad6da8,
      sender: _0x58830a,
      senderNumber: _0x2c6995,
      botNumber2: _0xc1fce,
      botNumber: _0x561f21,
      pushname: _0x2220a1,
      isMe: _0x4e00fb,
      isOwner: _0xc3428,
      groupMetadata: _0x40f4cb,
      groupName: _0xc4c1ed,
      participants: _0x5344a9,
      groupAdmins: _0x1bd7cc,
      isBotAdmins: _0x54b620,
      isAdmins: _0x3e63c2,
      reply: _0x1796ac,
    }
  ) => {
    try {
      if (!_0xad6da8) {
        return _0x1796ac(ONLGROUP)
      }
      if (!_0x3e63c2) {
        return _0x1796ac(ADMIN)
      }
      if (_0x1e90e5[1] == 'second') {
        var _0x8a8ba3 = _0x1e90e5[0] * '1000'
      } else {
        if (_0x1e90e5[1] == 'minute') {
          var _0x8a8ba3 = _0x1e90e5[0] * '60000'
        } else {
          if (_0x1e90e5[1] == 'hour') {
            var _0x8a8ba3 = _0x1e90e5[0] * '3600000'
          } else {
            if (_0x1e90e5[1] == 'day') {
              var _0x8a8ba3 = _0x1e90e5[0] * '86400000'
            } else {
              return _0x1796ac(
                '*select:*\nsecond\nminute\nhour\n\n*example*\n10 second'
              )
            }
          }
        }
      }
      _0x1796ac('Open time ' + _0x15868d + ' starting from now')
      setTimeout(() => {
        var _0xda2bb9 = _0x3ee217.participant
        const _0x43b7a6 =
          '*Open time* the group was opened by admin\n now members can send messages'
        _0x10593c.groupSettingUpdate(_0x31e486, 'not_announcement')
        _0x1796ac(_0x43b7a6)
      }, _0x8a8ba3)
      const _0x52cb0a = {
        text: '\u2705',
        key: _0x3ee217.key,
      }
      const _0x427ef9 = { react: _0x52cb0a }
      await _0x10593c.sendMessage(_0x31e486, _0x427ef9)
    } catch (_0x33dddb) {
      _0x1796ac('*Error !!*'), _0x21523d(_0x33dddb)
    }
  }
)
const _0x41d63a = {}
_0x41d63a.pattern = 'closetime'
_0x41d63a.react = '\uD83D\uDD16'
_0x41d63a.desc = 'To close group to a time'
_0x41d63a.category = 'group'
_0x41d63a.use = '.closstime'
_0x41d63a.filename = __filename
cmd(
  _0x41d63a,
  async (
    _0xdaf534,
    _0x42aae8,
    _0x329301,
    {
      from: _0x163bfc,
      prefix: _0x5d4336,
      l: _0x30e405,
      quoted: _0x2825a2,
      body: _0x278b1e,
      isCmd: _0x4bdf2f,
      command: _0x3094d4,
      args: _0x474deb,
      q: _0x358a61,
      isGroup: _0x25f79b,
      sender: _0xba61e6,
      senderNumber: _0x2aa0e6,
      botNumber2: _0x8a194f,
      botNumber: _0x10452e,
      pushname: _0x1b2e1e,
      isMe: _0x310637,
      isOwner: _0x1e78d6,
      groupMetadata: _0x298500,
      groupName: _0x435357,
      participants: _0x4c1871,
      groupAdmins: _0x1f5dec,
      isBotAdmins: _0x5b7b09,
      isAdmins: _0x18f692,
      reply: _0x244b9a,
    }
  ) => {
    try {
      if (!_0x25f79b) {
        return _0x244b9a(ONLGROUP)
      }
      if (!_0x18f692) {
        return _0x244b9a(ADMIN)
      }
      if (_0x474deb[1] == 'second') {
        var _0x319f37 = _0x474deb[0] * '1000'
      } else {
        if (_0x474deb[1] == 'minute') {
          var _0x319f37 = _0x474deb[0] * '60000'
        } else {
          if (_0x474deb[1] == 'hour') {
            var _0x319f37 = _0x474deb[0] * '3600000'
          } else {
            if (_0x474deb[1] == 'day') {
              var _0x319f37 = _0x474deb[0] * '86400000'
            } else {
              return _0x244b9a(
                '*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second'
              )
            }
          }
        }
      }
      _0x244b9a('Close time ' + _0x358a61 + ' starting from now')
      setTimeout(() => {
        var _0x25a2e5 = _0x329301.participant
        const _0x53fde0 =
          '*Close time* group closed by admin\nnow only admin can send messages'
        _0xdaf534.groupSettingUpdate(_0x163bfc, 'announcement')
        _0x244b9a(_0x53fde0)
      }, _0x319f37)
      const _0x380994 = {
        text: '\u2705',
        key: _0x42aae8.key,
      }
      const _0x1a67a3 = { react: _0x380994 }
      await _0xdaf534.sendMessage(_0x163bfc, _0x1a67a3)
    } catch (_0x4a456c) {
      _0x244b9a('*Error !!*'), _0x30e405(_0x4a456c)
    }
  }
)
const _0x50e7be = {}
_0x50e7be.pattern = 'sendcontact'
_0x50e7be.react = '\uD83D\uDD16'
_0x50e7be.desc = 'To see group contacts'
_0x50e7be.category = 'group'
_0x50e7be.use = '.sendcontact'
_0x50e7be.filename = __filename
cmd(
  _0x50e7be,
  async (
    _0xceec44,
    _0x1b7a66,
    _0x17da30,
    {
      from: _0x546e39,
      prefix: _0x5388ca,
      l: _0x5a4d13,
      quoted: _0x490ded,
      body: _0x2a7d7c,
      isCmd: _0x1fced6,
      command: _0x23bcb1,
      args: _0x5a125b,
      q: _0x1dfbb0,
      isGroup: _0x5349a4,
      sender: _0x1bcb7e,
      senderNumber: _0x54db04,
      botNumber2: _0x56cfd0,
      botNumber: _0x5934d5,
      pushname: _0x46e77d,
      isMe: _0x31233e,
      isOwner: _0x62ffb1,
      groupMetadata: _0x52dd84,
      groupName: _0x1d7c82,
      participants: _0x5afe20,
      groupAdmins: _0x14be2a,
      isBotAdmins: _0x9a3368,
      isAdmins: _0xf9877f,
      reply: _0x2fc4ad,
    }
  ) => {
    try {
      if (!_0x5349a4) {
        return _0x2fc4ad(ONLGROUP)
      }
      if (!_0xf9877f) {
        return _0x2fc4ad(ADMIN)
      }
      if (!_0x1b7a66.mentionedJid) {
        return _0x2fc4ad('\nUse like this\n Example:.sendcontact @tag|name')
      }
      let _0x3c1401 = _0x1dfbb0.split(' ')[1]
          ? _0x1dfbb0.split(' ')[1]
          : 'Contact',
        _0x126cc9 = {
          displayName: 'Contact',
          contacts: [
            {
              displayName: _0x3c1401,
              vcard:
                'BEGIN:VCARD\nVERSION:3.0\nN:;' +
                _0x3c1401 +
                ';;;\nFN:' +
                _0x3c1401 +
                '\nitem1.TEL;waid=' +
                _0x1b7a66.mentionedJid.split('@')[0] +
                ':' +
                _0x1b7a66.mentionedJid.split('@')[0] +
                '\nitem1.X-ABLabel:Mobile\nEND:VCARD',
            },
          ],
        }
      const _0x2e2fdb = { contacts: _0x126cc9 }
      const _0x2bb0ae = { ephemeralExpiration: 86400 }
      _0xceec44.sendMessage(_0x1b7a66.chat, _0x2e2fdb, _0x2bb0ae)
      const _0x286f21 = {
        text: '\u2705',
        key: _0x1b7a66.key,
      }
      const _0x42ec06 = { react: _0x286f21 }
      await _0xceec44.sendMessage(_0x546e39, _0x42ec06)
    } catch (_0x431bcd) {
      _0x2fc4ad('*Error !!*'), _0x5a4d13(_0x431bcd)
    }
  }
)
const _0x555888 = {}
_0x555888.pattern = 'savecontact'
_0x555888.react = '\uD83D\uDD16'
_0x555888.desc = 'To save group contacts'
_0x555888.category = 'group'
_0x555888.use = '.savecontact'
_0x555888.filename = __filename
cmd(
  _0x555888,
  async (
    _0x45d70b,
    _0x167503,
    _0x1ac953,
    {
      from: _0x14cc43,
      prefix: _0x46713c,
      l: _0x241830,
      quoted: _0x4c3e95,
      body: _0x48e4d1,
      isCmd: _0x4fdc22,
      command: _0x457518,
      args: _0x27bb55,
      q: _0x4c476a,
      isGroup: _0x24e565,
      sender: _0x4fb92c,
      senderNumber: _0x78241e,
      botNumber2: _0x59e9bc,
      botNumber: _0x13a8f2,
      pushname: _0x4fa8d4,
      isMe: _0x39d283,
      isOwner: _0x496b35,
      groupMetadata: _0x80777f,
      groupName: _0x6088e8,
      participants: _0x3d9fb0,
      groupAdmins: _0x855635,
      isBotAdmins: _0x3e4763,
      isAdmins: _0x5c9a96,
      reply: _0x49d255,
    }
  ) => {
    try {
      if (!_0x24e565) {
        return _0x49d255(ONLGROUP)
      }
      if (!_0x5c9a96) {
        return _0x49d255(ADMIN)
      }
      let _0x197f96 = await _0x45d70b.groupMetadata(_0x1ac953.chat),
        _0x23cddd = _0x3d9fb0.map((_0x2cbb53) => _0x2cbb53.id)
      vcard = ''
      noPort = 0
      for (let _0xcfdd4b of _0x197f96.participants) {
        vcard +=
          'BEGIN:VCARD\nVERSION:3.0\nFN:[' +
          noPort++ +
          '] +' +
          _0xcfdd4b.id.split('@')[0] +
          '\nTEL;type=CELL;type=VOICE;waid=' +
          _0xcfdd4b.id.split('@')[0] +
          ':+' +
          _0xcfdd4b.id.split('@')[0] +
          '\nEND:VCARD\n'
      }
      let _0x3f1650 = './contacts.vcf'
      _0x49d255(
        '\nBe patient bro, saving... ' +
          _0x197f96.participants.length +
          ' contact'
      )
      require('fs').writeFileSync(_0x3f1650, vcard.trim())
      await sleep(2000)
      const _0x8112f3 = {
        ephemeralExpiration: 86400,
        quoted: _0x1ac953,
      }
      _0x45d70b.sendMessage(
        _0x167503.chat,
        {
          document: require('fs').readFileSync(_0x3f1650),
          mimetype: 'text/vcard',
          fileName: 'Contact.vcf',
          caption:
            '\nSucceed\nGroup: *' +
            _0x197f96.subject +
            '*\nContact: *' +
            _0x197f96.participants.length +
            '*',
        },
        _0x8112f3
      )
      require('fs').unlinkSync(_0x3f1650)
      const _0x15d59c = {
        text: '\u2705',
        key: _0x167503.key,
      }
      const _0x133b17 = { react: _0x15d59c }
      await _0x45d70b.sendMessage(_0x14cc43, _0x133b17)
    } catch (_0x5baee6) {
      _0x49d255('*Error !!*'), _0x241830(_0x5baee6)
    }
  }
)
const _0x1c22a3 = {}
_0x1c22a3.pattern = 'getcontact'
_0x1c22a3.react = '\uD83D\uDD16'
_0x1c22a3.desc = 'To get group contacts'
_0x1c22a3.category = 'group'
_0x1c22a3.use = '.getcontact'
_0x1c22a3.filename = __filename
cmd(
  _0x1c22a3,
  async (
    _0x1a36bd,
    _0xae9011,
    _0x3467a6,
    {
      from: _0x1bd365,
      prefix: _0xf0ea01,
      l: _0x95d2c9,
      quoted: _0x1c1aa6,
      body: _0x58b51c,
      isCmd: _0x12da0b,
      command: _0xef74b5,
      args: _0x3565e8,
      q: _0x6bdc21,
      isGroup: _0x4ec139,
      sender: _0x3172b3,
      senderNumber: _0x417eb9,
      botNumber2: _0x435ec6,
      botNumber: _0x2c9073,
      pushname: _0x2cf496,
      isMe: _0xc68f9e,
      isOwner: _0x205e59,
      groupMetadata: _0x2ea275,
      groupName: _0x45272a,
      participants: _0x2a6710,
      groupAdmins: _0x1b3e54,
      isBotAdmins: _0x218336,
      isAdmins: _0x507cfd,
      reply: _0x3dbc0a,
    }
  ) => {
    try {
      if (!_0x4ec139) {
        return _0x3dbc0a(ONLGROUP)
      }
      if (!_0x507cfd) {
        return _0x3dbc0a(ADMIN)
      }
      if (!_0xae9011.mentionedJid) {
        return _0x3dbc0a('\nUse like this\n Example:.contacttag @tag|name')
      }
      let _0x4f9afd = _0x6bdc21.split(' ')[1]
          ? _0x6bdc21.split(' ')[1]
          : 'Contact',
        _0x3e1b64 = {
          displayName: 'Contact',
          contacts: [
            {
              displayName: _0x4f9afd,
              vcard:
                'BEGIN:VCARD\nVERSION:3.0\nN:;' +
                _0x4f9afd +
                ';;;\nFN:' +
                _0x4f9afd +
                '\nitem1.TEL;waid=' +
                _0x3467a6.mentionedJid.split('@') +
                ':' +
                _0xae9011.mentionedJid[0].split('@') +
                '\nitem1.X-ABLabel:Mobile\nEND:VCARD',
            },
          ],
        }
      const _0x559a87 = { ephemeralExpiration: 86400 }
      _0x1a36bd.sendMessage(
        _0xae9011.chat,
        {
          contacts: _0x3e1b64,
          mentions: _0x2a6710.map((_0xcb7689) => _0xcb7689.id),
        },
        _0x559a87
      )
      const _0x400e52 = {
        text: '\u2705',
        key: _0xae9011.key,
      }
      const _0x42436a = { react: _0x400e52 }
      await _0x1a36bd.sendMessage(_0x1bd365, _0x42436a)
    } catch (_0x2ef328) {
      _0x3dbc0a('*Error !!*'), _0x95d2c9(_0x2ef328)
    }
  }
)
const _0x548a40 = {}
_0x548a40.pattern = 'contacttag'
_0x548a40.react = '\uD83D\uDD16'
_0x548a40.desc = 'To tag group contacts'
_0x548a40.category = 'group'
_0x548a40.use = '.contacttag'
_0x548a40.filename = __filename
cmd(
  _0x548a40,
  async (
    _0x5b7def,
    _0x5c7119,
    _0x214f41,
    {
      from: _0x59c9f7,
      prefix: _0x3bcc7e,
      l: _0x33fe22,
      quoted: _0x3fe0f3,
      body: _0xb522f,
      isCmd: _0x38c6a2,
      command: _0x4a9749,
      args: _0x3ebb0d,
      q: _0x3ac52e,
      isGroup: _0x9ff6ba,
      sender: _0x531a74,
      senderNumber: _0x2a29ba,
      botNumber2: _0x1986e7,
      botNumber: _0x485aaf,
      pushname: _0x5a2ba6,
      isMe: _0x44e02a,
      isOwner: _0x5a4f20,
      groupMetadata: _0x16be5e,
      groupName: _0x8bfbd1,
      participants: _0x3b93d4,
      groupAdmins: _0xde52a8,
      isBotAdmins: _0x35ed89,
      isAdmins: _0x5aaffb,
      reply: _0x8e2795,
    }
  ) => {
    try {
      if (!_0x9ff6ba) {
        return _0x8e2795(ONLGROUP)
      }
      if (!_0x5aaffb) {
        return _0x8e2795(ADMIN)
      }
      const _0x29af8a = {}
      _0x29af8a.text =
        '\nGroup: *' +
        _0x16be5e.subject +
        '*\nMember: *' +
        _0x3b93d4.length +
        '*'
      izumibigpp = await _0x5b7def.sendMessage(_0x5c7119.chat, _0x29af8a, {
        quoted: _0x5c7119,
        ephemeralExpiration: 86400,
      })
      await sleep(1000)
      _0x5b7def.sendContact(
        _0x5c7119.chat,
        _0x3b93d4.map((_0x4122c7) => _0x4122c7.id),
        izumibigpp
      )
      const _0x3ce473 = {}
      _0x3ce473.text = '\u2705'
      _0x3ce473.key = _0x5c7119.key
      const _0x510cb7 = {}
      _0x510cb7.react = _0x3ce473
      await _0x5b7def.sendMessage(_0x59c9f7, _0x510cb7)
    } catch (_0x1b8518) {
      _0x8e2795('*Error !!*'), _0x33fe22(_0x1b8518)
    }
  }
)
const _0xf60229 = {}
_0xf60229.pattern = 'creatgc'
_0xf60229.react = '\uD83D\uDD16'
_0xf60229.desc = 'To create a group'
_0xf60229.category = 'group'
_0xf60229.use = '.creatgc'
_0xf60229.filename = __filename
cmd(
  _0xf60229,
  async (
    _0x7c4f40,
    _0x3015db,
    _0x6c1958,
    {
      from: _0x521bec,
      prefix: _0x261c93,
      l: _0x30367e,
      quoted: _0x39a0d7,
      body: _0x11393e,
      isCmd: _0x54b707,
      command: _0xe74864,
      args: _0x2be2b1,
      q: _0x5d1d51,
      isGroup: _0x3f5ba1,
      sender: _0x28590d,
      senderNumber: _0x13400c,
      botNumber2: _0x45cdcf,
      botNumber: _0x5a2699,
      pushname: _0x9c9ed2,
      isMe: _0x4ca767,
      isOwner: _0x3942ae,
      groupMetadata: _0x4bcdc4,
      groupName: _0x13e393,
      participants: _0x1653f7,
      groupAdmins: _0x3b4958,
      isBotAdmins: _0x51fe52,
      isAdmins: _0x5bcaa7,
      reply: _0x543c6,
    }
  ) => {
    try {
      if (!_0x4ca767) {
        return await _0x543c6(BOTOW)
      }
      if (!_0x2be2b1.join(' ')) {
        return _0x543c6('Use ' + (_0x261c93 + _0xe74864) + ' groupname')
      }
      let _0x2c8b66 = await _0x7c4f40.groupCreate(_0x2be2b1.join(' '), []),
        _0x33f655 = await _0x7c4f40.groupInviteCode(_0x2c8b66.id)
      const _0x30b109 =
          '     \u300C Create Group \u300D\n\n\u25B8 Name : ' +
          _0x2c8b66.subject +
          '\n\u25B8 Owner : @' +
          _0x2c8b66.owner.split('@')[0] +
          '\n\u25B8 Creation : ' +
          moment(_0x2c8b66.creation * 1000)
            .tz('Asia/Kolkata')
            .format('DD/MM/YYYY HH:mm:ss') +
          '\n\nhttps://chat.whatsapp.com/' +
          _0x33f655,
        _0x51164f = { quoted: _0x3015db }
      _0x7c4f40.sendMessage(
        _0x6c1958.chat,
        {
          text: _0x30b109,
          mentions: await _0x7c4f40.parseMention(_0x30b109),
        },
        _0x51164f
      )
      const _0x4e45c6 = {
        text: '\u2705',
        key: _0x3015db.key,
      }
      const _0xf60ad3 = { react: _0x4e45c6 }
      await _0x7c4f40.sendMessage(_0x521bec, _0xf60ad3)
    } catch (_0x1acf8d) {
      _0x543c6('*Error !!*'), _0x30367e(_0x1acf8d)
    }
  }
)
const _0x583f7e = {}
_0x583f7e.pattern = 'hidetag'
_0x583f7e.react = '\uD83D\uDD16'
_0x583f7e.desc = descg
_0x583f7e.category = 'group'
_0x583f7e.use = '.hidetag <hi>'
_0x583f7e.filename = __filename
cmd(
  _0x583f7e,
  async (
    _0x451cbd,
    _0x410422,
    _0x378c25,
    {
      from: _0x5efcc5,
      prefix: _0x2c59b9,
      l: _0x358d22,
      quoted: _0x59d6cd,
      body: _0x4a218e,
      isCmd: _0x1a3e4c,
      command: _0x470ea8,
      args: _0x4334d2,
      q: _0x4e1d08,
      isGroup: _0x365cb2,
      sender: _0x5c691d,
      senderNumber: _0x5d463e,
      botNumber2: _0x5bd1fc,
      botNumber: _0x19e6ff,
      pushname: _0x5f1d89,
      isMe: _0x4583a0,
      isOwner: _0x891542,
      groupMetadata: _0x56839f,
      groupName: _0xd164c3,
      participants: _0x27cb61,
      groupAdmins: _0x50864d,
      isBotAdmins: _0x1fdad9,
      isAdmins: _0x4cb841,
      reply: _0xd12817,
    }
  ) => {
    try {
      if (!_0x365cb2) {
        return _0xd12817(ONLGROUP)
      }
      if (!_0x4cb841) {
        return _0xd12817(ADMIN)
      }
      if (!_0x4e1d08) {
        return await _0xd12817(tesadtag)
      }
      _0x451cbd.sendMessage(_0x5efcc5, {
        text: _0x4e1d08 ? _0x4e1d08 : '',
        mentions: _0x27cb61.map((_0x5d6097) => _0x5d6097.id),
      })
      const _0x3264e7 = {}
      _0x3264e7.text = '\u2705'
      _0x3264e7.key = _0x410422.key
      const _0x2624be = {}
      _0x2624be.react = _0x3264e7
      await _0x451cbd.sendMessage(_0x5efcc5, _0x2624be)
    } catch (_0xe4cb4d) {
      _0xd12817('*Error !!*'), _0x358d22(_0xe4cb4d)
    }
  }
)
const _0x10aa85 = {}
_0x10aa85.pattern = 'tagall'
_0x10aa85.react = '\uD83D\uDD16'
_0x10aa85.desc = descg
_0x10aa85.category = 'group'
_0x10aa85.use = '.hidetag <hi>'
_0x10aa85.filename = __filename
cmd(
  _0x10aa85,
  async (
    _0x7216e7,
    _0x39b082,
    _0x1a3efe,
    {
      from: _0x286b31,
      prefix: _0x267659,
      l: _0x68f277,
      quoted: _0x50b5ff,
      body: _0x18a66f,
      isCmd: _0x183eac,
      command: _0x38d53f,
      args: _0x1c5349,
      q: _0x4bb25b,
      isGroup: _0x4ce20c,
      sender: _0x3bb963,
      senderNumber: _0x5e9624,
      botNumber2: _0x19da14,
      botNumber: _0x3e8f98,
      pushname: _0x3dda38,
      isMe: _0x3263e2,
      isOwner: _0x21c8e6,
      groupMetadata: _0x14a217,
      groupName: _0x3f3599,
      participants: _0x4fa25d,
      groupAdmins: _0x36dfbd,
      isBotAdmins: _0x190972,
      isAdmins: _0x87eeed,
      reply: _0x42339b,
    }
  ) => {
    try {
      if (!_0x4ce20c) {
        return _0x42339b(ONLGROUP)
      }
      if (!_0x190972) {
        return _0x42339b(botAdmin)
      }
      if (!_0x87eeed) {
        return _0x42339b(ADMIN)
      }
      let _0x2ea8d2 =
        ' *ＧＲＯＵＰ  ＮＯＴＩＦＹ*\n                   \n*\uD835\uDC0C\uD835\uDC04\uD835\uDC12\uD835\uDC12\uD835\uDC00\uD835\uDC06\uD835\uDC04 : ' +
        (_0x4bb25b ? _0x4bb25b : 'blank') +
        '*\n\n'
      for (let _0xc1d1de of _0x4fa25d) {
        _0x2ea8d2 += '\uD83D\uDD35 @' + _0xc1d1de.id.split('@')[0] + '\n'
      }
      _0x7216e7.sendMessage(_0x1a3efe.chat, {
        text: _0x2ea8d2,
        mentions: _0x4fa25d.map((_0xe10c5b) => _0xe10c5b.id),
      })
      const _0x277601 = {
        text: '\u2705',
        key: _0x39b082.key,
      }
      const _0x1c44e8 = { react: _0x277601 }
      await _0x7216e7.sendMessage(_0x286b31, _0x1c44e8)
    } catch (_0x49d1d4) {
      _0x42339b('')
      _0x68f277(_0x49d1d4)
    }
  }
)
const _0x3603ea = {}
_0x3603ea.pattern = 'tagadmin'
_0x3603ea.react = '\uD83D\uDD16'
_0x3603ea.desc = descg
_0x3603ea.category = 'group'
_0x3603ea.use = '.tagadmin'
_0x3603ea.filename = __filename
cmd(
  _0x3603ea,
  async (
    _0x20ec40,
    _0x4549e6,
    _0x2d6779,
    {
      from: _0x6a1e34,
      prefix: _0x47c2c,
      l: _0x5988c9,
      quoted: _0x22576a,
      body: _0x3584cf,
      isCmd: _0x207c83,
      command: _0x4ea09f,
      args: _0x2e72ca,
      q: _0x13166e,
      isGroup: _0x1caf50,
      sender: _0x5f13b0,
      senderNumber: _0x374793,
      botNumber2: _0xb36ca8,
      botNumber: _0x39d1dd,
      pushname: _0x393f4c,
      isMe: _0x1b3b17,
      isOwner: _0x25147a,
      groupMetadata: _0x381304,
      groupName: _0x2e07a1,
      participants: _0x348a1b,
      groupAdmins: _0x3ce587,
      isBotAdmins: _0x5d2729,
      isAdmins: _0x861a57,
      reply: _0x1e2cb2,
    }
  ) => {
    try {
      if (!_0x1caf50) {
        return _0x1e2cb2(ONLGROUP)
      }
      let _0x1eda69 =
        ' _\u2757 ' +
        _0x2e07a1 +
        'Admins \u2757_\n                  \n*MASSAGE :* ' +
        (_0x13166e ? _0x13166e : 'blank') +
        '\n\n'
      for (let _0x5c5b86 of _0x3ce587) {
        _0x1eda69 += '    '
      }
      _0x20ec40.sendMessage(_0x6a1e34, {
        text: _0x1eda69,
        mentions: _0x3ce587.map((_0x2757b9) => _0x2757b9.id),
      })
      const _0x371a22 = {
        text: '\u2705',
        key: _0x4549e6.key,
      }
      const _0x15cba5 = { react: _0x371a22 }
      await _0x20ec40.sendMessage(_0x6a1e34, _0x15cba5)
    } catch (_0x3d0c27) {
      _0x1e2cb2(''), _0x5988c9(_0x3d0c27)
    }
  }
)
const _0xa12c41 = {}
_0xa12c41.pattern = 'mute'
_0xa12c41.react = '\uD83D\uDD16'
_0xa12c41.desc = 'close a group'
_0xa12c41.category = 'group'
_0xa12c41.use = '.mute'
_0xa12c41.filename = __filename
cmd(
  _0xa12c41,
  async (
    _0x529a00,
    _0x223c30,
    _0x52187d,
    {
      from: _0x538627,
      prefix: _0x1e72bb,
      l: _0x279f4a,
      quoted: _0x2e8ef0,
      body: _0x478ecd,
      isCmd: _0x5d02dc,
      command: _0x5567fc,
      args: _0x5d0929,
      q: _0x392cfe,
      isGroup: _0x47f9e5,
      sender: _0x13213d,
      senderNumber: _0x16403a,
      botNumber2: _0xd7044a,
      botNumber: _0x104deb,
      pushname: _0x268603,
      isMe: _0x1cba87,
      isOwner: _0x2ca46a,
      groupMetadata: _0x19cc70,
      groupName: _0x4a1886,
      participants: _0xc7328d,
      groupAdmins: _0x44224f,
      isBotAdmins: _0x1d8940,
      isAdmins: _0x2d898b,
      reply: _0x275eea,
    }
  ) => {
    try {
      if (!_0x47f9e5) {
        return _0x275eea(ONLGROUP)
      }
      if (!_0x1d8940) {
        return _0x275eea(botAdmin)
      }
      if (!_0x2d898b) {
        return _0x275eea(ADMIN)
      }
      await _0x529a00.groupSettingUpdate(_0x223c30.chat, 'announcement')
      const _0x41c0a2 = await _0x529a00.sendMessage(_0x223c30.chat.G_MUTE),
        _0xb409b9 = {
          text: '\u2705',
          key: _0x223c30.key,
        }
      const _0xd6b6fa = { react: _0xb409b9 }
      await _0x529a00.sendMessage(_0x538627, _0xd6b6fa)
    } catch (_0xc1aa26) {
      _0x275eea('\uD83D\uDED1 GROUP IS CLOSED MY BOT OWNER')
      _0x279f4a(_0xc1aa26)
    }
  }
)
const _0x2ac8d8 = {}
_0x2ac8d8.pattern = 'unmute'
_0x2ac8d8.react = '\uD83D\uDD16'
_0x2ac8d8.desc = 'open a group'
_0x2ac8d8.category = 'group'
_0x2ac8d8.use = '.unmute'
_0x2ac8d8.filename = __filename
cmd(
  _0x2ac8d8,
  async (
    _0x1da74b,
    _0x6ff362,
    _0x38346e,
    {
      from: _0x3b5d3a,
      prefix: _0xa123b8,
      l: _0x2fa0a3,
      quoted: _0x5d54d9,
      body: _0x474af0,
      isCmd: _0x2a18e9,
      command: _0x1a2f46,
      args: _0x56ac21,
      q: _0x29003d,
      isGroup: _0x500aca,
      sender: _0x47e2d2,
      senderNumber: _0x5473d8,
      botNumber2: _0x84cafb,
      botNumber: _0x3b44c1,
      pushname: _0x58c4c9,
      isMe: _0xd4d8ad,
      isOwner: _0x127f11,
      groupMetadata: _0x352867,
      groupName: _0x261aee,
      participants: _0x11c57c,
      groupAdmins: _0x231112,
      isBotAdmins: _0x51b540,
      isAdmins: _0x6c6858,
      reply: _0x234755,
    }
  ) => {
    try {
      if (!_0x500aca) {
        return _0x234755(ONLGROUP)
      }
      if (!_0x51b540) {
        return _0x234755(botAdmin)
      }
      if (!_0x6c6858) {
        return _0x234755(ADMIN)
      }
      await _0x1da74b.groupSettingUpdate(_0x6ff362.chat, 'not_announcement')
      const _0xef542a = await _0x1da74b.sendMessage(_0x6ff362.chat.G_UNMUTE),
        _0x361c7c = {
          text: '\u2705',
          key: _0x6ff362.key,
        }
      const _0x5abb6b = { react: _0x361c7c }
      await _0x1da74b.sendMessage(_0x3b5d3a, _0x5abb6b)
    } catch (_0x4bffcb) {
      _0x234755('\uD83D\uDED1 GROUP IS OPEN MY BOT OWNER')
      _0x2fa0a3(_0x4bffcb)
    }
  }
)
const _0x1e4f55 = {}
_0x1e4f55.pattern = 'kick'
_0x1e4f55.react = '\uD83D\uDD16'
_0x1e4f55.desc = 'kick a member'
_0x1e4f55.category = 'group'
_0x1e4f55.use = '.kick'
_0x1e4f55.filename = __filename
cmd(
  _0x1e4f55,
  async (
    _0x14b993,
    _0x33418f,
    _0x4f9e46,
    {
      from: _0x55a7d8,
      prefix: _0x51b8cf,
      l: _0x3ec90e,
      quoted: _0x5e933f,
      body: _0x2fcca1,
      isCmd: _0x495cdb,
      command: _0x31efe6,
      args: _0x35a4d5,
      q: _0xec215c,
      isGroup: _0x1f7376,
      sender: _0x7d936e,
      senderNumber: _0x2f9361,
      botNumber2: _0x377b63,
      botNumber: _0x2f91d3,
      pushname: _0x3b4138,
      isMe: _0x535570,
      isOwner: _0x482bb3,
      groupMetadata: _0x29be64,
      groupName: _0x8daa01,
      participants: _0x6800ec,
      groupAdmins: _0x5a1fa4,
      isBotAdmins: _0x581009,
      isAdmins: _0x168bbd,
      reply: _0x4d48e8,
    }
  ) => {
    try {
      if (!_0x1f7376) {
        return _0x4d48e8(ONLGROUP)
      }
      if (!_0x581009) {
        return _0x4d48e8(botAdmin)
      }
      if (!_0x168bbd) {
        return _0x4d48e8(ADMIN)
      }
      let _0x549510 = _0x33418f.mentionedJid
        ? _0x33418f.mentionedJid
        : _0x33418f.quoted
        ? _0x33418f.quoted.sender
        : _0xec215c.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      await _0x14b993
        .groupParticipantsUpdate(_0x33418f.chat, [_0x549510], 'remove')
        .then((_0x216bee) => _0x4d48e8(jsonformat(_0x216bee)))
        .catch((_0x485d58) => _0x4d48e8(jsonformat(_0x485d58)))
      const _0x50d693 = {
        text: '\u2705',
        key: _0x33418f.key,
      }
      const _0x5cc614 = { react: _0x50d693 }
      await _0x14b993.sendMessage(_0x55a7d8, _0x5cc614)
    } catch (_0x3a68f2) {
      _0x4d48e8('*Error !!*')
      _0x3ec90e(_0x3a68f2)
    }
  }
)
const _0xf6c2a1 = {}
_0xf6c2a1.pattern = 'add'
_0xf6c2a1.react = '\uD83D\uDD16'
_0xf6c2a1.desc = 'Add a member'
_0xf6c2a1.category = 'group'
_0xf6c2a1.use = '.add'
_0xf6c2a1.filename = __filename
cmd(
  _0xf6c2a1,
  async (
    _0x586141,
    _0x263133,
    _0x168da1,
    {
      from: _0x1ee04a,
      prefix: _0x2f08a4,
      l: _0x11a166,
      quoted: _0x564af5,
      body: _0x5796c2,
      isCmd: _0x5735c0,
      command: _0x5094fe,
      args: _0x53324f,
      q: _0x1477c5,
      isGroup: _0xd16408,
      sender: _0x219295,
      senderNumber: _0xed2b78,
      botNumber2: _0x524f8b,
      botNumber: _0x341b0e,
      pushname: _0x46cf29,
      isMe: _0x39baea,
      isOwner: _0x42eaa3,
      groupMetadata: _0x5831df,
      groupName: _0x54edae,
      participants: _0x3a979a,
      groupAdmins: _0xc8914b,
      isBotAdmins: _0x2900c4,
      isAdmins: _0x284bb5,
      reply: _0xdc3d65,
    }
  ) => {
    try {
      if (!_0x2900c4) {
        return _0xdc3d65(botAdmin)
      }
      let _0x338204 = _0x263133.quoted
        ? _0x263133.quoted.sender
        : _0x1477c5.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      await _0x586141
        .groupParticipantsUpdate(_0x263133.chat, [_0x338204], 'add')
        .then((_0x8afbd3) => _0xdc3d65(jsonformat(_0x8afbd3)))
        .catch((_0x2e1992) => _0xdc3d65(jsonformat(_0x2e1992)))
      const _0x15fcb7 = {
        text: '\u2705',
        key: _0x263133.key,
      }
      const _0x37e487 = { react: _0x15fcb7 }
      await _0x586141.sendMessage(_0x1ee04a, _0x37e487)
    } catch (_0x39dacd) {
      _0xdc3d65('*Error !!*')
      _0x11a166(_0x39dacd)
    }
  }
)
const _0x275e6f = {}
_0x275e6f.pattern = 'promote'
_0x275e6f.react = '\uD83D\uDD16'
_0x275e6f.desc = 'promote admin to a member'
_0x275e6f.category = 'group'
_0x275e6f.use = '.promote'
_0x275e6f.filename = __filename
cmd(
  _0x275e6f,
  async (
    _0x5ab939,
    _0x5e5764,
    _0x2a5e3b,
    {
      from: _0xc29d9c,
      prefix: _0x573c6a,
      l: _0x568b17,
      quoted: _0x2b4314,
      body: _0x37294e,
      isCmd: _0x559206,
      command: _0x5b86d0,
      args: _0x4b765a,
      q: _0x4ab5c7,
      isGroup: _0x149e72,
      sender: _0x1adc23,
      senderNumber: _0x282934,
      botNumber2: _0x21567,
      botNumber: _0x5e44fa,
      pushname: _0x5cd4b5,
      isMe: _0x2df6cb,
      isOwner: _0x41bc8b,
      groupMetadata: _0x44d659,
      groupName: _0x367505,
      participants: _0x5e2977,
      groupAdmins: _0x3df9c7,
      isBotAdmins: _0x3fd138,
      isAdmins: _0x527fd6,
      reply: _0x1e7296,
    }
  ) => {
    try {
      if (!_0x149e72) {
        return _0x1e7296(ONLGROUP)
      }
      if (!_0x3fd138) {
        return _0x1e7296(botAdmin)
      }
      if (!_0x527fd6) {
        return _0x1e7296(ADMIN)
      }
      let _0x5a1edf = _0x5e5764.mentionedJid
        ? _0x5e5764.mentionedJid
        : _0x5e5764.quoted
        ? _0x5e5764.quoted.sender
        : _0x4ab5c7.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      await _0x5ab939
        .groupParticipantsUpdate(_0x5e5764.chat, [_0x5a1edf], 'promote')
        .then((_0x6550f4) => _0x1e7296(jsonformat(_0x6550f4)))
        .catch((_0x5c7060) => _0x1e7296(jsonformat(_0x5c7060)))
      _0x1e7296('\uD83D\uDED1 GROUP ADMIN PROMOTE BY MY BOT OWNER')
      const _0x405b76 = {
        text: '\u2705',
        key: _0x5e5764.key,
      }
      const _0x11e844 = { react: _0x405b76 }
      await _0x5ab939.sendMessage(_0xc29d9c, _0x11e844)
    } catch (_0x11fd3b) {
      _0x1e7296('*Error !!*')
      _0x568b17(_0x11fd3b)
    }
  }
)
const _0x3be67d = {}
_0x3be67d.pattern = 'demote'
_0x3be67d.react = '\uD83D\uDD16'
_0x3be67d.desc = 'demote admin to a member'
_0x3be67d.category = 'group'
_0x3be67d.use = '.demote'
_0x3be67d.filename = __filename
cmd(
  _0x3be67d,
  async (
    _0x3ceebe,
    _0x3afec3,
    _0x267edf,
    {
      from: _0x4c9600,
      prefix: _0x222290,
      l: _0x5a195e,
      quoted: _0x3562c3,
      body: _0x382e5b,
      isCmd: _0x2d879e,
      command: _0x51a133,
      args: _0x4a6c02,
      q: _0x38bb39,
      isGroup: _0x351dc5,
      sender: _0xe64476,
      senderNumber: _0x31c546,
      botNumber2: _0x5e275c,
      botNumber: _0x13a323,
      pushname: _0x35cad6,
      isMe: _0x3565d0,
      isOwner: _0x11d2b6,
      groupMetadata: _0x5d595c,
      groupName: _0x442fa3,
      participants: _0x38482e,
      groupAdmins: _0x25e1c8,
      isBotAdmins: _0x1fa7f5,
      isAdmins: _0x231c34,
      reply: _0x120580,
    }
  ) => {
    try {
      if (!_0x351dc5) {
        return _0x120580(ONLGROUP)
      }
      if (!_0x1fa7f5) {
        return _0x120580(botAdmin)
      }
      if (!_0x231c34) {
        return _0x120580(ADMIN)
      }
      let _0x4cdae6 = _0x3afec3.mentionedJid
        ? _0x3afec3.mentionedJid
        : _0x3afec3.quoted
        ? _0x3afec3.quoted.sender
        : _0x38bb39.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      await _0x3ceebe
        .groupParticipantsUpdate(_0x3afec3.chat, [_0x4cdae6], 'demote')
        .then((_0xa04938) => _0x120580(jsonformat(_0xa04938)))
        .catch((_0x3b195b) => _0x120580(jsonformat(_0x3b195b)))
      _0x120580('\uD83D\uDED1 GROUP ADMIN DEMOTE BY MY BOT OWNER')
      const _0x4350a3 = {
        text: '\u2705',
        key: _0x3afec3.key,
      }
      const _0x1ebdc1 = { react: _0x4350a3 }
      await _0x3ceebe.sendMessage(_0x4c9600, _0x1ebdc1)
    } catch (_0xfe47f2) {
      _0x120580('*Error !!*')
      _0x5a195e(_0xfe47f2)
    }
  }
)
const _0x585b83 = {}
_0x585b83.pattern = 'setname'
_0x585b83.react = '\uD83D\uDD16'
_0x585b83.desc = 'To change group name'
_0x585b83.category = 'group'
_0x585b83.use = '.setname'
_0x585b83.filename = __filename
cmd(
  _0x585b83,
  async (
    _0x3e1e9e,
    _0xdb6481,
    _0x432b15,
    {
      from: _0x30060f,
      prefix: _0x5bfe85,
      l: _0x3d6bd0,
      quoted: _0x471450,
      body: _0x2a7237,
      isCmd: _0x3bffe5,
      command: _0x1d068e,
      args: _0x17523d,
      q: _0x55d1bb,
      isGroup: _0x5957f6,
      sender: _0x1471f5,
      senderNumber: _0x45ac5d,
      botNumber2: _0x3f9999,
      botNumber: _0x2118d0,
      pushname: _0x375a62,
      isMe: _0x403f3f,
      isOwner: _0x1c9fde,
      groupMetadata: _0x43ea22,
      groupName: _0x3f0836,
      participants: _0xa81b70,
      groupAdmins: _0xb08cb9,
      isBotAdmins: _0x2827fa,
      isAdmins: _0x26c61c,
      reply: _0x9a2047,
    }
  ) => {
    try {
      if (!_0x5957f6) {
        return _0x9a2047(ONLGROUP)
      }
      if (!_0x2827fa) {
        return _0x9a2047(botAdmin)
      }
      if (!_0x26c61c) {
        return _0x9a2047(ADMIN)
      }
      await _0x3e1e9e
        .groupUpdateSubject(_0xdb6481.chat, _0x55d1bb)
        .then((_0x44aff6) => _0x9a2047(mess.success))
        .catch((_0x1998f2) => _0x9a2047(jsonformat(_0x1998f2)))
      _0x9a2047('*\u2705 SUCCESSFULLY CHANGED GROUP NAME*')
      const _0x56a6eb = {}
      _0x56a6eb.text = '\u2705'
      _0x56a6eb.key = _0xdb6481.key
      const _0x142d7f = {}
      _0x142d7f.react = _0x56a6eb
      await _0x3e1e9e.sendMessage(_0x30060f, _0x142d7f)
    } catch (_0x6ad73e) {
      _0x9a2047('*Error !!*')
      _0x3d6bd0(_0x6ad73e)
    }
  }
)
const _0x4270d3 = {}
_0x4270d3.pattern = 'setdesc'
_0x4270d3.react = '\uD83D\uDD16'
_0x4270d3.desc = 'To change group description'
_0x4270d3.category = 'group'
_0x4270d3.use = '.setdesc'
_0x4270d3.filename = __filename
cmd(
  _0x4270d3,
  async (
    _0x4fcf34,
    _0x26744e,
    _0x343e85,
    {
      from: _0xa406f8,
      prefix: _0x227488,
      l: _0x4e8bd4,
      quoted: _0x2d4fed,
      body: _0x1adf43,
      isCmd: _0x343b19,
      command: _0x595b67,
      args: _0x196e27,
      q: _0x470ee2,
      isGroup: _0x22bf08,
      sender: _0x572e78,
      senderNumber: _0x254876,
      botNumber2: _0x5c5681,
      botNumber: _0x6497a0,
      pushname: _0x5d4cfc,
      isMe: _0x3275d5,
      isOwner: _0x289d75,
      groupMetadata: _0x47d13d,
      groupName: _0x59f00,
      participants: _0x29de62,
      groupAdmins: _0x1e6b93,
      isBotAdmins: _0x3756ed,
      isAdmins: _0x382a27,
      reply: _0x4abf2d,
    }
  ) => {
    try {
      if (!_0x22bf08) {
        return _0x4abf2d(ONLGROUP)
      }
      if (!_0x3756ed) {
        return _0x4abf2d(botAdmin)
      }
      if (!_0x382a27) {
        return _0x4abf2d(ADMIN)
      }
      await _0x4fcf34
        .groupUpdateDescription(_0x26744e.chat, _0x470ee2)
        .then((_0x2ebd6c) => _0x4abf2d(mess.success))
        .catch((_0x3a353f) => _0x4abf2d(jsonformat(_0x3a353f)))
      _0x4abf2d('*\u2705 SUCCESSFULLY CHANGED GROUP DESCRIPTION*')
      const _0x366497 = {}
      _0x366497.text = '\u2705'
      _0x366497.key = _0x26744e.key
      const _0x341335 = {}
      _0x341335.react = _0x366497
      await _0x4fcf34.sendMessage(_0xa406f8, _0x341335)
    } catch (_0x2950bd) {
      _0x4abf2d('*Error !!*')
      _0x4e8bd4(_0x2950bd)
    }
  }
)
const _0x35f902 = {}
_0x35f902.pattern = 'ephemeral'
_0x35f902.react = '\uD83D\uDD16'
_0x35f902.desc = 'To desappear & appear messages'
_0x35f902.category = 'group'
_0x35f902.use = '.ephemeral'
_0x35f902.filename = __filename
cmd(
  _0x35f902,
  async (
    _0x28bc3a,
    _0x3bb103,
    _0x2ddd23,
    {
      from: _0x376b8c,
      prefix: _0x8dad87,
      l: _0x50cb60,
      quoted: _0x2ce5d7,
      body: _0x44094b,
      isCmd: _0x13f064,
      command: _0x459433,
      args: _0x57412d,
      q: _0x2b0f2a,
      isGroup: _0x559f11,
      sender: _0x3dcf0f,
      senderNumber: _0x47c35f,
      botNumber2: _0x3d1bfd,
      botNumber: _0x4e2b75,
      pushname: _0x2a4950,
      isMe: _0x3eff3d,
      isOwner: _0x26de37,
      groupMetadata: _0x13d20e,
      groupName: _0x21ed7f,
      participants: _0x4376c8,
      groupAdmins: _0x37e562,
      isBotAdmins: _0x2e4221,
      isAdmins: _0x3ed7a5,
      reply: _0x5b2eb9,
    }
  ) => {
    try {
      if (!_0x559f11) {
        return _0x5b2eb9(ONLGROUP)
      }
      if (!_0x2e4221) {
        return _0x5b2eb9(botAdmin)
      }
      if (!_0x3ed7a5) {
        return _0x5b2eb9(ADMIN)
      }
      if (!_0x2b0f2a) {
        return await _0x5b2eb9(imgmsg)
      }
      if (_0x57412d[0] === 'enable') {
        const _0x2cf527 = { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }
        await _0x28bc3a
          .sendMessage(_0x3bb103.chat, _0x2cf527)
          .then((_0x5143ca) => _0x5b2eb9(jsonformat(_0x5143ca)))
          .catch((_0x15c851) => _0x5b2eb9(jsonformat(_0x15c851)))
      } else {
        if (_0x57412d[0] === 'disable') {
          const _0x592071 = { disappearingMessagesInChat: false }
          await _0x28bc3a
            .sendMessage(_0x3bb103.chat, _0x592071)
            .then((_0x1d737b) => _0x5b2eb9(jsonformat(_0x1d737b)))
            .catch((_0x3e757c) => _0x5b2eb9(jsonformat(_0x3e757c)))
        }
      }
      const _0x53ea34 = {}
      _0x53ea34.text = '\u2705'
      _0x53ea34.key = _0x3bb103.key
      const _0x5b9d04 = {}
      _0x5b9d04.react = _0x53ea34
      await _0x28bc3a.sendMessage(_0x376b8c, _0x5b9d04)
    } catch (_0x472af8) {
      _0x5b2eb9('*Error !!*')
      _0x50cb60(_0x472af8)
    }
  }
)
const _0x42c101 = {}
_0x42c101.pattern = 'autoreadsw'
_0x42c101.react = '\uD83D\uDD16'
_0x42c101.desc = 'To desappear & appear messages'
_0x42c101.category = 'group'
_0x42c101.use = '.autoreadsw'
_0x42c101.filename = __filename
cmd(
  _0x42c101,
  async (
    _0x396066,
    _0x15957f,
    _0x22e2d6,
    {
      from: _0x94e479,
      prefix: _0x41d6a7,
      l: _0x412699,
      quoted: _0x424083,
      body: _0x46506e,
      isCmd: _0x504133,
      command: _0x328403,
      args: _0xc412f,
      q: _0x42bec4,
      isGroup: _0x2b69cf,
      sender: _0x435312,
      senderNumber: _0x319871,
      botNumber2: _0x354d18,
      botNumber: _0x4ae6e2,
      pushname: _0x3bb4e2,
      isMe: _0x695dd3,
      isOwner: _0x131838,
      groupMetadata: _0x2fcd8b,
      groupName: _0x478d32,
      participants: _0x54cf99,
      groupAdmins: _0x19413b,
      isBotAdmins: _0x425705,
      isAdmins: _0x537507,
      reply: _0x1342a9,
    }
  ) => {
    try {
      if (_0xc412f[0] == 'on') {
        if (autoreadsw) {
          return _0x1342a9('*Already activated!*')
        }
        autoreadsw = true
        _0x1342a9('*Successfully activate auto read status*')
      } else {
        if (_0xc412f[0] == 'off') {
          if (!autoreadsw) {
            return _0x1342a9('*Already deactivated!*')
          }
          autoreadsw = false
          _0x1342a9('*Successfully turn off auto read status*')
        } else {
          _0x1342a9('Choose on or off!')
        }
      }
      const _0x2b59d8 = {
        text: '\u2705',
        key: _0x15957f.key,
      }
      const _0x480261 = { react: _0x2b59d8 }
      await _0x396066.sendMessage(_0x94e479, _0x480261)
    } catch (_0x26d774) {
      _0x1342a9('*Error !!*')
      _0x412699(_0x26d774)
    }
  }
)
const _0x17eed8 = {}
_0x17eed8.pattern = 'delete'
_0x17eed8.react = '\uD83D\uDD16'
_0x17eed8.desc = 'To delete message'
_0x17eed8.category = 'group'
_0x17eed8.use = '.delete'
_0x17eed8.filename = __filename
cmd(
  _0x17eed8,
  async (
    _0x5378bb,
    _0x356919,
    _0x5734dd,
    {
      from: _0x8cdc0b,
      prefix: _0x1ed52d,
      l: _0x2e599c,
      quoted: _0x47c6e1,
      body: _0x41dbea,
      isCmd: _0x37e0b0,
      command: _0x2870a7,
      args: _0x39587d,
      q: _0x18da9e,
      isGroup: _0x24a0f2,
      sender: _0x36ef6e,
      senderNumber: _0x106275,
      botNumber2: _0x14d019,
      botNumber: _0x156e8c,
      pushname: _0x1c1464,
      isMe: _0x4d739e,
      isOwner: _0x5ecb77,
      groupMetadata: _0x387f94,
      groupName: _0x12e41f,
      participants: _0x513f02,
      groupAdmins: _0x59aac1,
      isBotAdmins: _0x4c69bd,
      isAdmins: _0x4317e0,
      reply: _0x1c2312,
    }
  ) => {
    try {
      if (!_0x5734dd.quoted) {
        throw false
      }
      let {
          chat: _0x3483de,
          fromMe: _0x528dfc,
          id: _0x4864d9,
          isBaileys: _0x44a7ea,
        } = _0x5734dd.quoted,
        _0x213633 = 'The message was not sent by a bot!'
      _0x5378bb.sendMessage(_0x5734dd.chat, {
        delete: {
          remoteJid: _0x5734dd.chat,
          fromMe: true,
          id: _0x5734dd.quoted.id,
          participant: _0x5734dd.quoted.sender,
        },
      })
      const _0x52a681 = {
        text: '\u2705',
        key: _0x356919.key,
      }
      const _0x560725 = { react: _0x52a681 }
      await _0x5378bb.sendMessage(_0x8cdc0b, _0x560725)
    } catch (_0x4e41ba) {
      _0x1c2312('*Error !!*')
      _0x2e599c(_0x4e41ba)
    }
  }
)
const _0x5713c5 = {}
_0x5713c5.pattern = 'join'
_0x5713c5.react = '\uD83D\uDD16'
_0x5713c5.desc = 'To join a group'
_0x5713c5.category = 'group'
_0x5713c5.use = '.join'
_0x5713c5.filename = __filename
cmd(
  _0x5713c5,
  async (
    _0x15182e,
    _0x42cbab,
    _0x260501,
    {
      from: _0x2084fa,
      prefix: _0x3fd240,
      l: _0x20e10e,
      quoted: _0x1bc704,
      body: _0x24959f,
      isCmd: _0x4b4adb,
      command: _0x52e107,
      args: _0x2389d6,
      q: _0xb855a4,
      isGroup: _0x24e6d0,
      sender: _0xb9cfdf,
      senderNumber: _0x49de10,
      botNumber2: _0x3312ea,
      botNumber: _0x48f400,
      pushname: _0x149566,
      isMe: _0x22138f,
      isOwner: _0x24c5e8,
      groupMetadata: _0x1cc27a,
      groupName: _0x7d01b6,
      participants: _0x39b0be,
      groupAdmins: _0x24266c,
      isBotAdmins: _0x5b98e4,
      isAdmins: _0x11b5ab,
      reply: _0x53a1ec,
    }
  ) => {
    try {
      if (!_0x22138f) {
        return await _0x53a1ec(BOTOW)
      }
      if (!_0xb855a4) {
        throw 'Enter the Group Link!'
      }
      if (!isUrl(_0x2389d6[0]) && !_0x2389d6[0].includes('whatsapp.com')) {
        throw 'Invalid Link!'
      }
      _0x53a1ec()
      let _0xede5a5 = _0x2389d6[0].split('https://chat.whatsapp.com/')[1]
      await _0x15182e
        .groupAcceptInvite(_0xede5a5)
        .then((_0x3ed85c) => _0x53a1ec(jsonformat(_0x3ed85c)))
        .catch((_0x1ab8ed) => _0x53a1ec(jsonformat(_0x1ab8ed)))
      const _0x4e41e3 = {
        text: '\u2705',
        key: _0x42cbab.key,
      }
      const _0x1916b9 = { react: _0x4e41e3 }
      await _0x15182e.sendMessage(_0x2084fa, _0x1916b9)
    } catch (_0x162995) {
      _0x53a1ec('*Error !!*')
      _0x20e10e(_0x162995)
    }
  }
)
const _0x33b1f1 = {}
_0x33b1f1.pattern = 'leave'
_0x33b1f1.react = '\uD83D\uDD16'
_0x33b1f1.desc = 'To leave a group'
_0x33b1f1.category = 'group'
_0x33b1f1.use = '.leave'
_0x33b1f1.filename = __filename
cmd(
  _0x33b1f1,
  async (
    _0x4ddbc9,
    _0x1a0992,
    _0x525c8b,
    {
      from: _0x5b71a0,
      prefix: _0x29219e,
      l: _0x13e7ac,
      quoted: _0x11046e,
      body: _0x159be8,
      isCmd: _0x513d57,
      command: _0xc827ee,
      args: _0x5797b2,
      q: _0x5b83c0,
      isGroup: _0xf155dd,
      sender: _0x7c7caa,
      senderNumber: _0x41c9c4,
      botNumber2: _0x2baf5d,
      botNumber: _0x843dd8,
      pushname: _0x5009f0,
      isMe: _0x5d9d4e,
      isOwner: _0x557ad2,
      groupMetadata: _0x4b026b,
      groupName: _0x2f00eb,
      participants: _0x5aa456,
      groupAdmins: _0x3ca74d,
      isBotAdmins: _0x5b41f7,
      isAdmins: _0x2d82d0,
      reply: _0xeceef1,
    }
  ) => {
    try {
      if (!_0x5d9d4e) {
        return await _0xeceef1(BOTOW)
      }
      await _0x4ddbc9
        .groupLeave(_0x1a0992.chat)
        .then((_0x44075a) => _0xeceef1(jsonformat(_0x44075a)))
        .catch((_0x227fd6) => _0xeceef1(jsonformat(_0x227fd6)))
      const _0x117554 = {
        text: '\u2705',
        key: _0x1a0992.key,
      }
      const _0x37bd8b = { react: _0x117554 }
      await _0x4ddbc9.sendMessage(_0x5b71a0, _0x37bd8b)
    } catch (_0x3093d1) {
      _0xeceef1('*Error !!*')
      _0x13e7ac(_0x3093d1)
    }
  }
)
