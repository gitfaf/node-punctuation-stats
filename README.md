# node-punctuation-stats

A small library for getting stats on punctuation in files. - Node Module

## Usage

```javascript

  var PS = require('node-punctuation-stats')

  var p = new PS()

  p.inFile('./index.js')
  { punctuations: [ '!', '?', '.', ',', ';', ':' ],
    found:
    [ { symbol: '!', count: 1 },
      { symbol: '?', count: 1 },
      { symbol: '.', count: 17 },
      { symbol: ',', count: 12 },
      { symbol: ';', count: 1 },
      { symbol: ':', count: 8 } ],
    total: 40,
    message: 'Found 40 punctuations of 6 types: ! ? . , ; :'
  }

  const data = fs.readFileSync('./index.js').toString()
  p.inText(data)
  { punctuations: [ '!', '?', '.', ',', ';', ':' ],
    found:
    [ { symbol: '!', count: 1 },
      { symbol: '?', count: 1 },
      { symbol: '.', count: 17 },
      { symbol: ',', count: 12 },
      { symbol: ';', count: 1 },
      { symbol: ':', count: 8 } ],
    total: 40,
    message: 'Found 40 punctuations of 6 types: ! ? . , ; :'
  }

  p.inDir('./', '.js')
  [
    {
      file: 'index.js',
      found:
      {
        punctuations: [Array],
        found: [Array],
        total: 50,
        message: 'Found 50 punctuations of 6 types: ! ? . , ; :'
      }
    }
  ]

```

## Licensce

MIT &copy; 2018 Git Faf
