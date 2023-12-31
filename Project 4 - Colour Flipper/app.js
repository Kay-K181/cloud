const colors = ['Green', 'Red', 'rgba(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomNumber = colors[getRandomNumber()];
  console.log(randomNumber);

  document.body.style.backgroundColor = randomNumber;
  color.textContent = randomNumber;
});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
};