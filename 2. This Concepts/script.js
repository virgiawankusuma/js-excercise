// this
// var a = 1;
// console.log(window.a);
// // // atau
// console.log(this.a);

// // cara 1  - function declaration
function halo() {
    console.log(this);
    console.log('halo');
}
halo();
// // // atau
window.halo();
// // // atau
this.halo();