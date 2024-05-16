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

function ajoutPanier(id_qte, id_tr, id_span) {
  var qte = parseInt(document.querySelector(id_qte).innerHTML);
  if(qte > 0) {
    document.querySelector(id_tr).style.visibility = "visible";
    document.querySelector("#panier").style.visibility = "visible";
  }
  qtePanier[id_span] += qte;
  document.querySelector(id_span).innerHTML = qtePanier[id_span];
}

function supprProduit(id_tr, id_span, nom) {
  if(window.confirm("Voulez vous vraiment supprimer " + nom + " de votre panier?")) {
    if(window.confirm("En êtes-vous vraiment sûr?")) {
      if(window.confirm("Attention, si vous supprimez " + nom + ", cela n'apparaitra plus dans le panier")) {
        if(window.confirm("Cela supprimera également la quantité que vous avez entrer!")) {
          setTimeout(regret, 4000, id_tr, id_span, nom, qtePanier[id_span]);
          qtePanier[id_span] = 0;
          document.querySelector(id_tr).style.visibility = "hidden";
          var val = Object.values(qtePanier)
          if(val[0] == 0 && val[1] == 0 && val[2] == 0 && val[3] == 0) {
            document.querySelector("#panier").style.visibility = "hidden";
          }
        }
      }
    }
  }
}

function regret(id_tr, id_span, nom, qte) {
  if(window.confirm("Si vous regrettez d'avoir supprimer " + nom + " de votre panier, nous pouvons le remettre. Regrettez-vous votre choix?")) {
    qtePanier[id_span] = qte;
    document.querySelector(id_tr).style.visibility = "visible";
    document.querySelector("#panier").style.visibility = "visible";
  }
}