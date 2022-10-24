const { generateSentence } = require("dummy-text-generator");

const resolvers = {
  Query: {
    // returns an array of Users that will used to populate the Homepage of the web client
    usersForHomePage: async (_, __, { dataSources }) => {
      return await dataSources.gitHubUsersAPI.getUsersForHome();
    },
    // get a single user by ID, for the user page
    user: async (_, { id }, { dataSources }) => {
      return await dataSources.gitHubUsersAPI.getUser(id);
    },
  },
  User: {
    description: () => {
      return generateSentence(10);
    },
  },
};

module.exports = resolvers;
