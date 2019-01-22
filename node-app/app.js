const EventEmitter = require('events'); //class //to use: need to create instance of this class
//const emitter = new EventEmitter();//an obj //instance //using this one

//function in node not browser
//better store in const = prevent override
const Logger = require('./logger') //1 arg; name or pass of target module
//assumes a js file if not stated
const logger = new Logger(); //instance of custom class defined that extend EventEmitter

const path = require('path');

const os = require('os');

const fs = require('fs');

const http = require('http');
//create a web server
const server = http.createServer(); //have capabilities of eventEmitter
server.listen(3000);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

var pathObj = path.parse(__filename);

//when raised event this listener^ called

//order important: when called emit method, emitter it raised over all the other and calls them synchronously

//Raise: logging + (data: message) -message gonna log

console.log(pathObj);

console.log('Total Memory1: ' + totalMemory); //concatenation
//Simplify it by Template string
//Available in more recent JS: ES6 / ES2015 : ECMAScript 6- define new features added to JS
//diff browsers implement diff set of these features
//v8 inside node up to date + implement a lot of new features of JS deined in ECMAScript
console.log(`TotalMemory2: ${totalMemory}`); //cannot get these two info before using JS
console.log(`FreeMemory2: ${freeMemory}`); //before only by window/document obj

// function sayHello(name) {
//   console.log('Hello ' + name)
// };
//
// sayHello('Lohan'); //global

//Register a listener
logger.on('messageLogged', (arg) => { //some use arg, e, event, eventArg for placeholder //when u raise this message log event, want to execute inside code
  console.log('Listener called', arg); //arg for url down below
}); //on or addListener same, often on more
//2 args: name of event, callback func or Listener
//func called when even raised

//console.log(logger)
//{ log: [Function: log] }
//log.log('message'); //console message
logger.log('message'); //after change to func exported

// const files = fs.readdirSync('./'); //return all files and folders in this folder location
// console.log(`files: ${files}`);


fs.readdir('./', function(err, files){
  if(err) console.log('Error', err);
  else console.log('Result', files)
})
//err errors and then result (files), for string array
//not how properly handle errors

//working with 2 diff event emitters
//using two event emitters, one in each file to handle an event so each emitter defined separately
//instead create class with all abilities of emitter w additional capabilities
