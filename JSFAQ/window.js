var name = 'kuddus'

function add(num1, num2) {
    result = num1 + num2
    console.log("name inside", name)

    function double(num) {
        return num * 2
    }
    var total = double(result)
    return total
}
//console.log('result outside', result)
var sum = add(20, 20)
console.log('result outside', result)