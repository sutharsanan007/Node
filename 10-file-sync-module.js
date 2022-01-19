// We are accessing the methods directly instead of storing it separate
// Variable and then accessing --> const fs = require('fs)
// Then fs.readFileSync and fs.writeFileSync

// To read from a file
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

// To write to a file
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`
)

const result = readFileSync('./content/result-sync.txt', 'utf-8')

console.log(result)

// To append to a file
writeFileSync(
    './content/result-sync.txt', 
    ` Appended result: ${first}, ${second}`,
    { flag: 'a' }
)

const appendResult = readFileSync('./content/result-sync.txt', 'utf-8')

console.log(appendResult)