
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

function checkSoHH(){
    var n = inputNumber('Nhập n:');
    if(!check){
        alert("Lỗi khi nhập!");
    }else{
        var sum = 0;//khai bao biem sum
        for(var i=1;i<=n/2;i++){
        if(n%i==0) 
        sum+=i;
        }
        if(sum == n){
            alert(n + ' là số hoàn hảo.');
            console.log(n + ' là số hoàn hảo.');
        }else{
            alert(n + ' không là số hoàn hảo.');
            console.log(n + ' không là số hoàn hảo.');
        }
    }
}
checkSoHH();