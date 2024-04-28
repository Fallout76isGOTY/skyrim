namespace SpriteKind {
    export const equip = SpriteKind.create()
    export const sword = SpriteKind.create()
    export const key1 = SpriteKind.create()
    export const block = SpriteKind.create()
    export const endscreen = SpriteKind.create()
    export const chest = SpriteKind.create()
    export const acitvemimic = SpriteKind.create()
    export const pixel = SpriteKind.create()
    export const mimic = SpriteKind.create()
    export const skull = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (houseofpain < 2) {
        houseofpain += 1
        mySprite.vy = -70
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        houseofpain = 0
    }
    if (mySprite.isHittingTile(CollisionDirection.Top)) {
        houseofpain = 2
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.skull, function (sprite, otherSprite) {
    if (monsterskull.overlapsWith(mySprite) && bone.value > 0) {
        animation.runImageAnimation(
        monsterskull,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........fffff.........
            ........ff1111bff.......
            .......fb1111111bf......
            .......f111111111f......
            ......fd1111111ffff.....
            ......fd111dd1c111bf....
            ......fb11fcdf1b1bff....
            ......f11111bfbfbff.....
            ......f1b1bdfcffff......
            ......fbfbfcfcccf.......
            ......ffffffffff........
            .........ffffff.........
            .........ffffff.........
            .........fffffff..f.....
            ..........fffffffff.....
            ...........fffffff......
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd111ddddddf......
            ......fd1dddddddbf......
            ......fd1dfbddbbff......
            ......fbddfcdbbcf.......
            .....ffffccddbfff.......
            ....fcb1bbbfcffff.......
            ....f1b1dcffffffff......
            ....fdfdf..ffffffffff...
            .....f.f.....ffffff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        500,
        false
        )
        pause(1000)
        if (monsterskull.overlapsWith(mySprite) && bone.value > 0) {
            info.changeLifeBy(-1)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.sword, function (sprite, otherSprite) {
    sword2 = true
    pickup()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sword2 == true && direction == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef...cc.......
            .ffffee2222ef.cdc.......
            .fe222ffffe2fcddc.......
            fffffffeeeffcddc........
            ffe44ebf44ecddc.........
            fee4d41fddecdc..........
            .feee4dddedccc..........
            ..ffee44e4dde...........
            ...f222244ee............
            ...f2222e2f.............
            ...f444455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            .......fff..............
            ....fffff2f.............
            ..ffeeeee22ff...........
            .ffeeeeee222ff..........
            .feeeefffeeeef..........
            .fffffeee2222ef.........
            fffe222fffffe2f.........
            fffffffffeeefff.....cc..
            fefe44ebbf44eef...ccdc..
            .fee4d4bbfddef..ccddcc..
            ..feee4dddddfeecdddc....
            ...f2222222eeddcdcc.....
            ...f444445e44ddccc......
            ...ffffffffeeee.........
            ...fff...ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            .......ff...............
            ....ffff2ff.............
            ..ffeeeef2ff............
            .ffeeeeef22ff...........
            .feeeeffeeeef...........
            .fffffee2222ef..........
            fffe222ffffe2f..........
            ffffffffeeefff..........
            fefe44ebf44eef..........
            .fee4d4bfddef...........
            ..feee4dddee.c..........
            ...f2222eeddeccccccc....
            ...f444e44ddecddddd.....
            ...fffffeeee.ccccc......
            ..ffffffff...c..........
            ..fff..ff...............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef............
            .ffffee2222ef...........
            .fe222ffffe2f...........
            fffffffeeefff...........
            ffe44ebf44eef...........
            fee4d41fddef............
            .feee4ddddf.............
            ..fdde444ef.............
            ..fdde22ccc.............
            ...eef22cdc.............
            ...f4444cddc............
            ....fffffcddc...........
            .....fff..cddc..........
            ...........cdc..........
            ............cc..........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
    } else if (sword2 == true && direction == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            .......cc...feeeeffeeef.
            .......cdc.fe2222eeffff.
            .......cddcf2effff222ef.
            ........cddcffeeefffffff
            .........cddce44fbe44eff
            ..........cdceddf14d4eef
            ..........cccdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ..............fff.......
            .............f2fffff....
            ...........ff22eeeeeff..
            ..........ff222eeeeeeff.
            ..........feeeefffeeeef.
            .........fe2222eeefffff.
            .........f2efffff222efff
            ..cc.....fffeeefffffffff
            ..cdcc...fee44fbbe44efef
            ..ccddcc..feddfbb4d4eef.
            ....cdddceefddddd4eeef..
            .....ccdcddee2222222f...
            ......cccdd44e544444f...
            .........eeeeffffffff...
            .............ff...fff...
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ...............ff.......
            .............ff2ffff....
            ............ff2feeeeff..
            ...........ff22feeeeeff.
            ...........feeeeffeeeef.
            ..........fe2222eefffff.
            ..........f2effff222efff
            ..........fffeeeffffffff
            ..........fee44fbe44efef
            ...........feddfb4d4eef.
            ..........c.eeddd4eeef..
            ....ccccccceddee2222f...
            .....dddddcedd44e444f...
            ......ccccc.eeeefffff...
            ..........c...ffffffff..
            ...............ff..fff..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            ............feeeeffeeef.
            ...........fe2222eeffff.
            ...........f2effff222ef.
            ...........fffeeefffffff
            ...........fee44fbe44eff
            ............feddf14d4eef
            .............fdddd4eeef.
            .............fe444eddf..
            .............ccc22eddf..
            .............cdc22fee...
            ............cddc4444f...
            ...........cddcfffff....
            ..........cddc..fff.....
            ..........cdc...........
            ..........cc............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        100,
        false
        )
    } else {
    	
    }
    if (mySprite.overlapsWith(monsterskull) && bone.value > 0) {
        bone.value += -100
    }
    if (mySprite.overlapsWith(mimicsprite) && mimic.value > 0) {
        mimic.value += -50
    }
    if (bone.value <= 0) {
        death(monsterskull)
    }
    if (mimic.value <= 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mimicsprite)
        animation.runImageAnimation(
        mimicsprite,
        assets.animation`deathmimic`,
        200,
        false
        )
        pause(800)
        ismimicactive = 0
        sprites.destroy(monsterskull)
    }
})
function death (mySprite: Sprite) {
    for (let row = 0; row <= 2; row++) {
        for (let column = 0; column <= 2; column++) {
            newPixel = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.pixel)
            newPixel.image.setPixel(0, 0, mySprite.image.getPixel(column, row))
            newPixel.setPosition(mySprite.x, mySprite.y)
            newPixel.ay = 300
            newPixel.setBounceOnWall(true)
            newPixel.setVelocity(randint(-150, 150), randint(-150, -300))
        }
    }
    sprites.destroy(mySprite)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (invON == true) {
    	
    } else {
        direction = 0
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        true
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (invON == true) {
    	
    } else {
        direction = 1
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (invON == true) {
    	
    } else {
        direction = 0
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.mimic, function (sprite, otherSprite) {
    if (mimicsprite.overlapsWith(mySprite) && mimic.value > 0) {
        animation.runImageAnimation(
        mimicsprite,
        assets.animation`bitemimic`,
        200,
        false
        )
        pause(800)
        if (mimicsprite.overlapsWith(mySprite) && mimic.value > 0) {
            info.changeLifeBy(-1)
        }
    }
})
scene.onHitWall(SpriteKind.pixel, function (sprite, location) {
    if (Math.percentChance(50)) {
        sprite.setBounceOnWall(false)
    } else if (Math.percentChance(20)) {
        sprites.destroy(sprite)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (invON == true) {
    	
    } else {
        direction = 1
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key1, function (sprite, otherSprite) {
    key1equip = true
    mySprite.sayText("I wonder what this opens?", 500, true)
    sprites.destroy(key1sprite)
    monsterskull.follow(mySprite, 20)
})
function pickup () {
    if (sword2 == true) {
        inventory.push(sword2)
        mySprite.setImage(img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef...cc.......
            .ffffee2222ef.cdc.......
            .fe222ffffe2fcddc.......
            fffffffeeeffcddc........
            ffe44ebf44ecddc.........
            fee4d41fddecdc..........
            .feee4dddedccc..........
            ..ffee44e4dde...........
            ...f222244ee............
            ...f2222e2f.............
            ...f444455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `)
        sprites.destroy(swordsprite)
        mySprite.sayText("Its dangerous to go alone! Glad I took this.", 3000, true)
        pause(2000)
        mySprite.sayText("press A to attack", 2000, true)
    } else {
    	
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.acitvemimic, function (sprite, otherSprite) {
    ismimicactive = 1
    sprites.destroy(activatemimic)
    sprites.destroy(chestmimic)
    tiles.placeOnTile(mimicsprite, tiles.getTileLocation(29, 8))
    mimicsprite.follow(mySprite, 20)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    invON = true
    invX = mySprite.x
    invX = mySprite.y
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    tiles.setCurrentTilemap(tilemap`level9`)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff6666666666666666666fff6ffffffff6ff6fffffffffff6ff66666666ff6ffffffff6ff6666666666666ffff666666666fff6666666fffffff6fffff6fffffffffffffffffffffff
        fffffffffffffffffffffffff6ffffffffffff66fffffff6fff6fffffffff6fff6fffffffff66fffffff6ffffffff6fffffffff6fffffffff6ff6ffffff6ffffff6fffff6fffffffffffffffffffffff
        fffffffffffffffffffffffff6ffffffffffff6f6ffffff6fff6fffffffff6fff6fffffffff6f6ffffff6ffffffff6fffffffff6fffffffff6ff6ffffff6fffffff6fff6ffffffffffffffffffffffff
        fffffffffffffffffffffffff6ffffffffffff6ff6fffff6ffff6fffffff6ffff6fffffffff6ff6fffff6ffffffff6fffffffff6fffffffff6ff6ffffff6fffffff6fff6ffffffffffffffffffffffff
        fffffffffffffffffffffffff6ffffffffffff6ff6fffff6ffff6fffffff6ffff6fffffffff6ff6fffff6ffffffff6fffffffff6fffffffff6ff6ffffff6ffffffff6f6fffffffffffffffffffffffff
        fffffffffffffffffffffffff6ffffffffffff6fff6ffff6fffff6fffff6fffff6fffffffff6fff6ffff6ffffffff6fffffffff6fffffffff6ff6666666ffffffffff6ffffffffffffffffffffffffff
        fffffffffffffffffffffffff6ffffffffffff6fff6ffff6fffff6fffff6fffff66666666ff6fff6ffff6ffffffff6fffffffff6fffffffff6ff66fffffffffffffff6ffffffffffffffffffffffffff
        fffffffffffffffffffffffff6ffffffffffff6ffff6fff6ffffff6fff6ffffff6fffffffff6ffff6fff6ffffffff6fffffffff6fffffffff6ff6f6ffffffffffffff6ffffffffffffffffffffffffff
        fffffffffffffffffffffffff6ffffffffffff6ffff6fff6ffffff6fff6ffffff6fffffffff6ffff6fff6ffffffff6fffffffff6fffffffff6ff6ff6fffffffffffff6ffffffffffffffffffffffffff
        fffffffffffffffffffffffff6ffffffffffff6fffff6ff6ffffff6fff6ffffff6fffffffff6fffff6ff6ffffffff6fffffffff6fffffffff6ff6fff6ffffffffffff6ffffffffffffffffffffffffff
        fffffffffffffffffffffffff6ffffffffffff6fffff6ff6fffffff6f6fffffff6fffffffff6fffff6ff6ffffffff6fffffffff6fffffffff6ff6ffff6fffffffffff6ffffffffffffffffffffffffff
        fffffffffffffffffffffffff6ffffffffffff6ffffff6f6fffffff6f6fffffff6fffffffff6ffffff6f6ffffffff6fffffffff6fffffffff6ff6fffff6ffffffffff6ffffffffffffffffffffffffff
        fffffffffffffffffffffffff6ffffffffffff6fffffff66fffffff6f6fffffff6fffffffff6fffffff66ffffffff6fffffffff6fffffffff6ff6ffffff6fffffffff6ffffffffffffffffffffffffff
        ffffffffffffffff6666666666666666666fff6ffffffff6ffffffff6ffffffff66666666ff6ffffffff6ffffffff6ffffffffff666666666fff6fffffff6ffffffff6ffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffff
        6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    controller.moveSprite(mySprite, 0, 0)
})
info.onLifeZero(function () {
	
})
let invX = 0
let key1equip = false
let invON = false
let newPixel: Sprite = null
let direction = 0
let sword2 = false
let ismimicactive = 0
let inventory: boolean[] = []
let bone: StatusBarSprite = null
let monsterskull: Sprite = null
let key1sprite: Sprite = null
let swordsprite: Sprite = null
let houseofpain = 0
let mySprite: Sprite = null
let mimic: StatusBarSprite = null
let activatemimic: Sprite = null
let chestmimic: Sprite = null
let mimicsprite: Sprite = null
mimicsprite = sprites.create(assets.image`myImage2`, SpriteKind.mimic)
chestmimic = sprites.create(assets.image`myImage1`, SpriteKind.chest)
activatemimic = sprites.create(assets.image`myImage3`, SpriteKind.acitvemimic)
mimic = statusbars.create(20, 4, StatusBarKind.Health)
mimic.attachToSprite(mimicsprite)
mimic.value = 100
tiles.setCurrentTilemap(tilemap`level`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 8))
houseofpain = 0
scene.cameraFollowSprite(mySprite)
mySprite.ay = 110
controller.moveSprite(mySprite, 100, 0)
swordsprite = sprites.create(assets.image`myImage0`, SpriteKind.sword)
key1sprite = sprites.create(assets.image`myImage`, SpriteKind.key1)
tiles.placeOnTile(swordsprite, tiles.getTileLocation(0, 6))
tiles.placeOnTile(key1sprite, tiles.getTileLocation(13, 2))
monsterskull = sprites.create(assets.image`sword`, SpriteKind.skull)
tiles.placeOnTile(monsterskull, tiles.getTileLocation(23, 8))
bone = statusbars.create(20, 4, StatusBarKind.Health)
bone.attachToSprite(monsterskull)
bone.value = 100
inventory = []
info.setLife(3)
let animation2 = 0
mySprite.sayText("Hey, I'm finally awake.", 1500, true)
tiles.placeOnTile(mimicsprite, tiles.getTileLocation(50, 8))
tiles.placeOnTile(chestmimic, tiles.getTileLocation(29, 8))
tiles.placeOnTile(activatemimic, tiles.getTileLocation(24, 8))
ismimicactive = 0
death(mySprite)
