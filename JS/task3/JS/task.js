var num = JSON.parse(sessionStorage.getItem('num')); //取值
var distribution = JSON.parse(sessionStorage.getItem('distribution')); //取值
var specterNum = JSON.parse(sessionStorage.getItem('specterNum')); //取值
var civilianNum = JSON.parse(sessionStorage.getItem('civilianNum')); //取值
sessionStorage.setItem('specter', JSON.stringify(specterNum)); //存值
sessionStorage.setItem('civilian', JSON.stringify(civilianNum)); //存值
$(container).hide()
$(buttons).hide()
$(button).hide()
$(butt).hide()
$(function () {
    $(".ans").click(function () {
        window.location.href = "task-2-1.html";
    });
});
$(function () {
    $(".ank").click(function () {
        var x;
        var r = confirm("确定要退出本局游戏吗？");
        if (r == true) {
            x = window.location.href = "task-2-1.html";
        }
    });
});
for (let i = 0; i < num.length; i++) { //循环出的方块
    var block = '<div class="block-1" id="boxes-1">' +
        '<div class="block-2">' +
        '<div class="top" onclick="btn(' + i + ')" >' +
        '<p class="sf">' + distribution[i].role + '</p>' +
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
var step = 1; //判断数字是几执行什么操作
buttons1.onclick = function () { //切换到法官台本页面 改变标题和页尾背景色
    if (step == 1) { //跳转到法官台本页面 
        step = 2;
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
        page()
    } else if (step == 2) { //step等于2时 按钮功能改变，点击确定退出游戏，取消 继续游戏
        var x;
        var r = confirm("确定要退出本局游戏吗？");
        if (r == true) {
            x = window.location.href = "task-2-1.html";
        }
    }
}
function examine() { //法官查看
    if (step == 2) {
        step = 3;
        $('.block').show();
        $(container).hide();
        $('body').css("backgroundColor", "#29bde0")
        $('.texts').text("法官日志");
        $(buttons1).hide()
        $(buttons).text("返回游戏")
        $('.combination').eq(na).css("display", "none");
    } else if (step = 3) {
        step = 2;
        $('.block').hide();
        $(container).show();
        $(buttons1).show()
        $('.texts').text("法官台本");
        $(buttons).text("法官日志")
        $('body').css("backgroundColor", "#f0f0f0")
    }
}
var situation = 0; //方块变色
var large = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]; //进展天数
var day = 0; //天数变化
var nice = 0;
nic = 0; //死亡状态的下标 循环加
function page() {
    day++;
    var box = '<li>' +
        '<label  class="day">' + '第' + large[day] + '天' + '</label>' +
        '<div class="options">' +
        '<i class="triangle-top">' + '</i>' +
        '<div class="discuss">' +
        '<div class="sun">' +
        '<img src="./img/moon.png">' +
        '</div>' +
        '<div class="block-s  idea" onclick="murder(' + day + ')" >' +
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
        '<div class="block-s ghost" onclick="decedent(' + day + ')">' +
        '<i class="triangle-left left-2">' + '</i>' +
        '亡灵发言' +
        '</div>' +
        '</div>' +
        '<div class="discuss">' +
        '<div class="sun">' +
        '<img src="./img/sun.png">' +
        '<div class="kkk">' + '</div>' +
        '</div>' +
        '<div class="block-s game" onclick="discuss(' + day + ')">' +
        '<i class="triangle-left left-3">' + '</i>' +
        '玩家发言' +
        '</div>' +
        '</div>' +
        '<div class="discuss">' +
        '<div class="sun">' +
        '<img src="./img/sun.png">' +
        '<div class="kkk">' + '</div>' +
        '</div>' +
        '<div class="block-s vote"  onclick="vot(' + day + ')">' +
        '<i class="triangle-left left-4">' + '</i>' +
        '投票' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</li>';
    $(".bob").append(box);
    $(function () {
        $("li").eq(nic).on("click", "label", function () {
            $(this).next('.options').slideToggle();
        });
    });
}
var clk = 0; //判断点击
function murder(a) { //杀人模块
    if (day == a) {
        if (clk == 0) {
            clk = 1;
            situation = 1;
            nice++;
            sessionStorage.setItem('nice', JSON.stringify(nice)); //存值 
            $('.block').show();
            $('.texts').text("月黑风高杀人夜");
            $(container).hide();
            $('body').css("backgroundColor", "black");
            $(buttons1).hide()
            $(buttons).hide()
            $(button).show()
            $('.combination').eq(na).css("display", "none");
            for (let x = 0; x < num.length; x++) { //循环遍历
                if (distribution[x].role === "水民") { //等于0时可以点击 
                    $('.sf').eq(x).text("玩家")
                }
            }
        } else {
            alert("请按顺序操作！")
        }
        if (clk > 0) {
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
function fs() {
    $(buttons1).show()
    $(buttons).show()
    $('.block').hide();
    $(container).show();
    $(button).hide()
}
var end = []; //接收死者的下标
button.onclick = function () { //杀人之后确定按钮
    if (na == undefined) {
        alert("请选择玩家")
    } else {
        if (distribution[na].survival === 0) {
            if (distribution[na].role === "幽灵") { //幽灵不能杀自己人
                if (clk == 1) {
                    alert("不能自相残杀")
                }
            } else {
                var m = confirm("确定要杀此人吗？"); //杀人  确定改变状态，取消 重新选取
                if (m == true) {
                    situation = 2;
                    distribution[na].survival = 1;
                    civilianNum--;
                    sessionStorage.setItem('civilianNum', JSON.stringify(civilianNum)); //存值 
                    sessionStorage.setItem('distribution', JSON.stringify(distribution)); //存值 
                    fs()
                    $('body').css("backgroundColor", "#f0f0f0")
                    $('.texts').text("法官台本");
                    $('.result').eq(nic).val("黑天" + (na + 1) + "号玩家死亡," + "身份是水民");
                    end.push(na + 1);
                    sessionStorage.setItem('end', JSON.stringify(end)); //存值
                    for (let x = 0; x < num.length; x++) { //循环遍历
                        if (distribution[x].role === "水民") { //等于0时可以点击 
                            $('.sf').eq(x).text(distribution[x].role)
                        }
                    }
                    if (civilianNum <= specterNum) {
                        window.location.href = "task-4-1.html";
                        alert("幽灵胜利")
                    }
                }
            }
        } else {
            alert("该玩家已死亡")
            $('.top').eq(na).css("backgroundColor", "#83b09a");
            $('.combination').eq(na).css("display", "none");
        }
    }
}
var na; //接收数组下标   
function btn(t) {
    na = t;
    if (situation == 1 || situation == 3) { //在指定页面可以点击
        for (let x = 0; x < num.length; x++) { //循环遍历颜色
            if (distribution[x].survival === 0) { //等于0时可以点击 
                $('.top').eq(x).css("backgroundColor", "#f5c97b");
                $('.combination').eq(x).css("display", "none");
            }
            $('.top').eq(na).css("backgroundColor", "#83b09a"); //点击变色
            $('.combination').eq(na).css("display", "block"); //点击出现
        }
    }
}
function decedent(b) { //亡灵发言
    if (day == b) {
        if (clk == 1) {
            clk = 2;
            alert("月黑风高杀人夜");
        } else {
            alert("请按顺序操作！")
        }
        if (clk > 1) {
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
function discuss(c) { //玩家发言
    if (day == c) {
        if (clk == 2) {
            clk = 3;
            alert("我坤坤绝不是凶手");
        } else {
            alert("请按顺序操作！")
        }
        if (clk > 2) {
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
function vot(d) { //投票
    if (day == d) {
        if (clk == 3) {
            situation = 3;
            clk = 4;
            $(".options").hide();
            $('.block').show();
            $(container).hide();
            $('body').css("backgroundColor", "#29bde0")
            $(buttons1).hide()
            $(buttons).hide()
            $(button).hide()
            $(butt).show()
            $('.texts').text("投票");
            $('.combination').eq(na).css("display", "none");
            for (let x = 0; x < num.length; x++) { //循环遍历
                if (distribution[x].role) { //等于0时可以点击 
                    $('.sf').eq(x).text("玩家")
                }
            }
        } else {
            alert("请按顺序操作！")
        }
        if (clk > 3) {
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
var ens = []; //接收死者下标
var en = []; //接收死者身份
butt.onclick = function () { //投票确认按钮
    clk = 0;
    if (na == undefined) {
        alert("请选择玩家")
    } else {
        if (distribution[na].survival === 0) {
            ens.push(na + 1);
            sessionStorage.setItem('ens', JSON.stringify(ens)); //存值
            if (distribution[na].role === "幽灵") {
                var k = confirm("确定要杀此人吗？");
                if (k == true) {
                    situation = 4;
                    distribution[na].survival = 1;
                    specterNum--;
                    sessionStorage.setItem('specterNum', JSON.stringify(specterNum)); //存值 
                    en.push("幽灵");
                    sessionStorage.setItem('en', JSON.stringify(en)); //存值
                    if (specterNum == 0) {
                        window.location.href = "task-4-1.html";
                        alert("水民胜利")
                    } else {
                        $('.texts').text("法官台本");
                        $('body').css("backgroundColor", "#f0f0f0")
                        fs()
                        $(butt).hide()
                        page()
                        nic++
                        for (let x = 0; x < num.length; x++) { //循环遍历
                            if (distribution[x].role) { //等于0时可以点击 
                                $('.sf').eq(x).text(distribution[x].role)
                            }
                        }
                    }
                }
            } else {
                var m = confirm("确定要杀此人吗？"); //杀人  确定改变状态，取消 重新选取
                if (m == true) {
                    situation = 2;
                    distribution[na].survival = 1;
                    civilianNum--;
                    sessionStorage.setItem('civilianNum', JSON.stringify(civilianNum)); //存值 
                    sessionStorage.setItem('distribution', JSON.stringify(distribution)); //存值 
                    $('body').css("backgroundColor", "#f0f0f0")
                    fs()
                    $(butt).hide()
                    $('#receive').val("黑天" + (na + 1) + "号玩家死亡," + "身份是水民");
                    en.push("水民");
                    sessionStorage.setItem('en', JSON.stringify(en)); //存值
                    if (civilianNum <= specterNum) {
                        window.location.href = "task-4-1.html";
                        alert("幽灵胜利")
                    } else {
                        page()
                        nic++
                        for (let x = 0; x < num.length; x++) { //循环遍历
                            if (distribution[x].role) { //等于0时可以点击 
                                $('.sf').eq(x).text(distribution[x].role)
                            }
                        }
                    }
                }
            }
        } else {
            alert("该玩家已死亡")
            $('.top').eq(na).css("backgroundColor", "#83b09a");
            $('.combination').eq(na).css("display", "none");
        }
    }
}