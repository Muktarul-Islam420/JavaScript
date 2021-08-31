// type 1
function add (num1, num2) {
    const sum = num1 + num2;
    return sum;
}

// type 2 function declaration
const  add = function (num){
    const mul = num * num
    return mul;
}

// type 3 arrow function
const add = () => num * num;
// type 3 arrow function
const add = num => num *2 ;
// type 3 arrow function
const add = (num1, num2) => num1 + num2;
// type 3 arrow function
const add = (num1, num2) => {
    const sum = num1 + num2;
    const abs = num2 - num1;
    const result = abs * sum
    return result;
}

// console.log(add(1, 2));