function group(value) {           //关联滑块和玩家数量，赋值并分配幽灵平民人数
    var correlation = [player, sliding];
    for (var i = 0; i < correlation.length; i++) {
        correlation[i].value = value;
    }
    specterNum = Math.round(value * 0.292);   //取随机值，四舍五入，幽灵人数
    civilianNum = value - specterNum;           // 平民人数
    $(specter).val(specterNum);      //赋值给幽灵
    $(civilian).val(civilianNum);     //赋值给平民

    var distribution = [];         //空数组，接收幽灵和平民随机分配的数值
    for (var ghost = 0; ghost < specter.value; ghost++) {
        distribution.push("幽灵");
    }
    for (var citizen = 0; citizen < civilian.value; citizen++) {
        distribution.push("水民");
    }

    for (var i = 0; i < distribution.length; i++) {
        var r = Math.floor(Math.random() * distribution.length);
        var t = distribution[i];
        distribution[i] = distribution[r];
        distribution[r] = t;
    }

    console.log(distribution)
}


subtract.onclick = function () {    //减号 大于4的时候可以用
    var slide = sliding;
    var minus = slide.value;
    if (minus > 4) {
        minus--;
    }
    specterNum = Math.round(minus * 0.292);
    civilianNum = minus - specterNum;
    $(specter).val(specterNum);
    $(civilian).val(civilianNum);


    $(player).val(minus);
    $(sliding).val(minus);
}

add.onclick = function () { //加号  小于18可以用
    var slide = sliding;
    var minus = slide.value;
    if (minus < 18) {
        minus++;
    }

    specterNum = Math.round(minus * 0.292);
    civilianNum = minus - specterNum;

    $(specter).val(specterNum);
    $(civilian).val(civilianNum);

    $(player).val(minus);
    $(sliding).val(minus);
}

function deal() {     //判断人数
    var player = document.getElementById('player');
    var judge = player.value;
    if (judge < 4 || judge > 18) {
        alert('请输入正确的玩家数量')
        $("#player").val("4");
    }

}

document.onkeydown = function (event) {     //键盘事件
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 27) { // 按 Esc 
        //要做的事情
    }

    if (e && e.keyCode == 13) { // enter 键
        deal()
    }
}


