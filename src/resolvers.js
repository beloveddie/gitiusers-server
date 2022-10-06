const { generateSentence } = require("dummy-text-generator");

const resolvers = {
  Query: {
    usersForHome: async (_, __, { dataSources }) => {
      const users = await dataSources.gitHubUsersAPI.getUsersForHome();
      const usersWithDescription = users.map((user) => ({
        ...user,
        description: generateSentence(10),
      }));
      return usersWithDescription;
    },
  },
};

module.exports = resolvers;
