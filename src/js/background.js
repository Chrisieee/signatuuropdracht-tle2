import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Bg extends Actor {
    constructor(bg) {
        super({ z: -1000 }) //Just do it! 
        this.bg = bg
    }

    onInitialize() {
        this.graphics.opacity = 0.5

        if (this.bg === "BookBG") {
            this.graphics.use(Resources.BookBG.toSprite())
            this.pos = new Vector(3800 / 2, 1080 / 2 + 850)
            this.scale = new Vector(5, 5)
        } else if (this.bg === "Tle1BG") {
            this.graphics.use(Resources.Tle1BG.toSprite())
            this.pos = new Vector(3800 / 2, 1080 / 2 + 400)
            this.scale = new Vector(3, 3)
        } else if (this.bg === "DeskBG") {
            this.graphics.use(Resources.DeskBG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(2, 2)
        } else if (this.bg === "UserBG") {
            this.graphics.use(Resources.UserBG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(3.5, 3.5)
        } else if (this.bg === "TestBG") {
            this.graphics.use(Resources.TestBG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(5, 5)
        } else if (this.bg === "OntwerpBG") {
            this.graphics.use(Resources.OntwerpBG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(3, 3)
        } else if (this.bg === "EmpBG") {
            this.graphics.use(Resources.EmpBG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(1, 1)
        } else if (this.bg === "Tle2BG") {
            this.graphics.use(Resources.Tle2BG.toSprite())
            this.pos = new Vector(3800 / 2, 1080 / 2 - 200)
            this.scale = new Vector(6.5, 6.5)
        } else if (this.bg === "BriefBG") {
            this.graphics.use(Resources.BriefBG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(3, 3)
        } else if (this.bg === "C8BG") {
            this.graphics.use(Resources.C8BG.toSprite())
            this.pos = new Vector(3800 / 2 - 200, 0)
            this.scale = new Vector(4, 4)
        } else if (this.bg === "StoryBG") {
            this.graphics.use(Resources.StoryBG.toSprite())
            this.pos = new Vector(3800 / 2, 200)
            this.scale = new Vector(6, 6)
        } else if (this.bg === "UsBG") {
            this.graphics.use(Resources.UsBG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(8.4, 8.4)
        } else if (this.bg === "AccesBG") {
            this.graphics.use(Resources.AccesBG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(1.1, 1.1)
        } else if (this.bg === "AccesBG") {
            this.graphics.use(Resources.AccesBG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(1.1, 1.1)
        } else if (this.bg === "AccesBG") {
            this.graphics.use(Resources.AccesBG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(1.1, 1.1)
        } else if (this.bg === "AccesBG") {
            this.graphics.use(Resources.AccesBG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(1.1, 1.1)
        } else if (this.bg === "AccesBG") {
            this.graphics.use(Resources.AccesBG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(1.1, 1.1)
        } else if (this.bg === "NextBG") {
            this.graphics.use(Resources.BG.toSprite())
            this.pos = new Vector(3800 / 2, 0)
            this.scale = new Vector(2, 2)
            this.graphics.opacity = 0.75
        } else {
            this.graphics.use(Resources.BG.toSprite())
            this.pos = new Vector(1920 / 2, 1080 / 2)
            this.scale = new Vector(1, 1)
            this.graphics.opacity = 0.75
        }
    }
}