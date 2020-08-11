/**get undefined value 
 * 
 */
//if you declared only variable name not declared this value you get undefined value
let Baby;

function sum(num1, num2) {
    console.log(num1 + num2)
    return //if you can't return value you get undefined value
}

function add(num1, num2) {
    console.log(num1, num2)
}
const output = add(10, 12) //if you declare one more parameter but you can only pass only one parameter you get undefined value

const person = { name: "Rasel", age: 25, email: "rasel450@gmail.com", address: "Dhaka,Bangladesh" }
console.log(person.mobile) //if you call a properties which not available in in object you can get undefined value

const fun = undefined //if you set a value undefined