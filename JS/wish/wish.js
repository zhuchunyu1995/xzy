var container = document.querySelector(".container");
var inp = document.querySelector("input");
//当前视口的宽高
var xWidth = document.documentElement.clientWidth;
var xHeight = document.documentElement.clientHeight;
var moveDivWidth = 170;
var moveDivHeight = 170;
var zIndex = 1;
//点击鼠标左键触发
window.onmousedown = function (e) {
    var div = divMove(e.target);
    if (!div || e.button !== 0) {
        return;
    }
    var style = getComputedStyle(div);
    var divLeft = parseFloat(style.left);
    var divTop = parseFloat(style.top);
    div.style.zIndex = zIndex;
    zIndex++;
    var preX = e.pageX;
    var preY = e.pageY;
    //鼠标在元素上移动时触发
    window.onmousemove = function (e) {
        var newPreX = e.pageX - preX;
        var newPreY = e.pageY - preY;
        var newLeft = divLeft + newPreX;
        var newTop = divTop + newPreY;
        if (newLeft < 0) {
            newLeft = 0;
        }
        if (newLeft > document.documentElement.clientWidth - moveDivWidth) {
            newLeft = document.documentElement.clientWidth - moveDivWidth;
        }
        if (newTop < 0) {
            newTop = 0;
        }
        if (newTop > document.documentElement.clientHeight - moveDivHeight - 80) {
            newTop = document.documentElement.clientHeight - moveDivHeight - 80;
        }
        div.style.left = newLeft + "px";
        div.style.top = newTop + "px";

    }
    //抬起鼠标左键 或离开元素触发
    window.onmouseup = window.onmouseleave = function (e) {
        if (e.button === 0) {
            window.onmousemove = null;
        }
    }
}
//生成愿望
inp.onkeypress = function (e) {
    if (e.key === "Enter" && this.value.trim()) {
        createWish(this.value);
        this.value="";
        
    }
}

//关闭愿望
window.onclick = function (e) {
    if (e.target.parentElement && e.target.parentElement.className === "paper" && e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}

//获取div
function divMove(dom) {
    if (dom.className === "paper") {
        return dom;
    } else if (dom.parentElement && dom.parentElement.className === "paper" && dom.tagName === "P") {
        return dom.parentElement;
    }
}
//创造愿望
function createWish(words) {
    var div = document.createElement("div");
    div.className = "paper";
    div.innerHTML = `<p>${words}</p><span class="shut">X</span>`;
    //随机颜色
    div.style.backgroundColor = `rgba(${ranDomNumber(100,200)},${ranDomNumber(100,200)},${ranDomNumber(100,200)})`;
    //随机位置
    var ranDomLeft = document.documentElement.clientWidth - moveDivWidth;
    var ranDomTop = document.documentElement.clientHeight - moveDivHeight - 80;
    div.style.left = ranDomNumber(0, ranDomLeft) + "px";
    div.style.top = ranDomNumber(0, ranDomTop) + "px";
    container.appendChild(div);
}
//随机
function ranDomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

//视口发生改变时触发
window.onresize = function (e) {
    //改变后视口的差值
    var dx = document.documentElement.clientWidth - xWidth;
    var dy = document.documentElement.clientHeight - xHeight;
    for (var i = 0; i < container.children.length; i++) {
        var paper = container.children[i];
        var left = parseFloat(paper.style.left);
        var right = xWidth - moveDivWidth - left;
        var newLeft = left / (left + right) * dx;
        paper.style.left = left + newLeft + "px";

        var top = parseFloat(paper.style.top);
        var bottom = xHeight - moveDivHeight - top;
        var newTop = top / (top + bottom) * dy;
        paper.style.top = top + newTop + "px";
    }

    xWidth = document.documentElement.clientWidth;
    xHeight = document.documentElement.clientHeight;
}

function ranTxt() {
    var txt = ["世界和平", "万事如意", "一路顺风"];
    txt.forEach(function (item) {
        createWish(item)
    })
}
ranTxt()