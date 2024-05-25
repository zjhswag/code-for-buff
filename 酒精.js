
console.setPosition(device.width / 2, device.height / 1.5);
var j=0;
var price;
var spr;
var ss;
var g;
var start2=function()
{
    click("最新上架");
    click(948,240,1080,361);
    while(!click("品质"));
    while(!click("保密"));
    while(!click("隐秘"));
    while(!click("类别"));
    while(!click("普通"));
    click(36,544,420,636);
    while(!click("外观"));
    while(!click("久经沙场"));
    while(!click("价格区间"));
    setText(0,"0");
    setText(1,"280");
    while(!click("完成"));
    toast('处理完成  开始扫货');
    sleep("1000");   
}
var startmy=function()//mobile newvivo?
{
    click("最新上架");
    click(948,240,1080,361);
    while(!click("品质"));
    while(!click("隐秘"));
    while(!click("保密"));
    while(!click("受限"));
    while(!click("类别"));
   while(!click("普通"));
   click(36,544,420,636);
    while(!click("外观"));
    while(!click("崭新出厂"));
//     while(!click("收藏品"));
//    click("梦魇");
   while(!click("略有磨损"));
    while(!click("价格区间"));
    setText(0,"1");
    setText(1,"100");
    while(!click("完成"));
    toast('处理完成  开始扫货');
    sleep("1000");   
}
var start60=function()
{
    click("最新上架");
    click(948,216,1080,337);
    while(!click("品质"));
    while(!click("隐秘"));
    while(!click("保密"));
   // while(!click("受限"));
    while(!click("类别"));
   while(!click("普通"));
    click(36,520,420,612);
    while(!click("外观"));
    //while(!click("崭新出厂"));
   while(!click("久经沙场"));
    while(!click("价格区间"));
    setText(0,"10");
    setText(1,"150");
    while(!click("完成"));
    toast('处理完成  开始扫货');
    sleep("1000");
   
}
var start3=function()
{
    
    click("最新上架");
    click(948,228,1080,349);
    while(!click("品质"));
    while(!click("隐秘"));
    while(!click("保密"));
    while(!click("受限"));
    while(!click("类别"));
   while(!click("普通"));
    click(36,532,420,624);
    while(!click("外观"));
    while(!click("崭新出厂"));
   while(!click("略有磨损"));
    while(!click("价格区间"));
    setText(0,"1");
    setText(1,"300");
    while(!click("完成"));
    toast('处理完成  开始扫货');
    sleep("1000");
   
}
var start1=function()
{
    click("最新上架");
    click(948,204,1080,325);
    while(!click("品质"));
    while(!click("隐秘"));
    while(!click("保密"));
    
    while(!click("类别"));
   while(!click("普通"));
    click(36,508,420,600);
    while(!click("外观"));
   // while(!click("崭新出厂"));
   //while(!click("略有磨损"));
 while(!click("久经沙场"));
    while(!click("价格区间"));
    setText(0,"10");
    setText(1,"100");
    while(!click("完成"));
    toast('处理完成  开始扫货');
    sleep("1000");
   
}

function 关闭应用() {
    j=0;
    toast("即将关闭应用");
    console.show();
    log(app.getAppName(packageName)+"将被关闭,进入重启");
    recents();
    sleep(2000);
    click(480,2046,600,2166)
   sleep(1000);
   for(var i=0;i<4;i++)
   {
   log(4-i +"后重启脚本");
   sleep(1000);
   }
}

