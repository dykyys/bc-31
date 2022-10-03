export class UnsplashAPI {
  static BASE__URL = 'https://api.unsplash.com/search';
  #query = '';
  #page = 1;
  #totalPages = 0;
  #perPage;
  #searchParams = new URLSearchParams({
    client_id: 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc',
    color: 'purple',
    orientation: 'portrait',
  });

  constructor({ perPage = 12 } = {}) {
    this.#perPage = perPage;
  }

  getPhotos() {
    const url = `${UnsplashAPI.BASE__URL}/photos?page=${this.#page}&query=${
      this.#query
    }&${this.#searchParams}&per_page=${this.#perPage}`;

    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  get isShowLoadMore() {
    return this.#page < this.#totalPages;
  }
  calculateTotalPages(totalPhotos) {
    this.#totalPages = Math.ceil(totalPhotos / this.#perPage);
  }

  incrementPage() {
    this.#page += 1;
  }
  resetPage() {
    this.#page = 1;
  }
}
