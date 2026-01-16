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

export class W2Level2Scene extends Scene {

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

        let bg = new Bg("BriefBG")
        this.add(bg)

        const ground = new Ground(285, 975)
        this.add(ground)

        const platform = new Platform(900, 600, "Ik had dit eerder willen doen", "in het proces.")
        this.add(platform)

        const platform1 = new Platform(1800, 300, "Ik had dit beter willen doen", "voor meer duidelijkheid.")
        this.add(platform1)

        const platform2 = new Platform(2600, 0, "Minder zelf moeten doen, maar", "meer als een team.")
        this.add(platform2)

        const platform3 = new EmptyPlatform(3553, 52)
        this.add(platform3)

        this.end = new End(3700, -415, 9)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, -1080, 3800, 1080))

        this.ui = new Ui("3:2 Debrief")
        this.add(this.ui)

        if (first === true) {
            this.beginpopup = new BeginPopUp(false, "low", [
                "Het schrijven van een debrief is heel belangrijk om te kijken of",
                "je de opdracht goed hebt begrepen. Dit kan je dan weer gebruiken om",
                "met de klant te testen of dit is wat ze zoeken en bedoelde tijdens",
                "het geven van de opdracht. Hierdoor ga je niet aan het werk met een",
                "project wat de opdrachtgever eigenlijk helemaal niet wilt hebben.",
                "Hierin staan de belangrijke punten die besproken zijn tijdens de",
                "opdracht brieving en de keuzes die je maakt als team."
            ])
            this.activepopup = true
            this.add(this.beginpopup)
        }
    }

    endPopup() {
        this.endpopup = new BeginPopUp(true, "high", [
            "Ik wist wel dat een debrief bestond, maar het daadwerkelijk maken",
            "van een heb ik nog nooit gedaan. Ik vond het soms wel moeilijk om",
            "te schrijven en om het goed over te laten komen.",
            "",
            "Hierbij kan ik het boek wat ik gelezen niet heel goed koppelen",
            "wel hadden ik de opzet van de debrief misschien wat meer visueel",
            "fijn willen maken."
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