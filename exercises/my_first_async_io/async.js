var fs = require('fs');

fs.readFile('/usr/local/bin/lib/node_modules/learnyounode/exercises/my_first_async_io/async.js', function (err, contents) {
  if (err){
    console.log("error!")
  }
  var content = contents
  var string = contents.toString();
  var len = string.split('\n').length - 1
  console.log(len);

});