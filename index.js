const request = require('request')
const c = require('colors')
const str = require('randomstring')
const fs = require('fs')

//VARIABLES//
var token = 'IGNORE ME'

//MAIN//
console.log(c.red(`
██████╗░░░███╗░░░██████╗░█████╗░░█████╗░██████╗░██████╗░  ████████╗░█████╗░░█████╗░██╗░░░░░██████╗░░█████╗░██╗░░██╗
██╔══██╗░████║░░██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗  ╚══██╔══╝██╔══██╗██╔══██╗██║░░░░░██╔══██╗██╔══██╗╚██╗██╔╝
██║░░██║██╔██║░░╚█████╗░██║░░╚═╝██║░░██║██████╔╝██║░░██║  ░░░██║░░░██║░░██║██║░░██║██║░░░░░██████╦╝██║░░██║░╚███╔╝░
██║░░██║╚═╝██║░░░╚═══██╗██║░░██╗██║░░██║██╔══██╗██║░░██║  ░░░██║░░░██║░░██║██║░░██║██║░░░░░██╔══██╗██║░░██║░██╔██╗░
██████╔╝███████╗██████╔╝╚█████╔╝╚█████╔╝██║░░██║██████╔╝  ░░░██║░░░╚█████╔╝╚█████╔╝███████╗██████╦╝╚█████╔╝██╔╝╚██╗
╚═════╝░╚══════╝╚═════╝░░╚════╝░░╚════╝░╚═╝░░╚═╝╚═════╝░  ░░░╚═╝░░░░╚════╝░░╚════╝░╚══════╝╚═════╝░░╚════╝░╚═╝░░╚═╝`))
console.log('')
console.log(c.brightGreen.bold('Version 1.0'))
console.log('')
console.log(`Made by ${c.yellow('! " 𝔅𝔲𝔯𝔰𝔱𝔢𝔡#4712')}`)
console.log('')
console.log(`Follow us on ${c.brightGreen('https://github.com/ZumoDev')}!`)

console.log(`Please select an option:

[${c.blue('1')}] Nitro Generator With Checker

[${c.blue('2')}] Token Generator

[${c.blue('3')}] API Request`)

var choice = prompt('Your choice ')

//SCRIPTS//

if (choice > 5) {
  console.log('Invalid option.')
}

if (choice == 1) {
  console.log(`Please select a Discord Nitro type:
    
  [${c.blue('1')}] ${c.brightCyan('Classic')} Nitro
    
  [${c.blue('2')}] ${c.magenta('Boost')} Nitro`)
  let nitro = prompt('Your choice ')
  const nitroAmount = prompt('Please type the amount of codes to generate and check')

function genNitro() {
  for (let i = 0;i < nitroAmount;i++) {
    var codeType
    let options = {
      url: 'https://discord.com/api/v8/entitlements/nitro-gift/redeem?code=' + codeType,
      method: 'GET'
    }
    request(options, (err, res, body) => {
      if (err) {return err}

      if (nitro == 1) {
        codeType = str.generate(16)
      } else if (nitro == 2) {
        codeType = str.generate(24)
      }

      if (res.statusCode == 201 || res.statusCode == 204) {
        return c.green('VALID CODE || https://discord.gift/' + codeType)
        fs.writeFileSync('valid.txt', 'https://discord.gift/' + codeType + '\n', {encoding: "utf8", flag: "a+", mode: 0o0666})
      } else if (res.statusCode == 404) {
        console.log(c.red('Invalid || https://discord.gift/' + codeType))
        fs.writeFileSync('codes.txt', 'https://discord.gift/' + codeType + '\n', {encoding: "utf8", flag: "a+", mode: 0o0666})
      } else if (res.statusCode == 401) {
        return new TypeError('Please provide a user token to continue.')
      } else if (res.statusCode == 429) {
        console.log(c.yellow('Rate limit has been reached. Stoping code.'))
        throw ''
      }
      else {
        return new ReferenceError('The code cant contact the Discord API. Please try again later.')
      }
      })
  }
}
genNitro()
}

else if (choice == 2) {
  console.log(c.red('NOTE: Tokens are not checked because Discord does not provide an API for that.'))
  let tokenType = prompt('2FA Accounts tokens start with "mfa.". Would you like to generate 2FA account tokens? (yes/no)')
  let amount = prompt('Please type the amount of tokens to generate ')
  if (tokenType == 'no') {
    const pattern = prompt('If you have a token patter (for example: DOzINjN4mzgxDmAZnCJ1Nzcg.) please type it here. If not, type "none".')
  
    if (pattern == 'none') {
      for (let i = 0;i < amount;i++) {
      let token = str.generate({lenght: 56, charset: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKMNLOPQRSTUVWXYZ123456789.-_'})
        console.log(c.yellow('GENERATED || ' + token))
        fs.writeFileSync('tokens.txt', 'GENERATED ' + '|| ' + token + '\n', {encoding: "utf8", flag: "a+", mode: 0o0666})
      }
    } else if (pattern != 'none') {

      for (let i = 0;i < amount;i++) {
        let token = pattern + str.generate({lenght: 56 - pattern.lenght, charset: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKMNLOPQRSTUVWXYZ123456789.-_'})
        console.log(c.yellow('GENERATED || ' + token))
        fs.writeFileSync('tokens.txt', 'GENERATED ||' + token + '\n', {encoding: "utf8", flag: "a+", mode: 0o0666})
      }
    }
  } else if (tokenType == 'yes') {
    for (let i = 0;i < amount;i++) {
      let token = 'mfa.' + str.generate({lenght: 56, charset: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKMNLOPQRSTUVWXYZ123456789.-_'})
      console.log(c.yellow('GENERATED || ' + token))
      fs.writeFileSync('2fa_tokens.txt', 'GENERATED || ' + token + '\n', {encoding: "utf8", flag: "a+", mode: 0o0666})
    }
  }
}

else if (choice == 3) {
  let link = prompt('Please type the URL of the API you want to make a request to ')
  let mthd = prompt('Please provide the method your want to use')
  
  const options = {
    url: link,
    method: mthd
  }

  request(options, (err, res, body) => {
    if (err) throw err
    else {console.log('No error found!')}
    console.log(res.statusCode)
    console.log(body)
  })
}

else if (choice == 4) {}
