const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let engineerArr = [];
let internArr = [];
let managerArr = [];

function addMember() {
    inquirer.prompt([{
        type: 'text',
        name: 'name',
        message: 'Enter you team members name.'
    
    
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the team members role?',
        choices: [
            'Engineer',
            'Intern',
            'Manager'
        ]

    },
    {
        type: 'text',
        name: 'id',
        message: 'id'
    },
    {
        type: 'text',
        name: 'email',
        message: 'What is your team members email?'
    }


])
.then(function({name, role, id, email}){
    
    if (role === "Engineer") {
        inquirer.prompt({
            type: 'text',
            name: 'github',
            message: 'What is the employees github'
        })
        const intern = new Intern(name, role, id, email, github);
        internArr.push(intern)

    }
    else if (role === "Intern") {
        inquirer.prompt({
            type: 'text',
            name: 'school',
            message: 'What is the employees school?'
        })
    }
    else{
        inquirer.prompt({
            type: 'text',
            name: 'office number',
            message: 'What is the employees office number?'
        })

    }
    inquirer.prompt({
        type: 'list',
        name: 'addMember',
        message: 'Would you like to add another employee?',
        choices: [
            'Yes',
            'No'
        ]
    })
})


    

}

addMember();