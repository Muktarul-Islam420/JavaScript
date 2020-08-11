var love;
function BabySays(){
    console.log("Babu jaan!jan!");
    console.log("Baby,jaan!jaan!");
}
BabySays();
 love = BabySays();
console.log("She says"+love);

 /*function peramiter*/
function doubleIt(num){
    var result = num*2;
    console.log(result);
}
doubleIt(10);
 /*function peramiter*/
 function doubleIt(num){
     var result = num*2;
     return result;
 }
 var banana = doubleIt(4);
 var mango  = doubleIt(8)
  var total = banana + mango;
 console.log(total);
 /*function peramiter*/
 var add(num1, num2){
     var result = num1 + num2;
     return result;
 }
 var sum = add(20, 30);
 console.log(sum);