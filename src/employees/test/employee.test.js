const Employee = require("../Employee")

describe("Employee Test", () => {


    test("getName() will return the name property", () => {

        const name = "tim";

        const dummy = new Employee(1, 'tim@tim.com', 'tim');

        const result = dummy.getName();

        expect(result).toStrictEqual(name)
    })

    test ("getId() will return the id property", () => {
        const id = 55

        const dummy = new Employee(55,'tim@tim.com', 'tim');

        const result = dummy.getId();

        expect(result).toStrictEqual(id)
    })

    test ("getEmail() will return the email property", () => {
        const email = 'tim@tim.com'

        const dummy = new Employee(55,'tim@tim.com', 'tim');

        const result = dummy.getEmail();

        expect(result).toStrictEqual(email)
    })

    test ("getRole() will return 'Employee'", () => {
        const role = 'Employee'

        const dummy = new Employee(55,'tim@tim.com', 'tim');

        const result = dummy.getRole();

        expect(result).toStrictEqual(role);
    })
    
})