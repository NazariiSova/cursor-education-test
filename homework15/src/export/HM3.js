function getMaxDigit(number) {
    let string = number.toString();
    let max = 0;
    for (let i = 0; i <= string.length; i++) {
        let check = string[i];
        if (check > max) {
            max = check;
        };
        console.log(max);
    }
    
    return max;
}