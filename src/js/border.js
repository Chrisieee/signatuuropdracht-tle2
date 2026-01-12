import { Actor, CollisionType, CompositeCollider, Shape, Vector } from "excalibur"

export class Border extends Actor {
    constructor(h, w) {
        super()

        let landscape = new CompositeCollider([
            Shape.Edge(new Vector(0, h), new Vector(0, 0)),
            Shape.Edge(new Vector(w, h), new Vector(w, 0)),
            Shape.Edge(new Vector(0, h), new Vector(w, h))
        ])
        this.body.collisionType = CollisionType.Fixed
        this.collider.set(landscape)
    }
}