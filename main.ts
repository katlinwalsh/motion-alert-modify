radio.onReceivedNumber(function (receivedNumber) {
    fwdMotors.setSpeed(fwdBase.leftServo, 30)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
    }
    fwdMotors.setSpeed(fwdBase.leftServo, 0)
})
fwdSensors.pir1.onMovement(function () {
    radio.sendNumber(1)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
    }
    basic.clearScreen()
})
radio.setGroup(1)
fwdMotors.setSpeed(fwdBase.leftServo, 0)
basic.pause(200)
