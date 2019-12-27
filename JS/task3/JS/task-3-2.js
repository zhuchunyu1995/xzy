
        
var num = sessionStorage.getItem('num');  //取值
num = JSON.parse(num);
    
var distribution = sessionStorage.getItem('distribution');  //取值
distribution = JSON.parse(distribution);

console.log(num); 
console.log(distribution); 

sessionStorage.setItem('value', JSON.stringify(num));
sessionStorage.setItem('distribution', JSON.stringify(distribution));

$(".button").click(function() {
    location.href="task-3-1.html";
});

