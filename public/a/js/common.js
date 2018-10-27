$(function(){
    $.ajax({
        url:"/employee/checkRootLogin",
        type:"get",
        success:function(result){
            if(result.error && result.error==400){
                location.href="login.html";
            }
        }
    })

    $("#loginOut").on("click"),function(){
        $.ajax({
            url:"/employee/employeeLogout",
            type:"get",
            success:function(result){
                console.log(result);
                if(result.success){
                    location.href="login.html";
                }else{
                    alert("登出失败");
                }
            }
        })
    }
});