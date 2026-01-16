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

export class W3Level1Scene extends Scene {

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

        let sign = new Sign(700, 750, "Ik ben beter in leiding nemen", "dan dat ik denk.")
        this.add(sign)

        let sign1 = new Sign(1400, 750, "Ik heb mezelf een stuk minder", "gelimiteerd in het geven van ideeën.")
        this.add(sign1)

        let sign2 = new Sign(2100, 750, "Ik heb beter de communicatie", "behouden ook in een rustiger team.")
        this.add(sign2)

        let sign3 = new Sign(2800, 750, "Ik ben beter geworden in soms echt", "even focussen op mijn eigen werk.")
        this.add(sign3)

        this.end = new End(3700, 415, 14)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 3800, 1080))

        this.ui = new Ui("4:1 Groei")
        this.add(this.ui)

        this.popup = new BeginPopUp(false, "low", [
            "Tijdens de eerste twee TLE's heb ik veel geleerd en gegroeit in mijn",
            "communicatie en bijdrage. Ik heb nog genoeg punten om aan te werken",
            "deze actiepunten komen in een later level nog naar voren.",
            "",
            "In dit level zal ik de belangrijkste punten waar ik in ben gegroeit",
            "benoemen.",
            ""
        ])
        this.activepopup = true
        this.add(this.popup)
    }

    loadNextLevel() {
        this.engine.loadLevel14()
    }
}