let data = [
  {
    name: 'Kay',
    age: '31'
  },
  {
    name: 'Shar',
    age: '32'
  },
  {
    name: 'Ny',
    age: '14'
  },
  {
    name: 'Annet',
    age: '100'
  },
  {
    name: 'Koah',
    age: '1'
  },
  {
    name: 'Errol',
    age: '200'
  },
  {
    name: 'Josh',
    age: '15'
  }
];

const info = document.querySelector('#info');

let details = data.map(function(item){
  return  `<div> ${item.name} is ${item.age} years old </div>`;
  });

info.innerHTML = details.join('\n');