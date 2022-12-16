controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    radio.sendNumber(0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    radio.sendNumber(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    radio.sendNumber(4)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    radio.sendNumber(6)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    radio.sendNumber(3)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    radio.sendNumber(6)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    radio.sendNumber(5)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    radio.sendNumber(2)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    radio.sendNumber(6)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    radio.sendNumber(6)
})
radio.setGroup(1)
