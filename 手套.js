// console.show()
console.setPosition(device.width / 2, device.height / 1.5);
var j=0;
var price;
var spr;
var ss;
var g;
var boolmosun;
var start2=function()
{
    click("最新上架");
    click(948,204,1080,325);
    while(!click("品质"));
    // while(!click("隐秘"));
    click(444,752,828,844);
    // while(!click("非凡"));
    while(!click("类别"));
    click(444,508,828,600)
    // click(36,544,420,636);
    while(!click("外观"));
    while(!click("略有磨损"));
    while(!click("久经沙场"));
    while(!click("价格区间"));
    setText(0,"500");
    setText(1,"5000");
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
// console.show();
var t=textContains("|").findOne();
var hh=textContains("¥").findOne();
 g=hh.text().substr(1);
g=g*0.9;
g=g.toFixed(2);
// log(g+"steam");//steam上限价格
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
spr = parseInt(price, 10) + 50;
// log("max"+spr)
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

//  console.show();
   var bp=textContains("¥").findOne();
    var bp=bp.text().substr(2);
   log("购买价格:"+bp);
    log("最大价格:"+spr);
    log("steam"+g);
    if(bp<=spr&&bp<=g)
    {     
    // click("确认付款");
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
 var buy007=function()
 {
     if(textContains("磨损: 0.07").exists())
     {
        notebuy();
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
 var buy008 =function()
 {
     if(textContains("磨损: 0.08").exists())
     {
        notebuy();
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
    notebuy();
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
        notebuy();
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

var buy020=function()
{
    if(textContains("磨损: 0.20").exists())
    {
        notebuy();
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
    notebuy();
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
        notebuy();
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
        notebuy();
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
        notebuy();
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
        notebuy();
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
        notebuy();
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
        notebuy();
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
        notebuy();
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
var buy031=function()
{
    if(textContains("磨损: 0.3").exists())
    {
        notebuy();
        var buybutton=textContains("磨损: 0.3").findOne();
        press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
    if(textContains("确认付款").findOne(3000))
        {
            ifbuy();
            toast('buy 0.33');
        }
 
    else
        {
            swipe(900,1900,900,1200,1000);
            var buybutton=textContains("磨损: 0.3").findOne();
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
var select = function(){
    var flag;
    var t=textContains("|").findOne();
    var kindgun=t.text();//枪名
    var len=kindgun.length;
    var kind=kindgun.substr(len-5,4);
    if(kind=='略有磨损')
    {
        flag = 1;
        // log(kind)
    }
    else{
        flag = 2;
        // log(kind)
    }
    return flag
    }
var notebuy = function(){
    var t=textContains("|").findOne();
    var kindgun=t.text();//枪名
    var text = "floatnum\tbuy_price\tkindgun";
        files.append("/storage/emulated/0/Pictures/BUFFbuy.xlsx", text);
        var text=textContains("磨损:").findOne();
        var price=textContains("¥").findOne();
        var m=text.text();
        var p=price.text();
    var mo=m.substr(4,17);
    var pr=p.substr(2)
        // log(mo);
        // log(pr);
        var n="\n";
        var t="\t";
        files.append("/storage/emulated/0/Pictures/BUFFbuy.xlsx", n);
        files.append("/storage/emulated/0/Pictures/BUFFbuy.xlsx", mo);
        files.append("/storage/emulated/0/Pictures/BUFFbuy.xlsx", t);
        files.append("/storage/emulated/0/Pictures/BUFFbuy.xlsx", pr);
        files.append("/storage/emulated/0/Pictures/BUFFbuy.xlsx", t);
        files.append("/storage/emulated/0/Pictures/BUFFbuy.xlsx",kindgun);
    // log("!写入完成!");
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
for(var i=0;i<20000;i++){
    sleep(2000);
    gestures([350, [300, 400], [300, 1400]]);
    for(var j=0;j<2;j++)
    {
        //模拟器
        if(j==0) {press(100,700,1);}
    else {
                sleep(200); 
                click(608,445,851,734);
        }
    textContains("磨损:").waitFor();
    price1();
    boolmosun = select();
// sleep(3000)


   if(boolmosun==1)       //略有磨损            
    {     

 if(textContains("磨损: 0.07").exists())//买0.15
        {
            notebuy();
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
            breakbuy();
        } 
        else if(textContains("九头蛇手套（★） | 响尾蛇").exists()||textContains("九头蛇手套（★） | 红树林").exists()||textContains("裹手（★） | 蟒蛇").exists()||textContains("九头蛇手套（★） | 表面淬火").exists())
        {
        toast("no")
        breakbuy(); 
        }
        else if(textContains("磨损: 0.08").exists())//买0.15
        {
            notebuy();
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
            breakbuy();
        } 
        else if(textContains("专业手套（★） | 元勋").exists()||textContains("摩托手套（★） | 清凉薄荷").exists()||textContains("驾驶手套（★） | 深红织物").exists()||textContains("运动手套（★） | 夜行衣").exists()||textContains("摩托手套（★） | 嘭！").exists()||textContains("运动手套（★） | 猩红头巾").exists()||textContains("裹手（★） | 屠夫").exists()||textContains("摩托手套（★） | 血压").exists()||textContains("摩托手套（★） | 小心烟雾弹").exists()||textContains("驾驶手套（★） | 月色织物").exists()||textContains("摩托手套（★） | *嘣！*").exists()||textContains("裹手（★） | 皮革").exists()||textContains("摩托手套（★） | 日蚀").exists()||textContains("摩托手套（★） | 终点线").exists()||textContains("驾驶手套（★） | 超越").exists()||textContains("裹手（★） | 云杉 DDPAT").exists()||textContains("血猎手套（★） | 蛇咬").exists()||textContains("驾驶手套（★） | 美洲豹女王").exists()||textContains("裹手（★） | 长颈鹿").exists()||textContains("摩托手套（★） | 交运").exists()||textContains("狂牙手套（★） | 黄色斑纹").exists()||textContains("裹手（★） | 森林色调").exists()||textContains("专业手套（★） | 狩鹿").exists()||textContains("血猎手套（★） | 游击队").exists()||textContains("裹手（★） | 防水布胶带").exists()||textContains("狂牙手套（★） | 针尖").exists()||textContains("驾驶手套（★） | 墨绿色调").exists())
        {
        buy009();
        toast("no")
        breakbuy(); 
        }
        else if(textContains("驾驶手套（★） | 蓝紫格子").exists()||textContains("专业手套（★） | 深红之网").exists()||textContains("专业手套（★） | 一线特工").exists()||textContains("驾驶手套（★） | 西装革履").exists()||textContains("专业手套（★） | 大腕").exists()||textContains("驾驶手套（★） | 菱背蛇纹").exists()||textContains("专业手套（★） | 森林 DDPAT").exists()||textContains("裹手（★） | 恶土").exists())
        {
        buy009();
        buy010();
        toast("no")
        breakbuy(); 
        }
 
        else{
            sleep(100);
            if(id("drawer_icon").findOne(10000))
            {
            id("drawer_icon").findOne().click();
            }}//

    }
         

else{   
    if(textContains("狂牙手套（★） | 翡翠").exists()||textContains("九头蛇手套（★） | 表面淬火").exists()||textContains("驾驶手套（★） | 绯红列赞").exists()||textContains("裹手（★） | 长颈鹿").exists()||textContains("狂牙手套（★） | 黄色斑纹").exists()||textContains("裹手（★） | 森林色调").exists()||textContains("驾驶手套（★） | 美洲豹女王").exists()||textContains("专业手套（★） | 狩鹿").exists()||textContains("摩托手套（★） | 交运").exists()||textContains("狂牙手套（★） | 精神错乱").exists()||textContains("裹手（★） | 蟒蛇").exists()||textContains("摩托手套（★） | 第三特种兵连").exists()||textContains("血猎手套（★） | 游击队").exists()||textContains("血猎手套（★） | 染铜").exists()||textContains("裹手（★） | 防水布胶带").exists()||textContains("血猎手套（★） | 蛇咬").exists()||textContains("九头蛇手套（★） | 翡翠色调").exists()||textContains("狂牙手套（★） | 针尖").exists()||textContains("裹手（★） | 沙漠头巾").exists()||textContains("九头蛇手套（★） | 响尾蛇").exists()||textContains("九头蛇手套（★） | 红树林").exists()||textContains("驾驶手套（★） | 墨绿色调").exists())
        {
        toast("no");
        breakbuy();  
        }
        else if(textContains("磨损: 0.15").exists())//买0.15
        {
            notebuy();
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
            notebuy();
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
            notebuy();
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
        else if(textContains('textContains("表面淬火").exists()'))
        {

        breakbuy();
        }

        else if(textContains("运动手套（★） | 双栖").exists()||textContains("驾驶手套（★） | 雪豹").exists()||textContains("裹手（★） | 钴蓝骷髅").exists()||textContains("专业手套（★） | 元勋").exists()||textContains("驾驶手套（★） | 蓝紫格子").exists()||textContains("运动手套（★） | 猩红头巾").exists()||textContains("专业手套（★） | 渐变大理石").exists()||textContains("驾驶手套（★） | 深红织物 (久经沙场)").exists()||textContains("专业手套（★） | 一线特工").exists()||textContains("专业手套（★） | 深红之网").exists()||textContains("驾驶手套（★） | 西装革履").exists()||textContains("专业手套（★） | 陆军少尉长官").exists()||textContains("摩托手套（★） | 血压").exists()||textContains("摩托手套（★） | *嘣！*").exists()||textContains("驾驶手套（★） | 月色织物").exists()||textContains("摩托手套（★） | 终点线").exists()||textContains("摩托手套（★） | 日蚀").exists()||textContains("摩托手套（★） | 清凉薄荷").exists()||textContains("摩托手套（★） | 玳瑁").exists()||textContains("摩托手套（★） | 小心烟雾弹").exists())
        {
        buy018();
        buy019();
        buy020();
        toast("special 18-21");
        breakbuy();
        }

        else if(textContains("运动手套（★） | 欧米伽").exists()||textContains("专业手套（★） | 老虎精英").exists()||textContains("专业手套（★） | 渐变之色").exists()||textContains("驾驶手套（★） | 王蛇").exists()||textContains("摩托手套（★） | 嘭！").exists()||textContains("运动手套（★） | 干旱").exists())
        {
        buy018();
        buy019();
        buy020();
        buy021();
        buy022();
        buy023();
        breakbuy();
        }

        // text = 运动手套（★） | 弹弓 (久经沙场)
        else if(textContains("迈阿密风云").exists()||textContains("专业手套（★） | 翠绿之网").exists()||textContains("运动手套（★） | 弹弓").exists())
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
            toast('24-27')
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

