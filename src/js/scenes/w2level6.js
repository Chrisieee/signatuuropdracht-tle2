import { Scene, BoundingBox } from "excalibur"
import { Player } from '../character.js'
import { Ground } from '../ground.js'
import { Border } from '../border.js'
import { Ui } from '../ui.js'
import { End } from '../end.js'
import { Bg } from '../background.js'
import { BeginPopUp } from '../beginpopup.js'
import { PopUp } from '../popup.js'
import { Platform } from '../platform.js'
import { EmptyPlatform } from '../emptyplatform.js'

export class W2Level6Scene extends Scene {

    player
    end
    ui
    activepopup
    endactive

    constructor(engine) {
        super()

        this.activepopup = false
        this.endactive = false
    }

    onActivate(context) {
        this.resetScene(true)
    }

    resetScene(first) {
        this.clear()

        let border = new Border(1080, 3800)
        this.add(border)

        let bg = new Bg("AccesBG")
        this.add(bg)

        const ground = new Ground(285, 975)
        this.add(ground)

        const platform = new Platform(1200, 500, "Ik had beter naar de aandachtspunten", "willen kijken voor de codereview.")
        this.add(platform)

        const platform1 = new Platform(2200, 100, "Ik had nog meer tijd willen nemen", "zodat het helemaal toegangelijk is.")
        this.add(platform1)

        const platform3 = new EmptyPlatform(3553, 52)
        this.add(platform3)

        this.end = new End(3700, -415, 13)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, -1080, 3800, 1080))

        this.ui = new Ui("3:6 Accessibility")
        this.add(this.ui)

        if (first === true) {
            this.beginpopup = new BeginPopUp(false, "low", [
                "Accessibility is een heel belangrijk onderwerp voor developers.",
                "Het is erg belangrijk dat het voor iedereen toegankelijk is en dat",
                "iedereen je app/website of wat dan ook kan gebruiken. Hierbij moet",
                "je als Web developer letten op de WCAG richtlijnen hier staan regels",
                "in die belangrijk zijn zodat iedereen je website kan gebruiken.",
                "",
                ""
            ])
            this.activepopup = true
            this.add(this.beginpopup)
        }
    }

    endPopup() {
        this.endpopup = new BeginPopUp(true, "high", [
            "Ik kende voor TLE2 wel een aantal punten zo was ik tijdens een CLE naar",
            "een event geweest over Accessibility geweest waar verschillende punten",
            "werden benoemt. Wel waren er nog heel veel nieuw en hierom was ik heel",
            "blij dat we een checklist kregen om te kijken wat er allemaal in moest.",
            "Hierbij kan ik het boek wat ik gelezen niet heel goed koppelen. Wel is",
            "het heel belangrijk om te zorgen dat iedereen het kan gebruiken en dus",
            "denkt aan de eind gebruiker."
        ])
        this.activepopup = true
        this.add(this.endpopup)
    }

    activateEnd() {
        this.endactive = true
    }

    bugPopup(kind, kind2, x, y) {
        this.popup = new PopUp(kind, kind2, x, y, 0.1, 3)
        this.add(this.popup)
    }
}