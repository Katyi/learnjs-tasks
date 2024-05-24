const carDetails = {
  name: 'Ford Mustang',
  yearBought: 2005,
  getName() {
      return this.name
  },
  isRegistered: true
}

console.log(carDetails.getName()) // Ford Mustang

var name = 'Ford Ranger'
var getCarName = carDetails.getName

console.log(getCarName()) // Ford Ranger??? undefined


console.log(getCarName.apply(carDetails)) // Ford Mustang
console.log(getCarName.call(carDetails)) // Ford Mustang

function iHateThis() {
  console.log(this)
}
// iHateThis() // window

// (function( ) { }( ))

(function( ) {
   {
      // утилиты
     console.log(6);
  }
}) ();

(( ) => {console.log(7); })()


const details = {
  message: 'Hello World!'
}

function getMessage() {
  console.log(this.message)
}
getMessage.apply(details) // Hello World!

const person = {
  name: 'Marko Polo'
}

function greeting(greetingMessage) {
  console.log(`${greetingMessage} ${this.name}`)
}
greeting.apply(person, ['Hello']) // Hello Marko Polo


const details1 = {
  message: 'Hello World!'
};

function getMessage1() {
  console.log(this.message);
}
getMessage1.call(details1); // Hello World!

const person1 = {
  name: 'Marko Polo'
};

function greeting1(greetingMessage) {
  console.log(`${greetingMessage} ${this.name}`);
}
greeting1.call(person1, 'Hello'); // Hello Marko Polo


const user = {
  name: "Alex",
  age: 23 
}

function getUser (greeting) {
  console.log(`${greeting} my name is ${this.name}`);
}

let greeting3 = 'Hello,';

getUser.apply(user, [greeting3])

getUser.call(user, greeting3)

const getUser_1 = getUser.bind(user)
getUser_1(greeting3)
