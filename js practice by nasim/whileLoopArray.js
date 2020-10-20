var employer = [];

employer[0] = {
    name: "ashraf",
    age: 24,
    designation:"web developer",
    isActive:true
};

employer[1] = {
    name: "adnan",
    age: 21,
    designation:"web designer",
    isActive:true
}


employer[2] = {
    name: "muna",
    age: 25,
    designation:"assistant dentist",
    isActive:true
}

var i = 0;
while (i < employer.length) {
    console.log(
        " name: " +employer[i].name+
        ", age: " +employer[i].age+
        ", designation: " +employer[i].designation+
        ", isActive: " +employer[i].isActive
    );
    ++i;
}
 
 