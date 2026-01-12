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
        this.pos = new Vector(800, 500)
    }

    gotHit() {
        let kind = "Leider"
        let popup = new PopUp(kind)
        popup.pos = this.pos.clone().add(new Vector(0, -100))
        this.scene.add(popup)
        this.kill()
    }
}