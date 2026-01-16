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

export class W1Level2Scene extends Scene {

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

        let bg = new Bg("DeskBG")
        this.add(bg)

        const ground = new Ground(285, 975)
        this.add(ground)

        const ground1 = new Ground(2085, 975)
        this.add(ground1)

        const ground2 = new Ground(3553, 975)
        this.add(ground2)

        const platform = new Platform(800, 500, "Mijn deskresearch heb ik niet", "uitgebreid genoeg uitgevoerd.")
        this.add(platform)

        const platform1 = new Platform(1500, 200, "Ik had nog wat dieper in moeten", "gaan op de informatie die ik vond.")
        this.add(platform1)

        const platform2 = new Platform(2700, 400, "Voor het extra onderzoek had ik", "meer tijd moeten nemen.")
        this.add(platform2)

        this.end = new End(3700, 415, 3)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, -1080, 3800, 1080))

        this.ui = new Ui("2:2 Deskresearch")
        this.add(this.ui)

        if (first === true) {
            this.beginpopup = new BeginPopUp(false, "low", [
                "Tijdens het uitvoeren van deskresearch zoek je naar trends en haal je",
                "hier inzichten uit. Hierdoor kan je kansen en bedreigingen herkennen.",
                "Dit is heel belangrijk om te doen, want je kunt door het herkennen van",
                "deze onderdelen inspelen op de ontwikkelingen in de markt. Tijdens het",
                "uitvoeren van deskresearch moet je opletten op dat de bronnen die je",
                "gebruikt betrouwbaar zijn. Want als je bronnen niet betrouwbaar zijn",
                "zijn de trends die hieruit komen dit ook niet."
            ])
            this.activepopup = true
            this.add(this.beginpopup)
        }
    }

    endPopup() {
        this.endpopup = new BeginPopUp(true, "low", [
            "Dit kende ik al, omdat ik bij mijn vorige opleiding een DESTEP heb",
            "moeten maken. Dit zorgde ervoor dat ik dit niet heel leuk vond om te",
            "doen tijdens TLE. Wat ik wel heb geleerd na TLE1 is dat het misschien",
            "leuker zou zijn als ik beter het doel van de research duidelijk zou",
            "maken voor mezelf. Het feit dat je de verschillende trends ging gebruiken",
            "om een toekomst senario te schetsen was wel nieuw voor mij vooral,",
            "omdat het hier om heel ver in de toekomst ging en niet maar 5 jaar."
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
        this.engine.loadLevel3()
    }
}