var speech = "I am a good person. I don't snor at night.";
var count = 0;
 for (let i = 0; i < speech.length; i++) {
     const char = speech[i];
     //console.log(i);
     if(char == " " && speech[i-1] !=" "  ){
         
         count++;
     }
 }
 
 count++;
 console.log(count);


 
 
