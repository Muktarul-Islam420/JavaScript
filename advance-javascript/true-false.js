/**falsy value are also
 1.0
 2.""
 3.undefined
 4.null
 5.NaN 
 6.false
*/
let name = 12;
if (name || name == 0) {
    console.log("condition is true")
} else {
    console.log("Condition is false")
}