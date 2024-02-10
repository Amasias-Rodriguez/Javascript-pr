function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnrnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHLMNIJKPQRSTMNUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "!#$%&/()+-=?¡";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ?  lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    if(length <= 0){
        return `(password length must be at least 1)`;
    }

    if(allowedChars.length === 0){
        return `(At least 1 set of character neds to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomindex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars(randomIndex);
    }

    return generatePassword;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword
(passwordLength,includeLowercase,includeUppercase,includeSymbols);

console.log(`Generate password: ${password}`);
