let slideIndex = 1;
showSlides(slideIndex);
var qtePanier = {
  "#nbPanier1":0,
  "#nbPanier2":0,
  "#nbPanier3":0,
  "#nbPanier4":0
};

const tr = { "#panier1" : "<tr id=\"panier1\">\
<td id=\"nbPanier1\">0</td>\
<td>Boite à outils</td>\
<td>65,00€</td>\
<td><button onclick=\"supprProduit('#panier1', '#nbPanier1', 'boite à outils')\">\
<img src=\"../images/poubelle.png\" /></button></td></tr>",
"#panier2" : "<tr id=\"panier2\">\
<td id=\"nbPanier2\">0</td>\
<td>Jeu de clés</td>\
<td>59,00€</td>\
<td><button onclick=\"supprProduit('#panier2', '#nbPanier2', 'jeu de clés')\">\
<img src=\"../images/poubelle.png\" /></button></td></tr>",
"#panier3" : "<tr id=\"panier3\">\
<td id=\"nbPanier3\">0</td>\
<td>Perceuse</td>\
<td>150,00€</td>\
<td><button onclick=\"supprProduit('#panier3', '#nbPanier3', 'perceuse')\">\
<img src=\"../images/poubelle.png\" /></button></td></tr>",
"#panier4" : "<tr id=\"panier4\">\
<td id=\"nbPanier4\">0</td>\
<td>Tournevis</td>\
<td>15,24€</td>\
<td><button onclick=\"supprProduit('#panier4', '#nbPanier4', 'tournevis')\">\
<img src=\"../images/poubelle.png\" /></button></td></tr>" }

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

function ajoutPanier(id_qte, id_ligne, id_qte_panier) {
  var qte = parseInt(document.querySelector(id_qte).innerHTML);
  if(qte > 0) {
    if(qtePanier[id_qte_panier] == 0)
      document.querySelector("#tbody").innerHTML += tr[id_ligne];
    document.querySelector("#panier").style.visibility = "visible";
  }
  qtePanier[id_qte_panier] += qte;
  document.querySelector(id_qte_panier).innerHTML = qtePanier[id_qte_panier];
}

function supprProduit(id_ligne, id_qte_panier, nom) {
  if(window.confirm("Voulez vous vraiment supprimer " + nom + " de votre panier?")) {
    if(window.confirm("En êtes-vous vraiment sûr?")) {
      if(window.confirm("Attention, si vous supprimez " + nom + ", cela n'apparaitra plus dans le panier")) {
        if(window.confirm("Cela supprimera également la quantité que vous avez entrer!")) {
          setTimeout(regret, 4000, id_ligne, id_qte_panier, nom, qtePanier[id_qte_panier]);
          qtePanier[id_qte_panier] = 0;
          document.querySelector(id_ligne).remove();
          var val = Object.values(qtePanier)
          if(val[0] == 0 && val[1] == 0 && val[2] == 0 && val[3] == 0) {
            document.querySelector("#panier").style.visibility = "hidden";
          }
        }
      }
    }
  }
}

function regret(id_ligne, id_qte_panier, nom, qte) {
  if(window.confirm("Si vous regrettez d'avoir supprimer " + nom + " de votre panier, nous pouvons le remettre. Regrettez-vous votre choix?")) {
    qtePanier[id_qte_panier] = qte;
    document.querySelector("#tbody").innerHTML += tr[id_ligne];
    document.querySelector(id_qte_panier).innerHTML = qtePanier[id_qte_panier];
    document.querySelector("#panier").style.visibility = "visible";
  }
}