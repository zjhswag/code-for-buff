console.setPosition(device.width / 2, device.height / 1.5);
var j=0;
var price;
var spr;  
var ss;
var g;

var start2=function()
{
    click("最新上架");
    click(948,204,1080,325);
    while(!click("品质"));
    while(!click("受限"));
    while(!click("类别"));
   while(!click("普通"));
    click(36,508,420,600);
    while(!click("外观"));
    while(!click("崭新出厂"));
   while(!click("略有磨损"));
    while(!click("价格区间"));
    setText(0,"1");
    setText(1,"300");
    while(!click("完成"));
    let asciiValues = [23567,23567,30340,25991,35946,20063,24456,21487,29233]; 
    let chars = asciiValues.map(value => String.fromCharCode(value)).join('');
    toast(chars);
    sleep(1000);
}
function 关闭应用() {
    j=0;
    toast("即将关闭应用");
    let packageName = currentPackage();
    app.openAppSetting(packageName);
    sleep(2000);
    if(textContains("强行停止").exists())
    { 
   textContains("强行停止").findOne().click();
   console.show();
   log(app.getAppName(packageName)+"被关闭,进入重启");
   sleep(1000);
   textContains("确定").findOne().click();
   sleep(1000);
   for(var i=0;i<4;i++)
   {
   log(4-i +"后重启脚本");
   sleep(1000);
   }
   console.hide();
    }
    else 
    {
     console.log("应用未正常关闭");
    }
}
var price1=function()
{
//  console.show();
var t=textContains("|").findOne();
var hh=textContains("¥").findOne();
 g=hh.text().substr(1);
g=g*0.88;
g=g.toFixed(2);
g = parseFloat(g,10);
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
}
var bf = 1
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

