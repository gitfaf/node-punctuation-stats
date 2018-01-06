# node-punctuation-stats

A small library for getting stats on punctuation in files. - Node Module

## Usage

```javascript

  var PS = require('node-punctuation-stats')
  var p = new PS()
  p.inFile('./index.js')
  [ { symbol: '!', count: 1 },
    { symbol: '?', count: 1 },
    { symbol: '.', count: 9 },
    { symbol: ',', count: 7 },
    { symbol: ';', count: 1 },
    { symbol: ':', count: 3 } ]

```

## Licensce

MIT &copy; 2018 Git Faf
