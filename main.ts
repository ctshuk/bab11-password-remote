input.onButtonPressed(Button.A, function () {
    radio.sendNumber(123)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("saya")
})
radio.setGroup(1)
basic.forever(function () {
	
})
