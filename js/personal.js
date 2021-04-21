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
    var ProfileMain_header = document.querySelector(".ProfileMain_header");
    var ProfileMain_headerfack = document.querySelector(".ProfileMain_headerfack");
    var header = document.querySelector(".header");
    $(document).on("scroll", function () {
        if ($(this).scrollTop() >= $(".ProfileMain_header").offset().top) {
            $(".ProfileMain_headerfack").slideDown();
            $(".header").slideUp();
        } else {
            $(".ProfileMain_headerfack").slideUp();
            $(".header").slideDown();
        }
    });
})