const $canvas= document.querySelector(".canvas");
const ctx= $canvas.getContext('2d');

const reportWindowSize = ()=>{
    $canvas.height= window.innerHeight;
    $canvas.width= window.innerWidth;
}
const init = ()=>{
    //resize canvas according to window
    window.addEventListener('resize', reportWindowSize);
}
init();