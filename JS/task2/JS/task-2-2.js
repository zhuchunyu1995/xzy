function tr(value){
    var a=[document.getElementById('player'),document.getElementById('sliding')];
    for(var i=0;i<a.length;i++){
        a[i].value=value;}
            if(value<4) {
                alert('最少4人开哦');
            }
            else if(value>18) {
                alert('人有点多哦');
            }    
        
         return value;       
}

 
//滑动条监听，实现滑动条和输入框人数同步功能
input_range.oninput = function () {
    input_text.value = input_range.value;
   
}

input_text.oninput = function () {
    input_range.value = input_text.value;
}



















$("#subtract").click(function () {
    var move = $(".sliding-1")[0];
    var a = move.value;
    if (a > 1) {
        a--;
        move.value = a;

    } else {
        move.value = 1;
    }

  

});


$("#ad").click(function () {
    var mov = $(".sliding-1")[0];
    var b = mov.value;
    b++;
    mov.value=b;
    console.log(b)

});

