const employee = {
    name: 'Sam',
    streetAdress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,
    [key]: value,}; 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = "12 Broadway"

    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    delete updateEmployeeWithKeyAndValue.streetAddress
    return {...updateEmployeeWithKeyAndValue}
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}