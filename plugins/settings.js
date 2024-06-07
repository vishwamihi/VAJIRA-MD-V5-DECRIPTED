const { cmd, commands } = require('../lib/command'),
  config = require('../settings')
var { get_set, input_set } = require('../lib/set_db')
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
} = require('../lib/functions')
var BOTOW = ''
if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
} else {
  BOTOW = "*You are not bot's owner or moderator !*"
}
var N_FOUND = ''
if (config.LANG === 'SI') {
  N_FOUND = '*මට කිසිවක් සොයාගත නොහැකි විය :(*'
} else {
  N_FOUND = "*I couldn't find anything :(*"
}
var alredy = ''
if (config.LANG === 'SI') {
  alredy = '*මෙම සැකසුම දැනටමත් යාවත්කාලීන කර ඇත !*'
} else {
  alredy = '*This setting alredy updated !*'
}
if (config.COMMAND_TYPE === 'button') {
  const _0x8d2e29 = {
    pattern: 'setprefix',
    react: '\uD83D\uDDE3️',
    desc: 'To change bot prefix',
    category: 'main',
    use: '.setprefix .',
    filename: __filename,
  }
  cmd(
    _0x8d2e29,
    async (
      _0x2a229b,
      _0x3b12d4,
      _0x2359f4,
      {
        from: _0x36fa0f,
        l: _0x552e9f,
        quoted: _0x28828b,
        body: _0x3d3375,
        isCmd: _0x531559,
        command: _0x477922,
        args: _0x4921fa,
        q: _0x352a73,
        isGroup: _0x5bb68c,
        sender: _0x14eaa1,
        senderNumber: _0x4b4386,
        botNumber2: _0x17a92c,
        botNumber: _0x545163,
        pushname: _0x2a5308,
        isMe: _0xe6fa27,
        isOwner: _0x21ae2b,
        groupMetadata: _0x764389,
        groupName: _0x2a09d0,
        participants: _0x1f9ab9,
        groupAdmins: _0x3256e7,
        isBotAdmins: _0x46a42d,
        isAdmins: _0x6ddd53,
        reply: _0x2a8f39,
      }
    ) => {
      try {
        if (!_0xe6fa27) {
          return await _0x2a8f39(BOTOW)
        }
        if (config.PREFIX == _0x352a73) {
          return _0x2a8f39(alredy)
        }
        return (
          await input_set('PREFIX', _0x352a73), _0x2a8f39('prefix was changed')
        )
      } catch (_0x54aca4) {
        _0x2a8f39('*Error !!*'), _0x552e9f(_0x54aca4)
      }
    }
  )
  const _0x122b4a = {
    pattern: 'setlogo',
    react: '\uD83D\uDDE3️',
    desc: 'To change bot logo',
    category: 'main',
    use: '.setlogo logo url .',
    filename: __filename,
  }
  cmd(
    _0x122b4a,
    async (
      _0x5dc4e5,
      _0x5127d5,
      _0x2297f4,
      {
        from: _0x20608c,
        l: _0x3bae51,
        quoted: _0x5107bf,
        body: _0x5bb3ae,
        isCmd: _0x4983f1,
        command: _0x44c784,
        args: _0x413e67,
        q: _0x3fbbad,
        isGroup: _0x3bedb4,
        sender: _0x5445a1,
        senderNumber: _0x5e8a76,
        botNumber2: _0x33b6f4,
        botNumber: _0x452bcf,
        pushname: _0x35d689,
        isMe: _0xc78807,
        isOwner: _0x4f7226,
        groupMetadata: _0x25ce69,
        groupName: _0x280201,
        participants: _0x26ec67,
        groupAdmins: _0x2e266c,
        isBotAdmins: _0x287a5d,
        isAdmins: _0x491b99,
        reply: _0x2d847e,
      }
    ) => {
      try {
        if (!_0xc78807) {
          return await _0x2d847e(BOTOW)
        }
        if (config.LOGO == _0x3fbbad) {
          return _0x2d847e(alredy)
        }
        return await input_set('LOGO', _0x3fbbad), _0x2d847e('Logo was changed')
      } catch (_0x3b00c7) {
        _0x2d847e('*Error !!*'), _0x3bae51(_0x3b00c7)
      }
    }
  )
  const _0x4a2db7 = {
    pattern: 'anticall',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.anticall on/off',
    filename: __filename,
  }
  cmd(
    _0x4a2db7,
    async (
      _0x35e7b5,
      _0x19cab0,
      _0x5dd070,
      {
        from: _0x5eafec,
        prefix: _0xa56df6,
        l: _0xdd5d63,
        quoted: _0x12662c,
        body: _0x5620de,
        isCmd: _0x2a7aeb,
        command: _0x300aee,
        args: _0xd966f,
        q: _0x300098,
        isGroup: _0x286697,
        sender: _0x5d74b2,
        senderNumber: _0x4a8f22,
        botNumber2: _0x89881c,
        botNumber: _0x5ef96e,
        pushname: _0x37c58d,
        isMe: _0x5866f3,
        isOwner: _0x2857e6,
        groupMetadata: _0x50ce0f,
        groupName: _0x47c89b,
        participants: _0x23e355,
        groupAdmins: _0xf4c253,
        isBotAdmins: _0x12a3cb,
        isAdmins: _0x50774c,
        reply: _0x4aa8ba,
        config: _0xd6597d,
      }
    ) => {
      try {
        if (!_0x5866f3) {
          return await _0x4aa8ba(BOTOW)
        }
        if (_0x300098 == 'on') {
          if (_0xd6597d.ANTI_CALL == 'true') {
            return _0x4aa8ba('already anticall is on ')
          }
          return (
            await input_set('ANTI_CALL', 'true'),
            _0x4aa8ba('Anticall turned on')
          )
        }
        if (_0x300098 == 'off') {
          if (_0xd6597d.ANTI_CALL !== 'true') {
            return _0x4aa8ba('already anticall is off')
          }
          return (
            await input_set('ANTI_CALL', 'false'),
            _0x4aa8ba('Anticall turned off')
          )
        }
      } catch (_0x339245) {
        _0x4aa8ba('*Error !!*'), _0xdd5d63(_0x339245)
      }
    }
  )
  const _0x46e637 = {
    pattern: 'antidelete',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.antidelete on/off',
    filename: __filename,
  }
  cmd(
    _0x46e637,
    async (
      _0x40f88e,
      _0x275650,
      _0x1b16e3,
      {
        from: _0x5ed440,
        prefix: _0x12adf1,
        l: _0x1f5401,
        quoted: _0x11fbcc,
        body: _0x5f19b1,
        isCmd: _0x120125,
        command: _0x5d4e63,
        args: _0x340465,
        q: _0x35792a,
        isGroup: _0x4abb93,
        sender: _0x2f2260,
        senderNumber: _0x12cb1c,
        botNumber2: _0x36eae4,
        botNumber: _0x3e578d,
        pushname: _0x12f0b6,
        isMe: _0x4dec9a,
        isOwner: _0x2d29fc,
        groupMetadata: _0x2d19b1,
        groupName: _0x2772cf,
        participants: _0x4a5ff6,
        groupAdmins: _0x3eddb9,
        isBotAdmins: _0x53fd0c,
        isAdmins: _0x1d6023,
        reply: _0x50da58,
        config: _0x185cc6,
      }
    ) => {
      try {
        if (!_0x4dec9a) {
          return await _0x50da58(BOTOW)
        }
        if (_0x35792a == 'on') {
          if (_0x185cc6.ANTI_DELETE == 'true') {
            return _0x50da58('already Anti Delete On ')
          }
          return (
            await input_set('ANTI_DELETE', 'true'),
            _0x50da58('Anti Delete Turn on')
          )
        }
        if (_0x35792a == 'off') {
          if (_0x185cc6.ANTI_DELETE !== 'true') {
            return _0x50da58('already Anti Delete Off')
          }
          return (
            await input_set('ANTI_DELETE', 'false'),
            _0x50da58('Anti Delete Turn Off')
          )
        }
      } catch (_0x239604) {
        _0x50da58('*Error !!*'), _0x1f5401(_0x239604)
      }
    }
  )
  const _0x3472e8 = {
    pattern: 'autovoice',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.autovoice on/off',
    filename: __filename,
  }
  cmd(
    _0x3472e8,
    async (
      _0x16b000,
      _0x3b7be0,
      _0x270ed0,
      {
        from: _0x1d7f95,
        prefix: _0x55475a,
        l: _0x3cdff2,
        quoted: _0x29d820,
        body: _0x2daad2,
        isCmd: _0x3f2835,
        command: _0x3c5417,
        args: _0x315ae9,
        q: _0x12fe74,
        isGroup: _0x363194,
        sender: _0x32d6ad,
        senderNumber: _0x1855de,
        botNumber2: _0x5973ad,
        botNumber: _0xf8d8ec,
        pushname: _0x238413,
        isMe: _0x3c11ef,
        isOwner: _0x4d9407,
        groupMetadata: _0x42a9a8,
        groupName: _0x33c7c2,
        participants: _0x3b0a80,
        groupAdmins: _0x379cb5,
        isBotAdmins: _0x3c5d18,
        isAdmins: _0xfa0a12,
        reply: _0x3b6477,
        config: _0x2b3e82,
      }
    ) => {
      try {
        if (!_0x3c11ef) {
          return await _0x3b6477(BOTOW)
        }
        if (_0x12fe74 == 'on') {
          if (_0x2b3e82.AUTO_VOICE == 'true') {
            return _0x3b6477('already on ')
          }
          return (
            await input_set('AUTO_VOICE', 'true'),
            _0x3b6477('autovoice turned on')
          )
        }
        if (_0x12fe74 == 'off') {
          if (_0x2b3e82.AUTO_VOICE !== 'true') {
            return _0x3b6477('already off')
          }
          return (
            await input_set('AUTO_VOICE', 'false'),
            _0x3b6477('autovoice turned off')
          )
        }
      } catch (_0x52949b) {
        _0x3b6477('*Error !!*'), _0x3cdff2(_0x52949b)
      }
    }
  )
  const _0x4a138d = {
    pattern: 'autosticker',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.autosticmer on/off',
    filename: __filename,
  }
  cmd(
    _0x4a138d,
    async (
      _0x18f92a,
      _0x5c6918,
      _0x39017c,
      {
        from: _0x34d2ee,
        prefix: _0x25c3ec,
        l: _0x23ba8d,
        quoted: _0x4ec4b4,
        body: _0x42e2b9,
        isCmd: _0x475373,
        command: _0xf11a56,
        args: _0x3bdc61,
        q: _0xe33c6c,
        isGroup: _0x55ae80,
        sender: _0x3062b0,
        senderNumber: _0x413e69,
        botNumber2: _0x49ff11,
        botNumber: _0x470a10,
        pushname: _0x56e492,
        isMe: _0x4bfa3b,
        isOwner: _0x3cf3d8,
        groupMetadata: _0x195cb2,
        groupName: _0x44370a,
        participants: _0x5da9f0,
        groupAdmins: _0x3c256f,
        isBotAdmins: _0x1f73b5,
        isAdmins: _0x3a9f99,
        reply: _0x50c388,
        config: _0x498502,
      }
    ) => {
      try {
        if (!_0x4bfa3b) {
          return await _0x50c388(BOTOW)
        }
        if (_0xe33c6c == 'on') {
          if (_0x498502.AUTO_STICKER == 'true') {
            return _0x50c388('already on ')
          }
          return (
            await input_set('AUTO_STICKER', 'true'),
            _0x50c388('autosticker turned on')
          )
        }
        if (_0xe33c6c == 'off') {
          if (_0x498502.AUTO_STICKER !== 'true') {
            return _0x50c388('already off')
          }
          return (
            await input_set('AUTO_STICKER', 'false'),
            _0x50c388('autosticker turned off')
          )
        }
      } catch (_0x360ada) {
        _0x50c388('*Error !!*'), _0x23ba8d(_0x360ada)
      }
    }
  )
  const _0x27d97b = {
    pattern: 'autobio',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.autobio on/off',
    filename: __filename,
  }
  cmd(
    _0x27d97b,
    async (
      _0x542b70,
      _0x2e68cc,
      _0x5e9892,
      {
        from: _0x381be4,
        prefix: _0x5ed4a0,
        l: _0xf06b6a,
        quoted: _0x31a9eb,
        body: _0x420689,
        isCmd: _0x59ae37,
        command: _0x82ab0c,
        args: _0x331462,
        q: _0x49e896,
        isGroup: _0x5ca208,
        sender: _0x3a4cf7,
        senderNumber: _0x42bd24,
        botNumber2: _0x168594,
        botNumber: _0x2a7d0e,
        pushname: _0x12a10d,
        isMe: _0x5a490f,
        isOwner: _0x51e8e4,
        groupMetadata: _0x42a005,
        groupName: _0x107590,
        participants: _0x29903d,
        groupAdmins: _0x4cb30e,
        isBotAdmins: _0x4b34c1,
        isAdmins: _0x1e3fe4,
        reply: _0xae502e,
        config: _0x1455a7,
      }
    ) => {
      try {
        if (!_0x5a490f) {
          return await _0xae502e(BOTOW)
        }
        if (_0x49e896 == 'on') {
          if (_0x1455a7.AUTO_BIO == 'true') {
            return _0xae502e('already on ')
          }
          return (
            await input_set('AUTO_BIO', 'true'), _0xae502e('autobio turned on')
          )
        }
        if (_0x49e896 == 'off') {
          if (_0x1455a7.AUTO_BIO !== 'true') {
            return _0xae502e('already off')
          }
          return (
            await input_set('AUTO_BIO', 'false'),
            _0xae502e('autobio turned off')
          )
        }
      } catch (_0x482c17) {
        _0xae502e('*Error !!*'), _0xf06b6a(_0x482c17)
      }
    }
  )
  const _0xf355ff = {
    pattern: 'autowelcome',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.autowelcome on/off',
    filename: __filename,
  }
  cmd(
    _0xf355ff,
    async (
      _0x154b0d,
      _0x3b4b05,
      _0x517e4f,
      {
        from: _0x17ba90,
        prefix: _0x3445a7,
        l: _0x3c51fe,
        quoted: _0x2ed224,
        body: _0x4661aa,
        isCmd: _0x51333f,
        command: _0x551cb1,
        args: _0x12d843,
        q: _0x316dd7,
        isGroup: _0x2a1dcc,
        sender: _0x552009,
        senderNumber: _0x5775d7,
        botNumber2: _0xc58338,
        botNumber: _0x18c8a4,
        pushname: _0x4442aa,
        isMe: _0xe1b7ea,
        isOwner: _0x195d8e,
        groupMetadata: _0x57c060,
        groupName: _0x3c53a7,
        participants: _0x21db63,
        groupAdmins: _0x18a90b,
        isBotAdmins: _0x545b15,
        isAdmins: _0x280fce,
        reply: _0x3c1c45,
        config: _0x279519,
      }
    ) => {
      try {
        if (!_0xe1b7ea) {
          return await _0x3c1c45(BOTOW)
        }
        if (_0x316dd7 == 'on') {
          if (_0x279519.WELCOME == 'true') {
            return _0x3c1c45('already on ')
          }
          return (
            await input_set('WELCOME', 'true'),
            _0x3c1c45('autowelcome turned on')
          )
        }
        if (_0x316dd7 == 'off') {
          if (_0x279519.WELCOME !== 'true') {
            return _0x3c1c45('already off')
          }
          return (
            await input_set('WELCOME', 'false'),
            _0x3c1c45('autowelcome turned off')
          )
        }
      } catch (_0x6181c7) {
        _0x3c1c45('*Error !!*'), _0x3c51fe(_0x6181c7)
      }
    }
  )
  const _0x2691a5 = {
    pattern: 'antibot',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.antibot on/off',
    filename: __filename,
  }
  cmd(
    _0x2691a5,
    async (
      _0x360fcf,
      _0x14fba7,
      _0x105376,
      {
        from: _0x376a29,
        prefix: _0x136cb2,
        l: _0x2d47a0,
        quoted: _0x5a79d2,
        body: _0x56d59e,
        isCmd: _0x5a8fe9,
        command: _0x3a76f8,
        args: _0x2b5275,
        q: _0xbf3d46,
        isGroup: _0x937b68,
        sender: _0x2dd2b3,
        senderNumber: _0x931163,
        botNumber2: _0x4bf962,
        botNumber: _0x3aadcb,
        pushname: _0x54a6f0,
        isMe: _0x10a06b,
        isOwner: _0x4e8cd5,
        groupMetadata: _0x4240f1,
        groupName: _0x1fbbe6,
        participants: _0x50bd2e,
        groupAdmins: _0x14de9e,
        isBotAdmins: _0x4aefee,
        isAdmins: _0x5046e6,
        reply: _0x2faf34,
        config: _0x4dac9e,
      }
    ) => {
      try {
        if (!_0x10a06b) {
          return await _0x2faf34(BOTOW)
        }
        if (_0xbf3d46 == 'on') {
          if (_0x4dac9e.ANTI_BOT == 'true') {
            return _0x2faf34('already on ')
          }
          return (
            await input_set('ANTI_BOT', 'true'), _0x2faf34('antibot turned on')
          )
        }
        if (_0xbf3d46 == 'off') {
          if (_0x4dac9e.ANTI_BOT !== 'true') {
            return _0x2faf34('already off')
          }
          return (
            await input_set('ANTI_BOT', 'false'),
            _0x2faf34('antibot turned off')
          )
        }
      } catch (_0x1f11c5) {
        _0x2faf34('*Error !!*'), _0x2d47a0(_0x1f11c5)
      }
    }
  )
  const _0x583217 = {
    pattern: 'antilink',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.antilink on/off',
    filename: __filename,
  }
  cmd(
    _0x583217,
    async (
      _0x15c152,
      _0x2e76f9,
      _0x4acf13,
      {
        from: _0x419cbc,
        prefix: _0xb81005,
        l: _0x4f0a90,
        quoted: _0x582a46,
        body: _0x5d8829,
        isCmd: _0x44e2ee,
        command: _0x5f5787,
        args: _0x47dd0f,
        q: _0x3a0c22,
        isGroup: _0x28e529,
        sender: _0x2dc62d,
        senderNumber: _0x2ab943,
        botNumber2: _0xbb96c5,
        botNumber: _0x31b379,
        pushname: _0x1a71d8,
        isMe: _0x19069d,
        isOwner: _0x82e722,
        groupMetadata: _0x55b6b0,
        groupName: _0x27dc8f,
        participants: _0x36133d,
        groupAdmins: _0x26255a,
        isBotAdmins: _0x15f57e,
        isAdmins: _0x51b672,
        reply: _0x42c45c,
        config: _0x5f3bd0,
      }
    ) => {
      try {
        if (!_0x19069d) {
          return await _0x42c45c(BOTOW)
        }
        if (_0x3a0c22 == 'on') {
          if (_0x5f3bd0.ANTI_LINK == 'true') {
            return _0x42c45c('already on ')
          }
          return (
            await input_set('ANTI_LINK', 'true'),
            _0x42c45c('antilink turned on')
          )
        }
        if (_0x3a0c22 == 'off') {
          if (_0x5f3bd0.ANTI_LINK !== 'true') {
            return _0x42c45c('already off')
          }
          return (
            await input_set('ANTI_LINK', 'false'),
            _0x42c45c('antilink turned off')
          )
        }
      } catch (_0x749564) {
        _0x42c45c('*Error !!*'), _0x4f0a90(_0x749564)
      }
    }
  )
  const _0x853c5a = {
    pattern: 'antibad',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.antibad on/off',
    filename: __filename,
  }
  cmd(
    _0x853c5a,
    async (
      _0x202e6c,
      _0x50fb4a,
      _0x4add44,
      {
        from: _0x3e9365,
        prefix: _0x50a8c7,
        l: _0x3774cf,
        quoted: _0x5a7839,
        body: _0x2e7a9a,
        isCmd: _0xf6e16e,
        command: _0x99ebf9,
        args: _0x55b531,
        q: _0x3245d1,
        isGroup: _0x2d30af,
        sender: _0x2c40a3,
        senderNumber: _0xbca7fe,
        botNumber2: _0x3974b7,
        botNumber: _0x3e44b6,
        pushname: _0x19abef,
        isMe: _0x239128,
        isOwner: _0x1f7f13,
        groupMetadata: _0x118595,
        groupName: _0x24b51b,
        participants: _0x496e55,
        groupAdmins: _0x2ab5d5,
        isBotAdmins: _0x467972,
        isAdmins: _0x1592b1,
        reply: _0x126a62,
        config: _0x487470,
      }
    ) => {
      try {
        if (!_0x239128) {
          return await _0x126a62(BOTOW)
        }
        if (_0x3245d1 == 'on') {
          if (_0x487470.ANTI_BAD == 'true') {
            return _0x126a62('already on ')
          }
          return (
            await input_set('ANTI_BAD', 'true'), _0x126a62('antibad turned on')
          )
        }
        if (_0x3245d1 == 'off') {
          if (_0x487470.ANTI_BAD !== 'true') {
            return _0x126a62('already off')
          }
          return (
            await input_set('ANTI_BAD', 'false'),
            _0x126a62('antibad turned off')
          )
        }
      } catch (_0xb5d79b) {
        _0x126a62('*Error !!*')
        _0x3774cf(_0xb5d79b)
      }
    }
  )
  const _0x963eb9 = {
    pattern: 'autostatus',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.autostatus on/off',
    filename: __filename,
  }
  cmd(
    _0x963eb9,
    async (
      _0x77073a,
      _0x5b5711,
      _0x3fee45,
      {
        from: _0x1f288b,
        prefix: _0x2e214b,
        l: _0x2a675e,
        quoted: _0x3881c5,
        body: _0x18d35b,
        isCmd: _0xf2ddb2,
        command: _0x1aa3da,
        args: _0x255682,
        q: _0x1f8d7b,
        isGroup: _0x4f1b4c,
        sender: _0x2ebc17,
        senderNumber: _0x2a40b2,
        botNumber2: _0x48c909,
        botNumber: _0x1d01f4,
        pushname: _0x21df4e,
        isMe: _0xf55678,
        isOwner: _0x3b3a2c,
        groupMetadata: _0x370a56,
        groupName: _0x2adf34,
        participants: _0x7d74d3,
        groupAdmins: _0x1ddd4d,
        isBotAdmins: _0x23fbbc,
        isAdmins: _0x15d37b,
        reply: _0x22a1a8,
        config: _0x579e03,
      }
    ) => {
      try {
        if (!_0xf55678) {
          return await _0x22a1a8(BOTOW)
        }
        if (_0x1f8d7b == 'on') {
          if (_0x579e03.AUTO_STATUS_READ == 'true') {
            return _0x22a1a8('already on ')
          }
          return (
            await input_set('AUTO_STATUS_READ', 'true'),
            _0x22a1a8('autostatus turned on')
          )
        }
        if (_0x1f8d7b == 'off') {
          if (_0x579e03.AUTO_STATUS_READ !== 'true') {
            return _0x22a1a8('already off')
          }
          return (
            await input_set('AUTO_STATUS_READ', 'false'),
            _0x22a1a8('autostatus turned off')
          )
        }
      } catch (_0x534252) {
        _0x22a1a8('*Error !!*')
        _0x2a675e(_0x534252)
      }
    }
  )
  const _0x54ff4d = {
    pattern: 'autotyping',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.autotyping on/off',
    filename: __filename,
  }
  cmd(
    _0x54ff4d,
    async (
      _0x10d574,
      _0x189df4,
      _0x3a712c,
      {
        from: _0x26338c,
        prefix: _0x497508,
        l: _0x2936e3,
        quoted: _0x25098a,
        body: _0x3e7324,
        isCmd: _0x229ba1,
        command: _0x174188,
        args: _0xdaa62b,
        q: _0x38c152,
        isGroup: _0x31846c,
        sender: _0xb4b723,
        senderNumber: _0xa4c200,
        botNumber2: _0x1cb67f,
        botNumber: _0x4e14ef,
        pushname: _0x161909,
        isMe: _0x3e0c24,
        isOwner: _0x453428,
        groupMetadata: _0x4ee1bf,
        groupName: _0x53ac68,
        participants: _0x4bfccd,
        groupAdmins: _0x1c5ac3,
        isBotAdmins: _0x5c9181,
        isAdmins: _0x38b7e4,
        reply: _0x298849,
        config: _0x367683,
      }
    ) => {
      try {
        if (!_0x3e0c24) {
          return await _0x298849(BOTOW)
        }
        if (_0x38c152 == 'on') {
          if (_0x367683.AUTO_TYPING == 'true') {
            return _0x298849('already on ')
          }
          return (
            await input_set('AUTO_TYPING', 'true'),
            _0x298849('autotyping turned on')
          )
        }
        if (_0x38c152 == 'off') {
          if (_0x367683.AUTO_TYPING !== 'true') {
            return _0x298849('already off')
          }
          return (
            await input_set('AUTO_TYPING', 'false'),
            _0x298849('autotyping turned off')
          )
        }
      } catch (_0x467022) {
        _0x298849('*Error !!*')
        _0x2936e3(_0x467022)
      }
    }
  )
  const _0x3b6f77 = {
    pattern: 'autorecording',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.autorecording on/off',
    filename: __filename,
  }
  cmd(
    _0x3b6f77,
    async (
      _0x17ad69,
      _0x311e8a,
      _0x5bde23,
      {
        from: _0x15cff1,
        prefix: _0x123463,
        l: _0x3bb480,
        quoted: _0x194fb3,
        body: _0x5cc2a2,
        isCmd: _0x2b3bb1,
        command: _0x251556,
        args: _0x9fa0e5,
        q: _0x5c054b,
        isGroup: _0x47095c,
        sender: _0x48e5a7,
        senderNumber: _0x5a784c,
        botNumber2: _0x84a6a1,
        botNumber: _0x15798e,
        pushname: _0x4fc2cb,
        isMe: _0xe2f940,
        isOwner: _0x4eebb3,
        groupMetadata: _0x594af3,
        groupName: _0x36c2c6,
        participants: _0x4e8709,
        groupAdmins: _0x5098aa,
        isBotAdmins: _0x204255,
        isAdmins: _0x56dbda,
        reply: _0x2de130,
        config: _0x578a75,
      }
    ) => {
      try {
        if (!_0xe2f940) {
          return await _0x2de130(BOTOW)
        }
        if (_0x5c054b == 'on') {
          if (_0x578a75.AUTO_RECORDING == 'true') {
            return _0x2de130('already on ')
          }
          return (
            await input_set('AUTO_RECORDING', 'true'),
            _0x2de130('autorecording turned on')
          )
        }
        if (_0x5c054b == 'off') {
          if (_0x578a75.AUTO_RECORDING !== 'true') {
            return _0x2de130('already off')
          }
          return (
            await input_set('AUTO_RECORDING', 'false'),
            _0x2de130('autorecording turned off')
          )
        }
      } catch (_0x292ef3) {
        _0x2de130('*Error !!*')
        _0x3bb480(_0x292ef3)
      }
    }
  )
  const _0x2174fe = {
    pattern: 'autoread',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.autotyping on/off',
    filename: __filename,
  }
  cmd(
    _0x2174fe,
    async (
      _0x323d99,
      _0x1a994f,
      _0x46e844,
      {
        from: _0x21fd5b,
        prefix: _0x5b3278,
        l: _0xc261b4,
        quoted: _0xa2d22d,
        body: _0x3a59c2,
        isCmd: _0x5ccde4,
        command: _0x462572,
        args: _0x3a0cef,
        q: _0x7d28ea,
        isGroup: _0x4e58e1,
        sender: _0x470843,
        senderNumber: _0x10522f,
        botNumber2: _0x52b773,
        botNumber: _0x1198cd,
        pushname: _0x45bb32,
        isMe: _0x3725fa,
        isOwner: _0x3aaba0,
        groupMetadata: _0x128978,
        groupName: _0x1884b4,
        participants: _0x178f39,
        groupAdmins: _0x4e7dd1,
        isBotAdmins: _0x44b1e4,
        isAdmins: _0x3dee16,
        reply: _0x65bb41,
        config: _0x2cd02f,
      }
    ) => {
      try {
        if (!_0x3725fa) {
          return await _0x65bb41(BOTOW)
        }
        if (_0x7d28ea == 'on') {
          if (_0x2cd02f.AUTO_READ == 'true') {
            return _0x65bb41('already on ')
          }
          return (
            await input_set('AUTO_READ', 'true'),
            _0x65bb41('autoread turned on')
          )
        }
        if (_0x7d28ea == 'off') {
          if (_0x2cd02f.AUTO_READ !== 'true') {
            return _0x65bb41('already off')
          }
          return (
            await input_set('AUTO_READ', 'false'),
            _0x65bb41('autoread turned off')
          )
        }
      } catch (_0x2ddc87) {
        _0x65bb41('*Error !!*')
        _0xc261b4(_0x2ddc87)
      }
    }
  )
  const _0x542a9a = {
    pattern: 'autoreact',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.autoreact on/off',
    filename: __filename,
  }
  cmd(
    _0x542a9a,
    async (
      _0x2722d3,
      _0x3cae29,
      _0x53865a,
      {
        from: _0x52d2ba,
        prefix: _0x210e89,
        l: _0x4cc826,
        quoted: _0x5c7c6e,
        body: _0x54adcb,
        isCmd: _0x439fd1,
        command: _0x27a23e,
        args: _0x1b92f2,
        q: _0x2f1c5a,
        isGroup: _0x277459,
        sender: _0x5d49cf,
        senderNumber: _0x1c1142,
        botNumber2: _0x10bb99,
        botNumber: _0x29a4f0,
        pushname: _0x25d7b5,
        isMe: _0x5c13ce,
        isOwner: _0x52e12c,
        groupMetadata: _0x28c458,
        groupName: _0x4937db,
        participants: _0x5a817c,
        groupAdmins: _0x4f257f,
        isBotAdmins: _0x5a502e,
        isAdmins: _0x20c249,
        reply: _0x4f883b,
        config: _0x293efd,
      }
    ) => {
      try {
        if (!_0x5c13ce) {
          return await _0x4f883b(BOTOW)
        }
        if (_0x2f1c5a == 'on') {
          if (_0x293efd.AUTO_REACT == 'true') {
            return _0x4f883b('already on ')
          }
          return (
            await input_set('AUTO_REACT', 'true'),
            _0x4f883b('autoreact turned on')
          )
        }
        if (_0x2f1c5a == 'off') {
          if (_0x293efd.AUTO_REACT !== 'true') {
            return _0x4f883b('already off')
          }
          return (
            await input_set('AUTO_REACT', 'false'),
            _0x4f883b('autoreact turned off')
          )
        }
      } catch (_0x2f2405) {
        _0x4f883b('*Error !!*')
        _0x4cc826(_0x2f2405)
      }
    }
  )
  const _0x2c2de9 = {
    pattern: 'alwaysonline',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.alwaysonline on/off',
    filename: __filename,
  }
  cmd(
    _0x2c2de9,
    async (
      _0x3b0981,
      _0xb1a8f4,
      _0xe8b6d0,
      {
        from: _0x2248bc,
        prefix: _0x229b8c,
        l: _0x3135cd,
        quoted: _0x365d6e,
        body: _0x2d44d9,
        isCmd: _0x1af41c,
        command: _0x2cc5b0,
        args: _0x387f0e,
        q: _0x5fca0b,
        isGroup: _0x534405,
        sender: _0xc79059,
        senderNumber: _0x36010b,
        botNumber2: _0xb40963,
        botNumber: _0x3ed4d6,
        pushname: _0xd57c3e,
        isMe: _0x384056,
        isOwner: _0x4f0e9b,
        groupMetadata: _0x3ccfee,
        groupName: _0x2902e4,
        participants: _0x355da5,
        groupAdmins: _0x828f4e,
        isBotAdmins: _0x15422a,
        isAdmins: _0x3af8e0,
        reply: _0x5129a9,
        config: _0x1ae29a,
      }
    ) => {
      try {
        if (!_0x384056) {
          return await _0x5129a9(BOTOW)
        }
        if (_0x5fca0b == 'on') {
          if (_0x1ae29a.ALWAYS_ONLINE == 'true') {
            return _0x5129a9('already on ')
          }
          return (
            await input_set('ALWAYS_ONLINE', 'true'),
            _0x5129a9('alwaysonline turned on')
          )
        }
        if (_0x5fca0b == 'off') {
          if (_0x1ae29a.ALWAYS_ONLINE !== 'true') {
            return _0x5129a9('already off')
          }
          return (
            await input_set('ALWAYS_ONLINE', 'false'),
            _0x5129a9('alwaysonline turned off')
          )
        }
      } catch (_0x480e59) {
        _0x5129a9('*Error !!*')
        _0x3135cd(_0x480e59)
      }
    }
  )
  const _0x4b8a1e = {
    pattern: '212block',
    react: '\uD83D\uDDE3️',
    desc: '',
    category: '',
    use: '.212block on/off',
    filename: __filename,
  }
  cmd(
    _0x4b8a1e,
    async (
      _0x25f9c6,
      _0x1b9f61,
      _0x29b791,
      {
        from: _0x303b3d,
        prefix: _0x4e1b45,
        l: _0x1e0497,
        quoted: _0x289ab6,
        body: _0x52e2f8,
        isCmd: _0x1868aa,
        command: _0x26b20c,
        args: _0x3b6e24,
        q: _0x437a59,
        isGroup: _0x485292,
        sender: _0x3f2b91,
        senderNumber: _0x382f43,
        botNumber2: _0xed13e7,
        botNumber: _0x7a1c18,
        pushname: _0x49f3ee,
        isMe: _0x5e7f49,
        isOwner: _0x24144a,
        groupMetadata: _0xef38f2,
        groupName: _0x29a2ff,
        participants: _0x6679ab,
        groupAdmins: _0x423d51,
        isBotAdmins: _0x386896,
        isAdmins: _0xe57535,
        reply: _0x3a0803,
        config: _0x440844,
      }
    ) => {
      try {
        if (!_0x5e7f49) {
          return await _0x3a0803(BOTOW)
        }
        if (_0x437a59 == 'on') {
          if (_0x440844.NUMBER_212_BLOCK == 'true') {
            return _0x3a0803('already on ')
          }
          return (
            await input_set('NUMBER_212_BLOCK', 'true'),
            _0x3a0803('212block turned on')
          )
        }
        if (_0x437a59 == 'off') {
          if (_0x440844.NUMBER_212_BLOCK !== 'true') {
            return _0x3a0803('already off')
          }
          return (
            await input_set('NUMBER_212_BLOCK', 'false'),
            _0x3a0803('212block turned off')
          )
        }
      } catch (_0x544a5b) {
        _0x3a0803('*Error !!*')
        _0x1e0497(_0x544a5b)
      }
    }
  )
  const _0x4b9b09 = {
    pattern: 'settings',
    react: '\uD83D\uDDC3️',
    desc: 'settings.',
    category: 'main',
    use: '.settings',
    filename: __filename,
  }
  cmd(
    _0x4b9b09,
    async (
      _0x30976f,
      _0x2fc6e6,
      _0x1201b4,
      {
        from: _0x422459,
        l: _0xe05ae7,
        prefix: _0x1b2f29,
        quoted: _0x2ba5da,
        body: _0x4b93c1,
        isCmd: _0x43ca3d,
        command: _0x427325,
        args: _0x153cd2,
        q: _0x5180fd,
        isGroup: _0x526ff9,
        sender: _0x4612c3,
        senderNumber: _0x3882d6,
        botNumber2: _0x11a016,
        botNumber: _0x495029,
        pushname: _0xe4df49,
        isMe: _0x2cb723,
        isOwner: _0x1c9263,
        groupMetadata: _0x558fe2,
        groupName: _0x55ce3d,
        participants: _0x9cbc14,
        groupAdmins: _0x1e74db,
        isBotAdmins: _0x1666db,
        isAdmins: _0x2d0728,
        reply: _0x1f243f,
      }
    ) => {
      try {
        if (!_0x2cb723) {
          return await _0x1f243f(BOTOW)
        }
        const _0x30c49e =
            '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *VAJIRA MD SETTINGS*',
          _0x424623 = [],
          _0x414f60 = {
            header: 'WORK_TYPE',
            title: 'To Enable/disable Work Type',
            description: 'Work type settings',
            id: '.worktype1',
          }
        _0x424623.push(_0x414f60)
        _0x424623.push(_0x2d5e85)
        _0x424623.push(_0x19589a)
        _0x424623.push(_0x132be1)
        _0x424623.push(_0x2cacab)
        _0x424623.push(_0x3da6d2)
        _0x424623.push(_0x2c307e)
        _0x424623.push(_0x1bdde8)
        _0x424623.push(_0x4ac48a)
        _0x424623.push(_0x10176e)
        _0x424623.push(_0x2c4a69)
        _0x424623.push(_0x4a8fb4)
        _0x424623.push(_0x289b91)
        _0x424623.push(_0x6527c4)
        _0x424623.push(_0x22c667)
        _0x424623.push(_0x2dbe1b)
        _0x424623.push(_0x59661b)
        _0x424623.push(_0x350fee)
        const _0x2d5e85 = {
          header: 'DISABLE_PM',
          title: 'To Enable/disable Only Group',
          description: 'Disablr Pm settings',
          id: '.disablepm1',
        }
        const _0x19589a = {
          header: 'AUTO_VOICE',
          title: 'To Enable/disable Auto Voice',
          description: 'Voice Settings',
          id: '.autovoice1',
        }
        const _0x132be1 = {
          header: 'AUTO_STICKER',
          title: 'To Enable/disable Auto Voice',
          description: 'Sticker Settings',
          id: '.autosticker1',
        }
        const _0x2cacab = {
          header: 'AUTO_BIO',
          title: 'To Enable/disable Auto Bio',
          description: 'Bio Settings',
          id: '.autobio1',
        }
        const _0x3da6d2 = {
          header: 'AUTO_STATUS_VIEW',
          title: 'To Enable/disable Auto Status View',
          description: 'Auto Status Settings',
          id: '.autosview1',
        }
        const _0x2c307e = {
          header: 'AUTO_TYPING',
          title: 'To Enable/disable Auto Typing',
          description: 'Auto Typing Settings',
          id: '.autotype1',
        }
        const _0x1bdde8 = {
          header: 'AUTO_RECORDING',
          title: 'To Enable/disable Auto Recording',
          description: ' Auto Recording Settings',
          id: '.autorecord1',
        }
        const _0x4ac48a = {
          header: 'AUTO_READ',
          title: 'To Enable/disable Auto Read',
          description: 'Auto Read Settings',
          id: '.autoread1',
        }
        const _0x10176e = {
          header: 'AUTO_REACT',
          title: 'To Enable/disable Auto React',
          description: 'Auto React Settings',
          id: '.autoreact1',
        }
        const _0x2c4a69 = {
          header: 'ALWAYS_ONLINE',
          title: 'To Enable/disable Always Online',
          description: 'Always Onlind Settings',
          id: '.alwaysonline1',
        }
        const _0x4a8fb4 = {
          header: 'NO_BLOCK',
          title: 'To Enable/disable 212 No',
          description: '212 No Block Settings',
          id: '.212block1',
        }
        const _0x289b91 = {
          header: 'AUTO_WELCOME',
          title: 'To Enable/disable Auto Welcome',
          description: 'Welcome Settings',
          id: '.autowelcome1',
        }
        const _0x6527c4 = {
          header: 'ANTI_BOT',
          title: 'To Enable/disable AntiBot',
          description: 'AntiBot Settings',
          id: '.antibot1',
        }
        const _0x22c667 = {
          header: 'ANTI_LINK',
          title: 'To Enable/disable AntiLink',
          description: 'AntiLink Settings',
          id: '.antilink1',
        }
        const _0x2dbe1b = {
          header: 'ANTI_BAD',
          title: 'To Enable/disable AntiBad',
          description: 'AntiBaad Settings',
          id: '.antibad1',
        }
        const _0x59661b = {
          header: 'ANTI_DELETE',
          title: 'To Enable/disable AntiDelete',
          description: 'AntiDelete Settings',
          id: '.antidelete1',
        }
        const _0x350fee = {
          header: 'ANTI_CALL',
          title: 'To Enable/disable AntiCALL',
          description: 'AntiCall Settings',
          id: '.anticall1',
        }
        _0x424623.push(_0x414f60),
          _0x424623.push(_0x2d5e85),
          _0x424623.push(_0x19589a),
          _0x424623.push(_0x132be1),
          _0x424623.push(_0x2cacab),
          _0x424623.push(_0x3da6d2),
          _0x424623.push(_0x2c307e),
          _0x424623.push(_0x1bdde8),
          _0x424623.push(_0x4ac48a),
          _0x424623.push(_0x10176e),
          _0x424623.push(_0x2c4a69),
          _0x424623.push(_0x4a8fb4),
          _0x424623.push(_0x289b91),
          _0x424623.push(_0x6527c4),
          _0x424623.push(_0x22c667),
          _0x424623.push(_0x2dbe1b),
          _0x424623.push(_0x59661b),
          _0x424623.push(_0x350fee)
        const _0x42c277 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL,
        }
        let _0xf8f362 = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify(_0x42c277),
          },
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Select a Category :)',
              sections: [
                {
                  title: 'Please select a category',
                  highlight_label: 'VAJIRA-MD',
                  rows: _0x424623,
                },
              ],
            }),
          },
        ]
        const _0x4ba413 = {
          image: 'https://telegra.ph/file/f028608d9a98e04c32aab.jpg',
          header: '',
          footer: config.FOOTER,
          body: _0x30c49e,
        }
        let _0xa30d8b = _0x4ba413
        return await _0x30976f.sendButtonMessage(
          _0x422459,
          _0xf8f362,
          _0x1201b4,
          _0xa30d8b
        )
      } catch (_0x15b999) {
        _0x1f243f('*Error !!*')
        console.log(_0x15b999)
      }
    }
  )
  const _0x2c5906 = {
    pattern: 'worktype1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x2c5906,
    async (
      _0x518514,
      _0x4460aa,
      _0x1dfbf3,
      {
        from: _0x2bb85f,
        l: _0x130f7b,
        prefix: _0x25f2cf,
        quoted: _0x1b3aba,
        body: _0x28a667,
        isCmd: _0x49d934,
        command: _0x4be11f,
        args: _0x5c6bb8,
        q: _0x995b57,
        isGroup: _0x536cd9,
        sender: _0xdcc9cf,
        senderNumber: _0x49afbe,
        botNumber2: _0x52fe85,
        botNumber: _0x3794e7,
        pushname: _0x5401d3,
        isMe: _0x1f1eaf,
        isOwner: _0x283c2a,
        groupMetadata: _0x2e2d53,
        groupName: _0x5ebd99,
        participants: _0x5e7769,
        groupAdmins: _0x560e0a,
        isBotAdmins: _0x43b677,
        isAdmins: _0x17fc1a,
        reply: _0x471f1f,
      }
    ) => {
      try {
        if (!_0x1f1eaf) {
          return await _0x471f1f(BOTOW)
        }
        const _0x44df93 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *ONLY GROUP SETTINGS*'
        var _0x24ae6b = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Private',
                      id: '.worktype on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Enable Public',
                      id: '.worktype off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x4cc102 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x44df93,
        }
        let _0x29690f = _0x4cc102
        return await _0x518514.sendButtonMessage(
          _0x2bb85f,
          _0x24ae6b,
          _0x1dfbf3,
          _0x29690f
        )
      } catch (_0x527948) {
        _0x471f1f('*Error !!*')
        console.log(_0x527948)
      }
    }
  )
  const _0x5383bb = {
    pattern: 'disablepm1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x5383bb,
    async (
      _0x4c068f,
      _0x4fc74d,
      _0x2b77a5,
      {
        from: _0x4c2cb7,
        l: _0x17b710,
        prefix: _0x3b20c4,
        quoted: _0x476ab6,
        body: _0x418d11,
        isCmd: _0x378d59,
        command: _0x2a46fc,
        args: _0x5a3f89,
        q: _0x5ff36e,
        isGroup: _0x480686,
        sender: _0x3f0dde,
        senderNumber: _0x54d368,
        botNumber2: _0x57b96f,
        botNumber: _0x2315ac,
        pushname: _0x3012e0,
        isMe: _0x579126,
        isOwner: _0xf27e24,
        groupMetadata: _0xacb83d,
        groupName: _0xb991fc,
        participants: _0x552efa,
        groupAdmins: _0x8314c0,
        isBotAdmins: _0x4f0ced,
        isAdmins: _0x3daaa5,
        reply: _0x3cc582,
      }
    ) => {
      try {
        if (!_0x579126) {
          return await _0x3cc582(BOTOW)
        }
        const _0x3946e8 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *WORK TYPE SETTINGS*'
        var _0x22b061 = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Bot Shutdown',
                      id: '.disablepm on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Enable Public',
                      id: '.disablepm off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x5afe9a = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x3946e8,
        }
        let _0x4ca981 = _0x5afe9a
        return await _0x4c068f.sendButtonMessage(
          _0x4c2cb7,
          _0x22b061,
          _0x2b77a5,
          _0x4ca981
        )
      } catch (_0x51121a) {
        _0x3cc582('*Error !!*')
        console.log(_0x51121a)
      }
    }
  )
  const _0x5c890d = {
    pattern: 'autovoice1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x5c890d,
    async (
      _0x22e4f8,
      _0x3491ed,
      _0x3b7864,
      {
        from: _0x543be2,
        l: _0x4e6fc1,
        prefix: _0x380aea,
        quoted: _0x3e27d6,
        body: _0x325ef4,
        isCmd: _0x41e0e0,
        command: _0x3b9fb6,
        args: _0x367b4d,
        q: _0x256e99,
        isGroup: _0x4e467b,
        sender: _0x214a57,
        senderNumber: _0x4a3869,
        botNumber2: _0x59889d,
        botNumber: _0x3d6173,
        pushname: _0x28d238,
        isMe: _0x227da0,
        isOwner: _0x22fff8,
        groupMetadata: _0x1d3969,
        groupName: _0x188194,
        participants: _0x33f9cb,
        groupAdmins: _0x117612,
        isBotAdmins: _0x4b1b4b,
        isAdmins: _0x2d14e4,
        reply: _0x2f780a,
      }
    ) => {
      try {
        if (!_0x227da0) {
          return await _0x2f780a(BOTOW)
        }
        const _0x3b9403 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *AUTO VOICE SETTINGS*'
        var _0x447997 = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Auto Voice',
                      id: '.autovoice on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Auto Voice',
                      id: '.autovoice off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x42e35d = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x3b9403,
        }
        let _0x1485a2 = _0x42e35d
        return await _0x22e4f8.sendButtonMessage(
          _0x543be2,
          _0x447997,
          _0x3b7864,
          _0x1485a2
        )
      } catch (_0x3aa7fc) {
        _0x2f780a('*Error !!*')
        console.log(_0x3aa7fc)
      }
    }
  )
  const _0x522136 = {
    pattern: 'autosticker1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x522136,
    async (
      _0x5e8f6a,
      _0xc97945,
      _0x5bd6e8,
      {
        from: _0x1b9b8d,
        l: _0x13c6ee,
        prefix: _0x1f8e29,
        quoted: _0x21a9dd,
        body: _0x5347e5,
        isCmd: _0x20df80,
        command: _0x3c0ec7,
        args: _0x1ea06f,
        q: _0x45e4c7,
        isGroup: _0x1629e0,
        sender: _0x4a90ef,
        senderNumber: _0x4acc12,
        botNumber2: _0xb2d37a,
        botNumber: _0x132c05,
        pushname: _0x1602d8,
        isMe: _0x552905,
        isOwner: _0x539741,
        groupMetadata: _0x3f3ed9,
        groupName: _0x202602,
        participants: _0x2a237b,
        groupAdmins: _0x58072f,
        isBotAdmins: _0xca0fa3,
        isAdmins: _0xfa7da6,
        reply: _0x2ac209,
      }
    ) => {
      try {
        if (!_0x552905) {
          return await _0x2ac209(BOTOW)
        }
        const _0x234571 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *AUTO STICKER SETTINGS*'
        var _0xd9e902 = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Auto Sticker',
                      id: '.autosticker on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Auto Sticker',
                      id: '.autosticker off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0xadbc4e = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x234571,
        }
        let _0x21d6cc = _0xadbc4e
        return await _0x5e8f6a.sendButtonMessage(
          _0x1b9b8d,
          _0xd9e902,
          _0x5bd6e8,
          _0x21d6cc
        )
      } catch (_0x5b454f) {
        _0x2ac209('*Error !!*')
        console.log(_0x5b454f)
      }
    }
  )
  const _0x745dc9 = {
    pattern: 'autobio1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x745dc9,
    async (
      _0x46436b,
      _0x5c7f99,
      _0x2ff8c5,
      {
        from: _0x5695c5,
        l: _0x2c6584,
        prefix: _0xdb0c77,
        quoted: _0x494b29,
        body: _0x33eaf8,
        isCmd: _0x3f37f6,
        command: _0x4d0b87,
        args: _0x25f7af,
        q: _0x416042,
        isGroup: _0xfb5f4c,
        sender: _0x1af6c6,
        senderNumber: _0x47041f,
        botNumber2: _0x56a361,
        botNumber: _0x51df3f,
        pushname: _0x3e3592,
        isMe: _0x7a2bf,
        isOwner: _0x274ea3,
        groupMetadata: _0x136516,
        groupName: _0x3440d2,
        participants: _0x533d48,
        groupAdmins: _0x34c5e0,
        isBotAdmins: _0x267437,
        isAdmins: _0x46381d,
        reply: _0x2d507b,
      }
    ) => {
      try {
        if (!_0x7a2bf) {
          return await _0x2d507b(BOTOW)
        }
        const _0x28cf86 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *AUTO BIO SETTINGS*'
        var _0x254435 = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Auto Bio',
                      id: '.autobio on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Auto Bio',
                      id: '.autobio off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x54d853 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x28cf86,
        }
        let _0x233b3a = _0x54d853
        return await _0x46436b.sendButtonMessage(
          _0x5695c5,
          _0x254435,
          _0x2ff8c5,
          _0x233b3a
        )
      } catch (_0x3184bd) {
        _0x2d507b('*Error !!*')
        console.log(_0x3184bd)
      }
    }
  )
  const _0x4d0aa2 = {
    pattern: 'autosview1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x4d0aa2,
    async (
      _0x3f851d,
      _0x1c5c31,
      _0x586094,
      {
        from: _0x24add8,
        l: _0x2b9dad,
        prefix: _0x31b85b,
        quoted: _0x9aade5,
        body: _0x1a182d,
        isCmd: _0x2d3359,
        command: _0x3187d8,
        args: _0x493d8c,
        q: _0x1c66a1,
        isGroup: _0x2754e1,
        sender: _0x458295,
        senderNumber: _0x191c01,
        botNumber2: _0x284c17,
        botNumber: _0x42c111,
        pushname: _0x50dbd6,
        isMe: _0x4b2907,
        isOwner: _0x5d68d6,
        groupMetadata: _0x1f9629,
        groupName: _0x56ce77,
        participants: _0x19be0a,
        groupAdmins: _0x4eee5e,
        isBotAdmins: _0x4f2509,
        isAdmins: _0x2e955c,
        reply: _0x1646f9,
      }
    ) => {
      try {
        if (!_0x4b2907) {
          return await _0x1646f9(BOTOW)
        }
        const _0x52d218 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *AUTO STATUS VIEW SETTINGS*'
        var _0x428c57 = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Auto Status View',
                      id: '.autostatus on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Auto Status View',
                      id: '.autostatus off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x2c6092 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x52d218,
        }
        let _0x5b0e30 = _0x2c6092
        return await _0x3f851d.sendButtonMessage(
          _0x24add8,
          _0x428c57,
          _0x586094,
          _0x5b0e30
        )
      } catch (_0x5e1364) {
        _0x1646f9('*Error !!*')
        console.log(_0x5e1364)
      }
    }
  )
  const _0x4a05e1 = {
    pattern: 'autotype1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x4a05e1,
    async (
      _0x312cf1,
      _0x3f335a,
      _0x17d084,
      {
        from: _0x4416e9,
        l: _0x7d5046,
        prefix: _0x43ff8e,
        quoted: _0x19ba77,
        body: _0x282646,
        isCmd: _0xf2b4a,
        command: _0x28e44a,
        args: _0xb134bb,
        q: _0x362d82,
        isGroup: _0x31b9bc,
        sender: _0x4d1593,
        senderNumber: _0x353ab2,
        botNumber2: _0x342988,
        botNumber: _0x25f69d,
        pushname: _0x2d9fe5,
        isMe: _0x533cd0,
        isOwner: _0x23967e,
        groupMetadata: _0x414c0a,
        groupName: _0x3c1ab9,
        participants: _0x1d8a0f,
        groupAdmins: _0x311960,
        isBotAdmins: _0xf553c,
        isAdmins: _0x347198,
        reply: _0x58b7fb,
      }
    ) => {
      try {
        if (!_0x533cd0) {
          return await _0x58b7fb(BOTOW)
        }
        const _0x22173b =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *AUTO TYPING SETTINGS*'
        var _0x44a20a = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Auto Typing',
                      id: '.autotyping on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Auto Typing',
                      id: '.autotyping off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x419e01 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x22173b,
        }
        let _0x2deccb = _0x419e01
        return await _0x312cf1.sendButtonMessage(
          _0x4416e9,
          _0x44a20a,
          _0x17d084,
          _0x2deccb
        )
      } catch (_0x5b7ee8) {
        _0x58b7fb('*Error !!*')
        console.log(_0x5b7ee8)
      }
    }
  )
  const _0x175a2 = {
    pattern: 'autorecord1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x175a2,
    async (
      _0x34148c,
      _0x198d85,
      _0x49228e,
      {
        from: _0x1436fd,
        l: _0x5c4186,
        prefix: _0x54de16,
        quoted: _0x3e7183,
        body: _0x3e3bb5,
        isCmd: _0x1b19aa,
        command: _0xc1e4c5,
        args: _0x1deb27,
        q: _0x56b0e2,
        isGroup: _0x11f2d1,
        sender: _0x4378b9,
        senderNumber: _0x3bc1a7,
        botNumber2: _0x18cb34,
        botNumber: _0x1aae6e,
        pushname: _0x18494d,
        isMe: _0x36123b,
        isOwner: _0x17ff3d,
        groupMetadata: _0xff3c08,
        groupName: _0x12b834,
        participants: _0x5a9fd8,
        groupAdmins: _0x5d4c81,
        isBotAdmins: _0x41ae2a,
        isAdmins: _0x35f67b,
        reply: _0x782c21,
      }
    ) => {
      try {
        if (!_0x36123b) {
          return await _0x782c21(BOTOW)
        }
        const _0x2ab275 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *AUTO RECORDING SETTINGS*'
        var _0x5f2bf9 = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Auto Recording',
                      id: '.autorecording on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Auto Recording',
                      id: '.autorecording off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x546237 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x2ab275,
        }
        let _0x3e0cd3 = _0x546237
        return await _0x34148c.sendButtonMessage(
          _0x1436fd,
          _0x5f2bf9,
          _0x49228e,
          _0x3e0cd3
        )
      } catch (_0x265378) {
        _0x782c21('*Error !!*')
        console.log(_0x265378)
      }
    }
  )
  const _0x532b76 = {
    pattern: 'autoread1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x532b76,
    async (
      _0x56d7a4,
      _0x1bf86b,
      _0x2c802f,
      {
        from: _0x5e595a,
        l: _0x48c120,
        prefix: _0x576ffc,
        quoted: _0x4ca3b8,
        body: _0x5db14d,
        isCmd: _0x3f32fd,
        command: _0x56a60a,
        args: _0x2261b1,
        q: _0x1732ec,
        isGroup: _0x35769b,
        sender: _0x4c3d15,
        senderNumber: _0x4be034,
        botNumber2: _0x3375e3,
        botNumber: _0x5bd580,
        pushname: _0x13071c,
        isMe: _0x2702a0,
        isOwner: _0x36ac23,
        groupMetadata: _0x1ad678,
        groupName: _0x4064bf,
        participants: _0xb21fbe,
        groupAdmins: _0x1d7445,
        isBotAdmins: _0x1d77fb,
        isAdmins: _0xf8a8ea,
        reply: _0x711ea2,
      }
    ) => {
      try {
        if (!_0x2702a0) {
          return await _0x711ea2(BOTOW)
        }
        const _0x288fc4 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *AUTO READ SETTINGS*'
        var _0x473950 = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Auto Read',
                      id: '.autoread on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Auto Read',
                      id: '.autoread off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x2a376a = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x288fc4,
        }
        let _0x2bd47a = _0x2a376a
        return await _0x56d7a4.sendButtonMessage(
          _0x5e595a,
          _0x473950,
          _0x2c802f,
          _0x2bd47a
        )
      } catch (_0x3b626b) {
        _0x711ea2('*Error !!*')
        console.log(_0x3b626b)
      }
    }
  )
  const _0x380750 = {
    pattern: 'autoreact1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x380750,
    async (
      _0x5c3ae4,
      _0x3e23be,
      _0x2b597f,
      {
        from: _0x5676de,
        l: _0x14c030,
        prefix: _0x2a3baf,
        quoted: _0x4e6347,
        body: _0x5c76cb,
        isCmd: _0x10cdab,
        command: _0x52db06,
        args: _0x3a3b0a,
        q: _0x279f3e,
        isGroup: _0x628f1e,
        sender: _0x49e0c3,
        senderNumber: _0xc3fff6,
        botNumber2: _0x2a0f61,
        botNumber: _0x3ff9ca,
        pushname: _0x26bb0f,
        isMe: _0x5df20d,
        isOwner: _0x573970,
        groupMetadata: _0x47f848,
        groupName: _0xf6670,
        participants: _0x3fbeb5,
        groupAdmins: _0x31e0fc,
        isBotAdmins: _0x472498,
        isAdmins: _0x5bd442,
        reply: _0x1818a5,
      }
    ) => {
      try {
        if (!_0x5df20d) {
          return await _0x1818a5(BOTOW)
        }
        const _0x4a238d =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *AUTO REACT SETTINGS*'
        var _0x1beb27 = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Auto React',
                      id: '.autoreact on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Auto React',
                      id: '.autoreact off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x528c1a = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x4a238d,
        }
        let _0x450bdd = _0x528c1a
        return await _0x5c3ae4.sendButtonMessage(
          _0x5676de,
          _0x1beb27,
          _0x2b597f,
          _0x450bdd
        )
      } catch (_0x221a7e) {
        _0x1818a5('*Error !!*')
        console.log(_0x221a7e)
      }
    }
  )
  const _0x12d3cb = {
    pattern: 'alwaysonline1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x12d3cb,
    async (
      _0x1ffe59,
      _0x1365eb,
      _0x3c4a9a,
      {
        from: _0x87d3e7,
        l: _0x58a71a,
        prefix: _0x1546d2,
        quoted: _0x4a77e2,
        body: _0x1da3ee,
        isCmd: _0x29dd91,
        command: _0x247080,
        args: _0x34d311,
        q: _0xe030c0,
        isGroup: _0x1f82e3,
        sender: _0x3de32b,
        senderNumber: _0x4ef680,
        botNumber2: _0x1e0e52,
        botNumber: _0x283dd4,
        pushname: _0x32dcbf,
        isMe: _0x43d6b4,
        isOwner: _0x39faca,
        groupMetadata: _0x1570f2,
        groupName: _0x8541a,
        participants: _0x14dba9,
        groupAdmins: _0x97570e,
        isBotAdmins: _0x312f65,
        isAdmins: _0x140a5f,
        reply: _0x482f97,
      }
    ) => {
      try {
        if (!_0x43d6b4) {
          return await _0x482f97(BOTOW)
        }
        const _0x2f63e9 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *ALWAYS ONLINE SETTINGS*'
        var _0x1f446b = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Always Online',
                      id: '.alwaysonline on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Always Online',
                      id: '.alwaysonline off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x329d72 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x2f63e9,
        }
        let _0x49910f = _0x329d72
        return await _0x1ffe59.sendButtonMessage(
          _0x87d3e7,
          _0x1f446b,
          _0x3c4a9a,
          _0x49910f
        )
      } catch (_0x5624aa) {
        _0x482f97('*Error !!*')
        console.log(_0x5624aa)
      }
    }
  )
  const _0x39975c = {
    pattern: '212block1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x39975c,
    async (
      _0x283363,
      _0x80026a,
      _0x1f4c4c,
      {
        from: _0x2e38cc,
        l: _0x3cbba3,
        prefix: _0xd976d5,
        quoted: _0x45c5bd,
        body: _0x22834b,
        isCmd: _0x500bd3,
        command: _0x41e5d1,
        args: _0x4f4497,
        q: _0x4b2a64,
        isGroup: _0x4bc931,
        sender: _0x747eb0,
        senderNumber: _0x515b6e,
        botNumber2: _0x303d4d,
        botNumber: _0x59af25,
        pushname: _0x200248,
        isMe: _0x41a836,
        isOwner: _0x2be473,
        groupMetadata: _0x29abc4,
        groupName: _0x2ab833,
        participants: _0x32e19c,
        groupAdmins: _0x16c9d9,
        isBotAdmins: _0x5f56bc,
        isAdmins: _0x111635,
        reply: _0x1549f5,
      }
    ) => {
      try {
        if (!_0x41a836) {
          return await _0x1549f5(BOTOW)
        }
        const _0x145f64 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *212 BLOCK SETTINGS*'
        var _0x48ba89 = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable 212 Block',
                      id: '.212block on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable 212 Block',
                      id: '.212block off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x93774e = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x145f64,
        }
        let _0x5a8313 = _0x93774e
        return await _0x283363.sendButtonMessage(
          _0x2e38cc,
          _0x48ba89,
          _0x1f4c4c,
          _0x5a8313
        )
      } catch (_0x427c00) {
        _0x1549f5('*Error !!*')
        console.log(_0x427c00)
      }
    }
  )
  const _0x1b350a = {
    pattern: 'autowelcome1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x1b350a,
    async (
      _0x738d6a,
      _0x4f824f,
      _0x561d00,
      {
        from: _0x1b03c9,
        l: _0x269d68,
        prefix: _0x4aa452,
        quoted: _0xeed0ea,
        body: _0x7def60,
        isCmd: _0x2db91e,
        command: _0x2e13cb,
        args: _0x13cb22,
        q: _0x19c1e2,
        isGroup: _0x15ab2d,
        sender: _0x26bb76,
        senderNumber: _0x49e5c3,
        botNumber2: _0x22120b,
        botNumber: _0x32164a,
        pushname: _0x27190b,
        isMe: _0x3b5cde,
        isOwner: _0x1149da,
        groupMetadata: _0x570c90,
        groupName: _0x1094d9,
        participants: _0x1e3b2d,
        groupAdmins: _0x3548fe,
        isBotAdmins: _0x5b63cd,
        isAdmins: _0x32a68d,
        reply: _0x4e4d49,
      }
    ) => {
      try {
        if (!_0x3b5cde) {
          return await _0x4e4d49(BOTOW)
        }
        const _0x53a0de =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *AUTO WELCOME SETTINGS*'
        var _0x35b70a = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Auto Welcome',
                      id: '.autowelcome on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Auto Welcome',
                      id: '.autowelcome off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x1452b8 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x53a0de,
        }
        let _0x3ccd40 = _0x1452b8
        return await _0x738d6a.sendButtonMessage(
          _0x1b03c9,
          _0x35b70a,
          _0x561d00,
          _0x3ccd40
        )
      } catch (_0x252647) {
        _0x4e4d49('*Error !!*')
        console.log(_0x252647)
      }
    }
  )
  const _0x22177e = {
    pattern: 'antibot1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x22177e,
    async (
      _0x1e016c,
      _0x21e9d6,
      _0xd2a547,
      {
        from: _0x282418,
        l: _0x4983d6,
        prefix: _0x4eefe4,
        quoted: _0x4f3dca,
        body: _0x58a120,
        isCmd: _0xfba55d,
        command: _0x4518de,
        args: _0x3a1d9b,
        q: _0x365e95,
        isGroup: _0x1668ac,
        sender: _0x53106a,
        senderNumber: _0x36a335,
        botNumber2: _0x1317f2,
        botNumber: _0x273f45,
        pushname: _0x5773d4,
        isMe: _0x40a025,
        isOwner: _0x3ed778,
        groupMetadata: _0x1634b2,
        groupName: _0x20fa1a,
        participants: _0x4de96a,
        groupAdmins: _0x2c4e10,
        isBotAdmins: _0x1d809d,
        isAdmins: _0x10b068,
        reply: _0x1a648e,
      }
    ) => {
      try {
        if (!_0x40a025) {
          return await _0x1a648e(BOTOW)
        }
        const _0xfc377c =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *ANTI BOT SETTINGS*'
        var _0xb31c71 = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Anti Bot',
                      id: '.antibot on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Anti Bot',
                      id: '.antibot off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x1a9348 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0xfc377c,
        }
        let _0x4b7152 = _0x1a9348
        return await _0x1e016c.sendButtonMessage(
          _0x282418,
          _0xb31c71,
          _0xd2a547,
          _0x4b7152
        )
      } catch (_0x25d5c3) {
        _0x1a648e('*Error !!*')
        console.log(_0x25d5c3)
      }
    }
  )
  const _0x1ef031 = {
    pattern: 'antilink1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x1ef031,
    async (
      _0x294da4,
      _0x4f2230,
      _0x95dab5,
      {
        from: _0x4d3759,
        l: _0x110860,
        prefix: _0x493333,
        quoted: _0x27c849,
        body: _0x20345a,
        isCmd: _0x57071f,
        command: _0x36fd54,
        args: _0x1424ff,
        q: _0x183828,
        isGroup: _0x1b079d,
        sender: _0x4fda76,
        senderNumber: _0x3d14f9,
        botNumber2: _0x359f8f,
        botNumber: _0x3f67ab,
        pushname: _0x111c20,
        isMe: _0x296cd9,
        isOwner: _0x3ce62b,
        groupMetadata: _0x51f65c,
        groupName: _0x59f0e5,
        participants: _0x3e12d3,
        groupAdmins: _0x506b38,
        isBotAdmins: _0x523041,
        isAdmins: _0x6c90ea,
        reply: _0x51c99c,
      }
    ) => {
      try {
        if (!_0x296cd9) {
          return await _0x51c99c(BOTOW)
        }
        const _0x36bbf9 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *ANTI LINK SETTINGS*'
        var _0x4b2f83 = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Anti Link',
                      id: '.antilink on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Anti Link',
                      id: '.antilink off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x2a7f1d = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x36bbf9,
        }
        let _0x123526 = _0x2a7f1d
        return await _0x294da4.sendButtonMessage(
          _0x4d3759,
          _0x4b2f83,
          _0x95dab5,
          _0x123526
        )
      } catch (_0x3eb2b3) {
        _0x51c99c('*Error !!*')
        console.log(_0x3eb2b3)
      }
    }
  )
  const _0x2593b0 = {
    pattern: 'antibad1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x2593b0,
    async (
      _0x3a5a09,
      _0x374a8a,
      _0x370b2d,
      {
        from: _0xd9f690,
        l: _0x4e63be,
        prefix: _0x1ea2de,
        quoted: _0x1072fd,
        body: _0x178328,
        isCmd: _0x838116,
        command: _0x44f5d4,
        args: _0x405fda,
        q: _0x186df1,
        isGroup: _0x1851e7,
        sender: _0x20ba1f,
        senderNumber: _0x3b0a8d,
        botNumber2: _0x4cfde6,
        botNumber: _0x5cf840,
        pushname: _0x14a0c7,
        isMe: _0x2aed9c,
        isOwner: _0x217d7e,
        groupMetadata: _0x1a43bd,
        groupName: _0x2b0f97,
        participants: _0x30c894,
        groupAdmins: _0x173a68,
        isBotAdmins: _0x5edb29,
        isAdmins: _0x1623c9,
        reply: _0x17c575,
      }
    ) => {
      try {
        if (!_0x2aed9c) {
          return await _0x17c575(BOTOW)
        }
        const _0x23f22d =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *ANTI BAD SETTINGS*'
        var _0x47d89b = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Anti Bad',
                      id: '.antibad on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Anti Bad',
                      id: '.antibad off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x58b47c = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x23f22d,
        }
        let _0x5cbc22 = _0x58b47c
        return await _0x3a5a09.sendButtonMessage(
          _0xd9f690,
          _0x47d89b,
          _0x370b2d,
          _0x5cbc22
        )
      } catch (_0x1a21ca) {
        _0x17c575('*Error !!*')
        console.log(_0x1a21ca)
      }
    }
  )
  const _0x5d6b25 = {
    pattern: 'anticall1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x5d6b25,
    async (
      _0x153d32,
      _0x4eaded,
      _0x90c400,
      {
        from: _0x379795,
        l: _0x31d860,
        prefix: _0x3cc0a5,
        quoted: _0xd0f302,
        body: _0x177c6f,
        isCmd: _0x3b2f19,
        command: _0x2ba641,
        args: _0x56627e,
        q: _0x75a84,
        isGroup: _0x155b96,
        sender: _0x43742c,
        senderNumber: _0x17c0fd,
        botNumber2: _0x53ac6e,
        botNumber: _0xd13856,
        pushname: _0x2120dc,
        isMe: _0x29c302,
        isOwner: _0x2a831c,
        groupMetadata: _0x4d6544,
        groupName: _0x562d09,
        participants: _0x2747ee,
        groupAdmins: _0x52aced,
        isBotAdmins: _0x214871,
        isAdmins: _0x1b4f30,
        reply: _0x27d59b,
      }
    ) => {
      try {
        if (!_0x29c302) {
          return await _0x27d59b(BOTOW)
        }
        const _0x48fb45 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *ANTI CALL SETTINGS*'
        var _0x3d08ae = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Anti Call',
                      id: '.anticall on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Anti Call',
                      id: '.anticall off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x270411 = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x48fb45,
        }
        let _0x48f8b2 = _0x270411
        return await _0x153d32.sendButtonMessage(
          _0x379795,
          _0x3d08ae,
          _0x90c400,
          _0x48f8b2
        )
      } catch (_0x5c0427) {
        _0x27d59b('*Error !!*')
        console.log(_0x5c0427)
      }
    }
  )
  const _0x23ba9a = {
    pattern: 'antidelete1',
    react: '\uD83D\uDDC3️',
    filename: __filename,
  }
  cmd(
    _0x23ba9a,
    async (
      _0x2bd617,
      _0x9f63b3,
      _0x2cfd16,
      {
        from: _0x3477ef,
        l: _0x5719cc,
        prefix: _0x1ed4de,
        quoted: _0x456383,
        body: _0x843fa9,
        isCmd: _0x5be0ad,
        command: _0x214426,
        args: _0x43bed6,
        q: _0xa9f197,
        isGroup: _0x148e42,
        sender: _0x1643a2,
        senderNumber: _0x454478,
        botNumber2: _0x48203c,
        botNumber: _0xe49f0,
        pushname: _0x16334f,
        isMe: _0x28cace,
        isOwner: _0x473b36,
        groupMetadata: _0xbd555b,
        groupName: _0x4cc293,
        participants: _0x1bfb8e,
        groupAdmins: _0x2f37fb,
        isBotAdmins: _0x1afc83,
        isAdmins: _0x40df50,
        reply: _0x5104b2,
      }
    ) => {
      try {
        if (!_0x28cace) {
          return await _0x5104b2(BOTOW)
        }
        const _0x58d170 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ5 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *ANTI DELETE SETTINGS*'
        var _0x38ad40 = [
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Tap here!',
              sections: [
                {
                  highlight_label: 'VAJIRA-MD',
                  rows: [
                    {
                      title: 'Enable',
                      description: 'To Enable Anti Delete',
                      id: '.antidelete on',
                    },
                    {
                      title: 'Disable',
                      description: 'To Disable Anti Delete',
                      id: '.antidelete off',
                    },
                  ],
                },
              ],
            }),
          },
        ]
        const _0x176fcf = {
          image: '',
          header: '',
          footer: config.FOOTER,
          body: _0x58d170,
        }
        let _0x49b833 = _0x176fcf
        return await _0x2bd617.sendButtonMessage(
          _0x3477ef,
          _0x38ad40,
          _0x2cfd16,
          _0x49b833
        )
      } catch (_0x90d886) {
        _0x5104b2('*Error !!*')
        console.log(_0x90d886)
      }
    }
  )
}
