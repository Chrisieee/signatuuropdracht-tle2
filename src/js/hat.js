import { Actor, Vector, Keys, CollisionType } from "excalibur"
import { Resources } from './resources.js'
import { friendsGroup } from "./collisiongroup.js"

export class Hat extends Actor {
    sprite

    constructor() {
        super({
            width: Resources.Hat.width,
            height: Resources.Hat.height,
            collisionGroup: friendsGroup
        })

        this.sprite = Resources.Hat.toSprite()
        this.graphics.use(this.sprite)
    }

    death() {
        this.kill()
    }

}