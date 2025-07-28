// Free Drinks
// - Burger more than 500tk: free Coke
// - Else Coke: 30tk

let burgerPrice = 500;
let cokePrice;

if (burgerPrice > 500) {
    cokePrice = 0;
    console.log("You get a free coke!");
} else {
    cokePrice = 30;
    console.log("Coke Price is 30tk");
}