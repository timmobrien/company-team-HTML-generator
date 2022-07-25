const inquirer = require('inquirer');
const Engineer = require('./src/employees/Engineer');
const Intern = require('./src/employees/Intern');
const Manager = require('./src/employees/Manager');
const fs = require('fs')
const path = require('path');
const generateHtml = require('./src/generate-html/html');

const employees = [];
const outputHtmlFile = path.join(__dirname, 'output', 'team-page.html')

// Main function
async function main () {

    const managerRole = 'Manager';
    const engineerRole = 'Engineer';
    const internRole = 'Intern'

    // Questions list
    const answers = await inquirer.prompt([
        {
            type:'list',
            message: ' What is the role of the employee?',
            choices: [managerRole, engineerRole, internRole] ,
            name: 'role'
        },
        {
            type:'input',
            message: ' What is the ID of the employee?',
            name: 'id'
        },
        {
            type:'input',
            message: ' What is the email of the employee?',
            name: 'email'
        },
        {
            type:'input',
            message: ' What is the name of the employee?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the office number?',
            name: 'office_number',
            when:  (answers) => answers.role === managerRole
        },
        {
            type: 'input',
            message: 'What is their GitHub profile?',
            name:'gitHub',
            when:  (answers) => answers.role === engineerRole
        },
        {
            type: 'input',
            message: 'What is their school?',
            name:'school',
            when:  (answers) => answers.role === internRole
        },
        {
            type: 'confirm',
            message:'Add another employee?',
            name:'add_another'
        }
    ]);

    // Create object out of employee based on role

    if (answers.role === managerRole) {
        employees.push(new Manager(answers.id, answers.email, answers.name, answers.office_number))
    }

    if (answers.role === engineerRole) {
        employees.push(new Engineer(answers.id, answers.email, answers.name, answers.gitHub))
    }

    if (answers.role === internRole) {
        employees.push(new Intern(answers.id, answers.email, answers.name, answers.school))
    }

    // once the user says enough, we will generate html based on all the employees collected
    if (!answers.add_another) {

        // generate the html
        const html = generateHtml(employees)

        // write file from generated HTML & put it in the output folder
        fs.writeFileSync(outputHtmlFile, html, 'utf-8')
    
    } else {
        // If the user wasn't done yet, restart main() to add another employee
       await main();
    }
}

main();

