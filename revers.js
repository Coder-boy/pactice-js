function reversString (str){
    var revers = "";

    for(var i = 0; i < str.length; i++){
        var char = str[i];
        //console.log(char);

        revers = char + revers;

        //console.log(revers);

    }
    return revers;
}

var speech = "I am a good person. I don't snor at night.";
var result = reversString(speech);
console.log(result);


var sentence = "I am hardworking. I am serious. I am sure I will do it";
var reverse = sentence.split('').reverse().join('');
console.log(reverse);