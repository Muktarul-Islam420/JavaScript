/** 
function brickCalculaltor(floor) {
    var need = 1;

    if (floor => 10) {
        for (var i = 1; i < floor; i++) {
            var total = floor[i];
            var need = floor * 10 * 1000;
        }
    } else if (floor => 20) {
        for (var i = 1; i < floor; i++) {
            var total = floor[i];
            var need = floor * 12 * 1000;
        }
    } else {
        for (var i = 1; i < floor; i++) {
            var total = floor[i];
            var need = floor * 15 * 1000;
        }
    }
    return need;
}
var output = brickCalculaltor(10);
console.log(output);
*/

/** 
function brickCalculaltor(floor) {
    var need = 1;
    for (var i = 1; i < floor; i++) {
        var total = floor[i];
        var need = floor * 10 * 1000;
    }
    return need;
}
var output = brickCalculaltor(10);
console.log(output);
*/
/** 
function brickCalculaltor(floor) {
    var need = 1;
    var n = 0;
    for (var i = 1; i < floor; i++) {
        var total = floor[i];
        var need = floor * n * 1000;
        if (floor => 10) {
            var need = floor * 10 * 1000;
        } else if (floor => 20) {
            var need = floor * 12 * 1000;
        } else {
            var need = floor * 10 * 1000;
        }
    }
    return need;
}
var output = brickCalculaltor(10);
console.log(output);
*/
/**
function brickCalculaltor(floor) {
    var need = 1;
    for (var i = 1; i < floor; i++) {
        var total = floor[i];
        var Top = floor * 10 - 5 * 1000;
        var Middle = floor * 15 - 3 * 1000;
        var ground = floor * 15 * 1000;
        var need = floor * 15 * 1000;

    }

    switch (floor) {
        case 10 >= 1:
            ground;

            break;
        case 20 >= 11:
            Middle;

            break;
        case 50 >= 21:
            Top;

            break;

    }
    return need;
}
var output = brickCalculaltor(20);
console.log(output);
*/
function brickCalculaltor(floor) {
    var needBrick = 1;
    if (floor <= 10) {
        needBrick = floor * 1000;
    } else if (floor <= 20) {
        var groundfloor = 15 * 100;
        var remaining = floor - 10;
        var Middlefloor = remaining * 1000;
        needBrick = groundfloor + Middlefloor;
    } else {
        var groundfloor = 15 * 1000;
        var Middlefloor = 12 * 1000;
        var remaining = floor - 20;
        var topfloor = remaining * 100;
        needBrick = groundfloor + Middlefloor + topfloor;
    }
    return needBrick;
}
var output = brickCalculaltor(10);
console.log(10);