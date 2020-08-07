
var num = JSON.parse(sessionStorage.getItem('num'));  //取值
var distribution = JSON.parse(sessionStorage.getItem('distribution'));  //取值

var specterNum = JSON.parse(sessionStorage.getItem('specterNum'));  //取值
sessionStorage.setItem('specterNum', JSON.stringify(specterNum));  //存值 

var civilianNum = JSON.parse(sessionStorage.getItem('civilianNum'));  //取值
sessionStorage.setItem('civilianNum', JSON.stringify(civilianNum));  //存值 


sessionStorage.setItem('num', JSON.stringify(num));  //存值 
sessionStorage.setItem('distribution', JSON.stringify(distribution)); //存值
var identity = document.getElementById('identity'); //获取显示身份的input ID
var a = 1;  
var b = 1;
var c = 0;





$(function() {
    $(".ans").click(function() {
        window.location.href="task-2-1.html";
    });
});

$(function() {
    $(".ank").click(function() {
        var x;
        var r = confirm("确定要退出本局游戏吗？");
        if (r == true) {
            x = window.location.href = "task-2-1.html";
        }
    });
});



var start = "off";  //模拟开关 
function btn() {          //切换按钮
    if (c < num.length) {   //c等于0 小于 num数组最大长度时执行下面操作
        if (start === "off") {    //按钮A时b自增
            b++;
            start = "on";
            $('.button').hide() 
        }
        else {
            if (a < num.length ) {    // a等于1 小于num数组最大长度时a自增
                a++;
                $('.button').show()  
            }
           if(c<num.length-1)  {
            c++; 
           }        
            start = "off"; 
       }
    }
    if (c < num.length ) {          
        $('.content').toggle()    //切换
    }
    if (c < num.length - 1) {
        $('#conceal').val("隐藏并传递给" + b + "号");  //c小于num数组最大长度减1时显示
    }
    else if (c > num.length - 3) {
        $('#conceal').val("法官查看");    //c大于当前num数组最大长度-2时 显示法官查看
        $('#conceal').click(function () {    //点击跳转
            window.location.href = "task.html";  //跳转到法官页面显示身份
        })
    }


    $('.numb').text(a);    //赋值
    $('#examine').val("查看" + a + "号身份");   //赋值
    $(identity).val(distribution[c].role);    //数组下标在b按钮时自增
}
