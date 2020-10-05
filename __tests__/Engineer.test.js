const Engineer = require('../lib/Engineer');

test("Can set engineer name", () =>{
    const engineer = new Engineer ('Bob');
    expect(engineer.name).toBe('Bob');
})

test("Can set engineer github", () =>{
    const testGithub = "githubuser"
    const engineer = new Engineer ('Bob', 1 , "test@gmail.com", testGithub);
    expect(engineer.github).toBe(testGithub);
})