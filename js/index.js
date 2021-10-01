import Character from './classes/Character.js'
const $canvas = document.querySelector(".canvas");
const ctx = $canvas.getContext("2d");

let characterdata = [];
let characters= [];
// different endpoints: /character,/location, /episode
const apiUrl = "https://rickandmortyapi.com/api/";
//fetch data
const fetchData = async (category) => {
  if (category === "character") {
    for (let i = 1; i <= 34; i++) {
      const response = await fetch(`${apiUrl}${category}?page=${i}`);
      const data = await response.json();
      data.results.forEach((element) => {
        characterdata.push(element);
      });
      console.log(characterdata);
    }

  }
};
//handle mouse movement/clicks
//draw the characters

const reportWindowSize = () => {
  $canvas.height = window.innerHeight;
  $canvas.width = window.innerWidth;
};

//size of the character is gonna be the amount of episodes they appear in
const init = async() => {
  //resize canvas according to window
  window.addEventListener("resize", reportWindowSize);
  await fetchData("character");
  characterdata.forEach(x=> {
    characters.push(new Character(x.id, x.name,x.image,x.episode))
  });
  console.log("--------------");
  console.log(characters);
  
};
init();
