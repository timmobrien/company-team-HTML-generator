const Employee = require("./Employee");

// Subclass with github information added

class Engineer extends Employee {

    constructor(id, email, name, gitHub) {
        super(id, email, name);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub
    }

    getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;