function pijarFood(harga, voucher, jarak, pajak) {
    let hasilPotongan = "";
    let hasilJarak = "";
    let hasilPajak = "";

    if (harga >= 50000 && voucher == "PIJARFOOD5") {
        hasilPotongan = harga * 0.5;
    } else if (harga >= 25000 && voucher == "DITRAKTIRPIJAR") {
        hasilPotongan = harga * 0.6;
    } else {
        hasilPotongan = harga;
    }

    let tarif = 5000;

    if (jarak <= 2) {
        hasilJarak = tarif;
    } else if (jarak > 2) {
        hasilJarak = (jarak - 2) * 3000;
        hasilJarak += tarif;
    }

    if (pajak === true) {
        hasilPajak = harga * 0.05;
    }
    let hasilSubtotal = harga - hasilPotongan + hasilJarak + hasilPajak;
    let result = {
        Harga: harga,
        Potongan: hasilPotongan,
        BiayaAntar: hasilJarak,
        Pajak: hasilPajak,
        Subtotal: hasilSubtotal,
    };
    return result;
}
console.log(pijarFood(75000, "PIJARFOOD5", 5, true));
