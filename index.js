const fs = require('fs')
const path = require('path')

class PunctuationStat {
  constructor(defaultPunctuationList = ['!', '?', '.', ',', ';', ':']) {
    this.punctuations = defaultPunctuationList
  }
  inFile(filePath) {
    const data = fs.readFileSync(filePath).toString()
    const found = this.punctuations.map(p => {
      return {
        symbol: p,
        count: data.split(p).length - 1
      }
    })
    const total = found.reduce((acc, curr) => acc + curr.count, 0)
    return {
      punctuations: this.punctuations,
      found: found,
      total: total,
      message: `Found ${total} punctuations of ${this.punctuations.length} types: ${this.punctuations.join(' ')}`
    }
  }
}

module.exports = PunctuationStat
