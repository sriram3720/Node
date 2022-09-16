const logger = require('./logger');

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messagelogged',function(arg){
    console.log('listener called',arg);
});


ram('helloworld');

