// 1st 10 floor = 15 feet ucha ;
// 11 to 20 floor = 12 feet ucha;
// 21 to up floor = 10 feet ucha ;
// 1 feet = 1000 et lage ;


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

var result = brickCalculator(22);
console.log(result);