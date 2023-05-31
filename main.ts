pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
 pins.setPull(DigitalPin.P13, PinPullMode.PullNone)

 const center : DigitalPin = DigitalPin.P15
 const left: DigitalPin = DigitalPin.P14
const right: DigitalPin = DigitalPin.P13

let center1: number = 0
let left1: number = 0
let right1: number = 0

let speed = 0
let speed2 = 0





basic.forever(function() {
    
center1 = pins.digitalReadPin(center)
    left1 = pins.digitalReadPin(left)
   right1 = pins.digitalReadPin(center)

   if(center1 === 1){

       speed = -190
       speed2 = -250
       PCAmotor.MotorRun(PCAmotor.Motors.M1, speed)
       PCAmotor.MotorRun(PCAmotor.Motors.M1, speed2)
   }

    if (center1 === 0) {

        speed = 0
        speed2 = 0
        PCAmotor.MotorRun(PCAmotor.Motors.M1, speed)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, speed2)
    }





})





