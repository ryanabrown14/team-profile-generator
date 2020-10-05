const { TestResult } = require('@jest/types');
const Manager = require('../lib/Manager');

test('can set office number', () => {
    const testOffice = 12;
    const manager = new Manager ('Bob', 1, 'test@gmail.com', testOffice);
    expect(manager.officeNumber).toBe(testOffice);
})