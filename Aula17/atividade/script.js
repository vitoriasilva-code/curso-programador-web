function verificarMedia() {
    let nota1 = Number(document.getElementById("media1")).value;
    let nota2 = Number(document.getElementById("media2")).value;
    let nota3 = Number(document.getElementById("media3")).value;
    let nota4 = Number(document.getElementById("media3")).value;
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log("Media final:" + media);
}