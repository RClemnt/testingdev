totalBasket('#sousTotal1', '#sousTotal2', '#sousTotal3');

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Add + or - at basket

function plus(id) {
  var nb = parseFloat(document.querySelector(id).innerHTML);
  nb++;
  if(nb > 10)
    nb = 10;
  document.querySelector(id).innerHTML = nb;
}

function moins(id) {
  var nb = parseFloat(document.querySelector(id).innerHTML);
  nb--;
  if(nb < 0)
    nb = 0;
  document.querySelector(id).innerHTML = nb;
}

function erase(idNb, idSt) {
  var nb = parseFloat(document.querySelector(idNb).innerHTML);
  var st = parseFloat(document.querySelector(idSt).innerHTML);
  nb = 0;
  st = 0;
  document.querySelector(idNb).innerHTML = nb;
  document.querySelector(idSt).innerHTML = st;

  totalBasket('#sousTotal1', '#sousTotal2', '#sousTotal3');
}

function sousTotPlus(idNb, idSt, idPb) {
  var nb = parseFloat(document.querySelector(idNb).innerHTML);
  var prix = parseFloat(document.querySelector(idSt).innerHTML);
  var prixBase = parseFloat(document.querySelector(idPb).innerHTML);
  var prixMax = prixBase * 10;
  nb++;
  prix = prix + prixBase;
  if(prix > prixMax) {
    prix = prixMax;
  }
  document.querySelector(idSt).innerHTML = prix;

  totalBasket('#sousTotal1', '#sousTotal2', '#sousTotal3');
}

function sousTotMoins(idNb, idSt, idPb) {
  var nb = parseFloat(document.querySelector(idNb).innerHTML);
  var prix = parseFloat(document.querySelector(idSt).innerHTML);
  var prixBase = parseFloat(document.querySelector(idPb).innerHTML);
  nb--;
  prix = prix - prixBase;
  if (prix < 0) {
    prix = 0;
  }
  document.querySelector(idSt).innerHTML = prix;

totalBasket('#sousTotal1', '#sousTotal2', '#sousTotal3');
}

function totalBasket(tot1, tot2, tot3) {
  var total1 = parseFloat(document.querySelector(tot1).innerHTML);
  var total2 = parseFloat(document.querySelector(tot2).innerHTML);
  var total3 = parseFloat(document.querySelector(tot3).innerHTML);
  

  totalGen = total1 + total2 + total3;
  //var totalGen = parseFloat(document.querySelectorAll('.price-tool div'));
  document.querySelector('#totalGeneral').innerHTML = totalGen;
}

function deleteProduct(idBox, idSt) {
  if(window.confirm('Etes vous sûr(e) de vouloir supprimer ce produit ?')) {
    if(window.confirm('Etes vous sûr(e), sûr(e) ?')) {
      window.confirm('Etes vous sûr(e), sûr(e), sûr(e) ?') 
    } 
      document.querySelector(idSt).innerHTML = 0;

      totalBasket('#sousTotal1', '#sousTotal2', '#sousTotal3');
      
      setTimeout(document.querySelector(idBox).remove(), 1000);
  }
}