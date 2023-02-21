const priceApple = 15.678;
const priceBanana = 123.965;
const priceCherry = 90.2345;

const maxPrice = Math.max(priceApple, priceBanana, priceCherry);
console.log(maxPrice);
document.writeln(`<p>Максимальне значеня: ${maxPrice}</p>`);

const minPrice = Math.min(priceApple, priceBanana, priceCherry);
console.log(minPrice);
 document.writeln(`<p>Мінімальне значення: ${minPrice}</p>`);

const sumPrice = priceApple + priceBanana + priceCherry;
console.log(sumPrice);
document.writeln(`<p>Вартість всіх товарів: ${sumPrice}</p>`)

const sumWithoutPenny = ((Math.floor(priceApple))+(Math.floor(priceBanana))+(Math.floor(priceCherry)));    
console.log(sumWithoutPenny);
 document.writeln(`<p>Відкинуті копійки у всіх товарів, потім – складена ціла частина вартості кожного товару
 між собою. Округлення використовувалося в МЕНЬШУ сторону: ${sumWithoutPenny}</p>`);

const remainder = sumWithoutPenny % 100;
console.log(sumWithoutPenny - remainder);
document.writeln(`<p>Сума товарів округлену до сотень: ${sumWithoutPenny - remainder}</p>`);

if (sumWithoutPenny % 2 === 0){
    console.log(true);
    document.writeln(`<p>Виведення булевого значення: чи є сума всіх товарів (округлена в меншу сторону) парним
    чи непарним числом?(${true})</p>`);
} else {
    document.writeln(`<p>Виведення булевого значення: чи є сума всіх товарів (округлена в меншу сторону) парним
    чи непарним числом?(${false})</p>`);
    console.log (false);
}

const customerPayment = 500 - sumPrice;
console.log(customerPayment);
document.writeln(`Сума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500
грн. ${customerPayment}`);

const roundSumPrice = sumPrice/3;
console.log(+roundSumPrice.toFixed(2));
document.writeln(`<p>Середнє значення цін, округлене до другого знаку після коми : ${+roundSumPrice.toFixed(2)}</p>`);

const randomDiscount = Math.random();
console.log(randomDiscount);
document.writeln(`<p> Випадкова знижка (використання
функцї Math.random). : ${randomDiscount}</p>`);

console.log(+(sumPrice-randomDiscount).toFixed(2));
document.writeln(`<p>Сума до оплати округлена до 2 знаків
після коми.  : ${+(sumPrice-randomDiscount).toFixed(2)}</p>`);

const divideTwo = sumPrice/2; 
const netProfit = divideTwo - randomDiscount/100;
console.log(+netProfit.toFixed(2));
document.writeln(`<p>Чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів
рівно в два рази нижче їх ціни? : ${+netProfit.toFixed(2)}</p>`);

 

 

 
