var numbers = [10, 50, 30, 70, 80, 100, 12, 15, 16];

function getTotalArray(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var total = numbers[i];
        sum = sum + total;
    }
    return sum;
}
var All = getTotalArray(numbers);
console.log(All);