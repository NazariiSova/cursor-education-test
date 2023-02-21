function* createIdGenerator() {
    for (let i = 1; i < Infinity; i++) {
        yield i;
    }
};
const idGenerator = createIdGenerator();

console.log(idGenerator.next(1));
console.log(idGenerator.next(2));
console.log(idGenerator.next(3));


function* newFontGenerator(fontSize) {
    let costSize = fontSize;
    for (let i = 0; i< Infinity; i++) {
        const a = yield i;
       
        if (a === 'up') {
            costSize+=2
            changeFontSize(costSize);
        }

        if (a === 'down') {
            costSize-=2
            changeFontSize(costSize);
        }
    }
}



const fontGenerator = newFontGenerator(14); 

 const divWithText = document.getElementById("text-for-web");

function changeFontSize(fz){
    divWithText.style.fontSize = `${fz}px`;
  
    
  
}
