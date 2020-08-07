
var datum = document.getElementsByTagName('input');



function btn() {
    var xhr = new XMLHttpRequest();
    
    var account = datum[0].value;
    var password = datum[1].value;
    
  

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
        }
    }


    xhr.open("post", "/carrots-admin-ajax/a/login", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   
    xhr.send("name=" + account + "&pwd=" + password);
  

}
