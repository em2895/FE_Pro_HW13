// Написати цикли, які зможуть:

// Вивести на сторінку в один рядок через кому числа від 10 до 20.
let numbers = new Array();

for (let i = 10; i <= 20; i++) {
    numbers.push(i);
}
console.log(numbers.join(', '));


// Вивести квадрати чисел від 10 до 20.
let squaring = new Array();
let squaringIdx = 10;
for (let i = 0; i <= 10; i++) {
    squaring[i] = squaringIdx * squaringIdx;
    squaringIdx++;
}
console.log("Квадрати чисел від 10 до 20: " + squaring.join([', ']));


// Вивести таблицю множення на 7.
console.log("Таблиця множення на 7: ");
let multA = 7;
let multB = 1;
let multResult = 0;
for (let i = 0; i < 10; i++) {
    console.log(multA + " * " + multB + " = " + (multA*multB));
    multB++;    
}


// Знайти суму всіх цілих чисел від 1 до 15.
let sumResult = 0;
let sumIdx = 0;
do {
    sumResult += sumIdx;
    sumIdx++;
  } while (sumIdx <= 15);
  
console.log("Сума всіх цілих чисел від 1 до 15: " + sumResult);


// Знайти добуток усіх цілих чисел від 15 до 35.
let multAllResult = 1;
let multAllIdx = 15;
do {
    multAllResult *= multAllIdx;
    multAllIdx++;
} while (multAllIdx <= 35);
console.log("Добуток всіх цілих чисел від 15 до 35: " + BigInt(multAllResult));


// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let average = 0;
for (let i = 1; i <= 500; i++) {
    average += i;
}
console.log("Середнє арифметичне всіх цілих чисел від 1 до 500: " + parseInt(average / 500));


// Вивести суму лише парних чисел в діапазоні від 30 до 80.
let sumEvenResult = 0;
let sumEvenIdx = 30;
do {
    if (sumEvenIdx % 2 == 0) {
    sumEvenResult += sumEvenIdx;   
    }
    sumEvenIdx++;
  } while (sumEvenIdx <= 80);
  
console.log("Сума лише парних чисел в діапазоні від 30 до 80: " + sumEvenResult);

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let multOfThree = new Array();

console.log("Усі числа в діапазоні від 100 до 200 кратні 3: ");
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        multOfThree.push(i);
    }
}
console.log(multOfThree.join(', '));

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.
let naturalNum = Number(prompt("Введіть будь-яке натуральне число:"));

let evenDiv = new Array();
let countEvenDiv = 0;
let sumEvenDiv = 0;
for (let i = 2; i * 2 <= naturalNum; i++) {
  if (naturalNum % i == 0) {
    evenDiv.push(i);
    if (i % 2 === 0) {
      countEvenDiv++;
      sumEvenDiv += i;
    }
  }
}
console.log("Дільники числа " + naturalNum + ": " + evenDiv.join(', ') )
console.log("Кількість його парних дільників: " + countEvenDiv);
console.log("Сума його парних дільників: " + sumEvenDiv);


// Надрукувати повну таблицю множення від 1 до 10.
console.log("Таблиця множення від 1 до 10: ");
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + (i*j));
    }
}