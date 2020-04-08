$(function(){
	$("#publishBtn").click(publish);
});

function publish() {
	$("#publishModal").modal("hide");

	//获取标题和正文
	var title = $("#recipient-name").val();
	var content = $("#message-text").val();
	//发送异步请求（POST）
	$.post(
	    CONTENT_PATH + "/discuss/add",
	    {"title":title,"content":content},
	    function(data){
	        data = $.parseJSON(data);
	        //在提示框中返回显示的消息
	        $("#hintBody").text(data.msg);
            //显示提示框
	        $("#hintModal").modal("show");
	        //2S后自动隐藏提示框
            setTimeout(function(){
                $("#hintModal").modal("hide");
                //刷新页面
                if(data.code == 0){
                    window.location.reload();
                }
            }, 2000);
	    }
	)


}