import { Actor, Vector, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { Bug } from './bug.js'

export class Platform extends Actor {
    constructor(x, y, kind, kind2) {
        super({
            x, y,
            width: Resources.Platform.width,
            height: Resources.Platform.height
        }) //Just do it! 


        this.scale = new Vector(3, 3)

        this.x = x
        this.y = y
        this.kind = kind
        this.kind2 = kind2

        this.graphics.use(Resources.Platform.toSprite())
        this.body.collisionType = CollisionType.Fixed
    }

    onInitialize() {
        const enemy = new Bug(this.kind, this.kind2, this.x, this.y)
        this.addChild(enemy)
    }
}