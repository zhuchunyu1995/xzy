var num = JSON.parse(sessionStorage.getItem('num')); //取值
var distribution = JSON.parse(sessionStorage.getItem('distribution')); //取值
var specterNum = JSON.parse(sessionStorage.getItem('specterNum')); //取值
var civilianNum = JSON.parse(sessionStorage.getItem('civilianNum')); //取值



sessionStorage.setItem('specter', JSON.stringify(specterNum)); //存值
sessionStorage.setItem('civilian', JSON.stringify(civilianNum)); //存值





var container = document.getElementById('container');
var buttons1 = document.getElementById('buttons1');
var buttons = document.getElementById('buttons');
var button = document.getElementById('button');
var butt = document.getElementById('butt');
$(container).hide()
$(buttons).hide()
$(button).hide()
$(butt).hide()

for (let i = 0; i < num.length; i++) { //循环出的方块
    var block = '<div class="block-1" id="boxes-1">' +
        '<div class="block-2">' +
        '<div class="top" onclick="btn(' + i + ',this)" onmouseover="t1(this)" onmouseout="t2(this)">' +
        '<p>' + distribution[i].role + '</p>' +
        '</div>' +
        '<div class="bottom"  >' +
        '<p>' + [i + 1] + '</p>' +
        '</div>' +
        '</div>' +
        '<div class="block-3">' +
        '<img class="combination" src="./img/combination.png">' +
        '</div>' +
        '</div>';
    $("#boxes").append(block);

}

$(".combination").css("opacity", "0");




var ka = 1; //判断数字是几执行什么操作
buttons1.onclick = function () { //切换到法官台本页面 改变标题和页尾背景色

    if (ka == 1) { //跳转到法官台本页面 

        ka = 2;
        $('.block').hide();
        $(container).show();
        $('body').css("backgroundColor", "#f0f0f0")
        $('.texts').text("法官台本");
        $('.footer').css("backgroundColor", "rgba(103, 199, 243, 0.5)")
        $('.button').css({
            "width": "45%",
            "fontSize": "24px",
            "margin": "0 10px"
        })
        $(buttons1).text("结束游戏")
        $(buttons).show()
        adc()
    } else if (ka == 2) { //ka等于2时 按钮功能改变，点击确定退出游戏，取消 继续游戏
        var x;
        var r = confirm("确定要退出本局游戏吗？");
        if (r == true) {
            x = window.location.href = "task-2-1.html";
        }
    }
}





function examine() { //法官查看
    if (ka == 2) {
        ka = 3;
        $('.block').show();
        $(container).hide();
        $('body').css("backgroundColor", "#29bde0")
        $('.texts').text("法官日志");
        $(buttons1).hide()
        $(buttons).text("返回游戏")
        $(".combination").css("opacity", "0");
    } else if (ka = 3) {
        ka = 2;
        $('.block').hide();
        $(container).show();
        $(buttons1).show()
        $('.texts').text("法官台本");
        $(buttons).text("法官日志")
        $('body').css("backgroundColor", "#f0f0f0")
    }
}




var rr = 0; //方块变色
var large = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]; //进展天数

var ff = 0; //天数变化
var nice=0;
nic=0;
function adc() {
    ff++;
    var box = '<li>' +
        '<span  class="day">' + '第' + large[ff] + '天' + '</span>' +
        '<div class="options">' +
        '<i class="triangle-top">' + '</i>' +
        '<div class="discuss">' +
        '<div class="sun">' +
        '<img src="./img/moon.png">' +
        '</div>' +
        '<div class="block-s  idea" onclick="dw(' + ff + ')" >' +
        '<i class="triangle-left left-1">' + '</i>' +
        '杀手杀人' +
        '</div>' +
        '<input type="text" class="result" readonly="readonly">' +
        '</div>' +
        '<div class="discuss">' +
        '<div class="sun">' +
        '<img src="./img/moon.png">' +
        '<div class="kkk">' + '</div>' +
        '</div>' +
        '<div class="block-s ghost" onclick="dwg(' + ff + ')">' +
        '<i class="triangle-left left-2">' + '</i>' +
        '亡灵发言' +
        '</div>' +
        '</div>' +
        '<div class="discuss">' +
        '<div class="sun">' +
        '<img src="./img/sun.png">' +
        '<div class="kkk">' + '</div>' +
        '</div>' +
        '<div class="block-s game" onclick="dws(' + ff + ')">' +
        '<i class="triangle-left left-3">' + '</i>' +
        '玩家发言' +
        '</div>' +
        '</div>' +
        '<div class="discuss">' +
        '<div class="sun">' +
        '<img src="./img/sun.png">' +
        '<div class="kkk">' + '</div>' +
        '</div>' +
        '<div class="block-s vote"  onclick="dwa(' + ff + ')">' +
        '<i class="triangle-left left-4">' + '</i>' +
        '投票' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</li>';
    $(".bob").append(box);
    $(function () {
        $('span').click(function () { //手风琴
            $(this).next().slideDown().parent().siblings().children('div').slideUp();
        })
    })
}



