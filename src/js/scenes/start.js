import { Scene, Label, TextAlign, Keys, Vector, FontUnit, Color, Buttons } from "excalibur"
import { Resources } from '../resources.js'
import { Bg } from '../background.js'

export class StartGameScene extends Scene {

    #label2
    #label3

    constructor(engine) {
        super()

        let bg = new Bg()
        this.add(bg)

        const label = new Label({
            text: 'Signatuuropdracht',
            pos: new Vector(1920 / 2, 1080 / 3 - 100),
            font: Resources.HeadFont.toFont({
                unit: FontUnit.Px,
                size: 150,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.add(label)

        const label1 = new Label({
            text: 'Christa Pol',
            pos: new Vector(1920 / 2, 1080 / 2 - 50),
            font: Resources.HeadFont.toFont({
                unit: FontUnit.Px,
                size: 130,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.add(label1)

        this.#label2 = new Label({
            text: 'Druk op enter om door te gaan',
            pos: new Vector(1920 / 2, 1080 / 2 + 200),
            font: Resources.BasicFont.toFont({
                size: 70,
                unit: FontUnit.Px,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.add(this.#label2)

        this.#label3 = new Label({
            text: 'Klik hier voor levelselect',
            pos: new Vector(1920 / 2, 1080 / 2 + 400),
            font: Resources.BasicFont.toFont({
                size: 70,
                unit: FontUnit.Px,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.add(this.#label3)

        this.#label3.events.on("pointerdown", (e) => { this.load() })
    }

    onPostUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Enter)) {
            engine.loadLevel0()
        }
    }

    load() {
        this.engine.loadLevelSelect()
    }
}