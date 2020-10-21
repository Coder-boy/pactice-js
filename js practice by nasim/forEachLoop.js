var names = ["ashraf" , "adnan" , "arfa"];

names.forEach(name => {
    console.log(name);
});

names.forEach(function (value, indexes, array) {
    console.log(indexes +" = "+ value);
})