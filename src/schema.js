const { gql } = require("apollo-server");

const typeDefs = gql`
  # Entry points to our Schema
  type Query {
    "Query to get an array of Users for our Home grid."
    usersForHome: [User!]!
    "Query to get a single User object."
    user(id: ID!): User!
  }

  "A type representing a GitHub User details"
  type User {
    "A unique Identifier for a User"
    id: ID!
    "A login used as a User login detail"
    login: String!
    "The name os a user"
    name: String!
    "An avatar for a User"
    avatar_url: String!
    "A brief description of a User"
    description: String!
  }
`;

module.exports = typeDefs;
