
window.addEventListener("load", function () {
    // 标题内容的更新
    var textarea = document.querySelector("#textarea"); //更新
    var PublishPanel_wrapper = document.querySelector(".PublishPanel_wrapper");
    var WriteIndex_pageTitle_ipt = document.querySelector(".WriteIndex_titleInput input");// 标题
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
            url: "http://sunsun.work:8000/ZhiHu/article/put",
            data: {
                ArticleTitle: $("WriteIndex_titleInput input").val(),
                ArticleBody: $("#textarea").val(),
                ArticleTel: localStorage.getItem("keyId")
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