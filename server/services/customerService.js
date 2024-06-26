let customers = [
    { id: 1, name: 'Cliente A' },
    { id: 2, name: 'Cliente B' }
];

function getAllCustomers() {
    return customers;
}

function getCustomerById(id) {
    return customers.find(customer => customer.id === parseInt(id));
}

function createCustomer(customer) {
    const newCustomer = { id: customers.length + 1, ...customer };
    customers.push(newCustomer);
    return newCustomer;
}

function updateCustomer(id, updatedCustomer) {
    const index = customers.findIndex(customer => customer.id === parseInt(id));
    if (index !== -1) {
        customers[index] = { id: parseInt(id), ...updatedCustomer };
        return { success: true };
    }
    return { success: false };
}

function deleteCustomer(id) {
    customers = customers.filter(customer => customer.id !== parseInt(id));
    return { success: true };
}

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};
