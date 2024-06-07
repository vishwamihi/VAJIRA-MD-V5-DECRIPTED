const fetch = require('node-fetch'),
  axios = require('axios'),
  config = require('../settings'),
  userName = 'vishwamihi',
  token = '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',
  repoName = 'VAJIRA-MD-V5-DECRIPTED'
async function githubApiRequest(_0x2108e7, _0x405878 = 'GET', _0x5da4d6 = {}) {
  try {
    const _0x25ce9b = {
      method: _0x405878,
      headers: {
        Authorization:
          'Basic ' + Buffer.from(userName + ':' + token).toString('base64'),
        'Content-Type': 'application/json',
      },
    }
    if (_0x405878 === 'GET' || _0x405878 === 'HEAD') {
      delete _0x25ce9b.body
    } else {
      _0x25ce9b.body = JSON.stringify(_0x5da4d6)
    }
    const _0x16d937 = await fetch(_0x2108e7, _0x25ce9b)
    return await _0x16d937.json()
  } catch (_0x483316) {
    throw new Error('GitHub API request failed: ' + _0x483316.message)
  }
}
async function checkRepoAvailability() {
  try {
    const _0x74579d =
        'https://api.github.com/repos/' + userName + '/' + repoName,
      _0xe1b6be = { Authorization: 'Bearer ' + token }
    const _0xdba4fa = _0xe1b6be,
      _0x3fe582 = { headers: _0xdba4fa }
    const _0x28e2a5 = await axios.get(_0x74579d, _0x3fe582)
    return _0x28e2a5.status === 200 ? true : false
  } catch (_0x5adc08) {
    if (_0x5adc08.response && _0x5adc08.response.status === 404) {
      return false
    } else {
      console.error('Error:', _0x5adc08.message)
    }
  }
}
async function githubSearchFile(_0xb03aaf, _0x1edf2f) {
  const _0x1272b3 =
    'https://api.github.com/repos/' +
    userName +
    '/' +
    repoName +
    '/contents/' +
    _0xb03aaf +
    '?ref=main'
  const _0x2c6887 = await githubApiRequest(_0x1272b3)
  return _0x2c6887.find((_0x13000d) => _0x13000d.name === _0x1edf2f)
}
async function githubCreateNewFile(_0x5e7da5, _0x417e8a, _0x22b6ba) {
  const _0x1eb330 =
    'https://api.github.com/repos/' +
    userName +
    '/' +
    repoName +
    '/contents/' +
    _0x5e7da5 +
    '/' +
    _0x417e8a
  const _0x519c2e = {
    message: 'Create new file: ' + _0x417e8a,
    content: Buffer.from(_0x22b6ba).toString('base64'),
  }
  return await githubApiRequest(_0x1eb330, 'PUT', _0x519c2e)
}
async function githubDeleteFile(_0x2bafdc, _0x11c994) {
  const _0x34e5e8 = await githubSearchFile(_0x2bafdc, _0x11c994)
  if (!_0x34e5e8) {
    throw new Error('File not found on GitHub.')
  }
  const _0x3e3f49 =
    'https://api.github.com/repos/' +
    userName +
    '/' +
    repoName +
    '/contents/' +
    _0x2bafdc +
    '/' +
    _0x11c994
  const _0x465276 = {
    message: 'Delete file: ' + _0x11c994,
    sha: _0x34e5e8.sha,
  }
  const _0x4e8f29 = _0x465276
  await githubApiRequest(_0x3e3f49, 'DELETE', _0x4e8f29)
}
async function githubGetFileContent(_0xdd7449, _0x3d00ed) {
  const _0x5c9a7f = await githubSearchFile(_0xdd7449, _0x3d00ed)
  if (!_0x5c9a7f) {
    throw new Error('File not found on GitHub.')
  }
  const _0x1052b7 = _0x5c9a7f.download_url,
    _0x3ace23 = await fetch(_0x1052b7)
  return await _0x3ace23.text()
}
async function githubClearAndWriteFile(_0x9780b, _0x4ef9df, _0x2e53a8) {
  const _0x1e71b8 = await githubSearchFile(_0x9780b, _0x4ef9df)
  if (!_0x1e71b8) {
    await githubCreateNewFile(_0x4ef9df, _0x2e53a8)
  } else {
    const _0x31e5d5 =
        'https://api.github.com/repos/' +
        userName +
        '/' +
        repoName +
        '/contents/' +
        _0x9780b +
        '/' +
        _0x4ef9df,
      _0x4a48bc = {
        message: 'Modify file: ' + _0x4ef9df,
        content: Buffer.from(_0x2e53a8).toString('base64'),
        sha: _0x1e71b8.sha,
      }
    return await githubApiRequest(_0x31e5d5, 'PUT', _0x4a48bc)
  }
}
async function githubDeleteAndUploadFile(_0xba617b, _0x2e8286) {
  await githubDeleteFile(_0xba617b)
  await githubCreateNewFile(_0xba617b, _0x2e8286)
}
async function updateCMDStore(_0x4ebca8, _0x2ff1a1) {
  try {
    let _0x1dd3fc = JSON.parse(
      await githubGetFileContent('Non-Btn', 'data.json')
    )
    const _0x2b32b5 = { _0x4ebca8: _0x2ff1a1 }
    _0x1dd3fc.push(_0x2b32b5)
    var _0x587ad2 = await githubClearAndWriteFile(
      'Non-Btn',
      'data.json',
      JSON.stringify(_0x1dd3fc, null, 2)
    )
    return true
  } catch (_0x88ef7f) {
    return console.log(_0x88ef7f), false
  }
}
async function isbtnID(_0x13e572) {
  try {
    let _0x47cd53 = JSON.parse(
        await githubGetFileContent('Non-Btn', 'data.json')
      ),
      _0x3e7145 = null
    for (const _0x429aa7 of _0x47cd53) {
      if (_0x429aa7[_0x13e572]) {
        _0x3e7145 = _0x429aa7[_0x13e572]
        break
      }
    }
    if (_0x3e7145) {
      return true
    } else {
      return false
    }
  } catch (_0x262fec) {
    return false
  }
}
async function getCMDStore(_0x4badcc) {
  try {
    let _0x240913 = JSON.parse(
        await githubGetFileContent('Non-Btn', 'data.json')
      ),
      _0x1b25af = null
    for (const _0x4ac10e of _0x240913) {
      if (_0x4ac10e[_0x4badcc]) {
        _0x1b25af = _0x4ac10e[_0x4badcc]
        break
      }
    }
    return _0x1b25af
  } catch (_0x42d772) {
    return console.log(_0x42d772), false
  }
}
function getCmdForCmdId(_0x12668c, _0xdd7622) {
  const _0x8138ec = _0x12668c.find((_0xf6ac1c) => _0xf6ac1c.cmdId === _0xdd7622)
  return _0x8138ec ? _0x8138ec.cmd : null
}
const connectdb = async () => {
  let _0x5c990c = await checkRepoAvailability()
  if (!_0x5c990c) {
    const _0x29a472 = {
      name: repoName,
      private: true,
    }
    const _0x25fc83 = { Authorization: 'Bearer ' + token }
    const _0x464fef = { headers: _0x25fc83 }
    const _0x1ef0f9 = await axios.post(
        'https://api.github.com/user/repos',
        _0x29a472,
        _0x464fef
      ),
      _0x44a4b7 = {
        LANG: 'EN',
        ANTI_BAD: [],
        MAX_SIZE: 100,
        ONLY_GROUP: false,
        ANTI_LINK: [],
        ANTI_BOT: [],
        ALIVE: 'default',
        FOOTER: '\xA9ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ',
        LOGO: 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg',
      }
    let _0xf71fed = _0x44a4b7
    await githubCreateNewFile(
      'settings',
      'settings.json',
      JSON.stringify(_0xf71fed)
    )
    await githubCreateNewFile('non_btn', 'data.json', JSON.stringify([]))
    console.log(
      'Database "' + repoName + '" created successfully \uD83D\uDEE2️'
    )
  } else {
    console.log('Database connected \uD83D\uDEE2️')
  }
}
async function input(_0x5ae2d4, _0x1d6a1) {
  let _0x4fbd73 = JSON.parse(
    await githubGetFileContent('settings', 'settings.json')
  )
  if (_0x5ae2d4 == 'LANG') {
    return (
      (_0x4fbd73.LANG = _0x1d6a1),
      (config.LANG = _0x1d6a1),
      await githubClearAndWriteFile(
        'settings',
        'settings.json',
        JSON.stringify(_0x4fbd73)
      )
    )
  } else {
    if (_0x5ae2d4 == 'ANTI_BAD') {
      return (
        (_0x4fbd73.ANTI_BAD = _0x1d6a1),
        (config.ANTI_BAD = _0x1d6a1),
        await githubClearAndWriteFile(
          'settings',
          'settings.json',
          JSON.stringify(_0x4fbd73)
        )
      )
    } else {
      if (_0x5ae2d4 == 'MAX_SIZE') {
        return (
          (_0x4fbd73.MAX_SIZE = _0x1d6a1),
          (config.MAX_SIZE = _0x1d6a1),
          await githubClearAndWriteFile(
            'settings',
            'settings.json',
            JSON.stringify(_0x4fbd73)
          )
        )
      } else {
        if (_0x5ae2d4 == 'ONLY_GROUP') {
          return (
            (_0x4fbd73.ONLY_GROUP = _0x1d6a1),
            (config.ONLY_GROUP = _0x1d6a1),
            await githubClearAndWriteFile(
              'settings',
              'settings.json',
              JSON.stringify(_0x4fbd73)
            )
          )
        } else {
          if (_0x5ae2d4 == 'ANTI_LINK') {
            return (
              (_0x4fbd73.ANTI_LINK = _0x1d6a1),
              (config.ANTI_LINK = _0x1d6a1),
              await githubClearAndWriteFile(
                'settings',
                'settings.json',
                JSON.stringify(_0x4fbd73)
              )
            )
          } else {
            if (_0x5ae2d4 == 'ANTI_BOT') {
              return (
                (_0x4fbd73.ANTI_BOT = _0x1d6a1),
                (config.ANTI_BOT = _0x1d6a1),
                await githubClearAndWriteFile(
                  'settings',
                  'settings.json',
                  JSON.stringify(_0x4fbd73)
                )
              )
            } else {
              if (_0x5ae2d4 == 'ALIVE') {
                return (
                  (_0x4fbd73.ALIVE = _0x1d6a1),
                  (config.ALIVE = _0x1d6a1),
                  await githubClearAndWriteFile(
                    'settings',
                    'settings.json',
                    JSON.stringify(_0x4fbd73)
                  )
                )
              } else {
                if (_0x5ae2d4 == 'FOOTER') {
                  return (
                    (_0x4fbd73.FOOTER = _0x1d6a1),
                    (config.FOOTER = _0x1d6a1),
                    await githubClearAndWriteFile(
                      'settings',
                      'settings.json',
                      JSON.stringify(_0x4fbd73)
                    )
                  )
                } else {
                  if (_0x5ae2d4 == 'LOGO') {
                    return (
                      (_0x4fbd73.LOGO = _0x1d6a1),
                      (config.LOGO = _0x1d6a1),
                      await githubClearAndWriteFile(
                        'settings',
                        'settings.json',
                        JSON.stringify(_0x4fbd73)
                      )
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
}
async function get(_0xc443d1) {
  let _0x54cc42 = JSON.parse(
    await githubGetFileContent('settings', 'settings.json')
  )
  if (_0xc443d1 == 'LANG') {
    return _0x54cc42.LANG
  } else {
    if (_0xc443d1 == 'ANTI_BAD') {
      return _0x54cc42.ANTI_BAD
    } else {
      if (_0xc443d1 == 'MAX_SIZE') {
        return _0x54cc42.MAX_SIZE
      } else {
        if (_0xc443d1 == 'ONLY_GROUP') {
          return _0x54cc42.ONLY_GROUP
        } else {
          if (_0xc443d1 == 'ANTI_LINK') {
            return _0x54cc42.ANTI_LINK
          } else {
            if (_0xc443d1 == 'ANTI_BOT') {
              return _0x54cc42.ANTI_BOT
            } else {
              if (_0xc443d1 == 'ALIVE') {
                return _0x54cc42.ALIVE
              } else {
                if (_0xc443d1 == 'FOOTER') {
                  return _0x54cc42.FOOTER
                } else {
                  if (_0xc443d1 == 'LOGO') {
                    return _0x54cc42.LOGO
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
async function updb() {
  let _0x38ef6d = JSON.parse(
    await githubGetFileContent('settings', 'settings.json')
  )
  config.LANG = _0x38ef6d.LANG
  config.MAX_SIZE = Number(_0x38ef6d.MAX_SIZE)
  config.ALIVE = _0x38ef6d.ALIVE
  config.FOOTER = _0x38ef6d.FOOTER
  config.LOGO = _0x38ef6d.LOGO
  config.ANTI_BAD = _0x38ef6d.ANTI_BAD
  config.ONLY_GROUP = _0x38ef6d.ONLY_GROUP
  config.ANTI_LINK = _0x38ef6d.ANTI_LINK
  config.ANTI_BOT = _0x38ef6d.ANTI_BOT
  console.log('Database writed \u2705')
}
async function updfb() {
  const _0x10cbbd = {
    LANG: 'EN',
    ANTI_BAD: [],
    MAX_SIZE: 100,
    ONLY_GROUP: false,
    ANTI_LINK: [],
    ANTI_BOT: [],
    ALIVE: 'default',
    FOOTER: '\xA9ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ',
    LOGO: 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg',
  }
  let _0x17f9f8 = _0x10cbbd
  await githubClearAndWriteFile(
    'settings',
    'settings.json',
    JSON.stringify(_0x17f9f8)
  )
  config.LANG = 'EN'
  config.MAX_SIZE = 100
  config.ALIVE = 'default'
  config.FOOTER = '\xA9ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ'
  config.LOGO = 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg'
  config.ANTI_BAD = []
  config.ONLY_GROUP = false
  config.ANTI_LINK = []
  config.ANTI_BOT = []
  console.log('Database writed \u2705')
}
const _0x236c1f = {}
_0x236c1f.updateCMDStore = updateCMDStore
_0x236c1f.isbtnID = isbtnID
_0x236c1f.getCMDStore = getCMDStore
_0x236c1f.getCmdForCmdId = getCmdForCmdId
_0x236c1f.connectdb = connectdb
_0x236c1f.input = input
_0x236c1f.get = get
_0x236c1f.updb = updb
_0x236c1f.updfb = updfb
module.exports = _0x236c1f
