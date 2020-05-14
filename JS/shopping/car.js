//点击事件
var table = document.getElementById("shopping");
//总价格
var lblPrice = document.getElementById("total");
//总积分
var lblScore = document.getElementById("integral");
/**
 * 点击事件
 */
table.onclick = function (e) {
    if (e.target.alt === "add") {
        //增加数量
        setInputValue(e.target.previousElementSibling, 1);
    } else if (e.target.alt === "minus") {
        //减少数量
        setInputValue(e.target.nextElementSibling, -1);
    } else if (e.target.type === "checkbox") {
        //单选
        if (e.target.id === "allCheckBox") {
            //全选
            var cbs = table.querySelectorAll("[name=cartCheckBox]");
            for (var i = 0; i < cbs.length; i++) {
                cbs[i].checked=e.target.checked;
            }
        }
        reCal();
    } else if (e.target.parentElement.className === "cart_td_8") {
        deleteTr(e.target.parentElement.parentElement);
        calTotal()
    } else if (e.target.alt === "delete") {
        deleteChecked();
        calTotal()
    }
}
/**
 * 删除一行
 */
function deleteTr(tr) {
    tr.previousElementSibling.remove()
    tr.remove();
}
/**
 * 删除所选
 */
function deleteChecked() {
    var trs = document.querySelectorAll("tbody tr[id^=product]");
    for (var i = 0; i < trs.length; i++) {
        var info = getTrInfo(trs[i]);
        if (info.checked) {
            deleteTr(trs[i]);
        }
    }
}
deleteChecked()
/**
 * 增加减少数量
 * @param {*} inp 
 * @param {*} increase 
 */
function setInputValue(inp, increase) {
    var val = +inp.value + increase;
    if (val < 1) {
        val = 1;
    }
    inp.value = val;
    reCal();
}

/**
 * 得到某一行的所有信息
 */
function getTrInfo(tr) {
    //单价
    var unitPrice = +tr.querySelector(".cart_td_5").innerText;
    //积分
    var score = +tr.querySelector(".cart_td_4").innerText;
    //数量
    var number = +tr.querySelector(".cart_td_6 input").value;
    //是否选中
    var checked = tr.querySelector(".cart_td_1 input").checked;
    //总计
    var total = +tr.querySelector(".cart_td_7").innerText;
    return {
        unitPrice,
        score,
        number,
        checked,
        total
    }
}

/**
 * 计算某一行的总价calTrTotal()
 */
function calTrTotal(tr) {
    var info = getTrInfo(tr);
    var total = (info.unitPrice * info.number).toFixed(2);
    tr.querySelector(".cart_td_7").innerText = total;
}
/**
 * 重新计算所有价格
 */
function reCal() {
    calAllTrTotal();
    calTotal();
}
/**
 * 计算所有Tr的总价
 */
function calAllTrTotal() {
    var trs = document.querySelectorAll("tbody tr[id^=product]");
    for (var i = 0; i < trs.length; i++) {
        calTrTotal(trs[i])
    }
}
/**
 * 计算所有商品的总价
 */
function calTotal() {
    var sum = 0;
    var score = 0;
    var trs = document.querySelectorAll("tbody tr[id^=product]");
    for (var i = 0; i < trs.length; i++) {
        var info = getTrInfo(trs[i]);
        if (info.checked) {
            sum += info.total;
            score += info.score * info.number;
        }
    }
    lblPrice.innerHTML = sum.toFixed(2);
    lblScore.innerHTML = score;
}

reCal();