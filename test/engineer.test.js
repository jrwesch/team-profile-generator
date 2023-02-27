const Engineer = require('../lib/Engineer');
const engineer = new Engineer('joel', '12345', 'jrwesch@gmail.com', 'jrwesch');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('joel');
    expect(engineer.id).toBe('12345');
    expect(engineer.email).toBe('jrwesch@gmail.com');
    expect(engineer.githubUsername).toBe('jrwesch');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('joel');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('12345');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('jrwesch@gmail.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('jrwesch');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});