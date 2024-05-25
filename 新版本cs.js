console.setPosition(device.width / 2, device.height / 1.5);
var j=0;
var price;
var spr;  
var ss;
var g;
var sb122;


var start60=function()
{
    click("最新上架");
    click(948,216,1080,337);
    while(!click("品质"));
    while(!click("隐秘"));
    while(!click("保密"));
    while(!click("受限"));
    while(!click("类别"));
   while(!click("普通"));
    click(36,520,420,612);
    while(!click("外观"));
    while(!click("崭新出厂"));
   while(!click("略有磨损"));
    while(!click("价格区间"));
    setText(0,"1");
    setText(1,"180");
    while(!click("完成"));
    toast('处理完成  开始扫货');
    sleep(1000);
   
}

var start2=function()
{
    click("最新上架");
    click(948,204,1080,325);
    while(!click("品质"));
    while(!click("隐秘"));
    while(!click("保密"));
    while(!click("受限"));
    while(!click("类别"));
   while(!click("普通"));
    click(36,508,420,600);
    while(!click("外观"));
    while(!click("崭新出厂"));
   while(!click("略有磨损"));
    while(!click("价格区间"));
    setText(0,"1");
    setText(1,"180");
    while(!click("完成"));
    toast('处理完成  开始扫货');
    sleep(2000);
   
}
function 关闭应用() {
    j=0;
    toast("即将关闭应用");
    let packageName = currentPackage();
    log(app.getAppName(packageName)+"将被关闭,进入重启");
    recents();
    sleep(2000);
    
// 只针对模拟器
if(id("dismiss_task").className("android.widget.ImageView").desc("移除网易BUFF。").findOne(2000))
{
    id("dismiss_task").className("android.widget.ImageView").desc("移除网易BUFF。").findOne().click()
}
else{
    click(480,2100,600,2220);
}
   console.show();
   sleep(1000);
   for(var i=0;i<4;i++)
   {
   log(4-i +"后重启脚本");
   sleep(1000);
   }
   console.hide();
}


var price1=function()
{
//  console.show();
var t=textContains("|").findOne();
var hh=textContains("¥").findOne();
 g=hh.text().substr(1);
g=g*0.92;
g=g.toFixed(2);
g = parseFloat(g,10)
//log(g+"steam");//steam上限价格
var kind=t.text();//枪名
var l=kind.length;
var kind=kind.substr(l-5,4);//截取出崭新出厂或者略有磨损四个字
var tprice=kind+"\n¥";//通过崭新出厂¥获取价格
// if(textContains(tprice).exists())
// {
//     var gun=textContains(tprice).findOne();
// }
var gun=textContains(tprice).findOne();
var price=gun.text();
var price=price.substr(6);//截取崭新出厂下面价格，为整数
price = parseFloat(price,10)
if (price<=150)//处理购买的底价
{
    // var ss=1.1-price/21*0.01;
    spr=price*(1.10-price/21*0.01);
}
else
{
if(price>150&&price<260)
{
    spr = price+5
}
else
{
    spr = price+6
}
}

// log(price+" "+" "+spr.toFixed(2)+" "+" "+g);

}
var breakbuy=function()
{
      if(textContains("改价").findOne(200))
        {
            if(id("drawer_icon").findOne(10000))
        {
        id("drawer_icon").findOne().click();
        }
        }
        if(id("drawer_icon").findOne(10000))
        {
        id("drawer_icon").findOne().click();
        }
}

function findElementsWithText(text) {
    return textContains(text).find();
}

var bp
var ifbuy=function()
{    
    // console.show()
    var elements = findElementsWithText("¥");
    if(elements.length > 0) 
    {
        var lastElement = elements[elements.length - 1]; 
        var priceText = lastElement.text(); // 获取控件的文本
        bp = priceText.substr(2,6); 
    }
    bp = parseFloat(bp,10)
    var elements = findElementsWithText("支付");
    var lastElement = elements[1].text();

    if(bp<=spr&&bp<=g)
    {     
    click("确认付款");
    if (lastElement=='微信支付'||lastElement=='支付宝支付')
    {
        sleep(10000);
        if(textContains("支付宝APP打开失败").exists())
        {
            click(33,102,99,168);
            textContains("确认放弃本次支").findOne(10000);
            click('确认');
            textContains("交易详情").findOne(10000);
            click('交易详情');
            id("drawer_icon").findOne().click()
        }
        else if(textContains('刷脸登录').exists()||textContains('欢迎使用').exists()||textContains('更多').exists()||textContains('待支付订单').exists())
        {
            // log('yse')
            back();
            sleep(1000)
            back();
            textContains("交易详情").findOne(10000);
            click('交易详情');
            id("drawer_icon").findOne().click();
        }

    }
    else
    {
        textContains("创建报价").findOne(10000);
        click("创建报价");
        textContains("关闭").findOne(13000);
        click("关闭");
            toast("yes");
    }
    }
    else
    {
    id("close").findOne().click();
        toast("no");
    }
}

var ifbuy1=function()//yhk
{ 
    textContains("银行").findOne(6000);
   sleep(100);
     var buybutton=textContains("银行").findOne();
 press(buybutton.bounds().centerX(),buybutton.bounds().centerY(),1);
    click("确认付款");
     textContains("创建报价").findOne(10000);
     click("创建报价");
     textContains("关闭").findOne(13000);
     click("关闭");
 }
