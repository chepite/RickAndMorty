const $canvas= document.querySelector(".canvas");
const ctx= $canvas.getContext('2d');

const characters = [];
// different endpoints: /character,/location, /episode
const apiUrl= "https://rickandmortyapi.com/api";
//fetch data
const fetchData = (category)=>{
    
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