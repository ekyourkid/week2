//  Pada Javascript terdapat 2 jenis fungsi, yaitu fungsi built-in atau fungsi bawaan dari Javascript
// dimana tinggal dipergunakan saja dan fungsi buatan sendiri. Fungsi buatan sendiri
// dipergunakan untuk mempermudah pengerjaan perintah yang berulang-ulang, sehingga fungsi
// buatan sendiri harus didefinisikan terlebih dahulu agar dapat dikenali oleh Javascript.

//  Salah satu contoh fungsi built -in Javascript adalah fungsi document.write yang telah banyak
// dipergunakan sejak awal. Ada banyak fungsi-fungsi built-in Javascript lainnya, seperti fungsi
// untuk jam dan tanggal, fungsi matematika, fungsi string, dan sebagainya.

let hurufKapital = 'hello'
console.log( `No. 1 -> ${hurufKapital.toUpperCase()}` )
// toUpperCase() Mengembalikan nilai string pemanggilan yang dikonversi ke huruf besar.


let hurufKecil = 'HELLO'
console.log( `No. 2 -> ${hurufKecil.toLowerCase()}` )
// toLowerCase() Mengembalikan nilai string pemanggilan yang dikonversi ke huruf kecil.


let kata = 'Rizky Syahputra'
console.log( `No. 3 -> ${kata.toLocaleUpperCase()}` )
// toLocaleUpperCase() Karakter dalam string dikonversi menjadi huruf besar dengan tetap memperhatikan lokalitas saat ini.


let kata2 = 'Rizky Syahputra'
console.log( `No. 4 -> ${kata2.toLocaleLowerCase()}` )
// toLocaleLowerCase() Karakter dalam string dikonversi menjadi huruf kecil dengan tetap memperhatikan lokalitas saat ini.


let arr = ['kucing', 'kelinci', 'kuda', 'sapi']
console.log( `No. 5 -> ${arr.pop()}` )
// pop() Menghapus elemen terakhir dari larik dan mengembalikan elemen tersebut.


let arr2 = ['kucing', 'kelinci', 'kuda', 'sapi']
console.log( `No. 6 -> ${arr2.slice( 1 )}` )
// slice() Mengekstrak bagian dari larik dan mengembalikan larik baru.


let arr3 = ['kucing', 'kelinci', 'kuda', 'sapi']
let tambahHewan = 'beruang'
arr3.push( tambahHewan )
console.log( `No. 7 -> ${arr3}` )
// push() Menambahkan satu atau beberapa elemen ke akhir larik dan mengembalikan panjang larik yang baru.


let waktu = Date()
console.log( `No. 8 -> sekarang waktu menunjukan \n ${waktu}` )
// Date() Mengembalikan tanggal dan waktu hari ini.

function nilaiUn ( mtk, bindo, binggris, ipa )
{
    let calc = ( mtk + bindo ) + ( binggris + ipa )
    let result = calc / 4
    var grade = ''

    if ( result >= 90 && result <= 100 )
    {
        grade = "A"
    } else if ( result >= 80 && result <= 89 )
    {
        grade = 'B'
    } else if ( result >= 70 && result <= 79 )
    {
        grade = 'C'
    } else if ( result >= 60 && result <= 69 )
    {
        grade = 'D'
    }else if ( result >= 0 && result <= 59 )
    {
        grade = 'E'
    }
    return `No. 9 ->
    Nilai Rata-rata = ${result}
    Dibulatkan menjadi ${Math.round( result )} 
    Grade =  ${grade}`
}
console.log( nilaiUn( 80, 90, 50, 30 ) )
// Math.round() Mengembalikan x yang dibulatkan ke bilangan bulat terdekat.

function jumlahHuruf ( kata )
{
    return `No. 10 -> Ada ${kata.length} huruf`
}
console.log( jumlahHuruf( 'Rizky Syahputra' ) )
// .length Mencerminkan jumlah elemen dalam larik.