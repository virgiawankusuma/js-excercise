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
// const p2 = document.querySelector('.p2');
// p2.classList.add('label');
// p2.classList.add('satu');
// p2.classList.add('dua');
// p2.classList.add('tiga');

// console.log(p2.classList.item(1));
// console.log(p2.classList.contains('dua'));


// // createElement, createTextNode, appendChild
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');

// // // simpan tulisan ke dalam elemen pBaru
pBaru.appendChild(textPBaru);

// // // simpan ke section a
const sectionA = document.querySelector('section#a');
sectionA.appendChild(pBaru);

// // // insertBefore
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('item baru');

// // // simpan ke dalam elemen liBaru
liBaru.appendChild(textLiBaru);

// // // simpan ke section b
const ul = document.querySelector('section#b ul');
// // // membuat variable yang akan di insert
const li2 = ul.querySelector('li:nth-child(2)');

// // // simpan liBaru di section 
ul.insertBefore(liBaru, li2);