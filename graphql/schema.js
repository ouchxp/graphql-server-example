const { gql } = require('apollo-server');

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Author {
      name: String
      age: Int
  }
  
  type Book {
    title: String
    author: Author
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    book(title: String): Book
    books: [Book]
    authors: [Author]
  }
`;

export default typeDefs;