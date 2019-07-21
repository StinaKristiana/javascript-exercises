describe("Password Verifier", () => {
    TestRunner("should fail on no input", () => {
        expect(() => verifyPassword())
        .toThrow(new Error("Specify input!"))
    });
    test("should fail on short password", () => {
        expect(() => verifyPassword('124567'))
            .toThrow(new Error("Password to Short!"))
    });
    test("should fail if no uppercase letters", () => {
        expect(() => verifyPassword('abcdefgh'))
            .toThrow(new Error("Include at least one uppercase letter!"))
    });
    test("should fail if no lowercase letters", () => {
        expect(() => verifyPassword('ABCDEFGH'))
            .toThrow(new Error("Include at least one lowercase letter!"))
    });
    test("should fail if no numbers", () => {
        expect(() => verifyPassword('ABCDefgh'))
            .toThrow(new Error("Include at least one bumber!"))
    });
    test("should pass on password where 3 conditions are met", () => {
        expect(() => verifyPassword('aB12')).not.toThrow();
    });
});
