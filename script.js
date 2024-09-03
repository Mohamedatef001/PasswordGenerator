function passwordGenerator(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    let allowedchar = "";
    let password = "";

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=-?~/";

    let firstCharAllowed = "";

    firstCharAllowed += includeLowercase ? lowercase : "";
    firstCharAllowed += includeUppercase ? uppercase : "";
    firstCharAllowed += includeNumbers ? numbers : "";

    allowedchar += firstCharAllowed;
    allowedchar += includeSymbols ? symbols : "";

    if (length <= 0) {
        return "(Length is less than Zero characters)";
    }
    if (allowedchar.length === 0 || firstCharAllowed.length === 0) {
        return "(At least one condition should be chosen)";
    }

    let index = Math.floor(Math.random() * firstCharAllowed.length);
    password += firstCharAllowed[index];

    for (let i = 1; i < length; i++) {
        index = Math.floor(Math.random() * allowedchar.length);
        password += allowedchar[index];
    }

    return password;
}

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

const button = document.getElementById("generate");
const passwordField = document.getElementById("Password");

button.addEventListener("click", event => {
    const password = passwordGenerator(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    passwordField.value = password;
});
