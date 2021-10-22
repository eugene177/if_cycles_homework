// // 1. Проверка значения из диапазона
// let age = 14;
// if (age<=90 && age >= 14) {
//   console.log('Значение в диапазоне')
// } else {
//   console.log('Значение не в диапазоне')
// }

// // 2. Проверка значения вне диапазона
// let age = 13;
// if (!(age<=90 && age >= 14)) {
//   console.log('Значение не в диапазоне')
// } else {
//   console.log('Значение в диапазоне')
// }

// // 3. 'if' into '?'
// let result;
// const a = 2;
// const b = 1;
// (a + b < 4) ? result = 'Few' : result = 'A lot';
// console.log(result)

// // 4. 'if..else' into '?'
// let message;
// let login = prompt('Who are you?');
// (login == 'Сотрудник') ? message = 'Hi' :
// (login == 'Директор') ? message = 'Hello' :
// (login == '') ? message = 'No login' : message = '' ;
// alert(message)

// // 5. Проверка логина
// let who = prompt('Вы кто?')
// switch (who) {
//   case 'Админ':
//     let login = prompt('Enter login')
//     switch (login) {
//       case 'Я главный':
//         alert('Здравствуйте!')
//         break

//       case null:
//         alert('Отменено')
//         break

//       default:
//         alert('Неверный логин')
//         break
//     }
//     break
//   case '' || null:
//     alert('Отменено')
//     break

//   default:
//     alert('Я вас не знаю')
//     break
// }

// // 6. 'switch' into 'if'
// let browser = prompt('Enter your browser')

// if (browser === 'Edge') {
//   alert("You've got the Edge!")
// } else if (
//   browser === 'Chrome' ||
//   browser === 'Firefox' ||
//   browser === 'Safari' ||
//   browser === 'Opera') {
//   alert('Okay we support these browser too')
// } else {
//   alert('We hope that this page looks ok!')
// }

// // 7. 'if' into 'switch'
// const number = +prompt('Введите число между 0 и 3')

// switch (number) {
//   case 0:
//     alert('Вы ввели число 0')
//     break;
//   case 1:
//     alert('Вы ввели число 1')
//     break;
//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3')
//     break;
//   default:
//     alert('Вы ввели неправильное число!!!')
//     break;
// }

// // 8. 'Day'
// let day = 13
// switch (true) {
//   case day >= 0 && day <= 10:
//     console.log('First decade')
//     break
//   case day > 10 && day <= 20:
//     console.log('Second decade')
//     break
//   case day > 20 && day <= 31:
//     console.log('Third decade')
//     break
//   default:
//     console.log('Wrong day!')
//     break
// }

// // 9. 'mounth'
// let mounth = 9
// switch (true) {
//   case (mounth >= 1 && mounth <= 2) || mounth === 12:
//     console.log('Winter')
//     break
//   case mounth > 2 && mounth <= 5:
//     console.log('spring')
//     break
//   case mounth > 5 && mounth <= 8:
//     console.log('summer')
//     break
//   case mounth > 8 && mounth <= 11:
//     console.log('fall')
//     break
//   default:
//     console.log('Wrong mounth!!')
//     break
// }

// // 10. 'min'
// let mounth = 12345
// switch (true) {
//   case mounth >= 0 && mounth <= 15:
//     console.log('First')
//     break
//   case mounth > 15 && mounth <= 30:
//     console.log('Second')
//     break
//   case mounth > 30 && mounth <= 45:
//     console.log('Third')
//     break
//   case mounth > 45 && mounth <= 59:
//     console.log('Fourth')
//     break
//   default:
//     console.log('Wrong min!!!')
//     break
// }

// // 11. even numbers
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
// }

// // 12. 'for' into 'while'
// let i = 0
// while (i < 3) {
//   alert(`number ${i}!`)
//   i++
// }

// // 14. Простые числа
// let num = 133
// let perNum
// for (perNum = 2; perNum < num; perNum++) {
//   for (let i = 2; i < perNum; i++) {
//     if (perNum % i === 0) {
//       break
//     }
//     if (i === perNum - 1) {
//       console.log(perNum)
//     }
//   }
// }

// 15. Подсчёт итераций
let n = 1000
let num = 0
for (let i = 1; n > 50; i++) {
  n = n / 2
  num = i
}
console.log(`Количество итераций - ${num}, итоговое число - ${n} `)
