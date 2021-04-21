function animate(obj, target, callBack) {
    //callBack  =function () {} 相当于一个回调函数
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //步长值写到定时器里面
        //   let step = Math.ceil((target - obj.offsetLeft) / 10);
        let step = (target - obj.offsetLeft) / 10;
        if (step >= 0) {
            step = Math.ceil(step);
        } else {
            step = Math.floor(step);
        }
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            //回调函数 等到全部执行完毕再执行
            /*  if (callBack) {
               callBack();
             } */
            callBack && callBack(); //短路运算符
        } else {
            //把每次加1 这个步长公式改为一个慢慢变小的值 步长公式:(目标值 - 现在位置) / 10
            obj.style.left = obj.offsetLeft + step + "px";
        }
    }, 30);
}