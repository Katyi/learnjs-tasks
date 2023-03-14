/* Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
Каждый вызов должен сохраняться как массив аргументов.
P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS. */

function work(a, b) {
  return a + b;
}

function spy(func) {
  function wrapFunc(...items) {
    wrapFunc.calls.push(items);
    return func.apply(this, items);
  }
  wrapFunc.calls = [];
  return wrapFunc;
}

work = spy(work);
console.log(work.calls);
work(1, 2);
console.log(work.calls);
work(1, 3);
console.log(work.calls);
