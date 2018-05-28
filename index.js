
const Hypher = require('hypher')
const norwegian = require('hyphenation.nb-no')

const h = new Hypher(norwegian)

console.log(h.hyphenateText(process.argv[2]))
