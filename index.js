const fs = require('fs')
const path = require('path')

class PunctuationStat {
  constructor(defaultPunctuationList = ['!', '?', '.', ',', ';', ':']) {
    this.punctuations = defaultPunctuationList
  }
  inFile(filePath) {
    const data = fs.readFileSync(filePath).toString()
    return this.punctuations.map(p => {
      return {
        symbol: p,
        count: data.split(p).length - 1
      }
    })
  }
}

module.exports = PunctuationStat
