//配置游戏
var gameConfig = {
    width: 500,
    height: 500,
    rows: 3,
    cols: 3,
    imgurl: "/img/lol.png",
    dom: document.getElementById("game"),
}
//游戏小块的大小
gameConfig.pieceWidth = gameConfig.width / gameConfig.cols;
gameConfig.pieceHight = gameConfig.height / gameConfig.rows;
//游戏小块的总数量
gameConfig.pieceNumber = gameConfig.rows * gameConfig.cols;

var blocks = [];
console.log(blocks)

function Block(left, top, visible) {
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

    if (!visible) {
        this.dom.style.display = "none";
    }
    gameConfig.dom.appendChild(this.dom);

    this.show = function () {
        this.dom.style.left = this.left + "px";
        this.dom.style.top = this.top + "px";
    }

    this.show();
}




//初始化游戏
function initGame() {

    initMain() //初始化容器
    initpiece() //初始化x小方块
    shuffle() //给数组洗牌

    //给数组洗牌
    function shuffle() {

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

console.log(gameConfig)