import { ImageSource, FontSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Level: new ImageSource('images/star.png'),
    Player: new ImageSource('images/character.png'),
    Hat: new ImageSource('images/cap.png'),
    Ground: new ImageSource('images/ground.png'),
    Sign: new ImageSource('images/sign.png'),
    PopUp: new ImageSource('images/popup.png'),

    HeadFont: new FontSource('fonts/Bubblegum.ttf', 'heads'),
    BasicFont: new FontSource('fonts/ComicNeue-Regular.ttf', 'basic'),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }