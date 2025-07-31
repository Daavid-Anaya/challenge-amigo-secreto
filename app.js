// Array para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Eliminar espacios al inicio y al final

    if (nombre !== '') {
        amigos.push(nombre); // Agregar el nombre al array
        input.value = ''; // Limpiar el campo de entrada
        actualizarListaAmigos(); // Actualizar la lista de amigos
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual

    // Recorrer el array de amigos y crear un elemento li para cada uno
    for (const amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length !== 0) {
        const indice = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
        const amigoSorteado = amigos[indice]; // Obtener el amigo sorteado
        document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSorteado}`; // Mostrar el resultado del sorteo
    } else {
        alert('No hay amigos para sortear. Por favor, agrega amigos primero.');
    }
}