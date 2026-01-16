import { Actor, Label, TextAlign, FontUnit, Color, Vector } from "excalibur"
import { Resources } from './resources.js'

export class LevelSelect extends Actor {

    level

    constructor(x, y, level) {
        super({ width: Resources.Level.width, height: Resources.Level.height })

        this.graphics.use(Resources.Level.toSprite())
        this.pos = new Vector(x, y)
        this.scale = new Vector(0.3, 0.3)
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
        } else if (this.level === 7) {
            this.scene.engine.loadLevel7()
        } else if (this.level === 8) {
            this.scene.engine.loadLevel8()
        } else if (this.level === 9) {
            this.scene.engine.loadLevel9()
        } else if (this.level === 10) {
            this.scene.engine.loadLevel10()
        } else if (this.level === 11) {
            this.scene.engine.loadLevel11()
        } else if (this.level === 12) {
            this.scene.engine.loadLevel12()
        } else if (this.level === 13) {
            this.scene.engine.loadLevel13()
        } else if (this.level === 14) {
            this.scene.engine.loadLevel14()
        } else if (this.level === 15) {
            this.scene.engine.loadLevel15()
        } else {
            this.scene.engine.loadStart()
        }
    }
}