var nm = 0; //判断点击变色

function dw(a) { //杀人模块
    if (ff == a) {
        if (nm == 0) {
            nm = 1;
            rr = 1;
            nice++;
            sessionStorage.setItem('nice', JSON.stringify(nice)); //存值 
            $('.block').show();
            $('.texts').text("月黑风高杀人夜");
            $(container).hide();
            $('body').css("backgroundColor", "black");
            $(buttons1).hide()
            $(buttons).hide()
            $(button).show()
            $(".combination").css("opacity", "1");
          

        } else {
            alert("请按顺序操作！")
        }
        if (nm > 0) {
            $(".left-1").css({
                "border-right": "40px solid  #8cae9b",
                "border-top": "20px solid transparent",
                "border-bottom": "20px solid transparent",
                "position": "absolute",
                "left": "-19px"
            })
            $('.idea').css("background-color", "#8cae9b");
        }
    }
}


var end=[];

button.onclick = function () { //杀人之后确定按钮
    if (na == undefined) {
        alert("请选择玩家")
    } else {
        if (distribution[na].survival === 0) {
            if (distribution[na].role === "幽灵") { //幽灵不能杀自己人
                if (nm == 1) {
                    alert("不能自相残杀")
                }
            } else {
                var m = confirm("确定要杀此人吗？"); //杀人  确定改变状态，取消 重新选取
                if (m == true) {
                    rr = 2;
                    distribution[na].survival = 1;
                    civilianNum--;
                    sessionStorage.setItem('civilianNum', JSON.stringify(civilianNum)); //存值 
                    $('.top').eq(na).css("backgroundColor", "#83b09a");
                    sessionStorage.setItem('distribution', JSON.stringify(distribution)); //存值 
                    $(buttons1).show()
                    $(buttons).show()
                    $('.block').hide();
                    $(container).show();
                    $('body').css("backgroundColor", "#f0f0f0")
                    $(button).hide()
                    $('.result').eq(nic).val("黑天" + (na + 1) + "号玩家死亡," + "身份是水民");
                   
                    end.push(na+1);
                    sessionStorage.setItem('end', JSON.stringify(end)); //存值
                    if (civilianNum <= specterNum) {
                        alert("幽灵胜利")
                        window.location.href = "task-4-1.html";
                    }
                }
            }
        } else {
            alert("该玩家已死亡")
        }
    }
}


var na; //接收数组下标   

function btn(t, x) {
    na = t;
    if (rr == 1 || rr == 3) {
        if (distribution[na].survival === 0) {
            x.style.backgroundColor = "#8cae9b";
        }
    }
 

}

function t1(x) { //杀人页面方块变色
    //console.log(distribution[na])
    console.log(x)
}

function t2(x) { //恢复颜色
   
    if (distribution[na].survival === 0) {
        if (rr == 1 || rr == 3) {
            x.style.backgroundColor = "#f5c97b";
        }
    }
}



