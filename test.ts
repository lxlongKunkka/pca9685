// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。
Servo.SetLED(1, false)
LCD1IN8.LCD_Init()
LCD1IN8.LCD_Filling(COLOR.RED)
basic.forever(function() {
    if (SimpleShieldKey.Listen_Key(KEY.A)) {
        LCD1IN8.DrawRectangle(randint(0, 80), randint(0, 80), randint(80, 160), randint(80, 120), randint(0, 65535), DRAW_FILL.DRAW_EMPTY, DOT_PIXEL.DOT_PIXEL_1)
    }
    if (SimpleShieldKey.Listen_Key(KEY.B)) {
        LCD1IN8.LCD_Filling(randint(0, 65535))
    }
})