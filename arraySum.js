var num = [37, 67, 96, 47, 57, 77, 34, 56]
var sum = 0;

for (let i = 0; i < num.length; i++) {
    const element = num[i];
    sum = sum + element;
    
}
console.log('total of the numbers', sum);


function getArraySum(num1) {
            var sum1 = 0;

        for (let i = 0; i < num1.length; i++) {
            const element1 = num1[i];
            sum1 = sum1 + element1;
            
        }
        return sum;
    
}
var num1 = [37, 67, 96, 47, 57, 77, 34, 56]
var result = getArraySum(num1)
console.log(result);

var total = getArraySum([37, 67, 96, 47, 57, 77, 34, 56]);
console.log(total);

var friends = ["Alu"," ", "Bulu"," ", "culu", " ","dulu", " ","fulu"];
var allNames = "";
for(var i = 0; i< friends.length;i++){
    var name = friends[i];
    allNames = allNames + name;
}
console.log(allNames);