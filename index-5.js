'use strict';

/*
? Напиши скрипт, який для об'єкта user послідовно:
? додає поле mood зі значенням 'happy'
? замінює значення hobby на 'skydiving'
? замінює значення premium на false
? виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys() і for...of
*/

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// user.mood = 'happy';
// user['mood'] = 'happy';

const userMood = 'mood';
user[userMood] = 'happy';

// user.hobby = 'skydiving';
// user['hobby'] = 'skydiving';
const userHobby = 'hobby';
user[userHobby] = 'skydiving';

// user.premium = !user.premium;
user['premium'] = !user.premium;

// for (const key of Object.keys(user)) {
//   console.log(`${key} - ${user[key]}`);
// }

// console.table(user);

/*
? У нас є об'єкт, де зберігаються зарплати нашої команди.
? Напишіть метод об'єкта для підсумовування всіх зарплат та збережіть результат у змінній sum.
? Повинно вийти 390. Якщо об'єкт salaries порожній, результат має бути 0.
*/

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
//   calculateSalary() {
//     let total = 0;
//     const values = Object.values(this);
//     for (const value of values) {
//       if (typeof value !== 'number') {
//         continue;
//       }
//       total += value;
//     }
//     return total;
//   },
// };
// const allSalary = salaries.calculateSalary();
// console.log(allSalary);
/*
? Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок під назвою каменю.
? Ф-ція рахує і повертає загальну вартість каміння з таким ім'ям.
*/

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name === stoneName) {
      return stone.price * stone.quantity;
    }
  }
  return 0;
}
const price = calcTotalPrice(stones, 'Діамант');
// console.log(price);
/*
? Напиши скрипт управління особистим кабінетом інтернет-банку.
? Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
?
? Типів транзацький лише два:
? Можна покласти чи зняти гроші з рахунку.
?
? Кожна транзакція це об'єкт з властивостями: id, type та amount
*/

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Поточний баланс рахунку
  balance: 0,
  // Початковий ID для транзакції
  startId: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   * {type: 'deposit',
   * amount: 2100,
   * id:1
   * }
   */
  createTransaction(amount, type) {
    return {
      amount,
      type,
      id: this.generateId(),
    };
  },

  // Генерація id для транзакції
  generateId() {
    return (this.startId += 1);
  },

  /*
   * Метод, який відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  /*
   * Метод, який відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * Після чого додає його в історію транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('недостатньо коштів');
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  /*
   *Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзації по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return ` Операції з id ${id} не знайдено`;
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(typeOperation) {
    let total = 0;
    for (const { amount, type } of this.transactions) {
      if (type !== typeOperation) {
        continue;
      }
      total += amount;
    }
    return total;
  },
  getAllTransactions() {
    return this.transactions;
  },
};

account.deposit(2100);
account.deposit(2100);
account.deposit(2100);
account.withdraw(1300);

console.log(account.getBalance());
console.table(account.getAllTransactions());
console.log(account.getTransactionDetails(5));
console.table(account.getTransactionTotal(Transaction.DEPOSIT));
