
var j=0;
var g;

var price;

var spr;
var ss;
function 关闭应用() {
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
   console.warn(4-i +"后重启脚本");
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
 //console.show();
var t=textContains("|").findOne();
var hh=textContains("¥").findOne();
 g=hh.text().substr(1);
g=g*0.95;
g=g.toFixed(2);
//log(g);
var kind=t.text();
var l=kind.length;
var kind=kind.substr(l-5,4);//截取出崭新出厂或者略有磨损四个字
var tprice=kind+"\n¥";
if(textContains(tprice).exists())
{
    var gun=textContains(tprice).findOne();
}
var price=gun.text();
var price=price.substr(6);
var ss=1.1-price/22*0.01;
spr=price*(1.10-price/20*0.01);
 //log(price+" "+ss.toFixed(2)+" "+spr.toFixed(2));
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
var ifbuy=function()
{ 

   var bp=textContains("¥").findOne();
    var bp=bp.text().substr(2);
//    log("购买价格:"+bp);
//     log("最大价格:"+spr);
//     log("steam"+g);
    if(bp<=spr&&bp<=g)
    {     
    click("确认付款");
     textContains("创建报价").findOne(10000);
     click("创建报价");
     textContains("关闭").findOne(13000);
     click("关闭");
      toast("yes");
    }
    else{
    id("close").findOne().click();
     toast("no");
    }
 }
// var price1=function()
// {

//  // console.show();
// var t=textContains("|").findOne();
// var kind=t.text();
// var l=kind.length;
// var kind=kind.substr(l-5,4);//截取出崭新出厂或者略有磨损四个字
// var tprice=kind+"\n¥";
// if(textContains(tprice).exists())
// {
//     var gun=textContains(tprice).findOne();
// }
// var price=gun.text();
// var price=price.substr(6);
// var ss=1.1-price/10*0.01;
// spr=price*(1.10-price/10*0.01);
// //log(price+" "+ss.toFixed(2)+" "+spr.toFixed(2));
// }
// var breakbuy=function()
// {
//       if(textContains("改价").findOne(200))
//         {
//             if(id("drawer_icon").findOne(10000))
//         {
//         id("drawer_icon").findOne().click();
//         }
//         }
//         if(id("drawer_icon").findOne(10000))
//         {
//         id("drawer_icon").findOne().click();
//         }
// }
// var ifbuy=function()
// { 
//  // console.show();
//    var bp=textContains("¥").findOne();
//     var bp=bp.text().substr(2);
//   // log("购买价格:"+bp);
//    // log("最大价格:"+spr);
//     if(bp<=spr)
//     {     
//     click("确认付款");
//      textContains("创建报价").findOne(10000);
//      click("创建报价");
//      textContains("关闭").findOne(13000);
//      click("关闭");
//       toast("yes");
//     }
//     else{
//     id("close").findOne().click();
//      toast("no");
//     }
//  }
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
var buy000=function()
{
    if(textContains("磨损: 0.00").exists())
    {
        var buybutton=textContains("磨损: 0.00").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(4000))
        {
            ifbuy();
            toast('buy 0.00');
        }
        else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.00").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(4000)){
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
    if(textContains("确认付款").findOne(4000))
        {
            ifbuy();
            toast('buy 0.01');
        }
        else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.01").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(4000)){
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
    if(textContains("确认付款").findOne(4000))
        {
            ifbuy();
            toast('buy 0.02');
        }
        else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.02").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(4000)){
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
    if(textContains("确认付款").findOne(4000))
        {
            ifbuy();
            toast('buy 0.03');
        }
        else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.03").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
            if(textContains("确认付款").findOne(4000)){
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
   // setScreenMetrics(1080,2110);
    launchApp("网易BUFF");
        click("关闭");
    click("BUFF");
    click("创建报价");
    click("暂不更新");
    click("同意并继续");
    if(id("button2").findOne(1000)){
        id("button2").findOne().click()
    }
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
    //模拟器
//   click("最新上架");
//   click(948,204,1080,325);

//     while(!click("品质"));
//     while(!click("军规"));
//     while(!click("类别"));
//     while(!click("普通"));
//     click(36,508,420,600);
//     while(!click("外观"));
//     while(!click("崭新出厂"));
//     while(!click("价格区间"));
//     setText(0,"0");
//     setText(1,"90");
//     while(!click("完成"));
//     toast('处理完成  开始扫货');
//     sleep("1500");

    click("最新上架");
      click(948,216,1080,337);
        while(!click("品质"));
        while(!click("军规"));
        while(!click("类别"));
        while(!click("普通"));
        click(36,520,420,612);
        while(!click("外观"));
        while(!click("崭新出厂"));
        while(!click("价格区间"));
        setText(0,"0");
        setText(1,"90");
        while(!click("完成"));
        toast('处理完成  开始扫货');
        sleep("1500");

    // click("最新上架");
    // click(948,240,1080,361);
    // while(!click("品质"));
    // while(!click("军规"));
    // while(!click("类别"));
    // while(!click("普通"));
    // click(36,544,420,636);
    // while(!click("外观"));
    // while(!click("崭新出厂"));
    // while(!click("价格区间"));
    // setText(0,"0");
    // setText(1,"70");
    // while(!click("完成"));
    // toast('处理完成  开始扫货');
    // sleep("1000");

 for(var i=0;i<10000;i++){
        sleep(300);
    gestures([300, [300, 400], [300, 1400]]);
    for(var j=0;j<2;j++)
    {
        sleep(100);
        if(j==0){press(100,700,1);}
        else if(j==1)   {
            sleep(300); 
            click(608,445,851,734);
    }
        textContains("磨损:").waitFor();
         price1();
 if(textContains("磨损: 0.000").exists())//买0.000
        {
            var buybutton=textContains("磨损: 0.000").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(4000))
            {
                ifbuy();
            }
            else
            {
                swipe(900,1900,900,1200,1000);
                var buybutton=textContains("磨损: 0.000").findOne();
                press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                if(textContains("确认付款").findOne(4000)){
                ifbuy();
            }
            }
            breakbuy();
        } 
//
    else  if(textContains("） | 渣渣").exists()||textContains("） | 灾难").exists()||textContains("） | 灯箱").exists()||textContains("9 | 渣渣").exists()||textContains("8 | 灾难").exists()||textContains("0 | 灯箱").exists()||textContains("撕起来").exists()||textContains("火箭冰棒").exists()||textContains("元素轮廓").exists()||textContains("斯康里").exists()||textContains("型 | 本生灯").exists()||textContains("） | 贾姆比").exists()||textContains("0 | 阿罗哈").exists()||textContains("斯 | 死亡之舞").exists()||textContains("星 | 风卷残云").exists()||textContains("透明弹").exists()||textContains("小小噩梦").exists()||textContains("冬季").exists()||textContains("喵喵").exists()||textContains("骨化之色").exists()||textContains("牛 | 收割机").exists()||textContains("电子脉冲").exists()||textContains("赛博").exists()||textContains("液化").exists()||textContains("世仇").exists()||textContains("零点行动").exists()||textContains("枪 | 废物").exists()||textContains("） | 破坏者").exists()||textContains("） | 黑砂").exists()||textContains("星 | 游侠").exists()||textContains("碎蛋白石").exists()||textContains("星 | 幽灵迷").exists()||textContains("捕猎者").exists()||textContains("7 | 逮捕者").exists()||textContains("R | 黑砂").exists()||textContains("神秘碑文").exists()||textContains("型 | 幻影冥魂").exists()||textContains("交换机").exists()||textContains("银质").exists()||textContains("蓝巢").exists()||textContains("） | 涂鸦").exists()||textContains("坐牢").exists()||textContains("草皮").exists()||textContains("7 | 涂鸦潦草").exists()||textContains("艾萨克").exists()||textContains("手刹").exists()||textContains("无尽深海").exists()||textContains("翡翠色调").exists()||textContains("精英之作").exists()||textContains("渐变之色").exists()||textContains("外表生锈").exists()||textContains("G | 鹰翼").exists()||textContains("5 | 暴乱").exists()||textContains("捕猎者").exists()||textContains("） | 碎片").exists()||textContains("枪 | 夜百合").exists()||textContains("） | 幻影冥魂").exists()||textContains("R | 破坏者").exists()||textContains("一目了然").exists()||textContains("牵引力").exists()||textContains("） | 岩浆").exists()||textContains("蛇-9").exists()||textContains("钢铁禁锢").exists()||textContains("剪纸").exists()||textContains("卡特尔").exists()||textContains("龙之双子").exists()||textContains("三角战术").exists()||textContains("战鹰").exists()||textContains("弹跳线条").exists()||textContains("退役").exists()||textContains("冷血无情").exists()||textContains("铁之作").exists()||textContains("主机").exists()||textContains("乳白象牙").exists()||textContains("格洛克 18 型（StatTrak™） | 锈蚀烈焰").exists()||textContains("型 | 锈蚀烈焰").exists()||textContains("蓝色层压板").exists()||textContains("毒镖").exists()||textContains("报应").exists()||textContains("烈焰天使").exists()||textContains("通灵者").exists()||textContains("迷踪秘境").exists()||textContains("透光区").exists()||textContains("左右开花").exists()||textContains("刹车灯").exists()||textContains("蓝钛").exists()||textContains("塔 | 深蓝电镀处理").exists()||textContains("0 | 深蓝组").exists()||textContains("7 | 深蓝电镀处理").exists()||textContains("渐变强酸").exists()||textContains("铅管").exists()||textContains("异星世界").exists()||textContains("致命毒药").exists()||textContains("5 | 螺形").exists()||textContains("白鲑鱼").exists()||textContains("绿色陆战队").exists()||textContains("1 | 黑砂").exists()||textContains("D（StatTrak™） | 沙漠精英").exists()||textContains("） | 鼻青眼").exists()||textContains("） | 瘟疫").exists()||textContains("） | 霸意大").exists()||textContains("0 | 都市危机").exists()||textContains("9 | 黑砂").exists()||textContains("4 | 变频器").exists()||textContains("G | 汤姆猫").exists()||textContains("5 | 短趾雕").exists())
    //||textContains("星 | 黑暗").exists()||textContains("塔 | 藏身处").exists()
        {
            toast('no');
            breakbuy();
        }
      else  if(textContains("磨损: 0.00").exists())//买0.00
        {
            var buybutton=textContains("磨损: 0.00").findOne();
            press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
        if(textContains("确认付款").findOne(4000))
            {
                ifbuy();
            }
            else
            {
                swipe(900,1900,900,1200,1000);
                var buybutton=textContains("磨损: 0.00").findOne();
                press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
                if(textContains("确认付款").findOne(4000)){
                ifbuy();
            }
            } 
            breakbuy();
        } 
    
        else  if(textContains("核子反应").exists()||textContains("困兽之斗").exists()||textContains("凤凰徽记").exists()||textContains("午夜凶匪").exists()||textContains("核子剧毒").exists()||textContains("碾骨机").exists()||textContains("雪茄盒").exists()||textContains("沙漠之花").exists()||textContains("八音盒").exists()||textContains("紫色 DDPAT").exists()||textContains("安全网").exists()||textContains("迂回路线").exists()||textContains("碧藤青翠").exists()||textContains("AR | 渐变琥珀").exists()||textContains("潜藏者").exists()||textContains("星 | 流沙").exists()||textContains("蔚蓝多").exists()||textContains("上古图腾").exists()||textContains("G | 渐变琥珀").exists()||textContains("7 | 银白石英").exists()||textContains("斯 | 摧枯拉朽").exists()||textContains("尼罗河").exists()||textContains("9 | 落日").exists()||textContains("多变迷彩").exists()||textContains("钢铁三角").exists()||textContains("神袛").exists())//||textContains("全球攻势").exists()||textContains("气泡流行").exists()||textContains("冥界之河").exists()沙鹰
        {
        toast("sp");
        buy001();
        breakbuy();
        }
        else if(textContains("绿色层压板").exists()||textContains("7 | 记忆碎片").exists()||textContains("9 | 安全网").exists()||textContains("5 | 逮捕者").exists()||textContains("鎏铜").exists()||textContains("腐朽木乃伊").exists())
        {
            buy001();
            buy002();
            breakbuy();
        }
        // else if()
        // {
        //     buy001();
        //     buy002();
        //     buy003();
        //     breakbuy();
        // }
        else{
            sleep(100);
            if(id("drawer_icon").findOne(10000))
            {
            id("drawer_icon").findOne().click();
            }}  



 }


 }}

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
                console.warn("Main线程在3秒后重启！");
                j++;
                sleep(3000);
                console.hide();
               mainstrat();
            });
        }
    }
});


// buffstop_thread=threads.start(function(){
//     while (true){
//         id("loadingTextView").className("android.widget.TextView").text("无法访问相应服务，请稍后再试").findOne()
//         {
//             click(480,1472,600,1592);  
//         }
// }
    
//     }
// );