$(function () {
    //查询模块
    $(".SearchBar_input input").on({
        focus: function () {
            $(this).parents(".css_1acwmmj").fadeOut(300).siblings(".SearchBar_input_focus").fadeIn(300).children("input").focus();
        }
    });
    $(".SearchBar_input_focus input").on("blur", function () {
        $(this).parents(".SearchBar_input_focus").fadeOut(300).siblings(".css_1acwmmj").fadeIn(300);
    });
    // 滑动头部改变
    $(document).on("scroll", function () {
        if ($(this).scrollTop() >= $(".Topstory_container").offset().top) {
            $(".TopstoryPageHeader").slideDown();
            $(".header").slideUp();
        } else {
            $(".TopstoryPageHeader").slideUp();
            $(".header").slideDown();
        }
    });
    // 导航栏
    // 点击内容导航栏模块 颜色加深
    $(".TopstoryTabs ul li, .TopstoryTabsfack ul li").on("click", function () {
        $(this).children().css("color", "#0066ff").parent().siblings().children().css("color", "#121212");
    });
    $(".TopstoryTabs li:eq(0)").on("click", function () {
        $(".ListShortcut").show();
        $(".Topstory_follow").hide();
        $(".HotList_list").hide();
    })
    $(".TopstoryTabs li:eq(1)").on("click", function () {
        $(".ListShortcut").hide();
        $(".Topstory_follow").show();
        $(".HotList_list").hide();
    })
    $(".TopstoryTabs li:eq(2)").on("click", function () {
        $(".ListShortcut").hide();
        $(".Topstory_follow").hide();
        $(".HotList_list").show();
    })

    // 用户信息是否隐藏
    $(".AppHeader_profile img").on("click", function () {
        let display_type = $(".Menu").css("display");
        display_type = (display_type == "none") ? "block" : "none"
        $(".Menu").css("display", display_type).siblings(".Menu_item").css("display", display_type);
        $(".Menufack").css("display", display_type).siblings(".Menu_itemfack").css("display", display_type);
    });
    // 点击主体内容部分  用户信息会隐藏
    $(".Topstory_container").on("click", function () {
        $(".Menu").css("display", "none").siblings(".Menu_item").css("display", "none");
        $(".Menufack").css("display", "none").siblings(".Menu_itemfack").css("display", "none");
    })
    // 实现底部还有类别模块的定位
    let Card_top = $(".Card").offset().top - $(".Card_GlobalSideBar_category").offset().top - $(".Card_GlobalSideBar_category").outerHeight();
    let Card_left = $(".Card").offset().left;
    let footer_top = $(".footer").offset().top - $(".Card_GlobalSideBar_category").offset().top - $(".Card_GlobalSideBar_category").outerHeight();
    let footer_left = $(".footer").offset().left;
    $(document).on("scroll", function () {
        if ($(this).scrollTop() >= $(".Card_GlobalSideBar_category").offset().top + $(".Card_GlobalSideBar_category").outerHeight()) {
            $(".Card").css({ position: "fixed", top: Card_top + 42, left: Card_left });
            $(".footer").css({ position: "fixed", top: footer_top + 42, left: footer_left });
        } else {
            $(".Card").css("position", "static");
            $(".footer").css("position", "static");
        }
    });
    // 跳转到写文章页面
    $(".GlobalWrite_topItem:eq(2)").on("click", function () {
        window.location.assign("http://139.159.244.31/ZHIHU/article.html");
    });
    // 跳转的个人信息页面
    $(".Menu_item li:eq(0),.Menu_itemfack li:eq(0)").on("click", function () {
        window.location.assign("http://139.159.244.31/ZHIHU/personal.html");
    });
    // 退出登录 删掉keyId
    $(".Menu_item li:eq(3), .Menu_itemfack li:eq(3)").on("click", function () {
        localStorage.removeItem("token");
        localStorage.removeItem("telephone");
        window.location.assign("http://139.159.244.31/ZHIHU/login.html");
    });
    // 跳转到回答问题页面
    $(".GlobalWrite_topItem:eq(0)").on("click", function () {
        window.location.assign("http://139.159.244.31/ZHIHU/question.html");
    })
    // 向服务器端请求内容
    let datas1 = new Array();
    for (let i = 0; i < 500; i++) {
        ajax({
            type: "get",
            url: "http://159.75.14.159:8080/ZhiHu/article",
            data: {
                Id: i % 11 + 3,
            },
            success: function (data) {
                // console.log(i);
                datas1.push(data);
            },
            error: function (data) {
                console.log(data);
            }
        });
    }
    setTimeout(() => {
        datas1.forEach((value) => {
            let add = `<div class="Card_TopstoryItem">
          <h2 class="ContentItem_title">${value.article.ArtTitle}</h2>
          <div class="RichContent">
            <div class="RichContent_cover"><img src="upload/zhihu${value.article.Id - 2}.jpg" alt=""></div>
            <div class="RichContent_inner">${value.article.ArtBody}</div>
          </div>
          <div class="ContentItem_actions">
            <div class="VoteButton_up">
              <span class="up"></span>
              <span>赞同</span>
            </div>
            <div class="VoteButton_down">
              <span class="down"></span>
            </div>
            <ul class="button_plan">
              <li class="comment">
                <img src="images/0.png" alt="" class="comment_img" />
                <span>评论</span>
              </li>
              <li class="comment">
                <img src="images/1.png" alt="" class="comment_img" /><span>分享</span>
              </li>
              <li class="comment">
                <img src="images/2.png" alt="" class="comment_img" /><span>收藏</span>
              </li>
              <li class="comment">
                <img src="images/3.png" alt="" class="comment_img" /><span>举报</span>
              </li>
            </ul>
          </div>
        </div>`;
            $(".ListShortcut").append(add);
        })
    }, 2000)
    setTimeout(() => {
        datas1.forEach((value, i) => {
            let add = `<div class="HotItem">
          <div class="HotItem_index">
            <div class="HotItem_rank">${i + 1}</div>
          </div>
          <h2 class="HotItem_title">${value.article.ArtTitle}</h2>
          <div class="HotItem_excerpt">${value.article.ArtBody}</div>
          <div class="HotItem_img"><img src="upload/zhihu${value.article.Id - 2}.jpg" alt=""></div>
        </div>`
            $(".HotList_list").append(add);
        })
    }, 2000)
})