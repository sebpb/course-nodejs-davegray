// How nodejs differs from vanilla JS

// The console is the terminal window
// Global object instead of window object
// Has Common Core modules
// Has CommonJS modules instead of ES6 modules

console.log('hello world')

const os = require('os')
const path = require('path')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
console.log(path)