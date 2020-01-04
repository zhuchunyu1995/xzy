var num = sessionStorage.getItem('num'); //取值
num = JSON.parse(num);
var distribution = sessionStorage.getItem('distribution'); //取值
distribution = JSON.parse(distribution);

sessionStorage.setItem('num', JSON.stringify(num)); //存值 



var na;

for (var i = 0; i < num.length; i++) {
    var block = '<div class="block-1">' +
        '<div class="block-2">' +
        '<div class="top"  onclick="btn(' + i + ')">' +
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

    var but = '<button type="button" class="button" type="submit" onclick="bus()">确定</button>';

}

$("#end").append(but);


function btn(t) {
    na = t;
    console.log(t, na)
}

function bus() {
    if (distribution[na].survival === 0) {
        if (distribution[na].role === "幽灵") {
            alert("不能自相残杀")
        }else {
            var m = confirm("确定要杀此人吗？");
            if (m == true) {
                distribution[na].survival = 1;
                $('.top').eq(na).css("backgroundColor", "#83b09a");
                sessionStorage.setItem('distribution', JSON.stringify(distribution)); //存值 
                window.location.href="task-4-1.html";
            }
        }
    } else {
        alert("该玩家已死亡")
    }
}



