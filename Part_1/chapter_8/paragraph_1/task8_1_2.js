/* У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
 */

let hamster = {
  stomach: [],
  eat(food) {
    // this.stomach.push(food); 
    this.stomach = [food]; // исправленный вариант
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

speedy.eat("apple");
console.log( speedy.stomach );
console.log( lazy.stomach );
