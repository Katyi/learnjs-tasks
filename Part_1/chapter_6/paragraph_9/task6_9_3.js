/* Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. 
Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms. */

function debounce(f, ms) {
  let ignore = false;
  return function() {
    if (ignore) return;
    f.apply(this, arguments);
    ignore = true;
    setTimeout(() => ignore = false, ms);
  };
}

let f = debounce(console.log, 1000);
f(1);
f(2);
setTimeout( () => f(3), 100);
setTimeout( () => f(4), 1100);
setTimeout( () => f(5), 1500);