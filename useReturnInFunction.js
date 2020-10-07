


function evenify1(num) {
    var result;
    if (num % 2 == 0) {
        result= num;

    }else{
       result =num * 2;
    }
    return result;
}




var result = evenify1(5);
var square = result * result;
console.log(square);


function evenify2(nums) {
    var even_array = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify1(num);

        even_array.push(result);

      
      
        
    };
    return even_array;

   

};

var nums = [13, 14, 56, 4, 65, 9];

var result = evenify2(nums);
console.log(result);

