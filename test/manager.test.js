const Manager = require('../lib/Manager');
const manager = new Manager('joel', '12345', 'jrwesch@gmail.com', '206');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('joel');
    expect(manager.id).toBe('12345');
    expect(manager.email).toBe('jrwesch@gmail.com');
    expect(manager.officeNumber).toBe('206');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('joel');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('12345');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('jrwesch@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('206');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});