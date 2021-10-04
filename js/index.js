import Character from './classes/Character.js'
const $canvas = document.querySelector(".canvas");
const ctx = $canvas.getContext("2d");

let characterdata = [];
let characters= [];
const apiUrl = "https://rickandmortyapi.com/api/";
//fetch data
const fetchData = async (category) => {
  if (category === "character") {
    for (let i = 1; i <= 34; i++) {
      const response = await fetch(`${apiUrl}${category}?page=${i}`);
      const data = await response.json();
      await data.results.forEach((element) => {
        characterdata.push(element);
      });
    }

  }
};
//draw the characters
const drawImages = ()=>{
  characters.forEach(character=> character.draw(ctx));
}
const reportWindowSize = () => {
  $canvas.height = window.innerHeight;
  $canvas.width = window.innerWidth;
};
//size of the character is gonna be the amount of episodes they appear in
const init = async() => {
  $canvas.width= window.innerWidth;
  $canvas.height= window.innerHeight;
  //resize canvas according to window
  window.addEventListener("resize", reportWindowSize);
  await fetchData("character");
  characterdata.forEach(x=> {
     characters.push(new Character(x.id, x.name,x.image,x.episode))
  });
  console.log("--------------");
  console.log(characters);
  drawImages();
  console.log("done drawing")
  
};
init();
