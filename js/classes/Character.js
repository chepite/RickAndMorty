import {random, loadImage} from '../functions/lib.js';
import Vector from './Vector.js'
class Character{
    constructor(id,name,image, episodes){
        this.location = new Vector(random(0,window.innerWidth), random(0, window.innerHeight));
        this.id = id;
        this.name=name;
        this.image=image;
        this.episodes = episodes;
        this.size = episodes.length;
    }
    draw (ctx){
        //test
        const x = this.location.x;
        const y = this.location.y;
        const dimension= this.size*10;
        let testImage = new Image();
        testImage.onload = function(){
            ctx.drawImage(testImage,x,y, dimension,dimension)
        }
        testImage.src = this.image
    }
}
export default Character;