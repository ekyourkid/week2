function seleksiNilai (nilaiAwal, nilaiAkhir, arr)
{
    if ( arr.length <= 5 )
    {
        return 'Jumlah angka dalam dataArray harus lebih dari 5'
    } else if (nilaiAwal >= nilaiAkhir)
    {
        return 'Nilai akhir harus lebih besar dari nilai awal'
    }

    const newArr = []
    for ( let index = 0; index < arr.length; index++ )
    {
        const element = arr[index];
        if ( element >= nilaiAwal && element <= nilaiAkhir)
        {
            newArr.push( element )
        }
    }
    if (newArr.length === 0  ) return 'Nilai tidak ditemukan'
    return newArr.sort(compareSort)
}

function compareSort (a,b)
{
    return a - b
}

console.log(seleksiNilai( 5, 20, [2, 25, 4, 14, 17, 30, 8] ) )
// console.log(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]))
// console.log(seleksiNilai( 15, 3, [2, 25, 4, 14, 17, 30, 8] ) )
// console.log(seleksiNilai(5, 17 , [2, 25, 4]))