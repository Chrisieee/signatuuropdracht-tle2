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
        this.scene.loadNextLevel()
    }
}