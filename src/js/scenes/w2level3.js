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

export class W2Level3Scene extends Scene {

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

        let bg = new Bg("C8BG")
        this.add(bg)

        const ground = new Ground(285, 975)
        this.add(ground)

        const platform = new Platform(800, 500, "Ik vond het moeilijk omdat ik", "in app formaat dacht.")
        this.add(platform)

        const platform1 = new Platform(1700, 200, "Ik blokeerde mezelf in het", "creatieve proces.")
        this.add(platform1)

        const platform2 = new Platform(2500, -100, "Ik had creatiever willen", "denken voor betere ideeën.")
        this.add(platform2)

        const platform3 = new EmptyPlatform(3553, 52)
        this.add(platform3)

        this.end = new End(3700, -415, 10)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, -1080, 3800, 1080))

        this.ui = new Ui("3:3 Crazy 8's")
        this.add(this.ui)

        if (first === true) {
            this.beginpopup = new BeginPopUp(false, "low", [
                "Dit is een methode om snel ideeën te bedenken voor een probleem.",
                "Je schets in 1 minuut een variant om een probleem op te lossen",
                "en dit doe je voor 8 schetsen. Hierdoor heb je in minder dan 10 min",
                "8 verschillende ideeën. Na de Crazy 8's gingen we aan de slag met",
                "Solution Sketches waarbij je een van deze ideeën uit ging werken in",
                "een soort mini story board. Hierdoor kon je het idee goed overbrengen.",
                ""
            ])
            this.activepopup = true
            this.add(this.beginpopup)
        }
    }

    endPopup() {
        this.endpopup = new BeginPopUp(true, "high", [
            "De Crazy 8's heb ik op mijn vorige opleiding al wel gedaan alleen",
            "vond ik het tijdens TLE lastiger, omdat ik me een beetje geblokeerd",
            "voelde omdat ik te veel in app vorm dacht. De Big Ideas en Solution",
            "Sketches waren wel nieuw voor mij. Uit het boek komt hier ook weer",
            "het visuele naar voren, maar ook het niet te snel afstrepen van",
            "ideeën. Dit vond ik wel lastig, want ik merkte dat ik in mijn hoofd",
            "toch dingen afstreepte af en toe some bewust en soms onbewust."
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
        this.engine.loadLevel10()
    }
}