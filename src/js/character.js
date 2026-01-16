import { Actor, Vector, Keys, CollisionType, DegreeOfFreedom, Axes, Buttons } from "excalibur"
import { Resources } from './resources.js'
import { friendsGroup } from "./collisiongroup.js"
import { Hat } from './hat.js'
import { PopUp } from './popup.js'
import { Sign } from './sign.js'
import { End } from './end.js'
import { Bug } from './bug.js'

export class Player extends Actor {

    #sprite
    #powerUp
    hat

    constructor() {

        super({
            width: Resources.Player.width,
            height: Resources.Player.height - 5,
            collisionType: CollisionType.Active,
            collisionGroup: friendsGroup
        })

        this.#sprite = Resources.Player.toSprite()
        this.graphics.use(this.#sprite)
        this.pos = new Vector(100, 500)
        this.graphics.opacity = 1
        this.scale = new Vector(3, 3)

        this.#powerUp = false

        this.body.mass = 3
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation)
    }

    onInitialize(engine) {
        this.events.on("collisionstart", (e) => this.#hitSomething(e))
    }

    onPostUpdate(engine, delta) {
        let xspeed = 0
        if (!this.scene.activepopup) {
            if (engine.input.keyboard.isHeld(Keys.A)) {
                xspeed = -500
                this.#sprite.flipHorizontal = true
                if (this.#powerUp === true) {
                    this.hat.sprite.flipHorizontal = true
                    this.hat.pos = new Vector(-5, -43)
                }
            }
            if (engine.input.keyboard.isHeld(Keys.D)) {
                xspeed = 500
                this.#sprite.flipHorizontal = false
                if (this.#powerUp === true) {
                    this.hat.sprite.flipHorizontal = false
                    this.hat.pos = new Vector(5, -43)
                }
            }
            this.vel.x = xspeed

            if (engine.input.keyboard.wasPressed(Keys.Space) && this.vel.y === 0) {
                this.#jump(delta)
            }

            if (this.pos.y > 1080) {
                this.#death()
            }
        }
    }

    #hitSomething(e, delta) {
        const other = e.other.owner
        // console.log(other)

        if (other.constructor.name === "PowerUp") {
            other.gotHit()
            this.#pickUpPowerUp()
            this.#showPopUp()
        }
        else if (other instanceof Bug) {
            if (e.side === "Bottom") {
                other.gotHit()
            } else {
                this.#death()
            }
        }

        else if (other instanceof Sign) {
            other.showPopUp()
        }

        else if (other instanceof End) {
            if (this.scene.endactive === true) {
                other.load()
            } else if (this.scene.endPopup()) {
                this.scene.endPopup()
            }
        }
    }

    #jump(delta) {
        this.body.applyLinearImpulse(new Vector(0, -150 * delta))
    }

    #pickUpPowerUp() {
        this.#powerUp = true
        this.hat = new Hat()
        this.addChild(this.hat)
    }

    #showPopUp() {
        this.popup = new PopUp("Rol:", "Leider", 0, -100, 0.25, 1)
        this.addChild(this.popup)
    }

    #death() {
        this.scene.resetScene(false)
    }
}