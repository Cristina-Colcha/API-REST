const customersService = require('../services/customerService');

function getAllCustomers(req, res) {
    // Lógica para obtener todos los clientes
    const customers = customersService.getAllCustomers();
    res.json(customers);
}

function getCustomerById(req, res) {
    // Lógica para obtener un cliente por ID
    const id = req.params.id;
    const customer = customersService.getCustomerById(id);
    res.json(customer);
}

function createCustomer(req, res) {
    // Lógica para crear un cliente
    const newCustomer = req.body;
    const createdCustomer = customersService.createCustomer(newCustomer);
    res.status(201).json(createdCustomer);
}

function updateCustomer(req, res) {
    // Lógica para actualizar un cliente
    const id = req.params.id;
    const updatedCustomer = req.body;
    const result = customersService.updateCustomer(id, updatedCustomer);
    res.json(result);
}

function deleteCustomer(req, res) {
    // Lógica para eliminar un cliente
    const id = req.params.id;
    const result = customersService.deleteCustomer(id);
    res.json(result);
}

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};
