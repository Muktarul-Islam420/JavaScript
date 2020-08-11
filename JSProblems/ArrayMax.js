var marks = [10, 40, 30, 50, 20, 68, 90, 100, 80, 70];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}

console.log("Highest Marks= ", max);