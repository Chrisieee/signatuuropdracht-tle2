import { Scene, Label, TextAlign, Keys, Vector, FontUnit, Color, Buttons } from "excalibur"
import { Resources } from '../resources.js'
import { LevelSelect } from '../levelSelect.js'

export class World1Scene extends Scene {

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
            text: 'TLE1',
            pos: new Vector(1920 / 2, 250),
            font: Resources.HeadFont.toFont({
                unit: FontUnit.Px,
                size: 130,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.add(label1)

        // for (let i = 0; i < 6; i++) {
        //     const levelSelect = new LevelSelect(100, 100, i + 1)
        //     this.add(levelSelect)
        // }

        const levelSelect = new LevelSelect(100, 100, 1)
        this.add(levelSelect)
    }

    onInitialize(engine) {

    }

    onPostUpdate(engine) {

    }
}