

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
function checkSoDX() {

    if (!check) {
        alert("Lỗi khi nhập!");
    } else {
        var number = inputNumber('Nhập 1 số: ');

        var soGoc = number, soDao = 0, donVi;

        while (number > 0) {
            donVi = number % 10;
            soDao = soDao * 10 + donVi;
            number = Math.floor(number / 10);
        }
        if (soGoc === soDao) {
            console.log(soGoc + ' là số đối xứng!');
        } else {
            console.log(soGoc + ' không phải là số đối xứng!');
        }
    }
}

checkSoDX();
// function reverse_num(n){ 
//     n = n.toString()
//     return n.split("").reverse().join("");
//   }

//   /*Ứng dụng Hàm tìm số đảo ngược để tạo Hàm kiểm tra số đối xứng trong JavaScript*/
//   function symmetrical_num(n){ 
//       // flag = 1 => số đối xứng
//       // flag = 0 => không phải số đối xứng

//       let flag =0;
//       if (reverse_num(n) == n) flag = 1;
//       return flag;
//   }

//   let n= prompt(" Nhap so tu nhien= ");

//   let check = symmetrical_num(n);

//   if( check == 1 ) console.log(n + " la so doi xung");
//   else console.log(n + " khong phai la la so doi xung");

// code anh Dinh
// var number = prompt('Nhập 1 số: ');

// var soGoc = Number(number), soDao = 0, donVi;

// while (number > 0) {
//     donVi = number % 10;
//     soDao = soDao * 10 + donVi;
//     number = Math.floor(number / 10);
// }
// if (soGoc === soDao) {
//     console.log(soGoc + ' là số đối xứng!');
// } else {
//     console.log(soGoc + ' không phải là số đối xứng!');
// }