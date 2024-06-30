// 显示控制台日志
// console.show();

function performGesture() {
    gestures([350, [300, 400], [300, 1400]]);
}

function Observer() {
    function unique(arr) 
    {
        let newArr = [arr[0]];
        for (let i = 1; i < arr.length; i++) {
            let flag = false;
            for (var j = 0; j < newArr.length; j++) {
                if (arr[i] == newArr[j]) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
    currentActis = new Array();
    for (let c = 0; c < 30; c++) {
        sleep(2000);
        currentActis[c] = currentActivity();
    }
    ac = unique(currentActis);
    if (ac.length == 1) {
        return false;
    }
    return true;
}

var j = 0;
function 关闭应用() {
    j = 0;
    toast("即将关闭应用");
    let packageName = currentPackage();
    log(app.getAppName(packageName) + "将被关闭,进入重启");
    recents();
    sleep(2000);
    click(480, 2100, 600, 2220);
    console.show();
    sleep(1000);
    for (var i = 0; i < 4; i++) {
        log(4 - i + "后重启脚本");
        sleep(1000);
    }
    console.hide();
}

function mainstrat() {
    setScreenMetrics(1080, 2110);
    launchApp("网易BUFF");
    if (textContains("首页").findOne(4000))
        {
            click(884, 2140, 1080, 2280);
        }
    sleep(2000)
    click(372,806,462,896)
    click('我的购买');
    click('创建报价');
    while(true)
    {
        click('我知道了');
        // console.show()
        // console.log('WAIT')
        click('我的购买');
        sleep(1000)
        performGesture()
        sleep(1000)
        if (textContains("等待你发").exists()||textContains("等待付款").exists()||textContains("一键发送").exists()) {
            if (textContains("等待付款").exists()) {
                toast('2')
                var buybutton = textContains("等待付款").findOne();
                press(buybutton.bounds().centerX(), buybutton.bounds().centerY(), 1);
                textContains("立即支付").waitFor();
                click("立即支付");
                sleep(1000);
                textContains("确认付款").waitFor();
                click("确认付款");
                textContains("请输入支付密码").waitFor();
                if (textContains("请输入支付密码").exists()) {
                    log('yse')
                    sleep(2000);
                    var password = "219316";
                    click('2')
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
                sleep(3000);
                if (textContains("支付密码不正确").exists()) {
                    sleep(2000);      
                    for (var i = 0; i < password.length; i++) {
                        click(password[i]);
                        sleep(1000);
                    }
                }
                textContains("完成").waitFor();
                click('完成');
                textContains("订单详情").waitFor();
                textContains("发起报价").findOne(10000);
                click('发起报价');
                click('创建报价');
                sleep(2000);
                click(12, 84, 132, 228);
                sleep(10000);
            }
            else 
            {
                sleep(5000);
                if (textContains("一键发送").exists())
                    {
                        var buybutton=textContains("一键发送").findOne();
                        press(buybutton.bounds().centerX(),buybutton.bounds().centerY(),1);
                        toast('111')
                    }
                else if(textContains("发起报价").exists())
                {
                    var buybutton=textContains("发起报价").findOne();
                    press(buybutton.bounds().centerX(),buybutton.bounds().centerY(),1);
                }
                else if(textContains("等待你").exists())

                    {
                        if (textContains("一键发送").exists())
                            {
                                var buybutton=textContains("一键发送").findOne();
                                press(buybutton.bounds().centerX(),buybutton.bounds().centerY(),1);
                                toast('1')
                            }
                        // toast('123')
                        var buybutton=textContains("等待你发").findOne();
                        press(buybutton.bounds().centerX(),buybutton.bounds().centerY(),1);
                        // click(888,486,1044,590)
                        textContains("发起报价").findOne(10000);
                        click('发起报价')
                    }
                // if textContains("一键发送").waitFor();
                if(id("drawer_icon").findOne(10000))
                    {
                    id("drawer_icon").findOne().click();
                    }
                    click('我知道了');
        
            }
        }
        else if(textContains("订单详情").exists())
            {
                click('我知道了');
                if(id("drawer_icon").findOne(10000))
                    {
                    id("drawer_icon").findOne().click();
                    }
                    

            }
        click('我知道了');
        toast('22')

}
}

// 启动定时器线程
// var gestureThread = threads.start(function() {
//     setInterval(function() {
//             performGesture();
//         }, 30000);
// });




// 启动主线程
var workThread = threads.start(function() {
    mainstrat();
});


var observerThread = threads.start(function() {
    while (true) {
        sleep(5000);
        if (!Observer()) {
            workThread.interrupt();
            workThread = threads.start(function () {
                console.setPosition(device.width / 2, device.height / 1.5);
                console.show();
                console.warn("脚本在3秒后重启！");
                console.warn(5 - j + "次后大重启");
                j++;
                if (j >= 5) {
                    关闭应用();
                }
                sleep(3000);
                console.hide();
                mainstrat();
            });
        }
    }
});