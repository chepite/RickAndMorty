const $canvas = document.querySelector(".canvas");
const ctx = $canvas.getContext("2d");

let characters = [];
// different endpoints: /character,/location, /episode
const apiUrl = "https://rickandmortyapi.com/api/";
//fetch data
const fetchData = async (category) => {
  if (category === "character") {
    for (let i = 1; i <= 33; i++) {
      const response = await fetch(`${apiUrl}${category}?page=${i}`);
      const data = await response.json();
      data.results.forEach((element) => {
        characters.push(element);
      });
      console.log(characters);
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
const init = () => {
  //resize canvas according to window
  window.addEventListener("resize", reportWindowSize);
  fetchData("character");
  
};
init();
