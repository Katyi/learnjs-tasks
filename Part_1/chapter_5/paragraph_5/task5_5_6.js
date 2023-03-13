/* Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.
Во - первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) 
и возвращает результат.Метод должен понимать плюс + и минус -.
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.Он принимает оператор name и функцию 
с двумя аргументами func(a, b), которая описывает его.
- Для этой задачи не нужны скобки или сложные выражения.
- Числа и оператор разделены ровно одним пробелом.
- Не лишним будет добавить обработку ошибок. */

function Calculator () {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  this.calculate = function(str) {
    let subStr = str.split(' ');
    let a = +subStr[0];
    let op = subStr[1];
    let b = +subStr[2];
    
    if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator;
console.log(powerCalc.calculate("12 + 34"));
console.log(powerCalc.calculate("20 - 3"));
console.log(powerCalc.calculate("2 * 3"));
console.log(powerCalc.calculate("12 / 4"));