import { Actor, Vector, CollisionType, Label, TextAlign, FontUnit, Color } from "excalibur"
import { Resources } from './resources.js'

export class PopUp extends Actor {

    constructor(kind, kind2, x, y, scale, sc) {
        super({ collisionType: CollisionType.PreventCollision })
        this.sprite = Resources.PopUp.toSprite()
        this.graphics.use(this.sprite)
        this.pos = new Vector(x, y)
        this.collider.clear()
        this.scale = new Vector(sc, sc)

        const label = new Label({
            text: kind,
            pos: new Vector(0, -20),
            font: Resources.BasicFont.toFont({
                unit: FontUnit.Px,
                size: 75,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        label.scale = new Vector(scale, scale)
        this.addChild(label)
        const label1 = new Label({
            text: kind2,
            pos: new Vector(0, 0),
            font: Resources.BasicFont.toFont({
                unit: FontUnit.Px,
                size: 75,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        label1.scale = new Vector(scale, scale)
        this.addChild(label1)

        this.timer = 360
    }

    onPostUpdate() {
        this.timer--

        if (this.timer === 0) {
            this.actions.fade(0, 500).callMethod(this.death())
        }
    }

    death() {
        this.kill()
    }
}