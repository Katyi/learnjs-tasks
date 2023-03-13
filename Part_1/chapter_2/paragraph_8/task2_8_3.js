// Какой результат будет у выражений ниже?

let a = "" + 1 + 0; // '10'
let b = "" - 1 + 0; // -1
let c = true + false; // 1
let d = 6 / "3"; // 2
let e = "2" * "3"; // 6
let g = 4 + 5 + "px"; // '9px'
let i = "$" + 4 + 5; //'$45'
let k = "4" - 2; // 2
let l = "4px" - 2; // NaN
let m = "  -9  " + 5; // "  -9  5"
let n = "  -9  " - 5; // 14
let o = null + 1; // 1
let p = undefined + 1; // NaN
let s = " \t \n" - 2; // -2