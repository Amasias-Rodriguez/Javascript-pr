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

    return '';
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword
(passwordLength,includeLowercase,includeUppercase,includeSymbols);

console.log(`Generate password: ${password}`);
