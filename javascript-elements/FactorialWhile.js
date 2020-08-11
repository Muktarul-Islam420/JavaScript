function Factorial(n) {
    var i = 1;
    var factorial = 1;
    while (i <= n) {
        factorial = factorial * i;
        console.log(i, factorial);
        i++;
    }
    return factorial;
}
var result = Factorial(20);
console.log(result);