// default 64kb
// last buffer - remainder
// const stream = createReadStream('./content/big.txt',{highWaterMark:90000})
// const stream = createReadStream('./content/big.txt',{highWaterMark:90000}, { encoding: 'utf-8' })
const { createReadStream } = require('fs')

// To control buffersize we use highwatermark
const stream = createReadStream('./content/big.txt',{highWaterMark:90000})

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', (err) => console.log(err))