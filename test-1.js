function calculateSum() {
  // Lấy giá trị của số a và b từ các input
  var a = parseInt(document.getElementById("number-a").value);
  var b = parseInt(document.getElementById("number-b").value);

  if (isNaN(a) || isNaN(b) || a >= b) {
    alert("Vui long nhap so b va b (a<b) vao o duoi day: ");
    return;
  }
  var sum = 0;

  for (var i = a; i <= b; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  document.getElementById("result").innerHTML =
    "Tổng các số nguyên tố trong khoảng " + a + " đến " + b + " là: " + sum;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
