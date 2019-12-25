
function tr(value) { // 关联玩家人数和滑块
    var a = [player, sliding];
    for (var i = 0; i < a.length; i++) {
        a[i].value = value;
    }

    
    var kk=[];    //随机生成赋值的数组4-18
        for(i=0;i<value;i++) {
         kk[i]=i;  
    }




        kk.sort(function(){
          var  y=Math.round(i * 0.292);
          var  x=i-y;
            $(specter).val(y);
            $(civilian).val(x);
            return Math.random() - 0.5;

        });

        console.log(kk)

        var identity=[];
        
        for (var k = 0; k < specter.value; k++) {
            identity.push("幽灵");
            
        }
         for (var c = 0; c < civilian.value; c++) {
            identity.push("水民");
    
        }
        identity.sort(function(){
            return Math.random() - 0.5;
        });
        console.log(identity);

        return identity;

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

function acquire() {
    var pko=document.getElementById('player');
    var s=pko.value;
   if(s<4 || s>18) {
       alert('请输入正确的玩家数量')
   }

}



document.onkeydown=function(event){
               var e = event || window.event || arguments.callee.caller.arguments[0];
               if(e && e.keyCode==27){ // 按 Esc 
                    //要做的事情
              }
                     
                if(e && e.keyCode==13){ // enter 键
                    acquire()
               }
           }


