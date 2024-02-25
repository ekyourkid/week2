const cekHariKerja = (day) => {
    try {
        // try  ini untuk menangkap output dan error
        return (
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    const result = [];
                    const today = day,
                        getToday = today.getDay();
                    const dataDay = [
                        "senin",
                        "selasa",
                        "rabu",
                        "kamis",
                        "jumat",
                        "sabtu",
                        "minggu",
                    ];
                    result.push(dataDay[getToday - 1]);
                    console.log(result);

                    if (getToday + 1 <= dataDay.length - 2) {
                        resolve(
                            `hari ini masuk kerja, karna hari ini hari ${result}`
                        );
                    } else {
                        reject(`ini bukan hari kerja`);
                    }
                }, 3000);
            })
                .then((data) => console.log(data))
                // .then ini untuk menangkap output value dari eksekusi kondisi if else diatas
                .catch((err) => {
                    throw new Error(err);
                })
        );
        // .catch ini untuk melempar error message ke catch scope luar
    } catch (error) {
        console.log(error);
    }
    // catch ini untuk menangkap throw message yang dilempar tadi dan menampilkan output error
};

cekHariKerja(new Date());
