class Character{
    constructor(id,name,image, episodes){
        //this.location = new Vector(random(0,window.innerWidth), random(0, window.innerHeight));
        this.id = id;
        this.name=name;
        this.image=image;
        this.episodes = episodes;
        this.size = episodes.length;
    }
    draw(ctx){
        console.log(this.location)
        ctx.drawImage(this.image,this.location.x,this.location.y);
    }
}
export default Character;