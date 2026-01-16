import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'

export class EmptyPlatform extends Actor {
    constructor(x, y) {
        super({
            x, y,
            width: Resources.Platform.width,
            height: Resources.Platform.height
        }) //Just do it! 


        this.scale = new Vector(3, 3)

        this.graphics.use(Resources.Platform.toSprite())
        this.body.collisionType = CollisionType.Fixed
    }
}