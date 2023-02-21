
 
document.addEventListener("keydown", (e) => {
if (e.code ==='KeyA' ){
 let letter = document.getElementById('A');
 letter.setAttribute("class", "active");
 setTimeout(()=>{
   letter.classList.remove("active");
 }, 200)
  const audio = new Audio('sound/A.mp3');
   return audio.play();
}; 
if (e.code ==='KeyB' ){
  let letter = document.getElementById('B');
 letter.setAttribute("class", "active");
 setTimeout(()=>{
   letter.classList.remove("active");
 }, 200)
  const audio = new Audio('sound/B.mp3');
   return audio.play();
}; 
if (e.code ==='KeyC' ){
  let letter = document.getElementById('C');
  letter.setAttribute("class", "active");
  setTimeout(()=>{
    letter.classList.remove("active");
  }, 200)
  const audio = new Audio('sound/C.mp3');
   return audio.play();
}; 
if (e.code ==='KeyD' ){
  let letter = document.getElementById('D');
  letter.setAttribute("class", "active");
  setTimeout(()=>{
    letter.classList.remove("active");
  }, 200)
  const audio = new Audio('sound/D.mp3');
   return audio.play();
}; 
if (e.code ==='KeyE' ){
  let letter = document.getElementById('E');
  letter.setAttribute("class", "active");
  setTimeout(()=>{
    letter.classList.remove("active");
  }, 200)
  const audio = new Audio('sound/E.mp3');
   return audio.play();
}; 
if (e.code ==='KeyF' ){
  let letter = document.getElementById('F');
  letter.setAttribute("class", "active");
  setTimeout(()=>{
    letter.classList.remove("active");
  }, 200)
  const audio = new Audio('sound/F.mp3');
   return audio.play();
   
}; 
if (e.code ==='KeyG' ){
  let letter = document.getElementById('G');
  letter.setAttribute("class", "active");
  setTimeout(()=>{
    letter.classList.remove("active");
  }, 200)
  const audio = new Audio('sound/G.mp3');
  
   return audio.play();

}; 

});


  function handlerClick(letter) {
    
    const audio = new Audio(`sound/${letter}.mp3`);
    return audio.play();
  }
  
  



  
 