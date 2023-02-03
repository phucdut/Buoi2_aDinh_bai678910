
var check = true;
function inputNumber(msg) {
    var number = prompt(msg);
    if (number === '' || number === null) {
        console.log("Vui lòng nhập!");
        check = false;
    } if (isNaN(number)) {
        console.log("Không đúng định dạng!");
        check = false;
    } else {
        return Number(number);
    }
}
function checkFibo() {
    var n = inputNumber('Nhập n:');
    if (!check) {
        alert("Lỗi khi nhập!");
    } else {
        // var number = prompt('Nhập 1 số: ');

        var t1 = 1, t2 = 1, next;
        while (t1 < n) {
            next = t1 + t2;
            t1 = t2;
            t2 = next;
        }
        if (t1 === n) {
            console.log(n + ' là số fibonacci!');
        } else {
            console.log(n + ' không phải là số fibonacci!');
        }

    }
}
checkFibo();




