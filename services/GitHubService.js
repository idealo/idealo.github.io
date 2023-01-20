import HttpService from "./HttpService";

class GitHubService {
  constructor() {
    this.BASE_URL = "https://asideas-github-cache.herokuapp.com";
  }
  getGitHubAPIURL(owner, project) {
    return `https://api.github.com/repos/${owner}/${project}`;
  }

  getStats(owner, project) {
    return HttpService.get(this.getGitHubAPIURL(owner, project));
  }
}

export default new GitHubService();
