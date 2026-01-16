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

export class W1Level5Scene extends Scene {

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

        let bg = new Bg("OntwerpBG")
        this.add(bg)

        const ground = new Ground(285, 975)
        this.add(ground)

        const ground2 = new Ground(3553, 975)
        this.add(ground2)

        const platform = new Platform(900, 600, "Ik had meer moeten leren over", "figma zodat het sneller ging.")
        this.add(platform)

        const platform1 = new Platform(1800, 300, "Ik had meer tijd moeten maken", "hiervoor voor meer duidelijkheid.")
        this.add(platform1)

        const platform2 = new Platform(2600, 600, "Duidelijkere styleguide zodat", "het voor iedereen duidelijk is.")
        this.add(platform2)

        this.end = new End(3700, 415, 6)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, -1080, 3800, 1080))

        this.ui = new Ui("2:5 Ontwerpen")
        this.add(this.ui)

        if (first === true) {
            this.beginpopup = new BeginPopUp(false, "low", [
                "Het onderdeel ontwerpen bestaan uit het maken van low en high fidelity",
                "wireframes, maar ook over het maken van prototypes wat je op",
                "verschillende manieren kan aanpakken. Hier gaat het vooral over het",
                "maken van low fidelity wireframes op papier die je snel schetst. En",
                "over high fidelity wireframes die we maken of figma die uiteideljk",
                "worden samengevoegt tot een prototype.",
                ""
            ])
            this.activepopup = true
            this.add(this.beginpopup)
        }
    }

    endPopup() {
        this.endpopup = new BeginPopUp(true, "low", [
            "Op mijn vorige opleiding heb ik wel eens prototypes moeten maken",
            "alleen zat de focus dan meer op een MVP prototype en niet zo op",
            "wireframes. Dit is dus wel iets anders dan wat ik toen heb gedaan.",
            "Ook heb ik het toen vaak gemaakt in Adobe XD dus figma was voor mij",
            "erg nieuw. Wel komt het belang van het visueel maken goed terug in",
            "het boek, maar ook het belang van vroeg testen wat ook een grote",
            "reden is om een prototype te ontwerpen is."
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

    loadNextLevel() {
        this.engine.loadLevel6()
    }
}