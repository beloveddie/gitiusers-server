const { RESTDataSource } = require("apollo-datasource-rest");

class GitHubUsersAPI extends RESTDataSource {
  constructor() {
    super();
    // this is the base URL for the GitHub API
    this.baseURL = "https://api.github.com/";
  }

  getUsersForHome() {
    return this.get("users");
  }

  getUser(userID) {
    return this.get(`users/${userID}`);
  }
}

module.exports = GitHubUsersAPI;
