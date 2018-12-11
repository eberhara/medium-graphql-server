import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Program {
    id: ID!
    title: String!
    description: String
    poster(size: String): String
    characters: [String]
    episodeDuration: Int
  }
  
  type Query {
    program(id: ID!): Program
  }
`

export const resolvers = {
  Query: {
    program: (root, { id }, { dataSources }) => (
      dataSources.programs.getProgramById(id)
    )
  }
}