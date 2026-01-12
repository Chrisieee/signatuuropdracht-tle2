import { Actor, Vector, CollisionType, Label, TextAlign, FontUnit, Color } from "excalibur"
import { Resources } from './resources.js'

export class PopUp extends Actor {

    constructor(kind, x, y, scale) {
        super()

        const label = new Label({
            text: kind,
            pos: new Vector(x, y),
            font: Resources.BasicFont.toFont({
                unit: FontUnit.Px,
                size: 75,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.addChild(label)
        this.scale = new Vector(scale, scale)

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