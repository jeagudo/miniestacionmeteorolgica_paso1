input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Math.round(Math.map(input.lightLevel(), 0, 255, 0, 100)))
})
basic.showString("A-Temp B-Lum")
basic.forever(function () {
	
})
