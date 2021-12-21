scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    controller.moveSprite(car)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    controller.moveSprite(car)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    controller.moveSprite(car)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    controller.moveSprite(car, 20, 20)
})
function start_next_level () {
    current_level += 1
    if (current_level >= 3) {
        game.over(true)
    } else {
        tiles.loadMap(levels[current_level])
        tiles.placeOnRandomTile(car, assets.tile`myTile2`)
        info.startCountdown(60)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    start_next_level()
})
info.onCountdownEnd(function () {
    game.over(false)
})
let car: Sprite = null
let current_level = 0
let levels: tiles.WorldMap[] = []
levels = [tiles.createMap(tilemap`level10`), tiles.createMap(tilemap`level6`), tiles.createMap(tilemap`level12`)]
current_level = -1
scene.setBackgroundColor(7)
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
start_next_level()
