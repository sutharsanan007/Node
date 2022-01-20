const { readFile, writeFile } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf-8')
        const second = await readFilePromise('./content/second.txt', 'utf-8')
        await writeFilePromise('./content/async-await result.txt', `This is async/await result: ${first} ${second}`, 'utf-8')
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()