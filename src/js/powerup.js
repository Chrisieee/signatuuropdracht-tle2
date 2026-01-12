import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { PopUp } from './popup.js'

export class PowerUp extends Actor {
    #sprite

    constructor() {
        super({
            width: Resources.Hat.width,
            height: Resources.Hat.height,
            collisionType: CollisionType.Passive
        }) //Just do it! 
        this.#sprite = Resources.Hat.toSprite()
        this.graphics.use(this.#sprite)
        this.scale = new Vector(2, 2)
        this.pos = new Vector(500, 600)
    }

    gotHit() {
        this.kill()
    }
}