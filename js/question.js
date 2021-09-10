$(function () {
    // 焦点框显示 和 隐藏
    $(".SearchBar_input input").on("focus", function () {
        $(this).parents(".css_1acwmmj").hide().siblings(".SearchBar_input_focus").show().children("input").focus();
    })
    $(".SearchBar_input_focus input").on("blur", function () {
        $(this).parents(".SearchBar_input_focus").hide().siblings(".css_1acwmmj").show();
    })
    // 问题导航栏模块
    $(".TopstoryTabs ul li").on("click", function () {
        $(this).children("a").addClass("QuestionType_active");
        $(this).siblings().children("a").removeClass("QuestionType_active");
    })
    // 经过问题内容 显示 关闭按钮
    $(".ListShortcut").delegate(".QuestionItem", "mouseenter", function () {
        // let add = `<a href="javascript:;" title="不感兴趣" class="close" style="display: none;">×</a>`;
        $(this).find(".close").show();
    })
    $(".ListShortcut").delegate(".QuestionItem", "mouseleave", function () {
        // let add = `<a href="javascript:;" title="不感兴趣" class="close" style="display: none;">×</a>`;
        $(this).find(".close").hide();
    })

    // 删除问题
    $(".ListShortcut").delegate(".close", "click", function (e) {
        $(e.target).parents(".QuestionItem").remove();
    })
    // 底部模块
    let Card_top = $(".Card").offset().top - $(".Card_CreatorEntrance").offset().top - $(".Card_CreatorEntrance").outerHeight();
    let Card_left = $(".Card").offset().left;
    let footer_top = $(".footer").offset().top - $(".Card_CreatorEntrance").offset().top - $(".Card_CreatorEntrance").outerHeight();
    let footer_left = $(".footer").offset().left;
    $(document).on("scroll", function () {
        if ($(this).scrollTop() >= $(".Card_CreatorEntrance").offset().top + $(".Card_CreatorEntrance").outerHeight()) {
            $(".Card").css({ position: "fixed", top: Card_top + 42, left: Card_left });
            $(".footer").css({ position: "fixed", top: footer_top + 42, left: footer_left });
        } else {
            $(".Card").css("position", "static");
            $(".footer").css("position", "static");
        }
    });
    // 请求问题
    let arr = ["你觉得包里一定要带什么", "拨牙疼还是打麻药疼", "可以分享一首温柔的歌给我？", "陪你度过最艰难的时期的一本书是", "应该从哪方面让自己变得更好", "最能代表你的青春的是哪一款游戏？", "从任何意义上，对你影响最深刻的动漫是哪一部？", "越是关注的姑娘，越容易把关系搞僵怎么办，我应该怎么做?", "一个喜欢你的 一个你喜欢的该怎么选择？", "越是关注的姑娘，越容易把关系搞僵怎么办，我应该怎么做?"]
    let index = new Array();

    for (let i = 0; i < 500; i++) {
        let temp;
        temp = parseInt(Math.random() * 1000);
        index.push(temp);
        ajax({
            type: "get",
            url: "http://159.75.14.159:8080/ZhiHu/question",
            data: {
                Id: 1
            },
            success: function (data) {
                // console.log(data);
                let add = `<div class="QuestionItem">
                    <div class="css_efpzff">
                        <img src="upload/hot.png" alt="">
                        <div class="QuestionItem_head">最近有<i>${temp}</i>人搜过 </div>
                        <a href="javascript:;" title="不感兴趣" class="close" style="display: none;">×</a>
                    </div>
                    <div class="QuestionItem_title">
                        <a href="javascript:;" target="_blank">${arr[i % 10]} </a>
                    </div>
                    <div class="css_g8i27r">
                        <button class="Button_withLabel"> <img src="images/pen.png" alt=""> 写回答</button>
                        <div class="ContentItem_status">
                            <span class="ContentItem_statusItem">${parseInt(Math.random() * 1000)}回答</span>
                            <span class="ContentItem_statusItem">·${parseInt(Math.random() * 1000)}关注</span>
                        </div>
                    </div>
                </div>`
                $(".ListShortcut").append(add);
            }
        })
    }
    index.sort(function compareNumbers(a, b) { return b - a; });

    $(".TopstoryTabs ul li:eq(1)").on("click", () => {
        index.forEach((value, i) => {
            $(".QuestionItem_head i:eq(" + i + ")").text(value);
        })
    })

})