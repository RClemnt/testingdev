document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour ajouter un membre d'équipe
    function addTeamMember(event) {
        event.preventDefault();

        // Récupérer les valeurs du formulaire
        const name = document.querySelector('#name').value;
        const position = document.querySelector('#position').value;
        const description = document.querySelector('#description').value;
        const photo = document.querySelector('#photo').files[0];

        // Créer un nouvel élément membre d'équipe
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('team-member');

        // Créer et ajouter l'image
        const img = document.createElement('img');
        img.src = URL.createObjectURL(photo);
        img.alt = name;
        memberDiv.appendChild(img);

        // Créer et ajouter le nom et le poste
        const namePosition = document.createElement('p');
        namePosition.innerHTML = `<strong>${name}</strong><br>${position}`;
        memberDiv.appendChild(namePosition);

        // Créer et ajouter la description
        const descriptionPara = document.createElement('p');
        descriptionPara.textContent = description;
        memberDiv.appendChild(descriptionPara);

        // Créer et ajouter le bouton d'édition
        const editButton = document.createElement('button');
        editButton.textContent = 'Éditer';
        editButton.onclick = function() {
            // Remplir le formulaire d'édition avec les valeurs actuelles
            document.querySelector('#edit-name').value = name;
            document.querySelector('#edit-position').value = position;
            document.querySelector('#edit-description').value = description;

            // Afficher le formulaire d'édition et cacher le formulaire d'ajout
            document.querySelector('#add-member-form').style.display = 'none';
            document.querySelector('#edit-member-form').style.display = 'block';

            // Mettre à jour le membre d'équipe lors de la soumission du formulaire d'édition
            document.querySelector('#edit-member-form').onsubmit = function(event) {
                event.preventDefault();
                name = document.querySelector('#edit-name').value;
                position = document.querySelector('#edit-position').value;
                description = document.querySelector('#edit-description').value;

                // Mettre à jour les informations du membre d'équipe
                namePosition.innerHTML = `<strong>${name}</strong><br>${position}`;
                descriptionPara.textContent = description;

                // Cacher le formulaire d'édition et réafficher le formulaire d'ajout
                document.querySelector('#add-member-form').style.display = 'block';
                document.querySelector('#edit-member-form').style.display = 'none';
            };
        };
        memberDiv.appendChild(editButton);

        // Créer et ajouter le bouton de suppression
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.onclick = function() {
            // Supprimer le membre d'équipe
            memberDiv.remove();
        };
        memberDiv.appendChild(deleteButton);

        // Ajouter le membre d'équipe au conteneur
        document.querySelector('#team-container').appendChild(memberDiv);

        // Réinitialiser le formulaire
        document.querySelector('#add-member-form').reset();
    }

    // Ajouter un écouteur d'événements pour le formulaire d'ajout
    document.querySelector('#add-member-form').addEventListener('submit', addTeamMember);
});
