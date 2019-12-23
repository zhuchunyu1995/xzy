var player=document.getElementById('player');  //玩家人数输入框
var sliding=document.getElementById('sliding');// 滑块
var subtract=document.getElementById('subtract');//减
var add=document.getElementById('add');  //加
var specter=document.getElementById('specter'); //幽灵人数
var civilian=document.getElementById('civilian');//水民人数



function tr(value){            // 关联玩家人数和滑块
    var a=[player,sliding];
    for(var i=0;i<a.length;i++){
        a[i].value=value;}
        
    

        var b=specter.value;  
        var c=civilian.value; 
        if(value==4 || value==5) {
            b=1;
            c=value-1; 
            $(specter).val(b);
            $(civilian).val(c);   
        }
        else if(value==6 || value==7 || value==8) {
            b=2;
            c=value-2; 
            $(specter).val(b);
            $(civilian).val(c);
        }
        else if(value==9 || value==10 || value==11) {
            b=3;
            c=value-3; 
            $(specter).val(b);
            $(civilian).val(c);
        }
        else if(value==12 || value==13 || value==14  || value==15) {
            b=4;
            c=value-4; 
            $(specter).val(b);
            $(civilian).val(c);
        }
        else if(value==16 || value==17 || value==18) {
            b=5;
            c=value-5; 
            $(specter).val(b);
            $(civilian).val(c);
        }


        if(value<4) {
            alert('最少4人开哦');
        }
        else if(value>18) {
            alert('人有点多哦');
        }   
         return value;   
}


subtract.onclick = function () {   //加号
    var t=sliding;
    var s=t.value;
    if(s>4) {
        s--;
        t.value=s;
    }
   
    $(player).val(s);  

    $(specter).val(s);
    $(civilian).val(s);
}

add.onclick = function () {   //减号
   var t=sliding;
   var s=t.value;
   if(s<18) {
    s++;
    t.value=s;
}
   t.value=s;   
   $(player).val(s);
   $(specter).val(s);
   $(civilian).val(s);
}





