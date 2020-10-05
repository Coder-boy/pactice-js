//converted feet to mile
function feetToMile(feet) {
    const mile = feet / 5280;
    return mile;
}
const result1 = feetToMile(10560);
console.log(result1);

// wood calculating
function woodCalculator(chair, table, bed) {
    var chair = chair * 1;
    var table = table * 3;
    var bed = bed * 5;
    var total= chair + table + bed;
    return total;

}
const result2 = woodCalculator(14 , 5 , 12);
console.log(result2);

//brick calculating

function brickCalculator(floor) {
   
       
  
    if (floor <= 10   ) {
     
     
       var feet = floor * [15];
       var brick = feet * [1000];
       
       return brick;
 
       
       
       
        
    } if(floor <= 20)  {
       
       var firstTenFloor = floor - (floor -10);
       var otherFloor = (floor -10);
       var feet1 =  firstTenFloor * [15];
       var feet2 =  otherFloor * [12] ;
       
       var feet = feet1 + feet2;
 
       var brick = feet * [1000];
       
       return brick;
    }else{
 
       var firstTenFloor = floor - (floor -10);
       
       var secondTenFloor = floor - (floor -20) ; 
      
       var otherFloor = (floor -20);
       var feet1 =  firstTenFloor * [15];
       
       var  secondTenFloor = secondTenFloor - firstTenFloor;
       var feet2 = secondTenFloor * [12]  ;
       
       var feet3 =  otherFloor * [10] ;
       
       var feet = feet1 + feet2 + feet3;
         var brick = feet * [1000];
         return brick;
    }
     
     
     
 }
 
 var result3 = brickCalculator(22);
 console.log(result3);



 // get shortest name in array

 function tinyFriend (name) {
    var tinyName = name.reduce((a, b) => a.length <= b.length ? a : b)
     return tinyName;
 }
 var result4 = tinyFriend(["ishmam", "ashraf", "nabid", "kawser", "musa", "nadim"]);
 console.log(result4);
 