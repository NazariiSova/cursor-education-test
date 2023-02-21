

const getRandomArray = (length, min, max) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.round(Math.random() * (max - min) + min)
        arr.push(randomNumber);
    }
    console.log(arr);
}

getRandomArray(15, 1, 100);



function getAverage(...numbers) {
    let result = 0;
    const filterNumbers = numbers.filter((el) => +(el % 1 === 0));
    filterNumbers.forEach((el, i, num) => {
        result += numbers[i];
    });
    console.log(result / numbers.length);
}
getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);



function getMedian(...numbers) {
    let result = 0;
    const filterNumbers = numbers.filter((el) => +(el % 1 === 0));
    const sortNumbers = filterNumbers.sort((a, b) => a - b);
    const odd = sortNumbers[(sortNumbers.length - 1) / 2];

    if (sortNumbers.length % 2 === 0) {
        result = (sortNumbers[(sortNumbers.length / 2) - 1] + sortNumbers[sortNumbers.length / 2]) / 2
    } else {
        result = odd;
    }
    console.log(result);
}

getMedian(1, 2, 3, 4);
getMedian(1, 2, 3, 4, 5);
getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);



function filterEvenNumbers(...numbers) {
    console.log(numbers.filter((el) => ((el % 2 !== 0))));
}
filterEvenNumbers(1, 2, 3, 4, 5, 6);



function getDividedByFive(...numbers) {
    console.log(numbers.filter((el) => ((el % 5 === 0))));
}
getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)



function replaceBadWords(string, addBadWord) {
    const badWords = ["fuck", "shit"];
    if (addBadWord.length > 1) {
        badWords.push(addBadWord)
    }
        let res = string; 
       
        badWords.forEach((el) => { 
          res = res.replaceAll(el, "*".repeat(el.length)); 
        }); 
       
        console.log(res); 
      }; 
       
    
replaceBadWords("It's bullshit!", " ");