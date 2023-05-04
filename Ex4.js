let credits = 23580;
let pricePerDroid = 3000;
let droidAmount = prompt("Enter the amount of droids: ", ""), totalPrice ;

if(droidAmount == null) alert("Скасовано користувачем!");
else {
    totalPrice = pricePerDroid*droidAmount;
    if(totalPrice <= credits) {
        credits -= totalPrice;
        alert("Ви купили" + droidAmount + "дроїдів, на рахунку залишилося" + credits + "кредитів");
    } else alert("Недостатньо коштів на рахунку!");
}
