// if(textContains("等待卖家").exists())

//     {
//         toast('123')
//         click("等待卖家")
//         click(888,486,1044,590)
//         textContains("发起报价").findOne(10000);
//         click('发起报价')
//     }
var buybutton=textContains("等待你发").findOne();
press(buybutton.bounds().centerX(),buybutton.bounds().centerY(),1);