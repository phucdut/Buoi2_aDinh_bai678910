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

function checkNT(){
    var n = inputNumber('Nhập n:');
    if(!check){
        alert("Lỗi khi nhập!");
    }else{
        if(n < 2){
            alert(n + ' khong phai so nguyen to');
            console.log(n + ' khong phai so nguyen to')
            
        }
        var count = 0;
        for(var i = 2; i <= Math.sqrt(n); i++){
            if(n % i == 0){
                count++;
            }
        }
        if(count == 0){
            alert(n + " la so nguyen to");
            console.log(n + " la so nguyen to");
        }else{
            alert(n + ' khong phai so nguyen to');
            console.log(n + ' khong phai so nguyen to')
        }
    }
}
checkNT();