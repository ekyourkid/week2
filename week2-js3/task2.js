function looper(error, data) {
    if (error) {
        console.log(error);
    }
    return data.map((month) => console.log(month));
}

const getMonth = (callback) => {
    setTimeout(() => {
        let error = true;
        let months = [
            "January",
            "February",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];

        if (!error) {
            callback(null, months);
        } else {
            callback(new Error("Sorry Data Not Found!"), []);
        }
    }, 4000);
};

getMonth(looper);
