function jsonp(options) {
    //   创建script标签
    var script = document.createElement("script");
    //  拼接字符串变量
    var params = "";
    for (var key in options.data) {
        params += "&" + key + "=" + options.data[key];
    }
    //  函数名称不能全是数字
    var fnName = "myjsonp" + Math.random().toString().replace(".", "");
    // 他已经不是一个全局函数了
    // 通过window.属性 将他变成一个全局函数
    window[fnName] = options.success;
    // 设置src属性
    script.src = options.url + "?callback=" + fnName + params;
    // 将script标签追加到页面中
    document.body.appendChild(script);
    // 为srcipt标签添加onload事件
    script.addEventListener("load", function () {
        // 将body中的script变迁删除掉
        document.body.removeChild(script);
    });
}