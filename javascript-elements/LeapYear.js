function LeapYear(year) {
    let reminder = year % 4;
    if (reminder == 0) {
        console.log("YOur year is Leap Year");
    } else {
        console.log("Not Leap year");
    }

}
LeapYear(2020);
LeapYear(2008);
LeapYear(2020);
LeapYear(2021);

/*
function leapYear(year) {
    var result;
    if (year / 400) {
        result = true
    } else if (year / 100) {
        result = false
    } else if (year / 4) {
        result = true
    } else {
        result = false
    }
    return result;
}

console.log(leapYear(2020));
console.log(leapYear(2008));
console.log(leapYear(9));
*/