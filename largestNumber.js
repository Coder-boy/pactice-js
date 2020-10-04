function largestNumber(numbers) {

    var larger = numbers [0];

    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        
       
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}
var output = largestNumber([22,45,66]);
console.log("output",output);