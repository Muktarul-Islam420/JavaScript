function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact * i;

    }
    return fact;
}
var output = factorial(5);
console.log(output);

function factorialRecursive(num) {
    if (num == 1) {
        console.log(num);
    } else {
        console.log(num, num - 1);
        return num * factorialRecursive(num - 1);
    }
}