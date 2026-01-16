import { Scene, BoundingBox } from "excalibur"
import { Player } from '../character.js'
import { Ground } from '../ground.js'
import { Border } from '../border.js'
import { Ui } from '../ui.js'
import { PowerUp } from '../powerUp.js'
import { Sign } from '../sign.js'
import { End } from '../end.js'
import { Bg } from '../background.js'
import { BeginPopUp } from '../beginpopup.js'

export class W3Level3Scene extends Scene {

    player
    end
    ui
    activepopup

    constructor(engine) {
        super()

        this.activepopup = false
        this.endactive = true
    }

    onActivate(context) {
        this.resetScene()
    }

    resetScene(first) {
        this.clear()

        let border = new Border(1080, 3800)
        this.add(border)

        let bg = new Bg("NextBG")
        this.add(bg)

        for (let i = 0; i < 7; i++) {
            const ground = new Ground(285 + 570 * i, 975)
            this.add(ground)
        }

        let sign = new Sign(700, 750, "Ik had strenger moeten zijn,", "omdat ze me vertrouwen met de rol.")
        this.add(sign)

        let sign1 = new Sign(1400, 750, "Nog meer de leidings rol pakken", "zodat er echt een leider is.")
        this.add(sign1)

        let sign2 = new Sign(2100, 750, "Beter mensen aanspreken", "als dit nodig is.")
        this.add(sign2)

        let sign3 = new Sign(2800, 750, "Misschien volgende keer iemand", "anders de rol laten pakken.")
        this.add(sign3)

        this.end = new End(3700, 415, 16)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 3800, 1080))

        this.ui = new Ui("4:3 Toekomst")
        this.add(this.ui)

        this.popup = new BeginPopUp(false, "low", [
            "Tijdens deze TLE gingen we aan de slag voor natuurmonumenten. Het",
            "was super tof om voor een opdrachtgever te werken, want dit vond",
            "ik een super toffe kans. Wel gaf dit ook wel weer wat druk om iets",
            "moois te leveren.",
            "Uit het boek paste deze TLE het experimenten goed, omdat we het op",
            "tijd moesten testen voor we heel veel tijd hadden geinvesteerd. Ook",
            "moesten we niet te snel ideeën afschrijven om een goed idee te maken."
        ])
        this.activepopup = true
        this.add(this.popup)
    }
}