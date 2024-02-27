namespace SpriteKind {
    export const equip = SpriteKind.create()
    export const sword = SpriteKind.create()
    export const key1 = SpriteKind.create()
    export const block = SpriteKind.create()
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
    sword = true
    pickup()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sword == true && direction == 1) {
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
    } else if (sword == true && direction == 0) {
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
    ded()
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
    if (sword == true) {
        inventory.push(sword)
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
    game.gameOver(false)
})
function ded () {
    if (bone.value <= 0) {
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
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.block, function (sprite, otherSprite) {
    mySprite.ay = 0
    mySprite.vy = 0
    if (animation2 == 1) {
    	
    } else {
        animation.runImageAnimation(
        crackblock3,
        [img`
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            d . . . . . . . . . . . . . . . 
            1 d d . . . . . . . . d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . d b b 
            1 . . . . . . . . . . d . . . b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 d d d . . d b 1 d d b d d d b 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d d d . . 1 d b b d d d d 
            b b b b b b d . b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . d d b 1 d . . . 1 . . 
            . . . d . . d b 1 d d . . d d b 
            . . d d d . . b 1 d b b . . . b 
            . d d d d d . . 1 d b b d . . d 
            . b b b b b d . b b b b b b . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . d d d d d . . 1 d b . . . . . 
            . b b b b b d . b b b b . . . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            1 d d d d d d b 1 d . . . . . . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . d d b 1 d . . . . . . 
            . . . d d d d b 1 d d d . . . . 
            . d d d d d b b 1 d d d d d . . 
            . d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . . . . 1 . . . . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . d d b b d 1 d d d d . . . 
            . . b b b b b e b b b b b b . . 
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
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            d . . . . . . . . . . . . . . . 
            1 d d . . . . . . . . d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . d b b 
            1 . . . . . . . . . . d . . . b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 d d d . . d b 1 d d b d d d b 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d d d . . 1 d b b d d d d 
            b b b b b b d . b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . d d b 1 d . . . 1 . . 
            . . . d . . d b 1 d d . . d d b 
            . . d d d . . b 1 d b b . . . b 
            . d d d d d . . 1 d b b d . . d 
            . b b b b b d . b b b b b b . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . d d d d d . . 1 d b . . . . . 
            . b b b b b d . b b b b . . . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            1 d d d d d d b 1 d . . . . . . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . d d b 1 d . . . . . . 
            . . . d d d d b 1 d d d . . . . 
            . d d d d d b b 1 d d d d d . . 
            . d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . . . . 1 . . . . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . d d b b d 1 d d d d . . . 
            . . b b b b b e b b b b b b . . 
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
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            d . . . . . . . . . . . . . . . 
            1 d d . . . . . . . . d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . d b b 
            1 . . . . . . . . . . d . . . b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 d d d . . d b 1 d d b d d d b 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d d d . . 1 d b b d d d d 
            b b b b b b d . b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . d d b 1 d . . . 1 . . 
            . . . d . . d b 1 d d . . d d b 
            . . d d d . . b 1 d b b . . . b 
            . d d d d d . . 1 d b b d . . d 
            . b b b b b d . b b b b b b . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . d d d d d . . 1 d b . . . . . 
            . b b b b b d . b b b b . . . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            1 d d d d d d b 1 d . . . . . . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . d d b 1 d . . . . . . 
            . . . d d d d b 1 d d d . . . . 
            . d d d d d b b 1 d d d d d . . 
            . d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . . . . 1 . . . . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . d d b b d 1 d d d d . . . 
            . . b b b b b e b b b b b b . . 
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
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            d . . . . . . . . . . . . . . . 
            1 d d . . . . . . . . d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . d b b 
            1 . . . . . . . . . . d . . . b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 d d d . . d b 1 d d b d d d b 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d d d . . 1 d b b d d d d 
            b b b b b b d . b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . d d b 1 d . . . 1 . . 
            . . . d . . d b 1 d d . . d d b 
            . . d d d . . b 1 d b b . . . b 
            . d d d d d . . 1 d b b d . . d 
            . b b b b b d . b b b b b b . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . d d d d d . . 1 d b . . . . . 
            . b b b b b d . b b b b . . . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            1 d d d d d d b 1 d . . . . . . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . d d b 1 d . . . . . . 
            . . . d d d d b 1 d d d . . . . 
            . d d d d d b b 1 d d d d d . . 
            . d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . . . . 1 . . . . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . d d b b d 1 d d d d . . . 
            . . b b b b b e b b b b b b . . 
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
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            d . . . . . . . . . . . . . . . 
            1 d d . . . . . . . . d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . d b b 
            1 . . . . . . . . . . d . . . b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 d d d . . d b 1 d d b d d d b 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d d d . . 1 d b b d d d d 
            b b b b b b d . b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . d d b 1 d . . . 1 . . 
            . . . d . . d b 1 d d . . d d b 
            . . d d d . . b 1 d b b . . . b 
            . d d d d d . . 1 d b b d . . d 
            . b b b b b d . b b b b b b . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . d d d d d . . 1 d b . . . . . 
            . b b b b b d . b b b b . . . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            1 d d d d d d b 1 d . . . . . . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . d d b 1 d . . . . . . 
            . . . d d d d b 1 d d d . . . . 
            . d d d d d b b 1 d d d d d . . 
            . d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . . . . 1 . . . . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . d d b b d 1 d d d d . . . 
            . . b b b b b e b b b b b b . . 
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
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            d . . . . . . . . . . . . . . . 
            1 d d . . . . . . . . d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . d b b 
            1 . . . . . . . . . . d . . . b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 d d d . . d b 1 d d b d d d b 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d d d . . 1 d b b d d d d 
            b b b b b b d . b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . d d b 1 d . . . 1 . . 
            . . . d . . d b 1 d d . . d d b 
            . . d d d . . b 1 d b b . . . b 
            . d d d d d . . 1 d b b d . . d 
            . b b b b b d . b b b b b b . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . d d d d d . . 1 d b . . . . . 
            . b b b b b d . b b b b . . . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            1 d d d d d d b 1 d . . . . . . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . d d b 1 d . . . . . . 
            . . . d d d d b 1 d d d . . . . 
            . d d d d d b b 1 d d d d d . . 
            . d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . . . . 1 . . . . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . d d b b d 1 d d d d . . . 
            . . b b b b b e b b b b b b . . 
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
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            d . . . . . . . . . . . . . . . 
            1 d d . . . . . . . . d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . d b b 
            1 . . . . . . . . . . d . . . b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 d d d . . d b 1 d d b d d d b 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d d d . . 1 d b b d d d d 
            b b b b b b d . b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . d d b 1 d . . . 1 . . 
            . . . d . . d b 1 d d . . d d b 
            . . d d d . . b 1 d b b . . . b 
            . d d d d d . . 1 d b b d . . d 
            . b b b b b d . b b b b b b . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . d d d d d . . 1 d b . . . . . 
            . b b b b b d . b b b b . . . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            1 d d d d d d b 1 d . . . . . . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . d d b 1 d . . . . . . 
            . . . d d d d b 1 d d d . . . . 
            . d d d d d b b 1 d d d d d . . 
            . d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . . . . 1 . . . . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . d d b b d 1 d d d d . . . 
            . . b b b b b e b b b b b b . . 
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
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            d . . . . . . . . . . . . . . . 
            1 d d . . . . . . . . d d d b b 
            1 d d d d d d b 1 d d d d b d b 
            1 d d d d d d b 1 d d d 1 1 d b 
            1 d d d d d d b 1 d d b d d d b 
            1 d d d d d d b 1 d b b d d d b 
            1 d d d d d d d 1 d b b d d d d 
            b b b b b b d e b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . d b b 
            1 . . . . . . . . . . d . . . b 
            1 d . . . d d b 1 d d d 1 1 . . 
            1 d d d . . d b 1 d d b d d d b 
            1 d d d d . . b 1 d b b d d d b 
            1 d d d d d . . 1 d b b d d d d 
            b b b b b b d . b b b b b b d e 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . d d b 1 d . . . 1 . . 
            . . . d . . d b 1 d d . . d d b 
            . . d d d . . b 1 d b b . . . b 
            . d d d d d . . 1 d b b d . . d 
            . b b b b b d . b b b b b b . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 1 . 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d d b 1 d d d d d d b 
            1 d d d d d b b 1 d d d d d d b 
            1 d d d d b b b 1 d d d d d d b 
            1 d d d d b b d 1 d d d d d d d 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . d . . . . . . . . . . . . 
            . . d d d . . b 1 . . . . . . . 
            . d d d d d . . 1 d b . . . . . 
            . b b b b b d . b b b b . . . . 
            d 1 1 1 1 1 1 b d 1 1 1 1 1 . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            d 1 1 1 1 1 1 . d 1 . . . . . . 
            1 d d d d d d b 1 d . . . . . . 
            1 d d d d d d b 1 d d d d d . . 
            1 d d d d d d b 1 d d d d d d . 
            1 d d d d d b b 1 d d d d d d . 
            1 d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . d d b 1 d . . . . . . 
            . . . d d d d b 1 d d d . . . . 
            . d d d d d b b 1 d d d d d . . 
            . d d d d b b b 1 d d d d d d . 
            1 d d d d b b d 1 d d d d d d . 
            b b b b b b b e b b b b b b b e 
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
            . . . . . . . . 1 . . . . . . . 
            . . . . . . b b 1 d d . . . . . 
            . . . . . b b b 1 d d d . . . . 
            . . . d d b b d 1 d d d d . . . 
            . . b b b b b e b b b b b b . . 
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
    }
    animation2 = 1
    mySprite.ay = 110
})
let invX = 0
let key1equip = false
let invON = false
let direction = 0
let sword = false
let houseofpain = 0
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
crackblock5 = sprites.create(assets.image`break1`, SpriteKind.block)
crackblock6 = sprites.create(assets.image`break1`, SpriteKind.block)
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
forever(function () {
    if (key1equip == true) {
        monsterskull.follow(mySprite, 20)
    }
})
forever(function () {
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
