function validateEmail(email,domain = " ") {

    if(email === null || email === undefined) {
        return false;
    }
    if(domain != " ") {
        let emailSplit = email.split("@")
        let emailDomain = emailSplit[1];

        if(emailDomain !== domain)
        {
            return false;
        }
    }
    // RFC 5322 Format regex
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    return regex.test(email)
}

export default validateEmail