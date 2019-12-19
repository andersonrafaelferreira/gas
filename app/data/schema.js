"use strict";

const { makeExecutableSchema } = require("graphql-tools");

const resolvers = require("./resolvers");

// Define our schema using the GraphQL schema language
const typeDefs = `
  type User {
    id: Int!
    username: String!
    email: String!
    posts: [Post]
  }
  type Post {
    id: Int!
    title: String!
    slug: String!
    content: String!
    user: User!
  }
  type Track {
    id: Int!
    proposal_id: String!
    latitude: Float
    longitude: Float
  }
  type Query {
    allUsers: [User]
    fetchUser(id: Int!): User
    allPosts: [Post]
    fetchPost(id: Int!): Post
    allTracks: [Track]
  }
  type Mutation {
    login (email: String!, password: String!): String
    createUser (username: String!, email: String!, password: String!): User
    addPost (title: String!, content: String!): Post
    createTracking (proposal_id: String!, latitude: Float, longitude: Float): Track
  }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
