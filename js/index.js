const $canvas= document.querySelector(".canvas");
const ctx= $canvas.getContext('2d');

let characters = [];
// different endpoints: /character,/location, /episode
const apiUrl= "https://rickandmortyapi.com/api/";
//fetch data
const fetchData = async (category)=>{
    const response = await fetch(apiUrl+category);
    const data = await response.json();
    //depending on request assing variables
    if(category === "character"){
        characters = data;
    }
    console.log(characters);
}
//handle mouse movement/clicks
//draw the characters

const reportWindowSize = ()=>{
    $canvas.height= window.innerHeight;
    $canvas.width= window.innerWidth;
}
const init = ()=>{
    //resize canvas according to window
    window.addEventListener('resize', reportWindowSize);
    
    fetchData("character");
}
init();