import { Actor, Label, TextAlign, FontUnit, Color, Vector } from "excalibur"
import { Resources } from './resources.js'

export class End extends Actor {

    level

    constructor(x, y, level) {
        super({ width: Resources.End.width - 10, height: Resources.End.height })

        this.graphics.use(Resources.End.toSprite())
        this.pos = new Vector(x, y)
        this.scale = new Vector(3, 3)

        this.level = level
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