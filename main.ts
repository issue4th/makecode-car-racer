namespace SpriteKind {
    export const LevelSelector = SpriteKind.create()
}
/**
 * portal code
 */
/**
 * overlap road code to speed up or slow down.
 */
/**
 * speed boosters mechanics code
 */
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile76`, function (sprite, location) {
    tiles.placeOnRandomTile(car, assets.tile`myTile79`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile77`, function (sprite, location) {
    tiles.placeOnRandomTile(car, assets.tile`myTile80`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    controller.moveSprite(car, 20, 20)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    car.setImage(img`
        . . . . . . a a c c a a . . . . 
        . . . . . a 3 3 3 3 3 3 a . . . 
        . . . . 3 c 3 3 3 3 3 3 c 3 . . 
        . . . a 3 c d 3 3 3 3 3 c 3 a . 
        . . . f 3 3 d 3 3 3 3 3 c 3 f . 
        . . . f 3 3 d 3 3 3 3 3 3 3 f . 
        . . . f 3 3 d 3 3 3 3 3 3 3 f . 
        . . . f 3 c 3 d d 3 3 3 c 3 f . 
        . . . a 3 c a c c c c a c 3 a . 
        . . . a 3 a c b b b b c a 3 a . 
        . . . a 3 a b b b b b b a 3 a . 
        . . . a a a a a a a a a a a a . 
        . . . f a d a a a a a a d a f . 
        . . . f a 3 d a a a a d 3 a f . 
        . . . f f a a a a a a a a f f . 
        . . . . f f . . . . . . f f . . 
        `)
})
scene.onOverlapTile(SpriteKind.LevelSelector, assets.tile`myTile48`, function (sprite, location) {
    current_level = 4
    start_level()
    info.startCountdown(65)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile94`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite, location) {
    car.setVelocity(0, 150)
    controller.moveSprite(car)
})
scene.onOverlapTile(SpriteKind.LevelSelector, assets.tile`myTile43`, function (sprite, location) {
    current_level = 3
    start_level()
    info.startCountdown(60)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile63`, function (sprite, location) {
    tiles.placeOnRandomTile(car, assets.tile`myTile2`)
    car.sayText(">:(", 2000, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    car.setImage(img`
        . . . . . . a a c c a a . . . . 
        . . . . . a 3 3 3 3 3 3 a . . . 
        . . . . 3 c 3 3 3 3 3 3 c 3 . . 
        . . . a 3 c d 3 3 3 3 3 c 3 a . 
        . . . f 3 3 d 3 3 3 3 3 c 3 f . 
        . . . f 3 3 d 3 3 3 3 3 3 3 f . 
        . . . f 3 3 d 3 3 3 3 3 3 3 f . 
        . . . f 3 c 3 d d 3 3 3 c 3 f . 
        . . . a 3 c a c c c c a c 3 a . 
        . . . a 3 a c b b b b c a 3 a . 
        . . . a 3 a b b b b b b a 3 a . 
        . . . a a a a a a a a a a a a . 
        . . . f a d a a a a a a d a f . 
        . . . f a 3 d a a a a d 3 a f . 
        . . . f f a a a a a a a a f f . 
        . . . . f f . . . . . . f f . . 
        `)
})
/**
 * dust road code
 */
/**
 * "win" code
 */
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile71`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
    car.startEffect(effects.ashes)
})
/**
 * overlap 'green land' code to speed up or slow down.
 */
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile34`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    car.setVelocity(-150, 0)
    controller.moveSprite(car)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    controller.moveSprite(car, 20, 20)
    car.setVelocity(0, 0)
})
function select_a_level () {
    tiles.setTilemap(tilemap`level40`)
    car = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 d 3 3 3 3 3 3 c 3 . . . 
        . . 3 c d 3 3 3 3 3 3 c c 3 . . 
        . 3 c c d d d d d d 3 c c d 3 d 
        . 3 c 3 a a a a a a a b c d 3 3 
        . 3 3 a b b a b b b a a b d 3 3 
        . 3 a b b b a b b b b a 3 3 3 3 
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
        . a a a a a a f a a a f a 3 d d 
        . a a a a a a f a a f a a a 3 d 
        . a a a a a a f f f a a a a a a 
        . a f f f f a a a a f f f a a a 
        . . f f f f f a a f f f f f a . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.LevelSelector)
    tiles.placeOnRandomTile(car, assets.tile`myTile2`)
    scene.cameraFollowSprite(car)
    controller.moveSprite(car, 125, 125)
}
scene.onOverlapTile(SpriteKind.LevelSelector, assets.tile`myTile41`, function (sprite, location) {
    current_level = 2
    start_level()
    info.startCountdown(60)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile73`, function (sprite, location) {
    tiles.placeOnRandomTile(car, assets.tile`myTile2`)
    car.sayText(">:(", 2000, false)
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    car.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 d 3 3 3 3 3 3 c 3 . . . 
        . . 3 c d 3 3 3 3 3 3 c c 3 . . 
        . 3 c c d d d d d d 3 c c d 3 d 
        . 3 c 3 a a a a a a a b c d 3 3 
        . 3 3 a b b a b b b a a b d 3 3 
        . 3 a b b b a b b b b a 3 3 3 3 
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
        . a a a a a a f a a a f a 3 d d 
        . a a a a a a f a a f a a a 3 d 
        . a a a a a a f f f a a a a a a 
        . a f f f f a a a a f f f a a a 
        . . f f f f f a a f f f f f a . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    car.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 3 3 3 . . 
        . . . . . 3 c 3 3 3 3 3 3 d 3 . 
        . . . . 3 c c 3 3 3 3 3 3 d c 3 
        . . d 3 d c c 3 d d d d d d c c 
        . d 3 3 d c b a a a a a a a 3 c 
        . 3 3 3 d b a a b b b a b b a 3 
        . 3 3 3 3 3 a b b b b a b b b a 
        . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
        . 3 d d 3 a f a a a f a a a a a 
        . d d 3 a a a f a a f a a a a a 
        . a a a a a a a f f f a a a a a 
        . a a a a f f f a a a a f f f f 
        . . . a f f f f f a a f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (current_level >= 100) {
        game.over(true)
    } else {
        start_level()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
})
info.onCountdownEnd(function () {
    game.over(false)
})
/**
 * path code
 */
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile85`, function (sprite, location) {
    controller.moveSprite(car, 35, 35)
    car.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile74`, function (sprite, location) {
    tiles.placeOnRandomTile(car, assets.tile`myTile72`)
})
scene.onOverlapTile(SpriteKind.LevelSelector, assets.tile`myTile65`, function (sprite, location) {
    current_level = 6
    start_level()
    info.startCountdown(40)
})
scene.onOverlapTile(SpriteKind.LevelSelector, assets.tile`myTile87`, function (sprite, location) {
    current_level = 7
    start_level()
    info.startCountdown(20)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    controller.moveSprite(car, 50, 50)
    car.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.LevelSelector, assets.tile`myTile55`, function (sprite, location) {
    current_level = 5
    start_level()
    info.startCountdown(65)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    controller.moveSprite(car, 20, 20)
})
/**
 * car movement mechanics
 */
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    car.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 d 3 3 3 3 3 3 c 3 . . . 
        . . 3 c d 3 3 3 3 3 3 c c 3 . . 
        . 3 c c d d d d d d 3 c c d 3 d 
        . 3 c 3 a a a a a a a b c d 3 3 
        . 3 3 a b b a b b b a a b d 3 3 
        . 3 a b b b a b b b b a 3 3 3 3 
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
        . a a a a a a f a a a f a 3 d d 
        . a a a a a a f a a f a a a 3 d 
        . a a a a a a f f f a a a a a a 
        . a f f f f a a a a f f f a a a 
        . . f f f f f a a f f f f f a . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    car.setVelocity(0, -150)
    controller.moveSprite(car)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.placeOnRandomTile(car, assets.tile`myTile2`)
    car.sayText(">:(", 2000, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    car.setVelocity(150, 0)
    controller.moveSprite(car)
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    car.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 3 . . . . 
        . . . . . 3 3 d d 3 3 3 3 . . . 
        . . . . . c d 3 3 3 3 3 c . . . 
        . . . . 3 c d 3 3 3 3 3 c 3 . . 
        . . . a 3 c d 3 3 3 3 3 c 3 a . 
        . . . f 3 c d 3 3 3 3 3 c 3 f . 
        . . . f a c 3 3 3 3 3 3 c a f . 
        . . . f 3 c 3 b b b b 3 c 3 f . 
        . . . a 3 3 b c c c c b 3 3 a . 
        . . . a a b c c c c c c b a a . 
        . . . f a d d d d d d d d a f . 
        . . . f a d 3 3 3 3 3 3 d a f . 
        . . . . 3 d d 3 3 3 3 d d 3 f . 
        . . . . f 3 d 3 3 3 3 d 3 f . . 
        . . . . . a 3 3 3 3 3 3 a . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    car.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 3 . . . . 
        . . . . . 3 3 d d 3 3 3 3 . . . 
        . . . . . c d 3 3 3 3 3 c . . . 
        . . . . 3 c d 3 3 3 3 3 c 3 . . 
        . . . a 3 c d 3 3 3 3 3 c 3 a . 
        . . . f 3 c d 3 3 3 3 3 c 3 f . 
        . . . f a c 3 3 3 3 3 3 c a f . 
        . . . f 3 c 3 b b b b 3 c 3 f . 
        . . . a 3 3 b c c c c b 3 3 a . 
        . . . a a b c c c c c c b a a . 
        . . . f a d d d d d d d d a f . 
        . . . f a d 3 3 3 3 3 3 d a f . 
        . . . . 3 d d 3 3 3 3 d d 3 f . 
        . . . . f 3 d 3 3 3 3 d 3 f . . 
        . . . . . a 3 3 3 3 3 3 a . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile75`, function (sprite, location) {
    tiles.placeOnRandomTile(car, assets.tile`myTile78`)
})
function start_level () {
    car.destroy()
    game.splash("Level " + current_level)
    if (current_level >= 100) {
        tiles.loadMap(secret_levels[current_level - 100])
    } else if (current_level >= 7) {
        game.over(true)
    } else {
        tiles.loadMap(levels[current_level])
    }
    car = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 d 3 3 3 3 3 3 c 3 . . . 
        . . 3 c d 3 3 3 3 3 3 c c 3 . . 
        . 3 c c d d d d d d 3 c c d 3 d 
        . 3 c 3 a a a a a a a b c d 3 3 
        . 3 3 a b b a b b b a a b d 3 3 
        . 3 a b b b a b b b b a 3 3 3 3 
        . a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
        . a a a a a a f a a a f a 3 d d 
        . a a a a a a f a a f a a a 3 d 
        . a a a a a a f f f a a a a a a 
        . a f f f f a a a a f f f a a a 
        . . f f f f f a a f f f f f a . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(car)
    tiles.placeOnRandomTile(car, assets.tile`myTile2`)
    scene.cameraFollowSprite(car)
    effects.confetti.startScreenEffect(1000)
}
/**
 * level-select pads
 */
scene.onOverlapTile(SpriteKind.LevelSelector, assets.tile`myTile37`, function (sprite, location) {
    current_level = 1
    start_level()
    info.startCountdown(60)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile95`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile68`, function (sprite, location) {
    current_level = 100
    start_level()
    info.startCountdown(45)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile96`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile64`, function (sprite, location) {
    tiles.placeOnRandomTile(car, assets.tile`myTile2`)
    car.sayText(">:(", 2000, false)
})
/**
 * secret levels code
 */
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile69`, function (sprite, location) {
    current_level = 101
    start_level()
    info.stopCountdown()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    controller.moveSprite(car)
    car.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile70`, function (sprite, location) {
    current_level = 102
    start_level()
    info.stopCountdown()
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    car.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 3 3 3 . . 
        . . . . . 3 c 3 3 3 3 3 3 d 3 . 
        . . . . 3 c c 3 3 3 3 3 3 d c 3 
        . . d 3 d c c 3 d d d d d d c c 
        . d 3 3 d c b a a a a a a a 3 c 
        . 3 3 3 d b a a b b b a b b a 3 
        . 3 3 3 3 3 a b b b b a b b b a 
        . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
        . 3 d d 3 a f a a a f a a a a a 
        . d d 3 a a a f a a f a a a a a 
        . a a a a a a a f f f a a a a a 
        . a a a a f f f a a a a f f f f 
        . . . a f f f f f a a f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `)
})
let current_level = 0
let car: Sprite = null
let secret_levels: tiles.WorldMap[] = []
let levels: tiles.WorldMap[] = []
let claimed = false
scene.setBackgroundColor(7)
levels = [
tiles.createMap(tilemap`level64`),
tiles.createMap(tilemap`level10`),
tiles.createMap(tilemap`level6`),
tiles.createMap(tilemap`level12`),
tiles.createMap(tilemap`level14`),
tiles.createMap(tilemap`level16`),
tiles.createMap(tilemap`level39`),
tiles.createMap(tilemap`level63`)
]
secret_levels = [
tiles.createMap(tilemap`level53`),
tiles.createMap(tilemap`level61`),
tiles.createMap(tilemap`level62`),
tiles.createMap(tilemap`level65`)
]
select_a_level()
/**
 * chest code
 */
game.onUpdate(function () {
    if (car.tileKindAt(TileDirection.Center, assets.tile`myTile25`)) {
        if (!(claimed)) {
            info.changeScoreBy(1)
            claimed = true
        }
    } else {
        claimed = false
    }
})
