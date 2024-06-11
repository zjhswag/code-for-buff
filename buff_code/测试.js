console.show()

//     }
// function findElementsWithText(text) {
//     // 假设这个函数高效地返回包含文本的元素数组
//     return textContains(text).find();
// }
// if(textContains("支付宝APP打开失败").exists())
//     {
// log('yes')
// click(33,102,99,168)
// text = 确认放弃本次支付？
// bounds = (12,72,132,216)
//     }
// textContains("请输入支付密码").waitFor();
// if(textContains("请输入支付密码").exists())
//     {
//         log('yse')
//         click('2');
//         sleep(100)
//         click('1');
//         sleep(100)
//         click('9');
//         sleep(100)
//         click('3');
//         sleep(100)
//         click('1');
//         sleep(100)
//         click('6');
//         sleep(2000);
//     }
// textContains("订单详情").waitFor();
// log('yse')
// sleep(2000);
// click('发起报价')
// textContains("订单详情").waitFor();
if(textContains('刷脸登录').exists()||textContains('欢迎使用').exists()||textContains('更多').exists()||textContains('待支付订单').exists())
    {
        log('yse')
        back();
        sleep(1000)
        back();
        textContains("交易详情").findOne(10000);
        click('交易详情');
        id("drawer_icon").findOne().click()
    }
// log('yse');
// back();