import validInfo from "../src";

describe('checkPasswordStrength validation tests', () => { 
    it('check simple password WEAK_STRENGTH', () => {
        let password = "asnh32";
        let resultData = validInfo.checkPasswordStrength(password);

        expect(resultData).toBe(true);

    })

    it('check simple password wrong strength_level', () => {
        let password = "asnh32";
        let strength_level = "abcdef"
        expect(() => validInfo.checkPasswordStrength(password,strength_level)).toThrow(`strength_level must be WEAK_STRENGTH , MEDIUM_STRENGTH, STRONG_STRENGTH but recieved ${strength_level}`)

    })

    it('check simple password MEDIUM_STRENGTH failed', () => {
        let password = "asnh32";
        let resultData = validInfo.checkPasswordStrength(password,"MEDIUM_STRENGTH");

        expect(resultData).toBe(false);

    })

    it('check simple password MEDIUM_STRENGTH passed', () => {
        let password = "Ab@123";
        let resultData = validInfo.checkPasswordStrength(password,"MEDIUM_STRENGTH");

        expect(resultData).toBe(true);

    })

    it('check simple password STRONG_STRENGTH failed', () => {
        let password = "Ab@123";
        let resultData = validInfo.checkPasswordStrength(password,"STRONG_STRENGTH");

        expect(resultData).toBe(false);

    })

    it('check simple password STRONG_STRENGTH passed', () => {
        let password = "Abc@123$";
        let resultData = validInfo.checkPasswordStrength(password,"STRONG_STRENGTH");

        expect(resultData).toBe(true);

    })
})