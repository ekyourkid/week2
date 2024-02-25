const divideAndSort = (5956560159466056)
    .toString()
    .split("0")
    .map((part) => part.split("").sort().join(""));

hasil = divideAndSort.join("");
console.log(parseInt(hasil));
