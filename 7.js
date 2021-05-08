function code(val) {
    array = []
    ar = val.split('')
    let cek = 0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === ar[i + 1]) {
            cek = cek+1
        }
        else if (ar[i] !== ar[i + 1]){
            array.push({name: ar[i], jumlah: cek+1})
            cek = 0
        }
    }
}
code("aaabbcccaaaac")

for (let j = 0; j < array.length; j++) {
    console.log(array[j].name +' = '+ array[j].jumlah)
    
}