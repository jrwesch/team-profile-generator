const Intern = require('../lib/Intern');
const intern = new Intern('joel', '12345', 'jrwesch@gmail.com', 'UMich');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('joel');
    expect(intern.id).toBe('12345');
    expect(intern.email).toBe('jrwesch@gmail.com');
    expect(intern.school).toBe('UMich');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('joel');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('12345');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('jrwesch@gmail.com');
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('UMich');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});