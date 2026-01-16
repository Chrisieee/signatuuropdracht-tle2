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

export class W3Level2Scene extends Scene {

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

        let sign = new Sign(700, 750, "Testen: Dit is heel belangrijk, maar", " heb ik zeker nog wat werk aan.")
        this.add(sign)

        let sign1 = new Sign(1400, 750, "Ontwerpen: Dit vind ik heel leuk en", "ben ik ook wel bekwaam in.")
        this.add(sign1)

        let sign2 = new Sign(2100, 750, "Crazy 8's: Vind ik soms wel lastig,", "maar kan wel tot goeie ideeën leiden.")
        this.add(sign2)

        let sign3 = new Sign(2800, 750, "Storyboard: Heb ik tijdens TLE2 al", "een extra keer toegepast en is fijn.")
        this.add(sign3)

        this.end = new End(3700, 415, 15)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 3800, 1080))

        this.ui = new Ui("4:2 Toolkit")
        this.add(this.ui)

        this.popup = new BeginPopUp(false, "low", [
            "Tijdens de eerste twee TLE's heb ik nieuwe methodes geleerd, maar ook",
            "methodes op andere manieren geleerd te gebruiken. Hiervan heb ik veel",
            "geleerd en kan ik ook zeker meer over leren. De ene methode gaat me",
            "beter af dan de andere.",
            "",
            "In dit level zal ik de methodes benoemen waar ik het meeste interesse",
            "in heb en welke ik dus met name mee neem in mijn toolkit.",
        ])
        this.activepopup = true
        this.add(this.popup)
    }

    loadNextLevel() {
        this.engine.loadLevel15()
    }
}