var price1=function()
{
//  console.show();
var t=textContains("|").findOne();
var hh=textContains("¥").findOne();
 g=hh.text().substr(1);
g=g*0.9;
g=g.toFixed(2);
g = parseFloat(g,10);
//log(g+"steam");//steam上限价格
var kind=t.text();//枪名
var l=kind.length;
var kind=kind.substr(l-5,4);//截取出酒精
var tprice=kind+"\n¥";//通过酒精¥获取价格
// if(textContains(tprice).exists())
// {
//     var gun=textContains(tprice).findOne();
// }
var gun=textContains(tprice).findOne();
var price=gun.text();
var price=price.substr(6);//截取酒精下面价格，为整数
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
// log(price+" "+" "+spr.toFixed(2));
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



var buy020=function()
{
    if(textContains("磨损: 0.20").exists())
    {
        var buybutton=textContains("磨损: 0.20").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.20');
        }
 
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.20").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}

var buy019=function()
{
    if(textContains("磨损: 0.19").exists())
    {
        var buybutton=textContains("磨损: 0.19").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.19');
        }
 
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.19").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}

var buy018=function()
{
    if(textContains("磨损: 0.18").exists())
    {
        var buybutton=textContains("磨损: 0.18").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.18');
        }
 
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.18").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}
var buy021=function()
{
    if(textContains("磨损: 0.21").exists())
    {
        var buybutton=textContains("磨损: 0.21").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.21');
        }
 
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.21").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}
var buy022=function()
{
    if(textContains("磨损: 0.22").exists())
    {
        var buybutton=textContains("磨损: 0.22").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.22');
        }
 
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.22").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}
var buy023=function()
{
    if(textContains("磨损: 0.23").exists())
    {
        var buybutton=textContains("磨损: 0.23").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.23');
        }
 
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.23").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}
var buy024=function()
{
    if(textContains("磨损: 0.24").exists())
    {
        var buybutton=textContains("磨损: 0.24").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.24');
        }
 
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.24").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}
var buy025=function()
{
    if(textContains("磨损: 0.25").exists())
    {
        var buybutton=textContains("磨损: 0.25").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.25');
        }
 
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.25").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(3000)){
            ifbuy();
        }
        }
    }
}
var buy026=function()
{
    if(textContains("磨损: 0.26").exists())
    {
        var buybutton=textContains("磨损: 0.26").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.26');
        }
 
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.26").findOne();
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

   //setScreenMetrics(1080,2110);
    launchApp("网易BUFF");
    click("关闭");
    click("创建报价");
    click("同意并继续");
    click("暂不更新");
    //  if(textContains("更新").findOne(1000))
    //  {
    //     click("更新");
    //     if(textContains("完成").findOne(2000))
    //     {
    //     clcik("完成");
    //     }
    //  }
    click("BUFF");
    if(textContains("查看购买记录").findOne(1000))
    {
        click("查看购买记录");
        if(id("drawer_icon").findOne(2000))
    {
    id("drawer_icon").findOne().click();
    }
    }
    if(textContains("交易详情").findOne(1000))
        {
            click("交易详情");
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
                sleep(200); 
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



// else if(textContains("受限").exists())//915
// {

//     }

   if(textContains("保密").exists())                   
    {     
        if(textContains("黑莲花").exists()||textContains("鹰 | 机械工业").exists()||textContains("0 | 血s腥").exists()||textContains("） | 至尊威龙").exists()||textContains("鹰（StatTrak™） | 机械工业").exists()||textContains("死神").exists()||textContains("水灵").exists()||textContains("富兰克林").exists()||textContains("龙王").exists()||textContains("渐变琥珀").exists()||textContains("破碎铅秋").exists()||textContains("遥控").exists()||textContains("法玛斯（StatTrak™） | 机械工业").exists()||textContains("斯 | 机械工业").exists()||textContains("速度激情").exists()||textContains("7 | 卡特尔").exists()||textContains("0 | 卡特尔").exists()||textContains("宁静").exists()||textContains("珊瑚树").exists()||textContains("死亡轮回").exists()||textContains("阴谋").exists()||textContains("型 | 水灵").exists()||textContains("幻影破坏者").exists()||textContains("250（StatTrak™） | 卡特尔").exists()||textContains("三角").exists()||textContains("古董枪").exists()||textContains("混沌点阵").exists()||textContains("梅红时刻").exists()||textContains("残影").exists()||textContains("曼海蒂").exists()||textContains("守护者").exists()||textContains("红色层压").exists()||textContains("电子蜂巢").exists()||textContains("45（StatTrak™） | 动量").exists()||textContains("血清").exists()||textContains("暗潮").exists()||textContains("孟加拉猛虎").exists()||textContains("0 | 心脏打击").exists()||textContains("P | 红线").exists()||textContains("凯门鳄").exists()||textContains("控制台").exists()||textContains("溅射果").exists()||textContains("0 | 往日行动").exists()||textContains("7 | 狩猎利器").exists()||textContains("4 | 死寂").exists()||textContains("） | 血腥运动").exists()||textContains("） | 零食派对").exists()||textContains("） | 卡特尔").exists()||textContains("斯 | 熔化").exists()||textContains("0 | 凝视").exists()||textContains("G | 汪之").exists()||textContains("0 | 次时代").exists()||textContains("4 | 地狱烈焰").exists()||textContains("毒蛇袭击").exists()||textContains("原子合金").exists()||textContains("大佬龙").exists()||textContains("~甜甜的").exists()||textContains("） | 美洲驼炮").exists()||textContains("） | 买定离手").exists()||textContains("P | 浮生如梦").exists()||textContains("5 | 相柳").exists()||textContains("版 | 脑洞大开").exists()||textContains("型 | 毁灭者").exists())
        
        // ||textContains("原子合金").exists()||textContains("5 | 黄夹").exists()||textContains("3 | 次时代").exists()textContains("4 | 死寂").exists()||||textContains("G | 湖怪鸟").exists()||textContains("破颚者").exists()||textContains("5 | 动量").exists()||textContains("星 | 暴怒野兽").exists()||textContains("） | 玩具盒子").exists()||textContains("浮生如梦").exists()||textContains("相柳").exists()||textContains("D | 磷光体").exists()||textContains("P | 浮生如梦").exists()||textContains("相柳").exists()

        {
        toast("no")
        breakbuy(); 
        }

   else if(textContains("磨损: 0.15").exists())//买0.15
        {
            var buybutton=textContains("磨损: 0.15").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(3000))
            {
                ifbuy();
                toast('buy 0.15');
            }
    
            else
            {
                swipe(900,1900,900,1200,1000);
                var buybutton=textContains("磨损: 0.15").findOne();
                press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                if(textContains("确认付款").findOne(3000)){
                ifbuy();
            }
            } 
            breakbuy();
        } 

   else if(textContains("磨损: 0.16").exists())//买0.000
        {
            var buybutton=textContains("磨损: 0.16").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(3000))
            {
                ifbuy();
                toast('buy 0.16');
            }
    
            else
            {
                swipe(900,1900,900,1200,1000);
                var buybutton=textContains("磨损: 0.16").findOne();
                press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                if(textContains("确认付款").findOne(3000)){
                ifbuy();
            }
            } 
            breakbuy();
        } 

  else if(textContains("磨损: 0.17").exists())//买0.000
        {
            var buybutton=textContains("磨损: 0.17").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(3000))
            {
                ifbuy();
                toast('buy 0.17');
            }
    
            else
            {
                swipe(900,1900,900,1200,1000);
                var buybutton=textContains("磨损: 0.17").findOne();
                press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                if(textContains("确认付款").findOne(3000)){
                ifbuy();
            }
            } 
            breakbuy();
        } 

        else if(textContains("精雕").exists()||textContains("枪 | 奥林匹").exists()||textContains("版 | 破颚者").exists()||textContains("4 | 焚烬之鳄").exists()||textContains("AUG | 动量").exists()||textContains("AUG（StatTrak™） | 动量").exists()||textContains("R | 经济").exists()||textContains("） | 经济").exists()||textContains("0 | 代").exists()||textContains("） | 樱花").exists()||textContains("） | 渐变迪斯").exists()||textContains("） | 巨铁").exists()||textContains("1 | 弗卢").exists()||textContains("） | 荒野公主").exists()||textContains("） | 浅坟").exists()||textContains("） | 气密").exists()||textContains("） | 正义").exists()||textContains("） | 灯神").exists()||textContains("） | 雅典娜").exists()||textContains("） | 吞噬").exists()||textContains("） | 埋葬之").exists()||textContains("） | 齿仙").exists()||textContains("） | 摩登时代").exists()||textContains("4 | 埋葬之").exists()||textContains("4 | 齿仙").exists()||textContains("型 | 摩登时代").exists()||textContains("） | 要抱抱").exists()||textContains("喋血战士").exists()||textContains("） | 屠杀").exists()||textContains("0 | 渐变迪斯").exists()||textContains("席德.米德").exists()||textContains("） | 野蛮剑齿虎").exists()||textContains("） | 往日行动").exists()||textContains("） | 汪之").exists()||textContains("） | 梦魇").exists()||textContains("） | 黄夹").exists()||textContains("） | 次时代").exists()||textContains("0 | 玩具盒子").exists()||textContains("双涡轮").exists()||textContains("7 | 正义").exists()||textContains("意式拉力").exists()||textContains("枪 | 么么").exists()||textContains("0 | 迷人幻象").exists()||textContains("） | 么么").exists()||textContains("） | 迷人幻象").exists()||textContains("3 | 次时代").exists()||textContains("9 | 复仇者").exists()||textContains("5 | 黄夹克").exists()||textContains("） | 幽幻深渊").exists()||textContains("） | 瓜瓜").exists()||textContains("） | 幽幻深渊").exists()||textContains("4 | 赛博").exists())//||textContains("） | 往日行动").exists()||textContains("） | 九头蛇").exists()||textContains("渐变迪斯").exists()||textContains("） | 渐变迪斯").exists()||textContains("1 | 行刑者").exists()||textContains("斯 | 雅典娜").exists()||textContains("枪 | 吞噬").exists()||textContains("） | 湖怪鸟").exists()||textContains("） | 金粉").exists()
        {
         buy018();
         buy019();
         buy020();       
         toast("special 18-20");
         breakbuy();
        }
        
        else if(textContains("小绿怪").exists()||textContains("） | 赛博").exists()||textContains("） | 童话城堡").exists()||textContains("） | 小绿").exists()||textContains("7 | 童话城堡").exists()||textContains("） | 变态杀戮").exists()||textContains("） | 野孩子").exists()||textContains("） | 弗卢").exists()||textContains("） | 四号栖息地").exists()||textContains("3 | 四号栖息地").exists()||textContains("） | 焚烬之鳄").exists()||textContains("） | 行刑者").exists()||textContains("0 | 变态杀戮").exists()||textContains("5 | 野孩子").exists()||textContains("7 | 红线").exists()||textContains("P | 金粉").exists())//
        {
         buy018();
         buy019();
         buy020();
         buy021();
         buy022();
         buy023();
         toast("special 18-24");
         breakbuy();
        }
        else if(textContains("奈芙蒂斯").exists()||textContains("阿佩普之").exists()||textContains("银装素裹").exists())//
        {
         buy018();
         buy019();
         buy020();
         buy021();
         buy022();
         buy023();
         buy024();
         buy025();
         buy026();
         toast("special 18-26");
         breakbuy();
        }
        //||textContains("keran").exists()

        else{
            sleep(100);
            if(id("drawer_icon").findOne(10000))
            {
            id("drawer_icon").findOne().click();
            }}//

    }
         

else{   

    if(textContains("血腥运动").exists()||textContains("7 | 霓虹革命").exists()||textContains("7 | 霓虹骑士").exists()||textContains("0 | 霓虹骑士").exists()||textContains("） | 霓虹骑士").exists()||textContains("变色龙").exists()||textContains("0 | 生化短").exists()||textContains("怒氓").exists()||textContains("战场之星").exists()||textContains("沙漠精英").exists()||textContains("荒野反叛").exists()||textContains("维多利亚").exists()||textContains("牛（StatTrak™） | 阿努比").exists()||textContains("牛 | 阿努比").exists()||textContains("7 | 阿努比").exists()||textContains("北海巨妖").exists()||textContains("渐变之色").exists()||textContains("火灵").exists()||textContains("射线").exists()||textContains("炎龙").exists()||textContains("弹雨").exists()||textContains("伽玛多普勒").exists()||textContains("纪念").exists()||textContains("次时代").exists()||textContains("喵之").exists()||textContains("无畏").exists()||textContains("水中之血").exists()||textContains("版 | 黑色").exists()||textContains("P | 黑色").exists()||textContains("AWP（StatTrak™） | 黑色魅影").exists()||textContains("7 | 美洲").exists()||textContains("抽象派").exists()||textContains("1 | 二西莫").exists()||textContains("P | 迷人眼").exists()||textContains("） | 皇家圣骑士").exists()||textContains("7（StatTrak™） | 阿努比").exists()||textContains("7 | 皇后").exists()||textContains("深海复仇").exists()||textContains("P | 暴怒野兽").exists())//||textContains("4 | 黑色魅影").exists()||textContains("P90（StatTrak™） | 二西莫").exists()||textContains("7（StatTrak™） | 阿努比").exists()||textContains("7 | 暴怒野兽").exists()||textContains("防滚架").exists()||textContains("USP 消音版（StatTrak™） | 黑色魅影").exists()||textContains("鹰 | 印花集").exists()||textContains("女火神").exists()
        {
         toast("no");  
          breakbuy();  
        }
        else if(textContains("磨损: 0.15").exists())//买0.15
        {
            var buybutton=textContains("磨损: 0.15").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(3000))
            {
                ifbuy();
                toast('buy 0.15');
            }
    
            else
            {
                swipe(900,1900,900,1200,1000);
                var buybutton=textContains("磨损: 0.15").findOne();
                press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                if(textContains("确认付款").findOne(3000)){
                ifbuy();
            }
            } 
            breakbuy();
        } 

   else if(textContains("磨损: 0.16").exists())//买0.000
        {
            var buybutton=textContains("磨损: 0.16").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(3000))
            {
                ifbuy();
                toast('buy 0.16');
            }
    
            else
            {
                swipe(900,1900,900,1200,1000);
                var buybutton=textContains("磨损: 0.16").findOne();
                press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                if(textContains("确认付款").findOne(3000)){
                ifbuy();
            }
            } 
            breakbuy();
        } 

  else if(textContains("磨损: 0.17").exists())//买0.000
        {
            var buybutton=textContains("磨损: 0.17").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(3000))
            {
                ifbuy();
                toast('buy 0.18');
            }
    
            else
            {
                swipe(900,1900,900,1200,1000);
                var buybutton=textContains("磨损: 0.17").findOne();
                press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                if(textContains("确认付款").findOne(3000)){
                ifbuy();
            }
            } 
            breakbuy();
        } 
        else if(textContains("4 | 反冲精英").exists()||textContains("P250（StatTrak™） | 二西莫").exists()||textContains("） | 潜行").exists()||textContains("合纵").exists()||textContains("皇帝").exists()||textContains("星使").exists()||textContains("） | 倒吊").exists()||textContains("） | 子弹皇后 ").exists()||textContains("型（StatTrak™） | 黑色魅影").exists()||textContains("二号玩家").exists())//||textContains("迷人眼").exists()||textContains("女火神").exists()||textContains("7 | 一发入魂").exists()||textContains("夜愿").exists()
        {
         buy018();
         buy019();
         buy020();
         toast("special 18-20");
         breakbuy();
        }
        else if(textContains("） | 反冲精英").exists())
        {
        buy018();
        buy019();
        buy020();
        buy021();
        buy022();
        buy023();
        toast("special 18-24");
        breakbuy();
        }
        else{
            sleep(100);
            if(id("drawer_icon").findOne(10000))
            {
            id("drawer_icon").findOne().click();
            }}//

    }
}}}




    
//检测脚本是否卡在某一页面
work_thread = threads.start(function () {
   //setScreenMetrics(1080,2110);
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
            console.warn(15-j+"次后大重启");
                j++;
                if(j>=15)
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

