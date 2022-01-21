const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
    console.log(`We can listen to the same event more than one time`)
})


customEmitter.emit('response', 'john', 34)
