import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { StartGameScene } from './scenes/start.js'
import { World1Scene } from './scenes/world1.js'
import { W1Level1Scene } from './scenes/w1level1.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1920,
            height: 1080,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Arcade,
                gravity: new Vector(0, 800),
            }
        })
        this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('start', new StartGameScene())
        this.add('world1', new World1Scene())

        this.loadStart()
    }

    loadStart() {
        this.goToScene('start')
    }

    loadWorld1() {
        this.add('level1', new W1Level1Scene())

        this.goToScene('world1')
    }

    loadLevel1() {
        this.goToScene('level1')
    }
}

new Game()
