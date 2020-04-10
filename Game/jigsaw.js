//配置游戏
var gameConfig = {
    width: 500,
    height: 500,
    rows: 3,
    cols: 3,
    isOver:false, //游戏是否结束
    imgurl: "/img/lol.png",
    dom: document.getElementById("game"),
}
//游戏小块的大小
gameConfig.pieceWidth = gameConfig.width / gameConfig.cols;
gameConfig.pieceHight = gameConfig.height / gameConfig.rows;
//游戏小块的总数量
gameConfig.pieceNumber = gameConfig.rows * gameConfig.cols;

var blocks = [];

function isEqual(a, b) {
    return parseInt(a) === parseInt(b);
}
function Block(left, top, isVisible) {
    this.left = left; //变化的坐标
    this.top = top;
    this.correctLeft = this.left;
    this.correctTop = this.top;
    this.dom = document.createElement("div");
    this.dom.style.width = gameConfig.pieceWidth + "px";
    this.dom.style.height = gameConfig.pieceHight + "px";
    this.dom.style.background = `url(${gameConfig.imgurl}) -${this.correctLeft}px -${this.correctTop}px`;
    this.dom.style.position = "absolute";
    this.dom.style.border = "1px solid #fff";
    this.dom.style.boxSizing = "border-box";
    this.dom.style.cursor = "pointer";
    this.dom.style.transition=".1s";//过渡动画
    this.isVisible = isVisible;
    if (!isVisible) {
        this.dom.style.display = "none";
    }
    gameConfig.dom.appendChild(this.dom);
    this.show = function () {
        this.dom.style.left = this.left + "px";
        this.dom.style.top = this.top + "px";
    }
    this.isCorrect=function(){
        return isEqual(this.left, this.correctLeft) &&isEqual(this.top, this.correctTop);
    }
    this.show();
}


//初始化游戏
function initGame() {
    initMain() //初始化容器
    initpiece() //初始化x小方块
    shuffle() //给数组洗牌
    pitch() //点击事件
    isWin() //判断胜负
    //点击事件
    function pitch() {
        var inVisible = blocks.find(function (b) {
            return !b.isVisible;
        })
        blocks.forEach(function (b) {
            b.dom.onclick = function () {
                if(gameConfig.isOver){
                    return
                }
                if (b.top === inVisible.top && isEqual(Math.abs(b.left - inVisible.left), gameConfig.pieceWidth) ||
                    b.left === inVisible.left && isEqual(Math.abs(b.top - inVisible.top), gameConfig.pieceHight)) {
                    exchange(b, inVisible)
                    isWin();
                }
            }
        })
    }
    //交换
    function exchange(b1, b2) {
        var temp = b1.left;
        b1.left = b2.left;
        b2.left = temp;

        temp = b1.top;
        b1.top = b2.top;
        b2.top = temp;

        b1.show();
        b2.show();
    }
    
    //判断胜负
    function isWin() {
        var inBlocks=blocks.filter(function(b){
            return !b.isCorrect();
        })
        if(inBlocks.length===0){
            //游戏结束 去掉所有边框
           blocks.forEach(function(b){
               b.dom.style.border="none";
               b.dom.style.display="block";
               gameConfig.isOver=true;
           })

        }
    }
    //生成随机数
    function Random(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }
    //给数组洗牌
    function shuffle() {
        for (var i = 0; i < blocks.length - 1; i++) {
            var index = Random(0, blocks.length - 2);
            exchange(blocks[i], blocks[index]);
        }
    }
    //初始化小方块
    function initpiece() {
        for (var i = 0; i < gameConfig.rows; i++) {
            for (var j = 0; j < gameConfig.cols; j++) {
                var isVisible = true;
                if (i === gameConfig.rows - 1 && j === gameConfig.cols - 1) {
                    isVisible = false;
                }
                var b = new Block(j * gameConfig.pieceWidth, i * gameConfig.pieceHight, isVisible);
                blocks.push(b);
            }
        }
    }
    //初始化容器
    function initMain() {
        gameConfig.dom.style.width = gameConfig.width + "px";
        gameConfig.dom.style.height = gameConfig.height + "px";
        gameConfig.dom.style.border = "2px solid #ccc";
        gameConfig.dom.style.position = "relative";
    }
}
initGame()