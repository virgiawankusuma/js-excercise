const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = () => {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}

// membuat tombol setelah tombol ubah warna
const tAcakWarna = document.createElement('button');
const textTAcakWarna = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(textTAcakWarna);
tAcakWarna.setAttribute('type', 'button');
tAcakWarna.setAttribute('id', 'tAcakWarna');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', () => {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

const sMerah = document.querySelector('input[name="sMerah"]');
const sHijau = document.querySelector('input[name="sHijau"]');
const sBiru = document.querySelector('input[name="sBiru"]');

sMerah.addEventListener('input', () => {
    // console.log(sMerah.value);
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

sHijau.addEventListener('input', () => {
    // console.log(sMerah.value);
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

sBiru.addEventListener('input', () => {
    // console.log(sMerah.value);
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})