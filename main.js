const reverseAndDisplay = () => {
    const input = document.getElementById('numberInput').value;
    const reversedNumber = reverseNumber(input);
    document.getElementById('resultParagraph').innerText = `Число у зворотному порядку цифр: ${reversedNumber}`;
}

const reverseNumber = (num) => {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    const reversedNum = parseInt(reversedStr, 10);
    return reversedNum;
}
//   ____________________________________________________________________________

function generatePassword() {
    const passwordLength = 12; 
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    let generatedPassword = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters.charAt(randomIndex);
    }

    document.getElementById("generatedPassword").textContent = generatedPassword;
}
//   ____________________________________________________________________________

const capitalizeAndDisplay = () => {
    const input = document.getElementById('stringInput').value;
    const capitalizedString = capitalizeFirstLetter(input);
    document.getElementById('resultParagraph').innerText = capitalizedString;
}

const capitalizeFirstLetter = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
// ________________________________ФОТО ВНИЗ____
function showAuthorInfo() {
    const authorInfo = document.getElementById('authorInfo');
    authorInfo.style.display = 'block';
}

function hideAuthorInfo() {
    const authorInfo = document.getElementById('authorInfo');
    authorInfo.style.display = 'none';
}


