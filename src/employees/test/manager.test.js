const Manager = require("../Manager")

describe('Manager test', () => {
    test("getOfficeNumber() will return the office number variable", () => {
        const officeNumber = "0499777048"

        const dummy = new Manager(10,"tim@tim.com","tim","0499777048")

        const result = dummy.getOfficeNumber();

        expect(result).toStrictEqual(officeNumber);
    })
    test ("getRole() will return 'Manager'", () => {
        const role = 'Manager'

        const dummy = new Manager(55,'tim@tim.com', 'tim', "0499777048");

        const result = dummy.getRole();

        expect(result).toStrictEqual(role);
    })
})