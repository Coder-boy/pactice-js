// sobcheye boro number ber kora 
var num = [ 23, 44,76, 87, 87,32,11];

var max = num.reduce((acc, val ) =>{
    if (acc > val) {
        return acc;

        
    }else{
        return val;
    }
});
console.log(max);
// sobcheye boro number ber kora 
var num1 = [ 23, 44,76, 87, 97,32,11];

var max1 = num1.reduce((acc, val ) => Math.max(acc, val)); 


    
console.log(max1);

// sobcheye chuto number ber kora 
var num2 = [ 23, 44,76, 87, 97,32,11];

var min = num2.reduce((acc, val ) => Math.min(acc, val)); 


    
console.log(min);

//fotura hishab kora 

const product = [
    {
        name:'pen',
        quantity : 2,
        price :4,
    },
    {
        name:'laptop',
        quantity : 4,
        price :8,
    },
    {
        name:'mobile',
        quantity : 3,
        price :6,
    }
]
const totalAmount = product.reduce(function (acc, item) {
    return acc + item.quantity * item.price;
}, 0);
console.log(totalAmount);

//vote count kora 

const vote = [ 'yes', 'no','yes', 'no','yes', 'yes','yes', 'no','no', 'no','absent', 'no',];

const result = vote.reduce((acc, vote)=>{
    if (acc[vote]) {
      acc[vote]++;
        
    }else{
        acc[vote] = 1;
    }
    return acc;
}, {});

console.log(result);