function ajax(options) {
    // 存储默认值
    var defaults = {
        type: "get",
        url: "",
        head: {
            Content_Type: "application/x-www-form-urlencoded",
        },
        success: function () { },
        error: function () { }
    }
    // 使用options对象中的属性覆盖defaults对象中的属性
    Object.assign(defaults, options);
    //  创建ajax对象
    var xhr = new XMLHttpRequest();
    // 拼接参数
    var params = "";
    // 循环用户用户传进来的对象参数格式
    for (var key in defaults.data) {
        params += key + "=" + defaults.data[key] + "&";
    }
    params = params.substr(0, params.length - 1);
    // 判断请求的类型
    if (defaults.type == "get") {
        defaults.url += "?" + params;
    }
    // 配置Ajax对象
    xhr.open(defaults.type, defaults.url);
    // 如果请求类型为post 发送请求
    if (defaults.type == "post") {
        // 用户希望向服务器传递的请求参数类型
        var contentType = defaults.head.Content_Type;
        xhr.setRequestHeader("Content-Type", defaults.head.Content_Type);
        if (contentType == "application/json") {
            // 判断用户对传递参数是否为JSON
            xhr.send(JSON.stringify(defaults.data));
        } else {
            xhr.send(params);
        }
    } else {
        xhr.send();
    }
    // 当ajax对象接收完响应数据后触发
    xhr.addEventListener("load", function () {
        // 服务器返回的数据类型
        var content = xhr.getResponseHeader("Content-Type");
        // 服务器返回的数据
        var responseText = xhr.responseText;
        // 如果响应的数据包含 application/json
        if (content.includes("application/json")) {
            responseText = JSON.parse(responseText);
        }
        if (xhr.status == 200) {
            // 查看状态码
            // 请求成功
            defaults.success(responseText);
        } else {
            // 请求失败
            defaults.error(responseText);
        }
    });
}
//  ajax({
//     // 请求方式
//     type: "get",
//     // 请求地址
//     url: "http://musicapi.leanapp.cn/personalized",
//     // 请求参数
//     data: {
//       limit: 1,
//     },
//     /*  head: {
//       Content_Type: "application/json",
//     }, */
//     // 请求成功调用
//     success: function (data) {
//       console.log(data);
//     },
//     // 请求失败
//     error: function (data) {
//       console.log(data);
//     },
//   }); 