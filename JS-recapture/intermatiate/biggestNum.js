//easy
var ages = [25, 29, 30, 31, 32, 33, 34, 35, 36, 37];

var maxAge = 0;

for(var i = 0; i < ages.length; i++) {
    if(ages[i] > maxAge){
        maxAge = ages[i];
    }
}

console.log(maxAge);


//complicated

var peopleData = [
    { name: "Paul", height: 180, age: 21 },
    { name: "Johnny", height: 198, age: 43 },
    { name: "Brad", height: 172, age: 49 },
    { name: "Dwayne", height: 166, age: 15 }
];

//Find biggest height number
var maxHeight = 0;

for (var i = 0; i < peopleData.length; i++) {
    if (peopleData[i].height > maxHeight) {
        maxHeight = peopleData[i].height;
    }
}

console.log(maxHeight);

