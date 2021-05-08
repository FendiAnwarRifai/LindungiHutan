var msg = "";
function nextAngka(a, b) {
    if (b < 100) {
        a = (a + b);
        if (a < 100) {
            msg += a + " ";
            nextAngka(b, a);
        }
    }
}
nextAngka(0,1)
console.log(msg);