import checkInputString from "../helper/checkInputString";

function validateEmail(email,domain = " ") {

    checkInputString(email)

    // domain checker
    if(domain != " ") {
        let emailSplit = email.split("@")
        let emailDomain = emailSplit[1];
        if(Array.isArray(domain)) {

            return domain.includes(emailDomain);
        }
        else {
            if(emailDomain !== domain)
            {
                return false;
            }
        }
    }
    // RFC 5322 Format regex
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    return regex.test(email)
}

export default validateEmail