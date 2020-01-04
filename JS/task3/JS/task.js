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


for(let i=0;i<num.length;i++) {          //循环出的方块
    var block='<div class="block-1" id="boxes-1">'+
    '<div class="block-2">'+
    '<div class="top" onclick="btn(' + i + ')">'+
    '<p>'+distribution[i].role+'</p>'+
    '</div>'+
    '<div class="bottom">'+
    '<p>'+[i+1]+'</p>'+
    '</div>'+
    '</div>'+
    '<div class="block-3">'+
    '<img class="combination" src="./img/combination.png">'+
    '</div>'+
    '</div>';   
    $("#boxes").append(block);   
}
 




var box='<div class="box">'+   //游戏目录
'<div class="day">'+
'<span>'+'第一天'+'</span>'+
'</div>'+
'<div class="options">'+
'<i class="triangle-top">'+'</i>'+
'<div class="discuss">'+
'<div class="sun">'+
'<img src="./img/moon.png">'+
'</div>'+
'<div class="block-s" id="idea">'+
'<i class="triangle-left" id="left-1">'+'</i>'+
'杀手杀人'+
'</div>'+
'</div>'+
'<div class="discuss">'+
'<div class="sun">'+
'<img src="./img/moon.png">'+
'<div class="kkk">'+'</div>'+
'</div>'+
'<div class="block-s" id="ghost">'+
'<i class="triangle-left" id="left-2">'+'</i>'+
'亡灵发言'+
'</div>'+
'</div>'+
'<div class="discuss">'+
    '<div class="sun">'+
    '<img src="./img/sun.png">'+
    '<div class="kkk">'+'</div>'+
    '</div>'+
    '<div class="block-s" id="game">'+
    '<i class="triangle-left" id="left-3">'+'</i>'+
    '玩家发言'+
    '</div>'+
    '</div>'+
    '<div class="discuss">'+
        '<div class="sun">'+
        '<img src="./img/sun.png">'+
        '<div class="kkk">'+'</div>'+
        '</div>'+
        '<div class="block-s" id="vote">'+
        '<i class="triangle-left">'+'</i>'+
        '投票'+
        '</div>'+
        '</div>'+
'</div>';

$("#container").append(box); 




$('#container').hide()
$('#buttons').hide()
$('#button').hide()

var ka=1;

function an() {        
    if(ka==1) {
        ka=2;
        $('.block').hide();
        $('#container').show();
        $('body').css("backgroundColor","#f0f0f0")
        $('.texts').text("法官台本");
        $('.footer').css("backgroundColor","rgba(103, 199, 243, 0.5)")
        $('.button').css({
            "width":"45%",
            "fontSize":"24px",
            "margin":"0 10px"
        })
        $('#buttons1').text("结束游戏")
        $('#buttons').show()
    }
    else if(ka==2) {
    var x;
    var r=confirm("确定要退出本局游戏吗？");
    if (r==true){
        x=window.location.href="task-2-1.html";
    }    
}
}

var nm = 0;

$('#idea').click(function() {    //杀人模块
 if(nm==0) {
     nm=1;
    $('.block').show();
    $('#container').hide();
    $('body').css("backgroundColor","black")
    $('#buttons1').hide()
    $('#buttons').hide()
    $('#button').show()
  }else {
      alert("请按顺序操作！")
  }

  if (nm > 0) {
    $("#left-1").css({
        "border-right": "40px solid  #8cae9b",
        "border-top": "20px solid transparent",
        "border-bottom": "20px solid transparent",
        "position": "absolute",
        "left": "-19px"
    })
    $("#idea").css("background-color", "#8cae9b");
}
})


var na;



function btn(t) {
    na = t;
    console.log(t, na)
}


function backtrack() {       //杀人之后确定按钮

    if (distribution[na].survival === 0) {
        if (distribution[na].role === "幽灵") {
            alert("不能自相残杀")
        }else {
            var m = confirm("确定要杀此人吗？");
            if (m == true) {
                distribution[na].survival = 1;
                $('.top').eq(na).css("backgroundColor", "#83b09a");
                sessionStorage.setItem('distribution', JSON.stringify(distribution)); //存值 
                $('#buttons1').show()
                $('#buttons').show()
                $('.block').hide();
                $('#container').show();
                $('body').css("backgroundColor","#f0f0f0")
                $('#button').hide()
            }
        }
    } else {
        alert("该玩家已死亡")
    }
}



$('#ghost').click(function() {    //亡灵发言
    if(nm==1) {
        nm=2;
        alert("月黑风高杀人夜");
     }else {
         alert("请按顺序操作！")
 
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
   })
   


   $('#game').click(function() {    //玩家发言
    if(nm==2) {
        nm=3;
        alert("我坤坤绝不是凶手");
     }else {
         alert("请按顺序操作！")
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
   })

   
   $('#vote').click(function() {    //投票
    if(nm==3) {
        nm=4;
    $('.block').show();
    $('#container').hide();
    $('body').css("backgroundColor","#29bde0")
    $('#buttons1').hide()
    $('#buttons').hide()
    $('#button').show()
     }else {
         alert("请按顺序操作！")
     }
   })


function examine() {   //法官查看
    if(ka==2) {
        ka=3;
    $('.block').show();
    $('#container').hide();
    $('body').css("backgroundColor","#29bde0")
    $('.texts').text("法官日志");
    $('#buttons1').hide()
    $('#buttons').text("返回游戏")
    }
    else if(ka=3) {
         ka=2;
         $('.block').hide();
         $('#container').show();  
         $('#buttons1').show()
         $('.texts').text("法官台本");
         $('body').css("backgroundColor","#f0f0f0")
    }
}


    




