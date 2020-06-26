input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 4))
    led.setBrightness(randint(30, 250))
    basic.pause(50)
})
