const { exportAllDeclaration } = require("@babel/types");
const { TestResult } = require("@jest/types");
const Employee = require("../lib/Employee");

test('Can set employee name', () => {
    const employee = new Employee ('Bob');
    expect(employee.name).toBe('Bob');
})

test('Can set ID', () => {
    const testID = 1;
    const employee = new Employee ('Bob', testID)
    expect(employee.id).toBe(testID);
})

test ('can set Email', () => {
    const testEmail = 'test@gmail.com';
    const employee = new Employee ('Bob', 0, testEmail);
    expect(employee.email).toBe(testEmail);
})