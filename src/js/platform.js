import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'

export class Platform extends Actor {
    constructor(x, y) {
        super({
            x, y,
            width: Resources.Platform.width,
            height: Resources.Platform.height
        }) //Just do it! 

        this.graphics.use(Resources.Platform.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.scale = new Vector(0.5, 0.5)
    }

    onInitialize() {

    }
}