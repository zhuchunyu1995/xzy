

document.getElementById("an").addEventListener("click", function ()
  
{
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //数组0到9
        var result = []; //空数组
        var ranNum = 3; //变量值为3
        for (var i = 0; i < ranNum; i++) { //i等于0，i小于数组ranNum5，i循环加1
            var ran = Math.floor(Math.random() * (arr.length - i)); // 变量ran的值等于0到1 乘以arr数组长度
            result.push(arr[ran]); //向数组result里输入上面乘积的数字
            arr[ran] = arr[arr.length - i - 1]; //arr最大长度减去0和1，覆盖被抽走的数字
        };
     return result;
    
    }
    
    
    
    );
   



document.getElementById("ans").addEventListener("click", function ()

    {
      document.getElementsByClassName("block")[1].style.backgroundColor = "#999";

    });







