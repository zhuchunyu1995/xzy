
player.oninput=function () {
    var t=player;
    var s=t.value; 
    $(sliding).val(s); 

    y=Math.round(s * 0.292);
    x=s-y;
    $(specter).val(y);
    $(civilian).val(x);
}

sliding.oninput=function () {
    var t=sliding;
    var s=t.value;  
  $(player).val(s);  

  y=Math.round(s * 0.292);
  x=s-y;
  $(specter).val(y);
  $(civilian).val(x);

}

subtract.onclick=function () {       //减号
    var t=sliding;
    var s=t.value;
    if(s>4) {
        s--;
    }
    y=Math.round(s * 0.292);
    x=s-y;
    $(specter).val(y);
    $(civilian).val(x);
    $(player).val(s);
    $(sliding).val(s);
}
add.onclick = function () {          //加号
    var t = sliding; 
    var s = t.value;
    if (s < 18) {
        s++;
    }
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
