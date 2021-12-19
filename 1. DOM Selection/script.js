// DOM Selection
// // getElementById -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Virgiawan';

// // getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p');
// p[0].style.backgroundColor = 'lightblue';

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// // getElementsByClassName -> HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari javascript';

// // querySelector -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

const paragraph = document.querySelector('p');
paragraph.innerHTML = 'Ini diubah dari javascript';