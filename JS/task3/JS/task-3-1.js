
var num = sessionStorage.getItem('num');  //取值
num = JSON.parse(num);
var distribution = sessionStorage.getItem('distribution');  //取值
distribution = JSON.parse(distribution);

sessionStorage.setItem('num', JSON.stringify(num));  //存值 
sessionStorage.setItem('distribution', JSON.stringify(distribution)); //存值
 
var identity = document.getElementById('identity'); //获取显示身份的input ID
var a = 1;  
var b = 1;
var c = 0;

var start = "off";  //模拟开关 
function btn() {          //切换按钮
    if (c < num.length) {   //c等于0 小于 num数组最大长度时执行下面操作
        if (start === "off") {    //按钮A时b自增
            b++;
            start = "on";
        }
        else {
            if (a < num.length) {    // a等于1 小于num数组最大长度时a自增
                a++;
            }

           if(c<num.length-1)  {
            c++; 
           }
                         
            start = "off";  
       }
    }
    if (c < num.length) {          
        $('.content').toggle()    //切换
        $('.button').toggle()    //按钮切换
    }

    if (c < num.length - 1) {
        $('#conceal').val("隐藏并传递给" + b + "号");  //c小于num数组最大长度减1时显示
    }
    else if (c > num.length - 2) {
        $('#conceal').val("法官查看");    //c大于当前num数组最大长度-2时 显示法官查看
        $('#conceal').click(function () {    //点击跳转
            window.location.href = "https://zhuchunyu1995.github.io/xzy/JS/task2/task-2-1.html";  //跳转到法官页面显示身份
        })
    }

    $('#number').val(a);    //赋值
    $('#examine').val("查看" + a + "号身份");   //赋值
    $(identity).val(distribution[c]);    //数组下标在b按钮时自增
}










  

    


  

    