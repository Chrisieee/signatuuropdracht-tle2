import { Actor, Vector, CollisionType, Label, TextAlign, FontUnit, Color } from "excalibur"
import { Resources } from './resources.js'

export class BeginPopUp extends Actor {

    constructor(end, h, kinds) {
        super({ collisionType: CollisionType.PreventCollision, z: 1000 })
        this.sprite = Resources.BeginPopUp.toSprite()
        this.graphics.use(this.sprite)
        this.collider.clear()
        this.scale = new Vector(10, 10)

        this.end = end
        if (this.end && h === "high") {
            this.pos = new Vector(1920 / 2 + 1920, -100)
        } else if (this.end) {
            this.pos = new Vector(1920 / 2 + 1920, 1080 / 2 + 100)
        } else {
            this.pos = new Vector(1920 / 2, 1080 / 2 + 100)
        }

        for (let i = 0; i < kinds.length; i++) {
            const label = new Label({
                text: kinds[i],
                pos: new Vector(0, -32 + i * 10),
                font: Resources.BasicFont.toFont({
                    unit: FontUnit.Px,
                    size: 50,
                    textAlign: TextAlign.Center,
                    color: Color.Black
                })
            })
            label.scale = new Vector(0.1, 0.1)
            this.addChild(label)
        }

        this.enableCapturePointer = true
        this.events.on("pointerdown", (e) => { this.death() })
    }

    death() {
        this.scene.activepopup = false
        if (this.end) {
            this.scene.loadNextLevel()
        }
        this.kill()
    }
}