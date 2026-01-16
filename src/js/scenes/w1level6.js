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

export class W1Level6Scene extends Scene {

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

        let bg = new Bg("EmpBG")
        this.add(bg)

        const ground = new Ground(285, 975)
        this.add(ground)

        const ground2 = new Ground(3553, 975)
        this.add(ground2)

        const platform = new Platform(900, 600, "Ik had meer moeten nadenken", "over bepaalde onderdelen.")
        this.add(platform)

        const platform1 = new Platform(1800, 300, "Ik had tijd moeten nemen om hem", "later te verbeteren.")
        this.add(platform1)

        const platform2 = new Platform(2600, 0, "Ik vind sommige onderdelen", "nog erg lastig om te bedenken.")
        this.add(platform2)

        this.end = new End(3700, 415, 7)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, -1080, 3800, 1080))

        this.ui = new Ui("2:6 Empaty Map")
        this.add(this.ui)

        if (first === true) {
            this.beginpopup = new BeginPopUp(false, "low", [
                "Tijdens het maken van een empaty map kijk je naar het gedrag en",
                "gedachtes van de mogelijke gebruikers. Dit doe je om pains en",
                "gains te vinden om hier op in te kunnen spelen. Dit is een goeie",
                "methode om kansen te ontdekken waar je als bedrijf op in kunt spelen.",
                "Want als iets 'pijn' doet bij een gebruiker kan je het verbeteren om",
                "jezelf te onderscheiden van de concurrentie.",
                ""
            ])
            this.activepopup = true
            this.add(this.beginpopup)
        }
    }

    endPopup() {
        this.endpopup = new BeginPopUp(true, "low", [
            "Op mijn vorige opleiding heb ik ook een empathy map moeten maken",
            "alleen waren daar de pains en de gains het belangrijkste terwijl",
            "we die hier een beetje hebben los gelaten. In het boek was de empathy",
            "map ook een van de creative challenges. Ook is het bij deze methode",
            "erg belangrijk om te kijken naar de mensen die het product gaan",
            "gebruiken wat erg belangrijk is. Wel is een empathy map net als de",
            "user journey gebazeerd op aannames die nog wel getest moeten worden."
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
        this.engine.loadLevel7()
    }
}