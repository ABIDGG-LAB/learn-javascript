

let saldoAwal = Number(prompt("berapakah saldo awal anda?"))
let saldoLebih = Number(prompt("berapakah saldo anda yang bertambah?"))
let pengeluaran = Number(prompt("berapakah hutang/pengeluaran anda?"))
let saldoAkhir = saldoAwal + saldoLebih - pengeluaran

alert(`saya memiliki saldo awal sebesar RP.${saldoAwal} dan ditambahkan sebesar RP.${saldoLebih} lalu, saya berhutang/pengeluaran sebesar RP.${pengeluaran} jadi, saldo saya sekarang adalah RP.${saldoAkhir}`)

let hari = new Date().getDay()
console.log (hari)

if (hari == 1) { 
    alert("hari ini hari senin")
}
else if (hari == 2) {
    alert("hari ini hari selasa")
}
else if (hari == 3) {
    alert("hari ini hari rabu")
}
else if (hari == 4) {
    alert("hari ini hari kamis")
}
else if (hari == 5) {
    alert("hari ini hari jum'at")
}
else if (hari == 6) {
    alert("hari ini hari sabtu")
}
else if(hari == 7) {
    alert("hari ini hari minggu/ahad")
}
