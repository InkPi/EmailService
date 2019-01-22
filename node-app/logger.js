const EventEmitter = require('events'); //class //to use: need to create instance of this class
//const emitter = new EventEmitter(); //No longer needed, not using it anywhere in this file

console.log(__filename);
console.log(__dirname);
//remote logging service for login messages
//website out there provide login as a service
//give url + send http req to that url
//log messages in cloud

//send http req to this end point
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter { //every class uppercase //extends(es6): have all capabilities/functionality of EventEmitter //to parent or baseClass
  log(message) { //when define func in class no need funcion keyword //refer as method now
    //send an htttp req
    console.log(message);

    //Raised an Event
    this.emit('messageLogged', { id : 1, url:'http://'}); //method to raise an event //signalling an event has happened
    //after extending change from emitter.emit
    //inside name of event
    //after can add event arguments
    //if want to send multiple values about event, better practice to encapulate those values inside a obj
  }
}

//should be able to call from app module
//module.exports.log = log;
//module.exports = log //export to just a func not a obj anymore
//module.exports.url = url //export can change exports.url to exports.endpoint
//2nd url implementation detail
module.exports = Logger;

//only want to export subset of vars and funcs to outside; not all = easy to use
//we kept url private

//logger module emits or signal an event
