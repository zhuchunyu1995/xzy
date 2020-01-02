var num = sessionStorage.getItem('num');  //取值
num = JSON.parse(num);
var distribution = sessionStorage.getItem('distribution');  //取值
distribution = JSON.parse(distribution);

sessionStorage.setItem('num', JSON.stringify(num));  //存值 
sessionStorage.setItem('distribution', JSON.stringify(distribution)); //存值



$(function () { //折叠栏
    $(".day").click(function () {
        $(".options").toggle();
    });
});



var block = '<div class="box">'+
    '<div class="day">'+
    '<span>'+'第一天'+'</span>'+
    '</div>'+
    '<div class="options">'+
    '<i class="triangle-top">'+'</i>'+
    '<div class="discuss">'+
    '<div class="sun">'+
    '<img src="./img/moon.png">'+
    '</div>'+
    '<div class="block-1" id="idea">'+
    '<i class="triangle-left" id="left-1">'+'</i>'+
    '杀手杀人'+
    '</div>'+
    '</div>'+
    '<div class="discuss">'+
    '<div class="sun">'+
    '<img src="./img/moon.png">'+
    '<div class="kkk"></div>'+
    '</div>'+
    '<div class="block-1" id="ghost">'+
    '<i class="triangle-left" id="left-2"></i>'+
    '亡灵发言'+
    '</div>'+
    '</div>'+
    '<div class="discuss">'+
        '<div class="sun">'+
        '<img src="./img/sun.png">'+
        '<div class="kkk"></div>'+
        '</div>'+
        '<div class="block-1" id="game">'+
        '<i class="triangle-left" id="left-3">'+'</i>'+
        '玩家发言'+
        '</div>'+
        '</div>'+
        '<div class="discuss">'+
            '<div class="sun">'+
            '<img src="./img/sun.png">'+
            '<div class="kkk"></div>'+
            '</div>'+
            '<div class="block-1" id="vote">'+
            '<i class="triangle-left">'+'</i>'+
            '投票'+
            '</div>'+
            '</div>'+
    '</div>';
    $("#container").append(block);

    
   
    var nm = 0;


window.onpagehide = function () { //离开当前页面自增
    nm++;
    sessionStorage.setItem('nm', JSON.stringify(nm)); //存值 
};

nm = JSON.parse(sessionStorage.getItem('nm')); //取值

$("#idea").click(function () {

    if (nm < 1) {
        window.location.href = "task-4-3.html";
    } else {
        alert("玩家依次发言讨论");
    }
});




$("#ghost").click(function () { //亡灵发言
    if (nm == 1) {
        nm++;
        alert("月黑风高杀人夜");
        sessionStorage.setItem('nm', JSON.stringify(nm)); //存值
    } else {
        alert("请按顺序操作");
    }

    if (nm > 1) {
        $("#left-2").css({
            "border-right": "40px solid  #8cae9b",
            "border-top": "20px solid transparent",
            "border-bottom": "20px solid transparent",
            "position": "absolute",
            "left": "-19px"
        })
        $("#ghost").css("background-color", "#8cae9b");
    }

});

nm = JSON.parse(sessionStorage.getItem('nm')); //取值


$("#game").click(function () { //玩家发言
    if (nm == 2) {
        alert("我坤坤绝不是凶手");
        nm++;
        sessionStorage.setItem('nm', JSON.stringify(nm)); //存值 
    } else {
        alert("请按顺序操作");
    }
    if (nm > 2) {
        $("#left-3").css({
            "border-right": "40px solid  #8cae9b",
            "border-top": "20px solid transparent",
            "border-bottom": "20px solid transparent",
            "position": "absolute",
            "left": "-19px"
        })
        $("#game").css("background-color", "#8cae9b");
    }
});



$("#vote").click(function () { //投票页面
    nm = JSON.parse(sessionStorage.getItem('nm')); //取值

    if (nm == 3) {
        window.location.href = "task-4-2.html";
        nm=0;
    } else {
        alert("请按顺序操作");
    }

});


if (nm !== null) { //杀人之后变色
    $("#left-1").css({
        "border-right": "40px solid  #8cae9b",
        "border-top": "20px solid transparent",
        "border-bottom": "20px solid transparent",
        "position": "absolute",
        "left": "-19px"
    })
    $("#idea").css("background-color", "#8cae9b");
} 












 








    $("#end").click(function () {          //结束游戏按钮
        var x;
        var r=confirm("确定要退出本局游戏吗？");
        if (r==true){
            x=window.location.href="task-2-1.html";
        }    
    });

    $('.f2').hide()

$(function () {
    $("#journal").click(function () { //点击法官查看跳转到法官查看身份页面
        $('.f1').toggle()
       $('.f2').show()
       $('#text').text("法官日志");
       document.body.style.backgroundColor="#29bde0";
    });
});




for(i=0;i<num.length;i++) {
    var block1='<div class="block-1" id="boxes-1">'+
    '<div class="block-2">'+
    '<div class="top">'+
    '<p>'+distribution[i]+'</p>'+
    '</div>'+
    '<div class="bottom">'+
    '<p>'+[i+1]+'</p>'+
    '</div>'+
    '</div>'+
    '<div class="block-3">'+
    '<img class="combination" src="./img/combination.png">'+
    '</div>'+
    '</div>';   
    $("#boxes").append(block1);   
}
 

$(function() {
    $(".button-1").click(function() {
        $('.f1').show()
       $('.f2').toggle()
       $('#text').text("法官台本");
       document.body.style.backgroundColor="#f0f0f0";
    });
});