function dwg(a) { //亡灵发言
    if (ff == a) {
        if (nm == 1) {
            nm = 2;
            alert("月黑风高杀人夜");
        } else {
            alert("请按顺序操作！")
        }
        if (nm > 1) {
            $(".left-2").css({
                "border-right": "40px solid  #8cae9b",
                "border-top": "20px solid transparent",
                "border-bottom": "20px solid transparent",
                "position": "absolute",
                "left": "-19px"
            })
            $('.ghost').css("background-color", "#8cae9b");
        }
    }
}

function dws(a) { //玩家发言
    if (ff == a) {
        if (nm == 2) {
            nm = 3;
            alert("我坤坤绝不是凶手");
        } else {
            alert("请按顺序操作！")
        }
        if (nm > 2) {
            $(".left-3").css({
                "border-right": "40px solid  #8cae9b",
                "border-top": "20px solid transparent",
                "border-bottom": "20px solid transparent",
                "position": "absolute",
                "left": "-19px"
            })
            $('.game').css("background-color", "#8cae9b");

        }
    }
}

function dwa(a) { //投票
    if (ff == a) {
        if (nm == 3) {
            rr = 3;
            nm = 4;
            $(".options").hide();
            $('.block').show();
            $(container).hide();
            $('body').css("backgroundColor", "#29bde0")
            $(buttons1).hide()
            $(buttons).hide()
            $(button).hide()
            $(butt).show()
            $('.texts').text("投票");
            $(".combination").css("opacity", "1");

        } else {
            alert("请按顺序操作！")
        }

        if (nm > 3) {
            $(".left-4").css({
                "border-right": "40px solid  #8cae9b",
                "border-top": "20px solid transparent",
                "border-bottom": "20px solid transparent",
                "position": "absolute",
                "left": "-19px"
            })
            $('.vote').css("background-color", "#8cae9b");
        }

    }
}


var ens=[];
var en=[];
butt.onclick = function () { //投票确认按钮
    nm = 0;

    if (na == undefined) {
        alert("请选择玩家")
    } else {
        
        if (distribution[na].survival === 0) {

            ens.push(na+1);
            sessionStorage.setItem('ens', JSON.stringify(ens)); //存值

          


            if (distribution[na].role === "幽灵") {
                var k = confirm("确定要杀此人吗？");
                if (k == true) {
                    rr = 4;
                    distribution[na].survival = 1;
                    specterNum--;
                    sessionStorage.setItem('specterNum', JSON.stringify(specterNum)); //存值 
                    $('.top').eq(na).css("backgroundColor", "#83b09a");

                    en.push("幽灵");
                    sessionStorage.setItem('en', JSON.stringify(en)); //存值


                    if (specterNum == 0) {
                        window.location.href = "task-4-1.html";
                        alert("水民胜利")
                      
                    } else {
                        $('.block').hide();
                        $(container).show();
                        $(buttons1).show()
                        $('.texts').text("法官台本");
                        $('body').css("backgroundColor", "#f0f0f0")
                        $(buttons).show()
                        $(button).hide()
                        $(butt).hide()
                        adc()
                        nic++
                       
                       
                    }
                }

            } else {
                var m = confirm("确定要杀此人吗？"); //杀人  确定改变状态，取消 重新选取
                if (m == true) {
                    rr = 2;
                    distribution[na].survival = 1;
                    civilianNum--;
                    sessionStorage.setItem('civilianNum', JSON.stringify(civilianNum)); //存值 
                    $('.top').eq(na).css("backgroundColor", "#83b09a");
                    sessionStorage.setItem('distribution', JSON.stringify(distribution)); //存值 
                    $(buttons1).show()
                    $(buttons).show()
                    $('.block').hide();
                    $(butt).hide()
                    $(container).show();
                    $('body').css("backgroundColor", "#f0f0f0")
                    $(button).hide()
                    $('#receive').val("黑天" + (na + 1) + "号玩家死亡," + "身份是水民");
                    en.push("水民");
                    sessionStorage.setItem('en', JSON.stringify(en)); //存值


                    if (civilianNum <= specterNum) {
                        alert("幽灵胜利")
                        
                        window.location.href = "task-4-1.html";
                    } else {
                        adc()
                        nic++

                    }
                }
            }
        } else {
            alert("该玩家已死亡")

        }
    }

}


