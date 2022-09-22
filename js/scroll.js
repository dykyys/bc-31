'use strict';
// _.throttle;

const sectionList = document.querySelectorAll('.section');
sectionList.forEach(section => {
  section.style.backgroundColor = getRangomColor();
});

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

const handleScroll = () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 800) {
    const animateSectionRef = document.querySelector('.animated-section');
    animateSectionRef.classList.add('active');
  }
};

const throttleHandleScroll = _.throttle(handleScroll, 500);

document.addEventListener('scroll', throttleHandleScroll);
