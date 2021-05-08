var deret = "";
function kelipatanEmpat(nilai) {
    if (nilai < 100) {
        nilai = (nilai + 4);
        if (nilai <= 100) {
            deret += nilai + " ";
            kelipatanEmpat(nilai);
        }
    }
}
kelipatanEmpat(0)
console.log(deret);