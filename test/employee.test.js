const Employee = require('../lib/Employee');
const employee = new Employee('joel', '12345', 'jrwesch@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('joel');
    expect(employee.id).toBe('12345');
    expect(employee.email).toBe('jrwesch@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('joel');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('12345');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('jrwesch@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});