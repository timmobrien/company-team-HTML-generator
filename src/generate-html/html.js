const fs = require('fs');
const path = require('path');

// Defining paths to templates
const cardTemplatePath = path.join(__dirname, 'templates', 'card.html')
const mainTemplatePath = path.join(__dirname, 'templates', 'main.html')

// Function that accepts an employee and creates HTML card string
function generateCard(employee) {
    // read the template
    const cardTemplate = fs.readFileSync(cardTemplatePath, 'utf-8');

    // Replace all the generic information
    let replaced = cardTemplate.replace('{{name}}', employee.getName())
        .replace('{{id}}', employee.getId())
        .replace('{{email}}', employee.getEmail())
        .replace('{{role}}', employee.getRole());
    // If there is a manager, replace attribute slot with phone number
    if (employee.getRole() === 'Manager') {
        replaced = replaced.replace('{{attr_key}}', 'Office Number')
            .replace('{{attr_value}}', employee.getOfficeNumber())
    }
    // If employee is an Engineer, un-hide the <a> tag and put their github in the href
    if (employee.getRole() === 'Engineer') {
        replaced = replaced.replace('d-none', '')
            .replace('{{gitHub}}', employee.getGitHub())
            // hide the p tag for other employee attributes
            .replace('{{attribute}}', 'd-none')
    }
    // If intern, replace attribute placeholder with school
    if (employee.getRole() === 'Intern') {
        replaced = replaced.replace('{{attr_key}}', 'School')
            .replace('{{attr_value}}', employee.getSchool())
    }

    // returns the replaced html card code
    return (replaced)



}
// Accepts the array of employees
function generateHtml(employees) {

    // Read the main html template
    const mainTemplate = fs.readFileSync(mainTemplatePath, 'utf-8')

    // Loop through each employee
    // Generate a card for each employee
    // Join all html strings together for a long string of cards
    const cards = employees.map(generateCard).join('');

    // replace {{body}} with the card string
    return mainTemplate.replace('{{body}}', cards)

}

// Export the html string
module.exports = generateHtml