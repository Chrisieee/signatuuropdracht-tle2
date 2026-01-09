import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'

export class Ground extends Actor {
    constructor(x, y) {
        super({
            x, y,
            width: Resources.Ground.width,
            height: Resources.Ground.height
        })

        this.graphics.use(Resources.Ground.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.scale = new Vector(3, 3)
    }

    onInitialize() {

    }
}