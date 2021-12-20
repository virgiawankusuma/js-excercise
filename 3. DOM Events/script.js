// // DOM Events
// // // Event Handler
// const p3 = document.querySelector('.p3');

// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// // // // Element method
// const p2 = document.querySelector('.p2');

// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// p2.onclick = ubahWarnaP2;


// // // addEventListener
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', () => {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const textLiBaru = document.createTextNode('item baru');

//     liBaru.appendChild(textLiBaru);
//     ul.appendChild(liBaru);
// })

// //  Perbedaan Event Handler dan addEventListener
const p3 = document.querySelector('.p3');

// // // Event handler
// p3.onclick = () => {
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = () => {
//     p3.style.color = 'red';
// }

// // // addEventListener
p3.addEventListener('click', () => {
    p3.style.backgroundColor = 'lightblue';
})

p3.addEventListener('click', () => {
    p3.style.color = 'red';
})