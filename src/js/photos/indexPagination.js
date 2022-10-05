import { getRefs } from './getRefs';
import { UnsplashAPI } from './UnsplashAPI';
import { createGalleryCards } from './createGalleryCards';
import { onError, onSuccess } from './notify';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
const ITEMS_PER_PAGE = 24;
const refs = getRefs();

const options = {
  totalItems: 0,
  itemsPerPage: ITEMS_PER_PAGE,
  visiblePages: 3,
  page: 1,
  centerAlign: false,
};

const pagination = new Pagination('pagination', options);

const page = pagination.getCurrentPage();

const unsplashAPI = new UnsplashAPI();

unsplashAPI.getPopularPhotos(page).then(({ results, total }) => {
  if (results.length === 0) {
    onError(`We don\`t find photos by ${searchQuery}`);
    return;
  }
  pagination.reset(total);
  addMarkup(results);
  onSuccess(`We found ${total} popular photos `);
});

const morePopularPhotos = async event => {
  const currentPage = event.page;
  const { results } = await unsplashAPI.getPopularPhotos(currentPage);
  try {
    if (results.length === 0) {
      onError(`We don\`t find photos by ${searchQuery}`);
      return;
    }
    addMarkup(results);
  } catch (error) {
    console.log(error);
  }
};
const morePhotosByQuery = async event => {
  const currentPage = event.page;
  try {
    const { results } = await unsplashAPI.getPhotos(currentPage);
    if (results.length === 0) {
      onError(`We don\`t find photos by ${searchQuery}`);
      return;
    }
    addMarkup(results);
  } catch (error) {
    console.log(error);
  }
};
pagination.on('afterMove', morePopularPhotos);

const handleSubmit = async event => {
  event.preventDefault();

  const { query } = event.currentTarget.elements;

  clearPage();

  const searchQuery = query.value.trim().toLowerCase();

  if (!searchQuery) {
    onError('I don`t know what your want 😁');
    return;
  }

  unsplashAPI.query = searchQuery;

  pagination.off('afterMove', morePopularPhotos);
  pagination.off('afterMove', morePhotosByQuery);
  pagination.on('afterMove', morePhotosByQuery);

  try {
    const { results, total } = await unsplashAPI.getPhotos(page);
    if (results.length === 0) {
      onError(`We don\`t find photos by ${searchQuery}`);
      return;
    }
    pagination.reset(total);

    addMarkup(results);
    onSuccess(`We found ${total} photos by ${searchQuery}`);
  } catch (error) {
    onError(error.message);
    clearPage();
  }
};

refs.form.addEventListener('submit', handleSubmit);

function addMarkup(photos) {
  const markup = createGalleryCards(photos);
  refs.list.insertAdjacentHTML('beforeend', markup);
}

function clearPage() {
  refs.list.innerHTML = '';
  unsplashAPI.resetPage();
  refs.loadMoreBtn.classList.add('is-hidden');
}
