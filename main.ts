let degrees = 0
input.onGesture(Gesture.Shake, function () {
    degrees = randint(80, 100)
    if (degrees < 84) {
        basic.showString("A-")
    } else if (degrees >= 85) {
        basic.showString("A")
    } else if (degrees >= 90) {
        basic.showString("A+")
    }
})
basic.forever(function () {
	
})
