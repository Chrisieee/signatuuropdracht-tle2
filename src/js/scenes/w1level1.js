import { Scene, BoundingBox } from "excalibur"
import { Player } from '../character.js'
import { Ground } from '../ground.js'
import { Border } from '../border.js'
import { Ui } from '../ui.js'
import { PowerUp } from '../powerUp.js'
import { Sign } from '../sign.js'
import { End } from '../end.js'
import { Bg } from '../background.js'
import { BeginPopUp } from '../beginpopup.js'

export class W1Level1Scene extends Scene {

    player
    end
    ui
    activepopup

    constructor(engine) {
        super()

        this.activepopup = false
        this.endactive = true
    }

    onActivate(context) {
        this.resetScene()
    }

    resetScene(first) {
        this.clear()

        let border = new Border(1080, 3800)
        this.add(border)

        let bg = new Bg("Tle1BG")
        this.add(bg)

        for (let i = 0; i < 7; i++) {
            const ground = new Ground(285 + 570 * i, 975)
            this.add(ground)
        }

        let sign = new Sign(700, 750, "Leiding nemen is niet een rol", "die ik normaal op me neem.")
        this.add(sign)

        let sign1 = new Sign(1400, 750, "Beter de leiding kunnen", "nemen door iedereen te betrekken.")
        this.add(sign1)

        let sign2 = new Sign(2100, 750, "Eerder aan de bel trekken op", "het moment dat het niet goed gaat.")
        this.add(sign2)

        let sign3 = new Sign(2800, 750, "Als ik denk dat iemand AI", "gebruikt eerder aanspreken.")
        this.add(sign3)

        this.end = new End(3700, 415, 2)
        this.add(this.end)

        this.player = new Player()
        this.add(this.player)

        this.powerup = new PowerUp()
        this.add(this.powerup)

        this.camera.strategy.lockToActor(this.player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 3800, 1080))

        this.ui = new Ui("2:1 TLE1")
        this.add(this.ui)

        this.popup = new BeginPopUp(false, "low", [
            "Tijdens deze TLE gingen we een concept ontwerpen voor in",
            "de toekomst. Dit was erg interessant, maar ook erg lastig",
            "omdat je natuurlijk niet precies weet wat de toekomst gaat brengen.",
            "",
            "Uit het boek past het feit dat je niet te veel ideeën moet",
            "bekritiseren hier heel goed bij, omdat het juist goed kan helpen",
            "om de gekste en creatieve ideeën te bedenken."
        ])
        this.activepopup = true
        this.add(this.popup)
    }

    loadNextLevel() {
        this.engine.loadLevel2()
    }
}