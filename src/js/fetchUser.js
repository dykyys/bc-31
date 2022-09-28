export const fetchUserByName = name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSucces = Math.random();

      if (isSucces < 0.7) {
        console.log('Success');
        const user = {
          name,
          mail: 'mango@gmail.com',
          age: 21,
        };
        resolve(user);
      } else {
        console.error("'Error");
        reject(`${name} not found!`);
      }
    }, 1500);
  });
};
