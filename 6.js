function format(params) {
    judul = params.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
    });
    biasa = params[0].toUpperCase() + params.slice(1).toLowerCase()

    console.log({
        'Format Judul': judul,
        'Format Biasa': biasa
    });
}
format("SeLamAT PAGi semua halOo")