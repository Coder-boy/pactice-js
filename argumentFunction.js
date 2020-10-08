function addNumbers () {
    
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;



        
    }
    return sum;
}
// input hishebe onek number dile segule k jug kore output dite argument beboharito hoy
var result = addNumbers(2, 3, 8, 8, 9,1,9);
console.log(result);