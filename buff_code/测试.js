if (textContains("请输入支付密码").exists()) {
    log('yse')
    sleep(2000);
    var password = "219316";
    var buybutton=textContains("2").findOne();
    press(buybutton.bounds().centerX(),buybutton.bounds().centerY(),1);
    sleep (1000)
    click('1')
    sleep(1000)
    click('9')
    sleep(1000)
    click('3')
    sleep(1000)
    click('1')
    sleep(1000)
    click('6')
}