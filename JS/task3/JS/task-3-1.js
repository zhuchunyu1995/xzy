        
var num = sessionStorage.getItem('num');  //取值
num = JSON.parse(num);
    
var distribution = sessionStorage.getItem('distribution');  //取值
distribution = JSON.parse(distribution);

    var ko = document.getElementById('identity1').innerHTML = num ;
    var ki = document.getElementById('identity1').innerHTML = distribution ;
    console.log(ko); 
    console.log(distribution); 
   




    function tx(){


        $('.block-1').toggle()
        $('.block').toggle()

    
        $('.button-1').toggle()
        $('.button').toggle()

       }
    
    
       $('.block-1').hide()
       $('.button-1').hide()


        