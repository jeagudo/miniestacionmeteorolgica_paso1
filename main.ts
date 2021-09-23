input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.AB, function () {
    temperatura = 0
    for (let index = 0; index <= num_lecturas; index++) {
        temperatura = temperatura + input.temperature()
        basic.pause(1000)
    }
    basic.showNumber(temperatura / num_lecturas)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Math.round(Math.map(input.lightLevel(), 0, 255, 0, 100)))
})
let temperatura = 0
let num_lecturas = 0
num_lecturas = 5
basic.showString("A-Temp B-Lum")
basic.forever(function () {
	
})
