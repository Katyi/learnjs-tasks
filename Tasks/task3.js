/* Сформировать все необходимые классы и методы, которые позволят сделать калькулятор корзины, работающей со скидками.
Есть товар:
- id
- название
- цена
- размер скидки, по умолчанию


Пример:
Мяч
1
1000 рублей
10% скидка по умолчанию
или
футболка
2
2000 рублей
25%
К товару могут быть прикреплены сезонные скидки.
- id
- название
- дата начала действия (без года)
- дата завершения действия (без года)
- размер скидки

Пример:
1
весенняя распродажа
1 апреля -1 июля
20%
или
2
новогодние скидки
10 декабря - 20 мая
30%
К одному и тому же товару могут быть прикреплены несколько скидок.
Если обе скидки прикреплены к мячу, то мяч будет стоить
1000 - 10% = 900
900 - 20% = 720
720 - 30% = 504
последовательность применения скидок не важна.
И есть еще другой тип скидок. Зависящий от общего размера корзины.
- id
- минимальная сумма заказа
- размер скидки
например, 
1
1000 рублей 
5%
или
2
5000 рублей 6%
Из этого набора применяется максимум одна (наибольшая из доступных)
Если общий заказ сделан на сумму 700 рублей (после скидок относящихся к отдельным товарам), то в примере не будет ни одной скидки из последнего раздела
Если на 2700, то применится скидка 5% из последнего раздела
Если 8000, то 6% из последнего раздела.
Итак, вы получается подготовили кассы, которые отвечают за товары и скидки. И нужен пример, того как его протестировать.

Для этого разумно иметь тестовый набор данных в json
items: [
  {id: 1,
  name: 'мяч'
  price: 1000
  discount: '10%'
  },
  {id: 2,
  name: 'футболка'
  price: 2000
  discount: '25%'
  }
],
discounts:[
  {
    id: 1,
    name: 'весенняя распродажа',
    discount: 20%,
  },
  {
    id: 2,
    name: 'новогодние скидки',
    discount: 20%,
  }
],
totalDiscounts: [
  {
   id: 1,
   minPrice: 1000,
   discount: '5%'
  },
  {
   id: 1,
   minPrice: 5000,
   discount: '6%'
  },
]
purchases: [ // сколько каких товаров покупает клиент
  {
    item: 1,
    amount: 10
  },
  {
    item: 2,
    amount: 5
  }  
],
itemsDiscounts: [ // на какие товары какие скидки должны действовать
  {
    itemId: 1,
    discountId: 1
  },
  {
    itemId: 2,
    discountId: 1
  },
  {
    itemId: 2,
    discountId: 2
  }
]
Более аккуратно наполните самостоятельно, но суть тестовых данных должна быть понятна.
Задача - обработать данные из json и вывести информацию по корзине в КОНСОЛЬ.
Должно получиться примерно следующее:
Мяч - 10 штук, 5 040 рублей (10 000 рублей без скидки);
Футболка - 5 штук,  5 250 рублей (10 000 рублей без скидки)
Итого: 10 290 (20 000 рублей без скидки)
Итого со скидкой: 9 672 рубля 60 копеек */


class Cart {
  constructor(inputs) {
    this.items = this.getItems(inputs);
    this.totalDiscounts = inputs.totalDiscounts;
    this.total = 0; 
    this.totalAfterDiscounts = 0;
    this.totalAfterAll = 0;
  }

  getItems(obj){
    let itemsArr = [];
    obj.items.forEach(element => {
      let item = {};
      item.id = element.id;
      item.name = element.name;
      item.price = element.price;
      item.discountedPrice = element.price;
      item.quantity = obj.purchases.find(el=>el.item===element.id).amount;
      item.discounts =[];
      item.discounts.push(element.discount);
      obj.itemsDiscounts.forEach((el)=>{
        if (el.itemId===element.id) {
          let discount =  obj.discounts.find(e=>e.id===el.discountId);
          item.discounts.push(discount.discount)
        }
      })
      itemsArr.push(item);
    })
    return itemsArr;
  }

  cons() {
    let text ='';
    this.items.forEach(el => {
      text += `${el.name} ${el.quantity} штук ${el.quantity*el.discountedPrice} (${el.quantity*el.price} без скидоньки) \n`
    })
    text += `Итого: ${this.totalAfterDiscounts} (${this.total} рублей без скидки)\n`
    text +=`Итого со скидкой: ${this.totalAfterAll} рублей`
    console.log(text)
  }

  calcDisounts() {
    this.items.forEach((el) => {
      let discountedPrice  = el.discounts.reduce((acc,item) => {
        return  acc - Number(item.slice(0,-1))*acc/100
      }, el.price);
      el.discountedPrice = discountedPrice;
    })
  }

  calcTotal() {
    let total = this.items.reduce((acc,item) => {
      return acc+(item.price*item.quantity);
    }, 0 );
    this.total = total;
    let totalAfterDiscounts = this.items.reduce((acc,item) => {
      return acc+(item.discountedPrice*item.quantity);
    }, 0);
    this.totalAfterDiscounts = totalAfterDiscounts;
    let maxDiscount = 1;
    this.totalDiscounts.forEach((el => {
      if(total>el.minPrice){
        maxDiscount = Number(el.discount.slice(0,-1))
      }
    }))
    this.totalAfterAll = totalAfterDiscounts - total*maxDiscount/100
  }
};


const inputs =  {items: [
  {id: 1,
  name: 'мяч',
  price: 1000,
  discount: '10%',
  },
  {id: 2,
  name: 'футболка',
  price: 2000,
  discount: '25%'
  }
],
discounts:[
  {
    id: 1,
    name: 'весенняя распродажа',
    discount: '20%',
  },
  {
    id: 2,
    name: 'новогодние скидки',
    discount: '20%',
  }
],
totalDiscounts: [
  {
   id: 1,
   minPrice: 1000,
   discount: '5%'
  },
  {
   id: 1,
   minPrice: 5000,
   discount: '6%'
  },
],
purchases: [ // сколько каких товаров покупает клиент
  {
    item: 1,
    amount: 10
  },
  {
    item: 2,
    amount: 5
  }  
],
itemsDiscounts: [ // на какие товары какие скидки должны действовать
  {
    itemId: 1,
    discountId: 1
  },
  {
    itemId: 2,
    discountId: 1
  },
  {
    itemId: 2,
    discountId: 2
  }
]
}

let cart = new Cart(inputs);
cart.calcDisounts();
cart.calcTotal()
cart.cons();