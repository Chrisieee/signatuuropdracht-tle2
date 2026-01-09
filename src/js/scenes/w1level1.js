import { Scene, Label, TextAlign, Keys, Vector, FontUnit, Color, Buttons } from "excalibur"
import { Resources } from '../resources.js'

export class W1Level1Scene extends Scene {

    constructor(engine) {
        super()

        const label = new Label({
            text: 'Wereld 1',
            pos: new Vector(1920 / 2, 100),
            font: Resources.HeadFont.toFont({
                unit: FontUnit.Px,
                size: 150,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.add(label)

        const label1 = new Label({
            text: 'Level 1',
            pos: new Vector(1920 / 2, 250),
            font: Resources.HeadFont.toFont({
                unit: FontUnit.Px,
                size: 130,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.add(label1)
    }

    onInitialize(engine) {

    }

    onPostUpdate(engine) {

    }
}