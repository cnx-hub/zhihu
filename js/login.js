$(function () {
    // 登录方式切换模块
    // 用户是使用密码登录还是免密码登录
    var tab_flag = 0;
    $(".SignFlow_tab").on("click", function () { //密码登录
        $(this).css({ borderBottom: "2px solid #0066ff" }).siblings().css({ borderBottom: "0 solid #fff" });
        $(".SignFlow_account").hide();
        $(".SignFlowInput_Mask").show();
        $(".SignFlow_smsInputContainer").hide();
        $(".SignFlow_password").show();
        $(".Login_options").hide();
        $(".Login_option").show();
        $(".SignFlow_account input").css("color", "#8590a6");
        $(".SignFlow_smsInputContainer input").css("color", "#8590a6");
        tab_flag = 1;
    })
    $(".SignFlow_tabs_activ").on("click", function () {//免密码登录
        $(this).css({ borderBottom: "2px solid #0066ff" }).siblings().css({ borderBottom: "0 solid #fff" });
        $(".SignFlow_account").show();
        $(".SignFlowInput_Mask").hide();
        $(".SignFlow_smsInputContainer").show();
        $(".SignFlow_password").hide();
        $(".Login_options").show();
        $(".Login_option").hide();
        $(".SignFlowInput_Mask input").css("color", "#8590a6");
        $(".SignFlow_password input").css("color", "#8590a6");
        tab_flag = 0;
    })
    // 免密码登录
    // 账号中的文本框
    $(".SignFlow_account input").on({
        // 每次得到焦点就判断 文本框内容
        focus: function () {
            if ($(this).val() == "请输入手机号") {
                $(this).val("");
            }
            $(this).css("color", "#121212").siblings(".SignFlowInput_errorMask").hide();
        },
        //每次失去焦点就判断 文本框内容
        blur: function () {
            if ($(this).val() == "") {
                $(this).val("请输入手机号").css("color", "#f1403c");
            }
        }
    });
    // 短信模块
    $(".SignFlow_smsInputContainer input").on({
        focus: function () {
            if ($(this).val() == "输入6位短信验证码") {
                $(this).val("");
            }
            $(this).css("color", "#121212").siblings(".SignFlow_smsInputErrorMessage").hide();
        },
        blur: function () {
            if ($(this).val() == "") {
                $(this).val("输入6位短信验证码").css("color", "#f1403c");
            }
        }
    })
    // 获取验证码
    $(".SignFlow_smsInputContainer button").on({
        mouseover: function () {
            $(this).css("color", "#9490ae");
        },
        mouseout: function () {
            $(this).css("color", "#1777c2");
        }
    })
    // 定义发送时间间隔(s)
    var SEND_INTERVAL = 60;
    var timeLeft = SEND_INTERVAL;
    $(".SignFlow_smsInputContainer button").on("click", function () {
        // // 判断手机号码是否符合正则表达式
        var regExpression = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/;
        if (!regExpression.test($(".SignFlow_account input").val())) {
            // 提示手机号码出错
            $(".SignFlowInput_errorMask").show();
            // 阻止下面程序运行
            return;
        }
        // 禁止按键
        $(this).prop("disabled", true);
        timeCount();
        // 发送数据给服务器
        ajax({
            type: "get",
            url: "http://159.75.14.159:8080/ZhiHu/sms/signUp",
            data: {
                Telephone: $(".SignFlow_account input").val(),
            },
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                console.log(data);
            }
        });
        // 重新计时
        function timeCount() {
            window.setTimeout(function () {
                if (timeLeft > 0) {
                    timeLeft -= 1;
                    $(".SignFlow_smsInputContainer button").text(`${timeLeft}秒后可以重发`).css("color", "#9490ae");
                    timeCount();
                } else {
                    $(".SignFlow_smsInputContainer button").text(`重新获取短信验证码`).prop("disabled", false).css("color", "#1777c2");
                    timeLeft = SEND_INTERVAL;
                }
            }, 1000);
        }
    })

    //密码登录
    // 密码登录的账号框
    $(".SignFlowInput_Mask input").on({
        focus: function () {
            if ($(this).val() == "请输入手机号或邮箱") {
                $(this).val("");
            }
            $(this).css("color", "#121212");
        },
        blur: function () {
            if ($(this).val() == "") {
                $(this).val("请输入手机号或邮箱").css("color", "#f1403c");
            }
        }
    })
    // 密码登录的密码框
    $(".SignFlow_password input").on({
        focus: function () {
            if ($(this).val() == "请输入密码") {
                $(this).val("");
            }
            //密码或账号错误提醒
            $(this).css({ color: "#121212" }).prop("type", "password").siblings(".SignFlow_passwordErrorMessage").hide().siblings("button").show();
        },
        blur: function () {
            if ($(this).prop("placeholder") == "请输入密码" && $(this).val() == "") {
                $(this).val("请输入密码").css("color", "#f1403c").prop("type", "text");
            }
        }
    })

    // 按键 切换 密码框和文本框
    $(".SignFlow_password button").on("click", function () {
        if ($(this).siblings("input").val() != "请输入密码" && $(this).siblings("input").val() != "") {
            let type = $(this).siblings("input").prop("type");
            type = (type == "text") ? "password" : "text";
            $(this).siblings("input").prop("type", type);
        }
    })
    //登录注册按钮
    $(".SignFlow_sumbit").on("click", function () {
        if (tab_flag == 0) {
            if ($(".SignFlow_account input").val() == "" || $(".SignFlow_account input").val() == "请输入手机号") {
                $(".SignFlow_account input").val("请输入手机号").css("color", "#f1403c");
            } else {
                $(".SignFlow_account input").css("color", "#121212");
            }
            if ($(".SignFlow_smsInputContainer input").val() == "" || $(".SignFlow_smsInputContainer input").val() == "输入6位短信验证码") {
                $(".SignFlow_smsInputContainer input").val("输入6位短信验证码").css("color", "#f1403c");
            } else {
                $(".SignFlow_smsInputContainer input").css("color", "#121212");
            }
        }
        else {
            if ($(".SignFlowInput_Mask input").val() == "" || $(".SignFlowInput_Mask input").val() == "请输入手机号或邮箱") {
                $(".SignFlowInput_Mask input").val("请输入手机号或邮箱").css("color", "#f1403c");
            } else {
                $(".SignFlowInput_Mask input").css("color", "#121212");
            }
            if ($(".SignFlow_password input").val() == "" || $(".SignFlow_password input").val() == "请输入密码") {
                $(".SignFlow_password input").val("请输入密码").css("color", "#f1403c");
            } else {
                $(".SignFlow_password input").css("color", "#121212");
            }
        }
        // 进行验证码验证
        if (tab_flag == 0) {
            ajax({
                type: "post",
                url: "http://159.75.14.159:8080/ZhiHu/sms/signUp",
                data: {
                    Telephone: $(".SignFlow_account input").val(),
                    VerCode: $(".SignFlow_smsInputContainer input").val(),
                },
                success: function (data) {
                    console.log(data);
                    if (data.message == "验证成功") {
                        if (data.userState == 10001) {
                            $(".SignFlow_setting").show();
                            $(".SignFlow").hide();
                        }
                        if (data.userState == 10002) {
                            // 跳转到登录成功页面
                            window.location.assign("http://139.159.244.31/ZHIHU/index.html");
                        }
                    } else {
                        //短信验证错误提示
                        $(".SignFlow_smsInputErrorMessage").show();
                    }
                },
                error: function (data) {
                    alert("调用失败");
                }
            });
        }
        // 进行密码验证
        else {
            ajax({
                type: "post",
                url: "http://159.75.14.159:8080/ZhiHu/user/signIn",
                data: {
                    Username: $(".SignFlowInput_Mask input").val(),
                    Password: $(".SignFlow_password input").val(),
                },
                head: {
                    Content_Type: "application/x-www-form-urlencoded"
                },
                success: function (data) {
                    console.log(data);
                    if (data.message == "登录成功") {
                        localStorage.setItem("token", data.token);
                        location.assign("http://139.159.244.31/ZHIHU/index.html");
                    }
                },
                error: function (data) {
                    $(".SignFlow_passwordErrorMessage").show();
                    $(".SignFlow_password btn").hide();
                    console.log(data);
                }
            });
        }
    })

    // 新用户注册
    // 返回 
    $(".SignFlow_back").on("click", function () {
        $(".SignFlow_setting").hide();//账户注册页面
        $(".SignFlow").show();//账户登录页面
    });
    // 用户名
    $(".SignFlow_Name input").on({
        focus: function () {
            if ($(this).val() == "请输入用户名") {
                $(this).val("");
            }
            $(this).css("color", "#121212");
        },
        blur: function () {
            if ($(this).prop("placeholder") == "请输入用户名" && $(this).val() == "") {
                $(this).val("请输入用户名").css("color", "#f1403c");
            }
        }
    });
    // 密码
    $(".SignFlow_passwordfack input").on({
        focus: function () {
            if ($(this).val() == "请输入密码") {
                $(this).val("");
            }
            $(this).css("color", "#121212").prop("type", "password");
        },
        blur: function () {
            if ($(this).prop("placeholder") == "请输入密码" && $(this).val() == "") {
                $(this).val("请输入密码").css("color", "#f1403c").prop("type", "text");
            }
        }
    });
    // 按键切换 密码框和文本框
    $(".SignFlow_passwordfack div img").on("click", function () {
        if ($(".SignFlow_passwordfack input").val() != "请输入密码" && $(".SignFlow_passwordfack input").val() != "") {
            let type = $(".SignFlow_passwordfack input").prop("type");
            type = (type == "text") ? "password" : "text";
            $(".SignFlow_passwordfack input").prop("type", type);
        }
    });
    // 将新用户的用户信息传到服务器
    $(".SignFlow_sumbitfack").on("click", function (e) {
        e.preventDefault();
        ajax({
            type: "post",
            url: "http://159.75.14.159:8080/ZhiHu/user/signUp",
            data: {
                Username: $(".SignFlow_Name input").val(),
                Password: $(".SignFlow_passwordfack input").val(),
                Telephone: $(".SignFlow_account input").val(),
                Gender: "man",
                Age: 20
            },
            head: {
                Content_Type: "application/x-www-form-urlencoded"
            },
            success: function (data) {
                console.log(data);
                localStorage.setItem("token", data.token);
                location.assign("file:///D:/web%E5%89%8D%E7%AB%AF/%E7%BA%A2%E5%B2%A9%E4%BD%9C%E4%B8%9A/%E7%9F%A5%E4%B9%8E/index.html");
            },
            error: function (data) {
                console.log(data);
            }
        });

    });
    // 要是重新打开页面直接跳转去在主页
    if (localStorage.getItem("token")) {
        location.assign("http://139.159.244.31/ZHIHU/index.html");
    };
})