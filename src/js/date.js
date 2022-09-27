import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

// https://date-fns.org/v2.28.0/docs/format

// Створення нової дати

// const date = new Date();

// Методи дати
// console.dir(date.getUTCDate());
// console.log('getUTCFullYear(): ', date.getUTCFullYear());
// console.log(date.getTime());
// console.log(Date.now());

//? TASK 01
// Створіть об'єкт Date для дати: 21 лютого 2021 року, 3 години 12 хвилин.
const targetDate = new Date(2021, 1, 21, 3, 12, 21);
// console.log('👀 > targetDate', targetDate);

//? TASK 02
// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».

// const getWeekDay = date => {
//   const dayNames = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   const index = date.getDay();
//   console.log(dayNames[index]);
// };

// const getWeekDay = date => {
//   const month = format(date, 'HH:mm ee EEEE', { locale: uk });

//   console.log(month);
// };

// getWeekDay(targetDate);

//? TASK 03
// Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
// Параметри:
// year – рік з чотирьох цифр, наприклад, 2012.
// month – місяць від 0 до 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

// const getLastDayOfMonth = (year, month) => {
//   const dayNames = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   const date = new Date(year, month + 1, 0);
//   const number = date.getDate();
//   const index = date.getDay();
//   console.log(`${number} - ${dayNames[index]}`);
// };
// getLastDayOfMonth(2025, 2);

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);
//   const formatingDate = format(date, 'dd -- EEEE', { locale: uk });
//   console.log(formatingDate);
// };
// getLastDayOfMonth(2025, 2);

//? TASK 04
// Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.

// const getSecondsToTomorrow = () => {
//   const targetDate = new Date();

//   setInterval(() => {
//     const diff = targetDate.getTime() - Date.now();
//     const seconds = Math.round(diff / 1000);
//     console.log(seconds / 60 / 60);
//   }, 1000);
// };
// getSecondsToTomorrow();

const getSecondsToTomorrow = () => {
  const date = new Date();
  const day = date.getDate();

  const targetWithDaY = date.setDate(day + 1);

  const target = new Date(targetWithDaY).setHours(0, 0, 0);

  console.log(target - Date.now());
};
setInterval(() => {
  getSecondsToTomorrow();
}, 1000);
