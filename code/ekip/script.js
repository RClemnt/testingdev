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
            // Afficher le formulaire d'édition
            document.querySelector('#add-member-form').style.display = 'none';
            const editForm = document.querySelector('#edit-member-form');
            editForm.style.display = 'block';

            // Pré-remplir les champs avec les informations actuelles
            editForm.querySelector('#edit-name').value = name;
            editForm.querySelector('#edit-position').value = position;
            editForm.querySelector('#edit-description').value = description;

            // Mettre à jour le membre d'équipe lors de la soumission du formulaire d'édition
            editForm.onsubmit = function(event) {
                event.preventDefault();
                const editedName = editForm.querySelector('#edit-name').value;
                const editedPosition = editForm.querySelector('#edit-position').value;
                const editedDescription = editForm.querySelector('#edit-description').value;

                // Mettre à jour les informations du membre d'équipe
                namePosition.innerHTML = `<strong>${editedName}</strong><br>${editedPosition}`;
                descriptionPara.textContent = editedDescription;

                // Masquer le formulaire d'édition et afficher le formulaire d'ajout
                editForm.style.display = 'none';
                document.querySelector('#add-member-form').style.display = 'block';
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

        // Masquer le formulaire de création de profil après l'ajout d'un membre
        document.querySelector('#add-member-form').style.display = 'none';
    }

    // Ajouter un écouteur d'événements pour le formulaire d'ajout
    document.querySelector('#add-member-form').addEventListener('submit', addTeamMember);

    // Afficher le formulaire de création de profil lors du clic sur le bouton "Créer un profil"
    document.getElementById('show-create-form').addEventListener('click', function() {
        document.querySelector('#add-member-form').style.display = 'block';
    });

    // Ajouter un écouteur d'événements pour le bouton "Annuler" dans le formulaire de création de profil
    document.getElementById('cancel-create').addEventListener('click', function() {
        document.querySelector('#add-member-form').style.display = 'none';
    });
});
