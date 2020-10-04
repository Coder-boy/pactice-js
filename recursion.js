//itarative way te kora function
function factorial(num){

    var fact = 1;

   for (var i = 1; i <= num; i++){
      fact = fact * i;
      
   }
   return fact;
}
var result = factorial(5);
console.log(result);


function factorialRecursive(num1){

    if(num1 == 1){
        console.log(num1);

        return 1;
        

    }else{
        return num1 * factorialRecursive(num1 -1);
    }
    

}
var result = factorialRecursive(5);
console.log(result);
