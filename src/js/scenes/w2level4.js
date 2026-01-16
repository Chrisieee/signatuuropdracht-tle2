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

export class W2Level4Scene extends Scene {

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

        let bg = new Bg("StoryBG")
        this.add(bg)

        const ground = new Ground(285, 975)
        this.add(ground)

        const platform = new Platform(800, 500, "Ik had een beetj half leiding", "dit had ik beter kunnen doen.")
        this.add(platform)

        const platform1 = new Platform(1700, 200, "Ik had eerder de stift kunnen pakken", "om te tekenen.")
        this.add(platform1)

        const platform2 = new Platform(2500, 400, "Ik had iedereen beter kunnen betrekken", "zodat iedereens gehoord werd.")
        this.add(platform2)

        const platform3 = new EmptyPlatform(3553, 52)
        this.add(platform3)

        this.end = new End(3700, -415, 11)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, -1080, 3800, 1080))

        this.ui = new Ui("3:4 Storyboard")
        this.add(this.ui)

        if (first === true) {
            this.beginpopup = new BeginPopUp(false, "low", [
                "Het maken van een storyboard kan goed helpen om ideeën op papier",
                "te zetten. Dit doe je meestal voor een verhaal bijvoorbeeld voor een",
                "film. Maar je kan het ook gebruiken om het proces tijdens het gebruik",
                "van een product te laten zien of om de pagina's in een app te laten zien. ",
                "Tijdens TLE hebben we het gebruikt om de flow van de app op papier",
                "te zetten.",
                ""
            ])
            this.activepopup = true
            this.add(this.beginpopup)
        }
    }

    endPopup() {
        this.endpopup = new BeginPopUp(true, "high", [
            "Het maken van een storyboard heb ik wel al eens gedaan als MVP tijdens",
            "mijn vorige opleiding, maar deze vorm van een storyboard maken was",
            "helemaal nieuw voor mij.",
            "",
            "Uit het boek komt hier ook weer het visuele naar voren, omdat dit een",
            "groot doel is van het maken van een storyboard. Hiermee kan je de flow",
            "goed zichtbaar maken en zorgen dat je allemaal op een lijn zit."
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