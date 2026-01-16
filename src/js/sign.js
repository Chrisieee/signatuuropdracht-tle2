import { Actor, Vector, CollisionType, Label, TextAlign, FontUnit, Color } from "excalibur"
import { Resources } from './resources.js'
import { PopUp } from './popup.js'

export class Sign extends Actor {

    kind
    kind2

    constructor(x, y, kind, kind2) {
        super({
            width: Resources.Sign.width,
            height: Resources.Sign.height,
            collisionType: CollisionType.Passive,
            z: -500,
        })

        this.sprite = Resources.Sign.toSprite()
        this.graphics.use(this.sprite)
        this.scale = new Vector(3, 3)

        this.pos = new Vector(x, y)
        this.kind = kind
        this.kind2 = kind2
        this.addTag("sign")
    }

    showPopUp() {
        this.popup = new PopUp(this.kind, this.kind2, 0, -70, 0.1, 1)
        this.addChild(this.popup)
    }
}