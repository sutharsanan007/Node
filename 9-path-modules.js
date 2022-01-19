const path = require('path')

console.log(path.sep)

// To show the path with the platform specefic separator
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

// To know the base name of the file/folder
const base = path.basename(filePath)
console.log(base)

// To know the absolute path to the file
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)