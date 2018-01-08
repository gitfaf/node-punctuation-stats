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
      { symbol: '.', count: 16 },
      { symbol: ',', count: 12 },
      { symbol: ';', count: 1 },
      { symbol: ':', count: 8 } ],
    total: 39,
    message: 'Found 39 punctuations of 6 types: ! ? . , ; :'
  }

```

## Licensce

MIT &copy; 2018 Git Faf
