import { Scene, Label, TextAlign, Keys, Vector, FontUnit, Color, Buttons } from "excalibur"
import { Resources } from '../resources.js'

export class W1Level5Scene extends Scene {

    constructor(engine) {
        super()

        const label = new Label({
            text: 'Level 5',
            pos: new Vector(1920 / 2, 50),
            font: Resources.HeadFont.toFont({
                unit: FontUnit.Px,
                size: 150,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.add(label)
    }

    onInitialize(engine) {

    }

    onPostUpdate(engine) {

    }
}