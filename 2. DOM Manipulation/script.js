// DOM Manipulation
// // innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Virgiawan</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>Paragraf 1</p></div>';

// // style
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// // setAttribute
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'virgiawan');

// const a = document.querySelector('section#a a');
// a.setAttribute('href', 'https://google.com');

// // classList
const p2 = document.querySelector('.p2');
p2.classList.add('label');
p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');

console.log(p2.classList.item(1));
console.log(p2.classList.contains('dua'));
