import checkInputString from "../helper/checkInputString";

const WEAK_STRENGTH = '';

const MEDIUM_STRENGTH = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');

const STRONG_STRENGTH = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

function checkPasswordStrength(password,strength_level = WEAK_STRENGTH) {

    if(strength_level != WEAK_STRENGTH || strength_level !== MEDIUM_STRENGTH || strength_level !== STRONG_STRENGTH) {
        throw new TypeError('strength_level must be WEAK_STRENGTH , MEDIUM_STRENGTH, STRONG_STRENGTH but recieved ', strength_level)
    }

    checkInputString(password)

    if(strength_level == WEAK_STRENGTH) {
        return true
    }
    return strength_level.test(password)

}

export default checkPasswordStrength