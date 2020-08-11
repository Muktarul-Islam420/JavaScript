const numbers = [3, 4, 5, 6]

//function square(element) {
// return element * element
//}
const square = element => element * element
    //const square = x => x * x
    //const result = numbers.map(function(element) {
    // return element * element
    //})
const result = numbers.map(x => x * x)
const bigger = numbers.filter(x => x < 5)
const isThere = numbers.find(x => x > 5)
console.log(result)
console.log(bigger)
console.log(isThere)