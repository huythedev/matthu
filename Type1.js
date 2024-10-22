function caesarCipherEncrypt(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (text[i] !== ' ') {
            if (text[i] === text[i].toUpperCase()) {
                result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
            } else {
                result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
            }
        } else {
            result += ' ';
        }
    }
    return result;
}

function reverseText(text) {
    return text.split('').reverse().join('');
}

function decodeText() {
    const inputText = document.getElementById('inputText').value;
    const result = [];

    for (let shift = 1; shift <= 25; shift++) {
        const encodedText = caesarCipherEncrypt(inputText, shift);
        const reversedText = reverseText(encodedText);
        result.push(`${encodedText} - Reverse: ${reversedText}`);
    }

    updateOutput(result);
}
