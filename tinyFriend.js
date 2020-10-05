
function tinyFriend (name) {
   var tinyName = name.reduce((a, b) => a.length <= b.length ? a : b)
    return tinyName;
}
var result = tinyFriend(["ishmam", "ashraf", "nabid", "kawser", "musa", "nadim"]);
console.log(result);


