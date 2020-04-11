//游戏配置
var gameConfig = {
    width: 400,
    height: 300,
    rows: 3,
    cols: 3,
    imgurl: "./img/gxq.jpg",
    dom: document.getElementById("game"),
    isOver: false,
    begin: document.getElementById("begin"), //重新随机
    recover: document.getElementById("recover") //恢复拼图
}
//游戏小块的宽高
gameConfig.pieceWidth = gameConfig.width / gameConfig.cols;
gameConfig.pieceHeight = gameConfig.height / gameConfig.rows;

//游戏小块的数量
gameConfig.pieceNumber = gameConfig.rows * gameConfig.cols;

var blocks = [];
console.log(blocks)

    //重新随机
    gameConfig.begin.onclick = function () {
        exchange()
        blocks.forEach(function (a, b, c) {
            a.dom.style.border = "1px solid #fff";
            a.dom.style.boxSizing = "border-box";
            c[c.length - 1].dom.style.display = "none";
        })
        gameConfig.isOver=false;
      
    }

    //恢复拼图
    gameConfig.recover.onclick = function () {
        blocks.forEach(function (item) {
            item.s()
            item.dom.style.border = "none";
            item.dom.style.display = "block";
        })
        gameConfig.isOver=true;
    }

//转换成整数
function integer(a, b) {
    return parseInt(a) === parseInt(b);
}

//根据坐标生成方块
function Block(left, top, isVisible) {
    this.left = left;
    this.top = top;
    this.correctLeft = this.left;
    this.correctTop = this.top;
    this.dom = document.createElement("div");
    this.dom.style.width = gameConfig.pieceWidth + "px";
    this.dom.style.height = gameConfig.pieceHeight + "px";
    this.dom.style.background = `url(${gameConfig.imgurl}) -${this.correctLeft}px -${this.correctTop}px`;
    this.dom.style.position = "absolute";
    this.dom.style.border = "1px solid #fff";
    this.dom.style.boxSizing = "border-box";
    this.isVisible = isVisible;
    this.dom.style.cursor = "pointer";
    this.dom.style.transition = ".1s"; //css属性变化的时候，在0.5秒中内完成
    if (!isVisible) {
        this.dom.style.display = "none";
    }
    gameConfig.dom.appendChild(this.dom)
    //恢复拼图
    this.s = function () {
        this.dom.style.left = this.correctLeft + "px";
        this.dom.style.top = this.correctTop + "px"
    }
    //打乱坐标顺序
    this.show = function () {
        this.dom.style.left = this.left + "px";
        this.dom.style.top = this.top + "px"
    }
    //是否回到了正确的位置
    this.end = function () {
        return integer(this.left, this.correctLeft) && integer(this.top, this.correctTop)
    }

    this.show()
}

//随机数
function ranDom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

//交换
function exchangeIndex(b1, b2) {
    var temp = b1.left;
    b1.left = b2.left;
    b2.left = temp;
    temp = b1.top;
    b1.top = b2.top;
    b2.top = temp;

    b1.show()
    b2.show();
}

//交换
function exchange() {
    for (var i = 0; i < blocks.length - 1; i++) {
        var index = ranDom(0, blocks.length - 2);
        exchangeIndex(blocks[i], blocks[index])
    }
}

//初始化游戏
function initGame() {
    Main(); //初始化容器
    piece() //初始化小方块
    pitch();

    //游戏结束判定
    function gameOver() {
        var meet = blocks.filter(function (item) {
            return !item.end()
        })
        if (meet.length === 0) {
            gameConfig.isOver = true;
            blocks.forEach(function (item) {
                item.dom.style.border = "none";
                item.dom.style.display = "block";
            })
        }
    }
    //点击事件
    function pitch() {
        var inVisible = blocks.find(function (b) {
            return !b.isVisible;
        })
        blocks.forEach(function (b) {
            b.dom.onclick = function () {
                if (gameConfig.isOver) {
                    return
                }
                if (b.top === inVisible.top && integer(Math.abs(b.left - inVisible.left), gameConfig.pieceWidth) || b.left === inVisible.left && integer(Math.abs(b.top - inVisible.top), gameConfig.pieceHeight)) {
                    exchangeIndex(b, inVisible)
                }
                gameOver();
            }
        })
    }
    //初始化小方块
    function piece() {
        for (var i = 0; i < gameConfig.rows; i++) {
            for (var j = 0; j < gameConfig.cols; j++) {
                var isVisible = true;
                if (i === gameConfig.rows - 1 && j === gameConfig.cols - 1) {
                    isVisible = false;
                }
                var b = new Block(j * gameConfig.pieceWidth, i * gameConfig.pieceHeight, isVisible)
                blocks.push(b)
            }
        }
    }

    //初始化容器
    function Main() {
        gameConfig.dom.style.width = gameConfig.width + "px";
        gameConfig.dom.style.height = gameConfig.height + "px";
        gameConfig.dom.style.border = "2px solid #ccc";
        gameConfig.dom.style.position = "relative";
    }
}
initGame()