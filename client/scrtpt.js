// script.js

const customersContainer = document.getElementById('customers');

// Función para obtener todos los clientes desde el servidor
async function getCustomers() {
    try {
        const response = await fetch('http://localhost:3000/api/customers');
        const customers = await response.json();
        displayCustomers(customers);
    } catch (error) {
        console.error('Error al obtener clientes:', error);
    }
}

// Función para mostrar los clientes en el frontend
function displayCustomers(customers) {
    customersContainer.innerHTML = '';
    customers.forEach(customer => {
        const customerElement = document.createElement('div');
        customerElement.innerHTML = `
            <h3>${customer.name}</h3>
            <p>ID: ${customer.id}</p>
            <hr>
        `;
        customersContainer.appendChild(customerElement);
    });
}

// Llamar a la función para obtener clientes al cargar la página
getCustomers();
