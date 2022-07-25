const Employee = require("../Employee")

describe("Employee Test", () => {
    // test the calling of employee functions
    // test that you need ID, name & role

    test("getName() will return the name property", () => {
        // Arrange -- prepare the env

        const name = "tim";

        const dummy = new Employee(1, 'tim@tim.com', 'tim');

        const result = dummy.getName();

        expect(result).toStrictEqual(name)
    })

    
})