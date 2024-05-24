// Переменная data является глобальной
var data = [
  {name:"Samantha", age:12},
  {name:"Alexis", age:14}
]

var user = {
  //  а это уже локальная
  data: [
      {name:"T. Woods", age:37},
      {name:"P. Mickelson", age:43}
  ],
  showData: function () {
      let randomNum = ((Math.random () * 2 | 0) + 1) - 1; // Любое число с 0 до 1
      console.log (data[randomNum].name + " " + data[randomNum].age);
  }

}

//  Назначаем метод showData от объекта переменной
var showDataVar = user.showData;

showDataVar (); // Samantha 12 (Данные взялись из глобального массива данных, а не из локального в объекте)

//  Тут у нас объект с данными о машинах, у которого нет метода для вывода своих данных в консоль
var cars = {
  data:[
      {name:"Honda Accord", age:14},
      {name:"Tesla Model S", age:2}
  ]

}

//  Мы можем взять метод showData() из объекта user, который мы сделали в предыдущем примере
//  Ниже мы свяжем метод user.showData с объектом cars
cars.showData = user.showData.bind (cars);
cars.showData (); // Honda Accord 14


function greet (gender, age, name) {
  // Если мужчина, то используем Mr., если нет то Ms..
  var salutation = gender === "male" ? "Mr. " : "Ms. ";

  if (age > 25) {
      return "Hello, " + salutation + name + ".";
  }
  else {
      return "Hey, " + name + ".";
  }
}

console.log(greet('female', 30, 'Alex'))

//  В общем, мы передаем null, так как мы не используем this в функции
var greetAnAdultMale = greet.bind (null, "male", 45);

console.log(greetAnAdultMale ("John Hartlove")); // "Hello, Mr. John Hartlove."

var greetAYoungster = greet.bind (null, "", 16);
console.log(greetAYoungster ("Alex")); // "Hey, Alex."
console.log(greetAYoungster ("Emma Waterloo")); // "Hey, Emma Waterloo."

const obj1 = {
  result: 0
}

const obj2 = {
  result: 0
}

function reduceAdd() {
  let result = 0
  for (let i = 0, len = arguments.length; i < len; i++) {
      result += arguments[i]
  }
  console.log(result)
}

reduceAdd.apply(obj1, [1, 2, 3, 4, 5]) // 15
reduceAdd.call(obj2, 1, 2, 3, 4, 5) // 15
