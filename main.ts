namespace SpriteKind {
    export const LevelSelector = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    controller.moveSprite(car)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    controller.moveSprite(car)
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
    current_level = 3
    start_level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite, location) {
    controller.moveSprite(car, 300, 300)
})
scene.onOverlapTile(SpriteKind.LevelSelector, assets.tile`myTile43`, function (sprite, location) {
    current_level = 2
    start_level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    controller.moveSprite(car)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    controller.moveSprite(car, 300, 300)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    controller.moveSprite(car, 20, 20)
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
    controller.moveSprite(car)
}
scene.onOverlapTile(SpriteKind.LevelSelector, assets.tile`myTile41`, function (sprite, location) {
    current_level = 1
    start_level()
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
    start_level()
})
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    controller.moveSprite(car, 50, 50)
})
scene.onOverlapTile(SpriteKind.LevelSelector, assets.tile`myTile55`, function (sprite, location) {
    current_level = 4
    start_level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    controller.moveSprite(car, 20, 20)
})
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile44`, function (sprite, location) {
    controller.moveSprite(car, 300, 300)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.placeOnRandomTile(car, assets.tile`myTile2`)
    car.sayText(">:(", 2000, false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    controller.moveSprite(car, 300, 300)
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
function start_level () {
    car.destroy()
    if (current_level >= 4) {
        game.over(true)
    } else {
        tiles.loadMap(levels[current_level])
        current_level += 1
        game.splash("Level " + current_level)
        effects.confetti.startScreenEffect(1000)
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
        scene.cameraFollowSprite(car)
        tiles.placeOnRandomTile(car, assets.tile`myTile2`)
        info.startCountdown(60)
    }
}
scene.onOverlapTile(SpriteKind.LevelSelector, assets.tile`myTile37`, function (sprite, location) {
    current_level = 0
    start_level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    controller.moveSprite(car)
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
let levels: tiles.WorldMap[] = []
let claimed = false
scene.setBackgroundColor(7)
levels = [
tiles.createMap(tilemap`level10`),
tiles.createMap(tilemap`level6`),
tiles.createMap(tilemap`level12`),
tiles.createMap(tilemap`level14`),
tiles.createMap(tilemap`level16`),
tiles.createMap(tilemap`level39`)
]
select_a_level()
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
