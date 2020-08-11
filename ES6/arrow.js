//function doubleIt(num) {
// return num * 2
//}
//single Parameter
const doubleIt = num => num * 2
const number = doubleIt(40)
console.log(number)

//double Parameter
const add = (x, y) => x + y;
const output = add(10, 40)
console.log(output)

//none Parameter
const give5 = () => 5
const result = give5()
console.log(result)
    //multiline function
const doMath = (x, y) => {
    const sum = x + y
    const diff = x - y
    const result = sum + diff
    return result
}
const output3 = doMath(20, 10)
console.log(output3)