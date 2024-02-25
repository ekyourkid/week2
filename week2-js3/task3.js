// case 1
// function belanja(uang, hargaBarang) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (uang >= hargaBarang) {
//                 resolve(`Barang berhasil di beli`);
//             } else {
//                 reject(`Uang anda tidak cukup untuk membeli barang ini`);
//             }
//         }, 3000);
//     })
//         .then((data) => console.log(data))
//         .catch((err) => {
//             throw new Error(err);
//         });
// }
// belanja(5000, 10000);

// case 2
function festival(umur, batasUmur) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (umur >= batasUmur) {
                resolve(`Silakan masuk `);
            } else {
                reject(`Maaf anda belum cukup umur, silakan kembali lagi`);
            }
        }, 3000);
    })
        .then((data) => console.log(data))
        .catch((err) => {
            throw new Error(err);
        });
}

festival(15, 17);
