//Unica funcion para consumir la API "Random User Generator"
function obtenerPersonas() {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('listaPersonas');
            lista.innerHTML = ''; //Para limpiar la lista cuando hayan nuevos valores.

            data.results.forEach(person => {
                const card = document.createElement('div');
                card.classList.add('card');

                card.innerHTML = `
                    <h3>${person.name.first} ${person.name.last}</h3> 
                    <p><strong>Género:</strong> ${person.gender}</p>
                    <p><strong>Ubicación:</strong> ${person.location.city}, ${person.location.country}</p>
                    <p><strong>Correo:</strong> ${person.email}</p>
                    <p><strong>Fecha de nacimiento:</strong> ${new Date(person.dob.date).toLocaleDateString()}</p>
                    <img src="${person.picture.medium}" alt="Foto de ${person.name.first}">
                `;
                lista.appendChild(card);
            });
        })
        //Responsable de manejar errores de generación
        .catch(error => console.error('Error al obtener los datos:', error));
}
