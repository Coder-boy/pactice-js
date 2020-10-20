var employees = new Array(
    "ashraf",
    ["muna" ,["shekh"],"rubel"],//added a new array
    "adnan",
    "arfa",
    "ishfuq"
);
console.log(employees[0]);
console.log(employees);
console.log(employees[1]);
console.log(employees[1][1][0]);

var student = new Array(
    [
        "ahmed",
        "arfa",
        "ashraf"

    ],
    [
        "ishfuq",
        "muna",
        "rubel"

    ]
)
console.log(student);
console.log(student[1]);
console.log(student[0]);
console.log(student[0][0]);

var friend = [];

friend[0] = "nadim";
friend[1] = ["fiyaz", "numan"];
friend[2] = "tazul";
friend[3] = "sabbir";
friend[4] = "kawser";
 console.log(friend[1][0]);


 // object like array
 var hobbies =[];
 hobbies["leisurTime"] = "zikir";
 hobbies["someTime"] = "listening waz ";
 hobbies["mostWanting"] = "traveling";
 


 var profile = [];
profile["name"] = "ashraf";
profile["age"] = 24;
profile["address"] = "jeddah";
profile["designation"] = "freelancer";
profile["company"] = "freelancerash.com";
profile["hisHobbies"] = hobbies;


console.log(profile)
console.log(profile["name"]);
console.log(profile["age"]);
console.log(profile["address"]);
console.log(profile["designation"]);
console.log(profile["company"]);
console.log(profile["hisHobbies"]);
console.log(profile["hisHobbies"]["mostWanting"]);


//  object in an array
// how to get all information of employers

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
 console.log( employer);
 console.log(employer[0]);
 console.log(employer[0].name);
 console.log(employer[0].age);
 console.log(employer[0].designation);
 console.log(employer[0].isActive);

 console.log(employer[1]);
 console.log(employer[1].name);
 console.log(employer[1].age);
 console.log(employer[1].designation);
 console.log(employer[1].isActive);

 console.log(employer[2]);
 console.log(employer[2].name);
 console.log(employer[2].age);
 console.log(employer[2].designation);
 console.log(employer[2].isActive);
