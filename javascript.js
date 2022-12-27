//2022-11-30 uzduotys
// 1 uzduotis
const aktoriusA = 'Ryan Reynolds'
const aktoriusB = 'Sylvester Stallone'
if (aktoriusA.length > aktoriusB.length) {
    console.log(aktoriusA)
} else {
    console.log(aktoriusB)
}

// 2 uzduotis
const vardas = 'Simas'
const pavarde = 'Strička'
const gimimoMetai = 1988
const metai = 2022
console.log('Aš esu', vardas, pavarde, '. Man yra', metai - gimimoMetai, 'metai(ų).')

// 3 uzduotis
const aktoriusA = 'Ryan Reynolds'
const aktoriusB = 'Sylvester Stallone'

// 4 uzduotis
const stringas = 'Once upon a time in hollywood'
console.log(stringas.replaceAll('O', '*'))
console.log(stringas.replaceAll('o', '*'))

// 5 uzduotis

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let x = rand(0, 2);
let y = rand(0, 2);
let z = rand(0, 2);
let w = rand(0, 2);

console.log(x)
console.log(y)
