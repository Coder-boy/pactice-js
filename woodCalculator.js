// 1 chair = 1 qbicfeet khat lagbe 
// 1 table = 3 qbicfeet khat lagbe
// 1 khat = 5 qbicfeet khat lagbe 

function woodCalculator(chair, table, bed) {
    var chair = chair * 1;
    var table = table * 3;
    var bed = bed * 5;
    var total= chair + table + bed;
    return total;

}
const result = woodCalculator(14 , 5 , 12);
console.log(result);