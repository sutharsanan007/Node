const { readFile, writeFile } = require('fs')

// Have to use utf-8 otherwise we will get a buffer values
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', 
        `Here is the result: ${first}, ${second}`, (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const asyncResult = result       
        }
        )
    })
})

