import SW from './img/Star-Wars-Logo.png';
import {randomDiscount} from "./export/HM1";
import {getNumber} from "./export/HM2";
import {getMaxDigit} from "./export/HW3";


const SW = document.createElement('img');
SW.src = maleImg;
imgBox.append(SW);

let randomDiscount = randomDiscount();
document.getElementById('#HW1').textContent = `HM1 ${randomDiscount}`;

let getNumber = getNumber();
document.getElementById('#HW2').textContent = `HM2 ${getNumber}`;

let maxDigit = getMaxDigit(44444);
document.getElementById('#HW3').textContent = `HM3 ${maxDigit}`;