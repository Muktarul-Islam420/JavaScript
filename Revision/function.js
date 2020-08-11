function even_All(num) {
    for (var i = 0; i < num.length; i++) {
        var numbers = num[i];
        if (numbers % 2 == 0) {
            console.log(numbers, ":this is even number");
        } else {
            console.log(numbers * 2, ":this is odd number");
        }
    }
}
var num = [10, 22, 23, 25, 28, 40, 55, 80, 95, 100];
even_All(num);