fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.json())
    .then((data) => {
        data.forEach((user) => {
            console.log(user.name);
        });
    })
    .catch((error) => {
        console.error(error, "masuk catch");
    })
    .finally(() => console.log("berhasil fetching"));
