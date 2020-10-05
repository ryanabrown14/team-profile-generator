const { TestResult } = require('@jest/types');
const Intern = require('../lib/Intern');

test('can get school', () => {
    const testSchool = 'UofA';
    const intern = new Intern('Bob', 1, 'test@gmail.com', testSchool);
    expect(intern.school).toBe(testSchool);
})