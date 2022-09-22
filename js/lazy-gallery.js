// 'use strict';
const imgList = document.querySelectorAll('.gallery__img');
const bannerRef = document.querySelector('.banner__img');
const galleryRef = document.querySelector('.gallery');

imgList.forEach(img => {
  img.addEventListener(
    'load',
    event => {
      event.target.classList.add('appear');
    },
    { once: true }
  );
});

//2 варіант

if ('loading' in HTMLImageElement.prototype) {
  console.log('Атрибут loading підтримується');
  setSource();
} else {
  createLazyScript();
  console.log('Атрибут loading не підтримується');
}

function setSource() {
  imgList.forEach(img => {
    img.src = img.dataset.src;
  });
}

function createLazyScript() {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  script.setAttribute('crossorigin', 'anonymous');
  script.setAttribute('referrerpolicy', 'no-referrer');
  document.body.append(script);
}

const onGalleryClick = event => {
  // event.preventDefault();
  const { target } = event;
  if (target.nodeName !== 'IMG') {
    return;
  }

  bannerRef.src = target.dataset.bannerUrl;
};
galleryRef.addEventListener('click', onGalleryClick);

// 3 варіант

// var options = {
//   rootMargin: '150px',
// };
// var onEntry = function (entries, observer) {
//   entries.forEach(({ target, isIntersecting }) => {
//     if (isIntersecting) {
//       console.log(target);
//       target.src = target.dataset.src;
//       observer.unobserve(target);
//     }
//   });
// };
// var io = new IntersectionObserver(onEntry, options);

// imgList.forEach(img => io.observe(img));
