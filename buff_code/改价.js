auto();
console.show();
threads.start(function() {
    log("监控线程已启动");
    while (true) {
        // 在新线程中查找文本为"无法访问相应服务，请稍后再试"的控件
        var target = text("无法访问相应服务，请稍后再试").findOne(1000); // 1000毫秒超时
        
        // 如果找到了目标控件
        if (target != null) {
            log("找到控件，正在尝试点击...");
            // 点击该控件
            var bounds = target.bounds();
            if (bounds) {
                // 计算中心点坐标并点击
                var centerX = bounds.centerX();
                var centerY = bounds.centerY();
                // log("找到控件，尝试点击坐标: (" + centerX + ", " + centerY + ")");
                click(centerX, centerY);
            }
            // log("点击完成");
        } else {
            log("没有找到控件，继续监控...");
        }

        // 短暂休眠以避免过度占用CPU
        sleep(800);
    }
});

// var mainstrat=function(){

//     setScreenMetrics(1080,2110);
//        launchApp("网易BUFF");
//        click("关闭");
//        click("创建报价");
//        click("同意并继续");
//        click("暂不更新");
//        sleep(1000)
//        while(!click("出售"));
//        while(!click("自售"));
//        textContains("磨损").findOne(2000);
//        click(948,192,1080,324)
//        while(!click("排序"));
//        sleep(1000)
//        while(!click("在售时间↓"));
//        sleep(200)
//        while(!click("完成"));
//        while(!click("自售"));
//        textContains("购入").waitFor();
//        toast("11")
//        click(30,396,525,850)
// // 111
//        textContains("改价").findOne(2000);
//        sleep(3000)
//        click(840,1989,1044,2086) // gaijia
//        sleep(1000)

       var buybutton=textContains("磨损:").findOne();
       var bp=buybutton.text().substr(4,8);
       bp = parseFloat(bp,10)
       sleep(1000)
       click(327,288,1044,337)
       var pricebutton=textContains("价格").findOne(2000);
       pricebutton = pricebutton.text().substr(5,8);
       price_gun = parseFloat(pricebutton,10)
       sleep(1000)
       while(!click("查看市场"));
       sleep(1000)
       var t=textContains("|").findOne();
       var kind=t.text();//枪名
       var l=kind.length;
       var kind=kind.substr(l-5,4);
       var tprice=kind+"\n¥";//通过崭新出厂¥获取价格
       var gun=textContains(tprice).findOne();
       var price=gun.text();
       var price_low=price.substr(6);//截取崭新出厂下面价格，为整数
       price_low = parseFloat(price_low,10)
       textContains("磨损:").waitFor();
       while(!click("磨损区间"));
       sleep(1000)
       if(kind =="崭新出厂"){

        if(0< bp && bp<=0.01) {click("0.00 - 0.01"); console.log('0')}
        else if(0.01< bp && bp<=0.02)  {click("0.01 - 0.02"); console.log('1')}
        else if(0.02< bp && bp<=0.03)  {click("0.02 - 0.03"); console.log('2')}
        else if(0.03< bp && bp<=0.04)  {click("0.03 - 0.04"); console.log('3')}
        else {click("0.04 - 0.07")}
       }
       else if(kind =="略有磨损"){
        if(0.07< bp && bp<=0.08) {click("0.07 - 0.08")}
        else if(0.08< bp && bp<=0.09)  {click("0.08 - 0.09")}
        else if(0.09< bp && bp<=0.10) {click("0.09 - 0.10")}
        else if(0.10< bp && bp<=0.11) {click("0.10 - 0.11")}
        else {click("0.11 - 0.15")}
       }
       else{
        if(0.15< bp && bp<=0.18) {click("0.15 - 0.18")}
        else if(0.18< bp && bp<=0.21)  {click("0.18 - 0.21")}
        else if(0.21< bp && bp<=0.24)  {click("0.24 - 0.27")}
        else {click("0.27 - 0.30")}
       }   
       sleep(2000)
       var target = text("无法访问相应服务，请稍后再试").findOne(1000);
       if(target){    
        var bounds = target.bounds();   
        if (bounds) {
        // 计算中心点坐标并点击
        var centerX = bounds.centerX();
        var centerY = bounds.centerY();
        // log("找到控件，尝试点击坐标: (" + centerX + ", " + centerY + ")");
        click(centerX, centerY);
    }}
    sleep(2000)

       textContains("购买").waitFor();
       var my_price = boundsInside(888,945,1044,1038).find();
       if(my_price[0].text() =="改价")
       {
        if(id("drawer_icon").findOne(10000))
        {
        id("drawer_icon").findOne().click();
        }       
        if(id("drawer_icon").findOne(10000))
        {
        sleep(1000)
        id("drawer_icon").findOne().click();
        }
        textContains("磨损:").waitFor();
        log(price_gun-0.01)
        res = price_gun-0.01
        setText(0,String(res));
        while(!click("改价"));
        while(!click("确认改价"));

       }
       else{
        bounds = (327,926,852,975)
        bounds = (327,1305,852,1354)
        bounds = (327,1684,852,1733)
        var first_price = boundsInside(327,926,852,975).find();
        var second_price = boundsInside(327,1305,852,1354).find();
        var third_price = boundsInside(327,1684,852,1733).find();
        var avg = 


        if(price_low<10)
        {

        }

       }
       console.log(bp,price_gun,price_low);
       console.show()

       659




// }