import validInfo from "../src"

describe('Email Validation Tests', () => { 

    it("validating correct email", () => {
        let testEmail1 = "ashutoshthakur1409@gmail.com"
        let resultData = validInfo.validateEmail(testEmail1);
        expect(resultData).toBe(true);
    })

    it("validating incorrect email", () => {
        let testEmail2 = "@ashutoshthakur1409gmail.123"
        let resultData = validInfo.validateEmail(testEmail2);
        expect(resultData).toBe(false);
    })

    it("validating incorrect email", () => {
        let testEmail3 = `"  abcd egh lmonp   "@example.com`
        let resultData = validInfo.validateEmail(testEmail3);
        expect(resultData).toBe(false);
    })

    it("checking null case", () => {
        let testEmail4 = null;

        // let resultData = validInfo.validateEmail(testEmail4);

        expect(() => validInfo.validateEmail(testEmail4)).toThrow('Input must be string but recieved null');
    })

    it("checking email domain", () => {
        let testEmail5 = "ashutoshthakur1409@gmail.com";
        let testDomain = "gmail.com";

        let resultData = validInfo.validateEmail(testEmail5,testDomain);

        expect(resultData).toBe(true)
    })

    it("checking email domain not match", () => {
        let testEmail5 = "ashutoshthakur1409@gmail.com";
        let testDomain = "yahoo.com";

        let resultData = validInfo.validateEmail(testEmail5,testDomain);

        expect(resultData).toBe(false)
    })

    it("checking email domain array match", () => {
        let testEmail6 = "ashutoshthakur1409@gmail.com";
        let testDomain = ["yahoo.com","gmail.com"];

        let resultData = validInfo.validateEmail(testEmail6,testDomain);

        expect(resultData).toBe(true)
    })

    it("checking email domain array not match", () => {
        let testEmail7 = "ashutoshthakur1409@hotmail.com";
        let testDomain = ["yahoo.com","gmail.com"];

        let resultData = validInfo.validateEmail(testEmail7,testDomain);

        expect(resultData).toBe(false)
    })

    it("checking if input email is undefined", () => {
        let testEmail8 = undefined;

        expect(() => validInfo.validateEmail(testEmail8)).toThrow(`Input must be string but recieved undefined`)
    })

    it("checking if input email is undefined", () => {
        let testEmail8 = {};

        expect(() => validInfo.validateEmail(testEmail8)).toThrow(`Input must be string but recieved Object`)
    })
 })