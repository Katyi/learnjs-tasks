/* Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, 
передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются. */

function f(a) {
  console.log(a)
}

function throttle(func, ms) {
  let throttle = false,
    savedargs,
    savedthis;

  function wrapFunc() {
    if (throttle) {
      savedargs = arguments;
      savedthis = this;
      return;
    }
    func.apply(this, arguments);
    throttle = true;
    setTimeout(function() {
      throttle = false;
      if (savedargs) {
        wrapFunc.apply(savedthis, savedargs);
        savedargs = savedthis = null;
      }
    }, ms);
  }
  return wrapFunc;
}

let f1000 = throttle(f, 1000);
f1000(1);
f1000(2);
f1000(3);

