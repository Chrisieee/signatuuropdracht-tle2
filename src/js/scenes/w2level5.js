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

export class W2Level5Scene extends Scene {

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

        let bg = new Bg("UsBG")
        this.add(bg)

        const ground = new Ground(285, 975)
        this.add(ground)

        const platform = new Platform(800, 450, "Ik had de acceptatiecriteria beter", "uit willen schrijven en overleggen.")
        this.add(platform)

        const platform1 = new Platform(1700, 50, "Ik had de definition of done beter", "uit willen schrijven en overleggen.")
        this.add(platform1)

        const platform2 = new Platform(2600, -350, "De User Stories overlapte", "soms te veel.")
        this.add(platform2)

        const platform3 = new EmptyPlatform(3553, 52)
        this.add(platform3)

        this.end = new End(3700, -415, 12)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, -1080, 3800, 1080))

        this.ui = new Ui("3:5 User Stories")
        this.add(this.ui)

        if (first === true) {
            this.beginpopup = new BeginPopUp(false, "low", [
                "Het schrijven van User Storries helpen je bij het bedenken wat je",
                "je allemaal moet gaan maken. Dit is een grote stap in het maken van",
                "een planning voor tijdens de technische sprints. Hierbij is het belangrijk",
                "om de behoefte van de gebruiker duidelijk te maken. Ook moet je goeie",
                "acceptatie criteria en definition of done schrijven zodat het voor het",
                "hele team duidelijk is waar de story over gaat.",
                ""
            ])
            this.activepopup = true
            this.add(this.beginpopup)
        }
    }

    endPopup() {
        this.endpopup = new BeginPopUp(true, "high", [
            "User Stories kende ik voor deze opleiding helemaal nog niet, omdat",
            "dit meer voor technisch vlak is. Welke kende ik het natuurlijk al van",
            "ontwerpen ut de eerste. ",
            "",
            "Hierbij kan ik het boek wat ik gelezen niet heel goed koppelen. Wel is",
            "het heel belangrijk om de behoefte van de gebruiker voor ogen te",
            "hebben en dit kwam wel belangrijk in het boek."
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
        this.engine.loadLevel12()
    }
}