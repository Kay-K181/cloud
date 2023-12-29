const manWalk = document.querySelector('.walk');
const manRun = document.querySelector('.run');
const manSwim = document.querySelector('.swim');

manWalk.addEventListener('click', () => {
  if (manWalk.classList.contains('active')){
    manRun.classList.add('active');
    manWalk.classList.remove('active');
  } 
});

manRun.addEventListener('click', () => {
  if (manRun.classList.contains('active')){
    manSwim.classList.add('active');
    manRun.classList.remove('active');
  } 
});

manSwim.addEventListener('click', () => {
  if (manSwim.classList.contains('active')){
    manWalk.classList.add('active');
    manSwim.classList.remove('active');
  } 
});

