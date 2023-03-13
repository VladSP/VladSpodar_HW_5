let a = parseInt(prompt("Введіть значення a:"));
let b = parseInt(prompt("Введіть значення b, більше за " + a + ":"));
let h = parseInt(prompt("Введіть крок h (більший за 0):"));

if (b <= a) {
  alert("Значення b має бути більшим за a!");
} else if (h <= 0) {
  alert("Крок h має бути більшим за 0!");
} else {
  let sumOfFactorials = 0;
  for (let i = a; i <= b; i += h) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
      factorial *= j;
    }
      sumOfFactorials += factorial;
      console.log(sumOfFactorials);
  }
  alert("Сума факторіалів чисел від " + a + " до " + b + " з кроком " + h + " дорівнює " + sumOfFactorials);

};



