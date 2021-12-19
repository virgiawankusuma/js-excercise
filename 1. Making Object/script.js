// Making Object
// // Object Literals
const mhs1 = {
    nama: 'Virgiawan Teguh Kusuma',
    umur: 21,
    ips: [3.48, 3.75, 3.86, 3.7, 3.78, 3.95],
    alamat: {
        jalan: 'Jl. xzy No.123',
        kota: 'Jepara',
        provinsi: 'Jawa Tengah'
    }
}
const mhs2 = {
    nama: 'Muhamad Ilyas',
    umur: 21,
    ips: [3.8, 3.9, 3.9, 3.92, 3.95, 3.99],
    alamat: {
        jalan: 'Jl. abs No.321',
        kota: 'Jepara',
        provinsi: 'Jawa Tengah'
    }
}

// // Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
    // Declarasi Object kososng
    const mhs = {};

    // Inisialisasi Object mhs dengan Parameter
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}

// // // Isi Object
let mhs3 = buatObjectMahasiswa('Teguh Kusuma', '181208278372', 'teguhkusuma@unisnu.ac.id', 'Teknik Nuklir');
let mhs4 = buatObjectMahasiswa('Awan', '18120822333', 'awan@unisnu.ac.id', 'Teknik Pangan');