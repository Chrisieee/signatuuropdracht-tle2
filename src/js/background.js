import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Bg extends Actor {
    constructor(bg) {
        super({ z: -1000 }) //Just do it! 
        this.bg = bg
    }

    onInitialize() {
        if (this.bg === "BookBG") {
            this.graphics.use(Resources.BookBG.toSprite())
            this.pos = new Vector(3800 / 2, 1080 / 2 + 850)
            this.scale = new Vector(5, 5)
            this.graphics.opacity = 0.5
        }

        if (this.bg === "Tle1BG") {
            this.graphics.use(Resources.Tle1BG.toSprite())
            this.pos = new Vector(3800 / 2, 1080 / 2 + 400)
            this.scale = new Vector(3, 3)
            this.graphics.opacity = 0.5
        }

        if (this.bg === "DeskBG") {
            this.graphics.use(Resources.DeskBG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(2, 2)
            this.graphics.opacity = 0.5
        }

        if (this.bg === "UserBG") {
            this.graphics.use(Resources.UserBG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(3.5, 3.5)
            this.graphics.opacity = 0.5
        }
    }
}