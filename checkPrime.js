var  n = 13;

for(i = 2; i < n; i++){
    console.log(i, n%1);
    if (n % i == 0) {
        console.log('not a prime number');
        break;
        
    }
}

console.log('your number is a prime number');

function isPrime(n) {
    
    
for(i = 2; i < n; i++){
    console.log(i, n%1);
    if (n % i == 0) {
       return'not a prime number';
        
        
    }
}
return'is a prime number';
}
var result = isPrime(12);
console.log(result);