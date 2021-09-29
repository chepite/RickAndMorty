import Vector from "./Vector.js";
import { random } from "../functions/lib.js";

class Particle {
  constructor(x, y) {
    this.location = new Vector(random(0,window.innerWidth), random(0, window.innerHeight));
    this.size = random(1,5);
  }
 
}

export default Particle;
