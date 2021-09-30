class Character extends Particle{
    super(x,y);
    constructor(id,name,image, episodes){
        this.id = id;
        this.name=name;
        this.image=image;
        this.episodes = episodes;
    }
    draw(ctx){
        console.log(this.location)
        ctx.drawImage(this.image,this.location.x,this.location.y);
    }
}
export default Character;