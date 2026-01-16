import { Scene, BoundingBox } from "excalibur"
import { Player } from '../character.js'
import { Ground } from '../ground.js'
import { Border } from '../border.js'
import { Ui } from '../ui.js'
import { BeginPopUp } from '../beginpopup.js'
import { Sign } from '../sign.js'
import { End } from '../end.js'
import { Bg } from '../background.js'

export class BookScene extends Scene {

    player
    end
    ui
    activepopup

    constructor() {
        super()

        this.activepopup = false
        this.endactive = false
    }

    onActivate(context) {
        this.resetScene()
    }

    resetScene(first) {
        this.clear()

        let border = new Border(1080, 3800)
        this.add(border)

        let bg = new Bg("BookBG")
        this.add(bg)

        for (let i = 0; i < 7; i++) {
            const ground = new Ground(285 + 570 * i, 975)
            this.add(ground)
        }

        let sign = new Sign(700, 750, "Visueel maken werkt heel", "goed om ideeën over te brengen.")
        this.add(sign)

        let sign1 = new Sign(1400, 750, "'Change favors people who do lots", "of experiments and pay attention.'")
        this.add(sign1)

        let sign2 = new Sign(2100, 750, "Action Catalyst hier stonden veel", "manieren om je een duwtje te geven.")
        this.add(sign2)

        let sign3 = new Sign(2800, 750, "Je moet niet te vroeg je ideeën", "bekritiseren en daardoor afstrepen.")
        this.add(sign3)

        this.end = new End(3700, 415, 1)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 3800, 1080))

        this.ui = new Ui("1:1 Nachtkastboek")
        this.add(this.ui)

        this.popup = new BeginPopUp(false, "low", [
            "Creativiteit is iets wat je kunt leren terwijl veel mensen",
            "denken dat dit iets is wat in je moet zitten als persoon.",
            "Op het gebied van creative confident gaat het vooral over",
            "het durven beginnen en het naar buiten brengen van een idee.",
            "Hierbij hoort ook een stukje durven falen, want hoe eerder je",
            "“faalt” hoe eerder je kunt leren dat je idee beter ontwikkeld",
            "kan worden zodat je niet al je geld en tijd investeert in 1 idee."
        ])
        this.activepopup = true
        this.add(this.popup)
    }

    endPopup() {
        this.endpopup = new BeginPopUp(true, "low", [
            "Van de belangrijkste inzichten heb ik een aantal dingen al kunnen",
            "toepassen tijdens TLE. Zo heb ik om mijn idee over te brengen aan",
            "mijn team een storyboard gemaakt zodat het visueel zou zijn. Ook",
            "Heb ik mezelf proberen uit te dagen door nieuwe dingen te proberen.",
            "Daarnaast heb ik geprobeerd om mijn ideeën niet te snel af te strepen",
            "wel kan dit nog beter. De action catalyst en het expirimenten had ik",
            "nog meer kunnen toepassen tijdens de eerste twee TLE's."
        ])
        this.activepopup = true
        this.add(this.endpopup)
    }

    activateEnd() {
        this.endactive = true
    }

    loadNextLevel() {
        this.engine.loadLevel1()
    }

}