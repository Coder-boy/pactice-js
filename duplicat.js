var num = [3, 4, 7, 8, 3, 5, 7, 99, 65];
var uniqNum = [];

for (var i = 0; i < num.length; i++ ){
    var element = num[i];
    
    var index = uniqNum.indexOf(num);
 

    if( index == -1){
        uniqNum.push(element);
    }


}
// console.log(element);
console.log(uniqNum);

function add(a, b){
    return a + b;
}
var result = add("adam" + "eve")
console.log(result);

