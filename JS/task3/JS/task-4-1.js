var distribution = JSON.parse(sessionStorage.getItem('distribution')); //取值
var specterNum = JSON.parse(sessionStorage.getItem('specterNum')); //取值
var civilianNum = JSON.parse(sessionStorage.getItem('civilianNum')); //取值

var specter = JSON.parse(sessionStorage.getItem('specter')); //取值
var civilian = JSON.parse(sessionStorage.getItem('civilian')); //取值

var end = JSON.parse(sessionStorage.getItem('end')); //取值
var ens = JSON.parse(sessionStorage.getItem('ens')); //取值
var en = JSON.parse(sessionStorage.getItem('en')); //取值
var nice = JSON.parse(sessionStorage.getItem('nice')); //取值


if (specterNum == 0) {
    $('.end').text("水民胜利");
    $('.end1').text("恭喜你们战胜了幽灵！");
} else {
    $('.end').text("幽灵胜利");
    $('.end1').text("太棒了！你知道么？在捉鬼游戏中只有20%的幽灵取得游戏最终的胜利哦！");
}

$('.ghost').text("幽灵" + specter + "人");

$('.orLM').text("水民" + civilian + "人");



for (let i = 0; i < nice; i++) {
    var result = '<div class="box-bottom">' +
        '<div class="box-bottom-1">' +
        '<span class="black">' + '第' + [i + 1] + '天' + '</span>' +
        '</div>' +
        '<span class="night">' + '黑天' + end[i] + '号玩家被杀死,死者身份是水民' + '</span>' +
        '<span class="daytime">' + '</span>' +
        '</div>';
    $(".coat").append(result);

    if (en[i] !== undefined) {
        $('.daytime').eq(i).text("白天" + ens[i] + "号玩家被投死,死者身份是" + en[i]);
    }
}