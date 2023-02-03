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
function checkTamGiac() {
    var a = inputNumber("Nhập hệ số a: ");
    var b = inputNumber("Nhập hệ số b: ");
    var c = inputNumber("Nhập hệ số c: ");
    if (!check) {
        alert("Lỗi khi nhập!");
    } else if ((a + b > c) && (a + c > b) && (c + b > a)) {
        if (a > b && a > c) {
            if (a * a == b * b + c * c) {
                alert('Tam giác là tam giác vuông');
                console.log("Vuông");
                if (b == c) {
                    alert('Tam giác vuông cân');
                    console.log("Vuông cân");
                }
            } else {
                alert('Tam giác thường')
                console.log("Thường");
            }
        } else if (b > a && b > c) {
            if (b * b == a * a + c * c) {
                alert('Tam giác là tam giác vuông');
                console.log("Vuông");
                if (a == c) {
                    alert('Tam giác vuông cân');
                    console.log("Vuông cân");
                }
            } else {
                alert('Tam giác thường')
                console.log("Thường");
            }
        } else if (c > b && c > a) {
            if (c * c == b * b + a * a) {
                alert('Tam giác là tam giác vuông');
                console.log("Vuông");
                if (b == a) {
                    alert('Tam giác vuông cân');
                    console.log("Vuông cân");
                }
            } else {
                alert('Tam giác thường')
                console.log("Thường");
            }
        } else if (a == b && a == c) {
            alert('Tam giác đều');
            console.log("Đều");
        } else if (a == b || a == c || c == a) {
            alert('Tam giác cân');
            console.log("Cân");
        } 
    } else {
        alert("3 canh khong the tao thanh 1 hinh tam giac");
    }
    console.log("a =" + a);
    console.log("b =" + b);
    console.log("c =" + c);
}
checkTamGiac();

