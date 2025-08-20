class DaftarBarang{
    constructor(){
        this.barang = [];
    }

    // Button Input Tambah Barang
    tambahBarang() {
        let input = document.getElementById('namaBarang').value;

        if (input !== "") {
            this.barang.push(input);
            document.getElementById("namaBarang").value = "";
            this.tampilkanBarang();
        } else {
            alert("Isi dulu dong nama barangnya!");
        }
    }

    // Button Hapus Barang
    hapusBarang() {
        let input = document.getElementById('hapusBarang').value.trim();

        if (input !== "") {
            let index = this.barang.indexOf(input);

            if (index !== -1) {
                this.barang.splice(index, 1);
                alert(`Barang "${input}" berhasil dihapus.`);
                document.getElementById("hapusBarang").value = "";
                this.tampilkanBarang();
            } else {
                alert(`Barang "${input}" tidak ditemukan!`);
            }
        } else {
            alert("Isi nama barang yang mau dihapus");
        }
    }

    // Button Update Barang
    updateBarang() {
        let lama = document.getElementById('barangLama').value.trim();
        let baru = document.getElementById('barangBaru').value.trim();

        if (lama !== "" && baru !== "") {
          let index = this.barang.indexOf(lama);

          if (index !== -1) {
            this.barang[index] = baru;
            alert(`Barang "${lama}" berhasil diganti menjadi "${baru}".`);
            document.getElementById("barangLama").value = "";
            document.getElementById("barangBaru").value = "";
            this.tampilkanBarang();
          } else {
            alert(`Barang "${lama}" tidak ditemukan!`);
          }
        } else {
          alert("Isi nama barang lama dan barang baru!");
        }
      }

    // Button Hapus Semua Barang
    hapusSemuaBarang() {
        if (this.barang.length > 0) {
            let konfirmasi = confirm("Yakin mau hapus semua barang?");
            if (konfirmasi) {
                this.barang = [];
                alert("Semua barang berhasil dihapus!");
                this.tampilkanBarang();
            }
        } else {
            alert("Tidak ada barang yang bisa dihapus!");
        }
    }

    tampilkanBarang() {
        let daftar = document.getElementById("daftarBarang");
        daftar.innerHTML = "";
        
        this.barang.forEach((item, index) => {
            daftar.innerHTML += `<li>${index + 1}. ${item}</li>`;
        });
    }
}

const kasir = new DaftarBarang();