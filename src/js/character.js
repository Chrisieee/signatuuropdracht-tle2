import { Actor, Vector, Keys, CollisionType, DegreeOfFreedom, Axes, Buttons } from "excalibur"
import { Resources } from './resources.js'
import { friendsGroup } from "./collisiongroup.js"
import { PowerUp } from './powerUp.js'
import { Hat } from './hat.js'
import { PopUp } from './popup.js'

export class Player extends Actor {

    #sprite
    #powerUp
    lives
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

        this.lives = 3
        this.#powerUp = false

        this.body.mass = 3
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation)
    }

    onInitialize(engine) {
        this.events.on("collisionstart", (e) => this.#hitSomething(e))
    }

    onPostUpdate(engine, delta) {
        let xspeed = 0

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
    }

    #hitSomething(e, delta) {
        const other = e.other.owner

        if (other instanceof PowerUp) {
            other.gotHit()
            this.#pickUpPowerUp()
        }
    }

    #jump(delta) {
        this.body.applyLinearImpulse(new Vector(0, -100 * delta))
    }

    #pickUpPowerUp() {
        this.#powerUp = true
        this.hat = new Hat()
        this.addChild(this.hat)

        this.#showPopUp("Leider", 0, -350, 0.33)
    }

    #showPopUp(kind, x, y) {
        this.popup = new PopUp(kind, x, y, 0.33)
        this.addChild(this.popup)
    }
}