let x = 0
let y = 1

const log = (p) => {
  if (p) {
    console.log(p)
  }
}

log(x)
log(y)

const logor = (one, two) => {
  if (one || two) {
    console.log('first')
  }
}
const logand = (one, two) => {
  if (one && two) {
    console.log('sss')
  }
}

// logor(x, y)
logand(x, y)

let z = 5

console.log(z++)
console.log(++z)

console.log(null === undefined)
console.log(typeof 1n)
console.log(Number.isFinite("0"))