//class
const EventEmitter = require('events');

//object
const emitter = new EventEmitter();

//registering  a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
    
})

// Raise an event
emitter.emit('messageLogged');