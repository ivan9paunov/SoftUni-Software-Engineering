function easterLunch(input) {
    let kozunaci = Number(input[0]);
    let koriQica = Number(input[1]);
    let kurabii = Number(input[2]);
    let kozunakCena = 3.20;
    let koraQica = 4.35;
    let kurabiiCena = 5.40;
    let boqZaQica = 0.15;
    let totalKozunaci = kozunaci * kozunakCena;
    let totalQica = koraQica * koriQica;
    let totalKurabii = kurabii * kurabiiCena;
    let totalBoq = koriQica * 12 * boqZaQica;
    let total = totalKozunaci + totalQica + totalKurabii + totalBoq;
    console.log(total.toFixed(2));
}

easterLunch(["3","2","3"]);