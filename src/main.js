import { ApolloServer, gql } from 'apollo-server'

import context from './setup/context'
import dataSources from './setup/data-sources'
import engine from './setup/engine'
import validationRules from './setup/validation-rules'
import { typeDefs, resolvers } from './types'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources,
  engine,
  validationRules,
  cacheControl: { defaultMaxAge: 300 }
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})
