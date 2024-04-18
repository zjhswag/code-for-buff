// console.show()
// var select = function(){
// var flag;
// var t=textContains("|").findOne();
// var kindgun=t.text();//枪名
// var len=kindgun.length;
// var kind=kindgun.substr(len-5,4);
// if(kind=='略有磨损')
// {
//     flag = 1;
//     // log(kind)
// }
// else{
//     flag = 2;
//     // log(kind)
// }
// if(flag==1)//略有磨损
// {
//     toast('yes'+kind);
// }
// else
// {
//     toast('no'+kind);
// }
//     return flag
// }


// console.show();
// var notebuy = function(){
// var t=textContains("|").findOne();
// var kindgun=t.text();//枪名
//   var text = "floatnum\tbuy_price\tkindgun";
//      files.append("/storage/emulated/0/Pictures/BUFFbuy.xlsx", text);
//     var text=textContains("磨损:").findOne();
//     var price=textContains("¥").findOne();
//     var m=text.text();
//     var p=price.text();
//    var mo=m.substr(4,17);
//    var pr=p.substr(2)
//     // log(mo);
//     // log(pr);
//      var n="\n";
//      var t="\t";
//      files.append("/storage/emulated/0/Pictures/BUFFbuy.xlsx", n);
//      files.append("/storage/emulated/0/Pictures/BUFFbuy.xlsx", mo);
//      files.append("/storage/emulated/0/Pictures/BUFFbuy.xlsx", t);
//      files.append("/storage/emulated/0/Pictures/BUFFbuy.xlsx", pr);
//      files.append("/storage/emulated/0/Pictures/BUFFbuy.xlsx", t);
    //  files.append("/storage/emulated/0/Pictures/BUFFbuy.xlsx",kindgun);
// log("!写入完成!");
// }
// var boolmosun =  select();
// log(boolmosun)
// var spr
// console.show();
// var t=textContains("|").findOne();
// var hh=textContains("¥").findOne();
//  g=hh.text().substr(1);
// g=g*0.9;
// g=g.toFixed(2);
// log(g+"steam");//steam上限价格
// var kind=t.text();//枪名
// var l=kind.length;
// var kind=kind.substr(l-5,4);//截取出酒精
// var tprice=kind+"\n¥";//通过酒精¥获取价格
// // if(textContains(tprice).exists())
// // {
// //     var gun=textContains(tprice).findOne();
// // }
// var gun=textContains(tprice).findOne();
// var price=gun.text();
// var price=price.substr(6);//截取酒精下面价格，为整数
// spr = parseInt(price, 10) + 50;
// var ss1= 1
// ss1 +=50
// if(price==2615){
//   toast("no");
// }
// else{
//   toast("yes");
// }
// log(price,ss1)
// log("max"+spr)



console.show()
var t=textContains("|").findOne();
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
price = parseInt(price, 10);
// log("max"+spr)
//log(price+" "+ss.toFixed(2)+" "+spr.toFixed(2));
var p=price;
// var pr=p.substr(2)
log(p)