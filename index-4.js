const filmoteka = [
  {
    id: 1,
    title: 'Duna',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 10,
    actors: [
      'Amelia Gibson',
      'Cameron Clayton',
      'Viola Vasquez',
      'Lula Collins',
      'Victor Nichols',
    ],
    adult: false,
    image: 'https://via.placeholder.com/640/480',
  },
  {
    id: 2,
    title: 'Venom',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 8,
    actors: [
      'Inez Greer',
      'Barry Curtis',
      'Blanche Rios',
      'Glen Perry',
      'Logan Powers',
    ],
    adult: true,
    image: 'https://via.placeholder.com/640/480',
  },
  {
    id: 3,
    title: 'Luca',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 9,
    actors: [
      'Marguerite Gibbs',
      'Lora Alvarez',
      'Jorge Simpson',
      'Thomas Hall',
      'Darrell Hunter',
    ],
    adult: false,
  },
  {
    id: 4,
    title: 'Free Guy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 6,
    actors: [
      'Calvin Andrews',
      'Mamie Myers',
      'Madge Townsend',
      'Ralph Kim',
      'Jorge Reese',
    ],
    adult: false,
    image: 'https://via.placeholder.com/640/480',
  },
  {
    id: 5,
    title: 'Saw',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 7,
    actors: [
      'Adele Marsh',
      'Melvin Burgess',
      'Jesus Reese',
      'Harriet Moreno',
      'Curtis Cox',
    ],
    adult: true,
  },
  {
    id: 6,
    title: 'Duna 2',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 10,
    actors: [
      'Amelia Gibson',
      'Cameron Clayton',
      'Viola Vasquez',
      'Lula Collins',
      'Victor Nichols',
    ],
    adult: false,
    image: 'https://via.placeholder.com/640/480',
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив з усіма назвами фільмів.

// function getAllTitlesOfFilms(films) {
//   const titlesOfFilms = [];

//   for (const film of films) {
//     titlesOfFilms.push(film.title);
//   }

//   return titlesOfFilms;
// }
// const allTitles = getAllTitlesOfFilms(filmoteka);
// console.log(allTitles);

// //? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.

// const findFilmByName = function (films, filmTitle) {
//   for (const film of films) {
//     if (film.title === filmTitle) {
//       return film;
//     }
//   }
//   return `${filmTitle} not found`;
// };
// const filmByName = findFilmByName(filmoteka, 'Free');
// console.log(filmByName);

//? Напишіть функцію findFilmByWord(films, filmTitle), яка шукає фільми які включають дане слово.

// const findFilmByWord = function (films, word) {
//   const arrayFilms = [];
//   for (const film of films) {
//     if (film.title.includes(word)) {
//       arrayFilms.push(film);
//     }
//   }
//   return arrayFilms;
// };
// const filmByName = findFilmByWord(filmoteka, 'Duna');
// console.log(filmByName);

// const findFilmByWord = function (films, word) {
//   const objFilms = {};
//   for (const film of films) {
//     if (film.title.includes(word)) {
//       objFilms[film.title] = film;
//     }
//   }
//   return objFilms;
// };
// const filmByName = findFilmByWord(filmoteka, 'Duna');
// console.log(filmByName);

//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.

// function getAdultFilms(films) {
//   const allAdultFilms = [];

//   for (const film of films) {
//     if (film.adult) {
//       allAdultFilms.push(film);
//     }
//   }

//   return allAdultFilms;
// }

// console.log(getAdultFilms(filmoteka));

//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмежень.

// function getNotAdultFilms(films) {
//   const allAdultFilms = [];

//   for (const film of films) {
//     if (!film.adult) {
//       allAdultFilms.push(film);
//     }
//   }

//   return allAdultFilms;
// }

// console.log(getNotAdultFilms(filmoteka));
