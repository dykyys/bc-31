'use strict';
/*
? Перепиши функцію так, щоб вона приймала один об'єкт параметрів,
? замість набору незалежних аргументів.
*/

// function calcBMI({ weight = '0', height = '1' } = {}) {
//   const numericWeight = Number.parseFloat(weight.replace(',', '.'));
//   const numericHeight = Number.parseFloat(height.replace(',', '.'));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// Було
// console.log(calcBMI());
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(calcBMI({}));
// console.log(
//   calcBMI({
//     height: '1.65',
//     weight: '68,3',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );
// console.log(calcBMI());

/*
? Перепиши функцію так, щоб вона приймала один об'єкт параметрів,
? замість набору незалежних аргументів.
*/

// const printContactsInfo = function ({ names = '', phones = '' } = {}) {
//   if (names === '' || phones === '') {
//     return 'Параметри передали не вірно!';
//   }

//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   for (let i = 0; i < phoneList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// };

// Було
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// Очікується
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
// console.log(printContactsInfo());
/*

? Перепиши функцію так, щоб вона приймала один об'єкт параметрів,
? замість набору незалежних аргументів.
*/

// function getBotReport({
//   companyName,
//   bots: { repair: repairBots, defence: defenceBots },
// }) {
//   //   const {
//   //     companyName,
//   //     bots: { repair: repairBots, defence: defenceBots },
//   //   } = obj;

//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Очікується
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

/*
? Напиши функцію getStockReport(companyName, stock),
щоб вона приймала об'єкт параметрів
з властивостями companyName та stock та виводила репорт
? про кількість товарів на складі будь-якої компанії.
*/

function getStockReport({
  companyName,
  stock: { repairBots = 0, defenceBots = 0, shoes = 0, skirts = 0, hats = 0 },
}) {
  const totaItems = defenceBots + repairBots + shoes + skirts + hats;
  return `${companyName} has ${totaItems} items in stock`;
}

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); //"Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

/*
? Напиши функцію createContact(partialContact) так,
? щоб вона повертала новий об'єкт контакту з доданими властивостями id і createdAt,
? а також list зі значенням "default" якщо у partialContact немає такої властивості.
*/

// const generateId = function () {
//   return '_' + Math.random().toString(36).substr(2, 9);
// };

// const createContact = function (partialContact) {
//   return {
//     list: 'default',
//     id: generateId(),
//     createdAt: Date.now(),
//     ...partialContact,
//   };
// };

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );

// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

/*
? Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName замість firstName і lastName.
*/

// const transformUsername = function () { };

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );

const people = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
  {
    name: 'Jhon',
    know: [],
  },
];
//нарцис  'Jhon'

const people2 = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: [],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса'

const people3 = [
  {
    name: 'Alex',
    know: ['Alex', 'Eva'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса

const people4 = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: ['Eva'],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса'

// //Нарциса знають всі, нарцис незнає нікого

function findNar(peoples) {
  let narName = '';

  for (const { name, know } of peoples) {
    if (know.length === 0) {
      narName = name;
      break;
    }
  }

  if (narName === '') {
    return 'немає нарциса';
  }

  for (const { know, name } of peoples) {
    if (narName === name) {
      continue;
    }
    if (!know.includes(narName)) {
      return 'немає нарциса';
    }
  }

  return `${narName} нарцис`;
}
console.log(findNar(people4));
// findNar(people2);
// findNar(people3);
// findNar(people4);
