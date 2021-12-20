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