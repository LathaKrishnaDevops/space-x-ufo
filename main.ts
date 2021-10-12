controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 5 5 5 . . . 
        . . . . . . . . . . 4 4 5 . . . 
        . . . . . . f e f e 2 2 4 . . . 
        . . . . . . e f e f 2 2 4 . . . 
        . . . . . . f e f e 4 4 5 . . . 
        . . . . . . . . . . 5 5 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, bogey, 50, 50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.setLife(3)
})
let bogey: Sprite = null
let projectile: Sprite = null
let UFO = sprites.create(assets.image`UFO`, SpriteKind.Player)
controller.moveSprite(UFO, 200, 200)
UFO.setStayInScreen(true)
info.setLife(3)
effects.starField.startScreenEffect()
game.onUpdateInterval(500, function () {
    bogey = sprites.create(assets.image`Blue Rocket0`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
