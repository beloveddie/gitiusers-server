const resolvers = {
  Query: {
    usersForHome: async (_, __, { dataSources }) => {
      const users = await dataSources.gitHubUsersAPI.getUsersForHome();
      const usersWithDescription = users.map((user) => ({
        ...user,
        description: "Hello world!",
      }));
      return usersWithDescription;
    },
  },
};

module.exports = resolvers;
