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

        let sign = new Sign(700, 750, "Tijdens de volgende TLE ga ik beter", "mensen aanspreken als ik leider ben.")
        this.add(sign)

        let sign1 = new Sign(1400, 750, "Tijdens de volgende TLE ga ik beter", "code afstemmen met mijn team.")
        this.add(sign1)

        let sign2 = new Sign(2100, 750, "Tijdens de volgende TLE ga ik mijn", "dingen nog een keer zelf testen.")
        this.add(sign2)

        let sign3 = new Sign(2800, 750, "Tijdens de volgende TLE ga ik beter", "nadenken of ik de leider wil zijn.")
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
            "Ik heb een hoop geleerd tijdens de eerste twee TLE's van dit jaar",
            "maar er zijn zeker nog een hoop dingen die beter kunnen. Deze heb ik",
            "in korte actiepunten gezet. Hier ga ik aan willen werken tijdens de",
            "volgende TLE.",
            "",
            "In dit level zal ik een aantal van deze actiepunten voor de volgende",
            "TLE benoemen.",
        ])
        this.activepopup = true
        this.add(this.popup)
    }

    loadNextLevel() {
        this.engine.loadStart()
    }
}