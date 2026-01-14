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

export class W1Level3Scene extends Scene {

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

        let border = new Border(2160, 3800)
        this.add(border)

        let bg = new Bg("UserBG")
        this.add(bg)

        const ground = new Ground(285, 975)
        this.add(ground)

        const ground2 = new Ground(3553, 975)
        this.add(ground2)

        const platform = new Platform(900, 600, "Ik vond het moeilijk om echt de", "toekomst in te denken.")
        this.add(platform)

        const platform1 = new Platform(1600, 400, "Het bedenken hoe een persoon denkt", "had ik beter kunnen doen.")
        this.add(platform1)

        const platform2 = new Platform(2500, 800, "Ik beter kunnen ingaan op wat de", "persoon ervaard tijdens dit punt.")
        this.add(platform2)

        this.end = new End(3700, 415, 4)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, -1080, 3800, 1080))

        this.ui = new Ui("1:3 User Journey Map")
        this.add(this.ui)

        if (first === true) {
            this.beginpopup = new BeginPopUp(false, [
                "Tijdens het maken van een User Journey Map kijk je naar de manier",
                "waarop je klant bij jouw product komt, hem gebrukt, maar ook naar hoe",
                "je de nazorg doet. Je kijkt dan naar mogelijke pijnpunten die zich voor",
                "kunnen doen tijdens deze journey. Dit zijn punten waar kansen liggen",
                "en waar je je kunt onderschijden van de concurrentie. Deze map word",
                "gemaakt op basis van aannames die je later zal moeten gaan onderzoeken.",
                ""
            ])
            this.activepopup = true
            this.add(this.beginpopup)
        }
    }

    endPopup() {
        this.endpopup = new BeginPopUp(true, [
            "Tijdens mijn vorige opleiding heb ik ook User Journey Maps moeten",
            "maken. Alleen heb ik tijdens deze TLE meer geleerd hoe ik dit kan",
            "doen terwijl de mogelijke gebruikers heel lang in de toekomst leven.",
            "Dit vond ik lastig, maar vond ik wel een interessante uitdaging. In",
            "het boek kwam naar voren dat visueel goed werkt om en ik denk dat",
            "dit bij een User Journey ook heel goed kan werken. Door bijvoorbeeld",
            "de gevoelens visueel te maken word het ook fijner om te zien."
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