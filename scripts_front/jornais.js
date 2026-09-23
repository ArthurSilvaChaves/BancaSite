function trocarTamanhoTexto(){
    h1.classList.toggle("active");
}

const h1 = document.getElementById("jornaisTexto");

h1.addEventListener("click",trocarTamanhoTexto)
