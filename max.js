var business = 650;
var minister = 370;
var sochib = 550;

if(business > minister){
    if (business > sochib) {
        console.log('business is bigger');
    }else{
        console.log('sochib is bigger');
    }
   
}else{
    if (minister > sochib) {
        console.log('minister is bigger');
        
    }else{
        console.log('sochib is bigger');
    }

}

var business1 = 650;
var minister1 = 370;
var sochib1 = 550;

var max = Math.max(business1, minister1, sochib1);
console.log(max);

