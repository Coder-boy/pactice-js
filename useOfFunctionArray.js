// ekta kaj bar bar korte hole function bebohar korte hoy
function evenify_all(num) {
    
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element % 2 == 0) {
            console.log(element, ': is even number');
    
        }else{
            console.log(element * 2, ': is odd number');
        }
      
        
    };

   

};


var num = [8, 5, 34, 54, 6, 77, 65, 3];

evenify_all(num);

var age = [13, 14, 56, 4, 65, 9];

evenify_all(age)