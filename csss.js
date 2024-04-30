
// for(var i=0;i<50;i++)
// {
//     sleep(1500);
//     swipe(590, 875, 590, 190, 1000);
// }
// 伪代码，需要一个OCR库或API
// var bounds = element.bounds();
console.show()
// var image = captureScreen().clip(0,396,525,726);
// var text = OCR(image);
// console.log(text)
// gestures([300, [300, 1000], [300, 300]])
// 218 595 676
// 875 216
// function findElementsWithText(text) {
//     // 这个函数的具体实现取决于你使用的自动化框架
//     return textContains(text).find();
// }

// // 调用上面的函数查找所有包含"磨损"两个字的控件
// var elements = findElementsWithText("在售");

// // 遍历所有找到的控件，并打印它们的text和bounds属性
// elements.forEach(function(element) {
//     var text = element.text(); // 获取控件的文本
//     var bounds = element.bounds(); // 获取控件的边界

//     // 打印控件的文本和边界
//     console.log('Text: ' + text + ', Bounds: ' + bounds);
// });

// bounds = (327,926,852,975)
// bounds = (327,1305,852,1354)
// bounds = (327,1684,852,1733)
// var first_price = boundsInside(327,926,852,975).find();
// var second_price = boundsInside(327,1305,852,1354).find();
// var third_price = boundsInside(327,1684,852,1733).find();
// var first_price=first_price[0].text().substr(2,6);//
// var second_price=second_price[0].text().substr(2,6);//
// var third_price=third_price[0].text().substr(2,6);//
// first_price = parseFloat(first_price,10)
// second_price = parseFloat(second_price,10)
// third_price = parseFloat(third_price,10)
// console.show()
// console.log(first_price,second_price,third_price)
// var avg = (first_price+second_price+third_price)/3
// log(avg)
// 定义一个示例函数，这里只是简单地输出一条消息
// function exampleFunction() {
//     console.log("Function executed!");
// }

// // 生成一个0到1之间的随机数
// var randomNumber = Math.random();

// // 设置一个阈值，例如0.5，有50%的概率执行函数
// var threshold = 0.5;
// log(randomNumber)
// // 判断随机数是否小于阈值
// if (randomNumber&&randomNumber<0.4&&randomNumber < threshold) {
//     // 如果小于阈值，执行函数
    
//     exampleFunction();
// } else {
//     // 如果大于或等于阈值，不执行函数
//     console.log("Function not executed.");
// }
console.show()
price =163
spr=price*(1.10-price/21*0.01);
log(price,spr)
price = 250
var ss=1.1-price/30*0.01;
spr=price*(1.10-price/30*0.01);
log(price,spr)