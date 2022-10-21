import checkInputString from "../helper/checkInputString";
import { WEAK_STRENGTH , MEDIUM_STRENGTH,STRONG_STRENGTH} from "../helper/passwordStrengths";

const STRENGTH_ARRAY = ["WEAK_STRENGTH","MEDIUM_STRENGTH","STRONG_STRENGTH"]

function checkPasswordStrength(password,strength_level = "WEAK_STRENGTH") {
    if(!STRENGTH_ARRAY.includes(strength_level)) {
        throw new TypeError(`strength_level must be WEAK_STRENGTH , MEDIUM_STRENGTH, STRONG_STRENGTH but recieved ${strength_level}`)
    }

    checkInputString(password)

    if(strength_level === WEAK_STRENGTH) {
        return true
    }

    let strength_type;

    if(strength_level === "MEDIUM_STRENGTH") {
        strength_type = MEDIUM_STRENGTH
    }
    if(strength_level === "STRONG_STRENGTH") {
        strength_type = STRONG_STRENGTH
    }

    return strength_type.test(password)

}

export default checkPasswordStrength