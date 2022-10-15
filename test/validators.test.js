import validInfo from "../src"

describe('Email Validation Tests', () => { 

    it("validating correct email", () => {
        let testEmail1 = "ashutoshthakur1409@gmail.com"
        console.log(validInfo.version)
        let resultData = validInfo.validateEmail(testEmail1);
        expect(resultData).toBe(true);
    })

    it("validating incorrect email", () => {
        let testEmail2 = "@ashutoshthakur1409gmail.123"
        console.log(validInfo.version)
        let resultData = validInfo.validateEmail(testEmail2);
        expect(resultData).toBe(false);
    })

    it("validating incorrect email", () => {
        let testEmail3 = `"  abcd egh lmonp   "@example.com`
        console.log(validInfo.version)
        let resultData = validInfo.validateEmail(testEmail3);
        expect(resultData).toBe(false);
    })
 })