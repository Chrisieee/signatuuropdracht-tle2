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

export class W1Level4Scene extends Scene {

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

        let bg = new Bg("TestBG")
        this.add(bg)

        const ground = new Ground(285, 975)
        this.add(ground)

        const ground2 = new Ground(3553, 975)
        this.add(ground2)

        const platform = new Platform(900, 600, "Ik had beter door moeten vragen", "zodat ik nog betere inzichten had.")
        this.add(platform)

        const platform1 = new Platform(1800, 800, "Ik had meer interviews moeten", "uitvoeren voor meer informatie.")
        this.add(platform1)

        const platform2 = new Platform(2600, 600, "Voorbereiding had nog beter", "gekunt, zodat ik meer houvast had.")
        this.add(platform2)

        this.end = new End(3700, 415, 5)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, -1080, 3800, 1080))

        this.ui = new Ui("2:4 Testen")
        this.add(this.ui)

        if (first === true) {
            this.beginpopup = new BeginPopUp(false, "low", [
                "Het testen van je concept kan je op veel verschillende manieren doen",
                "zo kan je klant gesprekken doen, prototype testen, A/B test uitvoeren,",
                "maar je kunt ook een nep advertentie uitzetten. En zo zijn er nog wel",
                "veel meer methodes om een test uit te voeren. Het belangrijkste tijdens",
                "het testen is het zeker zijn van dat je test op je doelgroep. Als je dit",
                "niet doet zijn de resultaten namelijk niet heel betrouwbaar. Hier gaat",
                "het meer over interviewen met een prototype als ondersteuning."
            ])
            this.activepopup = true
            this.add(this.beginpopup)
        }
    }

    endPopup() {
        this.endpopup = new BeginPopUp(true, "low", [
            "Tijdens mijn vorige opleiding heb ik ook testen moeten uitvoeren.",
            "Hier heb ik alleen altijd de makkelijke weg gekozen. Zo deed ik vaak",
            "testen die ik vanuit mijn eigen laptop kon doen zodat ik niet naar",
            "buiten hoefde. Dit heb ik namelijk altijd lastig gevonden. Ik heb",
            "tijdens TLE en gedeeltelijk door mijn boek beter geleerd om naar",
            "buiten te gaan, omdat je beter kan leren dat het niet werkt dan dat",
            "overtuigt bent van wel en er veel tijd en geld in gaat investeren."
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