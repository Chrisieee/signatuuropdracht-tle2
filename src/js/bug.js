import { Actor, Vector, CollisionType, DegreeOfFreedom } from "excalibur"
import { Resources } from './resources.js'

export class Bug extends Actor {

    #sprite

    constructor(kind, kind2, x, y) {
        super({ width: Resources.Bug.width, height: Resources.Bug.height }) //Just do it! 

        this.#sprite = Resources.Bug.toSprite()
        this.graphics.use(this.#sprite)

        this.kind = kind
        this.kind2 = kind2
        this.x = x
        this.y = y

        this.body.collisionType = CollisionType.Active
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation)
    }

    onInitialize() {
        this.pos = new Vector(-50 + Math.random() * 100, -60)
    }

    onPostUpdate() {
        if (this.pos.x <= -50) {
            this.vel = new Vector(50, 0)
        }
        else if (this.pos.x >= 50) {
            this.vel = new Vector(-50, 0)
        }
        else if (this.vel.x === 0) {
            this.vel = new Vector(50, 0)
        }
    }

    gotHit() {
        this.scene.bugPopup(this.kind, this.kind2, this.pos.clone().x + this.x, this.pos.clone().y + this.y - 200)
        this.actions.fade(0, 1000).callMethod(this.kill())
    }
}