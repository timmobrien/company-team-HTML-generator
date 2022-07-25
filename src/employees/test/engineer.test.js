const Engineer = require("../Engineer")


describe('Engineer test', () => {

    test('getGitHub() will return the engineers github property', () => {
        const gitHub = 'timmobrien';

        const dummy = new Engineer(25,'tim@tim.com','Tim','timmobrien');

        const result = dummy.getGitHub();

        expect(gitHub).toStrictEqual(result);
    });

    test ("getRole() will override to 'Engineer'", () => {
        const role = 'Engineer'

        const dummy = new Engineer(55,'tim@tim.com', 'tim', 'timmobrien');

        const result = dummy.getRole();

        expect(result).toStrictEqual(role);
    });

})