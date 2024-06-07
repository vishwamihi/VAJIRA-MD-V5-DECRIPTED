const config = require('../settings'),
  os = require('os'),
  fs = require('fs'),
  owner = JSON.parse(fs.readFileSync('./lib/owner.json')),
  mg = require('../lib/mg'),
  cine = require('../lib/cine'),
  sinsub = require('../lib/sinsub'),
  bot = config.BOTNUMBER,
  l = console.log,
  devlopernumber = '94719199757',
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
    clockString,
    jsonformat,
    forwardMessage,
  } = require('../lib/functions')
function genMsgId() {
  const _0x4a58b1 = '3EB',
    _0x5793d8 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let _0x4e6bd6 = _0x4a58b1
  for (let _0x46000f = _0x4a58b1.length; _0x46000f < 22; _0x46000f++) {
    const _0x1d3d79 = Math.floor(Math.random() * _0x5793d8.length)
    _0x4e6bd6 += _0x5793d8.charAt(_0x1d3d79)
  }
  return _0x4e6bd6
}
const reportedMessages = {}
if (config.COMMAND_TYPE === 'button') {
  const _0x1450fb = {
    pattern: 'alive',
    react: '\uD83C\uDF6C',
    desc: 'Check bot online or no.',
    category: 'main',
    use: '.alive',
    filename: __filename,
  }
  cmd(
    _0x1450fb,
    async (
      _0x59046b,
      _0x12a5c1,
      _0x5ed0b5,
      {
        from: _0x86bc3d,
        prefix: _0x1f608f,
        l: _0x37eb9c,
        quoted: _0x272bbd,
        body: _0x476ced,
        isCmd: _0x1f4057,
        command: _0x374a06,
        args: _0x233975,
        q: _0x3148f1,
        isGroup: _0x3f0961,
        sender: _0x242868,
        senderNumber: _0x311990,
        botNumber2: _0xbfa13,
        botNumber: _0x420c73,
        pushname: _0x2d445f,
        isMe: _0x178f81,
        isOwner: _0x47c6e8,
        groupMetadata: _0x7a0a42,
        groupName: _0x2af74a,
        participants: _0x7f8114,
        groupAdmins: _0x3ac75c,
        isBotAdmins: _0x668855,
        isAdmins: _0x1755df,
        reply: _0x76fa52,
      }
    ) => {
      try {
        if (os.hostname().length == 12) {
          hostname = 'replit'
        } else {
          if (os.hostname().length == 36) {
            hostname = 'heroku'
          } else {
            if (os.hostname().length == 8) {
              hostname = 'koyeb'
            } else {
              hostname = os.hostname()
            }
          }
        }
        let _0x208aea = '```'
        const _0x24d90e =
            _0x208aea +
            '\uD83D\uDC4B Hello ' +
            _0x2d445f +
            " I'm alive now" +
            _0x208aea +
            '\n\n*\uD83D\uDC7E Im VISHWA-MD whatsapp bot*\n    \n> *Version:* ' +
            require('../package.json').version +
            '\n> *Memory:* ' +
            (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
            'MB / ' +
            Math.round(require('os').totalmem / 1024 / 1024) +
            'MB\n> *Runtime:* ' +
            runtime(process.uptime()) +
            '\n> *Platform:* ' +
            hostname +
            '\n\n\uD83D\uDC3CThis is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot\n                    \t    \n*\uD83C\uDF6D Have A Nice Day \uD83C\uDF6D*',
          _0x493a48 = {
            display_text: config.BTN,
            url: config.BTNURL,
            merchant_url: config.BTNURL,
          }
        let _0x546a7a = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify(_0x493a48),
          },
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: 'Get Menu',
              id: '.menu',
            }),
          },
        ]
        const _0x121636 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x24d90e,
        }
        let _0x4dda35 = _0x121636
        return await _0x59046b.sendButtonMessage(
          _0x86bc3d,
          _0x546a7a,
          _0x5ed0b5,
          _0x4dda35
        )
      } catch (_0x609bf2) {
        _0x76fa52('*Error !!*'), console.log(_0x609bf2)
      }
    }
  )
  const _0x1473fd = {
    pattern: 'sc',
    react: '\uD83D\uDDC3️',
    alias: ['repo', 'script', 'status'],
    desc: "Get bot's command list.",
    category: 'main',
    use: '.sc',
    filename: __filename,
  }
  cmd(
    _0x1473fd,
    async (
      _0x56f379,
      _0x5f3474,
      _0x233b86,
      {
        from: _0x43453b,
        prefix: _0x4ed638,
        l: _0x4f09b4,
        quoted: _0x4f090f,
        body: _0x565c8e,
        isCmd: _0xa652be,
        command: _0xc7529,
        args: _0x12a4f2,
        q: _0x3c259f,
        isGroup: _0x29b317,
        sender: _0x2ed0e4,
        senderNumber: _0x326747,
        botNumber2: _0x58b949,
        botNumber: _0x21a8ef,
        pushname: _0x5486ee,
        isMe: _0x2c0afc,
        isOwner: _0x3c9e93,
        groupMetadata: _0x42b422,
        groupName: _0x5ac62e,
        participants: _0xb32d5f,
        groupAdmins: _0x240b27,
        isBotAdmins: _0x533409,
        isAdmins: _0xb81f5e,
        reply: _0x4ba4eb,
      }
    ) => {
      try {
        if (os.hostname().length == 12) {
          hostname = 'replit'
        } else {
          if (os.hostname().length == 36) {
            hostname = 'heroku'
          } else {
            if (os.hostname().length == 8) {
              hostname = 'koyeb'
            } else {
              hostname = os.hostname()
            }
          }
        }
        let _0x131905 = '```'
        const _0x4ef318 =
          _0x131905 +
          '\uD83D\uDC4B Hello ' +
          _0x5486ee +
          _0x131905 +
          '\n\n*\uD83D\uDC7E VISHWA-MD commands menu...*\n  \n> *Version:* ' +
          require('../package.json').version +
          '\n> *Memory:* ' +
          (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
          'MB / ' +
          Math.round(require('os').totalmem / 1024 / 1024) +
          'MB\n> *Runtime:* ' +
          runtime(process.uptime()) +
          '\n> *Platform:* ' +
          hostname +
          '\n  *VISHWA MD WHATSAPP USER BOT* \uD83D\uDCAB\n\n                     *OUR MISSION*\n\n\uD83D\uDC3CThis is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot\n\n\n\uD83D\uDC3C The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier\n\n'
        let _0x2f7768 = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: 'YT CHANNEL',
              url: 'https://linktr.ee/vishwa2_2',
              merchant_url:
                'https://linktr.ee/vishwa2_2',
            }),
          },
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: 'FB PAGE',
              url: 'https://linktr.ee/vishwa2_2',
              merchant_url: 'https://linktr.ee/vishwa2_2',
            }),
          },
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: 'MY WA NUMBER',
              url: 'https://linktr.ee/vishwa2_2',
              merchant_url: 'https://linktr.ee/vishwa2_2',
            }),
          },
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: 'MY WA CHANNEL',
              url: 'https://linktr.ee/vishwa2_2',
              merchant_url:
                'https://linktr.ee/vishwa2_2',
            }),
          },
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: 'MY BOT REPO',
              url: 'https://linktr.ee/vishwa2_2',
              merchant_url: 'https://linktr.ee/vishwa2_2',
            }),
          },
          {
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
              display_text: 'Get Menu',
              id: '.menu',
            }),
          },
        ]
        const _0x53ee38 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x4ef318,
        }
        let _0x53308b = _0x53ee38
        return await _0x56f379.sendButtonMessage(
          _0x43453b,
          _0x2f7768,
          _0x233b86,
          _0x53308b
        )
      } catch (_0x3af6a4) {
        _0x4ba4eb('*Error !!*'), console.log(_0x3af6a4)
      }
    }
  )
  const _0x20021c = {
    pattern: 'menu',
    react: '\uD83D\uDDC3️',
    alias: ['panel', 'list', 'commands'],
    desc: "Get bot's command list.",
    category: 'main',
    use: '.menu',
    filename: __filename,
  }
  cmd(
    _0x20021c,
    async (
      _0x53f29b,
      _0x5115af,
      _0x261297,
      {
        from: _0x55e1e7,
        prefix: _0x98c8ff,
        l: _0x256505,
        quoted: _0x307f0b,
        body: _0x19b368,
        isCmd: _0x3bc8c3,
        command: _0x1d9ec0,
        args: _0x241926,
        q: _0x42649d,
        isGroup: _0xde981d,
        sender: _0x24d14a,
        senderNumber: _0x43d534,
        botNumber2: _0x3b9e63,
        botNumber: _0x241aea,
        pushname: _0x4e76ac,
        isMe: _0x2467ad,
        isOwner: _0x47d3ff,
        groupMetadata: _0x10f1fc,
        groupName: _0x435b6a,
        participants: _0x192bbe,
        groupAdmins: _0x135a61,
        isBotAdmins: _0x4d064a,
        isAdmins: _0x5dbe2c,
        reply: _0x386c87,
      }
    ) => {
      try {
        if (os.hostname().length == 12) {
          hostname = 'replit'
        } else {
          if (os.hostname().length == 36) {
            hostname = 'heroku'
          } else {
            if (os.hostname().length == 8) {
              hostname = 'koyeb'
            } else {
              hostname = os.hostname()
            }
          }
        }
        let _0xb3e016 = '```'
        const _0x2403ae =
            _0xb3e016 +
            '\uD83D\uDC4B Hello ' +
            _0x4e76ac +
            _0xb3e016 +
            '\n\n*\uD83D\uDC7E VISHWA-MD commands menu...*\n  \n> *Version:* ' +
            require('../package.json').version +
            '\n> *Memory:* ' +
            (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
            'MB / ' +
            Math.round(require('os').totalmem / 1024 / 1024) +
            'MB\n> *Runtime:* ' +
            runtime(process.uptime()) +
            '\n> *Platform:* ' +
            hostname,
          _0x6afd09 = [],
          _0x4d52d8 = new Map()
        for (let _0x360b7f = 0; _0x360b7f < 1; _0x360b7f++) {
          const _0x7add46 = commands[_0x360b7f]
          if (
            !_0x7add46.dontAddCommandList &&
            _0x7add46.pattern !== undefined
          ) {
            const _0x4b2192 = _0x7add46.category.toUpperCase()
            !_0x4d52d8.has(_0x4b2192) &&
              (_0x6afd09.push(_0x4b2192), _0x4d52d8.set(_0x4b2192, []))
            _0x4d52d8.get(_0x4b2192).push(_0x7add46.pattern)
          }
        }
        const _0x1e7ad8 = []
        for (const _0x41623d of _0x6afd09) {
          const _0x4e30e7 = {
            header: '\uD83D\uDD11 Select menu type',
            title: 'DOWNLOAD MENU',
            description: 'Download commands',
            id: '.downmenu',
          }
          _0x1e7ad8.push(_0x4e30e7)
          _0x1e7ad8.push(_0x42cbcd)
          _0x1e7ad8.push(_0x4113ad)
          _0x1e7ad8.push(_0x1b509a)
          _0x1e7ad8.push(_0x5297ea)
          _0x1e7ad8.push(_0x39cbdc)
          _0x1e7ad8.push(_0x5db896)
          _0x1e7ad8.push(_0x59d421)
          const _0x42cbcd = {
            header: '',
            title: 'SEARCH MENU',
            description: 'Search commands',
            id: '.searchmenu',
          }
          const _0x4113ad = {
            header: '',
            title: 'CONVERT MENU',
            description: 'Convert commands',
            id: '.convertmenu',
          }
          const _0x1b509a = {
            header: '',
            title: 'MAIN MENU',
            description: 'Main commands',
            id: '.mainmenu',
          }
          const _0x5297ea = {
            header: '',
            title: 'GROUP MENU',
            description: 'Group commands',
            id: '.groupmenu',
          }
          const _0x39cbdc = {
            header: '',
            title: 'LOGO MENU',
            description: 'Logo commands',
            id: '.logomenu',
          }
          const _0x5db896 = {
            header: '',
            title: 'BUG MENU',
            description: 'Bug commands',
            id: '.bugmenu',
          }
          const _0x59d421 = {
            header: '',
            title: 'OTHER MENU',
            description: 'Other commands',
            id: '.othermenu',
          }
          _0x1e7ad8.push(_0x4e30e7),
            _0x1e7ad8.push(_0x42cbcd),
            _0x1e7ad8.push(_0x4113ad),
            _0x1e7ad8.push(_0x1b509a),
            _0x1e7ad8.push(_0x5297ea),
            _0x1e7ad8.push(_0x39cbdc),
            _0x1e7ad8.push(_0x5db896),
            _0x1e7ad8.push(_0x59d421)
        }
        const _0x148202 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL,
        }
        let _0x1d219f = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify(_0x148202),
          },
          {
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: 'Select a Category :)',
              sections: [
                {
                  title: 'Please select a category',
                  highlight_label: 'VAJIRA-MD',
                  rows: _0x1e7ad8,
                },
              ],
            }),
          },
        ]
        const _0x38cafe = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x2403ae,
        }
        let _0x4a581f = _0x38cafe
        return await _0x53f29b.sendButtonMessage(
          _0x55e1e7,
          _0x1d219f,
          _0x261297,
          _0x4a581f
        )
      } catch (_0x5a5127) {
        _0x386c87('*Error !!*'), console.log(_0x5a5127)
      }
    }
  )
  const _0x12acb1 = {
    pattern: 'menu2',
    react: '\uD83D\uDCC2',
    alias: ['help'],
    desc: "Get bot's command list.",
    category: 'main',
    use: '.menu',
    filename: __filename,
  }
  cmd(
    _0x12acb1,
    async (
      _0x378a7e,
      _0x4f40c3,
      _0x356278,
      {
        from: _0x4f5ade,
        prefix: _0x40898f,
        l: _0x26cd31,
        quoted: _0x327057,
        body: _0x426ac1,
        isCmd: _0x4d88da,
        command: _0x1297f8,
        args: _0x4e213f,
        q: _0x10ade7,
        isGroup: _0x18fd53,
        sender: _0x16e53e,
        senderNumber: _0x34c92f,
        botNumber2: _0x2e9654,
        botNumber: _0x2cb0ef,
        pushname: _0x12134d,
        isMe: _0x6e827,
        isOwner: _0x55a97f,
        groupMetadata: _0x1b27f3,
        groupName: _0x2a458d,
        participants: _0x1aafb4,
        groupAdmins: _0x582f76,
        isBotAdmins: _0x423ef9,
        isAdmins: _0x4a659e,
        reply: _0x399e1d,
      }
    ) => {
      try {
        let _0x3c453d = ''
        for (let _0x4a7efa = 0; _0x4a7efa < commands.length; _0x4a7efa++) {
          if (commands[_0x4a7efa].category === 'download') {
            !commands[_0x4a7efa].dontAddCommandList &&
              (_0x3c453d +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0x4a7efa].pattern +
                '\n')
          }
        }
        let _0x4e4d74 = ''
        for (let _0x4881d4 = 0; _0x4881d4 < commands.length; _0x4881d4++) {
          commands[_0x4881d4].category === 'search' &&
            !commands[_0x4881d4].dontAddCommandList &&
              (_0x4e4d74 +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0x4881d4].pattern +
                '\n')
        }
        let _0x5013d8 = ''
        for (let _0x1045b4 = 0; _0x1045b4 < commands.length; _0x1045b4++) {
          commands[_0x1045b4].category === 'convert' &&
            !commands[_0x1045b4].dontAddCommandList &&
              (_0x5013d8 +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0x1045b4].pattern +
                '\n')
        }
        let _0x36e749 = ''
        for (let _0x52654b = 0; _0x52654b < commands.length; _0x52654b++) {
          if (commands[_0x52654b].category === 'logo') {
            if (!commands[_0x52654b].dontAddCommandList) {
              _0x36e749 +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0x52654b].pattern +
                '\n'
            }
          }
        }
        let _0x4b3e6e = ''
        for (let _0x3f2d14 = 0; _0x3f2d14 < commands.length; _0x3f2d14++) {
          commands[_0x3f2d14].category === 'main' &&
            !commands[_0x3f2d14].dontAddCommandList &&
              (_0x4b3e6e +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0x3f2d14].pattern +
                '\n')
        }
        let _0x4b4f00 = ''
        for (let _0x3cb909 = 0; _0x3cb909 < commands.length; _0x3cb909++) {
          commands[_0x3cb909].category === 'group' &&
            !commands[_0x3cb909].dontAddCommandList &&
              (_0x4b4f00 +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0x3cb909].pattern +
                '\n')
        }
        let _0x830839 = ''
        for (let _0x3c4592 = 0; _0x3c4592 < commands.length; _0x3c4592++) {
          commands[_0x3c4592].category === 'bug' &&
            !commands[_0x3c4592].dontAddCommandList &&
              (_0x830839 +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0x3c4592].pattern +
                '\n')
        }
        let _0x33582a = ''
        for (let _0x486c7a = 0; _0x486c7a < commands.length; _0x486c7a++) {
          commands[_0x486c7a].category === 'other' &&
            !commands[_0x486c7a].dontAddCommandList &&
              (_0x33582a +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0x486c7a].pattern +
                '\n')
        }
        let _0x26fee1 =
          '*Hellow\uD83D\uDC78* ' +
          _0x12134d +
          '\n\n*\u256D\u2500     ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ*\n*\u2502\uD83D\uDD75️‍\u2642️ \uD835\uDE19\uD835\uDE36\uD835\uDE2F \uD835\uDE1B\uD835\uDE2A\uD835\uDE2E\uD835\uDE26 -* ' +
          runtime(process.uptime()) +
          ' \n*\u2502\uD83D\uDD75️‍\u2642️ \uD835\uDE19\uD835\uDE22\uD835\uDE2E \uD835\uDE1C\uD835\uDE34\uD835\uDE26 -* ' +
          (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
          'MB / ' +
          Math.round(require('os').totalmem / 1024 / 1024) +
          'MB\n*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n*\uD83D\uDC78 \uD835\uDE1D\uD835\uDE08\uD835\uDE11\uD835\uDE10\uD835\uDE19\uD835\uDE08 \uD835\uDE14\uD835\uDE25 \uD835\uDE0A\uD835\uDE30\uD835\uDE2E\uD835\uDE2E\uD835\uDE22\uD835\uDE2E\uD835\uDE25 \uD835\uDE17\uD835\uDE22\uD835\uDE2F\uD835\uDE26\uD835\uDE2D*\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ DOWNLOAD COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
          _0x3c453d +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ SEARCH COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
          _0x4e4d74 +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ CONVERT COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
          _0x5013d8 +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ LOGO COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
          _0x36e749 +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ MAIN COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
          _0x4b3e6e +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ GROUP COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
          _0x4b4f00 +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ BUG COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
          _0x830839 +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ OTHER COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
          _0x33582a +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\t\n\n\uD83D\uDC68‍\uD83D\uDCBB ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ \uD83D\uDC68‍\uD83D\uDCBB'
        const _0x5ad0df = { url: config.LOGO }
        const _0x4170c2 = {
          image: _0x5ad0df,
          caption: _0x26fee1,
        }
        await _0x378a7e.sendMessage(_0x4f5ade, _0x4170c2, {
          quoted: _0x4f40c3,
          messageId: genMsgId(),
        })
      } catch (_0x317b77) {
        _0x399e1d('*Error !!*'), _0x26cd31(_0x317b77)
      }
    }
  )
  const _0x51b157 = {
    pattern: 'downmenu',
    react: '\uD83D\uDCC2',
    desc: "Get bot's command list.",
    category: '',
    use: '.menu',
    filename: __filename,
  }
  cmd(
    _0x51b157,
    async (
      _0x461614,
      _0x2cdd8d,
      _0x313460,
      {
        from: _0x1c61ac,
        prefix: _0x228896,
        l: _0xa2bc5e,
        quoted: _0x5bca46,
        body: _0x3cdec9,
        isCmd: _0x66bfcc,
        command: _0x2d96a3,
        args: _0x3cf15b,
        q: _0x5640e8,
        isGroup: _0x324d47,
        sender: _0x39f41b,
        senderNumber: _0x1b05bf,
        botNumber2: _0x4bc5d7,
        botNumber: _0x23c4e8,
        pushname: _0x1cab06,
        isMe: _0x29679e,
        isOwner: _0x33b4a3,
        groupMetadata: _0x17ce0f,
        groupName: _0x3759dd,
        participants: _0xfc9d74,
        groupAdmins: _0x135102,
        isBotAdmins: _0xe5e43e,
        isAdmins: _0x4745e4,
        reply: _0x2563d5,
      }
    ) => {
      try {
        let _0x16bc6c = ''
        for (let _0x1ec910 = 0; _0x1ec910 < commands.length; _0x1ec910++) {
          commands[_0x1ec910].category === 'download' &&
            !commands[_0x1ec910].dontAddCommandList &&
              (_0x16bc6c +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0x1ec910].pattern +
                '\n*\uD83D\uDCADDesc :* ' +
                commands[_0x1ec910].desc +
                '\n*\uD83D\uDE47\uD83C\uDFFB‍\u2642️Use:* ' +
                commands[_0x1ec910].use +
                '\n\n')
        }
        let _0x504866 =
          '\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ DOWNLOAD COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n' +
          _0x16bc6c +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\uD83D\uDC68‍\uD83D\uDCBB ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ \uD83D\uDC68‍\uD83D\uDCBB'
        const _0x358638 = { url: config.LOGO }
        const _0x3fbe90 = {
          image: _0x358638,
          caption: _0x504866,
        }
        await _0x461614.sendMessage(_0x1c61ac, _0x3fbe90, {
          quoted: _0x2cdd8d,
          messageId: genMsgId(),
        })
      } catch (_0x56f79e) {
        _0x2563d5('*Error !!*')
        _0xa2bc5e(_0x56f79e)
      }
    }
  )
  const _0x5016c1 = {
    pattern: 'searchmenu',
    react: '\uD83D\uDCC2',
    desc: "Get bot's command list.",
    category: '',
    use: '.menu',
    filename: __filename,
  }
  cmd(
    _0x5016c1,
    async (
      _0x103a48,
      _0x47d08d,
      _0x1f24ce,
      {
        from: _0x19bb31,
        prefix: _0x594727,
        l: _0x11a606,
        quoted: _0x456569,
        body: _0x41ca8a,
        isCmd: _0x1438d3,
        command: _0x1fcd99,
        args: _0x8d72f,
        q: _0x37ca1b,
        isGroup: _0x136023,
        sender: _0x2473c8,
        senderNumber: _0x20bd07,
        botNumber2: _0x3d2979,
        botNumber: _0x5b54e4,
        pushname: _0x5295e2,
        isMe: _0x1f1835,
        isOwner: _0x4b16d0,
        groupMetadata: _0x57efa1,
        groupName: _0x5a4cce,
        participants: _0x377728,
        groupAdmins: _0x5e87b4,
        isBotAdmins: _0x2a455d,
        isAdmins: _0x370882,
        reply: _0x28d5de,
      }
    ) => {
      try {
        let _0x3d7774 = ''
        for (let _0x3013a5 = 0; _0x3013a5 < commands.length; _0x3013a5++) {
          if (commands[_0x3013a5].category === 'search') {
            if (!commands[_0x3013a5].dontAddCommandList) {
              _0x3d7774 +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0x3013a5].pattern +
                '\n*\uD83D\uDCADDesc :* ' +
                commands[_0x3013a5].desc +
                '\n*\uD83D\uDE47\uD83C\uDFFB‍\u2642️Use:* ' +
                commands[_0x3013a5].use +
                '\n\n'
            }
          }
        }
        let _0x210fcd =
          '\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ SEARCH COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n' +
          _0x3d7774 +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\uD83D\uDC68‍\uD83D\uDCBB ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ \uD83D\uDC68‍\uD83D\uDCBB'
        const _0x4df694 = { url: config.LOGO }
        const _0x458309 = {
          image: _0x4df694,
          caption: _0x210fcd,
        }
        await _0x103a48.sendMessage(_0x19bb31, _0x458309, {
          quoted: _0x47d08d,
          messageId: genMsgId(),
        })
      } catch (_0x4fe003) {
        _0x28d5de('*Error !!*'), _0x11a606(_0x4fe003)
      }
    }
  )
  const _0x25c643 = {
    pattern: 'convertmenu',
    react: '\uD83D\uDCC2',
    desc: "Get bot's command list.",
    category: '',
    use: '.menu',
    filename: __filename,
  }
  cmd(
    _0x25c643,
    async (
      _0x3eb508,
      _0x54980a,
      _0x2172e5,
      {
        from: _0x5ae765,
        prefix: _0x5951f9,
        l: _0x5d2222,
        quoted: _0x2c7b68,
        body: _0x26807e,
        isCmd: _0x395112,
        command: _0x2343a9,
        args: _0x7bca7,
        q: _0x4adb93,
        isGroup: _0x5eb14d,
        sender: _0x1ecebc,
        senderNumber: _0x446a88,
        botNumber2: _0x328854,
        botNumber: _0x1c1329,
        pushname: _0x32cf94,
        isMe: _0x1ad767,
        isOwner: _0x5874f6,
        groupMetadata: _0x165dac,
        groupName: _0x521184,
        participants: _0x35a2eb,
        groupAdmins: _0xa4f6d1,
        isBotAdmins: _0x596a52,
        isAdmins: _0xde6c4f,
        reply: _0x3772f2,
      }
    ) => {
      try {
        let _0x290274 = ''
        for (let _0x4f7306 = 0; _0x4f7306 < commands.length; _0x4f7306++) {
          commands[_0x4f7306].category === 'convert' &&
            !commands[_0x4f7306].dontAddCommandList &&
              (_0x290274 +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0x4f7306].pattern +
                '\n*\uD83D\uDCADDesc :* ' +
                commands[_0x4f7306].desc +
                '\n*\uD83D\uDE47\uD83C\uDFFB‍\u2642️Use:* ' +
                commands[_0x4f7306].use +
                '\n\n')
        }
        let _0x2b7d73 =
          '\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ CONVERT COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n' +
          _0x290274 +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\uD83D\uDC68‍\uD83D\uDCBB ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ \uD83D\uDC68‍\uD83D\uDCBB'
        const _0x4e4b74 = { url: config.LOGO }
        const _0x114876 = {
          image: _0x4e4b74,
          caption: _0x2b7d73,
        }
        await _0x3eb508.sendMessage(_0x5ae765, _0x114876, {
          quoted: _0x54980a,
          messageId: genMsgId(),
        })
      } catch (_0x32c936) {
        _0x3772f2('*Error !!*'), _0x5d2222(_0x32c936)
      }
    }
  )
  const _0x369820 = {
    pattern: 'logomenu',
    react: '\uD83D\uDCC2',
    desc: "Get bot's command list.",
    category: '',
    use: '.menu',
    filename: __filename,
  }
  cmd(
    _0x369820,
    async (
      _0x52ab36,
      _0x3f3c03,
      _0x594422,
      {
        from: _0x369034,
        prefix: _0x4a1747,
        l: _0x1a811c,
        quoted: _0x3a70b6,
        body: _0x29a8f6,
        isCmd: _0x510870,
        command: _0x207a9e,
        args: _0x3166ad,
        q: _0x5e0a71,
        isGroup: _0x420a4a,
        sender: _0x4dbf70,
        senderNumber: _0x59949,
        botNumber2: _0x284bb3,
        botNumber: _0xcf0d89,
        pushname: _0x5cf141,
        isMe: _0x35cf98,
        isOwner: _0xeef95,
        groupMetadata: _0x3ee83f,
        groupName: _0x3fe054,
        participants: _0x25085d,
        groupAdmins: _0x230f74,
        isBotAdmins: _0x45a93f,
        isAdmins: _0x450645,
        reply: _0xe58668,
      }
    ) => {
      try {
        let _0x3dd981 = ''
        for (let _0x59970f = 0; _0x59970f < commands.length; _0x59970f++) {
          commands[_0x59970f].category === 'logo' &&
            !commands[_0x59970f].dontAddCommandList &&
              (_0x3dd981 +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0x59970f].pattern +
                '\n*\uD83D\uDCADDesc :* ' +
                commands[_0x59970f].desc +
                '\n*\uD83D\uDE47\uD83C\uDFFB‍\u2642️Use:* ' +
                commands[_0x59970f].use +
                '\n\n')
        }
        let _0x19ac20 =
          '\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ LOGO COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n' +
          _0x3dd981 +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\uD83D\uDC68‍\uD83D\uDCBB ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ \uD83D\uDC68‍\uD83D\uDCBB'
        const _0x2c954f = { url: config.LOGO }
        const _0x4c2309 = {
          image: _0x2c954f,
          caption: _0x19ac20,
        }
        await _0x52ab36.sendMessage(_0x369034, _0x4c2309, {
          quoted: _0x3f3c03,
          messageId: genMsgId(),
        })
      } catch (_0x5544c0) {
        _0xe58668('*Error !!*'), _0x1a811c(_0x5544c0)
      }
    }
  )
  const _0x5daf5f = {
    pattern: 'mainmenu',
    react: '\uD83D\uDCC2',
    desc: "Get bot's command list.",
    category: '',
    use: '.main',
    filename: __filename,
  }
  cmd(
    _0x5daf5f,
    async (
      _0x85db26,
      _0xe3a174,
      _0x13bb07,
      {
        from: _0x27aa24,
        prefix: _0x22558b,
        l: _0x493adb,
        quoted: _0x1defe4,
        body: _0xdce87e,
        isCmd: _0x21e8a5,
        command: _0x418fe4,
        args: _0x42e259,
        q: _0x18a0a6,
        isGroup: _0x489f6c,
        sender: _0x16303c,
        senderNumber: _0x470cb1,
        botNumber2: _0x2cce94,
        botNumber: _0x17a567,
        pushname: _0x1d4281,
        isMe: _0x12c29e,
        isOwner: _0x298d6b,
        groupMetadata: _0x4804a9,
        groupName: _0x3bb9a3,
        participants: _0xd3fdb0,
        groupAdmins: _0x4a3071,
        isBotAdmins: _0x11e6c5,
        isAdmins: _0x1ad89a,
        reply: _0xc9bcb2,
      }
    ) => {
      try {
        let _0x51d3f5 = ''
        for (let _0xc2db1 = 0; _0xc2db1 < commands.length; _0xc2db1++) {
          commands[_0xc2db1].category === 'main' &&
            !commands[_0xc2db1].dontAddCommandList &&
              (_0x51d3f5 +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0xc2db1].pattern +
                '\n*\uD83D\uDCADDesc :* ' +
                commands[_0xc2db1].desc +
                '\n*\uD83D\uDE47\uD83C\uDFFB‍\u2642️Use:* ' +
                commands[_0xc2db1].use +
                '\n\n')
        }
        let _0x518f3b =
          '\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ MAIN COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n' +
          _0x51d3f5 +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\uD83D\uDC68‍\uD83D\uDCBB ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ \uD83D\uDC68‍\uD83D\uDCBB'
        const _0x2d4a0a = { url: config.LOGO }
        const _0x5a926a = {
          image: _0x2d4a0a,
          caption: _0x518f3b,
        }
        await _0x85db26.sendMessage(_0x27aa24, _0x5a926a, {
          quoted: _0xe3a174,
          messageId: genMsgId(),
        })
      } catch (_0xc01d1) {
        _0xc9bcb2('*Error !!*'), _0x493adb(_0xc01d1)
      }
    }
  )
  const _0x44c6ee = {
    pattern: 'groupmenu',
    react: '\uD83D\uDCC2',
    desc: "Get bot's command list.",
    category: '',
    use: '.menu',
    filename: __filename,
  }
  cmd(
    _0x44c6ee,
    async (
      _0x28665f,
      _0x15fd78,
      _0x558321,
      { from: _0xb92f41, pushname: _0x2ff5ae, reply: _0x2011fd }
    ) => {
      try {
        let _0x1eb3e2 = ''
        for (let _0x53fd0d = 0; _0x53fd0d < commands.length; _0x53fd0d++) {
          commands[_0x53fd0d].category === 'group' &&
            !commands[_0x53fd0d].dontAddCommandList &&
              (_0x1eb3e2 +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0x53fd0d].pattern +
                '\n*\uD83D\uDCADDesc :* ' +
                commands[_0x53fd0d].desc +
                '\n*\uD83D\uDE47\uD83C\uDFFB‍\u2642️Use:* ' +
                commands[_0x53fd0d].use +
                '\n\n')
        }
        let _0x73db52 =
          '\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ GROUP COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n' +
          _0x1eb3e2 +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\uD83D\uDC68‍\uD83D\uDCBB ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ \uD83D\uDC68‍\uD83D\uDCBB'
        const _0x6a6881 = { url: config.LOGO }
        const _0x2238ac = {
          image: _0x6a6881,
          caption: _0x73db52,
        }
        await _0x28665f.sendMessage(_0xb92f41, _0x2238ac, {
          quoted: _0x15fd78,
          messageId: genMsgId(),
        })
      } catch (_0x110643) {
        _0x2011fd('*Error !!*'), l(_0x110643)
      }
    }
  )
  const _0x379db1 = {
    pattern: 'bugmenu',
    react: '\uD83D\uDCC2',
    desc: "Get bot's command list.",
    category: '',
    use: '.menu',
    filename: __filename,
  }
  cmd(
    _0x379db1,
    async (
      _0x4de1b5,
      _0x26c57d,
      _0x40dfe7,
      {
        from: _0x21e7ac,
        prefix: _0x206d23,
        l: _0x4ca96b,
        quoted: _0xf4eea6,
        body: _0x16abd,
        isCmd: _0x514c1f,
        command: _0x4c9006,
        args: _0x5ae2e5,
        q: _0x17dfdd,
        isGroup: _0x433b26,
        sender: _0x5cbf3e,
        senderNumber: _0x5ca5df,
        botNumber2: _0x3b2115,
        botNumber: _0x4d141c,
        pushname: _0x1fe50d,
        isMe: _0x15716b,
        isOwner: _0xe2ec7c,
        groupMetadata: _0x41ecc5,
        groupName: _0x3a837b,
        participants: _0x285db6,
        groupAdmins: _0x37ca70,
        isBotAdmins: _0x1a5f8e,
        isAdmins: _0x543ffd,
        reply: _0x2a0007,
      }
    ) => {
      try {
        let _0x13ffb1 = ''
        for (let _0xe00f3d = 0; _0xe00f3d < commands.length; _0xe00f3d++) {
          if (commands[_0xe00f3d].category === 'bug') {
            !commands[_0xe00f3d].dontAddCommandList &&
              (_0x13ffb1 +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0xe00f3d].pattern +
                '\n*\uD83D\uDCADDesc :* ' +
                commands[_0xe00f3d].desc +
                '\n*\uD83D\uDE47\uD83C\uDFFB‍\u2642️Use:* ' +
                commands[_0xe00f3d].use +
                '\n\n')
          }
        }
        let _0x346220 =
          '\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ BUG COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n' +
          _0x13ffb1 +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\uD83D\uDC68‍\uD83D\uDCBB ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ \uD83D\uDC68‍\uD83D\uDCBB'
        const _0x5ce489 = { url: config.LOGO }
        const _0x91c1fe = {
          image: _0x5ce489,
          caption: _0x346220,
        }
        await _0x4de1b5.sendMessage(_0x21e7ac, _0x91c1fe, {
          quoted: _0x26c57d,
          messageId: genMsgId(),
        })
      } catch (_0x39ed8f) {
        _0x2a0007('*Error !!*'), _0x4ca96b(_0x39ed8f)
      }
    }
  )
  const _0x421994 = {
    pattern: 'othermenu',
    react: '\uD83D\uDCC2',
    desc: "Get bot's command list.",
    category: '',
    use: '.menu',
    filename: __filename,
  }
  cmd(
    _0x421994,
    async (
      _0x101b9b,
      _0x213538,
      _0x1d5df8,
      {
        from: _0x4542df,
        prefix: _0x480956,
        l: _0x252d38,
        quoted: _0x1a249f,
        body: _0x271c0e,
        isCmd: _0x7e6331,
        command: _0x11d102,
        args: _0x1ccacc,
        q: _0x1d68cb,
        isGroup: _0xf7080b,
        sender: _0x1f4972,
        senderNumber: _0x1d96d9,
        botNumber2: _0x5203da,
        botNumber: _0x26e9bc,
        pushname: _0x3f3483,
        isMe: _0x2b835e,
        isOwner: _0xf8cd78,
        groupMetadata: _0x2eb798,
        groupName: _0xf00f82,
        participants: _0x38dd67,
        groupAdmins: _0x2dbd93,
        isBotAdmins: _0x54d505,
        isAdmins: _0x53941e,
        reply: _0x49fe49,
      }
    ) => {
      try {
        let _0x4b5fd8 = ''
        for (let _0x51a05d = 0; _0x51a05d < commands.length; _0x51a05d++) {
          commands[_0x51a05d].category === 'other' &&
            !commands[_0x51a05d].dontAddCommandList &&
              (_0x4b5fd8 +=
                '*\uD83D\uDC68\uD83C\uDFFC‍\uD83D\uDE80Command :* ' +
                commands[_0x51a05d].pattern +
                '\n*\uD83D\uDCADDesc :* ' +
                commands[_0x51a05d].desc +
                '\n*\uD83D\uDE47\uD83C\uDFFB‍\u2642️Use:* ' +
                commands[_0x51a05d].use +
                '\n\n')
        }
        let _0x98b35e =
          '\n> *\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n> *\u2502\uD83E\uDDD9‍\u2642️ OTHER COMMANDS*\n> *\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n' +
          _0x4b5fd8 +
          '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\uD83D\uDC68‍\uD83D\uDCBB ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ \uD83D\uDC68‍\uD83D\uDCBB'
        const _0x482021 = { url: config.LOGO }
        const _0x191567 = {
          image: _0x482021,
          caption: _0x98b35e,
        }
        await _0x101b9b.sendMessage(_0x4542df, _0x191567, {
          quoted: _0x213538,
          messageId: genMsgId(),
        })
      } catch (_0x442eac) {
        _0x49fe49('*Error !!*'), _0x252d38(_0x442eac)
      }
    }
  )
}
const _0x1c07b3 = {}
_0x1c07b3.pattern = 'ping'
_0x1c07b3.react = '\uD83D\uDCDF'
_0x1c07b3.alias = ['speed']
_0x1c07b3.desc = "Check bot's ping"
_0x1c07b3.category = 'main'
_0x1c07b3.use = '.ping'
_0x1c07b3.filename = __filename
cmd(
  _0x1c07b3,
  async (
    _0x3502df,
    _0x7af029,
    _0x239328,
    {
      from: _0x2e9254,
      prefix: _0x1a6561,
      l: _0x2bda67,
      quoted: _0x4e9d2b,
      body: _0x45b35b,
      isCmd: _0x3e00b4,
      command: _0x4f7654,
      args: _0x31bf1b,
      q: _0x2504fd,
      isGroup: _0x481851,
      sender: _0x5b6971,
      senderNumber: _0x72ac4,
      botNumber2: _0x163599,
      botNumber: _0xa1b2e5,
      pushname: _0x416629,
      isMe: _0x199c51,
      isOwner: _0x2f816b,
      groupMetadata: _0x34caa2,
      groupName: _0x2c5525,
      participants: _0x340a4a,
      groupAdmins: _0x17b6a1,
      isBotAdmins: _0x49eff5,
      isAdmins: _0x46840e,
      reply: _0x1593e9,
    }
  ) => {
    try {
      let _0x267843 = new Date().getTime()
      const _0x464805 = { text: '```Pinging To index.js!!!```' }
      const _0x1328d9 = { quoted: _0x7af029 }
      let _0x3eaed9 = await _0x3502df.sendMessage(
          _0x2e9254,
          _0x464805,
          _0x1328d9
        ),
        _0x45d716 = new Date().getTime()
      return await _0x3502df.edit(
        _0x3eaed9,
        '*Pong*\n *' + (_0x45d716 - _0x267843) + ' ms* '
      )
    } catch (_0x28f793) {
      _0x1593e9('*Error !!*'), console.log(_0x28f793)
    }
  }
)
const _0x4d3002 = {}
_0x4d3002.pattern = 'cmdfile'
_0x4d3002.react = '\uD83D\uDD16'
_0x4d3002.desc = 'To command file'
_0x4d3002.category = 'main'
_0x4d3002.use = '.cmdfile'
_0x4d3002.filename = __filename
cmd(
  _0x4d3002,
  async (
    _0x1e1ad5,
    _0x4277fb,
    _0x5ee3b1,
    {
      from: _0x265923,
      prefix: _0x63eaca,
      l: _0x2b2775,
      quoted: _0x2a2e55,
      body: _0x317d0c,
      isCmd: _0x1ba1d3,
      command: _0x5a14f3,
      args: _0x47a1b4,
      q: _0x44f77a,
      isGroup: _0x2c7f7f,
      sender: _0x2db1b1,
      senderNumber: _0x54e17a,
      botNumber2: _0x7627c3,
      botNumber: _0x7df906,
      pushname: _0xd7ced7,
      isMe: _0x41d801,
      isOwner: _0x50e608,
      groupMetadata: _0x5380ab,
      groupName: _0x1ce4a4,
      participants: _0x55d689,
      groupAdmins: _0x38ce67,
      isBotAdmins: _0x3f744e,
      isAdmins: _0x125040,
      reply: _0x211c23,
    }
  ) => {
    try {
      let _0x3836c4 = []
      const _0xf4be67 = commands.find(
        (_0x5b0a7d) =>
          _0x5b0a7d.pattern === _0x44f77a.split(' ')[0].toLowerCase()
      )
      if (!_0xf4be67) {
        return await _0x211c23('*\u274CNo Such commands.*')
      } else {
        _0x3836c4.push('*\uD83C\uDF41Command:* ' + _0xf4be67.pattern)
      }
      if (_0xf4be67.category) {
        _0x3836c4.push('*\uD83E\uDDE9Type:* ' + _0xf4be67.category)
      }
      if (_0xf4be67.filename) {
        _0x3836c4.push('\u2728FileName: ' + _0xf4be67.filename)
      }
      return _0x211c23(_0x3836c4.join('\n'))
      const _0x2f75d4 = {
        text: '\u2705',
        key: _0x4277fb.key,
      }
      const _0x981772 = { react: _0x2f75d4 }
      await _0x1e1ad5.sendMessage(_0x265923, _0x981772)
    } catch (_0x3004ed) {
      _0x211c23('*Error !!*')
      _0x2b2775(_0x3004ed)
    }
  }
)
const _0x29b38b = {}
_0x29b38b.pattern = 'owner'
_0x29b38b.react = '\uD83D\uDD16'
_0x29b38b.desc = 'To take owner number'
_0x29b38b.category = 'main'
_0x29b38b.use = '.ban'
_0x29b38b.filename = __filename
cmd(
  _0x29b38b,
  async (
    _0x2427ce,
    _0x196001,
    _0x30def3,
    {
      from: _0x580e64,
      prefix: _0x5f00ae,
      l: _0x169dde,
      quoted: _0x29f1ac,
      body: _0x235229,
      isCmd: _0x59bc08,
      command: _0x1c30de,
      args: _0x65efc2,
      q: _0x273b39,
      isGroup: _0x387ea1,
      sender: _0x9dbafc,
      senderNumber: _0x12ba48,
      botNumber2: _0x499a95,
      botNumber: _0x571742,
      pushname: _0x278e20,
      isMe: _0x1e03a0,
      isOwner: _0x3c8f58,
      groupMetadata: _0x4edc5e,
      groupName: _0x189af0,
      participants: _0x1035b3,
      groupAdmins: _0x4626c8,
      isBotAdmins: _0x2f2d50,
      isAdmins: _0x1f12fc,
      reply: _0x3080fd,
    }
  ) => {
    try {
      const _0x58d92b = require('../settings'),
        _0x2128a4 =
          'BEGIN:VCARD\nVERSION:3.0\nFN:' +
          _0x58d92b.OWNER_NAME +
          '\n' +
          'ORG:;\n' +
          'TEL;type=CELL;type=VOICE;waid=' +
          owner[0] +
          ':+' +
          owner[0] +
          '\n' +
          'END:VCARD',
        _0x404316 = { vcard: _0x2128a4 }
      const _0x1bb2bf = {
        displayName: _0x58d92b.OWNER_NAME,
        contacts: [_0x404316],
      }
      let _0x37153f = {
          contacts: _0x1bb2bf,
          contextInfo: {
            externalAdReply: {
              title: _0x58d92b.OWNER_NAME,
              body: 'Touch here.',
              renderLargerThumbnail: true,
              thumbnailUrl: '',
              thumbnail: 'https://i.ibb.co/NjzJXhd/OIP.png"',
              mediaType: 2,
              mediaUrl: '',
              sourceUrl:
                'https://wa.me/+' +
                owner[0] +
                '?text=Hii bro,I am ' +
                _0x196001.pushName,
            },
          },
        },
        _0x47b8e9 = [
          {
            name: 'cta_url',
            buttonParamsJson: JSON.stringify({
              display_text: 'Bot Owner',
              url: _0x58d92b.CONTACT,
              merchant_url: _0x58d92b.CONTACT,
            }),
          },
          {
            name: 'address_message',
            buttonParamsJson: JSON.stringify({
              display_text: 'Send address to bot owner',
              url: _0x58d92b.BTNURL,
              merchant_url: _0x58d92b.BTNURL,
            }),
          },
          {
            name: 'cta_call',
            buttonParamsJson: JSON.stringify({
              display_text: 'Call to the owner',
              url: _0x58d92b.OWNER_NUMBER,
              merchant_url: _0x58d92b.OWNER_NUMBER,
            }),
          },
          {
            name: 'send_location',
            buttonParamsJson: JSON.stringify({
              display_text: 'Send Location for owner',
              url: _0x58d92b.BTNURL,
              merchant_url: _0x58d92b.BTNURL,
            }),
          },
        ]
      const _0x45b432 = {
        image: '',
        header: '',
        footer: _0x58d92b.FOOTER,
        body: '> You can contact the bot owner from this section',
      }
      let _0x231669 = _0x45b432
      return await _0x2427ce.sendButtonMessage(
        _0x580e64,
        _0x47b8e9,
        _0x30def3,
        _0x231669
      )
      const _0x3b9b3b = { quoted: _0x196001 }
      return await _0x2427ce.sendMessage(_0x580e64, _0x37153f, _0x3b9b3b)
      const _0x4e0a17 = {
        text: '\u2705',
        key: _0x196001.key,
      }
      const _0x4ddbb4 = { react: _0x4e0a17 }
      await _0x2427ce.sendMessage(_0x580e64, _0x4ddbb4)
    } catch (_0x5c2cc0) {
      _0x3080fd('*Error !!*'), _0x169dde(_0x5c2cc0)
    }
  }
)
const _0x436ffc = {}
_0x436ffc.pattern = 'request'
_0x436ffc.react = '\uD83D\uDD16'
_0x436ffc.desc = 'Contact to bot owner'
_0x436ffc.category = 'main'
_0x436ffc.use = '.rsquest2'
_0x436ffc.filename = __filename
cmd(
  _0x436ffc,
  async (
    _0x5143e6,
    _0x263243,
    _0x5e2ad7,
    {
      from: _0x14debd,
      prefix: _0x5ba019,
      l: _0x4f3f72,
      quoted: _0x20247b,
      body: _0x5dafbe,
      isCmd: _0x314471,
      command: _0xda94d7,
      args: _0x573c12,
      q: _0x442b89,
      isGroup: _0xb9d7b1,
      sender: _0x54efb4,
      senderNumber: _0x44a586,
      botNumber2: _0x3ad3cd,
      botNumber: _0x5eed10,
      pushname: _0x31c44b,
      isMe: _0x16d3c1,
      isOwner: _0x361949,
      groupMetadata: _0x12dff4,
      groupName: _0x667b09,
      participants: _0xa62b57,
      groupAdmins: _0x170f77,
      isBotAdmins: _0x265c48,
      isAdmins: _0xc75ba5,
      reply: _0x868a00,
    }
  ) => {
    try {
      if (!_0x442b89) {
        return _0x263243.reply(
          'Example: ' +
            (_0x5ba019 + _0xda94d7) +
            ' hi vajira play command is not working'
        )
      }
      var _0x5f530d = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE81\uD835\uDE74\uD835\uDE7F\uD835\uDE7E\uD835\uDE81\uD835\uDE83 \uD835\uDE82\uD835\uDE74\uD835\uDE7D\uD835\uDE73 \uD835\uDE83\uD835\uDE7E \uD835\uDE83\uD835\uDE77\uD835\uDE74 \uD835\uDE7E\uD835\uDE86\uD835\uDE7D\uD835\uDE74\uD835\uDE81 \uD83D\uDDA5️...',
      ]
      const _0x4280c7 = { text: 'ꜱᴇɴᴅɪɴɢ...' }
      let { key: _0xbc4507 } = await _0x5143e6.sendMessage(_0x14debd, _0x4280c7)
      for (let _0x5b1bdb = 0; _0x5b1bdb < _0x5f530d.length; _0x5b1bdb++) {
        const _0x9dbec6 = {
          text: _0x5f530d[_0x5b1bdb],
          edit: _0xbc4507,
        }
        await _0x5143e6.sendMessage(_0x14debd, _0x9dbec6)
      }
      const _0x3c9ff1 = _0x263243.key.id
      if (reportedMessages[_0x3c9ff1]) {
        return _0x263243.reply(
          'This report has already been forwarded to the owner. Please wait for a response.'
        )
      }
      reportedMessages[_0x3c9ff1] = true
      const _0xcca7d4 = '*| REQUEST/BUG |*',
        _0x44f07c =
          '\n\n*User*: @' +
          _0x5e2ad7.sender.split('@')[0] +
          '\n*Request/Bug*: ' +
          _0x442b89,
        _0x1a3545 =
          '\n\n*Hi ' +
          _0x31c44b +
          ', your request has been forwarded to my Owners.*\n*Please wait...*'
      _0x5143e6.sendMessage(
        devlopernumber + '@s.whatsapp.net',
        {
          text: _0xcca7d4 + _0x44f07c,
          mentions: [_0x263243.sender],
        },
        { quoted: _0x263243 }
      )
      _0x263243.reply(
        'Tʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ. Iᴛ ʜᴀs ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ. Pʟᴇᴀsᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ʀᴇsᴘᴏɴsᴇ.'
      )
      const _0x38bcec = {
        text: '\u2705',
        key: _0x263243.key,
      }
      const _0x4ba9ae = { react: _0x38bcec }
      await _0x5143e6.sendMessage(_0x14debd, _0x4ba9ae)
    } catch (_0x3ccf1b) {
      _0x868a00('*Error !!*')
      _0x4f3f72(_0x3ccf1b)
    }
  }
)
const _0x1bfdf1 = {}
_0x1bfdf1.pattern = 'request2'
_0x1bfdf1.react = '\u2699️'
_0x1bfdf1.desc = 'Contact to bot owner'
_0x1bfdf1.category = 'main'
_0x1bfdf1.use = '.request'
_0x1bfdf1.filename = __filename
cmd(
  _0x1bfdf1,
  async (
    _0x6820ee,
    _0x1f0c8c,
    _0x4679d5,
    {
      from: _0x597f9b,
      l: _0x12b219,
      prefix: _0x2b8241,
      quoted: _0x1de4eb,
      body: _0x439237,
      isCmd: _0x1c739d,
      command: _0x451f0b,
      args: _0x5a9c10,
      q: _0x2645e4,
      isGroup: _0x2c107f,
      sender: _0x229c61,
      senderNumber: _0x31f83b,
      botNumber2: _0x4f0ac9,
      botNumber: _0x463ce8,
      pushname: _0x49fbf1,
      isMe: _0x3a5555,
      isOwner: _0x5c3730,
      groupMetadata: _0xac5440,
      groupName: _0x4af286,
      participants: _0x292453,
      groupAdmins: _0x475f63,
      isBotAdmins: _0x28a9e6,
      isAdmins: _0x516dcb,
      reply: _0x22fbf9,
    }
  ) => {
    try {
      let _0x3f94a3 =
        'Enter The Bug Example\n\n' + _0x451f0b + ' < YOUR REPORT MASSAGE > '
      var _0x60c330 = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE81\uD835\uDE74\uD835\uDE7F\uD835\uDE7E\uD835\uDE81\uD835\uDE83 \uD835\uDE82\uD835\uDE74\uD835\uDE7D\uD835\uDE73 \uD835\uDE83\uD835\uDE7E \uD835\uDE83\uD835\uDE77\uD835\uDE74 \uD835\uDE7E\uD835\uDE86\uD835\uDE7D\uD835\uDE74\uD835\uDE81 \uD83D\uDDA5️...',
      ]
      const _0x4cf925 = { text: 'ꜱᴇɴᴅɪɴɢ...' }
      let { key: _0x25ee60 } = await _0x6820ee.sendMessage(_0x597f9b, _0x4cf925)
      for (let _0x1a7da6 = 0; _0x1a7da6 < _0x60c330.length; _0x1a7da6++) {
        const _0xa65312 = {
          text: _0x60c330[_0x1a7da6],
          edit: _0x25ee60,
        }
        await _0x6820ee.sendMessage(_0x597f9b, _0xa65312)
      }
      await _0x6820ee.sendMessage('94719199757@s.whatsapp.net', {
        text:
          '*Bug Report From:* wa.me/' +
          _0x1f0c8c.sender.split('@')[0] +
          '\n\n*Bug Report*\n' +
          (_0x2645e4 ? _0x2645e4 : 'blank'),
      })
      const _0x3f79f0 = await _0x6820ee.sendMessage(
          '*\u300E \uD835\uDE71\uD835\uDE84\uD835\uDE76 \uD835\uDE81\uD835\uDE74\uD835\uDE7F\uD835\uDE7E\uD835\uDE81\uD835\uDE83 \u300F*'
        ),
        _0x1a69a7 = {
          text: '\u2705',
          key: _0x1f0c8c.key,
        }
      const _0x4aaeb6 = { react: _0x1a69a7 }
      await _0x6820ee.sendMessage(_0x597f9b, _0x4aaeb6)
    } catch (_0xfe9e0c) {
      _0x22fbf9('\uD83D\uDED1 This is an owner command...'),
        _0x12b219(_0xfe9e0c)
    }
  }
)
const _0xef8e5 = {}
_0xef8e5.pattern = 'setbotbio'
_0xef8e5.react = '\u2699️'
_0xef8e5.desc = 'To change bot number bio'
_0xef8e5.category = 'main'
_0xef8e5.use = '.setbotbio'
_0xef8e5.filename = __filename
cmd(
  _0xef8e5,
  async (
    _0x5363da,
    _0xeaa318,
    _0x42b4ab,
    {
      from: _0x41fae6,
      prefix: _0x23525d,
      l: _0x1dc30f,
      quoted: _0x485588,
      body: _0xa1805a,
      isCmd: _0x2f7b8a,
      command: _0x1dc120,
      args: _0x4012bf,
      q: _0x2f6fe1,
      isGroup: _0x4965aa,
      sender: _0x28aa49,
      senderNumber: _0x3d5e55,
      botNumber2: _0x34e3a4,
      botNumber: _0x16aa40,
      pushname: _0x23398e,
      isMe: _0x29fd61,
      isOwner: _0x32f173,
      groupMetadata: _0x13f2ed,
      groupName: _0x39a458,
      participants: _0x4947f5,
      groupAdmins: _0x526b44,
      isBotAdmins: _0x37227c,
      isAdmins: _0x3aba2a,
      reply: _0x11ef39,
    }
  ) => {
    try {
      if (!_0x29fd61) {
        return await _0x11ef39(BOTOW)
      }
      if (!_0x2f6fe1) {
        return _0x11ef39(
          'Where is the text?\nExample: ' +
            (_0x23525d + _0x1dc120) +
            ' izumi Bot'
        )
      }
      await _0x5363da.updateProfileStatus(_0x2f6fe1)
      _0x11ef39("Success in changing the bio of bot's number")
      const _0x51d12f = {}
      _0x51d12f.text = '\u2705'
      _0x51d12f.key = _0xeaa318.key
      const _0x2f6628 = {}
      _0x2f6628.react = _0x51d12f
      await _0x5363da.sendMessage(_0x41fae6, _0x2f6628)
    } catch (_0x1820e3) {
      _0x11ef39('*\uD83D\uDED1 This is an owner command...*'),
        _0x1dc30f(_0x1820e3)
    }
  }
)
const _0x5a351d = {}
_0x5a351d.pattern = 'getsession'
_0x5a351d.react = '\uD83D\uDD16'
_0x5a351d.desc = 'To get bot session'
_0x5a351d.category = 'main'
_0x5a351d.use = '.getsession'
_0x5a351d.filename = __filename
cmd(
  _0x5a351d,
  async (
    _0x50f7e6,
    _0x2aa4aa,
    _0x66cd13,
    {
      from: _0x3e3753,
      prefix: _0x1d8e13,
      l: _0x3033fd,
      quoted: _0x37201b,
      body: _0x5c3b83,
      isCmd: _0x267487,
      command: _0x370142,
      args: _0x10fbb4,
      q: _0x2511cb,
      isGroup: _0x5bda21,
      sender: _0x3cc2af,
      senderNumber: _0x3a49d5,
      botNumber2: _0x3fbf8e,
      botNumber: _0x414116,
      pushname: _0x164f97,
      isMe: _0x5a6319,
      isOwner: _0x2e497a,
      groupMetadata: _0x4ee0e4,
      groupName: _0x4d0ddb,
      participants: _0x32accb,
      groupAdmins: _0x4fff64,
      isBotAdmins: _0x5a18a5,
      isAdmins: _0x1285ad,
      reply: _0x4234ed,
    }
  ) => {
    try {
      if (!_0x5a6319) {
        return await _0x4234ed(BOTOW)
      }
      _0x4234ed('Wait a moment, currently retrieving your session file')
      let _0x241e69 = fs.readFileSync('./session/creds.json')
      const _0x4b0244 = {
        document: _0x241e69,
        mimetype: 'application/json',
        fileName: 'creds.json',
      }
      _0x50f7e6.sendMessage(_0x2aa4aa.chat, _0x4b0244, { quoted: _0x2aa4aa })
      const _0x1d0984 = {
        text: '\u2705',
        key: _0x2aa4aa.key,
      }
      const _0x19d8da = { react: _0x1d0984 }
      await _0x50f7e6.sendMessage(_0x3e3753, _0x19d8da)
    } catch (_0x3f2edb) {
      _0x4234ed('*\uD83D\uDED1 This is an owner command...*'),
        _0x3033fd(_0x3f2edb)
    }
  }
)
const _0x46c3fb = {}
_0x46c3fb.pattern = 'delsession'
_0x46c3fb.react = '\uD83D\uDD16'
_0x46c3fb.desc = 'To delete bot session'
_0x46c3fb.category = 'main'
_0x46c3fb.use = '.delsession'
_0x46c3fb.filename = __filename
cmd(
  _0x46c3fb,
  async (
    _0x41e8c4,
    _0x3752a2,
    _0x13f8f8,
    {
      from: _0x4c86e,
      prefix: _0xeb1db0,
      l: _0x500052,
      quoted: _0x5547cd,
      body: _0x30ca31,
      isCmd: _0x3ee992,
      command: _0x20c363,
      args: _0x275273,
      q: _0x567761,
      isGroup: _0x5b19be,
      sender: _0x1800a3,
      senderNumber: _0x3618c6,
      botNumber2: _0x23dd45,
      botNumber: _0x6e3ca7,
      pushname: _0x940969,
      isMe: _0x2fb1c5,
      isOwner: _0x3135c0,
      groupMetadata: _0x5db28c,
      groupName: _0x86ebe6,
      participants: _0x3d145f,
      groupAdmins: _0x453ec6,
      isBotAdmins: _0x2d6e0a,
      isAdmins: _0x1bfd49,
      reply: _0x50e96f,
    }
  ) => {
    try {
      if (!_0x2fb1c5) {
        return await _0x50e96f(BOTOW)
      }
      fs.readdir('./session', async function (_0x299ceb, _0x434269) {
        if (_0x299ceb) {
          return (
            console.log('Unable to scan directory: ' + _0x299ceb),
            _0x50e96f('Unable to scan directory: ' + _0x299ceb)
          )
        }
        let _0x521626 = await _0x434269.filter(
          (_0x570a61) =>
            _0x570a61.startsWith('pre-key') ||
            _0x570a61.startsWith('sender-key') ||
            _0x570a61.startsWith('session-') ||
            _0x570a61.startsWith('app-state')
        )
        console.log(_0x521626.length)
        let _0x482c35 = 'Detected ' + _0x521626.length + ' junk files\n\n'
        if (_0x521626.length == 0) {
          return _0x50e96f()
        }
        _0x521626.map(function (_0x84b302, _0x167806) {
          _0x482c35 += _0x167806 + 1 + ('. ' + _0x84b302 + '\n')
        })
        _0x50e96f()
        await sleep(2000)
        _0x50e96f('Deleting junk files...')
        await _0x521626.forEach(function (_0x3a27be) {
          fs.unlinkSync('./session/' + _0x3a27be)
        })
        await sleep(2000)
        _0x50e96f('Successfully deleted all the trash in the session folder')
      })
      const _0x7a8968 = {
        text: '\u2705',
        key: _0x3752a2.key,
      }
      const _0x2f7516 = { react: _0x7a8968 }
      await _0x41e8c4.sendMessage(_0x4c86e, _0x2f7516)
    } catch (_0x531471) {
      _0x50e96f('*\uD83D\uDED1 This is an owner command...*'),
        _0x500052(_0x531471)
    }
  }
)
const _0x53a009 = {}
_0x53a009.pattern = 'unblock'
_0x53a009.react = '\uD83D\uDD16'
_0x53a009.desc = 'To unblock a member'
_0x53a009.category = 'main'
_0x53a009.use = '.unblock'
_0x53a009.filename = __filename
cmd(
  _0x53a009,
  async (
    _0x56a768,
    _0x36df47,
    _0x8ec07c,
    {
      from: _0x5cc5ad,
      prefix: _0x467978,
      l: _0x508b85,
      quoted: _0x3820d3,
      body: _0x49510e,
      isCmd: _0x49962f,
      command: _0x3919c6,
      args: _0x15f916,
      q: _0xd2f973,
      isGroup: _0x33d7aa,
      sender: _0x26e6aa,
      senderNumber: _0x8be25e,
      botNumber2: _0x2b5c6d,
      botNumber: _0x3e62a5,
      pushname: _0x3240eb,
      isMe: _0x3c9af9,
      isOwner: _0x8848e,
      groupMetadata: _0x268f6d,
      groupName: _0x3cae04,
      participants: _0x217231,
      groupAdmins: _0xfcf2cd,
      isBotAdmins: _0x876419,
      isAdmins: _0x2b8883,
      reply: _0x3caf1e,
    }
  ) => {
    try {
      if (!_0x3c9af9) {
        return await _0x3caf1e(BOTOW)
      }
      let _0x4c636d = _0x36df47.mentionedJid
        ? _0x36df47.mentionedJid
        : _0x36df47.quoted
        ? _0x36df47.quoted.sender
        : _0xd2f973.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      await _0x56a768
        .updateBlockStatus(_0x4c636d, 'unblock')
        .then((_0x4453dc) => _0x3caf1e(jsonformat(_0x4453dc)))
        .catch((_0x140e7) => _0x3caf1e(jsonformat(_0x140e7)))
      const _0x173765 = {
        text: '\u2705',
        key: _0x36df47.key,
      }
      const _0xe2fc25 = { react: _0x173765 }
      await _0x56a768.sendMessage(_0x5cc5ad, _0xe2fc25)
    } catch (_0x5ea4e6) {
      _0x3caf1e('*\uD83D\uDED1 This is an owner command...*'),
        _0x508b85(_0x5ea4e6)
    }
  }
)
const _0x26db8c = {}
_0x26db8c.pattern = 'shutdown'
_0x26db8c.react = '\u2699️'
_0x26db8c.desc = 'To shutdown the bot'
_0x26db8c.category = 'main'
_0x26db8c.use = '.shutdown'
_0x26db8c.filename = __filename
cmd(
  _0x26db8c,
  async (
    _0x1d6607,
    _0x531e99,
    _0x1bce8c,
    {
      from: _0x11c50d,
      prefix: _0x2843b5,
      l: _0x542c19,
      quoted: _0x3f2361,
      body: _0x4b14aa,
      isCmd: _0x12eb9f,
      command: _0x353df9,
      args: _0x109cc3,
      q: _0x9cc4f6,
      isGroup: _0x1cd78b,
      sender: _0x5b70d6,
      senderNumber: _0x5b9fc4,
      botNumber2: _0x596000,
      botNumber: _0x22c695,
      pushname: _0x8d939c,
      isMe: _0x534c52,
      isOwner: _0x58a7d0,
      groupMetadata: _0x577224,
      groupName: _0x38d623,
      participants: _0x1ccbeb,
      groupAdmins: _0x20e5dc,
      isBotAdmins: _0x4abcbb,
      isAdmins: _0x38c0e4,
      reply: _0x5a9d7d,
    }
  ) => {
    try {
      if (!_0x534c52) {
        return await _0x5a9d7d(BOTOW)
      }
      _0x5a9d7d('Bot shutdown few 10 seconds...')
      await sleep(10000)
      process.exit()
      const _0x278253 = {}
      _0x278253.text = '\u2705'
      _0x278253.key = _0x531e99.key
      const _0x45b2e1 = {}
      _0x45b2e1.react = _0x278253
      await _0x1d6607.sendMessage(_0x11c50d, _0x45b2e1)
    } catch (_0x2a04fc) {
      _0x5a9d7d('*\uD83D\uDED1 This is an owner command...*'),
        _0x542c19(_0x2a04fc)
    }
  }
)
const _0x11922c = {}
_0x11922c.pattern = 'block'
_0x11922c.react = '\uD83D\uDD16'
_0x11922c.desc = 'To block a member'
_0x11922c.category = 'main'
_0x11922c.use = '.block'
_0x11922c.filename = __filename
cmd(
  _0x11922c,
  async (
    _0x421309,
    _0x5cf828,
    _0x1044f2,
    {
      from: _0x4cfb94,
      prefix: _0xb775a,
      l: _0x3f647b,
      quoted: _0x44edd9,
      body: _0x390d82,
      isCmd: _0x5a5854,
      command: _0x215c94,
      args: _0x51593a,
      q: _0x2ea570,
      isGroup: _0x57be61,
      sender: _0xb8985e,
      senderNumber: _0x4ae85b,
      botNumber2: _0x172527,
      botNumber: _0x404332,
      pushname: _0x3c6aa1,
      isMe: _0x1e98d7,
      isOwner: _0x326bdb,
      groupMetadata: _0x3331f6,
      groupName: _0x12b67b,
      participants: _0x296c10,
      groupAdmins: _0x13384f,
      isBotAdmins: _0x336085,
      isAdmins: _0x2c356d,
      reply: _0x562c4d,
    }
  ) => {
    try {
      if (!_0x1e98d7) {
        return await _0x562c4d(BOTOW)
      }
      let _0x580d64 = _0x5cf828.mentionedJid
        ? _0x5cf828.mentionedJid
        : _0x5cf828.quoted
        ? _0x5cf828.quoted.sender
        : _0x2ea570.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      await _0x421309
        .updateBlockStatus(_0x580d64, 'block')
        .then((_0x14ee34) => _0x562c4d(jsonformat(_0x14ee34)))
        .catch((_0x718e5) => _0x562c4d(jsonformat(_0x718e5)))
      const _0xc6abc = {
        text: '\u2705',
        key: _0x5cf828.key,
      }
      const _0x2727fa = { react: _0xc6abc }
      await _0x421309.sendMessage(_0x4cfb94, _0x2727fa)
    } catch (_0x468be3) {
      _0x562c4d('*Error !!*'), _0x3f647b(_0x468be3)
    }
  }
)
const _0xeefe7c = {}
_0xeefe7c.pattern = 'npm'
_0xeefe7c.react = '\uD83D\uDD16'
_0xeefe7c.desc = 'To search npm packages'
_0xeefe7c.category = 'main'
_0xeefe7c.use = '.npm'
_0xeefe7c.filename = __filename
cmd(
  _0xeefe7c,
  async (
    _0x1ff70f,
    _0x4560cc,
    _0x4fc376,
    {
      from: _0xc01ddb,
      prefix: _0x42e15b,
      l: _0x2b690c,
      quoted: _0x2bc1c3,
      body: _0x55c869,
      isCmd: _0x2ab4cc,
      command: _0x3d5f0d,
      args: _0x84687a,
      q: _0x33ef65,
      isGroup: _0x429906,
      sender: _0x329b80,
      senderNumber: _0x3d7126,
      botNumber2: _0xe00de7,
      botNumber: _0x2e9d84,
      pushname: _0xc0cb1,
      isMe: _0x5ac787,
      isOwner: _0x295cab,
      groupMetadata: _0x2c3c4e,
      groupName: _0x27f6cf,
      participants: _0x20e88b,
      groupAdmins: _0x371b6e,
      isBotAdmins: _0x5c6990,
      isAdmins: _0x38fce0,
      reply: _0x5c614e,
    }
  ) => {
    try {
      if (!_0x33ef65) {
        return _0x4560cc.reply('Please give me package name.\uD83D\uDCE6')
      }
      const { data: _0x2545bf } = await axios.get(
        'https://api.npms.io/v2/search?q=' + _0x33ef65
      )
      let _0x40ea36 = _0x2545bf.results
        .map(
          ({ package: _0x15e54d }) =>
            '*' +
            _0x15e54d.name +
            '* (v' +
            _0x15e54d.version +
            ')\n_' +
            _0x15e54d.links.npm +
            '_\n_' +
            _0x15e54d.description +
            '_'
        )
        .join('\n\n')
        ?.trim()
      _0x2545bf && _0x40ea36
        ? await _0x4560cc.reply(_0x40ea36)
        : await _0x4560cc.reply('*No Result Found. Sorry!!*')
      const _0x287ea7 = {
        text: '\u2705',
        key: _0x4560cc.key,
      }
      const _0x239c88 = { react: _0x287ea7 }
      await _0x1ff70f.sendMessage(_0xc01ddb, _0x239c88)
    } catch (_0x40c555) {
      await console.error(_0x40c555 + '\n\ncommand : npm', _0x40c555)
      _0x2b690c(_0x40c555)
    }
  }
)
const _0x1c409 = {}
_0x1c409.on = 'body'
cmd(
  _0x1c409,
  async (
    _0x61efcc,
    _0x98a753,
    _0x33e67d,
    {
      from: _0x5ad7d3,
      prefix: _0x346792,
      l: _0x5b3e71,
      quoted: _0x134334,
      body: _0x49a055,
      isCmd: _0x35c0a1,
      command: _0x2ae5ff,
      args: _0x3b94d2,
      q: _0xa44a96,
      isGroup: _0x40edbc,
      sender: _0x37d682,
      senderNumber: _0x3466c6,
      botNumber2: _0x23ce62,
      botNumber: _0x45395d,
      pushname: _0x3c07ca,
      isMe: _0x7b4d49,
      isOwner: _0x349380,
      groupMetadata: _0x54cdff,
      groupName: _0x4e4b75,
      participants: _0x424c0d,
      groupAdmins: _0x4d2173,
      isBotAdmins: _0x2ca785,
      isAdmins: _0x5eea9f,
      reply: _0x82c6b3,
    }
  ) => {
    if (config.AUTO_REACT === 'true') {
      const _0x50d964 = [
          '\u2764',
          '\uD83D\uDC95',
          '\uD83D\uDE3B',
          '\uD83E\uDDE1',
          '\uD83D\uDC9B',
          '\uD83D\uDC9A',
          '\uD83D\uDC99',
          '\uD83D\uDC9C',
          '\uD83D\uDDA4',
          '\u2763',
          '\uD83D\uDC9E',
          '\uD83D\uDC93',
          '\uD83D\uDC97',
          '\uD83D\uDC96',
          '\uD83D\uDC98',
          '\uD83D\uDC9D',
          '\uD83D\uDC9F',
          '\u2665',
          '\uD83D\uDC8C',
          '\uD83D\uDE42',
          '\uD83E\uDD17',
          '\uD83D\uDE0C',
          '\uD83D\uDE09',
          '\uD83E\uDD17',
          '\uD83D\uDE0A',
          '\uD83C\uDF8A',
          '\uD83C\uDF89',
          '\uD83C\uDF81',
          '\uD83C\uDF88',
          '\uD83D\uDC4B',
        ],
        _0x1e344c = _0x50d964[Math.floor(Math.random() * _0x50d964.length)],
        _0x38adc6 = {
          text: _0x1e344c,
          key: _0x98a753.key,
        }
      const _0x4b59be = { react: _0x38adc6 }
      _0x61efcc.sendMessage(_0x5ad7d3, _0x4b59be)
    }
  }
)
const _0x16355e = {}
_0x16355e.pattern = 'restart'
_0x16355e.react = '\u267B️'
_0x16355e.desc = 'restart bot'
_0x16355e.category = 'owner'
_0x16355e.use = '.restart'
_0x16355e.filename = __filename
cmd(
  _0x16355e,
  async (
    _0x236d82,
    _0x2680cd,
    _0x35c63d,
    {
      from: _0x36b20c,
      l: _0x453cc5,
      quoted: _0x563fbd,
      body: _0x30f363,
      isCmd: _0x3dbe15,
      command: _0x1ed717,
      args: _0x3dad8c,
      q: _0x195c2d,
      isGroup: _0x20796b,
      sender: _0x267d60,
      senderNumber: _0x3190fe,
      botNumber2: _0xd5095f,
      botNumber: _0x11dcec,
      pushname: _0x19feec,
      isMe: _0x2d7ca3,
      isOwner: _0x4699b8,
      groupMetadata: _0x106eca,
      groupName: _0x5d510b,
      participants: _0xe60b2c,
      isItzcp: _0xb49f4e,
      groupAdmins: _0x3cb75e,
      isBotAdmins: _0x253214,
      isAdmins: _0x482818,
      reply: _0x4b98e8,
      react: _0x1b0f2a,
    }
  ) => {
    try {
      if (!_0x4699b8) {
        return
      }
      const _0x5a8f7f = { text: mg.restartmg }
      const _0x14a218 = { quoted: _0x2680cd }
      await _0x236d82.sendMessage(_0x35c63d.chat, _0x5a8f7f, _0x14a218)
      process.exit(143)
    } catch (_0x321b58) {
      _0x4b98e8('*Error !!*'), _0x453cc5(_0x321b58)
    }
  }
)
const _0x38b137 = {}
_0x38b137.pattern = 'system'
_0x38b137.react = '\uD83E\uDDEC'
_0x38b137.alias = ['status']
_0x38b137.desc = 'Check bot system status.'
_0x38b137.category = 'genaral'
_0x38b137.use = '.system'
_0x38b137.filename = __filename
cmd(
  _0x38b137,
  async (
    _0x34ca2f,
    _0x4142f0,
    _0x356b00,
    {
      from: _0x3ac8ec,
      l: _0x2bc64d,
      quoted: _0xb819b6,
      body: _0x234539,
      isCmd: _0x439b5d,
      command: _0x4cd0c0,
      args: _0x2b8de1,
      q: _0x509093,
      isGroup: _0x489a1b,
      sender: _0x4ee5b5,
      senderNumber: _0x5159c2,
      botNumber2: _0x46a827,
      botNumber: _0x2fb5ff,
      pushname: _0x4ca7c9,
      isMe: _0x4f0ac5,
      isOwner: _0x2209c3,
      groupMetadata: _0x13d136,
      groupName: _0x5e0e8f,
      participants: _0x5f5c1b,
      isItzcp: _0x18a75e,
      groupAdmins: _0x2a830c,
      isBotAdmins: _0x353619,
      isAdmins: _0x4fd027,
      reply: _0x5d6ea6,
      react: _0x125da0,
    }
  ) => {
    try {
      if (_0x489a1b) {
        const _0x5e4d60 = await fetchJson(
          '' + config.DOWNLOADSAPI + bot + '/' + _0x3ac8ec
        )
        if (
          _0x5e4d60 &&
          (_0x5e4d60?.error || _0x5e4d60?.data?.type == 'false')
        ) {
          return
        }
      } else {
        if (!_0x489a1b) {
          const _0x79e35a = await fetchJson(
            '' + config.DOWNLOADSAPI + bot + '/' + _0x4ee5b5
          )
          if (
            _0x79e35a &&
            (_0x79e35a?.error || _0x79e35a?.data?.type == 'false')
          ) {
            return
          }
        }
      }
      var _0x367536 = new Date().getTime(),
        _0x44a258 = new Date().getTime()
      const _0x1bc412 = _0x44a258 - _0x367536
      os.hostname().length == 12
        ? (hostname = mg.replithostname)
        : os.hostname().length == 36
        ? (hostname = mg.herokuhostname)
        : os.hostname().length == 8
        ? (hostname = mg.koyebhostname)
        : (hostname = os.hostname())
      const _0x2687c0 =
          (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
          'MB / ' +
          Math.round(require('os').totalmem / 1024 / 1024) +
          'MB',
        _0x257df1 = await runtime(process.uptime()),
        _0x367141 =
          '*\xD7-|\uD835\uDE85\uD835\uDE70\uD835\uDE79\uD835\uDE78\uD835\uDE81\uD835\uDE70 \uD835\uDE7C\uD835\uDE73|-\uD835\uDE86\uD835\uDE70-\uD835\uDE71\uD835\uDE7E\uD835\uDE83-\uD835\uDE82\uD835\uDE88\uD835\uDE82\uD835\uDE83\uD835\uDE74\uD835\uDE7C-\uD835\uDE78\uD835\uDE7D\uD835\uDE75\uD835\uDE7E|-\xD7*\n\n\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA\n*\u251C\u2699️\uD835\uDE7F\uD835\uDE7B\uD835\uDE70\uD835\uDE83\uD835\uDE75\uD835\uDE7E\uD835\uDE81\uD835\uDE7C : ' +
          hostname +
          '*  \n*\u251C\u23F0\uD835\uDE84\uD835\uDE7F\uD835\uDE83\uD835\uDE78\uD835\uDE7C\uD835\uDE74 : ' +
          _0x257df1 +
          '*       \n*\u251C\uD83D\uDCDF\uD835\uDE81\uD835\uDE70\uD835\uDE7C : ' +
          _0x2687c0 +
          '*             \n*\u251C\uD83C\uDF10\uD835\uDE7C\uD835\uDE7E\uD835\uDE73\uD835\uDE74 : ' +
          mg.mode +
          '*                    \n*\u251C\uD83D\uDC68‍\uD83D\uDCBB\uD835\uDE7E\uD835\uDE86\uD835\uDE7D\uD835\uDE74\uD835\uDE81\uD835\uDE82 : masterx team*\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA',
        _0x29114e = { text: _0x367141 }
      const _0x34b195 = { quoted: _0x4142f0 }
      await _0x34ca2f.sendMessage(_0x356b00.chat, _0x29114e, _0x34b195)
    } catch (_0x45eb71) {
      _0x5d6ea6('*Error !!*')
      _0x2bc64d(_0x45eb71)
    }
  }
)
const _0x3b0de0 = {}
_0x3b0de0.pattern = 'addsudo'
_0x3b0de0.react = '\uD83C\uDF97️'
_0x3b0de0.desc = 'Activate a bot for the user'
_0x3b0de0.category = 'main'
_0x3b0de0.filename = __filename
_0x3b0de0.use = '.addsudo'
cmd(
  _0x3b0de0,
  async (
    _0x30018d,
    _0x59ea4a,
    _0x3f67f2,
    {
      from: _0x39f3c4,
      l: _0x35d4d5,
      quoted: _0x47c07f,
      body: _0x1caef8,
      isCmd: _0x19d436,
      command: _0x51b005,
      args: _0x461dab,
      q: _0x2f3ed3,
      isGroup: _0x41ead4,
      sender: _0x59194e,
      senderNumber: _0x5f397b,
      botNumber2: _0x3f275e,
      botNumber: _0x37a6fa,
      pushname: _0x5593b7,
      isMe: _0x462e37,
      isOwner: _0x107955,
      groupMetadata: _0x58c2d4,
      groupName: _0x2fb89a,
      participants: _0x53ec77,
      isItzcp: _0x102713,
      groupAdmins: _0xcb3ebc,
      isBotAdmins: _0x4819bf,
      isAdmins: _0x32290a,
      reply: _0x163310,
    }
  ) => {
    try {
      if (!_0x41ead4) {
        if (config.DOWNLOADSAPI !== '') {
          if (!_0x3f67f2?.quoted?.sender) {
            return
          }
          const _0x5d5cb5 = await fetchJson(
            '' + config.DOWNLOADSAPI + bot + '/' + _0x59194e
          )
          if (
            _0x5d5cb5 &&
            (_0x5d5cb5?.error || _0x5d5cb5?.data?.type == 'false')
          ) {
            return
          }
          const _0x196257 = await fetchJson(
            '' +
              config.DOWNLOADSAPI +
              bot +
              '?groupjid=' +
              _0x3f67f2.quoted.sender +
              '&type=true'
          )
          _0x163310(mg.sudoadded)
        } else {
          _0x163310(mg.devoffsetting)
        }
      }
    } catch (_0x437369) {
      _0x163310('*Error !!*')
      _0x35d4d5(_0x437369)
    }
  }
)
const _0x3dc8bb = {}
_0x3dc8bb.pattern = 'activate'
_0x3dc8bb.react = '\uD83D\uDEDC'
_0x3dc8bb.desc = 'Activate a bot for the group'
_0x3dc8bb.category = 'main'
_0x3dc8bb.filename = __filename
_0x3dc8bb.use = '.activate'
cmd(
  _0x3dc8bb,
  async (
    _0x12101e,
    _0x31d136,
    _0x5da35d,
    {
      from: _0x37fd48,
      l: _0x755f85,
      quoted: _0x1354fc,
      body: _0x165185,
      isCmd: _0x29adf9,
      command: _0x364eaa,
      args: _0x5e3702,
      q: _0x34a3f4,
      isGroup: _0x3725a4,
      sender: _0x2b85fb,
      senderNumber: _0x6dc612,
      botNumber2: _0x14dcde,
      botNumber: _0x5f8647,
      pushname: _0x12cc4b,
      isMe: _0x304d85,
      isOwner: _0x16536a,
      groupMetadata: _0x1d1c03,
      groupName: _0x5a30a7,
      participants: _0x9959ae,
      isItzcp: _0x14b701,
      groupAdmins: _0x13aff5,
      isBotAdmins: _0x51884d,
      isAdmins: _0x17ca06,
      reply: _0x34774e,
    }
  ) => {
    try {
      if (_0x3725a4 && (_0x16536a || _0x14b701)) {
        if (config.DOWNLOADSAPI !== '') {
          const _0x152e89 = await fetchJson(
            '' + config.DOWNLOADSAPI + bot + '/' + _0x2b85fb
          )
          if (
            _0x152e89 &&
            (_0x152e89?.error || _0x152e89?.data?.type == 'false')
          ) {
            return
          }
          const _0x281776 = await fetchJson(
            '' +
              config.DOWNLOADSAPI +
              bot +
              '?groupjid=' +
              _0x37fd48 +
              '&type=true'
          )
          _0x34774e(mg.activatbotingroup)
        } else {
          _0x34774e(mg.devoffsetting)
        }
      }
    } catch (_0x463a2f) {
      _0x34774e('*Error !!*')
      _0x755f85(_0x463a2f)
    }
  }
)
const _0x1b481f = {}
_0x1b481f.pattern = 'resetdl'
_0x1b481f.react = '\u21A9️'
_0x1b481f.desc = 'reset available downloads'
_0x1b481f.category = 'main'
_0x1b481f.filename = __filename
_0x1b481f.use = '.resetdl'
cmd(
  _0x1b481f,
  async (
    _0x565ab2,
    _0x21f331,
    _0x231dc4,
    {
      from: _0x1b6760,
      l: _0x271a6c,
      quoted: _0x5029d9,
      body: _0x591cdd,
      isCmd: _0x243a6c,
      command: _0xcf8b04,
      args: _0x4ddbcb,
      q: _0x4ebb63,
      isGroup: _0x2cfb33,
      sender: _0x455106,
      senderNumber: _0x5318d4,
      botNumber2: _0x5f2b96,
      botNumber: _0x236a81,
      pushname: _0x12eb24,
      isMe: _0x28e977,
      isOwner: _0x4dbf63,
      groupMetadata: _0x557476,
      groupName: _0x143025,
      participants: _0x1be4a1,
      isItzcp: _0x575fb0,
      groupAdmins: _0x362625,
      isBotAdmins: _0x19f3af,
      isAdmins: _0x189994,
      reply: _0x1899d0,
    }
  ) => {
    try {
      if (_0x4dbf63 || _0x575fb0) {
        if (config.DOWNLOADSAPI !== '') {
          const _0x19fd96 = await fetchJson(
            '' + config.DOWNLOADSAPI + bot + '/' + _0x455106
          )
          if (
            _0x19fd96 &&
            (_0x19fd96?.error || _0x19fd96?.data?.type == 'false')
          ) {
            return
          }
          const _0x3c3fd0 = await fetchJson(
            '' + config.DOWNLOADSAPI + bot + '/downloads/reset'
          )
          await _0x1899d0(mg.databasereset)
          process.exit(143)
        } else {
          _0x1899d0(mg.devoffsetting)
        }
      }
    } catch (_0x4c7d58) {
      _0x1899d0('*Error !!*')
      _0x271a6c(_0x4c7d58)
    }
  }
)
const _0x1c2586 = {}
_0x1c2586.pattern = 'apply'
_0x1c2586.react = '\uD83D\uDD30'
_0x1c2586.desc = 'apply a date limit for user in group'
_0x1c2586.category = 'main'
_0x1c2586.filename = __filename
_0x1c2586.use = '.apply'
cmd(
  _0x1c2586,
  async (
    _0x5a4307,
    _0x4276dd,
    _0x4df20d,
    {
      from: _0x2b0625,
      l: _0x2ca0ee,
      quoted: _0x42e83b,
      body: _0x16b197,
      isCmd: _0xd4e7d1,
      command: _0x4ae71a,
      args: _0x1f121b,
      q: _0x48c9df,
      isGroup: _0x592151,
      sender: _0x282090,
      senderNumber: _0x3080ae,
      botNumber2: _0x497b14,
      botNumber: _0x3b310a,
      pushname: _0x1ffe7f,
      isMe: _0x487b55,
      isOwner: _0x1b8a20,
      groupMetadata: _0x3ca794,
      groupName: _0x4a650c,
      participants: _0x36ea3b,
      isItzcp: _0x23b9a0,
      groupAdmins: _0x2a89ee,
      isBotAdmins: _0x64e9aa,
      isAdmins: _0x12b151,
      reply: _0x371c86,
    }
  ) => {
    try {
      if (_0x592151 && (_0x1b8a20 || _0x23b9a0)) {
        if (config.DOWNLOADSAPI !== '') {
          if (!_0x4df20d?.quoted?.sender) {
            return
          }
          const _0x44c181 = await fetchJson(
            '' + config.DOWNLOADSAPI + bot + '/' + _0x2b0625
          )
          if (
            _0x44c181 &&
            (_0x44c181?.error || _0x44c181?.data?.type == 'false')
          ) {
            return
          }
          const _0x278b24 = await fetchJson(
            '' + config.DOWNLOADSAPI + bot + '/' + _0x282090
          )
          if (
            _0x278b24 &&
            (_0x278b24?.error || _0x278b24?.data?.type == 'false')
          ) {
            return
          }
          const _0x4ea145 = await fetchJson(
            '' +
              config.DOWNLOADSAPI +
              bot +
              '/groups/?groupjid=' +
              _0x4df20d.quoted.sender +
              '&sender=' +
              _0x4df20d.quoted.sender +
              '&datelimit=' +
              _0x48c9df
          )
          await _0x371c86(mg.datelimit)
          const _0x9f5129 = { quoted: _0x4276dd }
          await _0x5a4307.sendMessage(
            _0x4df20d.chat,
            {
              text:
                '@' +
                _0x4df20d.quoted.sender.split('@')[0] +
                ' can use this bot until ' +
                _0x4ea145.data[0].date,
              mentions: _0x4df20d.quoted.sender,
            },
            _0x9f5129
          )
        } else {
          await _0x371c86(mg.devoffsetting)
        }
      } else {
        if (!_0x592151 && (_0x1b8a20 || _0x23b9a0)) {
          if (config.DOWNLOADSAPI !== '') {
            if (!_0x4df20d?.quoted?.sender) {
              return
            }
            const _0x174fb9 = await fetchJson(
              '' + config.DOWNLOADSAPI + bot + '/' + _0x282090
            )
            if (
              _0x174fb9 &&
              (_0x174fb9?.error || _0x174fb9?.data?.type == 'false')
            ) {
              return
            }
            const _0x188600 = await fetchJson(
              '' +
                config.DOWNLOADSAPI +
                bot +
                '/groups/?groupjid=' +
                _0x4df20d.quoted.sender +
                '&sender=' +
                _0x4df20d.quoted.sender +
                '&datelimit=' +
                _0x48c9df
            )
            await _0x371c86(mg.datelimit)
            const _0x3425c9 = { quoted: _0x4276dd }
            await _0x5a4307.sendMessage(
              _0x4df20d.chat,
              {
                text:
                  '@' +
                  _0x4df20d.quoted.sender.split('@')[0] +
                  ' can use this bot until ' +
                  _0x188600.data[0].date,
                mentions: _0x4df20d.quoted.sender,
              },
              _0x3425c9
            )
          } else {
            await _0x371c86(mg.devoffsetting)
          }
        }
      }
    } catch (_0x196260) {
      _0x371c86('*Error !!*')
      _0x2ca0ee(_0x196260)
    }
  }
)
const _0x33e177 = {}
_0x33e177.pattern = 'delsudo'
_0x33e177.react = '\uD83D\uDED1'
_0x33e177.desc = 'Deactivate a bot for the user'
_0x33e177.category = 'main'
_0x33e177.filename = __filename
_0x33e177.use = '.delsudo'
cmd(
  _0x33e177,
  async (
    _0x4913c3,
    _0x597024,
    _0x1c231f,
    {
      from: _0x4de8e0,
      l: _0x2da785,
      quoted: _0x25cba9,
      body: _0x5e4a46,
      isCmd: _0xd3982b,
      command: _0x39476a,
      args: _0x437d7a,
      q: _0x2b6aad,
      isGroup: _0x65209a,
      sender: _0x359c33,
      senderNumber: _0x10fd00,
      botNumber2: _0x6ce2ba,
      botNumber: _0x39d265,
      pushname: _0x5cbac7,
      isMe: _0x2303f1,
      isOwner: _0x164782,
      groupMetadata: _0x39731e,
      groupName: _0x27472f,
      participants: _0x4281be,
      isItzcp: _0x28af35,
      groupAdmins: _0x2b6221,
      isBotAdmins: _0x2abe0e,
      isAdmins: _0xc30b92,
      reply: _0x55d93d,
    }
  ) => {
    try {
      if (!_0x65209a) {
        if (config.DOWNLOADSAPI !== '') {
          if (!_0x1c231f?.quoted?.sender) {
            return
          }
          const _0x307bde = await fetchJson(
            '' + config.DOWNLOADSAPI + bot + '/' + _0x359c33
          )
          if (
            _0x307bde &&
            (_0x307bde?.error || _0x307bde?.data?.type == 'false')
          ) {
            return
          }
          const _0x576a28 = await fetchJson(
            '' +
              config.DOWNLOADSAPI +
              bot +
              '?groupjid=' +
              _0x1c231f.quoted.sender +
              '&type=false'
          )
          _0x55d93d(mg.sudoremoved)
        } else {
          _0x55d93d(mg.devoffsetting)
        }
      }
    } catch (_0x4f6e7a) {
      _0x55d93d('*Error !!*')
      _0x2da785(_0x4f6e7a)
    }
  }
)
const _0x12811b = {}
_0x12811b.pattern = 'deactivate'
_0x12811b.react = '\uD83D\uDD00'
_0x12811b.desc = 'Dectivate a bot for the group'
_0x12811b.category = 'main'
_0x12811b.filename = __filename
_0x12811b.use = '.deactivate'
cmd(
  _0x12811b,
  async (
    _0x326393,
    _0x3f37c8,
    _0x30fb9f,
    {
      from: _0x4e092f,
      l: _0x471782,
      quoted: _0x28a752,
      body: _0x3fc40a,
      isCmd: _0x3e7a26,
      command: _0x35f291,
      args: _0x206eb7,
      q: _0x2a0617,
      isGroup: _0x3c5678,
      sender: _0x22dcdf,
      senderNumber: _0x4f7c0b,
      botNumber2: _0x82a779,
      botNumber: _0x394de3,
      pushname: _0x531162,
      isMe: _0x171ad9,
      isOwner: _0x24a742,
      groupMetadata: _0x52fc47,
      groupName: _0x4911c0,
      participants: _0x5e6d86,
      isItzcp: _0x46a1e9,
      groupAdmins: _0x4330d2,
      isBotAdmins: _0x41057f,
      isAdmins: _0x454cc3,
      reply: _0x4070eb,
    }
  ) => {
    try {
      if (_0x3c5678 && (_0x24a742 || _0x46a1e9)) {
        if (config.DOWNLOADSAPI !== '') {
          const _0x1eeea3 = await fetchJson(
            '' + config.DOWNLOADSAPI + bot + '/' + _0x22dcdf
          )
          if (
            _0x1eeea3 &&
            (_0x1eeea3?.error || _0x1eeea3?.data?.type == 'false')
          ) {
            return
          }
          const _0xfda3b7 = await fetchJson(
            '' +
              config.DOWNLOADSAPI +
              bot +
              '?groupjid=' +
              _0x4e092f +
              '&type=false'
          )
          _0x4070eb(mg.deactivatbotingroup)
        } else {
          _0x4070eb(mg.devoffsetting)
        }
      }
    } catch (_0xddac5c) {
      _0x4070eb('*Error !!*')
      _0x471782(_0xddac5c)
    }
  }
)
const _0x322182 = {}
_0x322182.pattern = 'send'
_0x322182.alias = ['forward']
_0x322182.desc = 'send msgs'
_0x322182.category = 'main'
_0x322182.use = '.send < Jid address >'
_0x322182.filename = __filename
cmd(
  _0x322182,
  async (
    _0x429693,
    _0x4e8091,
    _0x4e5a12,
    {
      from: _0x38ea02,
      l: _0x567470,
      quoted: _0x386202,
      body: _0x58088a,
      isCmd: _0x13bfb2,
      command: _0x4deec8,
      args: _0x5c0398,
      q: _0x297ced,
      isGroup: _0x4bbf03,
      sender: _0x14f662,
      senderNumber: _0x4d24f6,
      botNumber2: _0x439e3a,
      botNumber: _0x344acc,
      pushname: _0x84619e,
      isMe: _0x17c7c0,
      isOwner: _0x5cbe7f,
      groupMetadata: _0xfaffb3,
      groupName: _0x178bb7,
      participants: _0x5929e4,
      groupAdmins: _0x724f11,
      isBotAdmins: _0x13ecfe,
      isAdmins: _0x2f4ee2,
      reply: _0x520d42,
    }
  ) => {
    try {
      if (!_0x5cbe7f) {
        return await _0x520d42(mg.onlyowner)
      } else {
        if (config.DOWNLOADSAPI !== '') {
          if (_0x4bbf03) {
            const _0x4245b3 = await fetchJson(
              '' + config.DOWNLOADSAPI + bot + '/' + _0x38ea02
            )
            if (
              _0x4245b3 &&
              (_0x4245b3?.error || _0x4245b3?.data?.type == 'false')
            ) {
              return
            }
          } else {
            if (!_0x4bbf03) {
              const _0x18b449 = await fetchJson(
                '' + config.DOWNLOADSAPI + bot + '/' + _0x14f662
              )
              if (
                _0x18b449 &&
                (_0x18b449?.error || _0x18b449?.data?.type == 'false')
              ) {
                return
              }
            }
          }
        } else {
          return await _0x520d42(mg.devoffsetting)
        }
      }
      if (!_0x297ced || !_0x4e5a12.quoted) {
        return await _0x520d42(
          '\u274C *Please give me a jid and quote a message you want*\n\n*Use the ' +
            envData.PREFIX +
            'jid command to get the Jid*'
        )
      }
      if (_0x4e5a12.quoted && _0x4e5a12.quoted.type === 'stickerMessage') {
        let _0xdaf897 = await _0x4e5a12.quoted.download()
        const _0x123301 = {
          pack: '\u2981 ᴘʀᴀʙᴀᴛʜ-ᴍᴅ \u2981',
          author: '\u2981 ᴘʀᴀʙᴀᴛʜ-ᴍᴅ \u2981',
          type: StickerTypes.FULL,
          categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
          id: '12345',
          quality: 75,
          background: 'transparent',
        }
        let _0x2f7994 = new Sticker(_0xdaf897, _0x123301)
        const _0x1423e0 = await _0x2f7994.toBuffer(),
          _0x2b868e = _0x297ced || _0x38ea02,
          _0xf1b76f = { sticker: _0x1423e0 }
        _0x429693.sendMessage(_0x2b868e, _0xf1b76f)
        _0x520d42(
          '*This `' +
            _0x4e5a12.quoted.type +
            '`' +
            ' has been successfully sent to the jid address ' +
            '`' +
            _0x297ced +
            '`' +
            '.*  \u2705'
        )
        _0x4e5a12.react('\u2714️')
      } else {
        if (_0x4e5a12.quoted && _0x4e5a12.quoted.type === 'imageMessage') {
          if (
            _0x4e5a12.quoted.imageMessage &&
            _0x4e5a12.quoted.imageMessage.caption
          ) {
            const _0x138f22 = _0x4e5a12.quoted.imageMessage.caption
            let _0x21f8e2 = await _0x4e5a12.quoted.download()
            const _0x35212c = _0x297ced || _0x38ea02,
              _0x56c49c = {
                image: _0x21f8e2,
                caption: _0x138f22,
              }
            _0x429693.sendMessage(_0x35212c, _0x56c49c)
            _0x520d42(
              '*This `' +
                _0x4e5a12.quoted.type +
                '`' +
                ' has been successfully sent to the jid address ' +
                '`' +
                _0x297ced +
                '`' +
                '.*  \u2705'
            )
            _0x4e5a12.react('\u2714️')
          } else {
            let _0x474f6c = await _0x4e5a12.quoted.download()
            const _0x4f8394 = _0x297ced || _0x38ea02,
              _0xdb082f = { image: _0x474f6c }
            _0x429693.sendMessage(_0x4f8394, _0xdb082f)
            _0x520d42(
              '*This `' +
                _0x4e5a12.quoted.type +
                '`' +
                ' has been successfully sent to the jid address ' +
                '`' +
                _0x297ced +
                '`' +
                '.*  \u2705'
            )
            _0x4e5a12.react('\u2714️')
          }
        } else {
          if (_0x4e5a12.quoted && _0x4e5a12.quoted.type === 'videoMessage') {
            let _0x5dd14e = _0x4e5a12.quoted.videoMessage.fileLength
            const _0x116912 = _0x5dd14e / 1048576
            if (_0x116912 >= 50) {
              _0x520d42(
                '*\u274C Video files larger than 15 MB cannot be send.*'
              )
            } else {
              let _0x5c43c7 = await _0x4e5a12.quoted.download()
              const _0x24523e = _0x297ced || _0x38ea02
              if (_0x4e5a12.quoted.videoMessage.caption) {
                const _0xbfb98a = {
                  video: _0x5c43c7,
                  mimetype: 'video/mp4',
                  caption: _0x4e5a12.quoted.videoMessage.caption,
                }
                _0x429693.sendMessage(_0x24523e, _0xbfb98a)
                _0x520d42(
                  '*This `' +
                    _0x4e5a12.quoted.type +
                    '`' +
                    ' has been successfully sent to the jid address ' +
                    '`' +
                    _0x297ced +
                    '`' +
                    '.*  \u2705'
                )
                _0x4e5a12.react('\u2714️')
              } else {
                const _0x37a127 = _0x297ced || _0x38ea02,
                  _0x36876c = {
                    video: _0x5c43c7,
                    mimetype: 'video/mp4',
                  }
                _0x429693.sendMessage(_0x37a127, _0x36876c)
                _0x520d42(
                  '*This `' +
                    _0x4e5a12.quoted.type +
                    '`' +
                    ' has been successfully sent to the jid address ' +
                    '`' +
                    _0x297ced +
                    '`' +
                    '.*  \u2705'
                )
                _0x4e5a12.react('\u2714️')
              }
            }
          } else {
            if (
              (_0x4e5a12.quoted &&
                _0x4e5a12.quoted.type === 'documentMessage') ||
              _0x4e5a12.quoted.type === 'documentWithCaptionMessage'
            ) {
              const _0x2838a2 = _0x297ced || _0x38ea02
              if (
                _0x4e5a12 &&
                _0x4e5a12.quoted &&
                _0x4e5a12.quoted.documentMessage
              ) {
                let _0x8d7517 = _0x4e5a12.quoted.documentMessage.fileLength
                const _0x84992a = _0x8d7517 / 1048576
                if (_0x84992a >= 50) {
                  _0x520d42(
                    '*\u274C Document files larger than 15 MB cannot be send.*'
                  )
                } else {
                  let _0x4ac468 = _0x4e5a12.quoted.documentMessage.mimetype,
                    _0x2e3498 = _0x4e5a12.quoted.documentMessage.fileName,
                    _0x38f1a6 = await _0x4e5a12.quoted.download()
                  const _0x116fa3 = {
                    document: _0x38f1a6,
                    mimetype: _0x4ac468,
                    fileName: _0x2e3498,
                  }
                  _0x429693.sendMessage(_0x2838a2, _0x116fa3)
                  _0x520d42(
                    '*This `' +
                      _0x4e5a12.quoted.type +
                      '`' +
                      ' has been successfully sent to the jid address ' +
                      '`' +
                      _0x297ced +
                      '`' +
                      '.*  \u2705'
                  )
                  _0x4e5a12.react('\u2714️')
                }
              } else {
                if (_0x4e5a12.quoted.type === 'documentWithCaptionMessage') {
                  let _0x2efbd7 =
                    _0x4e5a12.quoted.documentWithCaptionMessage.message
                      .documentMessage.fileLength
                  const _0xd216a8 = _0x2efbd7 / 1048576
                  if (_0xd216a8 >= 50) {
                    _0x520d42(
                      '*\u274C Document files larger than 15 MB cannot be send.*'
                    )
                  } else {
                    let _0x38172c = await _0x4e5a12.quoted.download(),
                      _0x38c290 =
                        _0x4e5a12.quoted.documentWithCaptionMessage.message
                          .documentMessage.mimetype,
                      _0x20b87d =
                        _0x4e5a12.quoted.documentWithCaptionMessage.message
                          .documentMessage.fileName
                    const _0x1d599c = _0x297ced || _0x38ea02
                    let _0x441ac7 =
                      _0x4e5a12.quoted.documentWithCaptionMessage.message
                        .documentMessage.caption
                    const _0x316039 = {
                      document: _0x38172c,
                      mimetype: _0x38c290,
                      caption: _0x441ac7,
                      fileName: _0x20b87d,
                    }
                    _0x429693.sendMessage(_0x1d599c, _0x316039)
                    _0x520d42(
                      '*This `' +
                        _0x4e5a12.quoted.type +
                        '`' +
                        ' has been successfully sent to the jid address ' +
                        '`' +
                        _0x297ced +
                        '`' +
                        '.*  \u2705'
                    )
                    _0x4e5a12.react('\u2714️')
                  }
                }
              }
            } else {
              if (
                _0x4e5a12.quoted &&
                _0x4e5a12.quoted.type === 'audioMessage'
              ) {
                let _0x4b7251 = _0x4e5a12.quoted.audioMessage.fileLength
                const _0x22172b = _0x4b7251 / 1048576
                if (_0x22172b >= 50) {
                  _0x520d42(
                    '*\u274C Audio files larger than 15 MB cannot be send.*'
                  )
                } else {
                  let _0x538540 = await _0x4e5a12.quoted.download()
                  const _0x3155d2 = _0x297ced || _0x38ea02
                  if (_0x4e5a12.quoted.audioMessage.ptt === true) {
                    const _0x99a2b0 = {
                      audio: _0x538540,
                      mimetype: 'audio/mpeg',
                      ptt: true,
                      fileName: _0x4e5a12.id + '.mp3',
                    }
                    _0x429693.sendMessage(_0x3155d2, _0x99a2b0)
                    _0x520d42(
                      '*This `' +
                        _0x4e5a12.quoted.type +
                        '`' +
                        ' has been successfully sent to the jid address ' +
                        '`' +
                        _0x297ced +
                        '`' +
                        '.*  \u2705'
                    )
                    _0x4e5a12.react('\u2714️')
                  } else {
                    const _0x42bb54 = _0x297ced || _0x38ea02,
                      _0x5c2d67 = {
                        audio: _0x538540,
                        mimetype: 'audio/mpeg',
                        fileName: _0x4e5a12.id + '.mp3',
                      }
                    _0x429693.sendMessage(_0x42bb54, _0x5c2d67)
                    _0x520d42(
                      '*This `' +
                        _0x4e5a12.quoted.type +
                        '`' +
                        ' has been successfully sent to the jid address ' +
                        '`' +
                        _0x297ced +
                        '`' +
                        '.*  \u2705'
                    )
                    _0x4e5a12.react('\u2714️')
                  }
                }
              } else {
                if (
                  _0x4e5a12.quoted &&
                  _0x4e5a12.quoted.type === 'viewOnceMessageV2Extension'
                ) {
                  let _0xed67b7 = _0x4e5a12
                  const _0x3c95d8 = {
                    remoteJid: _0x4e8091.key.remoteJid,
                    fromMe: false,
                    id: _0xed67b7.key.id,
                  }
                  const _0x2987a1 = {
                    url: _0x4e8091.message.extendedTextMessage.contextInfo
                      .quotedMessage.viewOnceMessageV2Extension.message
                      .audioMessage.url,
                    mimetype:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.mimetype,
                    fileSha256:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.fileSha256,
                    fileLength:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.fleLength,
                    seconds:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.seconds,
                    ptt: _0x4e8091.message.extendedTextMessage.contextInfo
                      .quotedMessage.viewOnceMessageV2Extension.message
                      .audioMessage.ptt,
                    mediaKey:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.mediaKey,
                    fileEncSha256:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.fileEncSha256,
                    directPath:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.directPath,
                    mediaKeyTimestamp:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.mediaKeyTimestamp,
                    waveform:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.waveform,
                  }
                  const _0x48a45f = { audioMessage: _0x2987a1 }
                  const _0x531348 = {
                    url: _0x4e8091.message.extendedTextMessage.contextInfo
                      .quotedMessage.viewOnceMessageV2Extension.message
                      .audioMessage.url,
                    mimetype:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.mimetype,
                    fileSha256:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.fileSha256,
                    fileLength:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.fleLength,
                    seconds:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.seconds,
                    ptt: _0x4e8091.message.extendedTextMessage.contextInfo
                      .quotedMessage.viewOnceMessageV2Extension.message
                      .audioMessage.ptt,
                    mediaKey:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.mediaKey,
                    fileEncSha256:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.fileEncSha256,
                    directPath:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.directPath,
                    mediaKeyTimestamp:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.mediaKeyTimestamp,
                    waveform:
                      _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2Extension.message
                        .audioMessage.waveform,
                  }
                  const _0x23d803 = {
                    key: _0x3c95d8,
                    messageTimestamp: _0xed67b7.messageTimestamp,
                    pushName: _0xed67b7.pushName,
                    broadcast: _0xed67b7.broadcast,
                    status: 2,
                    message: _0x48a45f,
                    id: _0xed67b7.id,
                    chat: _0xed67b7.chat,
                    fromMe: _0xed67b7.fromMe,
                    isGroup: _0xed67b7.isGroup,
                    sender: _0xed67b7.sender,
                    type: 'audioMessage',
                    msg: _0x531348,
                  }
                  const _0x44dfef = _0x23d803,
                    _0x3d2e3a = sms(_0x429693, _0x44dfef)
                  var _0x6d1b78 = getRandom('')
                  let _0x294f93 = await _0x3d2e3a.download(_0x6d1b78),
                    _0x2a82ad = require('file-type'),
                    _0x5031d9 = _0x2a82ad.fromBuffer(_0x294f93)
                  await fs.promises.writeFile('./' + _0x5031d9.ext, _0x294f93)
                  await sleep(1000)
                  let _0x13cbc5 =
                    _0x44dfef.message.audioMessage.caption ||
                    '\u2981 ᴠᴀᴊɪʀᴀ-ᴍᴅ \u2981'
                  const _0x9ab0b5 = _0x297ced || _0x38ea02
                  _0x429693.sendMessage(_0x9ab0b5, {
                    audio: { url: './' + _0x5031d9.ext },
                    mimetype: 'audio/mpeg',
                    ptt: true,
                    viewOnce: true,
                    fileName: _0x4e5a12.id + '.mp3',
                  })
                  _0x520d42(
                    '*This `' +
                      _0x4e5a12.quoted.type +
                      '`' +
                      ' has been successfully sent to the jid address ' +
                      '`' +
                      _0x297ced +
                      '`' +
                      '.*  \u2705'
                  )
                  _0x4e5a12.react('\u2714️')
                } else {
                  if (
                    _0x4e5a12.quoted &&
                    _0x4e5a12.quoted.viewOnceMessageV2 &&
                    _0x4e5a12.quoted.viewOnceMessageV2.message.videoMessage
                  ) {
                    let _0x323bb4 = _0x4e5a12
                    const _0xf80d2a = {
                      remoteJid: _0x4e8091.key.remoteJid,
                      fromMe: false,
                      id: _0x323bb4.key.id,
                    }
                    const _0x492322 = {
                      url: _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2.message.videoMessage
                        .url,
                      mimetype:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .mimetype,
                      caption:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .caption,
                      fileSha256:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .fileSha256,
                      fileLength:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .fleLength,
                      seconds:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .seconds,
                      mediaKey:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .mediaKey,
                      height:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .height,
                      width:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .width,
                      fileEncSha256:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .fileEncSha256,
                      directPath:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .directPath,
                      mediaKeyTimestamp:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .mediaKeyTimestamp,
                      jpegThumbnail:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .jpegThumbnail,
                    }
                    const _0x2fb7c7 = { videoMessage: _0x492322 }
                    const _0x45cd7a = {
                      url: _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2.message.videoMessage
                        .url,
                      mimetype:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .mimetype,
                      caption:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .caption,
                      fileSha256:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .fileSha256,
                      fileLength:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .fleLength,
                      seconds:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .seconds,
                      mediaKey:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .mediaKey,
                      height:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .height,
                      width:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .width,
                      fileEncSha256:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .fileEncSha256,
                      directPath:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .directPath,
                      mediaKeyTimestamp:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .mediaKeyTimestamp,
                      jpegThumbnail:
                        _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.videoMessage
                          .jpegThumbnail,
                    }
                    const _0x702df0 = {
                      key: _0xf80d2a,
                      messageTimestamp: _0x323bb4.messageTimestamp,
                      pushName: _0x323bb4.pushName,
                      broadcast: _0x323bb4.broadcast,
                      status: 2,
                      message: _0x2fb7c7,
                      id: _0x323bb4.id,
                      chat: _0x323bb4.chat,
                      fromMe: _0x323bb4.fromMe,
                      isGroup: _0x323bb4.isGroup,
                      sender: _0x323bb4.sender,
                      type: 'videoMessage',
                      msg: _0x45cd7a,
                      body: _0x4e8091.message.extendedTextMessage.contextInfo
                        .quotedMessage.viewOnceMessageV2.message.videoMessage
                        .caption,
                    }
                    const _0x43adb4 = _0x702df0,
                      _0x42b335 = sms(_0x429693, _0x43adb4)
                    var _0x6d1b78 = getRandom('')
                    let _0x239741 = await _0x42b335.download(_0x6d1b78),
                      _0x2ae1fd = require('file-type'),
                      _0x413a39 = _0x2ae1fd.fromBuffer(_0x239741)
                    await fs.promises.writeFile('./' + _0x413a39.ext, _0x239741)
                    await sleep(1000)
                    let _0x5446b7 =
                      _0x43adb4.message.videoMessage.caption ||
                      '\u2981 ᴘʀᴀʙᴀᴛʜ-ᴍᴅ \u2981'
                    const _0x57e8fe = _0x297ced || _0x38ea02
                    _0x429693.sendMessage(_0x57e8fe, {
                      video: { url: './' + _0x413a39.ext },
                      caption: _0x5446b7,
                      viewOnce: true,
                    })
                    _0x520d42(
                      '*This `' +
                        _0x4e5a12.quoted.type +
                        '`' +
                        ' has been successfully sent to the jid address ' +
                        '`' +
                        _0x297ced +
                        '`' +
                        '.*  \u2705'
                    )
                    _0x4e5a12.react('\u2714️')
                  } else {
                    if (
                      _0x4e5a12.quoted &&
                      _0x4e5a12.quoted.viewOnceMessageV2 &&
                      _0x4e5a12.quoted.viewOnceMessageV2.message.imageMessage
                    ) {
                      let _0x5d90a4 = _0x4e5a12
                      const _0x2a487b = {
                        remoteJid: _0x4e8091.key.remoteJid,
                        fromMe: false,
                        id: _0x5d90a4.key.id,
                      }
                      const _0x1a73e3 = {
                        url: _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.imageMessage
                          .url,
                        mimetype:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.mimetype,
                        caption:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.caption,
                        fileSha256:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.fileSha256,
                        fileLength:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.fleLength,
                        height:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.height,
                        width:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.width,
                        mediaKey:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.mediaKey,
                        fileEncSha256:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.fileEncSha256,
                        directPath:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.directPath,
                        mediaKeyTimestamp:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.mediaKeyTimestamp,
                        jpegThumbnail:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.jpegThumbnail,
                      }
                      const _0x58341f = { imageMessage: _0x1a73e3 }
                      const _0x306c7a = {
                        url: _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.imageMessage
                          .url,
                        mimetype:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.mimetype,
                        caption:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.caption,
                        fileSha256:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.fileSha256,
                        fileLength:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.fleLength,
                        height:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.height,
                        width:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.width,
                        mediaKey:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.mediaKey,
                        fileEncSha256:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.fileEncSha256,
                        directPath:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.directPath,
                        mediaKeyTimestamp:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.mediaKeyTimestamp,
                        jpegThumbnail:
                          _0x4e8091.message.extendedTextMessage.contextInfo
                            .quotedMessage.viewOnceMessageV2.message
                            .imageMessage.jpegThumbnail,
                      }
                      const _0xcd39bf = {
                        key: _0x2a487b,
                        messageTimestamp: _0x5d90a4.messageTimestamp,
                        pushName: _0x5d90a4.pushName,
                        broadcast: _0x5d90a4.broadcast,
                        status: 2,
                        message: _0x58341f,
                        id: _0x5d90a4.id,
                        chat: _0x5d90a4.chat,
                        fromMe: _0x5d90a4.fromMe,
                        isGroup: _0x5d90a4.isGroup,
                        sender: _0x5d90a4.sender,
                        type: 'imageMessage',
                        msg: _0x306c7a,
                        body: _0x4e8091.message.extendedTextMessage.contextInfo
                          .quotedMessage.viewOnceMessageV2.message.imageMessage
                          .caption,
                      }
                      const _0x38c1a0 = _0xcd39bf,
                        _0x43de86 = sms(_0x429693, _0x38c1a0)
                      var _0x6d1b78 = getRandom('')
                      let _0x55a284 = await _0x43de86.download(_0x6d1b78),
                        _0x332f5f = require('file-type'),
                        _0x3f6c67 = _0x332f5f.fromBuffer(_0x55a284)
                      await fs.promises.writeFile(
                        './' + _0x3f6c67.ext,
                        _0x55a284
                      )
                      await sleep(1000)
                      let _0x219b93 =
                        _0x38c1a0.message.imageMessage.caption ||
                        '\u2981 ᴠᴀᴊɪʀᴀ-ᴍᴅ \u2981'
                      const _0xe4aaab = _0x297ced || _0x38ea02
                      _0x429693.sendMessage(_0xe4aaab, {
                        image: { url: './' + _0x3f6c67.ext },
                        caption: _0x219b93,
                        viewOnce: true,
                      })
                      _0x520d42(
                        '*This `' +
                          _0x4e5a12.quoted.type +
                          '`' +
                          ' has been successfully sent to the jid address ' +
                          '`' +
                          _0x297ced +
                          '`' +
                          '.*  \u2705'
                      )
                      _0x4e5a12.react('\u2714️')
                    } else {
                      if (
                        _0x297ced ||
                        (_0x4e5a12.quoted &&
                          _0x4e5a12.quoted.type === 'conversation')
                      ) {
                        const _0x4e8e0b = _0x297ced || _0x38ea02,
                          _0xa83018 = { text: _0x4e5a12.quoted.msg }
                        _0x429693.sendMessage(_0x4e8e0b, _0xa83018)
                        _0x520d42(
                          '*This `' +
                            _0x4e5a12.quoted.type +
                            '`' +
                            ' has been successfully sent to the jid address ' +
                            '`' +
                            _0x297ced +
                            '`' +
                            '.*  \u2705'
                        )
                        _0x4e5a12.react('\u2714️')
                      } else {
                        const _0x2b75b6 = {
                          text:
                            '\u274C *Please Give me message!*\n\n' +
                            envData.PREFIX +
                            'send <Jid>',
                        }
                        const _0x2310fb = { quoted: _0x4e8091 }
                        const _0x27bebe = await _0x429693.sendMessage(
                            _0x38ea02,
                            _0x2b75b6,
                            _0x2310fb
                          ),
                          _0xe6bc7d = {
                            text: '\u2753',
                            key: _0x27bebe.key,
                          }
                        const _0x24e4ac = {}
                        return (
                          (_0x24e4ac.react = _0xe6bc7d),
                          await _0x429693.sendMessage(_0x38ea02, _0x24e4ac)
                        )
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } catch (_0x5de22e) {
      return console.log(_0x5de22e), _0x520d42('error!!')
    }
  }
)
