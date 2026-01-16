import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, Fade, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { StartGameScene } from './scenes/start.js'
import { LevelSelectScene } from './scenes/levelselect.js'
import { BookScene } from './scenes/level0.js'
import { W1Level1Scene } from './scenes/w1level1.js'
import { W1Level2Scene } from './scenes/w1level2.js'
import { W1Level3Scene } from './scenes/w1level3.js'
import { W1Level4Scene } from './scenes/w1level4.js'
import { W1Level5Scene } from './scenes/w1level5.js'
import { W1Level6Scene } from './scenes/w1level6.js'
import { W2Level1Scene } from './scenes/w2level1.js'
import { W2Level2Scene } from './scenes/w2level2.js'
import { W2Level3Scene } from './scenes/w2level3.js'
import { W2Level4Scene } from './scenes/w2level4.js'
import { W2Level5Scene } from './scenes/w2level5.js'
import { W2Level6Scene } from './scenes/w2level6.js'
import { W3Level1Scene } from './scenes/w3level1.js'
import { W3Level2Scene } from './scenes/w3level2.js'
import { W3Level3Scene } from './scenes/w3level3.js'

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
        this.add('levelselect', new LevelSelectScene())

        this.add('level0', new BookScene())
        //TLE1
        this.add('level1', new W1Level1Scene())
        this.add('level2', new W1Level2Scene())
        this.add('level3', new W1Level3Scene())
        this.add('level4', new W1Level4Scene())
        this.add('level5', new W1Level5Scene())
        this.add('level6', new W1Level6Scene())
        //TLE2
        this.add('level7', new W2Level1Scene())
        this.add('level8', new W2Level2Scene())
        this.add('level9', new W2Level3Scene())
        this.add('level10', new W2Level4Scene())
        this.add('level11', new W2Level5Scene())
        this.add('level12', new W2Level6Scene())
        //toekomst
        this.add('level13', new W3Level1Scene())
        this.add('level14', new W3Level2Scene())
        this.add('level15', new W3Level3Scene())

        this.loadStart()
    }

    loadStart() {
        this.goToScene('start')
        // this.goToScene('level1')
    }

    loadLevelSelect() {
        this.goToScene('levelselect')
    }

    loadLevel0() {
        this.goToScene('level0')
    }

    // de levels TLE1
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
    // de levels TLE2
    loadLevel7() {
        this.goToScene('level7')
    }

    loadLevel8() {
        this.goToScene('level8')
    }

    loadLevel9() {
        this.goToScene('level9')
    }

    loadLevel10() {
        this.goToScene('level10')
    }

    loadLevel11() {
        this.goToScene('level11')
    }

    loadLevel12() {
        this.goToScene('level12')
    }

    //toekomst
    loadLevel13() {
        this.goToScene('level13')
    }

    loadLevel14() {
        this.goToScene('level14')
    }

    loadLevel15() {
        this.goToScene('level15')
    }
}

new Game()
