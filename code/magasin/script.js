let slideIndex = 1;
showSlides(slideIndex);
var qtePanier = {
  "#nbPanier1":0,
  "#nbPanier2":0,
  "#nbPanier3":0,
  "#nbPanier4":0
};

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

function plus(id) {
  var nb = parseInt(document.querySelector(id).innerHTML);
  nb++;
  if(nb > 10)
    nb = 10;
  document.querySelector(id).innerHTML = nb;
}

function moins(id) {
  var nb = parseInt(document.querySelector(id).innerHTML);
  nb--;
  if(nb < 0)
    nb = 0;
  document.querySelector(id).innerHTML = nb;
}

function ajoutPanier(id_qte, id_li, id_span) {
  var qte = parseInt(document.querySelector(id_qte).innerHTML);
  document.querySelector(id_li).style.display = "block";
  qtePanier[id_span] += qte;
  document.querySelector(id_span).innerHTML = qtePanier[id_span];
}