const listInputs = document.querySelectorAll('input');
const titleRef = document.querySelector('h2');

listInputs.forEach(input => {
  input.addEventListener('input', event => {
    const { name, value, dataset } = event.target;
    // const suffix = dataset.sizing ? dataset.sizing : ""
    const suffix = dataset.sizing || '';
    document.documentElement.style.setProperty(`--${name}`, `${value}${suffix}`);
  });
});
