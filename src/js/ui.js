import { ScreenElement, Label, TextAlign, Vector, FontUnit, Color, } from "excalibur"
import { Resources } from './resources.js'


export class Ui extends ScreenElement {

    constructor(text) {
        super({ z: 1000 }) //Just do it! 

        const label = new Label({
            text: text,
            pos: new Vector(1920 / 2, 50),
            font: Resources.HeadFont.toFont({
                unit: FontUnit.Px,
                size: 125,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.addChild(label)
    }
}