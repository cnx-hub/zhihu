$(function () {
    let arr = ["篮球", "排球", "足球"];
    let telephone = localStorage.getItem("telephone");
    // 显示和隐藏修改按钮
    $(".ProfileHeader_title ,.Field_content").on({
        mouseenter: function () {
            $(this).find(".Field_button").show();
        },
        mouseleave: function () {
            $(this).find(".Field_button").hide();
        }
    })
    // 点击修改按钮时 变为文本框
    $(".Field_content,.ProfileHeader_title").delegate(".Field_button", "click", function (e) {
        let html = $(this).siblings("span").text();
        let input = `<input type="text" value=${html}>`
        $(this).parents(".Field_content,.ProfileHeader_title").html(input);
        // 阻止点击按钮之后自动刷新页面
        e.preventDefault();
    })
    $(".Field_content ,.ProfileHeader_title").delegate("input", "blur", function () {
        let value = $(this).val();
        let html = `<span>${value}</span>
                    <button class="Field_button" style="display: none;"><img src="images/counlm.png" alt="">修改</button>`;
        $(this).parents(".Field_content,.ProfileHeader_title").html(html);
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
            $(".ProfileHeader_title span").text(data.user.Username);
            $("#sex").text(data.user.Gender);
            $("#age").text(data.user.Age);
            $("#hobby").text(arr[data.user.Id % 3]);
        },
        error: function (data) {
            console.log(data);
        }
    })
    // 修改个人信息
    $(".Field_content,.ProfileHeader_title").delegate(".Field_button", "click", function () {
        ajax({
            type: "post",
            url: "http://159.75.14.159:8080/ZhiHu/user",
            data: {
                Telephone: telephone,
                Password: "",
                Gender: "",
                Age: ""
            },
            success: function (data) {
                console.log(data);
                console.log(this);

            },
            error: function (data) {
                console.log(data);
            }
        })
    })

})