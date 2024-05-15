document.addEventListener("DOMContentLoaded", function() {
    // Récupérer les éléments du DOM nécessaires
    const addMemberForm = document.querySelector('#add-member-form');
    const editForm = document.querySelector('#edit-member-form');
    const editNameInput = document.querySelector('#edit-name');
    const editPositionInput = document.querySelector('#edit-position');
    const editDescriptionInput = document.querySelector('#edit-description');
    const teamContainer = document.querySelector('#team-container');
    const createProfileForm = document.querySelector('#add-member-form');

    // Fonction pour ajouter un membre d'équipe
    function addTeamMember(event) {
        // Empêcher le comportement par défaut du formulaire
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
            addMemberForm.style.display = 'none';
            editForm.style.display = 'block';

            // Pré-remplir les champs avec les informations actuelles
            const memberDiv = event.target.parentNode;
            editNameInput.value = memberDiv.querySelector('strong').textContent;
            editPositionInput.value = memberDiv.querySelector('br').nextSibling.textContent;
            editDescriptionInput.value = memberDiv.querySelector('p:last-of-type').textContent;

            // Mettre à jour le membre d'équipe lors de la soumission du formulaire d'édition
            editForm.onsubmit = function(event) {
                event.preventDefault();
                // Mettre à jour les informations du membre d'équipe
                memberDiv.querySelector('strong').textContent = editNameInput.value;
                memberDiv.querySelector('br').nextSibling.textContent = editPositionInput.value;
                memberDiv.querySelector('p:last-of-type').textContent = editDescriptionInput.value;

                // Masquer le formulaire d'édition, afficher le formulaire d'ajout et masquer le formulaire de création de profil
                editForm.style.display = 'none';
                addMemberForm.style.display = 'block';
                createProfileForm.style.display = 'none';
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
        teamContainer.appendChild(memberDiv);

        // Réinitialiser le formulaire
        addMemberForm.reset();

        // Masquer le formulaire de création de profil après l'ajout d'un membre
        addMemberForm.style.display = 'none';
    }

    // Ajouter un écouteur d'événements pour le formulaire d'ajout
    addMemberForm.addEventListener('submit', addTeamMember);

    // Ajouter un écouteur d'événements pour afficher le formulaire de création de profil
    document.getElementById('show-create-form').addEventListener('click', function() {
        addMemberForm.style.display = 'block';
    });

    // Ajouter un écouteur d'événements pour le bouton "Éditer" (utilisation de la délégation d'événements)
    teamContainer.addEventListener('click', function(event) {
        if (event.target.textContent === 'Éditer') {
            // Afficher le formulaire d'édition
            addMemberForm.style.display = 'none';
            editForm.style.display = 'block';

            // Pré-remplir les champs avec les informations actuelles
            const memberDiv = event.target.parentNode;
            editNameInput.value = memberDiv.querySelector('strong').textContent;
            editPositionInput.value = memberDiv.querySelector('br').nextSibling.textContent;
            editDescriptionInput.value = memberDiv.querySelector('p:last-of-type').textContent;

            // Mettre à jour le membre d'équipe lors de la soumission du formulaire d'édition
            editForm.onsubmit = function(event) {
                event.preventDefault();
                // Mettre à jour les informations du membre d'équipe
                memberDiv.querySelector('strong').textContent = editNameInput.value;
                memberDiv.querySelector('br').nextSibling.textContent = editPositionInput.value;
                memberDiv.querySelector('p:last-of-type').textContent = editDescriptionInput.value;

                // Masquer le formulaire d'édition, afficher le formulaire d'ajout et masquer le formulaire de création de profil
                editForm.style.display = 'none';
                addMemberForm.style.display = 'block';
                createProfileForm.style.display = 'none';
            };
        }
    });
});
