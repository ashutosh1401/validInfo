export default function checkInputString(inputVal) {
    let isInputString = typeof inputVal === 'string' || inputVal instanceof String

    if(!isInputString) {

        let inputType = typeof inputVal

        // console.log(inputType,inputVal.constructor.name)

        if(inputVal === null) {
            inputType = 'null'
        }

        if(inputVal === undefined) {
            inputType = 'undefined'
        }

        if(inputType === "object") {
            inputType = inputVal.constructor.name
        }

        throw new TypeError(`Input must be string but recieved ${inputType}`)
    }
}