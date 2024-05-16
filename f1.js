// console.show()
// log('123')
// log('yes')
// function 关闭应用通过导航键() {
//     log("即将通过导航键关闭应用");
//     let packageName = currentPackage();
//     log("当前应用包名：" + packageName);
//     // 按下最近任务键
//     recents();
//     sleep(2000);

//     // 获取当前应用的包名
//     // let packageName = currentPackage();

console.show()
// //     // 查找目标应用的任务卡片并滑动删除
//     let task = textContains("网易BUFF").findOne(5000);
//     if (task) {
//         // log('yes')
//         let bounds = task.bounds();
//         log(bounds)
//         // // 滑动删除应用，从右向左滑动
//        swipe(bounds.centerX(),bounds.bottom , bounds.centerX(),bounds.top, 500);
//         log("应用已被滑动删除");
//     } 
//      else {
//         log("未找到目标应用的任务卡片");
//     }
    
//     sleep(2000);
// }

// // 调用关闭应用函数
// 关闭应用通过导航键();
// if(j>=15)
//                 {
//                     关闭应用();
//                 }
// function 关闭应用() {
//     j=0;
//     toast("即将关闭应用");
//     let packageName = currentPackage();
//     log(app.getAppName(packageName)+"将被关闭,进入重启");
//     recents();
//     sleep(2000);
    
// // 只针对模拟器
// if(id("dismiss_task").className("android.widget.ImageView").desc("移除网易BUFF。").findOne(2000))
// {
//     id("dismiss_task").className("android.widget.ImageView").desc("移除网易BUFF。").findOne().click()
// }
// else{
//     id("clearbox").findOne.click()
// }
//    console.show();
//    sleep(1000);
//    for(var i=0;i<4;i++)
//    {
//    log(4-i +"后重启脚本");
//    sleep(1000);
//    }
//    console.hide();
// }
// 关闭应用();

// setScreenMetrics(1080,2110);
// launchApp("网易BUFF");
// click("关闭");
// click("创建报价");
// click("同意并继续");
// click("暂不更新");
console.show();

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
    click(480,2100,600,2220)
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
关闭应用()
launchApp("网易BUFF");