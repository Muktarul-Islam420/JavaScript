function ReverseString(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var spech = "hea hea hea,Hello janu listen to  me,You are my heart jano ta ki";
var tumi = ReverseString(spech);
console.log(tumi);