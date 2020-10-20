var num = 2.12455;
var result = Math.floor(num);
console.log(result);
var result2 = Math.ceil(num);
console.log(result2);
var result3 = Math.round(num);
console.log(result3);
var randomNum = Math.random() * 6;

var result4 = Math.round(randomNum);

console.log('before loop', result4);


for (i = 0; i <= 10; i++) {
    var randomNum1 = Math.random() * 9999;
    var result5 = Math.round(randomNum1);
    console.log(result5);
 
    
}