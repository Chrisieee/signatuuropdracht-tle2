import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, Fade, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { StartGameScene } from './scenes/start.js'
import { World1Scene } from './scenes/world1.js'
import { BookScene } from './scenes/level0.js'
import { W1Level1Scene } from './scenes/w1level1.js'
import { W1Level2Scene } from './scenes/w1level2.js'
import { W1Level3Scene } from './scenes/w1level3.js'
import { W1Level4Scene } from './scenes/w1level4.js'
import { W1Level5Scene } from './scenes/w1level5.js'
import { W1Level6Scene } from './scenes/w1level6.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1920,
            height: 1080,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            suppressPlayButton: true,
            physics: {
                solver: SolverStrategy.Arcade,
                gravity: new Vector(0, 800),
            },
        })
        this.showDebug(true)
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.add('start', new StartGameScene())
        this.add('level0', new BookScene())
        this.add('level1', new W1Level1Scene())
        this.add('level2', new W1Level2Scene())
        this.add('level3', new W1Level3Scene())
        this.add('level4', new W1Level4Scene())
        this.add('level5', new W1Level5Scene())
        this.add('level6', new W1Level6Scene())

        this.loadStart()
    }

    loadStart() {
        this.goToScene('start')
        // this.goToScene('level1')
    }

    loadLevel0() {
        this.goToScene('level0')
    }

    // de level laad functies
    loadLevel1() {
        this.goToScene('level1')
    }

    loadLevel2() {
        this.goToScene('level2')
    }

    loadLevel3() {
        this.goToScene('level3')
    }

    loadLevel4() {
        this.goToScene('level4')
    }

    loadLevel5() {
        this.goToScene('level5')
    }

    loadLevel6() {
        this.goToScene('level6')
    }
}

new Game()
