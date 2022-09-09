/*
 * Методи об'єкта і this при зверненні до властивостей у методах
 */

/*
 * - changeTitle(newTitle) - змінює назву фільму
 * - addActor(newActor) - додає актора
 * - updateRating(newRating) - оновлює рейтинг фільму
 * - isAdult - перевіряє вікове обмеження на фільм
 */

const filmDuna = {
  title: 'Duna',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?',
  rating: 10,
  actors: [
    'Rosetta Pena',
    'Clayton Crawford',
    'Larry Norton',
    'Georgia Garrett',
    'Jackson Ballard',
  ],
  newFilm: {
    title: 'Mango',
    updadeNewFilm(title) {
      console.log(' in new film', this);
      this.title = title;
    },
  },
  adult: false,
  changeTitle(newTitle) {
    this.title = newTitle;
  },
  addActor(newActor) {
    const isInListActors = this.actors.includes(newActor);
    if (isInListActors) {
      console.log(`${newActor} already there`);
      return;
    }
    this.actors.push(newActor);
  },
  updateRating(newRating) {
    if (newRating < 9) {
      return;
    }
    this.rating = newRating;
  },
  isAdult() {
    return this.adult;
  },
};

filmDuna.changeTitle('Duna 2');
filmDuna.addActor('Pena');
filmDuna.updateRating(8.5);

console.log(filmDuna.isAdult());
console.log(filmDuna);
