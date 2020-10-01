var marks = [57, 67, 43, 23, 56, 99, 76, 65,];
var max = marks[0];

for (let i = 0; i <marks.length; i++) {
    const element = marks [i];
    if (element > max) {
        max = element;
        
    }
}
console.log('highest value is', max);