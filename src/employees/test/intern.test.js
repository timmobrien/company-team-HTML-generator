const Intern = require("../Intern")

describe('Intern test', () => {
    test('getSchool returns the school property', () => {

        const school = 'uwa'
        const dummy = new Intern(10, 'tim@tim.com', 'tim', 'uwa')

        result = dummy.getSchool();

        expect(result).toStrictEqual(school);
    })
    test ("getRole() will return 'Intern'", () => {

        const role = 'Intern';

        const dummy = new Intern(55,'tim@tim.com', 'tim', 'uwa');

        const result = dummy.getRole();

        expect(result).toStrictEqual(role);
    });
})