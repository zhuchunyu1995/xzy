var num = sessionStorage.getItem('num');  //取值
num = JSON.parse(num);
var distribution = sessionStorage.getItem('distribution');  //取值
distribution = JSON.parse(distribution);

sessionStorage.setItem('num', JSON.stringify(num));  //存值 
sessionStorage.setItem('distribution', JSON.stringify(distribution)); //存值



for(i=0;i<num.length;i++) {
    var block='<div class="block-1" id="boxes-1">'+
    '<div class="block-2">'+
    '<div class="top">'+
    '<p>'+distribution[i]+'</p>'+
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
 

$(function() {
    $(".button").click(function() {
        window.location.href="task-4-1.html";
    });
});





    
