const button = document.querySelector(".btn");
const img = document.querySelector(".img");
const url = "https://swapi.dev/api/";


async function getPlanets(){
 
  const results = (await (await fetch("https://swapi.dev/api/planets/")).json()).results;
console.log(results);
results.forEach((el, i)=>{

const namePlanets = results[i].name;

 const getPlanets = document.getElementById("container-planets");
  const planetsDiv = document.createElement("div");
  planetsDiv.classList.add("planets-card")
  getPlanets.appendChild(planetsDiv);
  const spanPlanets = document.createElement("span");
  spanPlanets.innerHTML= namePlanets;
  planetsDiv.appendChild(spanPlanets);

});


}
getPlanets();

async function fetchHandler() {
  const btnGetInfo = document.getElementById("btn_getInfo");
  btnGetInfo.style.display = "none";
  const results = (await (await fetch(`${url}/films`)).json()).results;
  const arrImgFilms = ["./img/SW1.jpg", "./img/SW2.jpg", "./img/SW3.jpg", "./img/SW4.jpg", "./img/SW5.jpg", "./img/SW6.jpg"];
  results.forEach((element, i) => {
    getNameFilm(element, arrImgFilms[i])
  });
  console.log(results);

};


function getNameFilm(FilmData, filmPhoto) {
  const nameDiv = document.createElement("div")
  nameDiv.classList.add('films-card');
  const span = document.createElement("span");
  span.innerHTML = FilmData.title;
  nameDiv.appendChild(span);

  const imgFilm = document.createElement("img");
  imgFilm.src = filmPhoto;

  imgFilm.classList.add("img-in-cards")
  nameDiv.appendChild(imgFilm);

  const BtnInCard = document.createElement("button");
  BtnInCard.innerHTML = "GET INFO";
  BtnInCard.classList.add("btn-in-card")
  BtnInCard.value = FilmData.characters.join("$");
  nameDiv.appendChild(BtnInCard);
  BtnInCard.onclick = handlerGetCharacters;
  console.log(FilmData);

  const containerForCards = document.getElementById("container")
  containerForCards.appendChild(nameDiv);
};


function handlerGetCharacters(event) {
  const arrCharacters = event.target.value.split("$")
  console.log(arrCharacters);
  console.log(arrCharacters[0]);
  document.getElementById("container").style.display = "none";

  arrCharacters.forEach((el, i) => {

    getNameCharacters(arrCharacters[i]);
    console.log(arrCharacters[i]);
  });
};


async function getNameCharacters(characterDate) {
  const results = (await (await fetch(characterDate)).json());

  console.log(results);
  console.log(results.name);
  console.log(results.gender);
  console.log(results.birth_year);

  const peopleDiv = document.getElementById("container-for-people");
  const characterDiv = document.createElement("div");
  peopleDiv.appendChild(characterDiv);
  characterDiv.classList.add('character-card');
  const spanName = document.createElement("span");
  spanName.innerHTML = results.name;
  characterDiv.appendChild(spanName);
  const spanGender = document.createElement("span");
  spanGender.innerHTML = results.gender;
  characterDiv.appendChild(spanGender);
  const spanBYear = document.createElement("span");
  spanBYear.innerHTML = results.birth_year;
  characterDiv.appendChild(spanBYear);

};