var buy008 =function()
{
    if(textContains("磨损: 0.08").exists())
    {
        var buybutton=textContains("磨损: 0.08").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
   if(textContains("确认付款").findOne(3000))
        {
        ifbuy();
        toast('buy 0.08');
        }
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.08").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}
var buy009 =function()
{
     if(textContains("磨损: 0.09").exists())
{
    var buybutton=textContains("磨损: 0.09").findOne();
    press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
 if(textContains("确认付款").findOne(3000))
    {
        ifbuy();
        toast('buy 0.09');
    }
    else
    {
        swipe(900,1900,900,1200,1000);
        var buybutton=textContains("磨损: 0.09").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(3000)){
        ifbuy();
    }
    }
}
}
var buy010=function()
{
    if(textContains("磨损: 0.10").exists())
    {
        var buybutton=textContains("磨损: 0.10").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
  if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.10');
        }
else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.10").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }    
        }
    }
}
var buy002=function()
{
    if(textContains("磨损: 0.02").exists())
    {
        var buybutton=textContains("磨损: 0.02").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
       if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.02');
        }
 
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.02").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}
var buy001=function()
{
    if(textContains("磨损: 0.01").exists())
    {
        var buybutton=textContains("磨损: 0.01").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.01');
        }

    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.01").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}
var buy000=function()
{
    if(textContains("磨损: 0.00").exists())
    {
        var buybutton=textContains("磨损: 0.00").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.00');
        }

    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.00").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}
var buy003=function()
{
    if(textContains("磨损: 0.03").exists())
    {
        var buybutton=textContains("磨损: 0.03").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.03');
        }
    
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.03").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}
var buy004=function()
{
    if(textContains("磨损: 0.04").exists())
    {
        var buybutton=textContains("磨损: 0.04").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.04');
        }

    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.04").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}

var buy007=function()
{
    if(textContains("磨损: 0.07").exists())
    {
        var buybutton=textContains("磨损: 0.07").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.07');
        }
   
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.07").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}

var buy011=function()
{
    if(textContains("磨损: 0.11").exists())
    {
        var buybutton=textContains("磨损: 0.11").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.11');
        }
 
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.11").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}

function Observer() {
    function unique(arr) {
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
    for (let c = 0; c < 20; c++) {
        sleep(500);
        currentActis[c] = currentActivity();
    }
    ac = unique(currentActis);
    if (ac.length == 1) {
        return false
    }
    return true
}

var mainstrat=function(){

 setScreenMetrics(1080,2110);
    launchApp("网易BUFF");
    click("关闭");
    click("创建报价");
    click("同意并继续");
    click("暂不更新");
    click("BUFF");
    if(textContains("查看购买记录").findOne(1000))
    {
        click("查看购买记录");
        if(id("drawer_icon").findOne(2000))
    {
    id("drawer_icon").findOne().click();
    }
    }
    if(textContains("订单详情").findOne(1000))
    {
            click("订单详情");
            if(id("drawer_icon").findOne(2000))
        {
        id("drawer_icon").findOne().click();
        }
    }

    click("我知道了");
     if(textContains("改价").findOne(1000))
    {  
    id("drawer_icon").findOne().click();
    } 
    if(id("close").findOne(500))
    {
        id("close").findOne().click();
    }
    if(id("drawer_icon").findOne(2000))
    {
    id("drawer_icon").findOne().click();
    }
    if(textContains("完成").findOne(3000))
    {
        while(!click("完成"));
    
        sleep(200);
        id("drawer_icon").findOne().click();
    }

start2();

// for(var i=0;i<10000;i++){
//     sleep(300);
// gestures([300, [300, 400], [300, 1400]]);
// for(var j=0;j<2;j++)
// {
//     sleep(100);
//     if(j==0){press(100,700,1);}
//     else if(j==1)   {
//         sleep(200); 
//         click(608,445,851,734);
// } mobile
//     click("最新上架");
//     // sleep("1000"); 
  for(var i=0;i<20000;i++){
        sleep(300);
    gestures([350, [300, 400], [300, 1400]]);
    for(var j=0;j<2;j++)
    {
        //模拟器
        if(j==0) {press(100,700,1);}
    else {
                sleep(300); 
                click(608,445,851,734);
        }
    //  for(var j=0;j<2;j++)
    // {
    //     if(j==0){press(100,700,1);}
    //         else if(j==1)   {
    //             sleep(300); 
    //             click(906,726,1050,779);
    //     }
    textContains("磨损:").waitFor();
    price1();
 if(textContains("磨损: 0.000").exists())//买0.000
        {
            var buybutton=textContains("磨损: 0.000").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(3000))
            {
                ifbuy();
            }
    
            else
            {
                swipe(900,1900,900,1200,1000);
                var buybutton=textContains("磨损: 0.000").findOne();
                press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                if(textContains("确认付款").findOne(3000)){
                ifbuy();
            }
            } 
            breakbuy();
        } 
// else if(textContains("M4A4").exists())
// {
//     breakbuy();
// }
    else if(textContains("保密").exists())
    {
    if(textContains("暮光星系").exists())
    {
    
        breakbuy();
    }
    else if(textContains("磨损: 0.00").exists())//买0.00
        {
            var buybutton=textContains("磨损: 0.00").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(3000))
            {
                ifbuy();
            }
            else
            {
                swipe(900,1900,900,1200,1000);
                var buybutton=textContains("磨损: 0.00").findOne();
                press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                if(textContains("确认付款").findOne(3000)){
                ifbuy();
            }
            } 
            breakbuy();
        }
        else if(textContains("AWP（StatTrak™） | 珊瑚树").exists()||textContains("梦魇").exists()||textContains("P | 珊瑚树").exists()||textContains("4 | 死寂空间").exists()||textContains("0 | 曼海蒂").exists()||textContains("型 | 毁灭者").exists()||textContains("黑莲花").exists())//zhi mai dao 00
            { 
                buy007();
                // toast('00 07');
                breakbuy();
            }
            else if(textContains("海之泡沫").exists()||textContains("钴蓝禁锢").exists()||textContains("冷血杀手").exists()||textContains("血清").exists()||textContains("富兰克林").exists()||textContains("渐变琥珀").exists()||textContains("暗潮").exists()||textContains("混沌点阵").exists()||textContains("7 | 卡特尔").exists())//zhi mai dao 000
            {
                // toast('00');
                breakbuy();
            }
            else if(textContains("） | 破颚者").exists()||textContains("0 | 珊瑚树").exists()||textContains("） | 孟加拉猛虎").exists()||textContains("G | 孟加拉猛虎").exists()||textContains("9 | 九头蛇").exists()||textContains("） | 奥林匹斯").exists())//text = P2000（StatTrak™） | 珊瑚树 (略有磨损)text = AWP（StatTrak™） | 珊瑚树 (久经沙场)
            {
                buy007();
                buy008();
                // toast("00 07-08");                breakbuy();
            }
            else if(textContains("P2000（StatTrak™） | 珊瑚树").exists())
            {
                buy007();
                buy008();
                buy009();    
                // toast("00 07-09");
                breakbuy();
            }
            //    else if()
            // {
            
            //     buy007();
            //     buy008();
            //     buy009();
            //     buy010();
            //     toast("00 07-10");
            //     breakbuy();
            // }
     else if(textContains("磨损: 0.01").exists())//买0.01
        {
            var buybutton=textContains("磨损: 0.01").findOne();
            toast('buy 0.01');
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(3000))
            {
                ifbuy();
            }

            else
            {
                swipe(900,1900,900,1200,1000);
                var buybutton=textContains("磨损: 0.01").findOne();
                press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                if(textContains("确认付款").findOne(3000)){
                ifbuy();
            }
            breakbuy();
            } }
            else if(textContains("梅红时刻").exists()||textContains("型 | 水灵").exists()||textContains("0 | 卡特尔").exists()||textContains("0 | 次时代").exists()||textContains("星 | 古董枪").exists()||textContains("守护者").exists()||textContains("） | 幻影破坏").exists()||textContains("0 | 死亡轮回").exists()||textContains("4 | 龙王").exists()||textContains("） | 龙王").exists()||textContains("） | 毁灭者").exists())//zhi mai dao 001
            {
                //只买到001
                // toast("00-01");
                breakbuy();
            }
            else if(textContains("） | 脑洞大开").exists()||textContains("原子合金").exists()||textContains("） | 燃料喷射器").exists()||textContains("AK-47（StatTrak™） | 卡特尔").exists()||textContains("版 | 脑洞").exists()||textContains("猎户").exists()||textContains("） | 可燃冰").exists()||textContains("7 | 可燃冰").exists()||textContains("9 | 燃料喷射器").exists()||textContains("斯 | 熔化").exists()||textContains("0 | 凝视").exists())//zhi mai dao 001 007||textContains("型 | 毁灭者").exists()||textContains("） | 破碎铅秋").exists()
            {
               
                buy007();
                // toast('00-01 07');
                 breakbuy();
            }
            else if(textContains("版 | 破颚者").exists()||textContains("凯门鳄").exists()||textContains("型 | 零食派对").exists()||textContains("） | 九头蛇").exists()||textContains("） | 金粉").exists()||textContains("屠杀者").exists()||textContains("） | 渐变迪斯科").exists()||textContains("0 | 渐变迪斯科").exists())//
            {
                buy007();
                buy008();
                // toast("00-01 07-08");                                                                                  
                breakbuy();
            }
    else if(textContains("） | 玩具盒子").exists())//
    {
        buy007();
        buy008();
        buy009();
       toast('00-01,07-09');
        breakbuy()  //||textContains("） | 四号栖息地").exists()
    }
     else if(textContains("） | 弗卢").exists()||textContains("） | 精雕木刻").exists()||textContains("红线").exists()||textContains("四号栖息地").exists()||textContains("P | 精英之作").exists()||textContains("4 | 赛博").exists())//||textContains("斯 | 目皆转睛").exists()||textContains("塔 | 瓜瓜").exists()
     {
    
        buy007();
        buy008();
        buy009();
         buy010();
       toast('00-01,07-10');
        breakbuy();
     }
     else if(textContains("巨铁").exists()||textContains("弗卢克斯").exists()||textContains("星 | 暴怒野兽").exists()||textContains("版 | 小绿怪").exists())//||textContains("7 | 幽幻深渊").exists()
     {
        buy002();
        buy007();
        buy008();
        buy009();
        buy010();
        toast('00-02,07-10');
        breakbuy();
     }

    else if(textContains("磨损: 0.02").exists())//买0.02
    {
        var buybutton=textContains("磨损: 0.02").findOne();
      
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
        }
        else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.02").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        } 
        breakbuy();
    }
    
    else if(textContains("P250（StatTrak™） | 卡特尔").exists()||textContains("） | 古董枪").exists()||textContains("毒蛇袭击").exists()||textContains("甜甜的").exists()||textContains("） | 水灵").exists()||textContains("） | 死亡轮回").exists()||textContains("） | 阴谋者").exists()||textContains("鹰 | 阴谋者").exists())
      {
       breakbuy();
       toast('00-02');  
      }

      else if(textContains("前线迷雾").exists()||textContains("） | 速度激情").exists()||textContains("型 | 破碎铅秋").exists()||textContains("遥控").exists())
// high prior||textContains("） | 大佬").exists()||textContains("7 | 混沌点阵").exists()
      { 
        buy007();
        toast('00-02,07');
        breakbuy();
      }
      
      else if(textContains("地域烈焰").exists()||textContains("4 | 宁静").exists()||textContains("5 | 相柳").exists())
      {  
        breakbuy();
        toast('00-02');
      }
            
      else if(textContains("电子蜂巢").exists()||textContains("） | 残影").exists()||textContains("） | 宁静").exists())//||textContains("5 | 相柳").exists()
      {  
        buy003();
        breakbuy();
        toast('00-03');
      }
      else if(textContains("磨损: 0.07").exists())//买0.07
      {
          var buybutton=textContains("磨损: 0.07").findOne();        
          press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
      if(textContains("确认付款").findOne(6000))
          {
              ifbuy();
          }

          else
          {
              swipe(900,1900,900,1200,1000);
              var buybutton=textContains("磨损: 0.07").findOne();
              press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
              if(textContains("确认付款").findOne(6000)){
              ifbuy();
          }
          }  breakbuy();
          }
         else if(textContains("） | 目皆转睛").exists()||textContains("） | 瓜瓜").exists()||textContains("） | 幽幻深渊").exists()||textContains("） | 湖怪鸟").exists()||textContains("） | 埋葬之影").exists()||textContains("斯 | 目皆转睛").exists()||textContains("塔 | 瓜瓜").exists()||textContains("7 | 幽幻深渊").exists())
         {
             buy003();
             buy004();
             buy008();
             buy009();
             buy010();
             toast('00-04,07-10');
             breakbuy();
         }

        else if(textContains("0 | 变态杀戮").exists()||textContains("5 | 野孩子").exists())
         {
             buy003();
            //  buy004();
             buy008();
             buy009();
             buy010();
            toast('00-03,10');
              breakbuy();
         }
          else if(textContains("G | 动量").exists()||textContains("AUG（StatTrak™） | 动量").exists()||textContains("） | 吞噬").exists()||textContains("） | 雅典娜之眼").exists()||textContains("R | 经济").exists()||textContains("） | 汪之萌杀").exists()||textContains("） | 小绿怪").exists()||textContains("耍猴把戏").exists()||textContains("） | 荒野公主").exists()||textContains("G | 燕群").exists()||textContains("5 | 野蛮剑齿虎").exists()||textContains("枪 | 荒野公主").exists()||textContains("0 | 浅坟").exists()||textContains("） | 迷人幻象").exists()||textContains("） | 么么").exists()||textContains("7 | 正义").exists())//||textContains("G | 燕群").exists()
          {    
              buy003();
              buy008();
              buy009();
              buy010();
              toast('00-03,07-10');
              breakbuy();
          }
          else if(textContains("红色层压板").exists()||textContains("） | 樱花").exists()||textContains("） | 燕群").exists()||textContains("0 | 往日行动").exists()||textContains("G | 汪之萌杀").exists()||textContains("） | 野蛮剑齿虎").exists()||textContains("0 | 二西莫夫").exists()||textContains("银装素裹").exists()||textContains("） | 灯神").exists()||textContains("） | 席德").exists()||textContains("G | 湖怪鸟").exists()||textContains("P | 死神").exists()||textContains("牛 | 买定离手").exists()||textContains("枪 | 美洲驼炮").exists()||textContains("G | 席德.米德").exists()||textContains("） | 齿仙").exists()||textContains("枪 | 吞噬").exists()||textContains("P | 金粉").exists()||textContains("） | 要抱抱").exists()||textContains("0 | 至尊威龙").exists()||textContains("0 | 血腥运动").exists()||textContains("斯 | 雅典娜之眼").exists()||textContains("） | 血腥运动").exists()||textContains("） | 浅坟").exists()||textContains("4 | 埋葬之影").exists()||textContains("4 | 齿仙").exists()||textContains("型 | 摩登时代").exists()||textContains("4 | 要抱抱").exists()||textContains("） | 正义").exists()||textContains("0 | 迷人幻象").exists()||textContains("枪 | 么么").exists())      
          {
            buy003();
            buy009();
            buy008();
            toast('00-03,07-09');
            breakbuy();
          }
   else if(textContains("） | 爆裂食物").exists()||textContains("） | 摩登时代").exists()||textContains("星 | 樱花").exists()||textContains("） | 相柳").exists()||textContains("） | 大佬龙").exists()||textContains("5 | 动量").exists()||textContains("D | 磷光体").exists()||textContains("） | 买定离手").exists()||textContains("） | 美洲驼炮").exists()||textContains("） | 往日行动").exists()||textContains("） | 磷光体").exists()||textContains("UMP-45（StatTrak™） | 动量").exists()||textContains("9 | 爆裂食物").exists())//席德
          {
            buy003(); 
            buy008();
            toast('00-03,07-08');
            breakbuy();
          }
  else if(textContains("法玛斯（StatTrak™） | 机械工业").exists()||textContains("沙漠之鹰（StatTrak™） | 机械工业").exists()||textContains("狩猎利器").exists()||textContains("斯 | 机械工业").exists()||textContains("） | 死神").exists()||textContains("7 | 幻影破坏者").exists()||textContains("鹰 | 机械工业").exists()||textContains("） | 浮生如梦").exists()||textContains("P | 浮生如梦").exists()||textContains("7 | 复仇者").exists())//text = 法玛斯（StatTrak™） | 机械工业 (略有磨损)||textContains("） | 席德.米德").exists()||
          {
            buy003();
            toast('00-03,07');
            breakbuy();
          }
       else if(textContains("） | 童话").exists())
          {
            buy008();
            buy009();
            buy010();
            buy011();
            toast('00-02,07-011');
            breakbuy();
          }
          else if(textContains("） | 野孩子").exists()||textContains("） | 变态杀戮").exists()||textContains("） | 赛博").exists())//野孩子
          {
            buy004();
            buy003();
            buy008();
            buy009();
            buy010();
            // buy011();
            toast('00-03,07-011');
            breakbuy();
          }
    // else if()
    // {
    //     buy003();
    //     buy008();
    //     toast('00-03 07-08');
    //     breakbuy();
    // }
    else if(textContains("意式拉力").exists()||textContains("） | 零食派对").exists()||textContains("） | 暴怒野兽").exists()||textContains("双涡轮").exists())//||textContains("双涡轮").exists()
    {
       buy003();
       toast('00- 03 07');
       breakbuy();
    }
    else if(textContains("枪 | 奥林匹斯").exists()||textContains("0 | 玩具盒子").exists()||textContains("） | 曼海蒂").exists()||textContains("鹰 | 大佬龙").exists()||textContains("） | 迷人眼").exists()||textContains("） | 精英之作").exists()||textContains("） | 气密").exists()||textContains("R | 迷人眼").exists()||textContains("三角").exists()||textContains("8 | 速度激情").exists())//||textContains("9 | 气密").exists()
    {
        buy008();
        toast('00-02,07-08');
        breakbuy();
    }

    else if(textContains("3 | 次时代").exists()||textContains("5 | 黄夹克").exists()||textContains("0 | 精雕木刻").exists()||textContains("） | 黄夹克").exists()||textContains("） | 次时代").exists()||textContains("） | 复仇者").exists()||textContains("斯 | 灯神").exists()||textContains("7 | 童话城堡").exists())//||textContains("G | 燕群").exists()
    {
        buy008();
        buy009();
        toast('00-02,07-09');
        breakbuy();
    }
    else{
        toast('00-02 07');
        sleep(100);
        if(id("drawer_icon").findOne(10000))
        {
        id("drawer_icon").findOne().click();
        }
    }
    }
    

else if(textContains("受限").exists())//915
{
     if(textContains("） | 食人花").exists()||textContains("喷焰者").exists()||textContains("天空守卫").exists()||textContains("狂野飞").exists()||textContains("橙黄 DD").exists()||textContains("石墨黑").exists()||textContains("巴洛克").exists()||textContains("绯红镂").exists()||textContains("彩绘").exists()||textContains("红岩").exists()||textContains("） | 表面淬火").exists()||textContains("） | 透光区").exists()||textContains("0 | 表面淬火").exists()||textContains("蓝莓樱桃").exists()||textContains("） | 蛊惑之色").exists()||textContains("致命红蝎").exists()||textContains("7 | 表面淬火").exists()||textContains("黑曜石").exists()||textContains("3 | 蛊惑之色").exists()||textContains("元素轮廓").exists()||textContains("纳迦蛇神").exists()||textContains("0 | 手炮").exists()||textContains("9 | 蛊惑之色").exists()||textContains("翡翠色调").exists()||textContains("D | 探员").exists()||textContains("型 | 钢铁禁锢").exists()||textContains("） | 海之泡沫").exists())//||textContains("） | 复古浪潮").exists()||textContains("7 | 复古浪潮").exists()
        {
            breakbuy();
        }
        else if(textContains("磨损: 0.00").exists())//买0.00
        {
            var buybutton=textContains("磨损: 0.00").findOne();
            toast('buy 0.00');1
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(3000))
            {
                ifbuy();
            }
            else
            {
                swipe(900,1900,900,1200,1000);
                var buybutton=textContains("磨损: 0.00").findOne();
                press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                if(textContains("确认付款").findOne(3000)){
                ifbuy();
            }
            } 
            breakbuy();
        }//
     else if(textContains("型 | 粉碎者").exists()||textContains("） | 轨道").exists()||textContains("型 | 粉红 DDPAT").exists()||textContains("凤凰冥灯").exists()||textContains("） | 惊惧骷髅").exists()||textContains("法玛斯（StatTrak™） | 电子脉冲").exists()||textContains("警告").exists()||textContains("黄铜").exists()||textContains("G | 力矩").exists()||textContains("） | 粉碎者").exists()||textContains("9 | 富士山").exists()||textContains("9 | 青竹伪装").exists()||textContains("7 | 蓝色层压板").exists()||textContains("G | 极地孤狼").exists()||textContains("） | 力矩").exists())
     {  
         buy001();
         buy002();
         toast('till 002');
         breakbuy();
     }
    //   else if()text = AK-47（StatTrak™） | 可燃冰 (破损不堪)可燃冰
    //  {
    //     buy001();
    //     buy002();
    //     buy003();
    //     buy007();
    //     breakbuy();

    //  }// textContains("橙红安").exists()||textContains("红色 DD").exists()||||textContains("10 | 表面淬火").exists()SG 553（StatTrak™） | 电子脉冲

    else if(textContains("诅咒").exists()||textContains("） | 古董枪").exists()||textContains("） | 翼蜥").exists()||textContains("铁血玫瑰").exists()||textContains("牛 | 古董枪").exists()||textContains("） | 杀意大名").exists()||textContains("7 | 轨道").exists()||textContains("冥界之").exists()||textContains("林间").exists()||textContains("P | 火卫一").exists()||textContains("盲点").exists()||textContains("0 | 死亡之握").exists()||textContains("） | 蓝色层压板").exists()||textContains("星 | 惊惧骷髅").exists()||textContains("次时代").exists()||textContains("数字架构师").exists()||textContains("棱彩阶梯").exists()||textContains("斯 | 电子脉冲").exists()||textContains("） | 西装革履").exists()||textContains("） | 帝国").exists()||textContains("P | 蠕虫之神").exists()||textContains("8 | 浮生如梦").exists()||textContains("4 | 杀意大名").exists()||textContains("版 | 地狱门票").exists()||textContains("） | 崩络克").exists()||textContains("） | 富士山").exists()||textContains("型 | 夜无眠").exists())//||textContains("4 | 西装革履").exists()||textContains("4 | 特克卢").exists()
    {
       buy001();  
       toast('00-01 啊');
       breakbuy();      
    }
     else if(textContains("崩络克").exists()||textContains("） | 隐伏帝王龙").exists()||textContains("血红蛋白").exists()||textContains("射线").exists()||textContains("金砖").exists()||textContains("幕后主谋").exists()||textContains("犯罪现场").exists()||textContains("4 | 狮鹫").exists()||textContains("花纹钢板").exists()||textContains("铜色星系").exists()||textContains("钛片").exists()||textContains("错觉").exists()||textContains("橙红安").exists()||textContains("） | 地狱门票").exists()||textContains("红色 DD").exists()||textContains("7 | 海之泡沫").exists()||textContains("） | 轻轨").exists()||textContains("鹰 | 轻轨").exists()||textContains("夜空沙暴").exists()||textContains("雅藤如嫣").exists()||textContains("） | 狮鹫").exists()||textContains("） | 火卫一").exists()||textContains("） | 钢铁禁锢").exists()||textContains("富兰克林").exists()||textContains("烧尽").exists()||textContains("遗产").exists()||textContains("0 | 翡翠色调").exists()||textContains("型 | 翼蜥").exists()||textContains("地狱看门犬").exists()||textContains("） | 蠕虫之神").exists()||textContains("太古传说").exists()||textContains("远古幻想").exists()||textContains("鬼脸天蛾").exists()||textContains("） | 祥和之翼").exists()||textContains("） | 猫猫狗狗").exists()||textContains("） | 夜无眠").exists()||textContains("型 | 隐伏帝王龙").exists()||textContains("型 | 核子花园").exists()||textContains("钴蓝石英").exists()||textContains("9 | 晶红石英").exists()||textContains("型（StatTrak™） | 城里的月光").exists()||textContains("） | 浮生如梦").exists())
     //||textContains("） | 夜无眠").exists()textContains("7 | 混合体").exists()||textContains("枪 | 模拟输入").exists()||||textContains("） | 特克卢").exists()
     {
        toast(' only 00'); 
         breakbuy();
     }



     else if(textContains("G | 力矩").exists())
     {
        buy001();
        buy002();
        buy003();
        breakbuy();
     }


     else if(textContains("磨损: 0.07").exists())//买0.07
     {
         var buybutton=textContains("磨损: 0.07").findOne();
         press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
     if(textContains("确认付款").findOne(3000))
         {
             ifbuy();
         }
         else
         {
             swipe(900,1900,900,1200,1000);
             var buybutton=textContains("磨损: 0.07").findOne();
             press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
             if(textContains("确认付款").findOne(3000)){
             ifbuy();
         }
         } breakbuy(); 
        }
     else if(textContains("牛 | 水蓝条纹").exists()||textContains("） | 海斗士").exists()||textContains("塔 | 海斗士").exists()||textContains("） | 皇家军团").exists()||textContains("型 | 皇家军团").exists()||textContains("指挥").exists()||textContains("8 | 幽灵战士").exists()||textContains("塔 | 皇室伴侣").exists()||textContains("0 | 炽热").exists()||textContains("） | 探员").exists()||textContains("） | 手炮").exists()||textContains("P | 亡灵之主").exists()||textContains("） | 冷石").exists()||textContains("R | 冷石").exists()||textContains("型 | 闪回").exists()||textContains("斯 | ZX81").exists()||textContains("） | 圆影").exists()||textContains("消音型（StatTrak™） | 闪回").exists()||textContains("彼岸花").exists()||textContains("P | 猫猫狗狗").exists()||textContains("7 | 复古浪潮").exists()||textContains("4 | 星级").exists()||textContains("7 | 三位一体").exists()||textContains("型 | 氮化处理").exists()||textContains("） | 火线冲锋").exists())//||textContains("7 | 墨岩").exists()|textContains("） | 猫猫狗狗").exists()
     //只买0.07 和0.00  ||textContains("） | 速递").exists()||textContains("鹰 | 后发制人").exists()
     {
         toast('00-07');         
         breakbuy();
     }
    else if(textContains("响尾蛇").exists()||textContains("） | 金铋辉煌").exists()||textContains("不可磨灭").exists()||textContains("） | 抖枪").exists()||textContains("枪 | 重新启动").exists()||textContains("） | 水蓝条纹").exists()||textContains("病毒危机").exists()||textContains("MAG-7（StatTrak™） | 炽热").exists()||textContains("0 | 销声").exists()||textContains("） | 酸蚀").exists()||textContains("牛 | 路霸").exists()||textContains("星 | 一见青心").exists()||textContains("塔 | 灾难").exists()||textContains("） | 销声").exists()||textContains("MAC-10（StatTrak™） | 炽热").exists()||textContains("型 | 鼬鼠").exists()||textContains("） | 黯翼").exists())
    {
        buy008();
        toast('00 07-08');
        breakbuy();
    }
    else if(textContains("） | 星级").exists()||textContains("） | 三巨头").exists()||textContains("） | 疯狂老八").exists()||textContains("7 | 炽热").exists()||textContains("） | 北冥有鱼").exists()||textContains("） | 蚀刻领主").exists())
    {
        buy008();
        buy009();    
        toast('00 07-09');
        breakbuy();
    }
    // else if()
    // {
    //     buy008();
    //     buy009();
    //     buy010();
    //     toast('00 07-10');
    //     breakbuy();
    // }
     else if(textContains("磨损: 0.01").exists())//买0.01
     {
         var buybutton=textContains("磨损: 0.01").findOne();
         press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
     if(textContains("确认付款").findOne(3000))
         {
             ifbuy();
         }
   else
         { 
             swipe(900,1900,900,1200,1000);
             var buybutton=textContains("磨损: 0.01").findOne();
             press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
             if(textContains("确认付款").findOne(3000)){
             ifbuy();
         }
         } breakbuy(); } 
      
   else  if(textContains("R | 信号灯").exists()||textContains("星 | 狂野").exists()||textContains("夫 | 狮子鱼").exists()||textContains("5 | 白狼").exists()||textContains("7 | SWAG").exists()||textContains("7 | 石雕").exists()||textContains("5 | 曝光").exists()||textContains("3 | 幻影").exists()||textContains("0 | 战争手柄").exists()||textContains("0 | 赛博先锋").exists()||textContains("夫 | 橙灰之").exists()||textContains("0 | 魅惑").exists()||textContains("R | 凤凰商号").exists()||textContains("9 | 兄弟连").exists()||textContains("D | 猛烈冲锋").exists()||textContains("） | 动力装").exists()||textContains("） | 战火重").exists()||textContains("） | 红鹰").exists()||textContains("） | 先驱").exists()||textContains("5 | 先驱").exists()||textContains("1 | 毒刺").exists()||textContains("4 | 行尸攻").exists()||textContains("1 | 梦之林地").exists()||textContains("） | 一见青心").exists()||textContains("） | 信号灯").exists()||textContains("） | 净化者").exists()||textContains("USP 消音版（StatTrak™） | 闪回").exists()||textContains("0 | 炼狱小镇").exists()||textContains("5 | 塑胶炸弹").exists()||textContains("9 | 阿兹特克").exists()||textContains("7 | 好兄弟").exists()||textContains("） | 战争手柄").exists()||textContains("） | 橙灰之").exists()||textContains("） | 青龙").exists()||textContains("） | 狂野").exists())//||textContains("毒刺").exists()||textContains("4 | 五彩斑驳").exists()
         {
            buy002();
            buy003();
            buy008();
            toast('00-03,07-08');
            breakbuy();
         }
    else  if(textContains("1 | 净化者").exists()||textContains("0 | 影魔").exists()||textContains("版 | 闪回").exists()||textContains("） | 赛博先锋").exists()||textContains("） | 石雕").exists()||textContains("） | 权力之心").exists()||textContains("） | 毒刺").exists()||textContains("） | 毒蜥").exists()||textContains("） | 曝光").exists()||textContains("） | 幻影").exists()||textContains("） | 焦油缠绕").exists()||textContains("鹰 | 深红之网").exists()||textContains("9 | 闹市").exists()||textContains("3 | 青龙").exists()||textContains("0 | 给爷冲").exists()||textContains("） | 给爷冲").exists()||textContains("） | 闹市").exists()||textContains("0 | 元女王").exists()||textContains("） | 元女王").exists()||textContains("疾袭圣甲虫").exists()||textContains("索贝克").exists()||textContains("） | 兄弟连").exists()||textContains("） | 魅惑").exists()||textContains("） | 猛烈冲锋").exists()||textContains("） | 凤凰商").exists()||textContains("） | 影魔").exists()||textContains("） | 执行者").exists()||textContains("） | 启示录").exists()||textContains("） | 梦之林地").exists()||textContains("） | 行尸攻").exists()||textContains("） | 白狼").exists()||textContains("） | 狮子鱼").exists())
         {
            buy002();
            buy003();
            buy008();
            buy009();
            toast('00-03,07-09');
            breakbuy();
         }
         else if(textContains("） | 聚光灯").exists()||textContains("） | 夺命器").exists()||textContains("现代猎手").exists()||textContains("核芯破裂").exists())
         {
            buy002();
            buy003();
           buy008();
           buy009();
           buy010();
           toast('00-03,07-10');
           breakbuy();
         }
    else if(textContains("7 | 北冥有鱼").exists()||textContains("5 | 猛虎").exists()||textContains("9 | 翠绿箭").exists()||textContains("4 | 四季").exists()||textContains("0 | 绝界之行").exists()||textContains("5 | 支架").exists()||textContains("） | 路霸").exists()||textContains("守护者").exists()||textContains("0 | 孔雀石").exists()||textContains("0 | 翼击").exists()||textContains("） | 七彩斑斓").exists()||textContains("7 | 七彩斑斓").exists()||textContains("5 | 金铋辉煌").exists()||textContains("8 | 抖枪").exists()||textContains("公路杀手").exists()||textContains("R | 深红海啸").exists()||textContains("0 | 权力之心").exists()||textContains("） | 翼击").exists()||textContains("） | 树蝰").exists()||textContains("） | 经济").exists()||textContains("3 | 三巨头").exists()||textContains("） | 红宝石毒").exists()||textContains("） | 重新启动").exists()||textContains("） | 贵族").exists()||textContains("） | 四季").exists()||textContains("7 | 渐变之色").exists()||textContains("7 | 翡翠细条纹").exists())//||||textContains("R | 火线冲锋").exists()||textContains("4 | 蚀刻领主").exists()||textContains("型 | 崩络克").exists()||textContains("枪 | 模拟输入").exists()||textContains("7 | 笑一个").exists()||textContains("7 | 混合体").exists()||textContains("） | 皇室伴侣").exists()
    {
        buy008();
        toast('00-01,07-08');
        breakbuy();
    }
    else if(textContains("） | 玩具士兵").exists()||textContains("葡萄酒").exists()||textContains("） | 公海").exists()||textContains("3 | 黯翼").exists()||textContains("枪 | 蕉").exists()||textContains("塔 | 食人花").exists()||textContains("） | 蕉").exists()||textContains("） | 模拟输入").exists()||textContains("） | 混合体").exists()||textContains("0 | 酸蚀").exists()||textContains("5 | 经济").exists())//
    {
        buy008();
        buy009(); 
        toast('00-01,07-09');
        breakbuy();
    }

    else if(textContains("） | 灾难").exists()||textContains("） | 绝界之行").exists()||textContains("） | 翠绿箭").exists()||textContains("） | 支架").exists()||textContains("） | 塑胶炸弹").exists()||textContains("1 | 公海").exists()||textContains("7 | 权力之心").exists()||textContains("星 | 玩具士兵").exists()||textContains("） | 星云十字军").exists()||textContains("） | 速递").exists()||textContains("0 | 执行者").exists()||textContains("枪 | 启示录").exists()||textContains("0 | 夺命器").exists()||textContains("随机存取").exists()||textContains("） | 朝枪夕拾").exists()||textContains("枪 | 疯狂老八").exists()||textContains("） | 豹灯蛾").exists()||textContains("） | 核燃料棒").exists()||textContains("拉美").exists()||textContains("） | SWAG").exists())
    {
        buy002();
        buy008(); 
       buy009();
        toast('00-02,07-09'); 
        breakbuy();
    }
    // else if()
    // {
    //     buy002();
    //     buy008();
    //     buy009();
    //     buy010();
    //     toast('00-02,07-10');
    //     breakbuy();
    // }
    // else if()//||textContains("） | SWAG").exists()
    // {

    //     buy008();
    //     buy009();
    //     toast('00-01,07-09');
    //     breakbuy();
    // }
    else if(textContains("） | 铋晶体").exists()||textContains("7 | 铋晶体").exists()||textContains("枪 | 聚光灯").exists()||textContains("9 | 战火重").exists()||textContains("5 | 红鹰").exists()||textContains("） | 猛虎").exists()||textContains("） | 三位一体").exists()||textContains("） | 红宝石毒镖").exists()||textContains("0 | 超新星").exists()||textContains("） | 都市冲击").exists()||textContains("） | 超新星").exists()||textContains("UMP-45（StatTrak™） | 城里的月光").exists()||textContains("） | 炼狱小镇").exists()||textContains("7 | 速递").exists()||textContains("9 | 星云十字军").exists()||textContains("） | 高斯").exists()||textContains("） | 阿兹特克").exists()||textContains("） | 五彩斑驳").exists()||textContains("） | 孔雀石").exists()||textContains("0 | 渐变琥珀").exists()||textContains("威吓者").exists()||textContains("） | 好兄弟").exists()||textContains("安全网").exists()||textContains("星 | 毒蜥").exists()||textContains("G | 贵族").exists()||textContains("特克卢").exists()||textContains("3 | 豹灯蛾").exists()||textContains("牛 | 核燃料棒").exists()||textContains("7 | 朝花夕").exists())//
    {
        buy002();
        buy008();
        breakbuy();
    }
    else if(textContains("） | 神经网").exists()||textContains("5 | 城里的月光").exists()||textContains("型 | 城里的月光").exists()||textContains("D | 高斯").exists()||textContains("斯 | 神经网").exists()||textContains("） | 死亡之握").exists()||textContains("） | 战术高手").exists()||textContains("） | 青竹伪装").exists()||textContains("9 | 红宝石毒镖").exists()||textContains("型 | 圆影").exists()||textContains("） | 死亡主宰").exists()||textContains("） | 极地孤狼").exists()||textContains("星 | 晶红石英").exists()||textContains("枪 | 模拟输入").exists()||textContains("7 | 笑一个").exists()||textContains("7 | 混合体").exists())//||textContains("） | 坍雪").exists()||textContains("） | 同步力场").exists()||textContains("4 | 蚀刻领主").exists()||textContains("型 | 崩络克").exists()
         {
             buy002();
             breakbuy();
             toast('00-02,07');
         }
    else if(textContains("秋季方巾").exists()||textContains("太空竞赛").exists()||textContains("复古流行").exists()||textContains("辛迪加").exists()||textContains("牛 | 太空猫").exists()||textContains("星 | 锦鲤").exists()||textContains("牛 | 死亡主宰").exists()||textContains("5 | 战术高手").exists()||textContains("9 | 焦油缠绕").exists()||textContains("4 | 五彩斑驳").exists()||textContains("疯狂蔓延").exists()||textContains("） | 太空猫").exists()||textContains("） | ZX81").exists())//
         {
            buy002();
            buy003();
            toast('00-03,07');
           breakbuy();
         }
    else if(textContains("SG 553（StatTrak™） | 电子脉冲").exists()||textContains("3 | 电子脉冲").exists()||textContains("核子威慑").exists()||textContains("） | 中士").exists()||textContains("澄澈之水").exists()||textContains("） | 笑一个").exists()) //
         {
            buy008();
            buy009();
           buy010();
            toast('01-10');
           breakbuy();
         }
     else{
        toast('00-01 07')
        sleep(100);
        if(id("drawer_icon").findOne(10000))
        {
        id("drawer_icon").findOne().click();
        }}
    }

else{   

    if(textContains("水中之血").exists()||textContains("霓虹革命").exists())
        {
         toast("no");
          breakbuy();  
        }
        else if(textContains("磨损: 0.00").exists())//买0.00
        {
            var buybutton=textContains("磨损: 0.00").findOne();
            toast('buy 0.00');
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(3000))
            {
                ifbuy();
            }
    
            else
            {
                swipe(900,1900,900,1200,1000);
                var buybutton=textContains("磨损: 0.00").findOne();
                press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                if(textContains("确认付款").findOne(3000)){
                ifbuy();
            }
            } 
            
            breakbuy();
        }
    
           else if(textContains("WP | 黑色魅影").exists()||textContains("） | X 射").exists()||textContains("4 | X 射").exists()||textContains("4 | X 光").exists()||textContains("型 | 荒野").exists()||textContains("黄金锦鲤").exists()||textContains("5 | 维多利亚").exists()||textContains("战场之").exists()||textContains("枪 | 渐变").exists()||textContains("迷人眼").exists())//||textContains("4 | 喧嚣杀").exists()
           {
               //只买00
               toast("00");
             breakbuy();
           }
           else if(textContains("倒吊人").exists()||textContains("4 | 喧嚣杀").exists()) //||textContains("） | 迷人眼").exists()||textContains("9 | 星使").exists()
           {
               //买00 07
               buy007();
               toast("00 07");
               breakbuy();
           }
           else if(textContains("型 | 子弹皇后").exists()||textContains("斯 | 防滚").exists()||textContains("型 | 次时代").exists()) //||textContains("） | 迷人眼").exists()||textContains("9 | 星使").exists()
           {
               //买00 07
               buy007();
               toast("00 07");
               breakbuy();
           }
           else if(textContains("磨损: 0.01").exists())//买0.01
           {
               var buybutton=textContains("磨损: 0.01").findOne();
               toast('buy 0.01');
               press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
           if(textContains("确认付款").findOne(3000))
               {
                   ifbuy();
               }
        
               else
               {
                   swipe(900,1900,900,1200,1000);
                   var buybutton=textContains("磨损: 0.01").findOne();
                   press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                   if(textContains("确认付款").findOne(3000)){
                   ifbuy();
               }
               } 
               breakbuy();
           }
           else if(textContains("G | 变色龙").exists()||textContains("0 | 火灵").exists()||textContains("伽玛").exists()||textContains("抽象派").exists()||textContains("北海巨").exists()||textContains("） | 荒野反叛").exists()||textContains("） | 纪念碑").exists()||textContains("斯 | 纪念碑").exists()||textContains("血腥运动").exists()||textContains("） | 变色龙").exists()||textContains("皇帝").exists()||textContains("7 | 怒氓").exists()||textContains("4 | 活色").exists()||textContains("7 | 阿努比斯").exists()||textContains("炎龙之").exists())
            {
               //只买00 01 不买007
               toast("00-01"); 
             breakbuy();
           }
         else if(textContains("） | 生化短").exists()||textContains("4 | 沙漠精英").exists()||textContains("） | 沙漠精英").exists()||textContains("） | 怒氓").exists()||textContains("牛 | 阿努比斯之审判").exists()||textContains("） | 活色生香").exists())//纪念||textContains("） | 喧嚣杀").exists()
           {   
               buy002();
               toast("00-02");
               breakbuy();       
           }
           else if(textContains("） | 阿努比斯之审判").exists()||textContains("4 | 弹雨").exists())
           {   
               buy002();
            //    buy003();
               toast("00-03");
               breakbuy();       
           }
           else if(textContains("磨损: 0.07").exists())//买0.07
           {
               var buybutton=textContains("磨损: 0.07").findOne();
               toast('buy 0.07');
               press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
           if(textContains("确认付款").findOne(3000))
               {
                   ifbuy();
               }
               else
               {
                   swipe(900,1900,900,1200,1000);
                   var buybutton=textContains("磨损: 0.07").findOne();
                   press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                   if(textContains("确认付款").findOne(3000)){
                   ifbuy();
               }
               } 
               breakbuy();
           }
           

   else if(textContains("型 | 黑色魅影").exists()||textContains("） | 黑色魅影").exists()||textContains("P | 暴怒野兽").exists()||textContains("7 | 荒野反叛").exists()||textContains("） | 防滚").exists()||textContains("皇家圣").exists()||textContains("7 | 暴怒野兽").exists()||textContains("） | 阿努比斯军团").exists()||textContains("版 | 黑色魅影").exists()||textContains("） | 星使").exists())//
           {   
               buy002();
               toast("00-02 07");
               breakbuy();       
           }
        //    else if()
        //    {   
        //        buy008();
        //        toast("00-01 08");
        //        breakbuy();  
        //    }
           else if(textContains("合纵").exists()||textContains("潜行者").exists()||textContains("） | 二西莫夫").exists()||textContains("7 | 二西莫夫").exists())
           {   
               buy002();
               buy008();
               toast("00-02 08");
               breakbuy();       
           }
  
           else if(textContains("型 | 暴怒野兽").exists())
           {
               buy002();
               buy003();
               buy007();
               toast("00-03 07");
               breakbuy();
           }  
        //    else if(textContains("弹雨").exists())
        //    {
        //        buy002();
        //        buy003();
        //        buy007();
        //        buy008();
        //        toast("00-03 08");
        //      breakbuy();
        //    }  
          else if(textContains("） | 弹雨").exists()||textContains("喵之萌杀").exists())
           {
               buy007();
               buy008();
               buy009();
               toast("00-02 07-09");
             breakbuy();
           }  
           else if(textContains("无畏战神").exists())
           {
              buy010();
              toast("010");
             breakbuy();
           }
           else{
            toast('购买00-01 07 但未检测到')
            sleep(100);
            if(id("drawer_icon").findOne(10000))
            {
            id("drawer_icon").findOne().click();
            }}//
    }  }
    }}




    
//检测脚本是否卡在某一页面
work_thread = threads.start(function () {
   setScreenMetrics(1080,2110);
    toast('aaaaa');
  mainstrat();
});


observer_thread = threads.start(function () {
    while (true) {
        sleep(5000);
        if (!Observer()) {
            work_thread.interrupt();
            work_thread = threads.start(function () {
                console.setPosition(device.width / 2, device.height / 1.5);
                console.show();
            console.warn("脚本在3秒后重启！");
            console.warn(8-j+"次后大重启");
                j++;
                if(j>=8)
                {
                    关闭应用();
                }
                sleep(3000);
                console.hide();
               mainstrat();
            });
        }
    }
});

