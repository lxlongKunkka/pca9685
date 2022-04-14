/*****************************************************************************
* | File      	:   SSLCD1in8.ts
* | Function    :   Contorl ST7735 1.8inch lcd Show
* | Info        :
*----------------
* | This version:   V2.0
* | Date        :   2022-03-21
* | Info        :   for micro:bit v2
*
******************************************************************************/

enum Motors {
    //% block="M1"
    M1 = 0x1,
    //% block="M2"
    M2 = 0x2,
}
//% weight=20 color=#3333ff icon="\uf113"
namespace Motor {
    
    //% blockId=Motor block="Motor|%index|speed %speed"
    //% speed eg: 150
    //% weight=100
    //% speed.min=-255 speed.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRun(index: Motors, speed: number): void {
        speed = speed * 16; // map 255 to 4096
        if (speed >= 4096) {
            speed = 4095
        }
        if (speed <= -4096) {
            speed = -4095
        }
        if (index == 1) {
            if (speed >= 0) {
                Servo.setPwm(2, 0, 4095)
                Servo.setPwm(3, 0, 0)
                Servo.setPwm(1, 0, speed)
            } else {
                Servo.setPwm(2, 0, 0)
                Servo.setPwm(3, 0, 4095)
                Servo.setPwm(1, 0, -speed)
            }
        } else if (index == 2) {
            if (speed >= 0) {
                Servo.setPwm(5, 0, 4095)
                Servo.setPwm(4, 0, 0)
                Servo.setPwm(6, 0, speed)
            } else {
                Servo.setPwm(5, 0, 0)
                Servo.setPwm(4, 0, 4095)
                Servo.setPwm(6, 0, -speed)
            }
        }
    }
}