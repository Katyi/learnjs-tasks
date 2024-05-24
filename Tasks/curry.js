function curry(f) { // curry(f) выполняет каррирование
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2))

function curriedLog(f) {
  return function(a) {
    return function(b) {
      return function(c) {
        return f(a, b, c)
      }
    }
  }
}

function log(date, importance, message) {
  return(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}


console.log(log(new Date(), 'DEBUG', 'some debug'))
let newLog = curriedLog(log)
console.log(newLog(new Date())("DEBUG")("some debug")); // log(a, b, c)