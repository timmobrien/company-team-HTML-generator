const Employee = require("./Employee");

// Subclass with school

class Intern extends Employee {

    constructor(id, email, name, school) {
        super(id, email, name);
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern';
    }

}

module.exports = Intern;