const inputsRef = document.querySelectorAll('input');

const handleUpdate = (event) => {
  const { value, name, dataset } = event.target;
  const suffix = dataset.sizing ? dataset.sizing : '';
  document.documentElement.style.setProperty(`--${name}`, value + suffix);
};

inputsRef.forEach((item) => item.addEventListener('input', handleUpdate));
