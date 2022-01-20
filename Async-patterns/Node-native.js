const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        await writeFile('./content/async-await result.txt', ` This is the appended result using native node option`, { flag:'a'} )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start() 