//游戏对象
var game = {
    dom: document.querySelector(".game"),
    over: document.querySelector(".over"),
    isOver: false,
    isPause: true,
    start: function () {
        sky.timer.start(); //天空
        land.timer.start(); //大地
        bird.WingTimer.start(); //小鸟煽动翅膀
        bird.dropTimer.start(); //小鸟下坠
        createPipe.produceTimer.start(); //生成多根柱子
        createPipe.moveTimer.start(); //移动柱子
        detectionPipe.timer.start(); //碰撞检测
        this.isPause = false;
    },
    stop: function () {
        sky.timer.stop();
        land.timer.stop();
        bird.WingTimer.stop();
        bird.dropTimer.stop();
        createPipe.produceTimer.stop();
        createPipe.moveTimer.stop();
        detectionPipe.timer.stop();
        this.isPause = true;
    }
}
game.width = game.dom.clientWidth;
game.height = game.dom.clientHeight;


//点击事件
window.onkeydown = function (e) {
    if (e.key === "Enter") {
        if (game.isOver) {
            location.reload();
        }
        if (game.isPause) {
            game.start();
        } else {
            game.stop();
        }
    } else if (e.key === " ") {
        bird.jump();
    }
}


/**
 * 得到一个计时器
 * @param {*} duration 
 * @param {*} thisArg 
 * @param {*} callback 
 */
function getTimer(duration, thisArg, callback) {
    var timer;
    return {
        start: function () {
            if (timer) {
                return
            }
            timer = setInterval(callback.bind(thisArg), duration);
        },
        stop: function () {
            clearInterval(timer);
            timer = null;
        }
    }
}

//天空
var sky = {
    dom: document.querySelector(".game .sky"),
    left: 0
}
sky.timer = getTimer(16, sky, function () {
    this.left--;
    if (this.left === -game.width) {
        this.left = 0;
    }
    this.dom.style.left = this.left + "px";
});
//大地
var land = {
    dom: document.querySelector(".game .land"),
    height: 112,
    left: 0
}
land.top = game.height - land.height;

land.timer = getTimer(16, land, function () {
    this.left -= 2;
    if (this.left === -game.width) {
        this.left = 0;
    }
    this.dom.style.left = this.left + "px";
});

var bird = {
    dom: document.querySelector(".game .bird"),
    width: 33,
    height: 26,
    left: 150,
    top: 150,
    birdWing: 0, //翅膀状态0~2
    t: 16,
    a: 0.002,
    v: 0,
    show: function () {
        if (this.birdWing === 0) {
            this.dom.style.backgroundPosition = "-8px -10px";
        } else if (this.birdWing === 1) {
            this.dom.style.backgroundPosition = "-60px -10px";
        } else {
            this.dom.style.backgroundPosition = "-113px -10px";
        }
        this.dom.style.left = this.left + "px";
        this.dom.style.top = this.top + "px";
    },
    setTop: function (top) {
        if (top < 0) {
            top = 0;
        } else if (top > land.top - this.height) {
            top = land.top - this.height;
        }
        this.top = top;
        this.show();
    },
    jump: function () {
        this.v = -0.5;
    }
}
bird.show();
//小鸟煽动翅膀
bird.WingTimer = getTimer(200, bird, function () {
    this.birdWing = (this.birdWing + 1) % 3;
    bird.show();
})

//小鸟下坠
bird.dropTimer = getTimer(bird.t, bird, function () {
    //移动距离
    var dis = this.v * this.t + 0.5 * this.a * this.t * this.t;
    //改变速度
    this.v = this.v + this.a * this.t;
    this.setTop(this.top + dis);
})

/**
 * 生成一个柱子
 * @param {*} direction 方向
 * @param {*} height   高度
 */
function Pipe(direction, height) {
    this.left = game.width;
    this.width = 52;
    this.height = height;
    this.direction = direction;
    if (direction === "up") {
        this.top = 0;
    } else {
        this.top = land.top - this.height;
    }

    this.dom = document.createElement("div");
    this.dom.className = "pipe " + direction;
    this.dom.style.top = this.top + "px";
    this.dom.style.height = this.height + "px";
    this.show();
    game.dom.appendChild(this.dom)
}
Pipe.prototype.show = function () {
    this.dom.style.left = this.left + "px";
}
/**
 * 随机数
 * @param {*} min 
 * @param {*} max 
 */
function getRandow(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
/**
 * 生成一对柱子
 */
function PipePair() {
    var minHeight = 60;
    var gap = 150;
    var maxHeight = land.top - minHeight - gap;
    var h = getRandow(minHeight, maxHeight);
    this.up = new Pipe("up", h);
    this.down = new Pipe("down", land.top - h - gap);
    this.left = this.down.left;
}
//改变位置
PipePair.prototype.show = function () {
    this.up.left = this.left;
    this.down.left = this.left;
    this.up.show();
    this.down.show();
}
//删除柱子
PipePair.prototype.remove = function () {
    this.up.dom.remove();
    this.down.dom.remove();
}

//管理柱子
var createPipe = {
    controlPipe: [],
}
console.log(createPipe.controlPipe)
//生成多根柱子
createPipe.produceTimer = getTimer(1500, createPipe, function () {
    this.controlPipe.push(new PipePair);
})
//移动柱子
createPipe.moveTimer = getTimer(16, createPipe, function () {
    for (var i = 0; i < this.controlPipe.length; i++) {
        var pipe = this.controlPipe[i];
        pipe.left -= 2;
        if (pipe.left <= -52) {
            pipe.remove();
            this.controlPipe.splice(i, 1);
            i--;
        } else {
            pipe.show();
        }
    }
})

//碰撞检测
var detectionPipe = {
    validate: function () {
        if (bird.top >= land.top - bird.height) {
            //与大地亲吻
            return true;
        }
        //检查是否与柱子发生碰撞
        for (var i = 0; i < createPipe.controlPipe.length; i++) {
            var pipe = createPipe.controlPipe[i];
            if (this.validateBirdAndPipe(pipe.up) || this.validateBirdAndPipe(pipe.down)) {
                return true;
            }
        }
        return false;
    },
    validateBirdAndPipe: function (pipe) { //判断某根柱子与小鸟是否发生碰撞
        var bx = bird.left + bird.width / 2;
        var by = bird.top + bird.height / 2;
        var px = pipe.left + pipe.width / 2;
        var py = pipe.top + pipe.height / 2;
        if (Math.abs(bx - px) <= (bird.width + pipe.width) / 2 && Math.abs(by - py) <= (bird.height + pipe.height) / 2) {
            return true;
        }
    }
}

detectionPipe.timer = getTimer(16, detectionPipe, function () {
    if (this.validate()) {
        game.stop();
        game.over.style.display = "block";
        game.isOver = true;
    }
})