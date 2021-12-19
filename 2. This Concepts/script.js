// this
// var a = 1;
// console.log(window.a);
// // // atau
// console.log(this.a);

// // cara 1  - function declaration
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// halo();
// // // // atau
// window.halo();
// // // // atau
// this.halo();

// // this mengembalikan object Global

// // cara 2 - obejct literal
var obj = { a: 1, nama: 'fikri' };
obj.halo = function () {
    console.log(this);
    console.log('halo');
}
obj.halo();
// this mengembalikan object yang Bersangkutan