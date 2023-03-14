/* Вот документ с таблицей и формой.
Как найти?…
1.Таблицу с id="age-table".
2.Все элементы label внутри этой таблицы (их три).
3.Первый td в этой таблице (со словом «Age»).
4.Форму form с именем name="search".
5.Первый input в этой форме.
6.Последний input в этой форме.
Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика. */

//1
let table = document.getElementById('age-table')
//2
table.getElementsByTagName('label')
//3
table.rows[0].cells[0]
//4
let form = document.getElementsByName('search')[0]
//5
form.getElementsByTagName('input')[0]
//6
form.querySelector('input')

let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]
