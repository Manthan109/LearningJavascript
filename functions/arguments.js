
let getTip = function(totalBill,tipPercent=20){
    return totalBill*(tipPercent/100);
}
console.log("Rs."+getTip(100,25))