/*
## Intermediate Level — Combining Methods

### 4. Movie Library Filter

**Scenario:** You have an array of movie objects:

{ title: "Inception", rating: 8.8, year: 2010, genre: "Sci-Fi" }
 
**Tasks:**

* Find all movies with rating > 8
* Extract only titles
* Sort movies by year (newest→oldest)
* Check if every movie has a `title` property
* Check if any movie is Sci-Fi

*/
const movies = [
  // normal valid movies
  { title: 'Inception', rating: 8.8, year: 2010, genre: 'Sci-Fi' },
  { title: 'Interstellar', rating: 8.6, year: 2014, genre: 'Sci-Fi' },
  { title: 'Parasite', rating: 8.6, year: 2019, genre: 'Thriller' },
  { title: 'The Room', rating: 3.7, year: 2003, genre: 'Drama' },

  // missing fields
  { rating: 7.5, year: 2020, genre: 'Action' }, // missing title
  { title: 'Unknown Movie', year: 2021, genre: 'Mystery' }, // missing rating
  { title: 'No Genre Film', rating: 6.2, year: 2012 }, // missing genre
  { title: 'Yearless Movie', rating: 7.1, genre: 'Drama' }, // missing year

  // wrong types
  { title: 12345, rating: 8.0, year: 2011, genre: 'Action' }, // title not string
  { title: 'Bad Rating', rating: '8.1', year: 2015, genre: 'Drama' }, // rating is string
  { title: 'Strange Year', rating: 7.8, year: '2000', genre: 'Romance' }, // year is string

  // null or undefined
  { title: null, rating: 6.5, year: 2005, genre: 'Comedy' },
  { title: 'Ghost Movie', rating: null, year: 2007, genre: 'Drama' },
  { title: 'Broken Film', rating: 7.3, year: null, genre: 'Horror' },

  // extra unexpected fields
  {
    title: 'Extended Cut',
    rating: 9.1,
    year: 2020,
    genre: 'Sci-Fi',
    director: 'John Doe',
  },

  // edge case genres
  { title: 'Half Sci', rating: 8.2, year: 2018, genre: 'SCI-fi' }, // weird casing
  { title: 'Mixed Genre', rating: 7.9, year: 2013, genre: ['Sci-Fi', 'Drama'] }, // array genre
];

// 1- Find all movies with rating > 8
const rating8plus = movies
  .filter(
    (value) => Number.isFinite(Number(value.rating)) && Number(value.rating) > 8
  )
  .map((value) => value.title);

console.log(`--->Movies having rating > 8: <---\n ${rating8plus}`);

// 2 - Extract only titles
const titles = movies.map((value) => value.title);
console.log(titles);

// 3 -  Sort movies by year (newest→oldest)
const moviesYearWise = movies
  .filter((value) => value.year)
  .sort((a, b) => b - a);

console.log('---');
console.log(moviesYearWise);

// 4 - Check if every movie has a `title` property
const missingTitle = movies.filter(
  (value) => value.title === null || value.title === undefined
);
console.log(missingTitle);

// 5 - Check if any movie is Sci-Fi
const sciFi = movies.filter((value) => value.genre === 'Sci-Fi');
console.log(sciFi);
