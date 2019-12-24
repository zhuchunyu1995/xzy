var player = document.getElementById('player'); //玩家人数输入框
var sliding = document.getElementById('sliding'); // 滑块
var subtract = document.getElementById('subtract'); //减
var add = document.getElementById('add'); //加
var specter = document.getElementById('specter'); //幽灵人数
var civilian = document.getElementById('civilian'); //水民人数

function tr(value) { // 关联玩家人数和滑块
    var a = [player, sliding];
    for (var i = 0; i < a.length; i++) {
        a[i].value = value;
    }
      y=Math.round(value * 0.292);
      x=value-y;
      $(specter).val(y);
      $(civilian).val(x);
    return value;
}



subtract.onclick = function () { //减号
    var t = sliding;
    var s = t.value;
    if (s > 4) {
        s--;
    }

    
    y=Math.round(s * 0.292);
    x=s-y;
    $(specter).val(y);
    $(civilian).val(x);

    $(player).val(s);
    $(sliding).val(s);
   
}

add.onclick = function () { //加号
    var t = sliding;
    var s = t.value;
    if (s < 18) {
        s++;
    }
    
    y=Math.round(s * 0.292);
    x=s-y;

    $(specter).val(y);
    $(civilian).val(x);

    $(player).val(s);
    $(sliding).val(s);
}




