import { Actor, Label, TextAlign, FontUnit, Color, Vector } from "excalibur"
import { Resources } from './resources.js'

export class LevelSelect extends Actor {

    level

    constructor(x, y, level) {
        super({ width: Resources.Level.width, height: Resources.Level.height })

        this.graphics.use(Resources.Level.toSprite())
        this.pos = new Vector(x, y)
        this.scale = new Vector(0.5, 0.5)
        this.enableCapturePointer = true

        this.level = level

        const label = new Label({
            text: `${level}`,
            pos: new Vector(0, -30),
            font: Resources.HeadFont.toFont({
                unit: FontUnit.Px,
                size: 150,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.addChild(label)

        this.events.on("pointerdown", (e) => { this.load() })
    }

    load(engine) {
        if (this.level === 1) {
            this.scene.engine.loadLevel1()
        } else if (this.level === 2) {
            this.scene.engine.loadLevel2()
        } else if (this.level === 3) {
            this.scene.engine.loadLevel3()
        } else if (this.level === 4) {
            this.scene.engine.loadLevel4()
        } else if (this.level === 5) {
            this.scene.engine.loadLevel5()
        } else if (this.level === 6) {
            this.scene.engine.loadLevel6()
        }
    }
}