var fs = require('fs');
var file = fs.readFileSync('/usr/local/bin/lib/node_modules/learnyounode/exercises');
var string = file.toString();
var length = string.split('\n') - 1
console.log(length)
