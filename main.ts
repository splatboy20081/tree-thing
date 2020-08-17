let projectile: Sprite = null
scene.setBackgroundColor(9)
let Flower = sprites.create(img`
    . . . . . . . . . . . . . 6 6 6 6 . . . . . . . . . . . . . . . 
    . . . . . . . . . . 6 6 6 6 6 7 7 6 6 . 6 6 6 6 . . . . . . . . 
    . . . . . . . . . 6 7 7 7 7 7 7 7 7 7 6 7 7 7 6 . . . . . . . . 
    . . . . . . 6 6 6 6 7 7 7 5 5 7 7 7 5 7 7 7 7 6 6 6 . . . . . . 
    . . . . . 6 7 7 6 6 6 6 7 5 5 5 7 5 5 7 7 7 6 7 7 7 6 6 6 . . . 
    . . . . . 6 7 7 6 7 7 7 7 7 5 5 5 5 5 7 7 7 7 7 7 6 6 7 7 6 . . 
    . . . 6 6 6 6 6 7 7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 6 6 6 6 6 . . . 
    . 6 6 6 6 7 7 6 7 7 7 7 7 5 5 7 5 7 5 5 5 7 7 7 7 7 6 7 7 6 . . 
    6 6 6 6 7 7 7 6 7 7 7 7 5 5 7 7 5 5 7 5 5 5 7 7 7 7 6 7 7 6 6 . 
    . 6 6 6 7 7 6 7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7 7 7 7 7 6 7 6 6 6 
    . c 6 7 6 6 7 7 7 6 7 7 7 7 7 7 7 5 7 7 7 7 7 7 6 7 7 7 6 6 . . 
    c c 7 7 6 6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 6 6 6 c 
    c c 7 6 6 6 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 7 7 6 c 
    c 6 6 6 6 7 7 6 7 7 7 7 7 7 7 7 7 7 7 7 7 6 6 6 7 7 6 6 6 7 7 6 
    6 6 6 6 7 7 6 6 6 6 7 7 7 6 7 7 7 7 6 7 7 6 7 7 6 6 7 6 6 6 6 6 
    c c c 7 6 6 7 7 6 7 7 7 7 6 6 7 7 7 6 6 7 6 7 7 7 6 7 7 6 c c c 
    c c 7 7 6 6 7 7 6 7 7 7 6 7 7 6 7 7 6 7 6 6 6 7 7 6 7 7 6 6 c c 
    . 6 6 6 c 6 7 6 6 6 7 6 7 7 7 6 6 6 6 7 7 6 6 6 6 6 6 6 6 c c . 
    . c c c 6 6 6 7 6 6 6 6 7 7 6 6 6 6 6 7 7 6 7 7 6 6 6 c c c c . 
    . . . c c c 7 7 c 6 7 6 7 6 6 6 6 7 6 6 7 6 6 7 7 6 6 6 c c c . 
    . . . c c 6 7 6 c 7 7 6 6 6 7 6 6 7 7 6 6 6 6 6 6 c 6 6 6 c c . 
    . . . . c 6 c c 6 7 6 c 6 6 7 7 6 7 7 c 6 6 c 6 6 6 c c c . . . 
    . . . . c c c c c 6 c 6 6 6 6 7 6 6 7 c c 6 c c c 6 c c c . . . 
    . . . . . . c c c c c 6 6 c 6 6 c 6 6 c c c c c c c c . . . . . 
    . . . . . . . c c . c c 6 c 6 c c c 6 c c c c . c c . . . . . . 
    . . . . . . . . . . . c c c c c c c c c c . . . . . . . . . . . 
    . . . . . . . . . . . . . f e e e e e e . . . . . . . . . . . . 
    . . . . . . . . . . . . f e e e e e e f e . . . . . . . . . . . 
    . . . . . . . . . e e e e e f e e e f f e e . . . . . . . . . . 
    . . . . . . . . . . . . f f f f e e f . . e e . . . . . . . . . 
    . . . . . . . . . . . . . . . f e e . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . e . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b b b b . . . . . . . . . . 
        . . . . . . . . b b d d d d b b . . . . . . . . 
        . . . . . . . b d d b b b b d d b . . . . . . . 
        . . . . . . b d b b d d d d b b d b . . . . . . 
        . . . . . b d b b d b b b b d b b d b . . . . . 
        . . . . . b d b d b d d d d b d b d b . . . . . 
        . . . . . c d b b d b b b b d b b d c . . . . . 
        . . . . . c b d b b d d d d b b d b c . . . . . 
        . . . . . e f b d d b b b b d d b c e . . . . . 
        . . . . . e e f f b d d d d b c c e e . . . . . 
        . . . . . e e e e f f c c c c e e e . . . . . . 
        . . . . . c e e e e e e e e e e e e . . . . . . 
        . . . . . c e e e e e e e e e e e e . . . . . . 
        . . . . . f e e e e e e e e e e e e . . . . . . 
        . . . . . c c e e e e e e e e e e e . . . . . . 
        . . . . . . f e e e e e e e e e e e . . . . . . 
        . . . . . 6 f c e e e e e e e e e e 6 . . . . . 
        . . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
        . . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . . 
        . . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
        . . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
        . . . . . . e e 7 7 e e e e 7 7 e c e e . . . . 
        . . . . . . e e 6 e e e e e e 6 e e f . . . . . 
        `, Flower, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
})
