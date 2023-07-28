class ApiMovies {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getMovies() {
    return fetch(this._baseUrl, {
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }
}
const api = new ApiMovies({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});


export default api;
