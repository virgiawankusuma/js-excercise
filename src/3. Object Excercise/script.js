// membuat Object angkot
function Angkot (supir, trayek, penumpang, kas) {
  this.supir = supir
  this.trayek = trayek
  this.penumpang = penumpang
  this.kas = kas

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang)
    return this.penumpang
  }

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert('angkot masih kosong')
      return false
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] === namaPenumpang) {
          this.penumpang.splice(i, 1)
          this.kas += bayar
          alert(`penumpang ${namaPenumpang} turun dan membayar sebesar Rp. ${bayar}`)
          return this.penumpang
        }
      }
    }
  }
}

// eslint-disable-next-line no-unused-vars
const angkot1 = new Angkot('Virgiawan', ['Sukodono', 'Pengkol'], [], 0)
// eslint-disable-next-line no-unused-vars
const angkot2 = new Angkot('Teguh', ['Mulyoharjo', 'Kuwasen'], [], 0)
