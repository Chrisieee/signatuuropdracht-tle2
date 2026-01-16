import { Scene, Label, TextAlign, Keys, Vector, FontUnit, Color, Buttons } from "excalibur"
import { Resources } from '../resources.js'
import { LevelSelect } from '../levelSelect.js'
import { Bg } from '../background.js'

export class LevelSelectScene extends Scene {

    constructor(engine) {
        super()

        let bg = new Bg()
        this.add(bg)

        const label = new Label({
            text: 'Wereld 1 (Boek)',
            pos: new Vector(1920 / 2, 50),
            font: Resources.HeadFont.toFont({
                unit: FontUnit.Px,
                size: 100,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.add(label)

        const levelSelect0 = new LevelSelect(1920 / 2, 200, 0)
        this.add(levelSelect0)


        const label1 = new Label({
            text: 'Wereld 2 (TLE1)',
            pos: new Vector(1920 / 2, 300),
            font: Resources.HeadFont.toFont({
                unit: FontUnit.Px,
                size: 100,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.add(label1)

        for (let i = 0; i < 6; i++) {
            const levelSelect = new LevelSelect(500 + i * 200, 450, i + 1)
            this.add(levelSelect)
        }


        const label2 = new Label({
            text: 'Wereld 3 (TLE2)',
            pos: new Vector(1920 / 2, 550),
            font: Resources.HeadFont.toFont({
                unit: FontUnit.Px,
                size: 100,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.add(label2)

        for (let i = 0; i < 6; i++) {
            const levelSelect = new LevelSelect(500 + i * 200, 700, i + 7)
            this.add(levelSelect)
        }


        const label3 = new Label({
            text: 'Wereld 4 (Toekomst)',
            pos: new Vector(1920 / 2, 800),
            font: Resources.HeadFont.toFont({
                unit: FontUnit.Px,
                size: 100,
                textAlign: TextAlign.Center,
                color: Color.Black
            })
        })
        this.add(label3)

        for (let i = 0; i < 3; i++) {
            const levelSelect = new LevelSelect(775 + i * 200, 950, i + 13)
            this.add(levelSelect)
        }

    }
}