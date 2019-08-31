
const { find, filter } = require('lodash');

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const jk = {
  name: 'J.K. Rowling',
  age: 45,
};

const mc = {
  name: 'Michael Crichton',
  age: 60,
};

const authors = [
  jk,
  mc
];

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: jk,
  },
  {
    title: 'Jurassic Park',
    author: mc,
  },
];

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    book: (obj, { title }) => books.find(x => x.title === title),
    books: () => books,
    authors: () => authors,
  },
};

export default resolvers;