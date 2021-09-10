$(function () {
    // 焦点搜索框
    $(".SearchBar_input input").on("focus", function () {
        $(this).parents(".css_1acwmmj").hide();
        $(".SearchBar_input_focus").show().children("input").focus();
    })
    $(".SearchBar_input_focus input").on("blur", function () {
        $(this).parents(".SearchBar_input_focus").hide();
        $(".css_1acwmmj").show();
    })
    // 个人信息的动态动态切换
    $(".tablist li ,.tablistfack li").each(function (index, domEle) {
        if (index == 0 || index == 4) {
            $(this).on("click", function () {
                $(".Card_TopstoryItem").show().siblings(".Topstory_follow").hide();
            })
        } else {
            $(this).on("click", function () {
                $(".Card_TopstoryItem").hide().siblings(".Topstory_follow").show();
            })
        }
    })
    $(".tablist li").each(function (index, dom) {
        $(dom).on("click", function () {
            $(this).css("borderBottom", "2px solid #0066ff").siblings().css("borderBottom", "0 solid #fff");
            $(".tablistfack li:eq(" + index + ")").css("borderBottom", "2px solid #0066ff").siblings().css("borderBottom", "0 solid #fff");
            $(".List_header span").html("我的" + $(this).html());
            if (index != 0 && index != 4) {
                $(".Topstory_newUserFollowCountPanelText").html("还没有" + $(this).html());
            }
        })
    })
    $(".tablistfack li").each(function (index, dom) {
        $(dom).on("click", function () {
            $(this).css("borderBottom", "2px solid #0066ff").siblings().css("borderBottom", "0 solid #fff");
            $(".tablist li:eq(" + index + ")").css("borderBottom", "2px solid #0066ff").siblings().css("borderBottom", "0 solid #fff");
            $(".List_header span").html("我的" + $(this).html());
            if (index != 0 && index != 4) {
                $(".Topstory_newUserFollowCountPanelText").html("还没有" + $(this).html());
            }
        })
    })
    // 距离顶部模块
    $(document).on("scroll", function () {
        if ($(this).scrollTop() >= $(".ProfileMain_header").offset().top) {
            $(".ProfileMain_headerfack").slideDown();
            $(".header").slideUp();
        } else {
            $(".ProfileMain_headerfack").slideUp();
            $(".header").slideDown();
        }
    });
    // 编辑跳转到个人信息
    $(".Button_blue").on("click", function () {
        window.location.assign("file:///D:/web%E5%89%8D%E7%AB%AF/%E7%BA%A2%E5%B2%A9%E4%BD%9C%E4%B8%9A/%E7%9F%A5%E4%B9%8E/edit.html");
    })
    // 获取个人信息
    ajax({
        type: "get",
        url: "http://159.75.14.159:8080/ZhiHu/user",
        data: {
            Authorization: localStorage.getItem("token")
        },
        success: function (data) {
            console.log(data);
            $(".ProfileHeader_name").text(data.user.Username);
            localStorage.setItem("telephone", data.user.Telephone);
        },
        error: function (data) {
            console.log(data);
        }
    });

})