
var person = {};

person.name  = "ashraf";
person.id = 12;
person.phone = 05898;

console.log(person);

var car = {
    name : "Toyota Crolla",
    price : 20000,
    tax : 15 ,
    color : "Black",
    WheelSize : 14,
    adBanner : function (myDiscount) {

        var carPrice = this.price;
        var newTax = this.tax;
        var priceWithTax = carPrice / 100 * newTax + carPrice;
        var discount =  myDiscount ;
        var priceWithDiscount = priceWithTax / 100 * discount
        var totalPrice = priceWithTax - priceWithDiscount;
        var finalPrice = parseFloat(totalPrice);

        return finalPrice;

    }

}
console.log(car.name);
document.querySelector("#name").innerHTML = car.name;
document.querySelector("#price").innerHTML = car.price;
document.querySelector("#tax").innerHTML = car.tax;
document.querySelector("#color").innerHTML = car.color;
document.querySelector("#wh-size").innerHTML = car.WheelSize;
document.querySelector("#t-price").innerHTML = car.adBanner(10);

