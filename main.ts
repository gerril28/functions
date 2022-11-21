input.onButtonPressed(Button.A, function () {
    moveplayer(player, -1)
})
function moveplayer (sprite: game.LedSprite, num: number) {
    sprite.move(num)
}
input.onButtonPressed(Button.B, function () {
    moveplayer(player, 1)
})
let player: game.LedSprite = null
player = game.createSprite(2, 2)
basic.forever(function () {
	
})
