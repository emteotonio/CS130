const makeBigger = (ev) => {
   alert('make bigger!');
};

const makeSmaller = (ev) => {
   alert('make smaller!');
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

