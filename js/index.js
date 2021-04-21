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
    var TopstoryTabs = document.querySelector(".TopstoryTabs");
    var TopstoryTabs_ul = TopstoryTabs.children[0];//内容导航栏
    $(document).on("scroll", function () {
        if ($(this).scrollTop() >= $(".Topstory_container").offset().top) {
            $(".TopstoryPageHeader").slideDown();
            $(".header").slideUp();
        } else {
            $(".TopstoryPageHeader").slideUp();
            $(".header").slideDown();
        }
    });
    // 点击内容导航栏模块 颜色加深
    $(".TopstoryTabs ul li, .TopstoryTabsfack ul li").on("click", function () {
        $(this).children().css("color", "#0066ff").parent().siblings().children().css("color", "#121212");
    });
    var ListShortcut = document.querySelector(".ListShortcut");//将从服务器端拿到的内容都放在里面
    var Topstory_follow = document.querySelector(".Topstory_follow");
    var HotList_list = document.querySelector(".HotList_list");
    // TopstoryTabs_ul.children[0].addEventListener("click", function () {
    //     clearInterval(timer2)
    //     timer1 = window.setInterval(function () {
    //         ajax({
    //             type: "get",
    //             url: "http://sunsun.work:8000/ZhiHu/article/any",
    //             success: function (data) {
    //                 console.log(data);
    //                 var Card_TopstoryItem = document.createElement("div");
    //                 Card_TopstoryItem.classList.add("Card_TopstoryItem");
    //                 ListShortcut.appendChild(Card_TopstoryItem);
    //                 var ContentItem_title = document.createElement("h2");
    //                 ContentItem_title.classList.add("ContentItem_title");
    //                 ContentItem_title.innerHTML = data.ArticleTitle;
    //                 Card_TopstoryItem.appendChild(ContentItem_title);
    //                 var RichContent_inner = document.createElement("div");
    //                 RichContent_inner.classList.add("RichContent_inner");
    //                 RichContent_inner.innerHTML = data.ArticleBody;
    //                 Card_TopstoryItem.appendChild(RichContent_inner);
    //                 var ContentItem_actions = document.createElement("div");
    //                 ContentItem_actions.classList.add("ContentItem_actions");
    //                 Card_TopstoryItem.appendChild(ContentItem_actions);
    //                 var VoteButton_up = document.createElement("div");
    //                 VoteButton_up.classList.add("VoteButton_up");
    //                 ContentItem_actions.appendChild(VoteButton_up);
    //                 var up = document.createElement("span");
    //                 up.classList.add("up");
    //                 VoteButton_up.appendChild(up);
    //                 var span = document.createElement("span");
    //                 span.innerHTML = "赞同";
    //                 VoteButton_up.appendChild(span);
    //                 var VoteButton_down = document.createElement("div");
    //                 VoteButton_down.classList.add("VoteButton_down");
    //                 ContentItem_actions.appendChild(VoteButton_down);
    //                 var down = document.createElement("down");
    //                 down.classList.add("down");
    //                 VoteButton_down.appendChild(down);
    //                 var button_plan = document.createElement("ul");
    //                 button_plan.classList.add("button_plan");
    //                 ContentItem_actions.appendChild(button_plan);
    //                 for (var i = 0; i < 4; i++) {
    //                     var comment = document.createElement("li");
    //                     comment.classList.add("comment");
    //                     button_plan.appendChild(comment);
    //                     var comment_img = document.createElement("img");
    //                     comment_img.src = "images/" + i + ".png";
    //                     comment_img.classList.add("comment_img");
    //                     comment.appendChild(comment_img);
    //                     var span = document.createElement("span");
    //                     if (i == 0) {
    //                         span.innerHTML = "评论";
    //                     }
    //                     else if (i == 1) {
    //                         span.innerHTML = "分享";
    //                     } else if (i == 2) {
    //                         span.innerHTML = "收藏";
    //                         comment.addEventListener("click", function () {
    //                             alert("已经收藏");
    //                             artId.push(data.ArticleId);
    //                             localStorage.setItem("ArticleId", JSON.stringify(artId));
    //                             ajax({
    //                                 type: "post",
    //                                 url: "http://sunsun.work:8000/ZhiHu/article/collection",
    //                                 data: {
    //                                     keyId: localStorage.getItem("localStorage"),
    //                                     artId: data.ArticleId,
    //                                 },
    //                                 head: {
    //                                     Content_Type: "application/x-www-form-urlencoded",
    //                                 },
    //                                 success: function (data) {
    //                                     console.log(data);
    //                                 },
    //                                 error: function (data) {
    //                                     console.log(data);
    //                                     alert("调用失败");
    //                                 }
    //                             });
    //                         });
    //                     } else if (i == 3) {
    //                         span.innerHTML = "举报";
    //                     }
    //                     comment.appendChild(span);
    //                 }
    //             },
    //             error: function (data) {
    //                 console.log(data);
    //                 alert("调用失败");
    //             }
    //         });
    //     }, 200);
    //     ListShortcut.style.display = "block";
    //     Topstory_follow.style.display = "none";
    //     HotList_list.style.display = "none";
    // });
    // TopstoryTabs_ul.children[1].addEventListener("click", function () {
    //     // window.clearInterval(timer1);
    //     window.clearInterval(timer2);
    //     ListShortcut.style.display = "none";
    //     Topstory_follow.style.display = "block";
    //     HotList_list.style.display = "none";
    // });
    // TopstoryTabs_ul.children[2].addEventListener("click", function () {
    //     window.clearInterval(timer1);
    //     timer2 = setInterval(function () {
    //         ajax({
    //             type: "get",
    //             url: "http://sunsun.work:8000/ZhiHu/article/any",
    //             success: function (data) {
    //                 var HotItem = document.createElement("div");
    //                 HotItem.classList.add("HotItem");
    //                 HotList_list.appendChild(HotItem);
    //                 var HotItem_index = document.createElement("div");
    //                 HotItem_index.classList.add("HotItem_index");
    //                 HotItem.appendChild(HotItem_index);
    //                 var HotItem_rank = document.createElement("div");
    //                 HotItem_rank.classList.add("HotItem_rank");
    //                 HotItem_index.appendChild(HotItem_rank);
    //                 var HotItem_title = document.createElement("h2");
    //                 HotItem_title.classList.add("HotItem_title");
    //                 HotItem_title.innerHTML = data.ArticleTitle;
    //                 HotItem.appendChild(HotItem_title);
    //                 var HotItem_excerpt = document.createElement("p");
    //                 HotItem_excerpt.classList.add("HotItem_excerpt");
    //                 HotItem_excerpt.innerHTML = data.ArticleBody;
    //                 HotItem.appendChild(HotItem_excerpt);
    //             },
    //             error: function (data) {
    //                 console.log(data);
    //                 alert("调用失败");
    //             }
    //         });
    //     }, 1000);
    //     ListShortcut.style.display = "none";
    //     Topstory_follow.style.display = "none";
    //     HotList_list.style.display = "block";
    // });
    // 用户信息是否隐藏
    var display_type;
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
        location.assign("file:///D:/web前端/红岩作业/知乎/article.html");
    });
    // 跳转的个人信息页面
    $(".Menu_item li:eq(0),.Menu_itemfack li:eq(0)").on("click", function () {
        window.location.assign("file:///D:/web前端/红岩作业/知乎/personal.html");
    });
    // 退出登录 删掉keyId
    $(".Menu_item li:eq(3), .Menu_itemfack li:eq(3)").on("click", function () {
        localStorage.removeItem("keyId");
        window.location.assign("file:///D:/web前端/红岩作业/知乎/login.html");
    });
    // 向服务器端请求内容
    var artId = [];
    // var timer1 = window.setInterval(function () {
    //     ajax({
    //         type: "get",
    //         url: "http://sunsun.work:8000/ZhiHu/article/any",
    //         success: function (data) {
    //             console.log(data);
    //             var Card_TopstoryItem = document.createElement("div");
    //             Card_TopstoryItem.classList.add("Card_TopstoryItem");
    //             ListShortcut.appendChild(Card_TopstoryItem);
    //             var ContentItem_title = document.createElement("h2");
    //             ContentItem_title.classList.add("ContentItem_title");
    //             ContentItem_title.innerHTML = data.ArticleTitle;
    //             Card_TopstoryItem.appendChild(ContentItem_title);
    //             var RichContent_inner = document.createElement("div");
    //             RichContent_inner.classList.add("RichContent_inner");
    //             RichContent_inner.innerHTML = data.ArticleBody;
    //             Card_TopstoryItem.appendChild(RichContent_inner);
    //             var ContentItem_actions = document.createElement("div");
    //             ContentItem_actions.classList.add("ContentItem_actions");
    //             Card_TopstoryItem.appendChild(ContentItem_actions);
    //             var VoteButton_up = document.createElement("div");
    //             VoteButton_up.classList.add("VoteButton_up");
    //             ContentItem_actions.appendChild(VoteButton_up);
    //             var up = document.createElement("span");
    //             up.classList.add("up");
    //             VoteButton_up.appendChild(up);
    //             var span = document.createElement("span");
    //             span.innerHTML = "赞同";
    //             VoteButton_up.appendChild(span);
    //             var VoteButton_down = document.createElement("div");
    //             VoteButton_down.classList.add("VoteButton_down");
    //             ContentItem_actions.appendChild(VoteButton_down);
    //             var down = document.createElement("down");
    //             down.classList.add("down");
    //             VoteButton_down.appendChild(down);
    //             var button_plan = document.createElement("ul");
    //             button_plan.classList.add("button_plan");
    //             ContentItem_actions.appendChild(button_plan);
    //             for (var i = 0; i < 4; i++) {
    //                 var comment = document.createElement("li");
    //                 comment.classList.add("comment");
    //                 button_plan.appendChild(comment);
    //                 var comment_img = document.createElement("img");
    //                 comment_img.src = "images/" + i + ".png";
    //                 comment_img.classList.add("comment_img");
    //                 comment.appendChild(comment_img);
    //                 var span = document.createElement("span");
    //                 if (i == 0) {
    //                     span.innerHTML = "评论";
    //                 }
    //                 else if (i == 1) {
    //                     span.innerHTML = "分享";
    //                 } else if (i == 2) {
    //                     span.innerHTML = "收藏";
    //                     comment.addEventListener("click", function () {
    //                         alert("已经收藏");
    //                         artId.push(data.ArticleId);
    //                         localStorage.setItem("ArticleId", JSON.stringify(artId));
    //                         // ajax({
    //                         //     type: "post",
    //                         //     url: "http://sunsun.work:8000/ZhiHu/article/collection",
    //                         //     data: {
    //                         //         keyId: localStorage.getItem("localStorage"),
    //                         //         artId: data.ArticleId,
    //                         //     },
    //                         //     head: {
    //                         //         Content_Type: "application/x-www-form-urlencoded",
    //                         //     },
    //                         //     success: function (data) {
    //                         //         console.log(data);
    //                         //     },
    //                         //     error: function (data) {
    //                         //         console.log(data);
    //                         //         alert("调用失败");
    //                         //     }
    //                         // });
    //                     });
    //                 } else if (i == 3) {
    //                     span.innerHTML = "举报";
    //                 }
    //                 comment.appendChild(span);
    //             }
    //         },
    //         error: function (data) {
    //             console.log(data);
    //             alert("调用失败");
    //         }
    //     });
    // }, 1000);
    // var timer2 = setInterval(function () {
    //     ajax({
    //         type: "get",
    //         url: "http://sunsun.work:8000/ZhiHu/article/any",
    //         success: function (data) {
    //             var HotItem = document.createElement("div");
    //             HotItem.classList.add("HotItem");
    //             HotList_list.appendChild(HotItem);
    //             var HotItem_index = document.createElement("div");
    //             HotItem_index.classList.add("HotItem_index");
    //             HotItem.appendChild(HotItem_index);
    //             var HotItem_rank = document.createElement("div");
    //             HotItem_rank.classList.add("HotItem_rank");
    //             HotItem_index.appendChild(HotItem_rank);
    //             var HotItem_title = document.createElement("h2");
    //             HotItem_title.classList.add("HotItem_title");
    //             HotItem_title.innerHTML = data.ArticleTitle;
    //             HotItem.appendChild(HotItem_title);
    //             var HotItem_excerpt = document.createElement("p");
    //             HotItem_excerpt.classList.add("HotItem_excerpt");
    //             HotItem_excerpt.innerHTML = data.ArticleBody;
    //             HotItem.appendChild(HotItem_excerpt);
    //         },
    //         error: function (data) {
    //             console.log(data);
    //             alert("调用失败");
    //         }
    //     });
    // }, 1000);
})