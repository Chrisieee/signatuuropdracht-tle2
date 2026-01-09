import { ImageSource, FontSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Level: new ImageSource('images/star.png'),

    HeadFont: new FontSource('fonts/Bubblegum.ttf', 'heads'),
    BasicFont: new FontSource('fonts/ComicNeue-Regular.ttf', 'basic'),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }