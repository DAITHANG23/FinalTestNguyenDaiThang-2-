// ### Bài 1:

//<aside>
// 💞 Đề bài:
// Tạo một ứng dụng web, cho phép nhập vào 2 số a và b (a<b). Hiển thị **tổng** các **số nguyên tố** trong khoảng a và b. Tạo giao diện nhập 2 số và in kết quả trên giao diện web

// </aside>

// **Ví dụ:**

//      a = 20, b = 50 => tính tổng các số nguyên tố trong khoảng từ 20 - 50

// Các số nguyên tố trong khoảng từ 20 - 50 là:  **23;29;31;37;41;43;47**

// => output = 23 + 29 + 31 + 37 + 41 + 43 + 47 = **251**




function calculate() {
    
    const num1 = Number(document.getElementById("number1").value);
    const num2 = Number(document.getElementById("number2").value);


    const inform = document.querySelector(".notice p");

     
    let calcSumOfPrimeNumbers = function(num1, num2) {
        let sum = 0;
        let arr = [];
        
        for (var i = num1; i <= num2; i++) {
           if (isPrime(i)) { 
              sum += i; 
               arr.push(i) ;
              
           }
        }
        return `${[arr]} = ${sum}`;
     }
    

     function isPrime(num) {
        for (var i = 2; i < num; i++) { 
           if (num % i === 0) { 
               return false; 
           } 
       } 
       return true;
     } 

     let primeNumbers = calcSumOfPrimeNumbers(num1,num2);


    if (document.getElementById("number1").value === "") {
        inform.innerHTML = "Xin vui lòng nhập số thứ 1!";
        document.querySelector("#result").value = "";

    } else if (document.getElementById("number2").value === "") {
        inform.innerHTML = "Xin vui lòng nhập số thứ 2!";
        document.querySelector("#result").value = "";

    } else if (num1 >= num2) {
        inform.innerHTML = "Số thứ nhất phải bé hơn số thứ hai";

    } else {
        inform.innerHTML = "";
        document.querySelector("#result").value = `${primeNumbers}`;

    }
}

function reset() {
    document.querySelector("#result").value = "";
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.querySelector(".notice p").innerHTML = "";
    
}