//== equal to something
//=== equal value and data type  to something
// (5 < 20 ? true) < less than to something
// (20 > 5 ? true) > greater than to something
// <= (20 <= 20 ? true) equal or less than to something

// >= (25 >= 20 ? true) equal or grater than to something
// && and 
// || or 
// ! not
// != not equal (not version of "==" operator )
// !== not equal (not version of "===" operator )
// ? tai noy ki?

var m = 9;
var n = "9";
if (m===n){
    console.log(true);
}else{
    console.log(false)
}

var q = "9";
var p = 9;
if (p==q){
    console.log(true);
}else{
    console.log(false)
}

var userName = "Ashraf123"
var userPassword = "Ashraf123"
 var result = (userName==userPassword ) ? "login is success" : "login failed";
 console.log(result);

 var minAge = 18;
 var inputAge = 19;

 var result1 = ( (minAge >= inputAge) ==false) ? "You can register!" :  "You are too young t reg";
 console.log(result1);

 var country = "pakistan";
 var age = 18;
 var person = "male";

 var result3 = ((country=="bangladesh" || country=="ksa" ||country=="pakistan" ) && (age==18 && person=="male")) ? "your registration is successFull" : "you are is not allowed";
 console.log(result3)
