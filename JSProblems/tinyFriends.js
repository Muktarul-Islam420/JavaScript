function tinyFriends(name) {
    var smallName = name[0];
    for (var i = 0; i < name.length; i++) {
        var char = name[i];
    }
    if (char < smallName) {
        smallName = char;
    }
    return smallName;
}
var result = ['you', 'shakib', 'Hridoy', 'me', 'i'];
var output = tinyFriends(result);
console.log(output);




function feetToMile(feet) {
    var Mile = feet / 5280;
    return Mile;
}
var f = 52800;
var output = feetToMile(f);
console.log(output);

function woodCalculator(chair, table, bed) {
    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    var totalNeededWood = woodForChair + woodForTable + woodForBed;
    return totalNeededWood;
}




input = (10, 10, 10);
var output = woodCalculator(10, 10, 10);
console.log(output);