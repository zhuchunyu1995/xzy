var config = {
    imgWidth: 520,
    dotWidth: 12,
    dom: {
        divBanner: document.querySelector(".banner"),
        divImgs: document.querySelector(".imgs"),
        divArrows: document.querySelector(".arrows"),
        divDots: document.querySelector(".dots")
    },
    imgIndex: 0, //图片下标索引 0~imgNumber-1
    timer: {
        total: 300,
        duration: 16,
        id: null
    },
    autoTimer: null //自动移动的计时器
}

config.imgNumber = config.dom.divImgs.children.length;

/**
 * 初始化imgs和小圆点宽度
 */
function initWidth() {
    config.dom.divImgs.style.width = config.imgWidth * (config.imgNumber + 2) + "px";
    config.dom.divDots.style.width = config.dotWidth * config.imgNumber + "Px";
}
/**
 * 初始化生成小圆点 和克隆图片
 */
function initDots() {
    //生成小圆点
    for (var i = 0; i < config.imgNumber; i++) {
        var dot = document.createElement("span");
        config.dom.divDots.appendChild(dot);
    }
    //克隆图片
    var img = config.dom.divImgs.children;
    var first = img[0];
    var last = img[img.length - 1];
    var newImg = first.cloneNode(true);
    config.dom.divImgs.appendChild(newImg);
    newImg = last.cloneNode(true);
    config.dom.divImgs.insertBefore(newImg, first);
}
/**
 * 初始化图片显示位置
 */
function initPosition() {
    var index = (-config.imgIndex - 1) * config.imgWidth;
    config.dom.divImgs.style.marginLeft = index + "px";
}
/**
 * 初始化小圆点选中状态
 */
function initDotStatus() {
    for (var i = 0; i < config.dom.divDots.children.length; i++) {
        if (i === config.imgIndex) {
            config.dom.divDots.children[i].className = "active";
        } else {
            config.dom.divDots.children[i].className = "";
        }
    }
}
/**
 * 初始化汇总函数
 */
function init() {
    initWidth();
    initDots();
    initPosition();
    initDotStatus();
}

init();

/**
 * 
 * @param {*} index 切换到的图片下标索引
 * @param {*} direction 方向
 */
function switchTo(index, direction) {
    if (index === config.imgIndex) {
        return;
    }
    if (!direction) {
        direction = "left";
    }
    //切换到目标位置
    var switchLeft = (-index - 1) * config.imgWidth;
    switchAnimation();
    //更新下标和选中状态
    config.imgIndex = index;
    initDotStatus();

    function switchAnimation() {
        //停止计时器
        stopAnimation();
        //动画运动次数
        var number = Math.ceil(config.timer.total / config.timer.duration);
        //当前次数
        var curnumber = 0;
        //总宽度
        var totaWidth = config.imgWidth * config.imgNumber;
        //记录移动的marginLeft
        var recordLeft;
        //当前的marginLeft
        var nowLeft = parseFloat(getComputedStyle(config.dom.divImgs).marginLeft);
        if (direction === "left") {
            if (switchLeft < nowLeft) {
                recordLeft = switchLeft - nowLeft;
            } else {
                recordLeft = -(totaWidth - Math.abs(switchLeft - nowLeft));
            }
        } else {
            if (switchLeft > nowLeft) {
                recordLeft = switchLeft - nowLeft;
            } else {
                recordLeft = totaWidth - Math.abs(switchLeft - nowLeft);
            }
        }
        //每次移动的距离
        var everyLeft = recordLeft / number;
        //计时器
        config.timer.id = setInterval(function () {
            //移动的距离
            nowLeft += everyLeft;
            if (direction === "left" && Math.abs(nowLeft) > totaWidth) {
                nowLeft += totaWidth;
            } else if (direction === "right" && Math.abs(nowLeft) < config.imgWidth) {
                nowLeft -= totaWidth;
            }
            //重新赋值marginLeft
            config.dom.divImgs.style.marginLeft = nowLeft + "px";
            curnumber++;
            if (curnumber === number) {
                stopAnimation();
            }
        }, config.timer.duration);
    }
    /**
     * 清除计时器
     */
    function stopAnimation() {
        clearInterval(config.timer.id);
        config.timer.id = null;
    }
}
config.dom.divArrows.onclick = function (e) {
    if (e.target.classList.contains("left")) {
        toLeft();
    } else if (e.target.classList.contains("right")) {
        toRight();
    }
}
/**
 * 左箭头
 */
function toLeft() {
    var index = config.imgIndex - 1;
    if (index < 0) {
        index = config.imgNumber - 1;
    }
    switchTo(index, "right")
}
/**
 * 右箭头
 */
function toRight() {
    var index = config.imgIndex + 1;
    if (index > config.imgNumber - 1) {
        index = 0;
    }
    switchTo(index, "left")
}

//点击小圆点切换图片
config.dom.divDots.onclick = function (e) {
    if (e.target.tagName === "SPAN") {
        var index = Array.from(this.children).indexOf(e.target);
        switchTo(index, index > config.imgIndex ? "left" : "right");
    }
}
//自动移动的计时器
config.autoTimer = setInterval(toRight, 2000);

//鼠标进入移除计时器
config.dom.divBanner.onmouseenter = function () {
    clearInterval(config.autoTimer);
    config.autoTimer = null;
}

//鼠标离开添加计时器
config.dom.divBanner.onmouseleave = function () {
    if (config.autoTimer) {
        return;
    }
    config.autoTimer = setInterval(toRight, 2000);
}