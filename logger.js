
const EventEmitter = require('events');

const emitter = new EventEmitter();

var url = 'https://api.github.com';

class Vlog extends EventEmitter{
         ram(message){
              console.log(message);
      
              this.emit('messagelogged',{id:1,url:'https'});
       }
      




}



module.exports = Vlog;
module.exports.url=url;

