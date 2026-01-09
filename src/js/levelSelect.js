import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class LevelSelect extends Actor {

    constructor(x, y, level) {
        super({ width: Resources.Level.width, height: Resources.Level.height })

        this.graphics.use(Resources.Level.toSprite())
        this.pos = new Vector(x, y)
        this.scale = new Vector(1, 1)
        this.enableCapturePointer = true

        this.level = level
        console.log(this.level)

        this.events.on("pointerdown", (e) => { this.load() })
    }

    load(engine) {
        if (this.level === 1) {
            this.scene.engine.loadLevel1()
        } else if (this.level === 2) {

        }
    }
}