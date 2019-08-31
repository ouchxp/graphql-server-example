import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolver'

import http from 'http'
const config = { port: 4000, hostname: 'localhost' };
const apollo = new ApolloServer({ typeDefs, resolvers });

const app = express();
apollo.applyMiddleware({ app });
let server = http.createServer(app);

// Add subscription support
apollo.installSubscriptionHandlers(server);

server.listen({ port: config.port }, () =>
  console.log(
    '🚀 Server ready at',
    `http://${config.hostname}:${config.port}${apollo.graphqlPath}`
  )
);
