function gebi(id){
    return document.getElementById(id)
}

function multiplicar() {
    let valorN1 = parseInt(gebi("n1").value);
    let valorN2 = parseInt(gebi("n2").value)
    let valorN3 = parseInt(gebi("n3").value);
    let valorN4 = parseInt(gebi("n4").value)
    let valorN5 = parseInt(gebi("n5").value);
    let valorN6 = parseInt(gebi("n6").value)
    let valorN7 = parseInt(gebi("n7").value);
    let valorN8 = parseInt(gebi("n8").value)
    let valorN9 = parseInt(gebi("n9").value);
    let valorN10 = parseInt(gebi("n10").value)
    let valorN11 = parseInt(gebi("n11").value);
    let valorN12 = parseInt(gebi("n12").value)
    let resultado1 = valorN1 * valorN2
    let resultado2 = valorN3 * valorN4
    let resultado3 = valorN5 * valorN6
    let resultado4 = valorN7 * valorN8
    let resultado5 = valorN9 * valorN10
    let resultado6 = valorN11 * valorN12
    gebi("resultado1").value = resultado1
    gebi("resultado2").value = resultado2
    gebi("resultado3").value = resultado3
    gebi("resultado4").value = resultado4
    gebi("resultado5").value = resultado5
    gebi("resultado6").value = resultado6
}

function somar(){
    let valorc1 = parseInt(gebi("resultado1").value)
    let valorc2 = parseInt(gebi("resultado2").value)
    let valorc3 = parseInt(gebi("resultado3").value)
    let totalalimentos = valorc1 + valorc2 + valorc3
    gebi("totalalimentos").value = totalalimentos
    let valord1 = parseInt(gebi("resultado4").value)
    let valord2 = parseInt(gebi("resultado5").value)
    let valord3 = parseInt(gebi("resultado6").value)
    let totaldivul = valord1 + valord2 + valord3
    gebi("totaldivul").value = totaldivul
    let valort1 = parseInt(gebi("totalalimentos").value)
    let valort2 = parseInt(gebi("totaldivul").value)
    let total1 = valort1 += valort2  
    gebi("somatotal").value =  total1
}

function moedas(){
    let dolar = prompt('Digite o valor do Dólar')
    let euro = prompt('Digite o valor do Euro')
    let dolar1 = gebi("totalalimentos").value
    let dolar2 = gebi("totaldivul").value
    let dolar3 = gebi("somatotal").value
    let euro1 = gebi("totalalimentos").value
    let euro2 = gebi("totaldivul").value
    let euro3 = gebi("somatotal").value
    let rstdolar1 = dolar1 / dolar
    let rstdolar2 = dolar2 / dolar
    let rstdolar3 = dolar3 / dolar
    let rsteuro1 = euro1 / euro
    let rsteuro2 = euro2 / euro
    let rsteuro3 = euro3 / euro
    gebi("dolar1").value = "$" + rstdolar1
    gebi("dolar2").value = "$" + rstdolar2
    gebi("dolar3").value = "$" + rstdolar3
    gebi("euro1").value = "€" + rsteuro1
    gebi("euro2").value = "€" + rsteuro2
    gebi("euro3").value = "€" + rsteuro3

}

function montartexto(){
    let inscritos = gebi("numero_participantes").value
    let qtdCafe = gebi("n1").value
    let qtdBolo = gebi("n3").value
    let qtdHotdog = gebi("n5").value
    let qtdBanner = gebi("n7").value
    let qtdCracha = gebi("n9").value
    let qtdCamiseta = gebi("n11").value
    let totalCafe = gebi("resultado1").value
    let totalBolo = gebi("resultado2").value
    let totalHotdog = gebi("resultado3").value
    let totalBanner = gebi("resultado4").value
    let totalCracha = gebi("resultado5").value
    let totalCamiseta = gebi("resultado6").value
    let pdrAlimentos = gebi("totalalimentos").value
    let pdrDivul = gebi("totaldivul").value
    let pdrTotal = gebi("somatotal").value
    gebi('texto').value = "O evento contando com " + inscritos + " inscritos vendeu " + qtdCafe + " cafés rendendo R$" + totalCafe + ", vendeu " + qtdBolo + " bolos rendendo R$" + totalBolo
    + ", vendeu " + qtdHotdog + " cachorros-quentes  rendendo R$" + totalHotdog + ",  vendeu " + qtdBanner + " benners rendendo R$" + totalBanner + ", vendeu" + qtdCracha + " crachás rendendo R$"
    + totalCracha + ", vendeu " + qtdCamiseta + " camisetas rendendo R$" + totalCamiseta + "." + "O evento lucrou R$" + pdrAlimentos + " com alimentos" + ", com divulgação lucrou "
    + pdrDivul + " ao total lucrou R$" + pdrTotal + " - feito por Allan F.Fantin e Arthur Gaio - "
}


window.onload = function recupera(){
    // Verifica se o localStorage possui o item com a chave "total_inscritos"
    if (localStorage.getItem("total_inscritos")) {
    // Recupera o valor associado à chave "total_inscritos"
    var totalInscritos = localStorage.getItem("total_inscritos");
    // Converte o valor para o tipo numérico, se necessário
    totalInscritos = parseInt(totalInscritos, 10); // 10 é a base decimal
    document.getElementById('numero_participantes').value = totalInscritos
    }

    gebi("n1").value = totalInscritos
    gebi("n3").value = totalInscritos
    gebi("n5").value = totalInscritos
    gebi("n7").value = totalInscritos
    gebi("n9").value = totalInscritos
    gebi("n11").value = totalInscritos
}


function local() {
    if (!localStorage.getItem('total_inscritos')) {
        localStorage.setItem('total_inscritos', "0");
    }

    var totalInscritos = localStorage.getItem('total_inscritos');
    totalInscritos = parseInt(totalInscritos, 10)+ 1;
    localStorage.setItem('total_inscritos', totalInscritos);
  }

  
const imgs = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".botao i");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndexx = 0;
let time = 2000; //Tempo padrão para apresentação de slides automática

const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.add("fa-dot-circle");
};

defClass(1, 0);

leftArrow.addEventListener("click", function () {
  currentIndexx <= 0 ? currentIndexx = imgs.length - 1 : currentIndexx--;
  defClass(0, currentIndexx);
});

rightArrow.addEventListener("click", function () {
  currentIndexx >= imgs.length - 1 ? currentIndexx = 0 : currentIndexx++;
  defClass(0, currentIndexx);
});

const startAutoSlide = () => {
  setInterval(() => {
    currentIndexx >= imgs.length - 1 ? currentIndexx = 0 : currentIndexx++;
    defClass(0, currentIndexx);
  }, time);
};

startAutoSlide(); //Inicia o slideshow