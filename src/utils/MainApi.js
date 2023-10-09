class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      const error = new Error(`Ошибка: ${res.status}`);
      error.response = res;
      throw error;
    }
    return res.json();
  }

  _getHeaders() {
    const token = localStorage.getItem("token");
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...this._headers,
    };
  }

  editUser(data) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then((res) => this._getResponseData(res));
  }

  register({ name, email, password }) {
    return fetch(this._baseUrl + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then((res) => this._getResponseData(res));
  }

  authorize({ email, password }) {
    return fetch(this._baseUrl + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this._getResponseData(res));
  }

  checkToken() {
    return fetch(this._baseUrl + "/users/me", {
      method: "GET",
      headers: this._getHeaders(),
    }).then((res) => this._getResponseData(res));
  }

  getInfoUser() {
    return fetch(this._baseUrl + "/users/me", {
      headers: this._getHeaders(),
    }).then((res) => this._getResponseData(res));
  }

  getMovies() {
    return fetch(this._baseUrl + "/movies", {
      headers: this._getHeaders(),
    }).then((res) => this._getResponseData(res));
  }

  addMovie(data) {
    return fetch(this._baseUrl + "/movies", {
      method: "POST",
      headers: this._getHeaders(),

      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: "https://api.nomoreparties.co" + data.image.url,
        trailerLink: data.trailerLink,
        thumbnail:
          "https://api.nomoreparties.co" + data.image.formats.thumbnail.url,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then((res) => this._getResponseData(res));
  }

  deleteMovie(id) {
    return fetch(this._baseUrl + "/movies/" + id, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then((res) => this._getResponseData(res));
  }
}

const apiMain = new MainApi("https://api.upi.nomoredomains.xyz");

export default apiMain;
