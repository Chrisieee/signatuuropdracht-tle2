import { Scene, Label, TextAlign, Keys, Vector, FontUnit, Color, BoundingBox } from "excalibur"
import { Resources } from '../resources.js'
import { Player } from '../character.js'
import { Ground } from '../ground.js'
import { Border } from '../border.js'
import { Ui } from '../ui.js'
import { PowerUp } from '../powerUp.js'
import { PopUp } from '../popup.js'
import { Sign } from '../sign.js'

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
        let border = new Border(1080, 3800)
        this.add(border)

        for (let i = 0; i < 7; i++) {
            const ground = new Ground(285 + 570 * i, 975)
            this.add(ground)
        }

        let sign = new Sign(700, 750, "Leiding nemen is niet een rol", "die ik normaal op me neem.")
        this.add(sign)

        let sign1 = new Sign(1400, 750, "Beter de leiding kunnen", "nemen door iedereen te betrekken.")
        this.add(sign1)

        let sign2 = new Sign(2100, 750, "Eerder aan de bel trekken op", "het moment dat het niet goed gaat.")
        this.add(sign2)

        let sign3 = new Sign(2800, 750, "Als ik denk dat iemand AI", "gebruikt eerder aanspreken.")
        this.add(sign3)

        this.player = new Player()
        this.add(this.player)

        this.powerup = new PowerUp()
        this.add(this.powerup)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 3800, 1080))

        this.ui = new Ui("1:1 TLE1")
        this.add(this.ui)
    }

    popup(kind) {
        this.popup = new PopUp(kind)
        this.add(this.popup)
    }
}