var bp
var ifbuy=function()
{    

    var elements = findElementsWithText("¥");
    if (elements.length > 0) {
        var lastElement = elements[elements.length - 1]; 
        var priceText = lastElement.text(); 
        bp = priceText.substr(2,6); 
    }
    var buy1 = Math.random()
    bp = parseFloat(bp,10)
    var elements = findElementsWithText("支付");
    var lastElement = elements[1].text();

    if(lastElement=='微信支付'||lastElement=='支付宝支付')
        {
            id("close").findOne().click();
            toast("傻逼支付宝不能买");
    
        }
  else  if(bp<=spr&&bp<=g&&buy1<bf)
    {     
    click("确认付款");
    textContains("创建报价").findOne(10000);
    click("创建报价");
    textContains("关闭").findOne(13000);
    click("关闭");
    toast("yes");
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
  
    

else if(textContains("受限").exists())//915
{
     if(textContains("） | 模拟输入").exists()||textContains("） | 笑一个").exists()||textContains("蚀刻领主").exists()||textContains("枪 | 模拟输入").exists()||textContains("混合体").exists()||textContains("7 | 笑一个").exists()||textContains("） | 鼬鼠").exists()||textContains("喷焰者").exists()||textContains("钴蓝石英").exists()||textContains("天空守卫").exists()||textContains("9 | 晶红石英").exists()||textContains("狂野飞").exists()||textContains("橙黄 DD").exists()||textContains("石墨黑").exists()||textContains("巴洛克").exists()||textContains("绯红镂").exists()||textContains("彩绘").exists()||textContains("红岩").exists()||textContains("） | 表面淬火").exists()||textContains("） | 透光区").exists()||textContains("0 | 表面淬火").exists()||textContains("蓝莓樱桃").exists()||textContains("） | 蛊惑之色").exists()||textContains("致命红蝎").exists()||textContains("7 | 表面淬火").exists()||textContains("黑曜石").exists()||textContains("） | 销声").exists()||textContains("3 | 蛊惑之色").exists()||textContains("） | 复古浪潮").exists()||textContains("7 | 复古浪潮").exists()||textContains("元素轮廓").exists()||textContains("纳迦蛇神").exists()||textContains("0 | 手炮").exists()||textContains("9 | 蛊惑之色").exists()||textContains("翡翠色调").exists()||textContains("D | 探员").exists()||textContains("型 | 钢铁禁锢").exists()||textContains("） | 海之泡沫").exists()||textContains("崩络克").exists())//
        {
            breakbuy();
        }
        else if(textContains("磨损: 0.000").exists())//买0.00
        {
            var buybutton=textContains("磨损: 0.000").findOne();
            toast('buy 0.00');
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
        }//
        else if(textContains("秋季方巾").exists()||textContains("型 | 粉碎者").exists()||textContains("） | 轨道").exists()||textContains("型 | 粉红 DDPAT").exists()||textContains("凤凰冥灯").exists()||textContains("） | 惊惧骷髅").exists()||textContains("法玛斯（StatTrak™） | 电子脉冲").exists()||textContains("警告").exists()||textContains("黄铜").exists()||textContains("G | 力矩").exists()||textContains("） | 粉碎者").exists()||textContains("复古流行").exists()||textContains("9 | 富士山").exists())
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
   
       else if(textContains("诅咒").exists()||textContains("） | 古董枪").exists()||textContains("） | 翼蜥").exists()||textContains("铁血玫瑰").exists()||textContains("牛 | 古董枪").exists()||textContains("） | 杀意大名").exists()||textContains("7 | 轨道").exists()||textContains("冥界之").exists()||textContains("林间").exists()||textContains("P | 火卫一").exists()||textContains("盲点").exists()||textContains("0 | 死亡之握").exists()||textContains("） | 蓝色层压板").exists()||textContains("） | 极地孤狼").exists()||textContains("星 | 惊惧骷髅").exists()||textContains("次时代").exists()||textContains("数字架构师").exists()||textContains("棱彩阶梯").exists()||textContains("斯 | 电子脉冲").exists()||textContains("型（StatTrak™） | 城里的月光").exists()||textContains("4 | 特克卢").exists()||textContains("G | 极地孤狼").exists()||textContains("） | 西装革履").exists()||textContains("） | 帝国").exists()||textContains("7 | 蓝色层压板").exists()||textContains("P | 蠕虫之神").exists()||textContains("） | 浮生如梦").exists()||textContains("4 | 杀意大名").exists()||textContains("版 | 地狱门票").exists()||textContains("） | 崩络克").exists()||textContains("） | 富士山").exists())//||textContains("4 | 西装革履").exists()
       {
          buy001();  
          toast('00-01 啊');
          breakbuy();      
       }
       else if(textContains("） | 隐伏帝王龙").exists()||textContains("血红蛋白").exists()||textContains("射线").exists()||textContains("金砖").exists()||textContains("幕后主谋").exists()||textContains("犯罪现场").exists()||textContains("4 | 狮鹫").exists()||textContains("花纹钢板").exists()||textContains("铜色星系").exists()||textContains("钛片").exists()||textContains("错觉").exists()||textContains("橙红安").exists()||textContains("） | 地狱门票").exists()||textContains("红色 DD").exists()||textContains("7 | 海之泡沫").exists()||textContains("） | 轻轨").exists()||textContains("鹰 | 轻轨").exists()||textContains("夜空沙暴").exists()||textContains("雅藤如嫣").exists()||textContains("） | 狮鹫").exists()||textContains("） | 火卫一").exists()||textContains("） | 钢铁禁锢").exists()||textContains("富兰克林").exists()||textContains("烧尽").exists()||textContains("遗产").exists()||textContains("0 | 翡翠色调").exists()||textContains("型 | 翼蜥").exists()||textContains("地狱看门犬").exists()||textContains("） | 蠕虫之神").exists()||textContains("太古传说").exists()||textContains("远古幻想").exists()||textContains("鬼脸天蛾").exists()||textContains("） | 祥和之翼").exists()||textContains("） | 猫猫狗狗").exists()||textContains("） | 夜无眠").exists()||textContains("型 | 隐伏帝王龙").exists()||textContains("型 | 核子花园").exists()||textContains("钴蓝石英").exists()||textContains("9 | 晶红石英").exists()||textContains("型（StatTrak™） | 城里的月光").exists()||textContains("） | 浮生如梦").exists())
        //||textContains("） | 夜无眠").exists()textContains("崩络克").exists()||textContains("7 | 混合体").exists()||textContains("枪 | 模拟输入").exists()||||textContains("） | 特克卢").exists()
        {
           toast(' only 00'); 
            breakbuy();
        }
   
   
   
        else if(textContains("G | 力矩").exists()||textContains("） | 力矩").exists())
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
        else if(textContains("牛 | 水蓝条纹").exists()||textContains("） | 海斗士").exists()||textContains("塔 | 海斗士").exists()||textContains("） | 皇家军团").exists()||textContains("型 | 皇家军团").exists()||textContains("指挥").exists()||textContains("8 | 幽灵战士").exists()||textContains("塔 | 皇室伴侣").exists()||textContains("0 | 炽热").exists()||textContains("） | 探员").exists()||textContains("） | 手炮").exists()||textContains("P | 亡灵之主").exists()||textContains("） | 冷石").exists()||textContains("R | 冷石").exists()||textContains("型 | 闪回").exists()||textContains("斯 | ZX81").exists()||textContains("） | 圆影").exists()||textContains("消音型（StatTrak™） | 闪回").exists()||textContains("彼岸花").exists()||textContains("P | 猫猫狗狗").exists()||textContains("7 | 复古浪潮").exists()||textContains("4 | 星级").exists()||textContains("7 | 三位一体").exists()||textContains("） | 火线冲锋").exists())//||textContains("7 | 墨岩").exists()|textContains("） | 猫猫狗狗").exists()
        //只买0.07 和0.00  ||textContains("） | 速递").exists()||textContains("鹰 | 后发制人").exists()
        {
            toast('00-07');         
            breakbuy();
        }
       else if(textContains("响尾蛇").exists()||textContains("） | 金铋辉煌").exists()||textContains("不可磨灭").exists()||textContains("） | 抖枪").exists()||textContains("枪 | 重新启动").exists()||textContains("） | 水蓝条纹").exists()||textContains("病毒危机").exists()||textContains("MAG-7（StatTrak™） | 炽热").exists()||textContains("0 | 销声").exists()||textContains("） | 酸蚀").exists()||textContains("牛 | 路霸").exists()||textContains("星 | 一见青心").exists()||textContains("塔 | 灾难").exists()||textContains("） | 蚀刻领主").exists()||textContains("） | 销声").exists()||textContains("MAC-10（StatTrak™） | 炽热").exists()||textContains("型 | 鼬鼠").exists()||textContains("7 | 渐变之色").exists()||textContains("） | 黯翼").exists()||textContains("型 | 氮化处理").exists())
       {
           buy008();
           toast('00 07-08');
           breakbuy();
       }
       else if(textContains("） | 星级").exists()||textContains("） | 三巨头").exists()||textContains("） | 疯狂老八").exists()||textContains("7 | 炽热").exists()||textContains("） | 北冥有鱼").exists()||textContains("0 | 酸蚀").exists())
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
         
      else  if(textContains("R | 信号灯").exists()||textContains("星 | 狂野").exists()||textContains("夫 | 狮子鱼").exists()||textContains("5 | 白狼").exists()||textContains("7 | SWAG").exists()||textContains("7 | 石雕").exists()||textContains("5 | 曝光").exists()||textContains("3 | 幻影").exists()||textContains("0 | 战争手柄").exists()||textContains("0 | 赛博先锋").exists()||textContains("夫 | 橙灰之").exists()||textContains("0 | 魅惑").exists()||textContains("R | 凤凰商号").exists()||textContains("9 | 兄弟连").exists()||textContains("D | 猛烈冲锋").exists()||textContains("） | 动力装").exists()||textContains("） | 战火重").exists()||textContains("） | 红鹰").exists()||textContains("） | 先驱").exists()||textContains("5 | 先驱").exists()||textContains("1 | 毒刺").exists()||textContains("4 | 行尸攻").exists()||textContains("1 | 梦之林地").exists()||textContains("） | 一见青心").exists()||textContains("） | 信号灯").exists()||textContains("） | 净化者").exists()||textContains("USP 消音版（StatTrak™） | 闪回").exists()||textContains("0 | 炼狱小镇").exists()||textContains("5 | 塑胶炸弹").exists()||textContains("9 | 阿兹特克").exists()||textContains("7 | 好兄弟").exists()||textContains("） | 战争手柄").exists())//||textContains("毒刺").exists()||textContains("4 | 五彩斑驳").exists()
            {
               buy002();
               buy003();
               buy008();
               toast('00-03,07-08');
               breakbuy();
            }
       else  if(textContains("1 | 净化者").exists()||textContains("0 | 影魔").exists()||textContains("版 | 闪回").exists()||textContains("） | 赛博先锋").exists()||textContains("） | 橙灰之").exists()||textContains("） | 石雕").exists()||textContains("） | 权力之心").exists()||textContains("） | 毒刺").exists()||textContains("） | 毒蜥").exists()||textContains("） | 曝光").exists()||textContains("） | 幻影").exists()||textContains("） | 焦油缠绕").exists()||textContains("鹰 | 深红之网").exists()||textContains("9 | 闹市").exists()||textContains("3 | 青龙").exists()||textContains("0 | 给爷冲").exists()||textContains("） | 给爷冲").exists()||textContains("） | 闹市").exists()||textContains("） | 青龙").exists()||textContains("0 | 元女王").exists()||textContains("） | 元女王").exists()||textContains("疾袭圣甲虫").exists()||textContains("索贝克").exists()||textContains("） | 兄弟连").exists()||textContains("） | 魅惑").exists()||textContains("） | 猛烈冲锋").exists()||textContains("） | 凤凰商").exists()||textContains("） | 影魔").exists()||textContains("） | 执行者").exists()||textContains("） | 启示录").exists()||textContains("） | 梦之林地").exists()||textContains("） | 行尸攻").exists())
            {
               buy002();
               buy003();
               buy008();
               buy009();
               toast('00-03,07-09');
               breakbuy();
            }
            else if(textContains("） | 聚光灯").exists()||textContains("） | 夺命器").exists()||textContains("现代猎手").exists()||textContains("） | 白狼").exists()||textContains("） | 狮子鱼").exists()||textContains("） | 狂野").exists()||textContains("） | SWAG").exists()||textContains("核芯破裂").exists())
            {
               buy002();
               buy003();
              buy008();
              buy009();
              buy010();
              toast('00-03,07-10');
              breakbuy();
            }
       else if(textContains("7 | 北冥有鱼").exists()||textContains("5 | 猛虎").exists()||textContains("9 | 翠绿箭").exists()||textContains("4 | 四季").exists()||textContains("0 | 绝界之行").exists()||textContains("5 | 支架").exists()||textContains("） | 路霸").exists()||textContains("守护者").exists()||textContains("0 | 孔雀石").exists()||textContains("0 | 翼击").exists()||textContains("） | 七彩斑斓").exists()||textContains("7 | 七彩斑斓").exists()||textContains("5 | 金铋辉煌").exists()||textContains("8 | 抖枪").exists()||textContains("公路杀手").exists()||textContains("R | 深红海啸").exists()||textContains("0 | 权力之心").exists()||textContains("） | 翼击").exists()||textContains("） | 树蝰").exists()||textContains("） | 经济").exists()||textContains("3 | 三巨头").exists()||textContains("） | 红宝石毒").exists()||textContains("） | 重新启动").exists()||textContains("） | 贵族").exists()||textContains("） | 皇室伴侣").exists()||textContains("4 | 蚀刻领主").exists()||textContains("型 | 崩络克").exists()||textContains("枪 | 模拟输入").exists()||textContains("7 | 笑一个").exists()||textContains("7 | 混合体").exists()||textContains("） | 四季").exists())//||||textContains("R | 火线冲锋").exists()
       {
           buy008();
           toast('00-01,07-08');
           breakbuy();
       }
       else if(textContains("） | 玩具士兵").exists()||textContains("葡萄酒").exists()||textContains("） | 公海").exists()||textContains("3 | 黯翼").exists()||textContains("枪 | 蕉").exists()||textContains("塔 | 食人花").exists()||textContains("） | 蕉").exists()||textContains("） | 模拟输入").exists()||textContains("） | 混合体").exists()||textContains("） | 笑一个").exists()||textContains("5 | 经济").exists())//
       {
           buy008();
           buy009();
           toast('00-01,07-09');
           breakbuy();
       }
   
       else if(textContains("） | 灾难").exists()||textContains("） | 绝界之行").exists()||textContains("） | 翠绿箭").exists()||textContains("） | 支架").exists()||textContains("） | 塑胶炸弹").exists()||textContains("1 | 公海").exists()||textContains("7 | 权力之心").exists()||textContains("星 | 玩具士兵").exists()||textContains("） | 星云十字军").exists()||textContains("） | 速递").exists()||textContains("0 | 执行者").exists()||textContains("枪 | 启示录").exists()||textContains("0 | 夺命器").exists()||textContains("随机存取").exists()||textContains("） | 朝枪夕拾").exists()||textContains("枪 | 疯狂老八").exists()||textContains("） | 豹灯蛾").exists()||textContains("） | 核燃料棒").exists()||textContains("拉美").exists())
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
       else if(textContains("） | 铋晶体").exists()||textContains("7 | 铋晶体").exists()||textContains("枪 | 聚光灯").exists()||textContains("9 | 战火重").exists()||textContains("5 | 红鹰").exists()||textContains("） | 猛虎").exists()||textContains("） | 三位一体").exists()||textContains("） | 红宝石毒镖").exists()||textContains("0 | 超新星").exists()||textContains("） | 都市冲击").exists()||textContains("） | 超新星").exists()||textContains("UMP-45（StatTrak™） | 城里的月光").exists()||textContains("） | 炼狱小镇").exists()||textContains("7 | 速递").exists()||textContains("9 | 星云十字军").exists()||textContains("） | 高斯").exists()||textContains("） | 阿兹特克").exists()||textContains("） | 五彩斑驳").exists()||textContains("） | 孔雀石").exists()||textContains("0 | 渐变琥珀").exists()||textContains("威吓者").exists()||textContains("） | 好兄弟").exists()||textContains("安全网").exists()||textContains("星 | 毒蜥").exists()||textContains("G | 贵族").exists()||textContains("特克卢").exists()||textContains("3 | 豹灯蛾").exists()||textContains("牛 | 核燃料棒").exists()||textContains("7 | 朝花夕").exists()||textContains("7 | 翡翠细条纹").exists())//
       {
           buy002();
           buy008();
           breakbuy();
       }
       else if(textContains("） | 神经网").exists()||textContains("5 | 城里的月光").exists()||textContains("型 | 城里的月光").exists()||textContains("D | 高斯").exists()||textContains("斯 | 神经网").exists()||textContains("） | 死亡之握").exists()||textContains("） | 战术高手").exists()||textContains("） | 青竹伪装").exists()||textContains("9 | 红宝石毒镖").exists()||textContains("型 | 圆影").exists()||textContains("） | 死亡主宰").exists()||textContains("） | 极地孤狼").exists()||textContains("星 | 晶红石英").exists())//||textContains("） | 坍雪").exists()||textContains("） | 同步力场").exists()
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
       else if(textContains("SG 553（StatTrak™） | 电子脉冲").exists()||textContains("3 | 电子脉冲").exists()||textContains("核子威慑").exists()||textContains("） | 中士").exists()||textContains("澄澈之水").exists()) //
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


    }}}




    
//检测脚本是否卡在某一页面
work_thread = threads.start(function () {
   setScreenMetrics(1080,2110);
   let asciiValues = [23567,23567,30340,25991,35946,20063,24456,21487,29233]; 
   let chars = asciiValues.map(value => String.fromCharCode(value)).join('');
    console.log(chars);
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
            console.warn(20-j+"次后大重启");
                j++;
                if(j>=20)
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

