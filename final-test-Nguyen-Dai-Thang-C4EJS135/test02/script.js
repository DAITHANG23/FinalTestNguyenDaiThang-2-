

function numberOneTriangle(num) {
    num = Number(prompt("Nhập số từ 1-10: "));
    for (let i = 0; i <= num; i++) {
        //Vòng lặp j để vẽ số in ra số lượng * cần thiết ở mỗi hàng
        for (let j = num - i; j < num; j++) {
            document.write("* ");//In ra các ký tự * tạo nên hình tam giác
        }
        document.write("<br \>");
    }
}

numberOneTriangle();
