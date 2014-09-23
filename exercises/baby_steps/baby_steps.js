var result = 0

// console.log(process.argv)
// process.argv is an array, first element is the node, second is the path to the file
for (var i = 2; i < process.argv.length; i++){
  var a = parseInt(process.argv[i]);
  result += a;
}
console.log(result);
