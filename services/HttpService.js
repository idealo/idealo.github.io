class HttpService {
  constructor() {}

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  parseJSON(response) {
    return response.json();
  }
  getText(response) {
    return response.text();
  }

  get(url) {
    return fetch(url).then(this.checkStatus).then(this.parseJSON);
  }
  getPlain(url) {
    return fetch(url).then(this.checkStatus).then(this.getText);
  }
}

export default new HttpService();
