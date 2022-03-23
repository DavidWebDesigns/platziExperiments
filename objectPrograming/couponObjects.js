const screenmsg = document.getElementById("msg");
const userInput = document.getElementById("urcupon");
const proCost = document.getElementById("productCost");
var testcupon = "CUPCODE123";
const coupons = [
    {
        name: "CUPCODE123",
        discount: 15,
    },
    {
        name: "CUPCODE456",
        discount: 30,
    },
    {
        name: "CUPCODE789",
        discount: 25,
    },
];
const checkCoupon = function (x) {
    return x.name === userInput.value;
};
function calculaDescuento () {
    let receivedCoupon = coupons.find(checkCoupon); //muy importante colocar el checkeo del input dentro de la activacion de la funcion, asi se define a tiempo de ejecución.
    let newCost = proCost.value -((proCost.value * receivedCoupon.discount)/100);
    if (receivedCoupon !== undefined){
        console.log(receivedCoupon);
        screenmsg.innerText = "Nice coupon your discount is" + receivedCoupon.discount + "% so your new price is" + newCost;
    }
    else {
        screenmsg.innerText = "Sorry that is a bad coupon";
        console.log(coupons.find(checkCoupon));
    }
}