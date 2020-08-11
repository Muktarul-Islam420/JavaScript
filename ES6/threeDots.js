const age = [25, 35, 45, 66, 55]
const age2 = [10, 20, 30, 40, 50]
const age3 = [5, 10, 16, 21, 24, 31]
const totalAge = age.concat(age2).concat([5]).concat(age3)
const totalAge2 = [...age, ...age2, 5, ...age3]
    //console.log(totalAge)
console.log(totalAge2)
    //old way
const business = 1000
const minister = 800
const teacher = 500
const maximum = Math.max(business, minister, teacher)
console.log(maximum)
    //ES6 way
const takaPoisha = [1000, 800, 2000]
const maximumTaka = Math.max(...takaPoisha)
console.log(maximumTaka)