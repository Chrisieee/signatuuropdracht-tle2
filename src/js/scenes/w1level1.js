import { Scene, Label, TextAlign, Keys, Vector, FontUnit, Color, BoundingBox } from "excalibur"
import { Resources } from '../resources.js'
import { Player } from '../character.js'
import { Ground } from '../ground.js'
import { Border } from '../border.js'
import { Ui } from '../ui.js'

export class W1Level1Scene extends Scene {

    player

    constructor(engine) {
        super()
    }

    onActivate(context) {
        this.clear()
        this.resetScene()
    }

    resetScene() {
        let border = new Border()
        this.add(border)

        for (let i = 0; i < 7; i++) {
            const ground = new Ground(285 + 570 * i, 975)
            this.add(ground)
        }

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, -1080, 3440, 1080))

        this.ui = new Ui("level 1")
        this.add(this.ui)
    }
}