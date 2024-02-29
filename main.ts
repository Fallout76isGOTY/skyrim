namespace SpriteKind {
    export const equip = SpriteKind.create()
    export const sword = SpriteKind.create()
    export const key1 = SpriteKind.create()
    export const block = SpriteKind.create()
    export const endscreen = SpriteKind.create()
    export const chestmimic = SpriteKind.create()
}
controller.combos.attachCombo("", function () {
    game.splash("f")
})
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
        bonedeath = 1
        monsterskull.follow(mySprite, 0)
        animation.stopAnimation(animation.AnimationTypes.All, monsterskull)
        animation.runImageAnimation(
        monsterskull,
        assets.animation`skellydestroy`,
        100,
        false
        )
        pause(1200)
        sprites.destroy(monsterskull)
    }
    if (mimic.value <= 0) {
        mimicsprite.follow(mySprite, 0)
        mimicdeath = 1
        animation.stopAnimation(animation.AnimationTypes.All, mimicsprite)
        animation.runImageAnimation(
        mimicsprite,
        assets.animation`deathmimic`,
        200,
        false
        )
        pause(800)
        sprites.destroy(mimicsprite)
    }
    if (mySprite.overlapsWith(chestmimic)) {
        tiles.placeOnTile(mimicsprite, tiles.getTileLocation(40, 8))
        sprites.destroy(chestmimic)
        scene.cameraShake(4, 500)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(36, 7))
        animation.runImageAnimation(
        chestmimic,
        assets.animation`myAnim0`,
        200,
        false
        )
        reachmimic = 1
    }
})
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
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
	
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
    } else if (false) {
    	
    } else {
    	
    }
}
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
    tiles.setCurrentTilemap(tilemap`level10`)
    background = [img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccfffcccccccccccccccccfffcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccffccccccccccccccccccccccfccccccccffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccfffcccccccccccccccccffffffccccccccffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccfffcccccccccccccccffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccffcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccffccccccccfffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccfffffcccccccfcffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccffffffcccccfffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccfffffffffcfccccccccccccfffffffffffcffffffffcccfffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccffcccfffffffffffffcccccccccccccffffffffffffffffffffccccccffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffcccccccccccccccccccffffffffffffccffffccccccccfcffcccfffffffffffffffffffffccccccffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffcccccccccccccccccfffffffffffffffccffccccccccccccffccfffffffffffffffffffffffccccccfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffccccccccccccccccfffffffffffffffffffcfccccccccccccccccffffffffffffffffffffffccccccffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffccccccccccccccfffffffffffffffffffffcfcccccccccccccccffffffffffffffffffffffffccccccfffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffcccccccccccfffffffffffffffffffffffffcccccccccccccfccfffffffffffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcccccccccfffffffffffffffcccccfccfffccfcccccccccccffffffffffffffcfffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffccccccccfffffffffffcccccccffcccffffccccccccccccccffffffffffffffffffffffffffffffffccfcffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffccccccfffffffccfffcccccffffffcccccfccccccfcffccccffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcccccffffffffcccffcccccfffcffffffffccccfffcfffccccfffffffffffffcffffffffffcccccffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffcccccfffffffcccccccccccffccfffffffffccccffccfcffccffffffffcccfffcfcccccccccfcccccfffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffccfffffffffcffccfcccccffccccccffffffccccfffffccfcffffffffccccffffccfccfccccccccccfcfffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffccffffffcffcffccffcccffffcccccccfffffccccfffcfcccccccfffccffccffffcfccccffffccccccffffcffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffcffffffffffffffffcccfffffcccccccfffffcccccfccccccfcfffffccffffffffffffffffffccccccffffcffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffcffffffffccfcfcfffcfffcccccffccccccfcfccccfffffcffcccffffffccffffffffffccccfcccfffffcfffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffcccccccfffcffffccffffffccccccccccfffffffffcccfffcfcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcffffffccffccccfccfffffffffcffffffcccfffffcccccffffffcccffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffcfffffffffffcccccccffcfffcfcccfcfffccffccccfcccfffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffcffffffffffffccfccccccfffcffccffffcfccffcffccfffffffffffcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffccffffffffffffffffffcccfcffffffffffffffcffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffcbbbcffbcffffbfbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffcddd1cfdbfffcdfdd1ddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffcdffbcfdbfffcdfffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffcdccdcfdbfffcdfffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffcd111dfdbfffcdfffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffcdcfcdbdbfffcdfffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffcdfffbdbbfffc1fffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffcdcccdcfdbccbdfffbbfccffcffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffcd111bffcd11dffffbbfd1ff1cfd1cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffccffcfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffccccccccffffcfcccccffffcccccccfffffcfccccccccffffcfcccccffcccccffffcccccffcccccfcccccfcffffccffccffccccccccccfffffffffffffffffffffffffffffffffff
        fffffffffffffffb11111bdffff1cb1111ffffb1111dbcffffdc11111dddffffdcb111dbfb1111ffffb111dbfb1111f1111dc1ffffddcb11bfd1111bd11dbcfffffffffffffffffffffffffffffffff
        fffffffffffffffffb1ffcdffff1cbbfffffffbdffffbcffffdcffddffbdffffdcbdffb1cbbfffffffbdffb1cdcffff1cfffc1ffffddc1cc1cddffffdcfcddfffffffffffffffffffffffffffffffff
        fffffffffffffffffb1fffdffff1cbbfffffffbdffffbcffffdcffddffbdffffdcbdfff1bbbfffffffbdfff1bdcffff1cfffc1ffffddcbffffddffffdcffcdcffffffffffffffffffffffffffffffff
        fffffffffffffffffb1fffdcccc1cbdccfffffb1cccfbcffffdcffddffbdffffdcbdffc1cbdccfffffbdffc1bdbccff1bccfc1ffffddcdbcffddccffdcfffbbffffffffffffffffffffffffffffffff
        fffffffffffffffffb1fffddbbb1cbdddcffffb1ddcfbcffffdcffddffbdffffdcb1bb1bfbdddcffffb1bb1bfddddcf1dddfc1ffffddfcb1dcd1ddffdcfffbdffffffffffffffffffffffffffffffff
        fffffffffffffffffb1fffdffff1cbbfffffffbdffffbbfffcdcffddffbdffffdcb1bddffbbfffffffb1bddffdcffff1cfffc1ffffddfffcdcddffffdcfffdcffffffffffffffffffffffffffffffff
        fffffffffffffffffb1fffdffff1cbbfffffffbdffffc1cffb1fffddffc1bffc1cbdfb1ffbbfffffffbdfb1ffdcffff1cfffcdcffc1bfcffbbddffffdcffc1fffffffffffffffffffffffffffffffff
        fffffffffffffffffb1fffdffff1cbdbbbffffbdfffffb1bddcfffddfffb1dd1bfbdffddfbdbbbffffbdffddcddbbbf1cffffc1dd1bfcddddcd1bbbcddb1dcfffffffffffffffffffffffffffffffff
        fffffffffffffffffccfffcffffcfcccccffffccffffffccccffffccffffccccffccfffcfcccccffffccfffcccccccfcffffffccccfffccccfcccccccccccffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbbbbccbddbcfffffffcbdbccccfffccffffcffffcffffccffcbdbcffcbddddfffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccb1ccbdbccddcfffffc1bccdcbcfffbbfffbdffffdcfffbbfb1bcbdffcdccccfffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1ffdbffffddffffc1cfffffbcfffbbfffd1cfff11fffbbf1cffffffcdfffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1ffdcfffff1bfffcdffffffbbfffbbffb1dbfffdd1ffbbdbfffffffcdcffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1fcdffffff1bfffcbffffffb11111bffbbcdcffdcb1cbb1bfffbbbbcd11dcfffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1ffdcfffff1bfffcdffffffbbcccdbfc1ffdcffdcfbddbdbfffccddcdcccffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1ff1bffffddffffc1cfffffbcfffbbfb1dd1dffdcffd1bc1cffffddcdfffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1ffc1dfcd1cfffffb1bfc1cbcfffbbf1dddd1cfdcffcdbfb1cfcddfcdcffffcbffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcdfffcbddbcfffffffbbddbcccfffbccbffffbbfbffffccffbdddbffcbddddfddcfffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffcffffffffffffcffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffce44eeecffffee44efffffceeeeeefffffffeee4eeeffffeb4eeffffffffee44eeeee4eefffffffeeeeeeecceeeeeeeeeeeeefffee44eeeee4eefffffffffffffffffffffffff
        ffffffffffffffffffffe44fffffffffeefffffeefffffeeefffffffe4efffffffceefffffffffffe4fffffee4ecfffffffe4effffff44effffffebfffffe4effffeeeeefffffffffffffffffffffff
        fffffffffffffffffffffe4effffffffefffffeefffffffceeffffffe4fffffffffecfffffffffffe4fffffffe4ecfffffff4effffffe4ffffffffefffffe4fffffffebeeffffffffffffffffffffff
        fffffffffffffffffffffe4efffffffeeffffebfffffffffebcfffffe4fffffffffecfffffffffffe4ffffffffe4efffffff4effffffe4ffffffffefffffe4ffffffffebeffffffffffffffffffffff
        ffffffffffffffffffffffe4effffffeffffcbeffffffffffeefffffe4fffffffffecfffffffffffe4fffffffffe4effffff4effffffe4ffffffffefffffe4fffffffffe4efffffffffffffffffffff
        ffffffffffffffffffffffe4efffffecffffe4fffffffffffe4effffebfffffffffccfffffffffffe4fffffffffe4effffff4effffffe4ffffffffffffffe4fffffffffc4bfffffffffffffffffffff
        fffffffffffffffffffffffbecffffefffffeefffffffffffe4effffebfffffffffccfffffffffffe4ffffffffffe4efffff4effffffe4ffffffffffffffe4ffffffffffe4effffffffffffffffffff
        fffffffffffffffffffffffe4efffefffffc4efffffffffffc4effffebffffffffffcfffffffffffe4ffffffffffe4efffff4effffffe4ffffffffffffffe4ffffffffffe4bffffffffffffffffffff
        ffffffffffffffffffffffffebfffcfffffe4effffffffffffeeffffebffffffffffcfffffffffffe4ffffffffffe4efffff4effffffe4ffffffccffffffe4ffffffffffe44ffffffffffffffffffff
        ffffffffffffffffffffffffe4efccfffffe4effffffffffffe4efffe4ffffffffffcfffffffffffe4ffffffffffe44fffff4effffffe4ffffffecffffffe4ffffffffffc44ffffffffffffffffffff
        fffffffffffffffffffffffffebeeffffffe4effffffffffffe4efffe4ffffffffffcfffffffffffe4ffffffffffe44fffff4effffffe4eeeeeeeeffffffe4ffffffffffc44ffffffffffffffffffff
        fffffffffffffffffffffffffe4ecffffffe4effffffffffffe4efffe4ffffffffffcfffffffffffe4ffffffffffe4efffff4effffffe4ffffffeeffffffe4ffffffffffc44ffffffffffffffffffff
        fffffffffffffffffffffffffceefffffffe4effffffffffffe4cfffe4ffffffffffefffffffffffe4ffffffffffe4efffff4effffffe4ffffffceffffffe4ffffffffffc44ffffffffffffffffffff
        ffffffffffffffffffffffffffeefffffffe4effffffffffffeeffffe4ffffffffffefffffffffffe4ffffffffffe4efffff4effffffe4fffffffcffffffe4ffffffffffe44ffffffffffffffffffff
        ffffffffffffffffffffffffffeefffffffc4efffffffffffc4effffe4ffffffffffefffffffffffe4ffffffffffe4efffff4effffffe4ffffffffffffffe4ffffffffffe4effffffffffffffffffff
        ffffffffffffffffffffffffffeeffffffffe4fffffffffffe4effffe4ffffffffffcfffffffffffe4ffffffffffe4cfffff4effffffe4ffffffffffffffe4ffffffffffe4effffffffffffffffffff
        ffffffffffffffffffffffffffeeffffffffe4effffffffffe4cffffe4fffffffffcffffffffffffe4fffffffffc4effffff4effffffe4ffffffffffcfffe4ffffffffff4bfffffffffffffffffffff
        ffffffffffffffffffffffffffeeffffffffceeffffffffffeefffffe4cffffffffeffffffffffffe4fffffffffb4effffff4effffffe4ffffffffffefffe4cffffffffe4efffffffffffffffffffff
        ffffffffffffffffffffffffffeefffffffffe4effffffffeeffffffceeffffffffeffffffffffffe4ffffffffe4efffffff4effffffe4fffffffffeefffe4efffffffebeffffffffffffffffffffff
        ffffffffffffffffffffffffffeeffffffffffeefffffffcecfffffffe4fffffffefffffffffffff44effffffebecffffffc4effffffe4fffffffffecfffe4effffffeeeeffffffffffffffffffffff
        fffffffffffffffffffffffffe44effffffffffeecffffeecfffffffffebeffffeeffffffffffffe444effffebecfffffffe4eefffffe4effffffeeecffe44beffffebeefffffffffffffffffffffff
        fffffffffffffffffffffffceeeeeecfffffffffceeeeeeffffffffffffeeeeeecffffffffffffeeeeeeeeeeeefffffffeeeeeeeffeeeeeeeeeeeeeeffeeeeeeeeeeeefffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff2222222fe222222efefe222222efefe222222ffffe22ffff2ffffffffffe2effffe22fefe222222ff222222efeff222222efe2effff2ffffffffffffffffffffffff
        fffffffffffffffffffffffffffefffffffeffffffef2ffffffffffefefffffffffffffffff2ffffffffff2feffffef2fefefffffffeffffffffefeffffffefeff2fff2ffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffe222222ef2ffffffffffefefffffffff2fff2fff2ffffffffff2ffeff2ff2fef2222222ff222222efefeffffffefefffeff2ffffffffffffffffffffffff
        fffffffffffffffffffffffffffefffffffeffffeeff2ffffffffffefeffffffffe2eee2eff2ffffffffff2ffeffeff2fefffffffeffffffffefefeffffffefeffffef2ffffffffffffffffffffffff
        fffffffffffffffffffffffffff2222222fefffffeefeffffffffffef2222222ffefffffeff222222effff2fff22fff2fef2222222ff222222efeff222222efeffffe22ffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeefffffeffffffffffffffffffffffffeeeeeeefffeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffff2feffffef2fffffffeffffffefeffffffef2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffffffefff2fffef2fffffffeffffffef2ffffffef2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeefff2fffefffef2fffffffeffffffefefffe2fff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffeeffffeffefefffffff2ffffffefeffffeeff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffffeffffff2fefe222222ff222222ffefffffeefe222222ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecccccccccccccccccccccccccccccceffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffccfcfcfcfcccfffffffffceffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffcfffcffcffcfffffffffcefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffccfcfcfcffcffffffffceffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `]
    scene.setBackgroundImage(background._pickRandom())
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.block, function (sprite, otherSprite) {
    animation2 = 1
    mySprite.ay = 0
    mySprite.vy = 0
    if (animation2 == 1) {
        animation.runImageAnimation(
        crackblock3,
        [img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d d d b b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d . . . . . . . . d d d b b 
            d . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d . b b b b b b d e 
            1 d d d d d . . 1 d b b d d d d 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d . . d b 1 d d b d d d b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 . . . . . . . . . . d . . . b 
            . . . . . . . . . . . . . d b b 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            . b b b b b d . b b b b b b . . 
            . d d d d d . . 1 d b b d . . d 
            . . d d d . . b 1 d b b . . . b 
            . . . d . . d b 1 d d . . d d b 
            . . . . . d d b 1 d . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            . b b b b b d . b b b b . . . . 
            . d d d d d . . 1 d b . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            . d d d d b b b 1 d d d d d d . 
            . d d d d d b b 1 d d d d d . . 
            . . . d d d d b 1 d d d . . . . 
            . . . . . d d b 1 d . . . . . . 
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
            `,img`
            . . b b b b b e b b b b b b . . 
            . . . d d b b d 1 d d d d . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . . . . 1 . . . . . . . 
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
            `,img`
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
            `],
        100,
        false
        )
        animation.runImageAnimation(
        crackblock4,
        [img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d d d b b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d . . . . . . . . d d d b b 
            d . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d . b b b b b b d e 
            1 d d d d d . . 1 d b b d d d d 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d . . d b 1 d d b d d d b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 . . . . . . . . . . d . . . b 
            . . . . . . . . . . . . . d b b 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            . b b b b b d . b b b b b b . . 
            . d d d d d . . 1 d b b d . . d 
            . . d d d . . b 1 d b b . . . b 
            . . . d . . d b 1 d d . . d d b 
            . . . . . d d b 1 d . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            . b b b b b d . b b b b . . . . 
            . d d d d d . . 1 d b . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            . d d d d b b b 1 d d d d d d . 
            . d d d d d b b 1 d d d d d . . 
            . . . d d d d b 1 d d d . . . . 
            . . . . . d d b 1 d . . . . . . 
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
            `,img`
            . . b b b b b e b b b b b b . . 
            . . . d d b b d 1 d d d d . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . . . . 1 . . . . . . . 
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
            `,img`
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
            `],
        100,
        false
        )
        animation.runImageAnimation(
        crackblock2,
        [img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d d d b b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d . . . . . . . . d d d b b 
            d . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d . b b b b b b d e 
            1 d d d d d . . 1 d b b d d d d 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d . . d b 1 d d b d d d b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 . . . . . . . . . . d . . . b 
            . . . . . . . . . . . . . d b b 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            . b b b b b d . b b b b b b . . 
            . d d d d d . . 1 d b b d . . d 
            . . d d d . . b 1 d b b . . . b 
            . . . d . . d b 1 d d . . d d b 
            . . . . . d d b 1 d . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            . b b b b b d . b b b b . . . . 
            . d d d d d . . 1 d b . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            . d d d d b b b 1 d d d d d d . 
            . d d d d d b b 1 d d d d d . . 
            . . . d d d d b 1 d d d . . . . 
            . . . . . d d b 1 d . . . . . . 
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
            `,img`
            . . b b b b b e b b b b b b . . 
            . . . d d b b d 1 d d d d . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . . . . 1 . . . . . . . 
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
            `,img`
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
            `],
        100,
        false
        )
        animation.runImageAnimation(
        crackblock1,
        [img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d d d b b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d . . . . . . . . d d d b b 
            d . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d . b b b b b b d e 
            1 d d d d d . . 1 d b b d d d d 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d . . d b 1 d d b d d d b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 . . . . . . . . . . d . . . b 
            . . . . . . . . . . . . . d b b 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            . b b b b b d . b b b b b b . . 
            . d d d d d . . 1 d b b d . . d 
            . . d d d . . b 1 d b b . . . b 
            . . . d . . d b 1 d d . . d d b 
            . . . . . d d b 1 d . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            . b b b b b d . b b b b . . . . 
            . d d d d d . . 1 d b . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            . d d d d b b b 1 d d d d d d . 
            . d d d d d b b 1 d d d d d . . 
            . . . d d d d b 1 d d d . . . . 
            . . . . . d d b 1 d . . . . . . 
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
            `,img`
            . . b b b b b e b b b b b b . . 
            . . . d d b b d 1 d d d d . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . . . . 1 . . . . . . . 
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
            `,img`
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
            `],
        100,
        false
        )
        animation.runImageAnimation(
        crackblock5,
        [img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d d d b b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d . . . . . . . . d d d b b 
            d . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d . b b b b b b d e 
            1 d d d d d . . 1 d b b d d d d 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d . . d b 1 d d b d d d b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 . . . . . . . . . . d . . . b 
            . . . . . . . . . . . . . d b b 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            . b b b b b d . b b b b b b . . 
            . d d d d d . . 1 d b b d . . d 
            . . d d d . . b 1 d b b . . . b 
            . . . d . . d b 1 d d . . d d b 
            . . . . . d d b 1 d . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            . b b b b b d . b b b b . . . . 
            . d d d d d . . 1 d b . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            . d d d d b b b 1 d d d d d d . 
            . d d d d d b b 1 d d d d d . . 
            . . . d d d d b 1 d d d . . . . 
            . . . . . d d b 1 d . . . . . . 
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
            `,img`
            . . b b b b b e b b b b b b . . 
            . . . d d b b d 1 d d d d . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . . . . 1 . . . . . . . 
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
            `,img`
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
            `],
        100,
        false
        )
        animation.runImageAnimation(
        crackblock6,
        [img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d d d b b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d . . . . . . . . d d d b b 
            d . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d . b b b b b b d e 
            1 d d d d d . . 1 d b b d d d d 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d . . d b 1 d d b d d d b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 . . . . . . . . . . d . . . b 
            . . . . . . . . . . . . . d b b 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            . b b b b b d . b b b b b b . . 
            . d d d d d . . 1 d b b d . . d 
            . . d d d . . b 1 d b b . . . b 
            . . . d . . d b 1 d d . . d d b 
            . . . . . d d b 1 d . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            . b b b b b d . b b b b . . . . 
            . d d d d d . . 1 d b . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            . d d d d b b b 1 d d d d d d . 
            . d d d d d b b 1 d d d d d . . 
            . . . d d d d b 1 d d d . . . . 
            . . . . . d d b 1 d . . . . . . 
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
            `,img`
            . . b b b b b e b b b b b b . . 
            . . . d d b b d 1 d d d d . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . . . . 1 . . . . . . . 
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
            `,img`
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
            `],
        100,
        false
        )
        animation.runImageAnimation(
        crackblock7,
        [img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d d d b b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d . . . . . . . . d d d b b 
            d . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d . b b b b b b d e 
            1 d d d d d . . 1 d b b d d d d 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d . . d b 1 d d b d d d b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 . . . . . . . . . . d . . . b 
            . . . . . . . . . . . . . d b b 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            . b b b b b d . b b b b b b . . 
            . d d d d d . . 1 d b b d . . d 
            . . d d d . . b 1 d b b . . . b 
            . . . d . . d b 1 d d . . d d b 
            . . . . . d d b 1 d . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            . b b b b b d . b b b b . . . . 
            . d d d d d . . 1 d b . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            . d d d d b b b 1 d d d d d d . 
            . d d d d d b b 1 d d d d d . . 
            . . . d d d d b 1 d d d . . . . 
            . . . . . d d b 1 d . . . . . . 
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
            `,img`
            . . b b b b b e b b b b b b . . 
            . . . d d b b d 1 d d d d . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . . . . 1 . . . . . . . 
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
            `,img`
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
            `],
        100,
        false
        )
        animation.runImageAnimation(
        crackblock8,
        [img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d d d b b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d e b b b b b b d e 
            1 d d d d d d d 1 d b b d d d d 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d . . . . . . . . d d d b b 
            d . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            b b b b b b d . b b b b b b d e 
            1 d d d d d . . 1 d b b d d d d 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d . . d b 1 d d b d d d b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 . . . . . . . . . . d . . . b 
            . . . . . . . . . . . . . d b b 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d d 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            . b b b b b d . b b b b b b . . 
            . d d d d d . . 1 d b b d . . d 
            . . d d d . . b 1 d b b . . . b 
            . . . d . . d b 1 d d . . d d b 
            . . . . . d d b 1 d . . . 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            . b b b b b d . b b b b . . . . 
            . d d d d d . . 1 d b . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            b b b b b b b e b b b b b b b e 
            1 d d d d b b d 1 d d d d d d . 
            . d d d d b b b 1 d d d d d d . 
            . d d d d d b b 1 d d d d d . . 
            . . . d d d d b 1 d d d . . . . 
            . . . . . d d b 1 d . . . . . . 
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
            `,img`
            . . b b b b b e b b b b b b . . 
            . . . d d b b d 1 d d d d . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . . . . 1 . . . . . . . 
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
            `,img`
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
            `],
        100,
        false
        )
        pause(900)
        sprites.destroy(crackblock1)
        sprites.destroy(crackblock2)
        sprites.destroy(crackblock3)
        sprites.destroy(crackblock4)
        sprites.destroy(crackblock5)
        sprites.destroy(crackblock6)
        sprites.destroy(crackblock7)
        sprites.destroy(crackblock8)
    } else {
    	
    }
    animation2 = 1
    mySprite.ay = 110
})
let background: Image[] = []
let invX = 0
let key1equip = false
let invON = false
let direction = 0
let sword2 = false
let houseofpain = 0
let mimicdeath = 0
let bonedeath = 0
let chestmimic: Sprite = null
let animation2 = 0
let crackblock8: Sprite = null
let crackblock7: Sprite = null
let crackblock6: Sprite = null
let crackblock5: Sprite = null
let crackblock4: Sprite = null
let crackblock3: Sprite = null
let crackblock2: Sprite = null
let crackblock1: Sprite = null
let inventory: boolean[] = []
let bone: StatusBarSprite = null
let monsterskull: Sprite = null
let key1sprite: Sprite = null
let swordsprite: Sprite = null
let mySprite: Sprite = null
let mimic: StatusBarSprite = null
let mimicsprite: Sprite = null
let reachmimic = 0
let bigsnake = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Enemy)
bigsnake.changeScale(2, ScaleAnchor.Middle)
reachmimic = 0
mimicsprite = sprites.create(assets.image`myImage2`, SpriteKind.Enemy)
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
scene.cameraFollowSprite(mySprite)
mySprite.ay = 110
controller.moveSprite(mySprite, 100, 0)
swordsprite = sprites.create(assets.image`myImage0`, SpriteKind.sword)
key1sprite = sprites.create(assets.image`myImage`, SpriteKind.key1)
tiles.placeOnTile(swordsprite, tiles.getTileLocation(0, 6))
tiles.placeOnTile(key1sprite, tiles.getTileLocation(13, 2))
monsterskull = sprites.create(assets.image`sword`, SpriteKind.Enemy)
tiles.placeOnTile(monsterskull, tiles.getTileLocation(23, 8))
bone = statusbars.create(20, 4, StatusBarKind.Health)
bone.attachToSprite(monsterskull)
bone.value = 100
inventory = []
info.setLife(3)
crackblock1 = sprites.create(assets.image`break1`, SpriteKind.block)
crackblock2 = sprites.create(assets.image`break1`, SpriteKind.block)
crackblock3 = sprites.create(assets.image`break1`, SpriteKind.block)
crackblock4 = sprites.create(assets.image`break1`, SpriteKind.block)
crackblock5 = sprites.create(assets.image`break1`, SpriteKind.block)
crackblock6 = sprites.create(assets.image`break1`, SpriteKind.block)
crackblock7 = sprites.create(assets.image`break1`, SpriteKind.block)
crackblock8 = sprites.create(assets.image`break1`, SpriteKind.block)
tiles.placeOnTile(crackblock1, tiles.getTileLocation(27, 9))
tiles.placeOnTile(crackblock2, tiles.getTileLocation(28, 9))
tiles.placeOnTile(crackblock3, tiles.getTileLocation(29, 9))
tiles.placeOnTile(crackblock4, tiles.getTileLocation(30, 9))
tiles.placeOnTile(crackblock5, tiles.getTileLocation(31, 9))
tiles.placeOnTile(crackblock6, tiles.getTileLocation(32, 9))
tiles.placeOnTile(crackblock7, tiles.getTileLocation(33, 9))
tiles.placeOnTile(crackblock8, tiles.getTileLocation(34, 9))
animation2 = 0
mySprite.sayText("Hey, I'm finally awake.", 1500, true)
tiles.placeOnTile(mimicsprite, tiles.getTileLocation(99, 99))
chestmimic = sprites.create(assets.image`mimicchest`, SpriteKind.chestmimic)
tiles.placeOnTile(chestmimic, tiles.getTileLocation(40, 8))
reachmimic = 0
tiles.placeOnTile(bigsnake, tiles.getTileLocation(42, 16))
bonedeath = 0
mimicdeath = 0
// attack forever
forever(function () {
    if (monsterskull.overlapsWith(mySprite) && bone.value > 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
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
    if (mimicsprite.overlapsWith(mySprite) && mimic.value > 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mimicsprite,
        assets.animation`bitemimic`,
        120,
        false
        )
        pause(480)
        if (mimicsprite.overlapsWith(mySprite) && mimic.value > 0) {
            info.changeLifeBy(-1)
        }
    }
})
// walk forever
forever(function () {
    if (key1equip == true && bonedeath == 0) {
        monsterskull.follow(mySprite, 20)
        animation.runImageAnimation(
        monsterskull,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111df.......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd1dfbddddbf......
            ......fbddfcdbbbcf......
            .......f11111bbcf.......
            .......f1b1fffff........
            .......fbfc111bf........
            ........ff1b1bff........
            .........fbfbfff.f......
            ..........ffffffff......
            ............fffff.......
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            ........f11111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd111111dddf......
            ......fd11111ddddf......
            ......fd11dddddddf......
            ......f111dddddddf......
            ......f11fcddddddf......
            .....fb1111bdddbf.......
            .....f1b1bdfcfff........
            .....fbfbffffffff.......
            ......fffffffffff.ff....
            ...........ffffffff.....
            ........f1b1bffffff.....
            ........fbfbffffff......
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        false
        )
        pause(400)
    }
    if (reachmimic == 1 && mimicdeath == 0) {
        mimicsprite.follow(mySprite, 20)
        animation.runImageAnimation(
        mimicsprite,
        assets.animation`walkmimic0`,
        200,
        false
        )
        pause(600)
    }
})
