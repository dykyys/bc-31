import axios from 'axios';
axios.defaults.baseURL = 'https://api.unsplash.com/search';
axios.defaults.headers.common['Authorization'] =
  'Client-ID LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

export class UnsplashAPI {
  #query = '';
  #page = 1;
  #totalPages = 0;

  #searchParams = {
    params: {
      color: 'black',
      orientation: 'portrait',
      per_page: 24,
    },
  };
  async getPopularPhotos(page) {
    const url = `/photos?page=${page}&query=bad`;
    const { data } = await axios.get(url, this.#searchParams);
    return data;
  }

  async getPhotos(page) {
    const url = `/photos?page=${page}&query=${this.#query}`;
    const { data } = await axios.get(url, this.#searchParams);
    return data;
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
    this.#totalPages = Math.ceil(totalPhotos / 24);
  }

  incrementPage() {
    this.#page += 1;
  }
  resetPage() {
    this.#page = 1;
  }
}
