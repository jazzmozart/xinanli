
window.onload = function(){
    //var demo=$(".registerform").Validform({
    //    tiptype:3,
    //    label:".label",
    //    showAllError:true,
    //    ajaxPost:false
    //});


};
var validform = $(".paypassword-form").Validform({
    tiptype:3,
    label:".label",
    showAllError:true,
    ajaxPost:false
});
if(validform.eq(0)){
validform.eq(0).config({
    ajaxurl:{
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
    }
});
}



function sendBind() {
    var mobile = $("input[name='mobile']").val();
    //验证手机号是否被占用
    var token = $('#sendMobileCode').attr('token');
    $.post('/checkMobile',{'_token':token,'param':mobile},function(msg){
        if(msg.status == 'y'){
            curCount = count;
            if (mobile){
                //设置button效果，开始计时
                $("#sendMobileCode").attr("disabled", "true");
                $("#sendMobileCode").val("重新获取(" + curCount + ")");
                InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
                //var token = $('#sendMobileCode').attr('token');
                $.post('/user/sendBindSms',{'_token':token,'mobile':mobile},function(msg){
                    if(msg.success){
                        $('#sendMobileCode').next('span').attr('class','Validform_checktip Validform_right');
                        $('#sendMobileCode').next('span').html('短信发送成功！');
                    }
                });
            }
        }
    });


}

function sendPasswordCode(){
    var mobile = $("input[name='mobile']").val();
    curCount = count;
    if (mobile){
        //设置button效果，开始计时
        $("#sendMobileCode").attr("disabled", "true");
        $("#sendMobileCode").val("重新获取(" + curCount + ")");
        InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
        var token = $('#sendMobileCode').attr('token');
        $.post('/password/mobilePasswordCode',{'_token':token,'mobile':mobile},function(msg){
            if(msg.success){
                $('#sendMobileCode').next('span').attr('class','Validform_checktip Validform_right');
                $('#sendMobileCode').next('span').html('短信发送成功！');
            }
        });
    }
}

function sendunbind() {
    var mobile = $("input[name='mobile']").val();
    curCount = count;
    if (mobile){
        //设置button效果，开始计时
        $("#sendMobileCode").attr("disabled", "true");
        $("#sendMobileCode").val("重新获取(" + curCount + ")");
        InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
        var token = $('#sendMobileCode').attr('token');
        $.post('/user/sendUnbindSms',{'_token':token,'mobile':mobile},function(msg){
            if(msg.success){
                $('#sendMobileCode').next('span').attr('class','Validform_checktip Validform_right');
                $('#sendMobileCode').next('span').html('短信发送成功！');
            }
        });
    }

}
//timer处理函数
function SetRemainTime() {
    if (curCount == 0) {
        window.clearInterval(InterValObj);//停止计时器
        $("#sendMobileCode").removeAttr("disabled");//启用按钮
        $("#sendMobileCode").val("重新获取");
    }
    else {
        curCount--;
        $("#sendMobileCode").val("重新获取(" + curCount + ")");
    }
}
//发送验证码
$('#sendMobileCode').click(function()
{
    var email = $('#form-field-3').val();
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    if(myreg.test(email))
    {
        var token = $('#form-field-3').attr('token');
        $.post('/user/checkEmail',{'_token':token,'email':email},function(data){
            if(data.errCode==1){
                sendMessage(email);
            }else{
                $('#sendMobileCode').next('div').attr('class','Validform_checktip Validform_wrong');
                $('#sendMobileCode').next('div').html(data.errMsg);
            }
        });

    }
});

window.onload = function(){
    $.get('/user/checkInterVal',function(data){
        if(data.errCode==1){//继续计时
            curCount = data.interValTime;
            //设置button效果，开始计时
            $("#sendMobileCode").attr("disabled", "true");
            $("#sendMobileCode").val("重新获取(" + curCount + ")");
            InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
        }else if(data.errCode==3){
            $("#sendMobileCode").removeAttr("disabled");//启用按钮
            $("#sendMobileCode").val("获取验证码");
        }else{
            $("#sendMobileCode").removeAttr("disabled");//启用按钮
            $("#sendMobileCode").val("重新获取");
        }
    });
};

var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount;//当前剩余秒数
function sendRegisterCode(){
    var mobile = $("input[name='mobile']").val();
    curCount = count;
    if (mobile){
        //设置button效果，开始计时
        var token = $('#sendMobileCode').attr('token');
        $.post('/auth/mobileCode',{'_token':token,'mobile':mobile}, function(msg){
            if (msg.success){
                $("#sendMobileCode").attr('disabled', true);
                $("#sendMobileCode").val("重新获取(" + curCount + ")");
                InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
            }
        }, 'json');
    }

}

