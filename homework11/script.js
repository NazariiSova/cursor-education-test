async function whichReturnsPromis(length) {
const sign = Date.now().toString().slice(-5);
  
    let convers = "";
    while (0 < length) {

        length--;
          
         convers += String.fromCharCode(sign);
        await new Promise(resolve => setTimeout(() => resolve(), 50));



    }
 
    console.log(convers);
};

whichReturnsPromis(4) ;