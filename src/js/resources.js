import { ImageSource, FontSource, Sound, Resource, ImageWrapping, Loader } from 'excalibur'

const Resources = {
    Level: new ImageSource('images/star.png'),
    Player: new ImageSource('images/character.png'),
    Hat: new ImageSource('images/cap.png'),
    Ground: new ImageSource('images/ground.png'),
    Sign: new ImageSource('images/sign.png'),
    PopUp: new ImageSource('images/popup.png'),
    End: new ImageSource('images/end.png'),
    BeginPopUp: new ImageSource('images/pop-up_begin.png'),
    Bug: new ImageSource('images/bug.png'),
    Platform: new ImageSource('images/platform.png'),

    BookBG: new ImageSource('images/bookbg.jpg'),
    Tle1BG: new ImageSource('images/tle1bg.jpg'),
    DeskBG: new ImageSource('images/deskbg.jpg'),
    UserBG: new ImageSource('images/userbg.jpg'),
    TestBG: new ImageSource('images/testbg.jpg'),

    HeadFont: new FontSource('fonts/Bubblegum.ttf', 'heads'),
    BasicFont: new FontSource('fonts/ComicNeue-Regular.ttf', 'basic'),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }