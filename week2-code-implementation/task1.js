// case 1
function kata1(index) {
    let palindrome = "";
    for (let i = index.length - 1; i >= 0; i--) {
        palindrome += index[i];
    }
    if (index.toLowerCase() == palindrome.toLowerCase()) {
        return "ini palindrome";
    } else {
        return "ini bukan palindrome";
    }
}
console.log(kata1("Jamal"));

// case 2
function kata2(value) {
    let test = value.split(" ").reverse();
    let result = test.toString();
    let reverse = "";

    for (let index = 0; index < result.length; index++) {
        let element = result[index].replace(",", " ");
        reverse += element;
    }
    return reverse;
}

console.log(kata2("Saya belajar Javascript"));
