//Unica funcion responsable de consumir y generar con la Api
function obtenerPersonas() {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => {
            const tabla = document.querySelector("#tablaPersonas tbody");
            tabla.innerHTML = ''; // Limpiar la tabla antes de agregar nuevos datos generados

            data.results.forEach(person => {
                const fila = document.createElement('tr');

                fila.innerHTML = `
                    <td>${person.name.first} ${person.name.last}</td>
                    <td>${person.gender}</td>
                    <td>${person.location.city}, ${person.location.country}</td>
                    <td>${person.email}</td>
                    <td>${new Date(person.dob.date).toLocaleDateString()}</td>
                    <td><img src="${person.picture.medium}" alt="Foto de ${person.name.first}"></td>
                `;

                tabla.appendChild(fila);
            });
        })
        //Para alcanzar cualquier error
        .catch(error => console.error('Error al obtener los datos:', error));
}
