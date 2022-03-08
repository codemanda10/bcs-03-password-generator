const characterAmountRange = document.getElementById('characterAmountRange')
//connects the amount range to the document in html
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
//constant created from id created in html
const passwordDisplay = document.getElementById('passwordDisplay')

const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97, 122)
//Lowercase character codes (refferred from ASCII cheat sheet)
const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65, 90)
//Uppercase character codes (refferred from ASCII cheat sheet)
const NUMBER_CHAR_CODES = arrayFromLowtoHigh(48, 57)
//Number character codes (refferred from ASCII cheat sheet)
const SYMBOL_CHAR_CODES = arrayFromLowtoHigh(33, 47).concat(
        arrayFromLowtoHigh(58, 64)
).concat(
                        arrayFromLowtoHigh(91, 96)
).concat(
                        arrayFromLowtoHigh(123, 126)
)        


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)
//The above connects the amount number and range to a desired function

form.addEventListener('submit', e => {
        e.preventDefault()
        const characterAmount = characterAmountNumber.value
        const includeUppercase = includeUppercaseElement.checked
        const includeNumbers = includeNumbersElement.checked
        const includeSymbols = includeSymbolsElement.checked
        const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
        passwordDisplay.innerText = password
})
//Everytime we submit the form, this will stop from refreshing the browser
//
//const included all variables in the generation if selected
//all the variables needed to be pulled from CharacterAmountNumber
//selectors needed to be inputted too to respond to when checked

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
        String.fromCharCode(65)
        let charCodes = LOWERCASE_CHAR_CODES
        if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
        if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
        if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

        const passwordCharacters = [] //empty array
        for (let i = 0; i < characterAmount; i++) {
                const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
                passwordCharacters.push(String.fromCharCode(characterCode))
        }
        return passwordCharacters.join('')
}
//this string from charcode works out much easier and cleaner than inputting each character separately

function arrayFromLowtoHigh(low, high) {
        const array = []
        for (let i = low; i <= high; i++) {
                array.push(i)
        }
        return array
}
//this function generates the arrays automatically
//for loop added goes from low to high and adding one inbetween        

function syncCharacterAmount(e) {
        const value = e.target.value
        characterAmountNumber.value = value 
        characterAmountRange.value = value 
}
//the above is the function that allows the character count gauge when adjusted

