let country = prompt("Enter your country: ", "").toLowerCase();
let price;

switch(country){
    case null: 
    case 'китай': price = 100; break;
    case 'чилі': price = 250; break;
    case 'австралія': price = 170; break;
    case 'індія': price = 80; break;
    case 'ямайка': price = 120; break;
    default: alert("No delivery"); break;
}

country[0] = country[0].toUpperCase();
alert("Доставка в " + country + " буде коштувати " + price + " кредитів");