function productCal(product, price , newTax , buyerName) {
    var productName = product
    var productPrice = price ;
    var tax = newTax;
    var buyer = buyerName;
    var totalPrice = productPrice / 100 * tax + productPrice ;
    var productInformation = "product name : " + productName + " price : " + totalPrice +" SAR " + " sold by " + buyer;
    return productInformation ;
}
var result = productCal( " mobile " , 500 , 15, " ashraf ")
var result2 = productCal(" laptop " , 1200, 15, " adnan ")
console.log(result , result2);

function myName(params) {
    return "my name is :"
};

function fName(name) {
    return name;
};
function lName (name) {
    return name;
};
function fullName(some) {
    return myName() + fName( some) + lName(" ahmed ");
};
console.log(fullName("robin"))