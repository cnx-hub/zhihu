
window.addEventListener("load", function () {
    // 标题内容的更新
    $(".WriteIndex_titleInput input,#textarea").on("blur", function () {
        if ($("#textarea").val() == "" || $(".WriteIndex_titleInput input").val() == "") {
            $(".PublishPanel_wrapper").prop("disable", true).css({ borderColor: "grey", color: "grey" });
        } else {
            $(".PublishPanel_wrapper").prop("disable", false).css({ borderColor: "#0066ff", color: "#0066ff" });
        }
    });

    $(".PublishPanel_wrapper").on("click", function () {
        ajax({
            type: "post",
            url: "http://159.75.14.159:8080/ZhiHu/article",
            data: {
                ArticleTitle: $("WriteIndex_titleInput input").val(),
                ArticleBody: $("#textarea").val(),
            },
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                console.log(data);
                alertl("调用失败");
            }
        });
    });
});