import data from './data.json' assert { type: 'json'};
const section = document.querySelectorAll('.section');
const main = document.getElementById('main');

const appendItem = (item) => {
    const section = document.createElement('section');
    <span>${item.title}</span>
    main.appendChild(section)
};

data.forEach((item) => {
    appendItem(item);
});