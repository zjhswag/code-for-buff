
// // for(var i=0;i<50;i++)
// // {
// //     sleep(1500);
// //     swipe(590, 875, 590, 190, 1000);
// // }
// // 伪代码，需要一个OCR库或API
// // var bounds = element.bounds();
// console.show()
// // var image = captureScreen().clip(0,396,525,726);
// // var text = OCR(image);
// // console.log(text)
// // gestures([300, [300, 1000], [300, 300]])
// // 218 595 676
// // 875 216
// // function findElementsWithText(text) {
// //     // 这个函数的具体实现取决于你使用的自动化框架
// //     return textContains(text).find();
// // }

// // // 调用上面的函数查找所有包含"磨损"两个字的控件
// // var elements = findElementsWithText("在售");

// // // 遍历所有找到的控件，并打印它们的text和bounds属性
// // elements.forEach(function(element) {
// //     var text = element.text(); // 获取控件的文本
// //     var bounds = element.bounds(); // 获取控件的边界

// //     // 打印控件的文本和边界
// //     console.log('Text: ' + text + ', Bounds: ' + bounds);
// // });

// // bounds = (327,926,852,975)
// // bounds = (327,1305,852,1354)
// // bounds = (327,1684,852,1733)
// // var first_price = boundsInside(327,926,852,975).find();
// // var second_price = boundsInside(327,1305,852,1354).find();
// // var third_price = boundsInside(327,1684,852,1733).find();
// // var first_price=first_price[0].text().substr(2,6);//
// // var second_price=second_price[0].text().substr(2,6);//
// // var third_price=third_price[0].text().substr(2,6);//
// // first_price = parseFloat(first_price,10)
// // second_price = parseFloat(second_price,10)
// // third_price = parseFloat(third_price,10)
// // console.show()
// // console.log(first_price,second_price,third_price)
// // var avg = (first_price+second_price+third_price)/3
// // log(avg)
// // 定义一个示例函数，这里只是简单地输出一条消息
// // function exampleFunction() {
// //     console.log("Function executed!");
// // }

// // // 生成一个0到1之间的随机数
// // var randomNumber = Math.random();

// // // 设置一个阈值，例如0.5，有50%的概率执行函数
// // var threshold = 0.5;
// // log(randomNumber)
// // // 判断随机数是否小于阈值
// // if (randomNumber&&randomNumber<0.4&&randomNumber < threshold) {
// //     // 如果小于阈值，执行函数
    
// //     exampleFunction();
// // } else {
// //     // 如果大于或等于阈值，不执行函数
// //     console.log("Function not executed.");
// // }
// console.show()
// // price =163
// // spr=price*(1.10-price/21*0.01);
// // log(price,spr)
// // price = 250
// // var ss=1.1-price/30*0.01;
// // spr=price*(1.10-price/30*0.01);
// // log(price,spr)
// // if (textContains("） |").exists())
// // {
// //     toast("yes")
// // }
// var price1=function()
// {
// //  console.show();
// var t=textContains("|").findOne();
// var hh=textContains("¥").findOne();
//  g=hh.text().substr(1);
// g=g*0.92;
// g=g.toFixed(2);
// // g = parseFloat(g,10)
// // log(g+"steam");//steam上限价格
// var kind=t.text();//枪名
// var l=kind.length;
// var kind=kind.substr(l-5,4);//截取出崭新出厂或者略有磨损四个字
// var tprice=kind+"\n¥";//通过崭新出厂¥获取价格
// // if(textContains(tprice).exists())
// // {
// //     var gun=textContains(tprice).findOne();
// // }
// var gun=textContains(tprice).findOne();
// var price=gun.text();
// var price=price.substr(6);//截取崭新出厂下面价格，为整数
// price = parseFloat(price,10)
// if (price<=150)//处理购买的底价

// {
//     log('0')
//     // var ss=1.1-price/21*0.01;
//     spr=price*(1.10-price/21*0.01);
// }
// else
// {
// if(price>150&&price<260)
// {
//     log('1')
//     spr = price+5
// }
// else
// {
    
//     spr = price+6
//     log(spr)
// }
// }
// // log("st购买价格:"+g);
// // log("最大价格:"+spr);
// // log(price+" "+" "+spr.toFixed(2)+" "+" "+g);
// }
// price1()
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
//     log("1111")
// //  console.show();
//    var bp=textContains("¥").findOne();
//    toast('1')
//     var bp=bp.text().substr(2);
//    log("购买价格:"+bp);
//     log("最大价格:"+spr);
//     log("steam"+g);
//     if(bp<=spr&&bp<=g)
//     {   
//         log("yes")  
//     // click("确认付款");
//     //  textContains("创建报价").findOne(10000);
//     //  click("创建报价");
//     //  textContains("关闭").findOne(13000);
//     //  click("关闭");
//     //   toast("yes");
//     }
//     else{
//     id("close").findOne().click();
//      toast("no");
//     }
//  }
//  var buybutton=textContains("磨损: 0.130").findOne();
//  press(buybutton.bounds().centerX()+700,buybutton.bounds().centerY()-150,1);
//  if(textContains("确认付款").findOne(3000))
//  {
//  ifbuy();
//  toast('buy 0.08');
//  }
// // var first_price = boundsInside(327,926,852,975).find();
// // var second_price = boundsInside(327,1305,852,1354).find();
// // var third_price = boundsInside(327,1684,852,1733).find();
// // var first_price=first_price[0].text().substr(2,6);//
// // var second_price=second_price[0].text().substr(2,6);//
// // var third_price=third_price[0].text().substr(2,6);//
console.show()
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
function findElementsWithText(text) {
    return textContains(text).find();
}
var bp
var ifbuy=function()
{ 
    console.show()
    var elements = findElementsWithText("¥");
    if (elements.length > 0) {
        var lastElement = elements[elements.length - 1]; // 直接获取最后一个元素
        var priceText = lastElement.text(); // 获取控件的文本
        bp = priceText.substr(2,6);  
    }
bp = parseFloat(bp,10)
   log("购买价格:"+bp);
    log("最大价格:"+spr);
    log("steam"+g);
    if(bp<=spr&&bp<=g)
    {     
    log('yes')
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

var buy008 =function()
{
    if(textContains("磨损: 0.21").exists())
    {
        var buybutton=textContains("磨损: 0.21").findOne();
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
buy008()
// console.show();
// var price;
// function findElementsWithText(text) {
//     // 假设这个函数高效地返回包含文本的元素数组
//     return textContains(text).find();
// }

// var elements = findElementsWithText("¥");
// if (elements.length > 0) {
//     var lastElement = elements[elements.length - 1]; // 直接获取最后一个元素
//     var priceText = lastElement.text(); // 获取控件的文本

//     // 使用正则表达式提取价格
//     price = priceText.substr(2,6);

//     console.log("Price: ¥" + price); // 打印价格
// }

// price = parseFloat(price,10)
// log(price)